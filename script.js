const menu = [
    {
        id : 1,
        img : "https://i.ibb.co/YjbjdVV/food1.jpg",
        title : "French crullers",
        price: "$15",
        desc : "These crispy on the outside, light on the inside donuts.",
        category: "breakfast"
    },
    {
        id : 2,
        img : "https://i.ibb.co/B64fmBJ/food2.jpg",
        title : "Indian Luci",
        price: "$10",
        desc : "Mumbai street snack buy mamra, sev and chaat masala from Indian stores or online at itadka.",
        category: "breakfast"
    },
    {
        id : 3,
        img : "https://i.ibb.co/mc6fm5k/food3.jpg",
        title: "Venison and mutton kofte",
        price: "$22",
        desc : "This recipe from John Doe restaurant in Notting Hill embraces that trend with venison and mutton kofte.",
        category: "dinner"
    },
    {
        id : 4,
        img : "https://i.ibb.co/Srv4Z11/food4.jpg",
        title: "Chicket Samucha",
        price: "$5",
        desc : "It's packed with flavour and isn't too tricky, plus it's a great one-pot dish to feed the family.",
        category: "breakfast"
    },
    {
        id : 5,
        img : "https://i.ibb.co/nRLH5Wg/food5.jpg",
        title: "Chicken biryani",
        price: "$25",
        desc : "It's packed with flavour and isn't too tricky, plus it's a great one-pot dish to feed the family.",
        category: "dinner"
    },
    {
        id : 6,
        img : "https://i.ibb.co/DWvCJjb/food6.jpg",
        title: "Italian veg tray soast",
        price: "$10",
        desc : "you have yourself a hearty and healthy springtime meal!",
        category: "breakfast"
    },
    {
        id : 7,
        img : "https://i.ibb.co/Hxz2kBj/food7.jpg",
        title: "Prawn linguine with ’nduja",
        price: "$20",
        desc : "Our prawn linguine with 'nduja is super quick and easy to make and packed with big Italian flavours.",
        category: "breakfast"
    },
    {
        id : 8,
        img : "https://i.ibb.co/zPDcTbn/food8.jpg",
        title: "Indian curried mutton",
        price: "$25",
        desc : "It has a slightly stronger flavour than lamb which stands up well to Indian spices",
        category: "lunch"
    },
    {
        id : 9,
        img : "https://i.ibb.co/RPp6Dds/food9.jpg",
        title: "Easy mutton recipes",
        price: "$22",
        desc : "The most of succulent mutton with our easy recipes, from fragrant curries to warming hotpots.",
        category: "dinner"
    },
    {
        id : 10,
        img : "https://i.ibb.co/qFx49NN/food10.jpg",
        title: "Lancashire mutton hotpot",
        price: "$20",
        desc : "This traditional slow-cooked one pot of mutton and kidney is rich in flavour and easy to prepare.",
        category: "lunch"
    },
    {
        id : 11,
        img : "https://i.ibb.co/7JGWqzH/food11.jpg",
        title: "Vegetarian Mexican recipes",
        price: "$12",
        desc : "smoky tomato salsa to veggie enchiladas and Mexican-style rice.",
        category: "lunch"
    },
    {
        id : 12,
        img : "https://i.ibb.co/cQQLVPF/food12.jpg",
        title: "Pan-fried dumpling",
        price: "$10",
        desc : "sheng jian bao complete with a fluffy dough and juicy pork filling",
        category: "dinner"
    },
    {
        id : 13,
        img : "https://i.ibb.co/r7Cc7cW/food13.jpg",
        title: "Eggs benedict",
        price: "$12",
        desc : "Classic eggs benedict, plus tips and tricks to making your best hollandaise sauce.",
        category: "breakfast"
    },
    {
        id : 14,
        img : "https://i.ibb.co/0DtzX1c/food14.jpg",
        title: "Mexican prawn soup",
        price: "$15",
        desc : "Put fresh prawns at the heart of this easy Mexican soup perfect for an easy midweek meal.",
        category: "lunch"
    },
    {
        id : 15,
        img : "https://i.ibb.co/NSFTp97/food15.jpg",
        title: "Grilled prawns",
        price: "$18",
        desc : "Try them together in this super simple BBQ recipe.",
        category: "dinner"
    },
    {
        id : 16,
        img : "https://i.ibb.co/mc3yDnN/food16.jpg",
        title: " cream-filled donuts",
        price: "$15",
        desc : "Plain glazed donuts are the second most popular choice (18%).",
        category: "breakfast"
    },
    {
        id : 17,
        img : "https://i.ibb.co/MG9ry18/food17.jpg",
        title: "Chorizo, new potato & haddock one-pot",
        price: "$21",
        desc : "Get fantastic results with minimum effort in this easy-to-make fish dish",
        category: "lunch"
    },
    {
        id : 18,
        img : "https://i.ibb.co/kH3qhgh/food18.jpg",
        title: "Champagne and lemon prawn",
        price: "$25",
        desc : "Take your starter to the next level by adding champagne to your king prawn vol-au-vents.",
        category: "lunch"
    }
]

const sectionCenter = document.querySelector('.section-center');

const buttonContainer = document.querySelector('.btn-container');



//load items
window.addEventListener('DOMContentLoaded', function () {
    displayMenuItems(menu);
    displayMenuButtons();

});



function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {

        return `<article class="menu-item">
        <img src=${item.img} alt=${item.title}>
        <div class="item-info">
           <header>
            <h4>
            ${item.title}
            </h4>
            <h4 class="price">${item.price}</h4>
           </header>
           <p class="item-text">
           ${item.desc}
           </p>
        </div>
    </article>`
       
    })

    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
    const categories = menu.reduce(function (acc, curr) {
        
        if (!acc.includes(curr.category)) {
            acc.push(curr.category); 
        }

        return acc;
    }, ['all'])
   
    const categoryBtn = categories.map(function (category) {
        return `<button class="filter-btn" type="button" data-id=${category}> ${category} </button>`
    }).join("");
   
    buttonContainer.innerHTML = categoryBtn; 
    const filterBtns = document.querySelectorAll('.filter-btn');

    //filter 
filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function (menuItem) {
            if (menuItem.category === category) {
                
                return menuItem;
            }
        });
        if (category === 'all') {
            displayMenuItems(menu);
        } else {
            displayMenuItems(menuCategory);
        }
    })
})
}