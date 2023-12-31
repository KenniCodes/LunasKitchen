
$(() => {
  renderNavbar();
  getDishData();
  renderFooter();
});

const getDishData = function () {
  // Call getAllDishes function from network file.
  const data = $(this).serialize();
  getAllDishes(data)
    .then(function (result) {
      console.log("Dishes are", result);
      renderDishesCategories(result.dishes);
      renderPopularDishes(result.dishes);
    });

  function renderDishesCategories(dishes) {

    const ids = dishes.map(({ category }) => category);
    const filtered = dishes.filter(({ category }, index) =>
      !ids.includes(category, index + 1));

    filtered.forEach((i) => {
      const $categoryCard = $(`
      <div class="category_cards">
        <h3>${i.category}</h3>
      </div>
      `);
      $('#category_container').append($categoryCard);
    });

  }
  function renderPopularDishes(dishes) {

    // Loop through the 'dishes' array and create popular dish cards
    dishes.forEach(dish => {
      const $popularDishCard = $(`
      <div class="dish_cards">
        <img src="${dish.image}" alt="${dish.name} descriptive text">
        <footer>
            <span>${dish.name}</span>
            <h3>$${dish.price}</h3>
            <button class="addToCart">+</button>
        </footer>
      </div>
    `);

      // Append each popular dish card to the popular dishes container
      $('#cards').append($popularDishCard);
    });
  }


}

const renderNavbar = function () {
  // Load nav.html into the element with "nav_container"
  $('#nav_container').load('nav.html');
};

const renderFooter = function () {
  // Load footer.html into the element with "footer_container"
  $(`#footer_container`).load(`footer.html`);
};