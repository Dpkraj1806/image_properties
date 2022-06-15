var img={
    brightness:0,
    contrast:0,
    white_point:0,
    highlights:0,
    shadows:0
}
var b=document.getElementById("brightness")
var c=document.getElementById("contrast")
var w=document.getElementById("white_point")
var h=document.getElementById("highlights")
var s=document.getElementById("shadows")

var button=document.getElementById("btn")
button.addEventListener("click",add)

function add()
{
    img.brightness=b.value
    img.contrast=c.value
    img.white_point=w.value
    img.highlights=h.value
    img.shadows=s.value
    print()
}
function print()
{
    var text=document.getElementById("property_value") 
    value="Brightness ="+img.brightness+"\n"+"Contrast ="+img.contrast+"\n"+"White Point ="+img.white_point+"\n"+"Highlights ="+img.highlights+"\n"+"Shadows ="+img.shadows
    text.innerHTML=value
}