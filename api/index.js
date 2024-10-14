const { createServer } = require('http');
const { parse } = require('url');
const { Server } = require('django-serverless');

const server = createServer(Server);

server.listen(process.env.PORT || 3000, () => {
    console.log('Server is running');
});
