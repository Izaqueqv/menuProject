const menu = [
  {
    id: 1,
    title: "Bolo de limão",
    category: "cake",
    price: "R$" + 35,
    img: "images/limonCakeCrop.jpeg",
    desc: "Macio, levemente cítrico e com raspas de limão por cima. Sabor equilibrado e refrescante.",
  },
  {
    id: 2,
    title: "Bolo de laranja",
    category: "cake",
    price: "R$" + 35,
    img: "images/orangeCakeCrop.jpeg",
    desc: "Feito com laranja natural, massa fofinha e aromática. Preparado artesanalmente.",
  },
  {
    id: 3,
    title: "Bolo de cenoura",
    category: "cake",
    price: "R$" + 35,
    img: "images/carrotCakeCrop.png",
    desc: "Massa de cenoura macia e úmida, com cobertura generosa de chocolate cremoso. Um clássico irresistível, feito artesanalmente.",
  },
  {
    id: 4,
    title: "Bolo de churros",
    category: "cake",
    price: "R$" + 49,
    img: "images/churrosCakeCrop.jpeg",
    desc: "Inspirado no clássico churros, com toque de canela e sabor marcante.",
  },
  {
    id: 5,
    title: "Bolo de maçã",
    category: "cake",
    price: "R$" + 49,
    img: "images/appleCakeCrop.jpeg",
    desc: "Pedaços de maçã na massa, textura úmida e sabor caseiro irresistível.",
  },
  {
    id: 6,
    title: "Bolo de mandioca",
    category: "cake",
    price: "R$" + 35,
    img: "images/madiocCakeCrop.jpeg",
    desc: "Tradicional e cremoso, feito com mandioca selecionada.",
  },
  {
    id: 7,
    title: "Bolo de abacaxi",
    category: "cake",
    price: "R$" + 49,
    img: "images/pineappleCakeCrop.jpeg",
    desc: "Leve e tropical, com pedaços e calda de abacaxi.",
  },
  {
    id: 8,
    title: "Bolo mesclado",
    category: "cake",
    price: "R$" + 35,
    img: "images/twoThingsCakeCrop.jpeg",
    desc: "A combinação perfeita de massa branca e chocolate, macio e equilibrado.",
  },
  {
    id: 9,
    title: "Bolo formigueiro",
    category: "cake",
    price: "R$" + 35,
    img: "images/formigueiroCakeCrop.jpeg",
    desc: "Massa fofinha com granulados de chocolate espalhados, clássico e delicado.",
  },
  {
    id: 10,
    title: "Bolo formigueiro com cobertura",
    category: "cake",
    price: "R$" + 49,
    img: "images/chocCakeCrop.jpeg",
    desc: "Granulados na massa e cobertura intensa por cima. Perfeito para quem ama chocolate.",
  },
  {
    id: 11,
    title: "Bolo de chocolate com cobertura cremosa",
    category: "cake",
    price: "R$" + 39,
    img: "images/cake03Crop.jpeg",
    desc: "Massa de chocolate úmida e macia com cobertura espessa e artesanal. Sabor marcante do início ao fim.",
  },
  {
    id: 12,
    title: "Bolo de chocolate com granulado",
    category: "cake",
    price: "R$" + 35,
    img: "images/cake02Crop.jpeg",
    desc: "Chocolate intenso na massa e finalização com granulados por cima. Equilíbrio perfeito entre maciez e crocância.",
  },
  {
    id: 13,
    title: "Pão de forma tradicional",
    category: "bread",
    price: "R$" + 49,
    img: "images/bread01Crop.png",
    desc: "Pão de forma artesanal, com textura fofinha e sabor suave. Perfeito para o café da manhã ou lanche da tarde.",
  },
  {
    id: 14,
    title: "Torta salgada de frango",
    category: "pie",
    price: "R$" + 49,
    img: "images/pie.png",
    desc: "Torta low carb deliciosa de frango perfeita para o café da tarde.",
  },
];

const filterBtns = document.querySelectorAll(".filter-btn");

const menuItems = document.querySelector(".cards");

window.addEventListener("DOMContentLoaded", function () {
  const cakeItems = menu.filter(function (item) {
    return item.category === "cake";
  });

  displayMenuItems(cakeItems);
});

filterBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const category = e.currentTarget.dataset.category;

    const menuCategory = menu.filter(function (menuItem) {
      return menuItem.category === category;
    });

    displayMenuItems(menuCategory);
  });
});

function displayMenuItems(menuFoods) {
  let displayMenu = menuFoods.map(function (item) {
    return `<section class="card">
            <img src="${item.img}" />
            <div class="item-info">
              <h3 class="item-title">${item.title}</h3>
              <p class="item-text">
                ${item.desc}
              </p>
              <div class="place-order">
                <h2 class="price">${item.price}</h2>
                <button class="order" data-id="${item.id}">Pedir</button>
              </div>
            </div>
          </section>`;
  });
  displayMenu = displayMenu.join("");
  menuItems.innerHTML = displayMenu;
}


// Btn active
const btns = document.querySelectorAll(".filter-btn");

window.addEventListener("DOMContentLoaded", function () {
  const cakeBtn = document.querySelector('.filter-btn[data-category="cake"]');

  cakeBtn.classList.add("active");
});

btns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    // remove active
    btns.forEach(function (item) {
      item.classList.remove("active");
    });

    // add active in the actual filter
    btn.classList.add("active");
  });
});
