import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve, extname, sep } from 'node:path';

const root = fileURLToPath(new URL('../dist/', import.meta.url));
const port = Number(process.env.PORT || 3100);
const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.png': 'image/png', '.json': 'application/json' };
const server = http.createServer(async (req, res) => {
  if (!['GET', 'HEAD'].includes(req.method)) {
    res.writeHead(405, { Allow: 'GET, HEAD' }).end();
    return;
  }
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    const file = resolve(root, '.' + (pathname.endsWith('/') ? pathname + 'index.html' : pathname));
    if (!file.startsWith(resolve(root) + sep)) {
      res.writeHead(403).end('Forbidden');
      return;
    }
    const body = await readFile(file);
    res.writeHead(200, { 'Content-Type': `${types[extname(file)] || 'application/octet-stream'}; charset=utf-8`, 'Cache-Control': 'no-store' });
    res.end(req.method === 'HEAD' ? undefined : body);
  } catch (error) {
    res.writeHead(error.code === 'ENOENT' || error.code === 'EISDIR' ? 404 : 400).end('File not available');
  }
});
server.on('error', error => { console.error(error.message); process.exitCode = 1; });
server.listen(port, '127.0.0.1', () => console.log(`Preview: http://localhost:${port}`));
