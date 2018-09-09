var colours = ["red", "pink"];
var counter = 0;

function changeMessage(){

/*    var col=document.getElementById("name");
    col.style.color="#FF0333";
*/
    
    if(counter >= colours.length) {
	     counter = 0;
    }

    col.style.color = colours[counter];
    counter++;
}


setInterval(changeMessage,3000);



