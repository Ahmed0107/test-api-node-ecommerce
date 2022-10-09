const API_URL = "https://node-ecommerce-api.onrender.com/api/products";

const main = document.getElementById("main");

getProduct(API_URL);

async function getProduct(url) {
  const res = await fetch(url);
  const data = await res.json();

  console.log(data);

  showProducs(data);
}

function showProducs(Products) {
  main.innerHTML = "";

  Products.forEach((ele) => {
    const { prodName, prodPrice, prodImg } = ele;

    const ProductEl = document.createElement("div");

    ProductEl.classList.add("product-container");

    ProductEl.addEventListener("click", () => {

      window.location.href = "details/detailes.html";

      sessionStorage.setItem("prodName", prodName);
      sessionStorage.setItem("prodPrice", prodPrice);
      sessionStorage.setItem("prodImg", prodImg);
    });

    ProductEl.innerHTML = ` 
            <img src="${prodImg}" alt="">
            <div class="prod-info">
                <div class="prod-name">${prodName}</div>
                <div class="prod-price">${prodPrice}$</div>
            </div>
    `;
    main.appendChild(ProductEl);
  });
}
