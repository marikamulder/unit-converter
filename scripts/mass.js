function sameInputMass() {
            
    var selectInput = document.getElementById("massSelectInput").value;
    var selectOutput = document.getElementById("massSelectOutput").value;
                
    if ((selectInput == selectOutput) && (selectOutput == 'kilogram')) {
        document.getElementById("massSelectInput").value = "gram";

    } else if ((selectInput == selectOutput) && (selectOutput == 'gram')) {
        document.getElementById("massSelectInput").value = "milligram";

    } else if ((selectInput == selectOutput) && (selectOutput == 'milligram')) {
        document.getElementById("massSelectInput").value = "gram";

    } else if ((selectInput == selectOutput) && (selectOutput == 'pound')) {
        document.getElementById("massSelectInput").value = "ounce";

    } else if ((selectInput == selectOutput) && (selectOutput == 'ounce')) {
        document.getElementById("massSelectInput").value = "gram";

    } else if ((selectInput == selectOutput) && (selectOutput == 'stone')) {
        document.getElementById("massSelectInput").value = "pound";

    }

    massInput();
}

function sameOutputMass() {

    var selectInput = document.getElementById("massSelectInput").value;
    var selectOutput = document.getElementById("massSelectOutput").value;
                
    if ((selectInput == selectOutput) && (selectInput == 'kilogram')) {
        document.getElementById("massSelectOutput").value = "gram";

    } else if ((selectInput == selectOutput) && (selectInput == 'gram')) {
        document.getElementById("massSelectOutput").value = "milligram";

    } else if ((selectInput == selectOutput) && (selectInput == 'milligram')) {
        document.getElementById("massSelectOutput").value = "gram";

    } else if ((selectInput == selectOutput) && (selectInput == 'pound')) {
        document.getElementById("massSelectOutput").value = "ounce";

    } else if ((selectInput == selectOutput) && (selectInput == 'ounce')) {
        document.getElementById("massSelectOutput").value = "gram";

    } else if ((selectInput == selectOutput) && (selectInput == 'stone')) {
        document.getElementById("massSelectOutput").value = "pound";

    }

    massInput();
}

