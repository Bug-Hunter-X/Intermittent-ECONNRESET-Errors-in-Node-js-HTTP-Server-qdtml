const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.writeHead(200);

  // Handle potential errors during response writing
  response.on('error', (err) => {
    console.error('Error sending response:', err);
  });

  response.end(JSON.stringify({ message: 'Hello, World!' }));
};

const server = http.createServer(requestListener);

// Handle potential errors during server operation
server.on('error', (err) => {
  console.error('Server error:', err);
});

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});
