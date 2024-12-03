var body = document.getElementsByTagName("body")[0];
var btn = document.getElementsByTagName("button")[0];
var output= document.getElementById("output")
output.innerHTML=`return binary`
var output= document.getElementById('output')

function conversion() {
    // Get the value from the input field
    var inputValue = document.getElementById("input").value;

    // Check if the input is a number or a binary string
    if (!isNaN(inputValue)) {
        // If the input is a number, convert it to binary
        var binary = parseInt(inputValue).toString(2);
        console.log("Binary:", binary);
        output.value=binary
        return binary
    } else {
        // Otherwise, try to interpret it as binary and convert to a number
//         var number = parseInt(inputValue, 2);
//         if (!isNaN(number)) {
//             console.log("Number:", number);
//             output.value=number;
//         } else {
//             console.log("Invalid input.");
//         }
    function unbin(str){
        console.log(parseInt(str,2))
    return parseInt(str,2)
    }
    // console.log(unbin(1010))
    }
}

// Attach the event listener to the button
btn.addEventListener("click", conversion);
