const prodImg = sessionStorage.getItem('prodImg')
const prodName = sessionStorage.getItem("prodName");
const prodPrice = sessionStorage.getItem("prodPrice");

const container = document.querySelector('.main')

const prodDt = document.createElement('div')


prodDt.innerHTML = `
    <img src="${prodImg}" alt="">
    <div>${prodName}</div>
    <div>${prodPrice}</div>
`;

container.appendChild(prodDt);

document.getElementsByTagName