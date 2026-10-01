console.log("Request started..........");

 async function  getCatImage () {
    try{
        const response = await fetch("https://api.thecatapi.com/v1/images/search");
        const data = await response.json();
        console.log(data);
    } catch(error) {
        console.log("Error : ",error.message);
    }

}
getCatImage();

console.log("Request completed");

// const response = fetch("https://api.thecatapi.com/v1/images/search").then(
//     (response) => {
//       return response.json();
//     }).then((data) => {
//        console.log(data);
//     });
