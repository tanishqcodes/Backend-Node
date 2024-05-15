const { spawn } = require('child_process');

module.exports = async (req, res) => {
  const command = 'ls';
  const child = spawn(command, { shell: true });
  let output = '';

  child.stdout.on('data', (data) => {
    output += data.toString();
  });

  child.stderr.on('data', (data) => {
    output += data.toString();
  });

  child.on('close', (code) => {
    res.status(200).json({ output }); // Sending output as JSON response
  });

  child.on('error', (err) => {
    res.status(500).json({ error: err.message }); // Sending error as JSON response
  });
};
