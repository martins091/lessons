
  
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


//   <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Async/Await Example</title>
// </head>
// <body>
//     <h1>Fetched Data</h1>
//     <ul id="data-list"></ul>

//     <script src="script.js"></script>
// </body>
// </html>


// Sample data
// const sampleData = [
//     { id: 1, name: 'Item 1', description: 'Description for Item 1' },
//     { id: 2, name: 'Item 2', description: 'Description for Item 2' },
//     { id: 3, name: 'Item 3', description: 'Description for Item 3' },
// ];

// // Simulating a fetch request with async/await
// async function fetchData() {
//     // Simulate a delay to mimic an API call
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(sampleData);
//         }, 1000);
//     });
// }

// // Function to display data in HTML
// async function displayData() {
//     const dataList = document.getElementById('data-list');
//     try {
//         const data = await fetchData();
//         const listItems = data.map(item => `<li>${item.name}: ${item.description}</li>`).join('');
//         dataList.innerHTML = listItems;
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }

// // Call the displayData function to fetch and display data
// displayData();


// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>User Data Fetch Example</title>
//     <link rel="stylesheet" href="styles.css"> <!-- Link to the external CSS file -->
// </head>
// <body>
//     <h1>User Data</h1>
//     <ul id="user-list"></ul>

//     <script src="script.js"></script>
// </body>
// </html>

// body {
//     font-family: Arial, sans-serif;
//     background-color: #f4f4f4;
//     color: #333;
//     margin: 0;
//     padding: 20px;
// }

// h1 {
//     text-align: center;
//     color: #007BFF;
// }

// #user-list {
//     list-style-type: none;
//     padding: 0;
// }

// #user-list li {
//     background: #fff;
//     margin: 10px 0;
//     padding: 15px;
//     border-radius: 5px;
//     box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
//     transition: background 0.3s;
// }

// #user-list li:hover {
//     background: #e7f1ff;
// }

// Function to fetch user data from JSONPlaceholder
// async function fetchUserData() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     if (!response.ok) {
//         throw new Error('Network response was not ok');
//     }
//     return response.json();
// }

// // Function to display user data in HTML
// async function displayUserData() {
//     const userList = document.getElementById('user-list');
//     try {
//         const users = await fetchUserData();
//         const listItems = users.map(user => `<li>${user.name} - ${user.email}</li>`).join('');
//         userList.innerHTML = listItems;
//     } catch (error) {
//         console.error('Error fetching user data:', error);
//         userList.innerHTML = '<li>Error fetching user data. Please try again later.</li>';
//     }
// }

// // Call the displayUserData function to fetch and display user data
// displayUserData();
