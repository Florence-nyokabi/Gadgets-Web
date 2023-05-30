let userContainer=document.getElementById('deals')
const getProducts= ()=>{
   return fetch ('https://dummyjson.com/docs/products')
    .then(response => response.json())
    .then(response => response)
    .catch(error => error.message)
}
getProducts()
const displayProducts = async() => {
    const deals = await getProducts();
    console.log(deals.deals)
    deals.deals.map(item => { 
       let div = document.createElement('div')
       div.className = 'products';

       let img = document.createElement('img')
       let id = document.createElement('p')
       let description= document.createElement('h2')
       let price = document.createElement('p')
       let discountPercentage = document.createElement('p')
       let rating = document.createElement('p')
       let stock = document.createElement('p')
       let brand = document.createElement('p')
       let category = document.createElement('p')
       let thumbnail = document.createElement('p')

       img.src = item.image;
       id.innerHTML = item.id
       description.innerHTML = item.description
       price.innerHTML = item.price
       discountPercentage.innerHTML = discountPercentage.item
       rating.innerHTML = rating.item
       stock.innerHTML = stock.item
       brand.innerHTML = brand.item
       category.innerHTML = category.item
       thumbnail.innerHTML = thumbnail.item

       div.appendChild(img);
       div.appendChild(id);
       div.appendChild(description);
       div.appendChild(price);
       div.appendChild(discountPercentage);
       div.appendChild(rating);
       div.appendChild(stock);
       div.appendChild(brand);
       div.appendChild(category);
       div.appendChild(thumbnail)
       userContainer.appendChild(div)
    })
}
displayProducts()