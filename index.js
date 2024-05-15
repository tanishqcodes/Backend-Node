const { exec } = require('child_process');

// Execute the dig command
exec('dig example.com', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error Here: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`dig command output:\n${stdout}`);
});