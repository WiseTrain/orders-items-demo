
export function openWindowWithPost(url, data) {
    
    window.open(`../pages/items.html?orderID=${data.orderID}`, "_self")
    // var form = document.createElement("form");
    // form.target = "_self";
    // form.method = "POST";
    // form.action = "../pages/items.html";
    // //form.style.display = "none";

    // for (var key in data) {
    //     var input = document.createElement("input");
    //     //input.type = "hidden";
    //     input.name = key;
    //     input.value = data[key];
    //     form.appendChild(input);
    // }
    // document.body.appendChild(form);
    // form.submit();
    // document.body.removeChild(form);
}