function massInput() {

    var output = document.getElementById("massOutput").value;
    var input = document.getElementById("massInput").value;
    output = "";
    
    var selectInput = document.getElementById("massSelectInput").value;
    var selectOutput = document.getElementById("massSelectOutput").value;

    if (selectInput == "kilogram" && selectOutput == "gram") {
        var gram = input * 1000
        document.getElementById('massOutput').value = parseFloat(gram.toFixed(6));

    } else if (selectInput == "kilogram" && selectOutput == "milligram") {
        var milligram = input * 1000000
        document.getElementById("massOutput").value = parseFloat(milligram.toFixed(6));

    } else if (selectInput == "kilogram" && selectOutput == "pound") {
        var pound = input * 2.205
        document.getElementById("massOutput").value = parseFloat(pound.toFixed(6));

    } else if (selectInput == "kilogram" && selectOutput == "ounce") {
        var ounce = input * 35.274
        document.getElementById("massOutput").value = parseFloat(ounce.toFixed(6));

    } else if (selectInput == "kilogram" && selectOutput == "stone") {
        var stone = input / 6.35
        document.getElementById("massOutput").value = parseFloat(stone.toFixed(6));

    } else if (selectInput == "gram" && selectOutput == "kilogram") {
        var kilogram = input / 1000
        document.getElementById("massOutput").value = parseFloat(kilogram.toFixed(6));

    } else if (selectInput == "gram" && selectOutput == "milligram") {
        var milligram = input * 1000
        document.getElementById("massOutput").value = parseFloat(milligram.toFixed(6));

    } else if (selectInput == "gram" && selectOutput == "pound") {
        var pound = input / 453.6
        document.getElementById("massOutput").value = parseFloat(pound.toFixed(6));

    } else if (selectInput == "gram" && selectOutput == "ounce") {
        var ounce = input / 28.35
        document.getElementById("massOutput").value = parseFloat(ounce.toFixed(6));

    } else if (selectInput == "gram" && selectOutput == "stone") {
        var stone = input / 6350
        document.getElementById("massOutput").value = parseFloat(stone.toFixed(6));

    } else if (selectInput == "milligram" && selectOutput == "kilogram") {
        var kilogram = input / 1000000
        document.getElementById("massOutput").value = parseFloat(kilogram.toFixed(6));

    } else if (selectInput == "milligram" && selectOutput == "gram") {
        var gram = input / 1000
        document.getElementById("massOutput").value = parseFloat(gram.toFixed(6));

    } else if (selectInput == "milligram" && selectOutput == "pound") {
        var pound = input / 453600
        document.getElementById("massOutput").value = parseFloat(pound.toFixed(6));

    } else if (selectInput == "milligram" && selectOutput == "ounce") {
        var ounce = input / 28350
        document.getElementById("massOutput").value = parseFloat(ounce.toFixed(6));

    } else if (selectInput == "milligram" && selectOutput == "stone") {
        var stone = input / 28350
        document.getElementById("massOutput").value = parseFloat(stone.toFixed(6));

    } else if (selectInput == "pound" && selectOutput == "kilogram") {
        var kilogram = input / 2.205
        document.getElementById("massOutput").value = parseFloat(kilogram.toFixed(6));

    } else if (selectInput == "pound" && selectOutput == "gram") {
        var gram = input * 453.6
        document.getElementById("massOutput").value = parseFloat(gram.toFixed(6));

    } else if (selectInput == "pound" && selectOutput == "milligram") {
        var milligram = input * 453600
        document.getElementById("massOutput").value = parseFloat(milligram.toFixed(6));

    } else if (selectInput == "pound" && selectOutput == "ounce") {
        var ounce = input * 16
        document.getElementById("massOutput").value = parseFloat(ounce.toFixed(6));

    } else if (selectInput == "pound" && selectOutput == "stone") {
        var stone = input / 14
        document.getElementById("massOutput").value = parseFloat(stone.toFixed(6));

    } else if (selectInput == "ounce" && selectOutput == "kilogram") {
        var kilogram = input / 35.274
        document.getElementById("massOutput").value = parseFloat(kilogram.toFixed(6));

    } else if (selectInput == "ounce" && selectOutput == "gram") {
        var gram = input * 28.35
        document.getElementById("massOutput").value = parseFloat(gram.toFixed(6));

    } else if (selectInput == "ounce" && selectOutput == "milligram") {
        var milligram = input * 28350
        document.getElementById("massOutput").value = parseFloat(milligram.toFixed(6));

    } else if (selectInput == "ounce" && selectOutput == "pound") {
        var pound = input / 16
        document.getElementById("massOutput").value = parseFloat(pound.toFixed(6));

    } else if (selectInput == "ounce" && selectOutput == "stone") {
        var stone = input / 224
        document.getElementById("massOutput").value = parseFloat(stone.toFixed(6));

    } else if (selectInput == "stone" && selectOutput == "kilogram") {
        var kilogram = input * 6.35
        document.getElementById("massOutput").value = parseFloat(kilogram.toFixed(6));

    } else if (selectInput == "stone" && selectOutput == "gram") {
        var gram = input * 6350
        document.getElementById("massOutput").value = parseFloat(gram.toFixed(6));

    } else if (selectInput == "stone" && selectOutput == "milligram") {
        var milligram = input * 6350000
        document.getElementById("massOutput").value = parseFloat(milligram.toFixed(6));

    } else if (selectInput == "stone" && selectOutput == "pound") {
        var pound = input * 14
        document.getElementById("massOutput").value = parseFloat(pound.toFixed(6));

    } else if (selectInput == "stone" && selectOutput == "ounce") {
        var ounce = input * 224
        document.getElementById("massOutput").value = parseFloat(ounce.toFixed(6));

    }
}

