function compute() {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("textInput").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
      if (isNaN(principal) || principal < 1 ) {
    alert("Enter a positive number");
    document.getElementById("principal").focus();
  } else {
    document.getElementById("result").innerHTML = "If you deposit <mark>"+principal+"</mark>,\<br\>at an interest rate of <mark>"+ rate +"%</mark>\<br\>You will receive an amount of <mark>"+ interest +"</mark>,\<br\>in the year <mark>"+ year +"</mark>\<br\>";
  }
    
}
function updateTextInput(val) {
          document.getElementById('textInput').value=val; 
}        