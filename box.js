var button = document.getElementById("theBoxes");
console.log(button);
button.addEventListener("click",GenerateBoxes);

var i = 1;
var oldValue =0;
function GenerateBoxes()
{
    var number = document.getElementById("input_number").value;
    var color = document.getElementById("input_color").value;
    number = parseInt(number) + parseInt(oldValue);
    console.log(number);
    for(;i <= number; i++)
    {
        var box = document.createElement("div");
        box.classList.add("myDiv"); //classList is use to add another styling cxlasses to it
        document.getElementById("box").appendChild(box);
        box.innerHTML = i;
        box.style.backgroundColor = color;
        oldValue = document.getElementById("box").lastElementChild.innerHTML;
        // oldValue ++; //optional logic also work
    }
}


