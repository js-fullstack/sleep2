const sleep = require('./index');

(async () => {
  console.log('begin');
  await sleep(3000);
  console.log('end');
})();