const { spawn } = require('child_process');

exports.handler = async (event, context) => {
  const command = 'dig google.com';
  return new Promise((resolve, reject) => {
    const child = spawn(command, { shell: true });

    let output = '';
    child.stdout.on('data', (data) => {
      output += data.toString();
    });

    child.stderr.on('data', (data) => {
      output += data.toString();
    });

    child.on('close', (code) => {
      resolve({ statusCode: 200, body: output });
    });

    child.on('error', (err) => {
      reject({ statusCode: 500, body: err.message });
    });
  });
};
