const promise = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
        resolve('success');
      } else {
        reject('error');
      }
     
    });
  
  // Case 1
  console.log('case 1:');
  console.log('dang chay promise 1');
  promise
    .then((data) => {
        setTimeout(() => {
            console.log('chay promise 1 thanh cong --> sau 1s');
        }, 1000);
      
      console.log('dang chay promise 2');
    })
    .then(() => {
        setTimeout(() => {
            console.log('success --> sau 1s');
        }, 1000);
      
    });
  
  // Case 2
  console.log('\ncase 2:');
  console.log('dang chay promise 1');
  promise
    .then((data) => {
        setTimeout(() => {
            console.log('chay promise 1 thanh cong --> sau 1s');
        }, 1000);
      console.log('dang chay promise 2');
    })
    .then(() => {
        setTimeout(() => {
            console.log('success --> sau 1s');
        }, 1000);
    })
    .catch((error) => {
      console.log(error);
    });
  
  // Case 3
  console.log('\ncase 3:');
  console.log('dang chay promise 1');
  promise
    .then((data) => {
        setTimeout(() => {
            console.log('chay promise 1 thanh cong --> sau 1s');
        }, 1000);
      console.log('dang chay recovery');
    //   return promise2(1000);
    })
    .then(() => {
        setTimeout(() => {
            console.log('chay recovery thanh cong --> sau 1s');
        }, 1000);
      console.log('dang chay promise 2');
    });
  
  // Case 4
  console.log('\ncase 4:');
  console.log('dang chay promise 1');
  promise
    .then((data) => {
        setTimeout(() => {
            console.log('chay promise 1 thanh cong --> sau 1s');
        }, 1000);
      console.log('dang chay recovery');
      throw new Error('error');
    })
    .catch((error) => {
      console.log('error');
    });