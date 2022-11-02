const eleGrill = document.getElementById('grill');


for(i = 1; i <= 100; i++) {
    eleGrill.innerHTML += `<div class= "cell">${i}</div>`
    
    
    let eleCell = document.querySelectorAll('.cell');

    for (let i = 0; i < eleCell.length; i++) {
        eleCell[i].addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }
}

