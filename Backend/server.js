
  
// Creating a new Promise
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve('Operation completed successfully!');
      } else {
        reject('Operation failed!');
      }
    }, 2000);
  });
  
  myPromise
    .then((message) => {
      console.log(message); 
    })
    .catch((error) => {
      console.error(error);
    });
  console.log('Waiting for the promise to resolve...');
  

  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve('Operation completed successfully!');
      } else {
        reject('Operation failed!');
      }
    }, 2000);
  });
  
  async function handlePromise() {
    try {
      const message = await myPromise;
      console.log(message);
    } catch (error) {
      console.error(error);
    }
  }
  
  console.log('Waiting for the promise to resolve...');
  handlePromise();
  

  // 'https://jsonplaceholder.typicode.com/users'