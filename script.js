//
let x= document.getElementById('red-field').innerText = document.getElementById('red-input').value;
let y = document.getElementById('green-field').innerText = document.getElementById('green-input').value;
let z = document.getElementById('blue-field').innerText = document.getElementById('blue-input').value;
let colourRgb = 'rgb(' + x + ',' + y + ',' + z + ")";
console.log(colourRgb);
document.getElementById('color-plate').style.backgroundColor = colourRgb;
document.getElementById('rgb-code').innerText = colourRgb
//

document.querySelector('#auto-generate-btn').addEventListener('click', function () {
    let x = parseInt(Math.random() * 90);
    let y = parseInt(Math.random() * 200);
    let z = parseInt(Math.random() * 150);
    let colourRgb = 'rgb(' + x + ',' + y + ',' + z + ")";
    console.log(colourRgb);
    document.getElementById('color-plate').style.backgroundColor = colourRgb;
    document.getElementById('rgb-code').innerText = colourRgb

})

document.getElementById('red-input').addEventListener('change', function () {
    document.getElementById('red-field').innerText = this.value;
})
document.getElementById('green-input').addEventListener('change', function () {
    document.getElementById('green-field').innerText = this.value;
})
document.getElementById('blue-input').addEventListener('change', function () {
    document.getElementById('blue-field').innerText = this.value;
})
document.querySelector('#generate-btn').addEventListener('click', function () {
    let x = document.getElementById('red-input').value;
    let y = document.getElementById('green-input').value;
    let z = document.getElementById('blue-input').value;

    let colourRgb = 'rgb(' + x + ',' + y + ',' + z + ")";
    console.log(colourRgb);
    document.getElementById('color-plate').style.backgroundColor = colourRgb;
    document.getElementById('rgb-code').innerText = colourRgb

})
document.getElementById('copy-text-btn').addEventListener('click', function (event) {
    let textField = document.getElementById('rgb-code').innerText;
    navigator.clipboard.writeText(textField).then(() => {
        alert("Copied to clipboard");
    });

})