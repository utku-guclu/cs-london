function setup()
{
	//create a large square canvas
	createCanvas(800, 800);
}

function draw()
{

	//set the fill colour to red
	
	//set a thick stroke weight for the black lines
	// strokeWeight(12);
	//draw the white rectangle
	fill(255, 255, 255);	
	rect(100, 100, 100, 200);
	rect(100, 300, 100, 200);
	strokeWeight(12);
	rect(200, 500, 450, 100);
	rect(650, 500, 50, 50)

	//draw the red rectangle 
	fill(255, 19, 9);
	rect(200, 100, 500, 400);
	//draw the yellow rectangle 
	fill(222, 255, 9);
	rect(650, 550, 50, 50);
	//draw the blue rectangle 
	fill(9, 92, 255);
	rect(100, 500, 100, 100);
}
