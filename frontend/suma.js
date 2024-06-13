console.log("Hello, World!");

const someFunc = async () => {
    try {
        const response = await fetch("http://dog-api.kinduff.com/api/facts");
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error:", error.message);
    }
};

// const someFunc = () =>{
//     const response = fetch("http://dog-api.kinduff.com/api/facts")
//     console.log(response)
// }

someFunc();

console.log("End");


// console.log("Hello, World!");

// const someFunc = () => {
//   return new Promise((resolve, reject) => {
//     fetch("http://dog-api.kinduff.com/api/facts")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then((data) => {
//         console.log(data);
//         resolve(data);
//       })
//       .catch((error) => {
//         console.error("Error:", error.message);
//         reject(error);
//       });
//   });
// };

// someFunc()
//   .then(() => {
//     console.log("Promise resolved");
//   })
//   .catch((error) => {
//     console.error("Promise rejected:", error);
//   })
//   .finally(() => {
//     console.log("End");
//   });
