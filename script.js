for (var i = 0; i < 81; i++) {
	var square = document.createElement("div");
	square.style.width = "11.1%";
    square.style.paddingBottom = "11.1%";
    square.style.float = "left";		
    if (i % 2 === 0) {
 		square.style.backgroundColor = "#000";				
        document.body.appendChild(square);
    } else {
        square.style.backgroundColor="#F00";
        document.body.appendChild(square);
    }
} 

for (var i = 0; i < 81; i++) {
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

var color1 = 0;
var color2 = 255;
var color3 = 255;
for (var i = 0; i < 81; i++) {
    var square = document.createElement("div");
    square.style.width = "11.1%";
    square.style.paddingBottom = "11.1%";
    square.style.float = "left";       
    if (i % 2 === 0) {
        for(var j = 0; j < 41; j++) {
            var grad1 = "rgb(" + color1 + "," + color2 + "," + color3 + ")";
            square.style.backgroundColor = grad1;              
            document.body.appendChild(square);           
        } 
    } else {
        for(var k = 0; k < 40; k++) {
            var grad2 = "rgb(" + color2 + "," + color1 + "," + color3 + ")";
            square.style.backgroundColor = grad2;    
            document.body.appendChild(square);           
        }
    }
    color1+=3;
    color3-=8;
}
