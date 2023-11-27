
import {orders, items} from "./data.js";
import {openWindowWithPost} from "./post.js";
"use strict";

function editItems (orderID = null)  {
    openWindowWithPost("./pages/items.html", {
        "orderID": orderID
    });
}

function orderHTML(o) {
    return `
    <div class="order">
        <div class="order-info">
            <h3>#${o.orderID} (${o.date})</h3>
            <p>client: ${o.clientName}</p>
            <p>address: ${o.address}</p>
            <p>summary: ${o.summary}</p>
            <button>Edit</button>
        </div>
        <div class="order-summary">${orderSummaryHTML(o.orderID)}
            <button id="${o.orderID}" class="edit-items-button">Edit</button>
        </div>
    </div>
    `;
}

function orderSummaryHTML(orderID ) {
    const orderItems = items.filter(i => i.orderID == orderID)
    return orderItems.map(orderItemInfo).join('');
}

function orderItemInfo(item) {
    return `
    <div>width: ${item.width}mm, height: ${item.height}mm, qty: ${item.qty}</div>
    `;
}



const element = document.getElementById("orders");
element.innerHTML = `<div class="orders">${orders.map(orderHTML).join('')}</div>`;

const buttons = document.querySelectorAll(".edit-items-button");
buttons.forEach(b => {
    b.addEventListener("click", () => editItems(b.id))
});

