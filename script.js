const select = (element) => {
    return document.querySelector(element);
};

const selectAll = (element) => {
    return document.querySelectorAll(element);
};

pizzaJson.map((item, index) => {
    let pizzaItem = select(".models .pizza-item").cloneNode(true);

    pizzaItem.querySelector(".pizza-item--img img").src = item.img;

    pizzaItem.querySelector(".pizza-item--name").innerHTML = item.name;
    pizzaItem.querySelector(".pizza-item--price").innerHTML = `R$ ${item.price.toFixed(2)}`;
    pizzaItem.querySelector(".pizza-item--desc").innerHTML = item.description;

    select(".pizza-area").append(pizzaItem);
});
