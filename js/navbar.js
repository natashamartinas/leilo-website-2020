var navbar = document.getElementById("navbar");

var navbarHTML ='<!-- Navbar -->\
<nav class="navbar navbar-expand-md navbar-gradient">\
    <a class="navbar-brand" href="/">\
        <img class="logo" src="images/logo.png">\
    </a>\
    <button class="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">\
        <span class="navbar-toggler-icon"></span>\
    </button>\
    \
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">\
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">\
            <li class="nav-item">\
                <a class="nav-link" href="shop">shop</a>\
            </li>\
            <li class="nav-item">\
                <a class="nav-link" href="story">our story</a>\
            </li>\
            <li class="nav-item">\
                <a class="nav-link" href="wholesale">wholesale</a>\
            </li>\
            <li class="nav-item">\
                <a class="nav-link" href="membership">membership</a>\
            </li>\
            <li class="nav-item">\
                <a class="nav-link" href="stores">locations</a>\
            </li>\
        </ul>\
        <ul class="navbar-nav ml-auto">\
            <li class="nav-item">\
            <button id="cart-btn" class="nav-link" data-toggle="modal" data-target="#cartModal">\
                <svg id="i-cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">\
                    <path d="M6 6 L30 6 27 19 9 19 M27 23 L10 23 5 2 2 2" />\
                    <circle cx="25" cy="27" r="2" />\
                    <circle cx="12" cy="27" r="2" />\
                </svg>\
            </a>\
            </li>\
        </ul>\
    </div>\
</nav>\
<!-- Modal -->\
<div class="modal fade" id="cartModal" tabindex="10000" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">\
    <div class="modal-dialog" role="document">\
        <div class="modal-content">\
            <div class="modal-header">\
            <h1 class="modal-title" id="exampleModalLabel">your cart</h5>\
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">\
                <span aria-hidden="true">&times;</span>\
            </button>\
            </div>\
            <div id="modal-body" class="modal-body">\
            </div>\
            <div class="modal-footer">\
                <h4 id="total" class="blue">total: $7.99</h1>\
                <button id="checkout-button" type="button" class="btn btn-leilo-checkout" data-dismiss="modal">check out</button>\
            </div>\
        </div>\
    </div>\
</div>';

navbar.innerHTML = navbarHTML;