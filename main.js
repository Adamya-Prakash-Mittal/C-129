var MU="";
var MU2="";
var T="T";
var RX= "";
var LX= "";
var S="R1";
var ISP1="T";
var ISP2="F";
function preload(){
    MU=loadSound("music.mp3");
    MU2=loadSound("music2.mp3");
}
function setup(){
    C=createCanvas(300, 200);
    C.center();
    VC= createCapture(VIDEO);
    VC.hide();
    M= ml5.poseNet(VC, ML);
    M.on("pose", GR);
}
function draw(){
    image(VC, 0, 0, 300, 200);
    if(S=="R1"){
    if(T=="T"){
    MU2.stop();
    MU.play();
    T="F";
    }}else{
        if(T=="T"){
            MU.stop();
            MU2.play();
            T="F";
            }
    }

    //if(S=="R1"){
       // if(ISP1=="F"){
    //    MU2.stop();
    //    MU.play();
      //  ISP1="T";
        //ISP2="F";
        //}
  //  }else{
//        if(ISP2=="F")
//        MU.stop();
//        MU2.play();
//        ISP2="T";
//        ISP1="F";
//    }
}
function GR(R){
    if (R.length!==0) {
            console.log(R);
            if(R[0].pose.keypoints[10].score>0.2){
                
                    if(S=="L2"){S="R1";
                    T="T";
                    console.log("R1");}
                
            }
            if(R[0].pose.keypoints[9].score>0.2){
                if(S=="R1"){
                    S="L2";
                    T="T";
                    console.log("L2");}
                       
    }
}
}
function ML(){
    console.log("d");
}
