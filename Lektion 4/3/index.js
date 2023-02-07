let hack = document.querySelector(".hack");
let ul = document.querySelector(".json-test");

async function getAllProducts(url) {
  const res = await fetch(url);
  const data = await res.json();
  renderProductList(data);
}
function renderProductList(data) {
  rendered = data.map(renderProduct);
  ul.innerHTML = rendered.join("");
}
function renderProduct(product) {

  let list = `
    <li>
       <h3>${product.title} </h3>
  <h4> Kategori: ${product.category}  id: ${product.id}</h4>
  <p>Beskrivning ${product.description} ${product.title} </p>
  <p class="price">Pris: ${product.price} </p>
  <img src="${product.image}" alt="">
  </li>
  `;
  return list;
}

// function renderProductList(data) {
//   console.log("renderPlist   " + data);
//   ul.innerHTML = "";
//   const htmlArr = [];
//   data.forEach((product) => {
//     htmlArr.push(`
//        <li>
//        <h3>${product.title} </h3>
//   <h4> Kategori: ${product.category}  id: ${product.id}</h4>
//   <p>Beskrivning ${product.description} ${product.title} </p>
//   <p class="price">Pris: ${product.price} </p>
//   <img src="${product.image}" alt="">
//   </li>
//       `);
//   });
//   ul.innerHTML = htmlArr.join("");
// }

getAllProducts("https://fakestoreapi.com/products?sort=desc");

let menButton = document.querySelector(".men");
menButton.addEventListener("click", () => {
  ul.innerHTML = "";
  getAllProducts("https://fakestoreapi.com/products/category/jewelery");
});
let womenButton = document.querySelector(".women");
womenButton.addEventListener("click", () => {
  ul.innerHTML = "";
  getAllProducts("https://fakestoreapi.com/products/category/jewelery");
});
let elecButton = document.querySelector(".electronics");

elecButton.addEventListener("click", () => {
  ul.innerHTML = "";
  getAllProducts("https://fakestoreapi.com/products/category/electronics");
});
let jewelButton = document.querySelector(".jewelry");

jewelButton.addEventListener("click", () => {
  ul.innerHTML = "";
  getAllProducts("https://fakestoreapi.com/products/category/jewelery");
});