function massOutput() {

    var output = document.getElementById("massOutput").value;
    var input = document.getElementById("massInput").value;
    input = "";
    
    var selectInput = document.getElementById("massSelectInput").value;
    var selectOutput = document.getElementById("massSelectOutput").value;

    if (selectInput == "kilogram" && selectOutput == "gram") {
        var gram = output / 1000
        document.getElementById('massInput').value = parseFloat(gram.toFixed(6));

    } else if (selectInput == "kilogram" && selectOutput == "milligram") {
        var milligram = output / 1000000
        document.getElementById("massInput").value = parseFloat(milligram.toFixed(6));

    } else if (selectInput == "kilogram" && selectOutput == "pound") {
        var pound = output / 2.205
        document.getElementById("massInput").value = parseFloat(pound.toFixed(6));

    } else if (selectInput == "kilogram" && selectOutput == "ounce") {
        var ounce = output / 35.274
        document.getElementById("massInput").value = parseFloat(ounce.toFixed(6));

    } else if (selectInput == "kilogram" && selectOutput == "stone") {
        var stone = output * 6.35
        document.getElementById("massInput").value = parseFloat(stone.toFixed(6));

    } else if (selectInput == "gram" && selectOutput == "kilogram") {
        var kilogram = output * 1000
        document.getElementById("massInput").value = parseFloat(kilogram.toFixed(6));

    } else if (selectInput == "gram" && selectOutput == "milligram") {
        var milligram = output / 1000
        document.getElementById("massInput").value = parseFloat(milligram.toFixed(6));

    } else if (selectInput == "gram" && selectOutput == "pound") {
        var pound = output * 453.6
        document.getElementById("massInput").value = parseFloat(pound.toFixed(6));

    } else if (selectInput == "gram" && selectOutput == "ounce") {
        var ounce = output * 28.35
        document.getElementById("massInput").value = parseFloat(ounce.toFixed(6));

    } else if (selectInput == "gram" && selectOutput == "stone") {
        var stone = output * 6350
        document.getElementById("massInput").value = parseFloat(stone.toFixed(6));

    } else if (selectInput == "milligram" && selectOutput == "kilogram") {
        var kilogram = output * 1000000
        document.getElementById("massInput").value = parseFloat(kilogram.toFixed(6));

    } else if (selectInput == "milligram" && selectOutput == "gram") {
        var gram = output * 1000
        document.getElementById("massInput").value = parseFloat(gram.toFixed(6));

    } else if (selectInput == "milligram" && selectOutput == "pound") {
        var pound = output * 453600
        document.getElementById("massInput").value = parseFloat(pound.toFixed(6));

    } else if (selectInput == "milligram" && selectOutput == "ounce") {
        var ounce = output * 28350
        document.getElementById("massInput").value = parseFloat(ounce.toFixed(6));

    } else if (selectInput == "milligram" && selectOutput == "stone") {
        var stone = output * 28350
        document.getElementById("massInput").value = parseFloat(stone.toFixed(6));

    } else if (selectInput == "pound" && selectOutput == "kilogram") {
        var kilogram = output * 2.205
        document.getElementById("massInput").value = parseFloat(kilogram.toFixed(6));

    } else if (selectInput == "pound" && selectOutput == "gram") {
        var gram = output / 453.6
        document.getElementById("massInput").value = parseFloat(gram.toFixed(6));

    } else if (selectInput == "pound" && selectOutput == "milligram") {
        var milligram = output / 453600
        document.getElementById("massInput").value = parseFloat(milligram.toFixed(6));

    } else if (selectInput == "pound" && selectOutput == "ounce") {
        var ounce = output / 16
        document.getElementById("massInput").value = parseFloat(ounce.toFixed(6));

    } else if (selectInput == "pound" && selectOutput == "stone") {
        var stone = output * 14
        document.getElementById("massInput").value = parseFloat(stone.toFixed(6));

    } else if (selectInput == "ounce" && selectOutput == "kilogram") {
        var kilogram = output * 35.274
        document.getElementById("massInput").value = parseFloat(kilogram.toFixed(6));

    } else if (selectInput == "ounce" && selectOutput == "gram") {
        var gram = output / 28.35
        document.getElementById("massInput").value = parseFloat(gram.toFixed(6));

    } else if (selectInput == "ounce" && selectOutput == "milligram") {
        var milligram = output / 28350
        document.getElementById("massInput").value = parseFloat(milligram.toFixed(6));

    } else if (selectInput == "ounce" && selectOutput == "pound") {
        var pound = output * 16
        document.getElementById("massInput").value = parseFloat(pound.toFixed(6));

    } else if (selectInput == "ounce" && selectOutput == "stone") {
        var stone = output * 224
        document.getElementById("massInput").value = parseFloat(stone.toFixed(6));

    } else if (selectInput == "stone" && selectOutput == "kilogram") {
        var kilogram = output / 6.35
        document.getElementById("massInput").value = parseFloat(kilogram.toFixed(6));

    } else if (selectInput == "stone" && selectOutput == "gram") {
        var gram = output / 6350
        document.getElementById("massInput").value = parseFloat(gram.toFixed(6));

    } else if (selectInput == "stone" && selectOutput == "milligram") {
        var milligram = output / 6350000
        document.getElementById("massInput").value = parseFloat(milligram.toFixed(6));

    } else if (selectInput == "stone" && selectOutput == "pound") {
        var pound = output / 14
        document.getElementById("massInput").value = parseFloat(pound.toFixed(6));

    } else if (selectInput == "stone" && selectOutput == "ounce") {
        var ounce = output / 224
        document.getElementById("massInput").value = parseFloat(ounce.toFixed(6));

    } 

}
