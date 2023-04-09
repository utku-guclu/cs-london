function setup()
{
	//create a canvas for the robot
	createCanvas(500, 500);
}

function draw()
{
	strokeWeight(3);

	//robots head
	fill(111);
	rect(100, 100, 300, 300, 20);


	//robots antenna
	fill(250, 1, 111);
	ellipse(250, 70, 60, 60);

	fill(200, 0, 200);
	rect(210, 80, 80, 30);

	//robots eyes
	fill(255);
	ellipse(175, 200, 80, 80);
	point(175, 200);
	fill(22);
	point(111, 333);
	ellipse(325, 200, 80, 80);
	point(325, 200);


	//robots nose
	fill(255, 0, 0);
	triangle(250, 220, 200, 300, 300, 300);

	//robots ears
	rect(80, 180, 33, 100);
	rect(390, 180, 33, 100);

	//robots mouth
	noFill();
	beginShape();
	vertex(111, 333);
	vertex(333, 370);
	vertex(333, 340);
	vertex(333, 370);
	vertex(333, 340);
	vertex(333, 370);
	vertex(333, 340);
	endShape();
}