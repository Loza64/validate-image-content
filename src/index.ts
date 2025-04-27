import { createServer } from 'http';
import { port, runing } from './config';
import app from './app';

const server = createServer(app);

server.listen(port, () => { runing(`on port: ${port}`) });