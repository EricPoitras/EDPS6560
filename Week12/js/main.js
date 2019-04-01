// Elements
var box1 = document.getElementById("box_1");
var box2 = document.getElementById("box_2");
var menu = document.getElementById("icon");
var dropdown = document.getElementById("dropdown");
var parent_container = document.getElementById("parent_container");

// Inputs
var box1_width = document.getElementById("Box1Width");
var box1_height = document.getElementById("Box1Height");
var box1_padding = document.getElementById("Box1Padding");
var box1_border = document.getElementById("Box1Border");
var box1_margin = document.getElementById("Box1Margin");
var box1_radio1 = document.getElementById("inlineRadio1_Box1");
var box1_radio2 = document.getElementById("inlineRadio2_Box1");
var box1_radio3 = document.getElementById("inlineRadio3_Box1");
var box1_radio4 = document.getElementById("inlineRadio4_Box1");
var box1_float1 = document.getElementById("floatRadio1_Box1");
var box1_float2 = document.getElementById("floatRadio2_Box1");
var box1_float3 = document.getElementById("floatRadio3_Box1");
var inlineRadio1_Pos1 = document.getElementById("inlineRadio1_Pos1");
var inlineRadio2_Pos1 = document.getElementById("inlineRadio2_Pos1");
var inlineRadio3_Pos1 = document.getElementById("inlineRadio3_Pos1");
var inlineRadio4_Pos1 = document.getElementById("inlineRadio4_Pos1");
var inlineRadio5_Pos1 = document.getElementById("inlineRadio5_Pos1");
var Pos1Top = document.getElementById("Pos1Top");
var Pos1Right = document.getElementById("Pos1Right");
var Pos1Bottom = document.getElementById("Pos1Bottom");
var Pos1Left = document.getElementById("Pos1Left");

var box2_width = document.getElementById("Box2Width");
var box2_height = document.getElementById("Box2Height");
var box2_padding = document.getElementById("Box2Padding");
var box2_border = document.getElementById("Box2Border");
var box2_margin = document.getElementById("Box2Margin");
var box2_radio1 = document.getElementById("inlineRadio1_Box2");
var box2_radio2 = document.getElementById("inlineRadio2_Box2");
var box2_radio3 = document.getElementById("inlineRadio3_Box2");
var box2_radio4 = document.getElementById("inlineRadio4_Box2");
var box2_float1 = document.getElementById("floatRadio1_Box2");
var box2_float2 = document.getElementById("floatRadio2_Box2");
var box2_float3 = document.getElementById("floatRadio3_Box2");
var inlineRadio1_Pos2 = document.getElementById("inlineRadio1_Pos2");
var inlineRadio2_Pos2 = document.getElementById("inlineRadio2_Pos2");
var inlineRadio3_Pos2 = document.getElementById("inlineRadio3_Pos2");
var inlineRadio4_Pos2 = document.getElementById("inlineRadio4_Pos2");
var inlineRadio5_Pos2 = document.getElementById("inlineRadio5_Pos2");
var Pos2Top = document.getElementById("Pos2Top");
var Pos2Right = document.getElementById("Pos2Right");
var Pos2Bottom = document.getElementById("Pos2Bottom");
var Pos2Left = document.getElementById("Pos2Left");

var parent_radio1 = document.getElementById("inlineRadio1_Par");
var parent_radio2 = document.getElementById("inlineRadio2_Par");
var parent_radio3 = document.getElementById("inlineRadio3_Par");
var inlineRadio1_Pos3 = document.getElementById("inlineRadio1_Pos3");
var inlineRadio2_Pos3 = document.getElementById("inlineRadio2_Pos3");
var inlineRadio3_Pos3 = document.getElementById("inlineRadio3_Pos3");
var inlineRadio4_Pos3 = document.getElementById("inlineRadio4_Pos3");
var inlineRadio5_Pos3 = document.getElementById("inlineRadio5_Pos3");
var Pos3Top = document.getElementById("Pos3Top");
var Pos3Right = document.getElementById("Pos3Right");
var Pos3Bottom = document.getElementById("Pos3Bottom");
var Pos3Left = document.getElementById("Pos3Left");

