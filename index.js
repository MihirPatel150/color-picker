
const pickColor = document.querySelector('input[type="color"]');
const hexCodeContainer = document.querySelector('input[type="text"]');
const fileSelector = document.querySelector('input[type="file"]');
const displayImageDiv = document.querySelector(".display-image-div")

window.addEventListener('load', function() {
    document.querySelector('img').src = "Color-circle.png"
})

pickColor.addEventListener('input', changeColor)
pickColor.addEventListener('change', changeColor)


function changeColor() {
    const hexCode = pickColor.value;
    hexCodeContainer.value = hexCode;



    //calling function to calculate the complementory color of choosen color
    let complementoryColor = advComplementoryCalculator(hexCode);

    // cchange color of navbar 
    document.querySelector(".navbar").style.backgroundColor = hexCode;

    //change color of title to complementory color
    document.querySelector(".title").style.color = complementoryColor;

    //Color Hex Code text with primary color 
    hexCodeContainer.style.color = hexCode;
    //color hex Code box with complementory color
    hexCodeContainer.style.backgroundColor = complementoryColor;



}


function complementoryCalculator(hexCodeString) {

    let newHexString = hexCodeString.slice(1); // #ff00ff --> ff00ff
    newHexString = newHexString.toUpperCase(); //FF00FF
    newHexString = '0x' + newHexString; //0xFF00FF


    //subtract any color from white to get its complemetory hexcode
    var white = 0xFFFFFF; // Stored as 16777215
    // console.log(white)
    var hexSubResult = white - newHexString; // 16777215 - 16711680 = 65535 (ex.)
    // console.log(hexSubResult)
    var complementoryHex = hexSubResult.toString(16); // 'ff00ff', converted back to hex
    // console.log(complementoryHex)
    complementoryHexCodeString = '#' + complementoryHex //#ff00ff

    // complementoryHexCodeString = advComplementoryHex(hexCodeString)
    return complementoryHexCodeString;
}


function advComplementoryCalculator(hexCodeString) {

    let redHexValue = hexCodeString.slice(1, 3);
    let greenHexValue = hexCodeString.slice(3, 5);
    let blueHexValue = hexCodeString.slice(5, 7);

    let hexCode = "0x" + hexCodeString.slice(1, 7)

    let complementoryHexCode;
    if (redHexValue == blueHexValue) {
        if (blueHexValue == greenHexValue) {
            // console.log("adv")
            if (hexCode < 0x808080) {
                complementoryHexCode = "#ffffff"
                // console.log("adv-less")
            }
            else {
                complementoryHexCode = "#000000"
                // console.log("adv-greater")
            }

        }
    }

    else {
        // console.log("normal")
        complementoryHexCode = complementoryCalculator(hexCodeString)
    }


    return complementoryHexCode

}


fileSelector.addEventListener("change", function() {
    const reader = new FileReader();
    reader.onload = function () {
        const selectedImage = new Image();
        selectedImage.src = reader.result
        const imgElement = displayImageDiv.appendChild(selectedImage)
        imgElement.classList.add("display-image")
    }
    reader.readAsDataURL(fileSelector.files[0])
})




function lessComplementoryCalculator(hexCodeString) {

    let newHexString = hexCodeString.slice(1); // #ff00ff --> ff00ff
    newHexString = newHexString.toUpperCase(); //FF00FF
    newHexString = '0x' + newHexString; //0xFF00FF


    //subtract any color from white to get its complemetory hexcode
    var white = 0xFFFFFF; // Stored as 16777215
    var addColor = 0x111111;
    // console.log(white)
    var hexSubResult = white - newHexString + addColor; // 16777215 - 16711680 = 65535 (ex.)
    // console.log(hexSubResult)
    var complementoryHex = hexSubResult.toString(16); // 'ff00ff', converted back to hex
    // console.log(complementoryHex)
    complementoryHexCodeString = '#' + complementoryHex //#ff00ff

    // complementoryHexCodeString = advComplementoryHex(hexCodeString)
    return complementoryHexCodeString;
}