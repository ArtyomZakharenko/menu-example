import {menu} from "./menu.js";

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", () => {
    displayMenuItems(menu);
    displayMenuButtons();
});
btnContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains('filter-btn')) {
        const category = event.target.dataset.id;
        const menuCategory = menu.filter((menuItem) => {
            if (menuItem.category === category) {
                return menuItem;
            }
        });
        if (category === "all") {
            displayMenuItems(menu);
        } else {
            displayMenuItems(menuCategory);
        }
    }
});

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map((item) => {
        return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
    });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
    const categories = menu.reduce(
        (values, item) => {
            if (!values.includes(item.category)) {
                values.push(item.category);
            }
            return values;
        }, ["all"]);
    const categoryBtns = categories.map((category) => {
        return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    }).join("");

    btnContainer.innerHTML = categoryBtns;
}

