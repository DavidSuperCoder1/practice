"use strict";

var menuCategories = [{
  id: 1,
  name: "Most Popular"
}, {
  id: 2,
  name: "Appetizer"
}, {
  id: 3,
  name: "Main Dish"
}, {
  id: 4,
  name: "Soup"
}, {
  id: 5,
  name: "Salad"
}, {
  id: 6,
  name: "Hot Dish"
}, {
  id: 7,
  name: "Drink"
}, {
  id: 8,
  name: "Dessert"
}];
var menus = [{
  id: 1,
  name: "Mont Him Khar",
  description: "Burmese rice noodle soup with fish and soft banana plant",
  price: 1000,
  assetUrl: "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701844433945_mohinga.jpg",
  assetUrl2: "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/mohinga.jpg",
  menuCategoryIds: [1, 4, 6]
}, {
  id: 2,
  name: "Shan Kout Swell",
  description: "Shan noodle with chicken and Mustard",
  price: 2000,
  assetUrl: "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701873747360_shan.jpg",
  assetUrl2: "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/shan.jpg",
  menuCategoryIds: [1, 5, 3]
}, {
  id: 3,
  name: "Laphet Tote",
  description: "Tea-leaf salad with mixed fries beans and nuts",
  price: 1500,
  assetUrl: "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701844451016_laphet.jpg",
  assetUrl2: "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/laphettote.jpg",
  menuCategoryIds: [1, 2, 5]
}, {
  id: 4,
  name: "Ohn Noe Kout Swell",
  description: "Rice noodle wtih coconut milk and chicken",
  price: 1500,
  assetUrl: "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701875560465_ohnoe.jpg",
  assetUrl2: "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/ohnoe.jpg",
  menuCategoryIds: [1, 2, 5]
}, {
  id: 5,
  name: "NanGyi Tote",
  description: "Noddle salad with chicken curry and  egg ",
  price: 1500,
  assetUrl: "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701844722576_nangyi.jpg",
  assetUrl2: "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/nangyi.jpg",
  menuCategoryIds: [1, 2, 5]
}, {
  id: 6,
  name: "Tofu Nway",
  description: " Shan style Tofu soup.",
  price: 3500,
  assetUrl: "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701875627104_tofunway.jpg",
  assetUrl2: "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/tofunway.jpg",
  menuCategoryIds: [1, 3, 6]
}, {
  id: 7,
  name: "Tamin Si San",
  description: "Rice with peanut oil and yellow peas",
  price: 500,
  assetUrl: "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701846134044_photo-520.jpg",
  assetUrl2: "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/rice1.jpg",
  menuCategoryIds: [2, 8]
}, {
  id: 8,
  name: "Si Tamin",
  description: "Sticky rice with fries-dry-fish and coconut chip",
  price: 1000,
  assetUrl: "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701873644110_sitamin.jpg",
  assetUrl2: "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701873644110_sitamin.jpg",
  menuCategoryIds: [2, 8]
}, {
  id: 9,
  name: "Akyaw Sone",
  description: "Fries mixed vegetables with rice-powder,serve with tamarind sauce",
  price: 3000,
  assetUrl: "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701846333050_AKyawSone-7ef8e742b8c74aebb8fc4aff087f3fca.jpg",
  assetUrl2: "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/akyaw.jpeg",
  menuCategoryIds: [2]
}, {
  id: 10,
  name: "Mont lin mayer",
  description: " Burmese pancake (couple) with peanuts and salted Sesame",
  price: 1500,
  assetUrl: "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701873714161_lmy.jpg",
  assetUrl2: "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/lmy.jpg",
  menuCategoryIds: [2, 8]
}, {
  id: 11,
  name: "Mont Kywel Thel",
  description: "Burmese sticky brown cake with coconut chip",
  price: 2000,
  assetUrl: "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701875598596_mont1.jpg",
  assetUrl2: "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/mont1.jpg",
  menuCategoryIds: [8]
}, {
  id: 12,
  name: "Shwe Yin Aye",
  description: "Mixed gelly with sweet coconut milk",
  price: 2500,
  assetUrl: "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701874351631_kout.jpg",
  assetUrl2: "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/shweyinaye.jpeg",
  menuCategoryIds: [7, 8]
}, {
  id: 13,
  name: "Cho Saint",
  description: "Burmese tea with cream and evaporated milk",
  price: 1500,
  assetUrl: "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701874461625_tea.jpg",
  assetUrl2: "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/tea.jpg",
  menuCategoryIds: [1, 2, 7]
}, {
  id: 14,
  name: "Kaw Pyan Late",
  description: "Spring-roll with vegerables inside",
  price: 1500,
  assetUrl: "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701845271896_sproll.jpg",
  assetUrl2: "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/sproll.jpg",
  menuCategoryIds: [2]
}, {
  id: 15,
  name: "Ham & Cheese Sandwish",
  description: "Grilled ham and cheese sandwish",
  price: 2500,
  assetUrl: "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701845289327_hcsand.jpg",
  assetUrl2: "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/hcsand.jpg",
  menuCategoryIds: [2]
}, {
  id: 16,
  name: "Boil Eggs",
  description: "Boil eggs ",
  price: 1500,
  assetUrl: "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701874413116_egg.jpeg",
  assetUrl2: "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/egg.jpeg",
  menuCategoryIds: [2, 6]
}, {
  id: 16,
  name: "B.E.T",
  description: "fries eggs with bacon and tomato",
  price: 2000,
  assetUrl: "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701845325397_bet.jpg",
  assetUrl2: "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/bet.jpg",
  menuCategoryIds: [2]
}, {
  id: 17,
  name: "DTH steak",
  description: "Grilled Pork steak with flat chip ",
  price: 5500,
  assetUrl: "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701873772313_steak1.png",
  assetUrl2: "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/steak1.jpg",
  menuCategoryIds: [3]
}, {
  id: 18,
  name: "Tomato soup",
  description: "Classic tomato soup with gallic-bread ",
  price: 1500,
  assetUrl: "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701874480687_tmtsoup.jpg",
  assetUrl2: "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/tmtsoup.jpg",
  menuCategoryIds: [2, 4]
}, {
  id: 19,
  name: "Tomato Cream soup",
  description: "Tomato soup with cream and orzo-basil",
  price: 1500,
  assetUrl: "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701875540559_029e34723a299a9706ab58d1c635cb16.jpg",
  assetUrl2: "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/tmt2.jpg",
  menuCategoryIds: [2, 4]
}, {
  id: 20,
  name: "Mushroom soup",
  description: "Mushroom soup with milk cream and sinamon",
  price: 1500,
  assetUrl: "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701874496814_msc.jpg",
  assetUrl2: "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/msc.jpg",
  menuCategoryIds: [2, 4]
}, {
  id: 21,
  name: "Carrot Soup",
  description: "Carrot soup with white cream ",
  price: 1500,
  assetUrl: "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701844158661_carrot.jpg",
  assetUrl2: "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/carrot.jpg",
  menuCategoryIds: [2, 4]
}, {
  id: 22,
  name: "Rice Soup",
  description: "Rice soup with chicken ",
  price: 1500,
  assetUrl: "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701874987989_Screenshot%202023-12-06%20220254.png",
  assetUrl2: "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/rsoup1.jpg",
  menuCategoryIds: [2, 4]
}, {
  id: 23,
  name: "Orange Juice",
  description: "Fresh orange juice with orange slice",
  price: 1000,
  assetUrl: "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701875076205_Screenshot%202023-12-06%20220417.png",
  assetUrl2: "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/orange.jpg",
  menuCategoryIds: [7]
}, {
  id: 24,
  name: "Watermelon Juice",
  description: "Fresh Watermelon juice with Watermelon slice",
  price: 1000,
  assetUrl: "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701875441618_85649244ed9724c534d1ba28656745c8.jpg",
  assetUrl2: "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/wm.jpg",
  menuCategoryIds: [7]
}, {
  id: 25,
  name: "Avocado Juice",
  description: "Fresh Avocado juice with Avocados",
  price: 2000,
  assetUrl: "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701845343058_juice1.jpg",
  assetUrl2: "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/juice1.jpg",
  menuCategoryIds: [7]
}, {
  id: 26,
  name: "stewberry Juice",
  description: "Fresh stewberry juice with stewberry",
  price: 1000,
  assetUrl: "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701873686537_stew.png",
  assetUrl2: "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/stew.png",
  menuCategoryIds: [7]
}, {
  id: 27,
  name: "Tamarind Juice",
  description: " Tamarind juice with burmese brown sugar",
  price: 1000,
  assetUrl: "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701875102003_tamarind.jpg",
  assetUrl2: "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/tamarind.jpg",
  menuCategoryIds: [7]
}, {
  id: 28,
  name: "French Fries",
  description: "serve with Mayonnaise and Ketchup",
  price: 1500,
  assetUrl: "https://msquarefdc.sgp1.digitaloceanspaces.com/foodie-pos/msquarefdc/1701886026173_french-fries.jpg",
  assetUrl2: "https://raw.githubusercontent.com/Aungmyanmar32/menu-api-images/main/ff.jpg",
  menuCategoryIds: [1, 2]
}];
var addons = [{
  id: 1,
  name: "Normal",
  price: 0,
  addonCategoryId: 1
}, {
  id: 2,
  name: "Big",
  price: 500,
  addonCategoryId: 1
}, {
  id: 3,
  name: "Extra Big",
  price: 700,
  addonCategoryId: 1
}, {
  id: 4,
  name: "Normal",
  price: 0,
  addonCategoryId: 2
}, {
  id: 5,
  name: "No spicy",
  price: 0,
  addonCategoryId: 2
}, {
  id: 6,
  name: "More spicy",
  price: 0,
  addonCategoryId: 2
}, {
  id: 7,
  name: "Egg Slice",
  price: 300,
  addonCategoryId: 3
}, {
  id: 8,
  name: "Sausage",
  price: 300,
  addonCategoryId: 3
}, {
  id: 9,
  name: "Fried beans",
  price: 200,
  addonCategoryId: 3
}, {
  id: 10,
  name: "Egg",
  price: 300,
  addonCategoryId: 4
}, {
  id: 11,
  name: "Meat",
  price: 300,
  addonCategoryId: 4
}, {
  id: 12,
  name: "Rice",
  price: 300,
  addonCategoryId: 4
}, {
  id: 13,
  name: "Coke",
  price: 300,
  addonCategoryId: 5
}, {
  id: 14,
  name: "Pepsi",
  price: 300,
  addonCategoryId: 5
}, {
  id: 15,
  name: "Sprite",
  price: 300,
  addonCategoryId: 5
}, {
  id: 16,
  name: "medium",
  price: 0,
  addonCategoryId: 6
}, {
  id: 17,
  name: "medium well-done",
  price: 0,
  addonCategoryId: 6
}, {
  id: 18,
  name: "well-done",
  price: 0,
  addonCategoryId: 6
}];
var menuCategoriesDisplayed = false;
var menuCategoriesDiv = [];

