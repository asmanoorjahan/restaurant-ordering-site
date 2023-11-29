const menu_items = [
    {
        name: "Pancakes",
        description: "kasdjf asdlfjas dfasdfkjasd;f",
        image: "/images/pancakes.jpeg",
        price: 15,
        food_type: "breakfast"
    },
    {
        name: "breakfast Two",
        description: "kasdjf asdlfjas dfasdfkjasd;f",
        image: "",
        price: 10,
        food_type: "breakfast"
    },
    {
        name: "breakfast Three",
        description: "kasdjf asdlfjas dfasdfkjasd;f",
        image: "",
        price: 10,
        food_type: "breakfast"
    },
    {
        name: "breakfast Four",
        description: "kasdjf asdlfjas dfasdfkjasd;f",
        image: "",
        price: 10,
        food_type: "breakfast"
    },
    {
        name: "lunch One ",
        description: "kasdjf asdlfjas dfasdfkjasd;f",
        image: "",
        price: 15,
        food_type: "lunch"
    },
    {
        name: "lunch Two ",
        description: "kasdjf asdlfjas dfasdfkjasd;f",
        image: "",
        price: 15,
        food_type: "lunch"
    },
    {
        name: "lunch Three ",
        description: "kasdjf asdlfjas dfasdfkjasd;f",
        image: "",
        price: 15,
        food_type: "lunch"
    },
    {
        name: "lunch Four ",
        description: "kasdjf asdlfjas dfasdfkjasd;f",
        image: "",
        price: 15,
        food_type: "lunch"
    },
    {
        name: "dinner One ",
        description: "kasdjf asdlfjas dfasdfkjasd;f",
        image: "",
        price: 15,
        food_type: "dinner"
    },
    {
        name: "dinner Two ",
        description: "kasdjf asdlfjas dfasdfkjasd;f",
        image: "",
        price: 15,
        food_type: "dinner"
    },
    {
        name: "dinner Three ",
        description: "kasdjf asdlfjas dfasdfkjasd;f",
        image: "",
        price: 15,
        food_type: "dinner"
    },
    {
        name: "dinner Four ",
        description: "kasdjf asdlfjas dfasdfkjasd;f",
        image: "",
        price: 15,
        food_type: "dinner"
    }
];

function getItemsHtml(itemslist) {
    let itemHtml = "";
    itemslist.forEach(item => {
        itemHtml = itemHtml +
            '<article class="menu-item">' +
            '<img src="' + item.image + '" class="photo" alt="menu item" />' +
            '<div class="item-info">' +
            '<header>' +
            '<h4>' + item.name + '</h4>' +
            '<h4 class="price">£' + item.price + '</h4>' +
            '</header>' +
            '<p class="item-text">' + item.description + '</p>' +
            '</div>' +
            '</article>';
    });
    return itemHtml;
}

const mainMenuItemArea = document.getElementById("mainMenuItemArea");
mainMenuItemArea.innerHTML = getItemsHtml(menu_items);

const allButton = document.getElementById("allButton");
const breakfastButton = document.getElementById("breakfastButton");
const lunchButton = document.getElementById("lunchButton");
const dinnerButton = document.getElementById("dinnerButton");

allButton.addEventListener("click", () => {
    mainMenuItemArea.innerHTML = getItemsHtml(menu_items);
});

breakfastButton.addEventListener("click",  () => {
    breakfastItems = menu_items.filter(item => item.food_type == 'breakfast');
    mainMenuItemArea.innerHTML = getItemsHtml(breakfastItems);
});

lunchButton.addEventListener("click",  () => {
    lunchItems = menu_items.filter(item => item.food_type == 'lunch');
    mainMenuItemArea.innerHTML = getItemsHtml(lunchItems);
});
dinnerButton.addEventListener("click",  () => {
    dinnerItems = menu_items.filter(item => item.food_type == 'dinner');
    mainMenuItemArea.innerHTML = getItemsHtml(dinnerItems);
});

