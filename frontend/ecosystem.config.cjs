module.exports = {
  apps: [{
    name: "framworks-development-site",
    script: "serve build", // or "server.js" if using Express
    args: "-s build -l 8081", // arguments for 'serve'
    env: {
      NODE_ENV: "production",
      PORT: 8081,
    },
  }],
};