// Event Listeners
box1_width.addEventListener("keyup", getBox1Width);
box1_height.addEventListener("keyup", getBox1Height);
box1_padding.addEventListener("keyup", getBox1Padding);
box1_border.addEventListener("keyup", getBox1Border);
box1_margin.addEventListener("keyup", getBox1Margin);
box1_radio1.addEventListener("click", getRadioButtonBox1);
box1_radio2.addEventListener("click", getRadioButtonBox1);
box1_radio3.addEventListener("click", getRadioButtonBox1);
box1_radio4.addEventListener("click", getRadioButtonBox1);
box1_float1.addEventListener("click", getFloatRadioButtonBox1);
box1_float2.addEventListener("click", getFloatRadioButtonBox1);
box1_float3.addEventListener("click", getFloatRadioButtonBox1);
inlineRadio1_Pos1.addEventListener("click", getRadioButtonPos1);
inlineRadio2_Pos1.addEventListener("click", getRadioButtonPos1);
inlineRadio3_Pos1.addEventListener("click", getRadioButtonPos1);
inlineRadio4_Pos1.addEventListener("click", getRadioButtonPos1);
inlineRadio5_Pos1.addEventListener("click", getRadioButtonPos1);
Pos1Top.addEventListener("keyup", getPos1Top);
Pos1Right.addEventListener("keyup", getPos1Right);
Pos1Bottom.addEventListener("keyup", getPos1Bottom);
Pos1Left.addEventListener("keyup", getPos1Left);

box2_width.addEventListener("keyup", getBox2Width);
box2_height.addEventListener("keyup", getBox2Height);
box2_padding.addEventListener("keyup", getBox2Padding);
box2_border.addEventListener("keyup", getBox2Border);
box2_margin.addEventListener("keyup", getBox2Margin);
box2_radio1.addEventListener("click", getRadioButtonBox2);
box2_radio2.addEventListener("click", getRadioButtonBox2);
box2_radio3.addEventListener("click", getRadioButtonBox2);
box2_radio4.addEventListener("click", getRadioButtonBox2);
box2_float1.addEventListener("click", getFloatRadioButtonBox2);
box2_float2.addEventListener("click", getFloatRadioButtonBox2);
box2_float3.addEventListener("click", getFloatRadioButtonBox2);
inlineRadio1_Pos2.addEventListener("click", getRadioButtonPos2);
inlineRadio2_Pos2.addEventListener("click", getRadioButtonPos2);
inlineRadio3_Pos2.addEventListener("click", getRadioButtonPos2);
inlineRadio4_Pos2.addEventListener("click", getRadioButtonPos2);
inlineRadio5_Pos2.addEventListener("click", getRadioButtonPos2);
Pos2Top.addEventListener("keyup", getPos2Top);
Pos2Right.addEventListener("keyup", getPos2Right);
Pos2Bottom.addEventListener("keyup", getPos2Bottom);
Pos2Left.addEventListener("keyup", getPos2Left);

parent_radio1.addEventListener("click", getRadioButtonPar);
parent_radio2.addEventListener("click", getRadioButtonPar);
parent_radio3.addEventListener("click", getRadioButtonPar);
inlineRadio1_Pos3.addEventListener("click", getRadioButtonPos3);
inlineRadio2_Pos3.addEventListener("click", getRadioButtonPos3);
inlineRadio3_Pos3.addEventListener("click", getRadioButtonPos3);
inlineRadio4_Pos3.addEventListener("click", getRadioButtonPos3);
inlineRadio5_Pos3.addEventListener("click", getRadioButtonPos3);
Pos3Top.addEventListener("keyup", getPos3Top);
Pos3Right.addEventListener("keyup", getPos3Right);
Pos3Bottom.addEventListener("keyup", getPos3Bottom);
Pos3Left.addEventListener("keyup", getPos3Left);


menu.addEventListener("click", toggleMenu);
menu.addEventListener("mouseover", highlightMenu);
menu.addEventListener("mouseout", highlightMenu);

function getBox1Width(){
    box1.style.width = box1_width.value;
}
function getBox1Height(){
    box1.style.height = box1_height.value;
}
function getBox1Padding(){
    box1.style.padding = box1_padding.value;
}
function getBox1Border(){
    box1.style.border = box1_border.value;
}
function getBox1Margin(){
    box1.style.margin = box1_margin.value;
}
function getRadioButtonBox1(){
    if(box1_radio1.checked){
        box1.style.display = "block";
    }else if(box1_radio2.checked){
        box1.style.display = "inline-block";
    }else if(box1_radio3.checked){
        box1.style.display = "inline";
    }else{
        box1.style.display = "none";
    }
}
function getPos1Top(){
    box1.style.top = Pos1Top.value;
}
function getPos1Right(){
    box1.style.right = Pos1Right.value;
}
function getPos1Bottom(){
    box1.style.bottom = Pos1Bottom.value;
}
function getPos1Left(){
    box1.style.left = Pos1Left.value;
}

