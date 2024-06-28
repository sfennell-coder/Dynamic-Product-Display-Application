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
        })
    }
})
