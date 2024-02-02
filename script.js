const mainMenuItemArea = document.getElementById("mainMenuItemArea");

myitems = [
    {
        name: "Pancakes",
        description: " Gently sweet, buttery and nutty with a light soft and fluffy inside.",
        image: "/images/pancakes.jpeg",
        price: 15,
        food_type: "breakfast"
    },
    {
        name: "Porridge",
        description: "Creamy and sweet. Porridge goes perfectly with a handful of fruit such as berries.",
        image: "/images/porridge.avif",
        price: 10,
        food_type: "breakfast"
    },
    {
        name: " Waffles",
        description: "Crispy and golden brown on the outside with an airy inside. It is sweet. ",
        image: "/images/Waffles.avif",
        price: 10,
        food_type: "breakfast"
    },
    {
        name: "French Toast",
        description: "Sweet and crispy this toast goes perfect with some chocolate, a dollop of whipped cream with a handful of fruit.",
        image: "/images/FrenchToast.avif",
        price: 10,
        food_type: "breakfast"
    },
    {
        name: "Sandwich ",
        description: "Two slices of bread with lettuce and other ingredients inbetween. Can be served cold or hot.",
        image: "images/sandwich.avif",
        price: 10,
        food_type: "lunch"
    },
    {
        name: "Biryani ",
        description: "A delicious rice dish peppered with scrumptious spices like saffron and cumin and further layered with spiced meat.",
        image: "images/biryani.avif",
        price: 10,
        food_type: "lunch"
    },
    {
        name: "Rice with curry ",
        description: "Delicious and spicy chiken curry served hot with white rice. ",
        image: "images/riceWithCurry.avif",
        price: 12,
        food_type: "lunch"
    },
    {
        name: "pasta ",
        description: "A salty, spicy food with sauces and seasonings.",
        image: "images/pasta.avif",
        price: 10,
        food_type: "lunch"
    },
    {
        name: "chicken ",
        description: "Spicy, juicy and amaizing. Chicken is used for a variety of dishes",
        image: "images/chicken.avif",
        price: 15,
        food_type: "dinner"
    },
    {
        name: "Rice with Prawns ",
        description: "Prawns are seafood and taste very nice. With rice it is an explosion of tastes in your mouth.",
        image: "images/riceWithPrawns.avif",
        price: 15,
        food_type: "dinner"
    },
    {
        name: "Indian Thali ",
        description: "A plate with a lot of indian food. From spicy to salty and much more enjoy this wonderful dish mix.",
        image: "images/IndianThali.avif",
        price: 15,
        food_type: "dinner"
    },
    {
        name: "Salad Bowl ",
        description: "Squeeze a bit of lemmon and seoson it. It will taste delicious.",
        image: "images/saladBowl.avif",
        price: 15,
        food_type: "dinner"
    }
]

function getOrder() {
    if(localStorage.getItem("myorder") == null) {
        console.log("settng empty order in localstorage");
        emptyarray = [];
        setOrder(emptyarray);
    }
    return JSON.parse(localStorage.getItem("myorder"));
}

function setOrder(newOrder) {
    localStorage.setItem('myorder', JSON.stringify(newOrder));
}

// Set the order cart with currently ordered items
availableOrder = getOrder();
console.log("---> " + typeof(availableOrder));
availableOrder.forEach(orderItem => addItemsToCartView(orderItem));
updateCartTotal();

function createHtmlForItems(itemlist) {
    itemlisthtml = "";
    itemlist.forEach(item => {
        itemlisthtml = itemlisthtml + '<article class="menu-item">' +
            '<img src=' + item.image + ' class="photo" alt="menu item" />' +
            '<div class="item-info">' +
            '<header>' +
            '<h4 class="menu-item-name">' + item.name + '</h4>' +
            '<h4 class="price">£' + item.price + '</h4>' +
            '</header>' +
            '<p class="item-text">' + item.description + '</p>' +
            '<button type="button" id="Addtoorders" class="order-btn" onclick="addToCart(event)"> Add to orders</button>' +
            '</div>' +
            '</article>'
            ;
    });
    return itemlisthtml;
}

// Render all items on initial load of page.
mainMenuItemArea.innerHTML = createHtmlForItems(myitems);

function showallitems() {
    mainMenuItemArea.innerHTML = createHtmlForItems(myitems);
}

