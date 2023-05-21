const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'Hi, changed some code. \n\n\nNode running at 8000! \n\nDeployed via AWS CodePipeline using blue green deployment on ec2.'
  res.end(msg);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
