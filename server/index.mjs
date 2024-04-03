import fastify from 'fastify';
import fastifyStatic from '@fastify/static';
import { join } from 'path';

const server = fastify();

server.register(fastifyStatic, {
    root: join(process.cwd(), 'build'),
});
// server.get('/api/products', (request, reply) => {
//     reply.send(productsData);
// });

const port = process.env.PORT || 1212;
const host = process.env.HOST || 'localhost';

server.listen(port, host)
    .then((address) => {
        console.log('Server started at ' + address);
    })
    .catch(err => {
        console.error('Error starting server:', err);
    });
