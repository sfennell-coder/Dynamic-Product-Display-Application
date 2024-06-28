// U86364709 CC13

// 1.) Fetch and Display Products
document.addEventListener('DOMContentLoaded', () =>{
    let count = 0;
    function call(count){
        const request = fetch('https://course-api.com/react-store-products').then((response)=>{
            return response.json();
        }).then((data)=>{
            document.getElementById('#productName').textContent = `${data[count].name}`;
            document.getElementById('#productPicture').src = `${data[count].image}`;
            document.getElementById('#productPicture').width = '400';
            document.getElementById('#productDescription').textContent = `${data[count].description}`;
            document.getElementById('#productPrice').textContent = `Price: $${data[count].price}`;
        }).catch((err)=>{ // 2.) Improve Error handling
            console.log(`There seems to be an error. Make sure you are using a server! Ex. python, python3, or http-server. \n ${err}`);
            document.getElementById('#loadingMessage').textContent = 'Sorry, there was an error retrieving product data! Try again later.';
        }).finally(()=>{ // 3.)  Add loading state during data fetch
            console.log('No errors. Application should be successful. If data is not display, please leave a comment with the error!');
            document.getElementById('#loadingMessage').textContent= ''; // Removes error message from web page once successful!
        })
    }
})
