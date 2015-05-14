var size = 81;

for (var i = 0; i < size; i++) {
	randNbr1 = Math.floor(Math.random() * 255);
	randNbr2 = Math.floor(Math.random() * 255);
	randNbr3 = Math.floor(Math.random() * 255);
	randColor = "rgb(" + randNbr1 + "," + randNbr2 + "," + randNbr3 + ")";
    var square = document.createElement("div");
    square.style.width = "11.1%";
    square.style.paddingBottom = "11.1%";
    square.style.float = "left";        
    square.style.backgroundColor = randColor;              
    document.body.appendChild(square);
}

