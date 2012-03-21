// document.body.innerHTML = document.body.innerHTML.replace(/Keyboard/g,'Leopard').replace(/keyboard/g, 'leopard');
function recursiveReplace(node) {
    if (node.nodeType == 3) { // text node
        node.nodeValue = node.nodeValue.replace(/Keyboard/g, "Leopard");
		node.nodeValue = node.nodeValue.replace(/keyboard/g, "leopard");
    } else if (node.nodeType == 1) { // element
        $(node).contents().each(function () {
            recursiveReplace(this);
        });
    }
}

recursiveReplace(document.body);