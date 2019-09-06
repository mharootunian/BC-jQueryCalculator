$(document).ready(function () {
    //logic goes here
    var firstNumberFlag = true;
    var operatorFlag = false;

    $("#button-plus").click(function () {
        $("#operator").text("+");
        firstNumberFlag = false;
    });

    $("#button-minus").click(function () {
        $("#operator").text("-");
        firstNumberFlag = false;
    });

    $("#button-multiply").click(function () {
        $("#operator").text("*");
        firstNumberFlag = false;
    });

    $("#button-divide").click(function () {
        $("#operator").text("/");
        firstNumberFlag = false;
    });

    $("#button-power").click(function () {
        $("#operator").text("^");
        firstNumberFlag = false;
    });
    
    $("#button-clear").click(function () {
        $("#operator").text("");
        $("#first-number").text("");
        $("#second-number").text("");
        $("#result").text("");

        firstNumberFlag = true;
    });
   
    $("#button-equal").click(function () {
        //check operator
        if ($("#operator").text() === "+") {
            $("#result").text( parseInt( $("#first-number").text()) + parseInt( $("#second-number").text() ) )
        }

        if ($("#operator").text() === "-") {
            $("#result").text( parseInt( $("#first-number").text()) - parseInt( $("#second-number").text() ) )
        }

        if ($("#operator").text() === "*") {
            $("#result").text( parseInt( $("#first-number").text()) * parseInt( $("#second-number").text() ) )
        }

        if ($("#operator").text() === "/") {
            $("#result").text( parseInt( $("#first-number").text()) / parseInt( $("#second-number").text() ) )
        }

        if ($("#operator").text() === "^") {
            $("#result").text( Math.pow(parseInt( $("#first-number").text()), parseInt( $("#second-number").text() )) )
        }

        
        
       

         
        //output to $("#result")
        firstNumberFlag = true;
    });
   

    $(".number").click(function () {    
        if (firstNumberFlag) {
            let firstNumber = $("#first-number").text();
            $("#first-number").text(firstNumber + $(this).attr("value"));
        } else {
            let secondNumber = $("#second-number").text();
            $("#second-number").text(secondNumber + $(this).attr("value"));
        }
        console.log("not operator")
    });

    

});