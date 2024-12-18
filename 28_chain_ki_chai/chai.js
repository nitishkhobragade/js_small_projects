    // Responsive Navigation Toggle
    const menuBtn = document.getElementById("menu-btn");
    const menu = document.getElementById("menu");

    // Open and close menu on button click
    menuBtn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });

    // Close menu when clicking anywhere outside
    document.addEventListener("click", (event) => {
      const isClickInsideMenu = menu.contains(event.target);
      const isClickOnMenuBtn = menuBtn.contains(event.target);

      if (!isClickInsideMenu && !isClickOnMenuBtn) {
        menu.classList.add("hidden");
      }
    });

    // Product List Array
    const productList = [
      { name: "Masala Chai", image: "img/chaiglass.jpg", description: "A flavorful spiced tea made with love." },
      { name: "Cold Coffee", image: "img/coffee2.jpg", description: "Refreshing cold coffee to keep you cool." },
      { name: "Momos", image: "img/momos1.jpg", description: "Steamed momos served with spicy chutney." },
      { name: "Pizza", image: "img/pizza1.jpg", description: "Crispy, cheesy pizza with delicious toppings." },
      { name: "Pasta", image: "img/pasta1.jpg", description: "Creamy and delicious pasta served hot." },
      { name: "Burger", image: "img/burgercombo.jpg", description: "Juicy burger with fresh veggies and patty." },
      { name: "Maggie", image: "img/maggie.jpg", description: "Instant noodles with a twist of flavor." },
      { name: "Sandwich", image: "img/grilled_sandwitch.jpg", description: "Grilled sandwich stuffed with fresh fillings." },
      { name: "Shake", image: "img/shake1.jpg", description: "Delicious creamy shake in various flavors." },
      { name: "Lassi", image: "img/lassi.jpg", description: "Delicious creamy Lassi in various flavors." },
    ];

    // Product Card Generation
    const productContainer = document.getElementById('product-list');

    productList.forEach(product => {
      const productCard = `
        <div class="product-card bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition duration-300">
          <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover">
          <div class="p-4 text-center">
            <h2 class="text-xl font-bold text-yellow-500">${product.name}</h2>
            <p class="text-gray-600 mt-2">${product.description}</p>
          </div>
        </div>
      `;
      productContainer.innerHTML += productCard;
    });