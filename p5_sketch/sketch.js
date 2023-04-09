    //This is a simple template for you to experiment with

//This is a comment  ... the two slashes at the start mean that the computer ignores it

//You can look up more commands here ... https://p5js.org/reference/

function setup()
{
    //this function runs once at the start of your program
    
    //this command creates a drawing area in the browser - it should only be called once
    createCanvas(500,500);
}

function draw()
{
    
    // //this command clears the background to black (try changing the numbers)
    // background(1,22,33);
    
    // //change the fill color
    // fill(22,32,23);
    
    // //change the outline color
    // stroke(123,255,123);
    
    // //this command draws a rectangle with the outline and fill colors that we just set
    // rect(125,125,250,250);
    fill(110);
    
    stroke(12,11,13);
    strokeWeight(4);
    rect(100,100,100,100);
    rect(200,100,100,100);
    rect(100,200,100,100);
    rect(200,200,100,100);
}