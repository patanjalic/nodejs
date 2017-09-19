console.log('start program');

setTimeout(() => console.log('callback 1'),2000);
setTimeout(() => console.log('callback 2'),0);
setTimeout(() => console.log('callback 3'),1000);
setTimeout(() => console.log('callback 4'),2000);
console.log('end program');
