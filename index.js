let btn = document.querySelector(".button");
let paragraph = document.querySelector(".paragraph");

btn.addEventListener("click", function () {
    let lineNumber = prompt("Enter line number")
    lineNumber = parseInt(lineNumber)
    if (isNaN(lineNumber) || lineNumber == 0) {
        alert("Enter Valid Number")
    }

    
    let letter = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil rem numquam voluptates ad dolor atque laudantium quibusdam, id enim facere expedita quia, obcaecati in tempore saepe architecto maiores quae. Ipsa."
    let letters = letter.split(" ") 
    let result = ""

    for (let line = 0; line < lineNumber; line++) {
        let make = "";
        for (let i = 0; i < 20; i++) {
            let index = Math.floor(Math.random() * letters.length)
            make += letters[index] + " "   
        }

        result += make + "<br>";
    }
    paragraph.innerHTML = result;
})                           

