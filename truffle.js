const path = require('path');

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "50"
    }
  },
  contracts_directory: path.join(__dirname, 'src', 'contracts'),
  contracts_build_directory: path.join(__dirname, 'build', 'contracts'),
  migrations_directory: path.join(__dirname, 'src', 'migrations'),
  test_directory: path.join(__dirname, 'src', 'tests')
};