# sleep2
Aysnc sleep, can be used on ES6+ (async/await)

## install
npm install sleep2


## sample
const sleep = require('sleep2');

```
(async () => {
  console.log('begin');
  await sleep(3000);
  console.log('end');
})();
```