function getBox2Width(){
    box2.style.width = box2_width.value;
}
function getBox2Height(){
    box2.style.height = box2_height.value;
}
function getBox2Padding(){
    box2.style.padding = box2_padding.value;
}
function getBox2Border(){
    box2.style.border = box2_border.value;
}
function getBox2Margin(){
    box2.style.margin = box2_margin.value;
}
function getRadioButtonBox2(){
    if(box2_radio1.checked){
        box2.style.display = "block";
    }else if(box2_radio2.checked){
        box2.style.display = "inline-block";
    }else if(box2_radio3.checked){
        box2.style.display = "inline";
    }else{
        box2.style.display = "none";
    }
}
function getRadioButtonPar(){
    if(parent_radio1.checked){
        parent_container.style.textAlign = "left";
    }else if(parent_radio2.checked){
        parent_container.style.textAlign = "center";
    }else{
        parent_container.style.textAlign = "right";
    }
}
function getFloatRadioButtonBox1(){
    if(box1_float1.checked){
        box1.style.float = "none";
    }else if(box1_float2.checked){
        box1.style.float = "left";
    }else{
        box1.style.float = "right";
    }
}
function getFloatRadioButtonBox2(){
    if(box2_float1.checked){
        box2.style.float = "none";
    }else if(box2_float2.checked){
        box2.style.float = "left";
    }else{
        box2.style.float = "right";
    }
}
function getPos2Top(){
    box2.style.top = Pos2Top.value;
}
function getPos2Right(){
    box2.style.right = Pos2Right.value;
}
function getPos2Bottom(){
    box2.style.bottom = Pos2Bottom.value;
}
function getPos2Left(){
    box2.style.left = Pos2Left.value;
}
function getRadioButtonPos1(){
    if(inlineRadio1_Pos1.checked){
        box1.style.position = "static";
    }else if(inlineRadio2_Pos1.checked){
        box1.style.position = "absolute";
    }else if(inlineRadio3_Pos1.checked){
        box1.style.position = "fixed";
    }else if(inlineRadio4_Pos1.checked){
        box1.style.position = "relative";
    }else{
        box1.style.position = "sticky";
    }
}
function getRadioButtonPos2(){
    if(inlineRadio1_Pos2.checked){
        box2.style.position = "static";
    }else if(inlineRadio2_Pos2.checked){
        box2.style.position = "absolute";
    }else if(inlineRadio3_Pos2.checked){
        box2.style.position = "fixed";
    }else if(inlineRadio4_Pos2.checked){
        box2.style.position = "relative";
    }else{
        box2.style.position = "sticky";
    }
}
function getRadioButtonPos3(){
    if(inlineRadio1_Pos3.checked){
        parent_container.style.position = "static";
    }else if(inlineRadio2_Pos3.checked){
        parent_container.style.position = "absolute";
    }else if(inlineRadio3_Pos3.checked){
        parent_container.style.position = "fixed";
    }else if(inlineRadio4_Pos3.checked){
        parent_container.style.position = "relative";
    }else{
        parent_container.style.position = "sticky";
    }
}
function getPos3Top(){
    parent_container.style.top = Pos3Top.value;
}
function getPos3Right(){
    parent_container.style.right = Pos3Right.value;
}
function getPos3Bottom(){
    parent_container.style.bottom = Pos3Bottom.value;
}
function getPos3Left(){
    parent_container.style.left = Pos3Left.value;
}

function toggleMenu(){
    if(dropdown.style.display == "none"){
        dropdown.style.display = "block";
    }else{
        dropdown.style.display = "none";
    }
}
function highlightMenu(){
    if(menu.classList.contains("menu_back1")){
        menu.classList.remove("menu_back1");
        menu.classList.add("menu_back2");
    }else{
        menu.classList.remove("menu_back2");
        menu.classList.add("menu_back1");
    }
}