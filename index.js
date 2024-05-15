const { spawn } = require('child_process');

module.exports = async (req, res) => {
  const command = 'dig google.com';
  const child = spawn(command, { shell: true });
  let output = '';

  child.stdout.on('data', (data) => {
    output += data.toString();
  });

  child.stderr.on('data', (data) => {
    output += data.toString();
  });

  child.on('close', (code) => {
    res.status(200).send(output);
  });

  child.on('error', (err) => {
    res.status(500).send(err.message);
  });
};
