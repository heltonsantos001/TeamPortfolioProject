function clickButton(){
    let valor = parseInt(document.querySelector("#number").textContent);
    valor += 1
    document.querySelector("#number").innerHTML = valor;
}