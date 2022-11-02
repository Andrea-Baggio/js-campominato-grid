const eleGrill = document.getElementById('grill');


for(i = 1; i <= 100; i++) {
    eleGrill.innerHTML += `<div class= "cell">${i}</div>`
    
    const eleCell = document.querySelectorAll('.cell');
    eleCell.addEventListener('click', function() {
    this.classList.toggle('active')
})
}

