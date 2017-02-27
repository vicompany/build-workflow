const fs = require('fs-extra');
const os = require('os');
const path = require('path');

const meow = require('meow');

const ACTION_START = 'start';
const ACTION_STOP = 'stop';
const COMPONENT_SEPARATOR = '/';

const cli = meow(`
  Usage
    $ now start|stop <timer>
  
  Examples
    $ now start "foo"
    $ now stop "foo"
`);

if (
  cli.input.length !== 2 ||
  (
    cli.input[0] !== ACTION_START &&
    cli.input[0] !== ACTION_STOP
  )
) {
  console.log(cli.help);
  process.exit(1);
}

const dir = os.tmpdir();
const file = path.join(dir, 'now', `${cli.input[1]}.log`);

const formatTime = (time) => `${time[0] + time[1] / 1e9}`;

switch (cli.input[0]) {
  case ACTION_START:
    const now = process.hrtime();

    fs.outputFile(file, now.join(COMPONENT_SEPARATOR), (err) => {
      if (err) {
        console.error(err);
        return;
      }
    });

    break;

  case ACTION_STOP:
    fs.readFile(file, (err, data) => {
      if (err) {
        console.error(err);
        return;
      }

      const now = process.hrtime();
      const diff = process.hrtime(data.toString().split(COMPONENT_SEPARATOR));

      console.log(`${formatTime(diff)} seconds`);

      fs.remove(file, (err) => {
        if (err) console.error(err);
      });
    });
    
    break;
}
