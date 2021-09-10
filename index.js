var navLink = document.querySelector(`.nav-link`);
var logo = document.querySelector(`#drum-logo`);
var cartBtn = document.querySelector(`.add-to-cart`);
var chokerCart = document.querySelector(`#choker-kit-c`);
var chokerWL = document.querySelector(`#choker-kit-wl`);
var outsideCart = document.querySelector(`#outside-kit-c`);
var outsideWL = document.querySelector(`#outside-kit-wl`);
var shyawayCart = document.querySelector(`#shyaway-kit-c`);
var shyawayWL = document.querySelector(`#shyaway-kit-wl`);
var classicCart = document.querySelector(`#classic-kit-c`);
var classicWL = document.querySelector(`#classic-kit-wl`);
var chokersnareCart = document.querySelector(`#choker-snare-c`);
var chokersnareWL = document.querySelector(`#choker-snare-wl`);
var shyawaysnareCart = document.querySelector(`#shyaway-snare-c`);
var shyawaysnareWL = document.querySelector(`#shyaway-snare-wl`);
var rusticsnareCart = document.querySelector(`#rustic-snare-c`);
var rusticsnareWL = document.querySelector(`#rustic-snare-wl`);
var outsidesnareCart = document.querySelector(`#outside-snare-c`);
var outsidesnareWL = document.querySelector(`#outside-snare-wl`);
var cart = document.querySelector(`#cart`);
var signUpBtn = document.querySelector(`.sign-up-btn`);
var emailInput = document.querySelector(`#email-input`);
var signUpMessage = document.querySelector(`.email-sign-up`)
var wishCountText = document.querySelector(`#wish-count`);
var cartCountText = document.querySelector(`#cart-count`);
var footer = document.querySelector(`footer`);
var title = document.querySelector(`.title`);
var spin = document.querySelector(`.spin`);
var spun = document.querySelector(`#spun`);

var cartCount = 0;
var wishCount = 0;

function addToWishlist() {
  wishCount = wishCount + 1;
  if(wishCount === 1) {
    wishCountText.textContent = '1 Item'
  } else {
    wishCountText.textContent = wishCount + " Items"
  }
};

function addToCart() {
  cartCount = cartCount + 1;
  cartCountText.textContent = cartCount;
};

function emailSubmitHandler() {
  var confirmationMsg = document.createElement('p');
  confirmationMsg.textContent = "Thank you, " + emailInput.value + "! Deals and events are coming your way!" ;
  confirmationMsg.style.textAlign = "center";
  signUpMessage.remove();
  signUpBtn.remove();
  emailInput.remove();
  footer.appendChild(confirmationMsg);
};

function playTheDrums() {
        title.classList.toggle(`spin`)
};


chokerCart.addEventListener(`click`, addToCart);
chokerWL.addEventListener(`click`, addToWishlist);
outsideCart.addEventListener(`click`, addToCart);
outsideWL.addEventListener(`click`, addToWishlist);
shyawayCart.addEventListener(`click`, addToCart);
shyawayWL.addEventListener(`click`, addToWishlist);
classicCart.addEventListener(`click`, addToCart);
classicWL.addEventListener(`click`, addToWishlist);
chokersnareCart.addEventListener(`click`, addToCart);
chokersnareWL.addEventListener(`click`, addToWishlist);
shyawaysnareCart.addEventListener(`click`, addToCart);
shyawaysnareWL.addEventListener(`click`, addToWishlist);
rusticsnareCart.addEventListener(`click`, addToCart);
rusticsnareWL.addEventListener(`click`, addToWishlist);
outsidesnareCart.addEventListener(`click`, addToCart);
outsidesnareWL.addEventListener(`click`, addToWishlist);
signUpBtn.addEventListener(`click`, emailSubmitHandler);
logo.addEventListener(`click`, playTheDrums);