/*****************************************To Filter Menu Catergory**********************************************/

var callMenuCategories = function callMenuCategories() {
  menuAreDisplayed = false;
  var displayMenu = document.querySelector('.displayMenu');
  displayMenu.innerHTML = "";
  displayMenu.style.display = 'none';
  var displayMenuCate = document.querySelector('.snd-main');
  displayMenuCate.style.display = "flex";
  if (!menuCategoriesDisplayed) {
    menuCategories.forEach(function (menuCate) {
      var menuCategoriesContainer = document.createElement('div');
      menuCategoriesContainer.classList.add('menuCateContain');
      menuCategoriesContainer.id = "".concat(menuCate.id);
      var id = menuCategoriesContainer.id;
      menuCategoriesDiv.push(Number(id));
      // console.log(menuCate);
      console.log(menuCategoriesContainer.id);
      var categoriesName = document.createElement('h3');
      categoriesName.setAttribute("tabindex", "0"); // in order to be able to css hover
      categoriesName.textContent = menuCate.name;
      menuCategoriesContainer.appendChild(categoriesName);
      displayMenuCate.appendChild(menuCategoriesContainer);
    });
    // console.log(displayMenuCate.children.length)
    var _loop = function _loop(i) {
      displayMenuCate.children[i].addEventListener('click', function () {
        displayMenuCate.style.display = 'none';
        displayMenu.style.display = "flex";
        filterMenu(Number(displayMenuCate.children[i].id));
      });
    };
    for (var i = 0; i < displayMenuCate.children.length; i++) {
      _loop(i);
    }
    menuCategoriesDisplayed = true;
  }
};

