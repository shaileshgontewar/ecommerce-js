document.addEventListener("DOMContentLoaded", function () {
  let product = document.querySelector(".products");
  async function fetchData(url) {
    let data = await fetch(url);
    let response = await data.json();
    // console.log(response);

    for (let i = 0; i < response.length; i++) {
      let descri = response[i].description;
      let title = response[i].title;
      product.innerHTML += ` <div class="product position-relative">
      <img src="${response[i].image}" alt="" class="product_image">
      <span class="position-absolute top-2 right-3">  <i class="fa fa-heart"></i></span>
      <div class="content">
      <h6 class="p_title">${title.length > 20 ? title.slice(0, 20) : title}</h6>
      <small class="product_category">${response[i].category}</small>
      <p class="product_description">${
        descri.length > 20 ? descri.slice(0, 30) : descri
      }....</p>
      <div class="star text-center">
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
  </div>
      </div>
      <div class="price_container">
      <b class="product_price"> $${response[i].price}</b>
      <button class="btn_cart"><i class="fa-solid fa-cart-plus"></i></button>
      </div>
      </div>`;
    }
  }

  fetchData("https://fakestoreapi.com/products");
});
