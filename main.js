// Crea la variable de referncia del lienzo usando fabric.Canvas()

var canvas = new fabric.Canvas("myCanvas');
player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player_object= "";
var block_image_object= "";

function player_update()
{
    fabric.Image.fromURL("player.png",function (Img) {
    player_object = Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight (140);
player_object.set({top:player_y, left:player_x});
canvas.add(player_object);
)};
}
 function new_image(get_image)
{
fabric.Image.fromURL(get_image, function (Img) {
    block_image_object = Ing;
    block_image_object.scaleToWidth(block_image_width);
    block_image_object.scaleToHeight (block_image_height);
    block_image_object.set({top:player_y,left:player_x});
    canvas.add(block_image_object);})
}
    window.addEventListener("keydown", my_keydown);

//Define el ancho inicial y el alto del cloque de imágenes 
function my_keydown(e)
{
    keyPressed = e.Keycode;
    console.log(keyPressed);
    if(e.shiftkey == true && keyPressed == '80')
    {
        console.log("Presiona p y shift juntos");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_whidth;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if(keyPressed == '38')
    {
        up();
        console.log("up");
    }
    if(keyPressed == '40')
    {
        down();
        console.log("down");
    }
    if(keyPressed == '37')
    {
        up();
        console.log("up");
    }
}
//Define el inicio de las coordenadas  y Y del jugador 



// Define una variable llamada player_object para almacenar la imagen del jugador


// Agrega una función llamada player_update() para agregar la imagen del jugador 







// Agrega una función llamada new_image() para agregar las diferentes imágene al presionar teclas específicas.

