# tut-webworker
Tut code for WebWorker
## API

### 主控端有这些操作

```js

/*
url = './task/worker.js';
url = URL.createObjectURL(new Blob(['(' + fn.toString() + ')()']));
*/
const worker = new Worker(url); // url: a file or a object-url, perfect!
worker.onmessage = function(e) { // 页面端响应message事件
  console.log(e.data);
}

worker.postMessage(5);
```

### worker定义:

```js
self.onmessage = e => {
  console.log(e.data);
  self.postMessage(fib(e.data));
};

function fib(n) {
  if(n < 1) {
    return 0;
  } else if(n < 3) {
    return 1;
  } else {
    return fib(n-1) + fib(n-2);
  }
}
```