/*****************************************To Filter Menus**********************************************/
var filterMenu = function filterMenu(categoryId) {
  var itemIncluded = menus.filter(function (menuitem) {
    var _menuitem$menuCategor;
    return (_menuitem$menuCategor = menuitem.menuCategoryIds) === null || _menuitem$menuCategor === void 0 ? void 0 : _menuitem$menuCategor.includes(categoryId);
  });
  console.log(itemIncluded);
  if (itemIncluded) {
    menulist(itemIncluded);
  }
};

/*****************************************To Display all Menus**********************************************/

var menuAreDisplayed = false;
var allMenu = function allMenu() {
  var displayMenuCate = document.querySelector('.snd-main');
  displayMenuCate.style.display = "none";
  if (!menuAreDisplayed) {
    var displayMenu = document.querySelector('.displayMenu');
    displayMenu.innerHTML = "";
    displayMenu.style.display = 'flex';
    menulist(menus);
  }
  menuAreDisplayed = true;
};
window.onload = function () {
  allMenu(); // Call the function when the window is loaded or refreshed
};

/*****************************************To Display Called Menus**********************************************/

var menulist = function menulist(itmeIncluded) {
  var displayMenu = document.querySelector('.displayMenu');
  itmeIncluded.map(function (menuId) {
    var menu_card = document.createElement('div');
    menu_card.classList.add('menu-card');
    var forDescription = document.createElement('div');
    forDescription.classList.add('forDescription');

    // Create a new image element for each menu item
    var figure = document.createElement('figure');
    var img = document.createElement('img');
    img.id = 'myImage';
    var imgUrl = menuId.assetUrl || ''; // as string ဆိုလည်းအမှားမပြ// providing default value
    img.src = imgUrl;
    figure.appendChild(img);
    var description = document.createElement('div');
    description.classList.add('description');
    var descrip_header = document.createElement('div');
    descrip_header.classList.add('descrip-header');
    var name = document.createElement('h3');
    name.textContent = menuId.name;
    descrip_header.appendChild(name);
    var descrip_para = document.createElement('div');
    descrip_para.classList.add('descrip-para');
    var para = document.createElement('p');
    para.textContent = menuId.description || '';
    descrip_para.appendChild(para);

    // ...

    var price = document.createElement('div');
    price.className = 'price';
    var descrip_label = document.createElement('div');
    var label = document.createElement('label');
    var span = document.createElement('span');
    label.textContent = 'Price : ';
    span.textContent = menuId.price ? menuId.price.toString() : ''; //price က number မို့ string ပြောင်းဖို့လို။ 
    descrip_label.appendChild(label);
    descrip_label.appendChild(span);
    var button = document.createElement('button');
    button.textContent = 'Add to Cart';

    // Adjust the order of appending child elements to place the button on the right
    price.appendChild(descrip_label);
    price.appendChild(button);
    description.appendChild(descrip_header);
    description.appendChild(descrip_para);

    // Place the price on the left and the button on the right
    description.appendChild(price);
    forDescription.appendChild(figure);
    forDescription.appendChild(description);
    menu_card.appendChild(forDescription);
    displayMenu.appendChild(menu_card);
  });
};