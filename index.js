const os = require('os');

module.exports = async (req, res) => {
  console.log('Operating System:', os.platform());
  res.status(200).send(`Operating System: ${os.platform()}`);
};