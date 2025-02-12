document.getElementById("add").addEventListener("click", function() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    
    if (!isNaN(num1) && !isNaN(num2)) {
        document.getElementById("result").value = num1 + num2;
    } else {
        alert("Please enter valid numbers!");
    }
});

document.getElementById("clear").addEventListener("click", function() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").value = "";
});

document.getElementById("exit").addEventListener("click", function() {
    window.close(); // Closes the browser tab
});