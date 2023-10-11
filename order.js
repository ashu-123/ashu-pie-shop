window.addEventListener("DOMContentLoaded", function(e) {
    const orderButtons = document.querySelectorAll("button[data-order]");
    orderButtons.forEach(function(button) {
        button.addEventListener("click", function(e) {
            const button = e.currentTarget;
            const parent = button.parentNode;

            const order = {
                id: button.getAttribute("data-order"),
                title: parent.querySelector(".title").innerText,
                price: parent.querySelector(".price").innerText,
                desc: parent.querySelector(".desc").innerText
            };

            localStorage.setItem("order", JSON.stringify(order));
            const url = window.location.href.replace("pies.html", "order.html");
            window.location.href = url;
        })
    })
})