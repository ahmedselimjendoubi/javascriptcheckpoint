function changebold(){
    document.getElementById("textarea").style.fontWeight="bold";
}
function changeitalic(){
    document.getElementById("textarea").style.fontStyle="italic";
}
function underline(){
    document.getElementById("textarea").style.textDecoration="underline";
}
function pixels(){
    document.getElementById("textarea").style.fontSize=document.getElementById("options").value;
}
function family(){
    document.getElementById("textarea").style.fontFamily=document.getElementById("options2").value;
}