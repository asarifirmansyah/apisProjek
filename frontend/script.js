const pageSlider = document.querySelectorAll("#pageLiquit");
const pageSlideProduct = document.querySelectorAll("#page");

const LiquitProduct = document.getElementById("first-product");
const Product = document.getElementById("product");

let indexProduct = 0;
pageSlideProduct.forEach((page, i) => {
  page.addEventListener("click", () => {
    pageSlideProduct[indexProduct].classList.remove("bg-black", "text-white");
    page.classList.add("bg-black", "text-white");

    indexProduct = i;
    console.log(indexProduct);
    if (indexProduct === 0) {
      Product.style.marginLeft = "0px";
    } else if (indexProduct === 1) {
      Product.style.marginLeft = "-50%";
    } else if (indexProduct === 2) {
      Product.style.marginLeft = "-100%";
    } else if (indexProduct === 3) {
      Product.style.marginLeft = "-150%";
    }
  });
});

let index = 0;
pageSlider.forEach((page, i) => {
  page.addEventListener("click", () => {
    pageSlider[index].classList.remove("bg-black", "text-white");
    page.classList.add("bg-black", "text-white");

    index = i;
    if (index === 0) {
      LiquitProduct.style.marginLeft = "0px";
    } else if (index === 1) {
      LiquitProduct.style.marginLeft = "-50%";
    } else if (index === 2) {
      LiquitProduct.style.marginLeft = "-100%";
    } else if (index === 3) {
      LiquitProduct.style.marginLeft = "-150%";
    }
  });
});
