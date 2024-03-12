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
    ////Card should have category
    card.classList.add("card", i.category);
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