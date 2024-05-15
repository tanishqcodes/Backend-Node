const { exec } = require('child_process');

// Execute the tracert command
exec('tracert example.com', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`tracert command output:\n${stdout}`);
});
