import {orders, items} from "./data.js"


const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const orderID = parseInt(urlParams.get('orderID'))

const orderInfoElement = document.getElementById("order-info");
const order = orders.filter(o => o.orderID === orderID);
orderInfoElement.innerHTML = orderHTML(order[0]);

const orderItems = items.filter(i => i.orderID === orderID);
const itemsElement = document.getElementById("items-container");
itemsElement.innerHTML = orderItems.map(i => itemHTML(i));

// add eventListener
const inputs = document.querySelectorAll(".item-attr");
inputs.forEach(i => {
    i.addEventListener("change", attrOnChangeHandler)
})

function attrOnChangeHandler(e) {
    const element = e.target;
    const attrName = element.name;
    const itemID = parseInt(element.id);
    const value = element.value;

    const item = items.filter(i => i.itemID == itemID)
    item[0][attrName] = parseInt(value);
}

function orderHTML(o) {
    return `
    <div class="order">
        <div class="order-info">
            <h3>#${o.orderID} (${o.date})</h3>
            <p>client: ${o.clientName}</p>
            <p>address: ${o.address}</p>
            <p>summary: ${o.summary}</p>
        </div>
    </div>
    `;
}

function itemHTML(item) {
    return `
    <dir> 
        <h3>itemID: ${item.itemID}</h3>
        <label>width</label>
        <input id="${item.itemID}" name="width" value=${item.width} class="item-attr">
        <label>height</label>
        <input id="${item.itemID}" name="height" value=${item.height} class="item-attr">
        <label>qty</label>
        <input id="${item.itemID}" name="qty" value=${item.qty} class="item-attr">
    </dir>
    `;
}






