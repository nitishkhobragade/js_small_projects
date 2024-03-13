let products = {
    data: [
        {
        productName: "Regular White T-Shirt",
        category: "Topwear",
        price: "30",
        image: "white-tshirt.jpg",
    },
    {
        productName: "Beige Short Skirt",
        category: "Bottomwear",
        price: "49",
        image: "short-skirt.jpg",
    },
    {
        productName: "Sporty SmartWatch",
        category: "Watch",
        price: "99",
        image: "sporty-smartwatch.jpg",
    },
    {
        productName: "Basic Knitted Top",
        category: "Topwear",
        price: "29",
        image: "knitted-top.jpg",
    },
    {
        productName: "Black Leather Jacket",
        category: "Jacket",
        price: "129",
        image: "black-leather-jacket.jpg",
    },
    {
        productName: "Stylish Pink Trousers",
        category: "Bottomwear",
        price: "89",
        image: "pink-trousers.jpg",
    },
    {
        productName: "Brown Men's Jacket",
        category: "Jacket",
        price: "189",
        image: "brown-jacket.jpg",
    },
    {
        productName: "Comfy Gray Pants",
        category: "Bottomwear",
        price: "49",
        image: "comfy-gray-pants.jpg",
    },
  ],
};

for (let i of products.data) {
    ////Creating card
    let card = document.createElement("div");
    ////Card should have category and stay hidden initially
    card.classList.add("card", i.category, "hide");
    ////image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    ////img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    ////container
    let container = document.createElement("div");
    container.classList.add("container");
    ////product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "$"+ i.price;
    container.appendChild(price);

    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}

////parameter passed from button (parameter same as category)
function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
        ////check if value equals to innerText
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });

    ////select all cards
    let elements = document.querySelectorAll(".card");
    ////loop through all cards
    elements.forEach((element) => {
        //display all cards on all button click
        if(value == "all") {
            element.classList.remove("hide");
        } else{
            // check if element contains category 
            if(element.classList.contains(value)) {
                //display element based on category
                element.classList.remove("hide");
            } else {
                ////hide other elements
                element.classList.add("hide");
            }
        }
    });
};

//search button click
document.getElementById("search").addEventListener('click', () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
    
    ////loop through all elements
    elements.forEach((element, index) => {
        ////check if text includesvsearch value
        if(element.innerText.includes(searchInput.toUpperCase())) {
            ////displaying matching card
            cards[index].classList.remove("hide");
        } else {
            ////hide others
            cards[index].classList.add("hide");
        }
    });
});

////To initially display all products 
window.onload = () => {
    filterProduct("all");
};