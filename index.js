function fetchProducts() {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        const returnResult = data.products.slice(0, 30);
        displayProducts(returnResult);
    });
}
fetchProducts()
function displayProducts(data) {
    const container = document.getElementById("deals");
    data.forEach((product) => {
      const card = document.createElement("div");
      card.classList.add("product-card");
      card.innerHTML = `
              <img src="${product.thumbnail}" alt="${product.name}" />
              <h2>${product.title}</h2>
              <div class='productPrice'>
              <p>${product.price}</p>
              <button>Add to cart</button>
              </div>
          `;
      container.appendChild(card);
    });
}