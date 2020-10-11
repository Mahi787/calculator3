        //define the result field
var resultfield= $("#result");
function insertNum(number){
    var existingNumbers = resultfield.val();
    resultfield.val( existingNumbers + number)
}
function clearResult(){
    resultfield.val('')
    document.getElementById("result").style.color = "black";
    document.getElementById("result").style.border = "none";
    document.getElementById("result").style.fontFamily = "auto";
}
function calculate(){
  var result =  eval(resultfield.val())
  resultfield.val(result);
  document.getElementById("result").style.border = " 4px solid green";
  document.getElementById("result").style.color = "red";
  document.getElementById("result").style.fontFamily = "cursive";
}
function deleteNum(){
    var value = resultfield.val();
    if(value!= ''){
        resultfield.val(value.slice(0,-1));
        document.getElementById("result").style.color = "black";
    document.getElementById("result").style.border = "none";
    document.getElementById("result").style.fontFamily = "auto";

    }
}
