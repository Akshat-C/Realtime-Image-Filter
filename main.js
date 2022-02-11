noseX = 0;
noseY = 0;
function preload()
{
    i1 = loadImage('https://i.postimg.cc/90Gx0zhS/Clown-Nose.jpg')
}

function setup(){
    canvas = createCanvas(400, 350);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(400, 350);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw()
{
    image(video, 0, 0, 400, 350);
    image(i1, noseX, noseY, 25, 25)
}

function save_img()
{
    save("Realtime Filter.png");
}

function modelLoaded()
{
    console.log("Posenet is Initialised");
}

function gotPoses(results)
{
    if (results.length > 0 )
    {
        console.log(results);

        noseX = results[0].pose.nose.x-10;
        noseY = results[0].pose.nose.y-10;
        console.log("Nose X is: " + noseX + "Nose Y is: " + noseY);
    }
}