function showbreakfastitems() {
    mybreakfastitems = myitems.filter(item => item.food_type == "breakfast");
    mainMenuItemArea.innerHTML = createHtmlForItems(mybreakfastitems);
}
function showlunchitems() {
    mylunchitems = myitems.filter(item => item.food_type == "lunch");
    mainMenuItemArea.innerHTML = createHtmlForItems(mylunchitems);
}
function showditems() {
    mydinneritems = myitems.filter(item => item.food_type == "dinner");
    mainMenuItemArea.innerHTML = createHtmlForItems(mydinneritems);
}

function addToCart(event) {
    console.log("Add to cart button clicked");
    var button = event.target;
    console.log(button);
    var dishArticle = button.parentElement.parentElement;
    console.log(dishArticle)
    dishImageSource = dishArticle.getElementsByClassName("photo")[0].src;
    dishName = dishArticle.getElementsByClassName("menu-item-name")[0].innerHTML;
    dishPriceString = dishArticle.getElementsByClassName("price")[0].innerHTML;
    dishPrice = parseFloat(dishPriceString.replace("£",""));
    console.log(dishPrice);
    
    mycartitems = getOrder();
    dishInCart = mycartitems.filter(item => item.name == dishName);
    console.log(dishInCart);
    if (dishInCart.length == 0) {
        cartItem = { name: dishName, image: dishImageSource, price: dishPrice, quantity: 1}
        mycartitems.push(cartItem)
        addItemsToCartView(cartItem)
    } else {
        alert("Item already in cart. Please increase the quantity from cart if you want more!")
    }

    console.log(mycartitems);
    setOrder(mycartitems)
    updateCartTotal();

    

    // article
    //      img (src)
    //      div
    //          header -> h4(name), h4(price)
    //          p
    //          button 

}

function addItemsToCartView(cartItem) {
    var cartRow = document.createElement('tr');
    cartRow.classList.add('cart-row');
    var cartItems = document.getElementsByClassName('cart-items')[0];
    
    var cartRowContents = `
        <td class="cart-item cart-column">
            <img class="cart-item-image" src="${cartItem.image}" width="50" height="50">
            <span class="cart-item-title">${cartItem.name}</span>                  
        </td>
        <td class="cart-item cart-column">
            <span class="cart-price cart-column">${cartItem.price}</span>
        </td>
        <td class="cart-item cart-column">
            <input class="cart-quantity-input" type="number" value=${cartItem.quantity} style="width: 50px">
            <button class="btn btn-danger" type="button">Remove</button>
        </td>        
    `;
     
            
    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow);
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem);
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', handleQuantityUpdate)
}

function updateCartTotal(){
    console.log("updateCartTotal invoked")
    mycartitems = getOrder();
    console.log(mycartitems);
    var total = 0;
    mycartitems.forEach( cartItem => {
        console.log("updateCartTotal - Item : " + cartItem);
        total = total + (cartItem.price * cartItem.quantity);
    });
    console.log("updateCartTotal - Total " + total);
    document.getElementsByClassName('cart-total-price')[0].innerText = '£ '+ total ;
}

function removeCartItem(event) {
    console.log("Remove Cart Item Pressed---->")
    cartItemHtml = event.target.parentElement.parentElement;
    cartItemName = cartItemHtml.getElementsByClassName("cart-item-title")[0].innerHTML;
    mycartitems = getOrder();
    indexToRemove = mycartitems.findIndex(i => i.name == cartItemName);
    console.log("Index to remove ---> " + indexToRemove);
    mycartitems.splice(indexToRemove, 1);
    setOrder(mycartitems);
    updateCartTotal();
    cartItemHtml.remove();
}

function handleQuantityUpdate(event) {
    console.log("handleQuantityUpdate Started ---> ")
    cartItemHtml = event.target.parentElement.parentElement;
    console.log(cartItemHtml);
    cartItemName = cartItemHtml.getElementsByClassName("cart-item-title")[0].innerHTML;
    console.log(cartItemName);
    mycartitems = getOrder();
    cartItem = mycartitems.filter(i => i.name == cartItemName)[0]
    cartItem.quantity = event.target.value;
    setOrder(mycartitems);
    console.log("Quantity of Cart Item changed for " + cartItemName + " to -> " + event.target.value)
    updateCartTotal();
}
