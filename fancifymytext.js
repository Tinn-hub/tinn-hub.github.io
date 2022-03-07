

function BiggerButton(){
    document.getElementById("userText").style.fontSize="24pt";
}

function FancyShmancyRadio(){
    document.getElementById("userText").style.fontWeight="bold"
    document.getElementById("userText").style.color="blue";
    document.getElementById("userText").style.textDecoration = "underline";
    alert("Your text is decorated");
}

function BoringBettyRadio(){
    document.getElementById("userText").style.fontWeight="normal"
    document.getElementById("userText").style.color="black";
    document.getElementById("userText").style.textDecoration = "none";
    alert("Your text back to normal");
}

function MooButton(){
    let str = document.getElementById("userText");
    str.style.textTransform = "uppercase";
    let part = str.value.split(".");
    str.value = part.join("-Moo");
}