document.addEventListener("DOMContentLoaded", function () {
  let product = document.querySelector(".products");
  async function fetchData(url) {
    try {
      let data = await fetch(url);
      let response = await data.json();
      for (let i = 0; i < response.length; i++) {
        let title = response[i].title;
        product.innerHTML += ` <div class="product position-relative">
        <img src="${response[i].image}" alt="" class="product_image">
        <div class="content">
        <h6 class="p_title">${
          title.length > 20 ? title.slice(0, 20) : title
        }</h6>
        <div class="star">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star-half-stroke"></i>
        </div>
        </div>
        <div class="price_container">
        <b class="product_price"> $${response[i].price}</b>
        <button class="btn_cart"><i class="fa-solid fa-cart-plus"></i></button>
        </div>
        </div>`;
      }
    } catch (err) {
      console.log(err.message);
    }
  }
  fetchData("https://fakestoreapi.com/products");
});
