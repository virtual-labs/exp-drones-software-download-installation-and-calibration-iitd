  var i = 0;
var txt = 'Click on add button to add material.';
var speed = 50;


// var a = 0;
// var b = 0;
// var ans;
// var n;

// var c = 0;
// var d = 0;
// var ans1;
// var n1;

// var e = 0;
// var f = 0;
// var ans2;
// var n2;

// var g = 0;
// var h = 0;
// var ans3;
// var n3;

    /*function navNextstrt()

{
  document.getElementById("canvas_start").style.visibility="hidden";
  document.getElementById("canvas0").style.visibility="visible";

dronefirstcome()
 
}*/ 


    function navNext0()

{
  document.getElementById("canvas0").style.visibility="hidden";
  document.getElementById("canvas2").style.visibility="visible";
}

  function stop_audio()

{
const audio1 = document.querySelector("#pre1");
const audio2 = document.querySelector("#pre2");
const audio3 = document.querySelector("#pre3");
const audio4 = document.querySelector("#pre4");
const audio5 = document.querySelector("#pre5");
const audio6 = document.querySelector("#pre6");
const audio7 = document.querySelector("#pre7");
const audio8 = document.querySelector("#pre8");
const audio9 = document.querySelector("#pre9");
const audio10 = document.querySelector("#pre10");

clearInterval(timeValue);
audio1.pause();
audio1.currentTime = 0;
document.getElementById("preaud1").src ="";
audio2.pause();
audio2.currentTime = 0;
document.getElementById("preaud2").src ="";
audio3.pause();
audio3.currentTime = 0;

audio4.pause();
audio4.currentTime = 0;

audio5.pause();
audio5.currentTime = 0;

audio6.pause();
audio6.currentTime = 0;

audio7.pause();
audio7.currentTime = 0;

audio8.pause();
audio8.currentTime = 0;

audio9.pause();
audio9.currentTime = 0;

audio10.pause();
audio10.currentTime = 0;



clearTimeout();
// const audio1 = document.querySelector("#pre1");

// audio1.pause();
// audio1.currentTime = 0;

// const audio1 = document.querySelector("#pre1");

// audio1.pause();
// audio1.currentTime = 0;

// const audio1 = document.querySelector("#pre1");

// audio1.pause();
// audio1.currentTime = 0;

// const audio1 = document.querySelector("#pre1");

// audio1.pause();
// audio1.currentTime = 0;

// const audio1 = document.querySelector("#pre1");

// audio1.pause();
// audio1.currentTime = 0;
}

var timeValue;
    function navNext2()

{
  document.getElementById("canvas0").style.visibility="hidden";
  document.getElementById("canvas2").style.visibility="visible";
// document.getElementById("blkimg").style.visibility="visible";
 $( "#highlighttxt1" ).delay(200).fadeIn(2000);
$( "#blkimg" ).delay(200).fadeIn(2000);
 
timeValue = setTimeout(function()
  {
    var x= document.getElementById('pre1');
        x.play();
   },1000);


setTimeout(function()
  {
    document.getElementById("prelist1").style.visibility="visible";
    document.getElementById("prelist1").style.animation="precaution_come1 4s forwards"; 
    document.getElementById("highlighttxt1").style.visibility="hidden";
    // document.getElementById("blkimg").style.visibility="hidden";
$( "#blkimg" ).delay(200).fadeOut(1000);
  },4500); 

setTimeout(function()
  {
    $( "#blkimg" ).delay(200).fadeIn(2000);
  $( "#highlighttxt2" ).delay(200).fadeIn(2000);

  setTimeout(function()
  {
    var x= document.getElementById('pre2');
        x.play();
   },1000);

  setTimeout(function()
    {
      document.getElementById("prelist2").style.visibility="visible";
      document.getElementById("prelist2").style.animation="precaution_come2 4s forwards"; 
      document.getElementById("highlighttxt2").style.visibility="hidden";
      $( "#blkimg" ).delay(200).fadeOut(1000);
  // $( "#highlighttxt1" ).delay(200).fadeOut(1000);
    },6500);
  },9000); 

setTimeout(function()
  {
    $( "#blkimg" ).delay(200).fadeIn(2000);
  $( "#highlighttxt3" ).delay(200).fadeIn(2000);

  setTimeout(function()
  {
    var x= document.getElementById('pre3');
        x.play();
   },1000);

  setTimeout(function()
    {
      document.getElementById("prelist3").style.visibility="visible";
      document.getElementById("prelist3").style.animation="precaution_come3 4s forwards"; 
      document.getElementById("highlighttxt3").style.visibility="hidden";
      $( "#blkimg" ).delay(200).fadeOut(1000);
  // $( "#highlighttxt1" ).delay(200).fadeOut(1000);
    },4500);
  },18000); 

setTimeout(function()
  {
    $( "#blkimg" ).delay(200).fadeIn(2000);
  $( "#highlighttxt4" ).delay(200).fadeIn(2000);

  setTimeout(function()
  {
    var x= document.getElementById('pre4');
        x.play();
   },1000);

  setTimeout(function()
    {
      document.getElementById("prelist4").style.visibility="visible";
      document.getElementById("prelist4").style.animation="precaution_come4 4s forwards"; 
      document.getElementById("highlighttxt4").style.visibility="hidden";
      $( "#blkimg" ).delay(200).fadeOut(1000);
  // $( "#highlighttxt1" ).delay(200).fadeOut(1000);
    },5000);
  },27000); 

setTimeout(function()
  {
    $( "#blkimg" ).delay(200).fadeIn(2000);
  $( "#highlighttxt5" ).delay(200).fadeIn(2000);

  setTimeout(function()
  {
    var x= document.getElementById('pre5');
        x.play();
   },1000);

  setTimeout(function()
    {
      document.getElementById("prelist5").style.visibility="visible";
      document.getElementById("prelist5").style.animation="precaution_come5 4s forwards"; 
      document.getElementById("highlighttxt5").style.visibility="hidden";
      $( "#blkimg" ).delay(200).fadeOut(1000);
  // $( "#highlighttxt1" ).delay(200).fadeOut(1000);
    },4000);
  },36000); 


setTimeout(function()
  {
    $( "#blkimg" ).delay(200).fadeIn(2000);
  $( "#highlighttxt6" ).delay(200).fadeIn(2000);

  setTimeout(function()
  {
    var x= document.getElementById('pre6');
        x.play();
   },1000);

  setTimeout(function()
    {
      document.getElementById("prelist6").style.visibility="visible";
      document.getElementById("prelist6").style.animation="precaution_come6 4s forwards"; 
      document.getElementById("highlighttxt6").style.visibility="hidden";
      $( "#blkimg" ).delay(200).fadeOut(1000);
  // $( "#highlighttxt1" ).delay(200).fadeOut(1000);
    },4500);
  },45000); 


setTimeout(function()
  {
    $( "#blkimg" ).delay(200).fadeIn(2000);
  $( "#highlighttxt7" ).delay(200).fadeIn(2000);

  setTimeout(function()
  {
    var x= document.getElementById('pre7');
        x.play();
   },1000);

  setTimeout(function()
    {
      document.getElementById("prelist7").style.visibility="visible";
      document.getElementById("prelist7").style.animation="precaution_come7 4s forwards"; 
      document.getElementById("highlighttxt7").style.visibility="hidden";
      $( "#blkimg" ).delay(200).fadeOut(1000);
  // $( "#highlighttxt1" ).delay(200).fadeOut(1000);
    },6000);
  },55000); 

setTimeout(function()
  {
    $( "#blkimg" ).delay(200).fadeIn(2000);
  $( "#highlighttxt8" ).delay(200).fadeIn(2000);

  setTimeout(function()
  {
    var x= document.getElementById('pre8');
        x.play();
   },1000);

  setTimeout(function()
    {
      document.getElementById("prelist8").style.visibility="visible";
      document.getElementById("prelist8").style.animation="precaution_come8 4s forwards"; 
      document.getElementById("highlighttxt8").style.visibility="hidden";
      $( "#blkimg" ).delay(200).fadeOut(1000);
  // $( "#highlighttxt1" ).delay(200).fadeOut(1000);
    },4500);
  },64000);

setTimeout(function()
  {
    $( "#blkimg" ).delay(200).fadeIn(2000);
  $( "#highlighttxt9" ).delay(200).fadeIn(2000);

  setTimeout(function()
  {
    var x= document.getElementById('pre9');
        x.play();
   },1000);

  setTimeout(function()
    {
      document.getElementById("prelist9").style.visibility="visible";
      document.getElementById("prelist9").style.animation="precaution_come9 4s forwards"; 
      document.getElementById("highlighttxt9").style.visibility="hidden";
      $( "#blkimg" ).delay(200).fadeOut(1000);
  // $( "#highlighttxt1" ).delay(200).fadeOut(1000);
    },4500);
  },73000); 

setTimeout(function()
  {
    $( "#blkimg" ).delay(200).fadeIn(2000);
  $( "#highlighttxt10" ).delay(200).fadeIn(2000);

  setTimeout(function()
  {
    var x= document.getElementById('pre10');
        x.play();
   },1000);

  setTimeout(function()
    {
      document.getElementById("prelist10").style.visibility="visible";
      document.getElementById("prelist10").style.animation="precaution_come10 4s forwards"; 
      document.getElementById("highlighttxt10").style.visibility="hidden";
      $( "#blkimg" ).delay(200).fadeOut(1000);
  // $( "#highlighttxt1" ).delay(200).fadeOut(1000);
    },4000);
  },82000); 

}
 

// function navNext3()
function navNextstrt()
{
  document.getElementById("canvas2").style.visibility="hidden";
  document.getElementById("canvas3").style.visibility="visible";
   setTimeout(function()
    {
      $("#step1_1").slideDown("slow");
      
      
},1000);

   setTimeout(function()
  {
    var x= document.getElementById('aud_stp1_1');
        x.play();
   },1500);

   setTimeout(function()
  {
    document.getElementById("stp1_arw").style.visibility="visible";
    document.getElementById("syson_tb").style.visibility="visible";
   },4500);
   
}

// function navNext3()
function navNextinstall1()
{
  document.getElementById("canvas3").style.visibility="hidden";
  document.getElementById("canvas4").style.visibility="visible";
   setTimeout(function()
    {
      $("#step2_1").slideDown("slow");
      document.getElementById("myBtn3").disabled = true;
      
      
},1000);

   setTimeout(function()
  {
    var x= document.getElementById('aud_stp2_1');
        x.play();
   },1500);


   setTimeout(function()
    {
     
      document.getElementById("myBtn3").disabled = false;
      document.getElementById("can2stp1_arw").style.visibility="visible";
},3500);
   
}

var age = 0;
function agesizeIn()

{

    age = document.getElementById("ageIn").value;

    // size = document.getElementById("sizeIn").value;

if (age !== "")
{
	alert();
 // document.getElementById("arrowcubox").style.visibility="visible";
}
}

function install1_Next()
{
		age = document.getElementById("ageIn").value;
		
		if (age !== "")
		{
	
  	document.getElementById("fullscreen5").style.visibility="hidden";
  	document.getElementById("ageIn").style.visibility="hidden";
	  document.getElementById("myBtn3").style.visibility="hidden";
  	document.getElementById("myBtn4").style.visibility="hidden";
  	document.getElementById("fullscreen6").style.visibility="visible";
  	document.getElementById("myBtn5").style.visibility="visible";
  	document.getElementById("myBtn6").style.visibility="visible";
  	document.getElementById("step2_1").style.visibility="hidden";
  	document.getElementById("can2stp1_arw").style.visibility="hidden";
    document.getElementById("myBtn5").disabled = true;
    $("#step2_2").slideDown("slow");

    setTimeout(function()
  {
    var x= document.getElementById('aud_stp2_2');
        x.play();
   },500);

  	setTimeout(function()
    {
      
    document.getElementById("can2stp2_arw").style.visibility="visible";
    document.getElementById("myBtn5").disabled = false;

	  },1500);

  	}
  	else{
  		alert("Please Select Language Before Click OK button");
  	}
   
}

function install2_Next()
{
  	document.getElementById("fullscreen6").style.visibility="hidden";
	  document.getElementById("myBtn5").style.visibility="hidden";
  	document.getElementById("myBtn6").style.visibility="hidden";
  	document.getElementById("fullscreen7").style.visibility="visible";
  	document.getElementById("myBtn7").style.visibility="visible";
  	document.getElementById("myBtn8").style.visibility="visible";

  	document.getElementById("step2_2").style.visibility="hidden";
  	document.getElementById("can2stp2_arw").style.visibility="hidden";
    document.getElementById("myBtn7").disabled = true;
    $("#step2_3").slideDown("slow");

     setTimeout(function()
  {
    var x= document.getElementById('aud_stp2_3');
        x.play();
   },500);

  	setTimeout(function()
    {
      
      document.getElementById("myBtn7").disabled = false;
      document.getElementById("can2stp3_arw").style.visibility="visible";
	},1500);

}


function install3_Next()
{
  	document.getElementById("fullscreen7").style.visibility="hidden";
	  document.getElementById("myBtn7").style.visibility="hidden";
  	document.getElementById("myBtn8").style.visibility="hidden";
  	document.getElementById("fullscreen8").style.visibility="visible";
  	document.getElementById("myBtn9").style.visibility="visible";
  	document.getElementById("myBtn10").style.visibility="visible";

  	document.getElementById("step2_3").style.visibility="hidden";
  	document.getElementById("can2stp3_arw").style.visibility="hidden";

  document.getElementById("myBtn9").disabled = true;

     $("#step2_4").slideDown("slow");

     setTimeout(function()
  {
    var x= document.getElementById('aud_stp2_4');
        x.play();
   },500);

    setTimeout(function()
    {
      
      document.getElementById("myBtn9").disabled = false;
      document.getElementById("can2stp4_arw").style.visibility="visible";
  },1500);

   
}


function install4_Next()
{
  	document.getElementById("fullscreen8").style.visibility="hidden";
	  document.getElementById("myBtn9").style.visibility="hidden";
  	document.getElementById("myBtn10").style.visibility="hidden";
  	document.getElementById("fullscreen9").style.visibility="visible";
  	document.getElementById("myBtn12").style.visibility="visible";

  	document.getElementById("step2_4").style.visibility="hidden";
  	document.getElementById("can2stp4_arw").style.visibility="hidden";
    $("#step2_5").slideDown("slow");

     setTimeout(function()
  {
    var x= document.getElementById('aud_stp2_5');
        x.play();
   },500);

     setTimeout(function()
    { 
      document.getElementById("can2stp5_arw").style.visibility="visible";
      document.getElementById("checkbox1_tb").style.visibility="visible";
  },3500);

}

function check1_Next()
{
  	document.getElementById("fullscreen9").style.visibility="hidden";
	  document.getElementById("checkbox1_tb").style.visibility="hidden";
  	document.getElementById("fullscreen10").style.visibility="visible";
  	document.getElementById("myBtn11").style.visibility="visible";

  	document.getElementById("step2_5").style.visibility="hidden";
  	document.getElementById("can2stp5_arw").style.visibility="hidden";
    document.getElementById("myBtn11").disabled = true;

    $("#step2_6").slideDown("slow");

    setTimeout(function()
  {
    var x= document.getElementById('aud_stp2_6');
        x.play();
   },500);

  	setTimeout(function()
    {    
      document.getElementById("myBtn11").disabled = false;
      document.getElementById("can2stp6_arw").style.visibility="visible";
	},1500);

}



function install5_Next()
{
  	document.getElementById("fullscreen10").style.visibility="hidden";
	  document.getElementById("myBtn11").style.visibility="hidden";
  	document.getElementById("myBtn12").style.visibility="hidden";
  	document.getElementById("fullscreen11").style.visibility="visible";
  	document.getElementById("inst_txt").style.visibility="visible";
  	
  	document.getElementById("myBtn14").style.visibility="visible";

  	document.getElementById("step2_6").style.visibility="hidden";
  	document.getElementById("can2stp6_arw").style.visibility="hidden";

     $("#step2_7").slideDown("slow");

    setTimeout(function()
  {
    var x= document.getElementById('aud_stp2_7');
        x.play();
   },500);

  	setTimeout(function()
    {
      
      document.getElementById("can2stp7_arw").style.visibility="visible";
      document.getElementById("myBtn13").style.visibility="visible";

	},1500);
}

function install6_Next()
{
  	document.getElementById("fullscreen11").style.visibility="hidden";
	document.getElementById("myBtn13").style.visibility="hidden";
  	document.getElementById("myBtn14").style.visibility="hidden";
  	document.getElementById("fullscreen12").style.visibility="visible";
  	
  	document.getElementById("step2_7").style.visibility="hidden";
  	document.getElementById("can2stp7_arw").style.visibility="hidden";

 
  	document.getElementById("process_div1").style.visibility="visible";
   setTimeout(function()
    {
      
      document.getElementById("process_img1").style.visibility="visible";
      document.getElementById("process_img1").style.animation="prc_anim1 8s forwards"

},2000);

   setTimeout(function()
    {
		install7_Next()	
	},10000);

   
}

function install7_Next()
{
  	  document.getElementById("fullscreen12").style.visibility="hidden";
		
	    document.getElementById("fullscreen13").style.visibility="visible";
		
  		
      $("#step2_9").slideDown("slow");

      setTimeout(function()
  {
    var x= document.getElementById('aud_stp2_9');
        x.play();
   },500);

	setTimeout(function()
    {
      
      document.getElementById("myBtn15").style.visibility="visible";
      document.getElementById("can2stp9_arw").style.visibility="visible";
	},1500);

  
   
}


function check2_Next()
{
  	document.getElementById("fullscreen13").style.visibility="hidden";
	  document.getElementById("checkbox2_tb").style.visibility="hidden";
  	document.getElementById("myBtn15").style.visibility="visible";
  	document.getElementById("fullscreen14").style.visibility="visible";

  	document.getElementById("step2_8").style.visibility="hidden";
  	document.getElementById("can2stp8_arw").style.visibility="hidden";

  	setTimeout(function()
    {
      $("#step2_9").slideDown("slow");
      
      document.getElementById("can2stp9_arw").style.visibility="visible";
	},1000);
 
}

function install8_Next()
{


  document.getElementById("fullscreen14").style.visibility="hidden";
	document.getElementById("myBtn15").style.visibility="hidden";
	document.getElementById("fullscreenblank").style.visibility="visible";
	
  document.getElementById("step2_9").style.visibility="hidden";
  document.getElementById("can2stp9_arw").style.visibility="hidden";

  $("#step2_10").slideDown("slow");

  setTimeout(function()
  {
    var x= document.getElementById('aud_stp2_10');
        x.play();
   },500);

  	setTimeout(function()
    {
      
      document.getElementById("next_zoomout").style.visibility="visible";
      document.getElementById("scrolldowngif4").style.visibility="visible";
	},5500);
   	

   
}


function zoomout_Next()

{
  document.getElementById("canvas4").style.visibility="hidden";
  document.getElementById("canvas44").style.visibility="visible";
  document.getElementById("mrk_01").innerHTML=marks;

}


// ============================MCQ CANVAS4====================================


var marks=0;
function ansshw_c4() {

            if(document.getElementById('optionB').checked) {
                document.getElementById("ans_can4").innerHTML = document.getElementById("optionA").value;
                document.getElementById("showans").style.display="none";
                document.getElementById("nextButton4").style.visibility="visible";
                document.getElementById("mrk_01").innerHTML=marks;
            }
            else if(document.getElementById('optionA').checked) {
              marks=1;
              document.getElementById("ans_can4").style.color="green";
              document.getElementById("mrk_01").innerHTML=marks;
              document.getElementById("got_mrkcan4").style.visibility="visible";

              setTimeout(function()
              {

              var x= document.getElementById('aud_congo1mrk');
              x.play();

              },300);

              document.getElementById("ans_can4").innerHTML = document.getElementById("optionB").value;
              document.getElementById("showans").style.display="none";
              document.getElementById("nextButton4").style.visibility="visible";

              }

            else if(document.getElementById('optionC').checked) {
             
                document.getElementById("ans_can4").innerHTML = document.getElementById("optionC").value;
                document.getElementById("showans").style.display="none";
                document.getElementById("nextButton4").style.visibility="visible";
                document.getElementById("mrk_01").innerHTML=marks;
            }
            else if(document.getElementById('optionD').checked) {
                document.getElementById("ans_can4").innerHTML = document.getElementById("optionD").value;
                document.getElementById("showans").style.display="none";
                document.getElementById("nextButton4").style.visibility="visible";
                document.getElementById("mrk_01").innerHTML=marks;
            }
            else {
                document.getElementById("ans_can4").innerHTML = "Select Option";
            }
        }
 

// ============================MCQ CANVAS4====================================




function navNext5()
{
document.getElementById("canvas4").style.visibility="hidden";
document.getElementById("canvas4a").style.visibility="visible";
$("#step2_11").slideDown("slow");

setTimeout(function()
  {
    var x= document.getElementById('aud_stp2_11');
        x.play();
   },500);

  setTimeout(function()
    {  
      document.getElementById("can2stp11_arw").style.visibility="visible";
      document.getElementById("bhu3").style.visibility="visible";
	},3500);

}


function install9_Next()
{

	document.getElementById("canvas4a").style.visibility="hidden";
  	document.getElementById("canvas5").style.visibility="visible";
    $("#stepcan5_1").slideDown("slow");

    setTimeout(function()
  {
    var x= document.getElementById('aud_stp5_1');
        x.play();
   },500);

  	setTimeout(function()
	    {
	      document.getElementById("stpcan5_arw1").style.visibility="visible";
        document.getElementById("mv2_tb").style.visibility="visible";
	    },3500);
}



function nextcan6()

{
  document.getElementById("canvas5").style.visibility="hidden";
  document.getElementById("canvas88").style.visibility="visible";
  document.getElementById("mrk_03").innerHTML=marks;
}

function navNext9()
{

	document.getElementById("canvas5").style.visibility="hidden";
  document.getElementById("canvas6").style.visibility="visible";

  setTimeout(function()
  {
    $("#stepcan5_44").slideDown("slow");

   },500);
  

    setTimeout(function()
  {
    var x= document.getElementById('aud_stp5_44');
        x.play();
   },1000);

    setTimeout(function()
  {
    document.getElementById("nextButtonlast").style.visibility="visible";
   },3000);

 document.getElementById("stepcan5_43").style.visibility="hidden";
 document.getElementById("scrolldowngif_bhu").style.visibility="hidden";
 document.getElementById("nextcan6").style.visibility="hidden";

}


function ansshw_c8() {

            if(document.getElementById('optionB3').checked) {
                document.getElementById("ans_can8").innerHTML = document.getElementById("optionC3").value;
                document.getElementById("showans_can8").style.display="none";
                document.getElementById("nextButton8").style.visibility="visible";
                 document.getElementById("mrk_03").innerHTML=marks;

            }
            else if(document.getElementById('optionC3').checked) {
              marks=marks+1;
              document.getElementById("ans_can8").style.color="green";
              document.getElementById("mrk_03").innerHTML=marks;
              // document.getElementById("mrk_00").style.visibility="hidden";
              document.getElementById("got_mrkcan8").style.visibility="visible";

              setTimeout(function()
              {

              var x= document.getElementById('aud_congo1mrk_can8');
              x.play();

              },300);

              document.getElementById("ans_can8").innerHTML = document.getElementById("optionB3").value;
              document.getElementById("showans_can8").style.display="none";
              document.getElementById("nextButton8").style.visibility="visible";

              }

            else if(document.getElementById('optionD3').checked) {
             
                document.getElementById("ans_can8").innerHTML = document.getElementById("optionD3").value;
                document.getElementById("showans_can8").style.display="none";
                document.getElementById("nextButton8").style.visibility="visible";
                document.getElementById("mrk_03").innerHTML=marks;
            }
            else if(document.getElementById('optionA3').checked) {
                document.getElementById("ans_can8").innerHTML = document.getElementById("optionA3").value;
                document.getElementById("showans_can8").style.display="none";
                document.getElementById("nextButton8").style.visibility="visible";
                document.getElementById("mrk_03").innerHTML=marks;
            }
            else {
                document.getElementById("ans_can8").innerHTML = "Select Option";
            }
        }

function openmv2()
{
  document.getElementById("stepcan5_1").style.visibility="hidden";
  document.getElementById("stpcan5_arw1").style.visibility="hidden";
	document.getElementById("mv2_tb").style.visibility="hidden";
  document.getElementById("fullscreen15").style.visibility="visible";
  $("#stepcan5_2").slideDown("slow");

    setTimeout(function()
  {
    var x= document.getElementById('aud_stp5_2');
        x.play();
   },500);

	setTimeout(function()
	  {
	  
    document.getElementById("stpcan5_arw2").style.visibility="visible";
    document.getElementById("fullscreen15up_tb").style.visibility="visible";
	  
	  },2500);
}

function nextnaza1()
{
	document.getElementById("stepcan5_2").style.visibility="hidden";
  	document.getElementById("stpcan5_arw2").style.visibility="hidden";
	document.getElementById("fullscreen15up_tb").style.visibility="hidden";
	document.getElementById("fullscreen15").style.visibility="hidden";
  $("#stepcan5_3").slideDown("slow");

  	setTimeout(function()
	    {
	      
	      document.getElementById("stpcan5_arw3").style.visibility="visible";
	      document.getElementById("remotepower_tb").style.visibility="visible";
	    },3500);

    setTimeout(function()
  {
    var x= document.getElementById('aud_stp5_3');
        x.play();
   },500);

  	setTimeout(function()
	  {
	  	document.getElementById("fullscreen15").style.visibility="hidden";
	  	document.getElementById("fullscreen16").style.visibility="visible";

	  	document.getElementById("scrn_16point1").style.visibility="visible";
	  	document.getElementById("scrn_16point2").style.visibility="visible";
	  	document.getElementById("scrn_16point3").style.visibility="visible";
	  	document.getElementById("scrn_16point4").style.visibility="visible";
	  },1000);
}



function remoteon()
{
	document.getElementById("remotepower_tb").style.visibility="hidden";

	
	document.getElementById("remotescreen1").style.visibility="visible";
	document.getElementById("remoteonbutton").style.visibility="visible";

	document.getElementById("red_light").style.visibility="visible";	
	document.getElementById("blue_light").style.visibility="visible";

	document.getElementById("stepcan5_3").style.visibility="hidden";
	document.getElementById("stpcan5_arw3").style.visibility="hidden";

  $("#stepcan5_4").slideDown("slow");

  setTimeout(function()
  {
    var x= document.getElementById('aud_stp5_4');
        x.play();
   },500);


setTimeout(function()
	    {
	      
	      document.getElementById("stpcan5_arw4").style.visibility="visible";
        document.getElementById("trans_r").style.visibility="visible";
	    },3500);

}
 


function trans_r()
{
	document.getElementById("trans_r").style.visibility="hidden";
	
	document.getElementById("remoteyaw2").style.visibility="visible";

	document.getElementById("remote_bigarrow").style.visibility="visible";

	document.getElementById("scrn_16point3").style.animation="point-move1 1s forwards";
	document.getElementById("point_val2").style.visibility="visible";

	document.getElementById("stepcan5_4").style.visibility="hidden";
	document.getElementById("stpcan5_arw4").style.visibility="hidden";
  document.getElementById("remote_bigarrow").style.visibility="hidden";
$("#stepcan5_5").slideDown("slow");
  setTimeout(function()
  {
    var x= document.getElementById('aud_stp5_5');
        x.play();
   },500);
 
	      setTimeout(function()
			{
				 
	      document.getElementById("stpcan5_arw5").style.visibility="visible";
				document.getElementById("trans_r2").style.visibility="visible";
				
			},2500);

}

function trans_r2()
{
	document.getElementById("trans_r2").style.visibility="hidden";
	document.getElementById("remoteyaw2").style.visibility="hidden";
	
	document.getElementById("remoteyaw1").style.visibility="visible";

	document.getElementById("remote_bigarrow").style.visibility="visible";
	
	document.getElementById("scrn_16point4").style.animation="point-move2 1s forwards";
	document.getElementById("point_val4").style.visibility="visible";
	
	document.getElementById("stepcan5_5").style.visibility="hidden";
	document.getElementById("stpcan5_arw5").style.visibility="hidden";

  document.getElementById("remote_bigarrow").style.visibility="hidden";

   $("#stepcan5_6").slideDown("slow");

  setTimeout(function()
  {
    var x= document.getElementById('aud_stp5_6');
        x.play();
   },500);
 
	      setTimeout(function()
			{
				
	  document.getElementById("stpcan5_arw6").style.visibility="visible";
		document.getElementById("trans_r3").style.visibility="visible";	
		
			},2500);
}


function trans_r3()
{
	document.getElementById("trans_r3").style.visibility="hidden";
	document.getElementById("remoteyaw1").style.visibility="hidden";
	
	document.getElementById("remoteyaw3").style.visibility="visible";

	document.getElementById("remote_bigarrow").style.visibility="visible";
	
	document.getElementById("scrn_16point2").style.animation="point-move3 1s forwards";
	document.getElementById("point_val3").style.visibility="visible";

	document.getElementById("stepcan5_6").style.visibility="hidden";
	document.getElementById("stpcan5_arw6").style.visibility="hidden";
  document.getElementById("remote_bigarrow").style.visibility="hidden";

  $("#stepcan5_7").slideDown("slow");

  setTimeout(function()
  {
    var x= document.getElementById('aud_stp5_7');
        x.play();
   },500);
 
	      setTimeout(function()
			{
				
	    	document.getElementById("stpcan5_arw7").style.visibility="visible";
				document.getElementById("trans_r4").style.visibility="visible";
				
			},2500);
}


function trans_r4()
{
	document.getElementById("trans_r4").style.visibility="hidden";
	document.getElementById("remoteyaw3").style.visibility="hidden";
	
	document.getElementById("remoteyaw4").style.visibility="visible";

	document.getElementById("remote_bigarrow").style.visibility="visible";
	
	document.getElementById("scrn_16point1").style.animation="point-move4 1s forwards";
	document.getElementById("point_val1").style.visibility="visible";

	document.getElementById("stepcan5_7").style.visibility="hidden";
	document.getElementById("stpcan5_arw7").style.visibility="hidden";
  document.getElementById("remoteyaw4").style.visibility="hidden";
  document.getElementById("remote_bigarrow").style.visibility="hidden";

  $("#stepcan5_8").slideDown("slow");

  setTimeout(function()
  {
    var x= document.getElementById('aud_stp5_8');
        x.play();
   },500);
 
	      setTimeout(function()
			{
			document.getElementById("stpcan5_arw8").style.visibility="visible";
 			document.getElementById("basic_tb").style.visibility="visible";
	  		},1500);
}



function basic_optn()
{
	document.getElementById("basic_tb").style.visibility="hidden";

	document.getElementById("point_val1").style.visibility="hidden";
	document.getElementById("point_val2").style.visibility="hidden";
	document.getElementById("point_val3").style.visibility="hidden";
	document.getElementById("point_val4").style.visibility="hidden";
  	document.getElementById("scrn_16point1").style.visibility="hidden";
  	document.getElementById("scrn_16point2").style.visibility="hidden";
  	document.getElementById("scrn_16point3").style.visibility="hidden";
  	document.getElementById("scrn_16point4").style.visibility="hidden";

	document.getElementById("fullscreen16").style.visibility="hidden";
	document.getElementById("fullscreen17").style.visibility="visible";

	document.getElementById("stepcan5_8").style.visibility="hidden";
	document.getElementById("stpcan5_arw8").style.visibility="hidden";
  $("#stepcan5_9").slideDown("slow");

  setTimeout(function()
  {
    var x= document.getElementById('aud_stp5_9');
        x.play();
   },500);
 
	 setTimeout(function()
		{
			  document.getElementById("basic_tb2").style.visibility="visible";
        document.getElementById("stpcan5_arw9").style.visibility="visible";

		},2500);
}

function basic_optn2()
{
	document.getElementById("basic_tb2").style.visibility="hidden";

	document.getElementById("fullscreen17").style.visibility="hidden";
	document.getElementById("fullscreen18").style.visibility="visible";


	document.getElementById("stepcan5_9").style.visibility="hidden";
	document.getElementById("stpcan5_arw9").style.visibility="hidden";
  $("#stepcan5_10").slideDown("slow");

  setTimeout(function()
  {
    var x= document.getElementById('aud_stp5_10');
        x.play();
   },500);
 
	      setTimeout(function()
			{
				
	   document.getElementById("stpcan5_arw10").style.visibility="visible";
		 document.getElementById("basic_tb3").style.visibility="visible";
		 		
 	},1500);

}

function basic_motertest()
{
	document.getElementById("basic_tb3").style.visibility="hidden";

	document.getElementById("fullscreen19").style.visibility="visible";

	document.getElementById("stepcan5_10").style.visibility="hidden";
	document.getElementById("stpcan5_arw10").style.visibility="hidden";

  $("#stepcan5_11").slideDown("slow");

  setTimeout(function()
  {
    var x= document.getElementById('aud_stp5_11');
        x.play();
   },500);
 
	      setTimeout(function()
			{
				
	      		document.getElementById("stpcan5_arw11").style.visibility="visible";
	  			
	  			document.getElementById("m1check_tb").style.visibility="visible";
 			},3500);

}

function basic_m1test()
{
	document.getElementById("m1check_tb").style.visibility="hidden"; 
	
	document.getElementById("m1_rotate").style.visibility="visible";

	document.getElementById("stepcan5_11").style.visibility="hidden";
	document.getElementById("stpcan5_arw11").style.visibility="hidden";
  $("#stepcan5_12").slideDown("slow");

  setTimeout(function()
  {
    var x= document.getElementById('aud_stp5_12');
        x.play();
   },500);
 
	      setTimeout(function()
			{
					document.getElementById("stpcan5_arw12").style.visibility="visible";	
			  	document.getElementById("m2check_tb").style.visibility="visible";

		 	},3500);

}

function basic_m2test()
{
	document.getElementById("m2check_tb").style.visibility="hidden"; 
	
	document.getElementById("m2_rotate").style.visibility="visible";

	document.getElementById("stepcan5_12").style.visibility="hidden";
	document.getElementById("stpcan5_arw12").style.visibility="hidden";

  $("#stepcan5_13").slideDown("slow");

  setTimeout(function()
  {
    var x= document.getElementById('aud_stp5_13');
        x.play();
   },500);
 
	      setTimeout(function()
			{
				
	      		document.getElementById("stpcan5_arw13").style.visibility="visible";
	  			
			  	document.getElementById("m3check_tb").style.visibility="visible";
		 	},3500);

}

function basic_m3test()
{
	document.getElementById("m3check_tb").style.visibility="hidden"; 
	
	document.getElementById("m3_rotate").style.visibility="visible";

	document.getElementById("stepcan5_13").style.visibility="hidden";
	document.getElementById("stpcan5_arw13").style.visibility="hidden";

  $("#stepcan5_14").slideDown("slow");

  setTimeout(function()
  {
    var x= document.getElementById('aud_stp5_14');
        x.play();
   },500);
 
	      setTimeout(function()
			{
				
	     document.getElementById("stpcan5_arw14").style.visibility="visible";
			 document.getElementById("m4check_tb").style.visibility="visible";

		 	},3500);

}

function basic_m4test()
{
	document.getElementById("m4check_tb").style.visibility="hidden"; 
	
	document.getElementById("m4_rotate").style.visibility="visible";
	

	document.getElementById("stepcan5_14").style.visibility="hidden";
	document.getElementById("stpcan5_arw14").style.visibility="hidden";

  $("#stepcan5_15").slideDown("slow");

  setTimeout(function()
  {
    var x= document.getElementById('aud_stp5_15');
        x.play();
   },500);
 
	      setTimeout(function()
			{
				
	      	document.getElementById("stpcan5_arw15").style.visibility="visible";
	  			
			  	document.getElementById("mounting_tb1").style.visibility="visible";
		 	},1500);

}

function mounting_optn()
{
	document.getElementById("mounting_tb1").style.visibility="hidden";
	document.getElementById("m1_rotate").style.visibility="hidden";
	document.getElementById("m2_rotate").style.visibility="hidden";
	document.getElementById("m3_rotate").style.visibility="hidden";
	document.getElementById("m4_rotate").style.visibility="hidden";

	document.getElementById("fullscreen18").style.visibility="hidden";
	document.getElementById("fullscreen19").style.visibility="hidden";
	document.getElementById("fullscreen20").style.visibility="visible";

	document.getElementById("stepcan5_15").style.visibility="hidden";
	document.getElementById("stpcan5_arw15").style.visibility="hidden";
$("#stepcan5_16").slideDown("slow");
  setTimeout(function()
  {
    var x= document.getElementById('aud_stp5_16');
        x.play();
   },500);
 
	      setTimeout(function()
			{
				
	      		document.getElementById("stpcan5_arw16").style.visibility="visible";
	  	
	  		document.getElementById("mounting_tb2").style.visibility="visible";
 			},3500);
}


function mounting_deflt()
{
	document.getElementById("mounting_tb2").style.visibility="hidden";
  document.getElementById("stpcan5_arw16").style.visibility="hidden";
  document.getElementById("stepcan5_16").style.visibility="hidden";

  $("#stepcan5_17").slideDown("slow");

  setTimeout(function()
  {
    var x= document.getElementById('aud_stp5_17');
        x.play();
   },500);
 
	setTimeout(function()
	{
	document.getElementById("mounting_tb3").style.visibility="visible";
  document.getElementById("stpcan5_arw17").style.visibility="visible";
 	},1500);
}


function rc()
{
	document.getElementById("mounting_tb3").style.visibility="hidden";

  document.getElementById("stepcan5_17").style.visibility="hidden";
  document.getElementById("stpcan5_arw17").style.visibility="hidden";

	document.getElementById("fullscreen20").style.visibility="hidden";
	document.getElementById("fullscreen21").style.visibility="visible";

document.getElementById("scrn_21point1").style.visibility="visible";
document.getElementById("scrn_21point2").style.visibility="visible";
document.getElementById("scrn_21point3").style.visibility="visible";
document.getElementById("scrn_21point4").style.visibility="visible";
document.getElementById("scrn_21point5").style.visibility="visible";
$("#stepcan5_19").slideDown("slow");

setTimeout(function()
  {
    var x= document.getElementById('aud_stp5_19');
        x.play();
   },500);

setTimeout(function()
	{
document.getElementById("trans_rcstrt").style.visibility="visible";
document.getElementById("stpcan5_arw19").style.visibility="visible";
	},1500);
	
}

function rcstrt()
{
	document.getElementById("trans_rcstrt").style.visibility="hidden";
  document.getElementById("stepcan5_19").style.visibility="hidden";
  document.getElementById("stpcan5_arw19").style.visibility="hidden";
  $("#stepcan5_20").slideDown("slow");

  setTimeout(function()
  {
    var x= document.getElementById('aud_stp5_20');
        x.play();
   },500);

	setTimeout(function()
	{
		document.getElementById("trans_rc1").style.visibility="visible"; 
    document.getElementById("stpcan5_arw20").style.visibility="visible";
	},4500);
}

function trans_rc1()
{
	document.getElementById("trans_rc1").style.visibility="hidden";

  document.getElementById("stepcan5_20").style.visibility="hidden";
  document.getElementById("stpcan5_arw20").style.visibility="hidden";

	document.getElementById("remoteyaw2").style.visibility="visible";
	document.getElementById("scrn_21point3").style.animation="rcpoint-move1 1s forwards";
	document.getElementById("scrn_21point4").style.animation="rcpoint-move2 1s forwards";
 $("#stepcan5_21").slideDown("slow");

setTimeout(function()
  {
    var x= document.getElementById('aud_stp5_21');
        x.play();
   },500);

setTimeout(function()
	{
		document.getElementById("trans_rc2").style.visibility="visible";
 
  document.getElementById("stpcan5_arw21").style.visibility="visible";
	},4500);
}

function trans_rc2()
{
	document.getElementById("trans_rc2").style.visibility="hidden";

  document.getElementById("stepcan5_21").style.visibility="hidden";
  document.getElementById("stpcan5_arw21").style.visibility="hidden";

	document.getElementById("remoteyaw2").style.visibility="hidden";
	
	document.getElementById("remoteyaw1").style.visibility="visible";

	document.getElementById("scrn_21point3").style.animation="rcpoint-move3 1s forwards";
	document.getElementById("scrn_21point4").style.animation="rcpoint-move4 1s forwards";

$("#stepcan5_22").slideDown("slow");
setTimeout(function()
  {
    var x= document.getElementById('aud_stp5_22');
        x.play();
   },500);

setTimeout(function()
	{
  document.getElementById("trans_rc3").style.visibility="visible";
  document.getElementById("stpcan5_arw22").style.visibility="visible";
	},4500);
}


function trans_rc3()
{
	document.getElementById("trans_rc3").style.visibility="hidden";

	document.getElementById("stpcan5_arw22").style.visibility="hidden";
  document.getElementById("stepcan5_22").style.visibility="hidden";
	
	document.getElementById("remoteyaw1").style.visibility="hidden";

	document.getElementById("scrn_21point3").style.animation="rcpoint-move5 1s forwards";
	document.getElementById("scrn_21point4").style.animation="rcpoint-move6 1s forwards";

setTimeout(function()
	{
		document.getElementById("trans_rc4").style.visibility="visible";
    document.getElementById("stpcan5_arw22_2").style.visibility="visible";
	},2000);
}

function trans_rc4()
{
	document.getElementById("trans_rc4").style.visibility="hidden";
  document.getElementById("stpcan5_arw22_2").style.visibility="hidden";

	document.getElementById("remoteyaw3").style.visibility="visible";
	document.getElementById("scrn_21point1").style.animation="rcpoint-move1 1s forwards";
	document.getElementById("scrn_21point2").style.animation="rcpoint-move2 1s forwards";
	// document.getElementById("point_val2").style.visibility="visible";

setTimeout(function()
	{
		document.getElementById("trans_rc5").style.visibility="visible";
    document.getElementById("stpcan5_arw22_2").style.visibility="visible";
	},2000);
}


function trans_rc5()
{
	document.getElementById("trans_rc5").style.visibility="hidden";
  document.getElementById("stpcan5_arw22_2").style.visibility="hidden";

	document.getElementById("remoteyaw3").style.visibility="hidden";

	document.getElementById("remoteyaw4").style.visibility="visible";
	document.getElementById("scrn_21point1").style.animation="rcpoint-move3 1s forwards";
	document.getElementById("scrn_21point2").style.animation="rcpoint-move4 1s forwards";
	// document.getElementById("point_val2").style.visibility="visible";

setTimeout(function()
	{
		document.getElementById("trans_rc6").style.visibility="visible";
    document.getElementById("stpcan5_arw22_2").style.visibility="visible";
	},2000);
}


function trans_rc6()
{
	document.getElementById("trans_rc6").style.visibility="hidden";
  document.getElementById("stpcan5_arw22_2").style.visibility="hidden";

	document.getElementById("remoteyaw4").style.visibility="hidden";
	document.getElementById("scrn_21point1").style.animation="rcpoint-move5 1s forwards";
	document.getElementById("scrn_21point2").style.animation="rcpoint-move6 1s forwards";
      $("#stepcan5_23").slideDown("slow");

setTimeout(function()
  {
    var x= document.getElementById('aud_stp5_23');
        x.play();
   },500);

setTimeout(function()
	  {
	  	
	  	document.getElementById("remotegps_tb1").style.visibility="visible";

      document.getElementById("stpcan5_arw23").style.visibility="visible";
	  },6500);
}


function remotegps_sw1()
{
	document.getElementById("remotegps_tb1").style.visibility="hidden";
  document.getElementById("stepcan5_23").style.visibility="hidden";
  document.getElementById("stpcan5_arw23").style.visibility="hidden";
	document.getElementById("remotegpsbutton_up").style.visibility="visible";
	document.getElementById("remotegpsbutton1").style.visibility="visible";
	document.getElementById("scrn_21point5").style.animation="rcpoint-move7 1s forwards";

setTimeout(function()
	  {
	  	// document.getElementById("remoteyaw4").style.visibility="hidden";
	  	document.getElementById("remotegps_tb2").style.visibility="visible";
      document.getElementById("stpcan5_arw23").style.visibility="visible";
	  },1000);
}

function remotegps_sw2()
{
	document.getElementById("remotegps_tb2").style.visibility="hidden";
  document.getElementById("stpcan5_arw23").style.visibility="hidden";
	document.getElementById("remotegpsbutton1").style.visibility="hidden";
	document.getElementById("remotegpsbutton2").style.visibility="visible";
	document.getElementById("scrn_21point5").style.animation="rcpoint-move8 1s forwards";

$("#stepcan5_24").slideDown("slow");

setTimeout(function()
  {
    var x= document.getElementById('aud_stp5_24');
        x.play();
   },500);

setTimeout(function()
	  {
	  	document.getElementById("trans_gain_optn").style.visibility="visible"; 
      document.getElementById("stpcan5_arw24").style.visibility="visible";

	  },1500);
}



function trans_gain()
{
	 document.getElementById("trans_gain_optn").style.visibility="hidden";
   document.getElementById("stepcan5_24").style.visibility="hidden";
   document.getElementById("stpcan5_arw24").style.visibility="hidden";

	 document.getElementById("scrn_21point1").style.visibility="hidden";
	 document.getElementById("scrn_21point2").style.visibility="hidden";
	 document.getElementById("scrn_21point3").style.visibility="hidden";
	 document.getElementById("scrn_21point4").style.visibility="hidden";
	 document.getElementById("scrn_21point5").style.visibility="hidden";

	 document.getElementById("fullscreen21").style.visibility="hidden";

	 document.getElementById("fullscreen22").style.visibility="visible";
	
	  document.getElementById("step5_input").style.visibility="visible";
  

      $("#stepcan5_25").slideDown("slow");
      $("#stepcan5_optnbasic").slideDown("slow");
      
setTimeout(function()
  {
    var x= document.getElementById('aud_stp5_25');
        x.play();
   },500);

setTimeout(function()
  {
   document.getElementById("stpcan5_arw25").style.visibility="visible";
   document.getElementById("trans_step5_roll").style.visibility="visible";
   },500);
 
 }


function trans_step5_roll()
{
	 var pitch;
 pitch=document.getElementById("step5_input").value;
 console.log(pitch);

 if(pitch==120)
 {
 	console.log('you input correct value');
 	 document.getElementById("step5_input_roll").style.visibility="visible";
 	  document.getElementById("trans_step5_yaw").style.visibility="visible";
 	  document.getElementById("trans_step5_roll").style.visibility="hidden";

    document.getElementById("stepcan5_25").style.visibility="hidden";
    document.getElementById("stpcan5_arw25").style.visibility="hidden";
 }
 else
 {
 	alert('Please Enter the Value 120');
 	document.getElementById('step5_input').value = '';
 } 
}
 

function trans_step5_yaw()
{

	var roll;
 roll=document.getElementById("step5_input_roll").value;
 console.log(roll);

 if(roll==120)
 {
 	console.log('you input correct value');
 	 document.getElementById("step5_input_yaw").style.visibility="visible";
 	  document.getElementById("trans_step5_vertical").style.visibility="visible";
 	  document.getElementById("trans_step5_yaw").style.visibility="hidden";
 }
 else
 {
 	alert('Please Enter the Value 120');
 	document.getElementById('step5_input_roll').value = '';
 }
  
}

function trans_step5_vertical()
{

	var yaw;
 yaw=document.getElementById("step5_input_yaw").value;
 console.log(yaw);

 if(yaw==120)
 {
 	console.log('you input correct value');
 	 document.getElementById("step5_input_vertical").style.visibility="visible";
 	  document.getElementById("trans_step5_alt1").style.visibility="visible"; 	 
 	  document.getElementById("trans_step5_vertical").style.visibility="hidden"; 
 }
 else
 {
 	alert('Please Enter the Value 120');
 	document.getElementById('step5_input_yaw').value = '';
 } 

}

function trans_step5_alt1()
{

	 var vertical;
 vartical=document.getElementById("step5_input_vertical").value;
 console.log(vertical);

 if(vartical==200)
 {
 	console.log('you input correct value');
 	 document.getElementById("step5_input_alt1").style.visibility="visible";
 	 document.getElementById("trans_step5_alt2").style.visibility="visible";
 	 document.getElementById("trans_step5_alt1").style.visibility="hidden";
 	 
 }
 else
 {
 	alert('Please Enter the Value 200');
 	document.getElementById('step5_input_vertical').value = '';
 }

}

function trans_step5_alt2()
{

	var alt1;
 alt1=document.getElementById("step5_input_alt1").value;
 console.log(alt1);

 if(alt1==220)
 {
 	console.log('you input correct value');
 	 document.getElementById("step5_input_alt2").style.visibility="visible";
 	 document.getElementById("trans_step5_alt2").style.visibility="hidden";

      setTimeout(function()
        {
         document.getElementById("stepcan5_optnbasic").style.visibility="hidden";
  

  $("#stepcan5_26").slideDown("slow");

  setTimeout(function()
  {
    var x= document.getElementById('aud_stp5_26');
        x.play();
   },500);
         
        document.getElementById("stpcan5_arw26").style.visibility="visible";
        document.getElementById("advance_tb").style.visibility="visible";

        },1500);
 }
 else
 {
 	alert('Please Enter the Value 220');
 	document.getElementById('step5_input_alt1').value = '';
 }

}

function trans_advance()
{

		var alt2;
 alt2=document.getElementById("step5_input_alt2").value;
 console.log(alt2);

 if(alt2==220)
 {
 	console.log('you input correct value');
 	document.getElementById("advance_tb").style.visibility="hidden";
  document.getElementById("stepcan5_26").style.visibility="hidden";
  document.getElementById("stpcan5_arw26").style.visibility="hidden";
	
	document.getElementById("step5_input").style.visibility="hidden";
	document.getElementById("step5_input_roll").style.visibility="hidden";
	document.getElementById("step5_input_yaw").style.visibility="hidden";
	document.getElementById("step5_input_vertical").style.visibility="hidden";
	document.getElementById("step5_input_alt1").style.visibility="hidden";
	document.getElementById("step5_input_alt2").style.visibility="hidden";
	
	document.getElementById("fullscreen23").style.visibility="visible";

	 document.getElementById("fullscreen22").style.visibility="hidden";
	 
   $("#stepcan5_27").slideDown("slow");
      
  setTimeout(function()
  {
    var x= document.getElementById('aud_stp5_27');
        x.play();
   },500);

  setTimeout(function()
  {
    document.getElementById("stpcan5_arw27").style.visibility="visible";
    document.getElementById("recomm_tb").style.visibility="visible";
   },2500);

 }
 else
 {
 	alert('Please Enter the Value 220');
 	document.getElementById('step5_input_alt2').value = '';
 }

}

function recomm()
{
	document.getElementById("recomm_tb").style.visibility="hidden";

  document.getElementById("stepcan5_27").style.visibility="hidden";
  document.getElementById("stpcan5_arw27").style.visibility="hidden";

	 document.getElementById("fullscreen23").style.visibility="hidden";

	 document.getElementById("fullscreen24").style.visibility="visible";

    $("#stepcan5_28").slideDown("slow");

   setTimeout(function()
  {
    var x= document.getElementById('aud_stp5_28');
        x.play();
   },500);

setTimeout(function()
	  { 
	  	document.getElementById("fs_tb").style.visibility="visible";
      document.getElementById("stpcan5_arw28").style.visibility="visible";

	  },2500); 
}


function trans_fs()
{
	
	document.getElementById("fs_tb").style.visibility="hidden";
  document.getElementById("stepcan5_28").style.visibility="hidden";
  document.getElementById("stpcan5_arw28").style.visibility="hidden";

	 document.getElementById("fullscreen24").style.visibility="hidden";

	 document.getElementById("fullscreen25").style.visibility="visible";

   $("#stepcan5_29").slideDown("slow");

   setTimeout(function()
  {
    var x= document.getElementById('aud_stp5_29');
        x.play();
   },500);

setTimeout(function()
	  { 
	  	document.getElementById("gohome_tb").style.visibility="visible";   
      document.getElementById("stpcan5_arw29").style.visibility="visible";
	  },2500);
	  
}


function trans_gohome()

{
  document.getElementById("canvas5").style.visibility="hidden";
  document.getElementById("canvas66").style.visibility="visible";
  document.getElementById("mrk_02").innerHTML=marks;
}

function navNext7()
{

  document.getElementById("canvas5").style.visibility="visible";
  document.getElementById("canvas66").style.visibility="hidden";

  document.getElementById("got_mrkcan6").style.visibility="hidden";
  document.getElementById("nextButton6").style.visibility="hidden";
	
	document.getElementById("gohome_tb").style.visibility="hidden";

  document.getElementById("stepcan5_29").style.visibility="hidden";
  document.getElementById("stpcan5_arw29").style.visibility="hidden";

	 document.getElementById("fullscreen25").style.visibility="hidden";

	 document.getElementById("fullscreen26").style.visibility="visible";

   $("#stepcan5_30").slideDown("slow");

   setTimeout(function()
  {
    var x= document.getElementById('aud_stp5_30');
        x.play();
   },500);

setTimeout(function()
	  { 
	  	document.getElementById("ios_tb").style.visibility="visible";
      document.getElementById("stpcan5_arw30").style.visibility="visible";
	  },2500);
	  
}

function ansshw_c6() {

            if(document.getElementById('optionD2').checked) {
              marks=marks+1;
              // document.getElementById("ans_can6").style.color="green";
             
              // document.getElementById("mrk_00").style.visibility="hidden";
              document.getElementById("got_mrkcan6").style.visibility="visible";

              setTimeout(function()
              {

              var x= document.getElementById('aud_congo1mrk_can6');
              x.play();

              },300);

              document.getElementById("ans_can6").innerHTML = document.getElementById("optionB2").value;
              document.getElementById("showans_can6").style.display="none";
              document.getElementById("nextButton6").style.visibility="visible";
               document.getElementById("mrk_02").innerHTML=marks;
            }
            else if(document.getElementById('optionB2').checked) {

                document.getElementById("ans_can6").innerHTML = document.getElementById("optionA2").value;
                document.getElementById("showans_can6").style.display="none";
                
                document.getElementById("nextButton6").style.visibility="visible";
                document.getElementById("mrk_02").innerHTML=marks;

              }

            else if(document.getElementById('optionC2').checked) {
             
                document.getElementById("ans_can6").innerHTML = document.getElementById("optionC2").value;
                document.getElementById("showans_can6").style.display="none";
                document.getElementById("nextButton6").style.visibility="visible";
                document.getElementById("mrk_02").innerHTML=marks;
            }
            else if(document.getElementById('optionA2').checked) {
                document.getElementById("ans_can6").innerHTML = document.getElementById("optionA2").value;
                document.getElementById("showans_can6").style.display="none";
                document.getElementById("nextButton6").style.visibility="visible";
                document.getElementById("mrk_02").innerHTML=marks;
            }
            else {
                document.getElementById("ans_can6").innerHTML = "Select Option";
            }
        }


function trans_ios()
{
	document.getElementById("ios_tb").style.visibility="hidden";
  document.getElementById("stepcan5_30").style.visibility="hidden";
  document.getElementById("stpcan5_arw30").style.visibility="hidden";

	 document.getElementById("fullscreen26").style.visibility="hidden";

	 document.getElementById("fullscreen27").style.visibility="visible";

   $("#stepcan5_31").slideDown("slow");

   setTimeout(function()
  {
    var x= document.getElementById('aud_stp5_31');
        x.play();
   },500);

	 setTimeout(function()
	  { 
	  	document.getElementById("ioscheck_tb").style.visibility="visible";
      document.getElementById("stpcan5_arw31").style.visibility="visible";
	  },3500);
}

function ioscheck_tb()
{
	document.getElementById("ioscheck_tb").style.visibility="hidden";
  document.getElementById("stepcan5_31").style.visibility="hidden";
  document.getElementById("stpcan5_arw31").style.visibility="hidden";

	 document.getElementById("fullscreen27").style.visibility="hidden";

	 document.getElementById("fullscreen28").style.visibility="visible";

   $("#stepcan5_32").slideDown("slow");

    setTimeout(function()
  {
    var x= document.getElementById('aud_stp5_32');
        x.play();
   },500);	 
	
	setTimeout(function()
	  { 
	  	document.getElementById("gimbal_tb").style.visibility="visible";
      document.getElementById("stpcan5_arw32").style.visibility="visible";
	  },1500);
}


function trans_gimbal()
{
	document.getElementById("gimbal_tb").style.visibility="hidden";
  document.getElementById("stepcan5_32").style.visibility="hidden";
  document.getElementById("stpcan5_arw32").style.visibility="hidden";

	 document.getElementById("fullscreen28").style.visibility="hidden";

	 document.getElementById("fullscreen29").style.visibility="visible";

  $("#stepcan5_33").slideDown("slow");
   setTimeout(function()
  {
    var x= document.getElementById('aud_stp5_33');
        x.play();
   },500);  	 
	
	setTimeout(function()
	  { 
	  	document.getElementById("gimdef_tb").style.visibility="visible";
      document.getElementById("stpcan5_arw33").style.visibility="visible";
	  },4500);
}


function gimbaldefalt()
{
	document.getElementById("gimdef_tb").style.visibility="hidden"; 
  document.getElementById("stepcan5_33").style.visibility="hidden"; 
  document.getElementById("stpcan5_arw33").style.visibility="hidden";

  $("#stepcan5_34").slideDown("slow");

  setTimeout(function()
  {
    var x= document.getElementById('aud_stp5_34');
        x.play();
   },500);  


	setTimeout(function()
	  { 
	  	document.getElementById("h34_tb").style.visibility="visible";
      document.getElementById("stpcan5_arw34").style.visibility="visible";
	  },3500);
}


function trans_h34()
{
	document.getElementById("h34_tb").style.visibility="hidden";
  document.getElementById("stepcan5_34").style.visibility="hidden";
  document.getElementById("stpcan5_arw34").style.visibility="hidden";


	 document.getElementById("fullscreen29").style.visibility="hidden";

	 document.getElementById("fullscreen30").style.visibility="visible";
   $("#stepcan5_35").slideDown("slow");

   setTimeout(function()
  {
    var x= document.getElementById('aud_stp5_35');
        x.play();
   },500); 

	setTimeout(function()
	  { 
	  	document.getElementById("voltage_tb").style.visibility="visible";
      document.getElementById("stpcan5_arw35").style.visibility="visible";
	  },1500);
}



function trans_voltage()
{
	document.getElementById("voltage_tb").style.visibility="hidden";

  document.getElementById("stepcan5_35").style.visibility="hidden";
  document.getElementById("stpcan5_arw35").style.visibility="hidden";

	 document.getElementById("fullscreen30").style.visibility="hidden";

	 document.getElementById("fullscreen31").style.visibility="visible";

	 document.getElementById("mySelect").style.visibility="visible";
	 document.getElementById("trans_v1").style.visibility="visible";

	setTimeout(function()
	  { 
	  	// document.getElementById("mySelect").style.visibility="visible";
	  },1000);
}


function trans_v1()
{document.getElementById("trans_v1").style.visibility="hidden";
document.getElementById("input_v1").style.visibility="visible";
document.getElementById("trans_v2").style.visibility="visible";
// document.getElementById("mySelect").setAttribute("disabled", "disabled");
}

function trans_v2()
{
	var v1;
	var dd1;
	v1 = document.getElementById('input_v1').value;
	dd1 = document.getElementById('mySelect').value;
	if(v1 == 11.30 && dd1 == "3sLP")
	{document.getElementById("trans_v2").style.visibility="hidden";
		document.getElementById("input_v2").style.visibility="visible";
		document.getElementById("trans_v3").style.visibility="visible";
	}
	else if(v1 == 14.30 && dd1 == "4sLP")
	{document.getElementById("trans_v2").style.visibility="hidden";
		document.getElementById("input_v2").style.visibility="visible";
		document.getElementById("trans_v3").style.visibility="visible";
	}
	else if(v1 == 18.30 && dd1 == "5sLP")
	{document.getElementById("trans_v2").style.visibility="hidden";
		document.getElementById("input_v2").style.visibility="visible";
		document.getElementById("trans_v3").style.visibility="visible";
	}
	else if(v1 == 22.0 && dd1 == "6sLP")
	{document.getElementById("trans_v2").style.visibility="hidden";
		document.getElementById("input_v2").style.visibility="visible";
		document.getElementById("trans_v3").style.visibility="visible";
	}
	else{
		alert('Enter Input Voltage 11.30 for 3S LiPo\nEnter Input Voltage 14.30 for 4S LiPo\nEnter Input Voltage 18.30 for 5S LiPo\nEnter Input Voltage 22.0 for 6S LiPo');
	}
}

function trans_v3()
{
	var v2;
	var dd2;

	v2= document.getElementById('input_v2').value;
	dd2 = document.getElementById('mySelect').value;
	 



 	
 	if(v2 == 11 && dd2 == "3sLP")
	{
		document.getElementById("trans_v3").style.visibility="hidden";
		document.getElementById("input_v3").style.visibility="visible";
		document.getElementById("trans_v4").style.visibility="visible";
	}
	else if(v2 == 14 && dd2 == "4sLP")
	{
		document.getElementById("trans_v3").style.visibility="hidden";
		document.getElementById("input_v3").style.visibility="visible";
		document.getElementById("trans_v4").style.visibility="visible";
	}
	else if(v2 == 18 && dd2 == "5sLP")
	{
		document.getElementById("trans_v3").style.visibility="hidden";
		document.getElementById("input_v3").style.visibility="visible";
		document.getElementById("trans_v4").style.visibility="visible";
	}
	else if(v2 == 21 && dd2 == "6sLP")
	{
		document.getElementById("trans_v3").style.visibility="hidden";
		document.getElementById("input_v3").style.visibility="visible";
		document.getElementById("trans_v4").style.visibility="visible";
	}

	else{
		alert('Enter Input Voltage 11.00 for 3S LiPo\nEnter Input Voltage 14.00 for 4S LiPo\nEnter Input Voltage 18.00 for 5S LiPo\nEnter Input Voltage 21.0 for 6S LiPo');
	}
}

function trans_v4()
{
	var v3;
	var dd3;
	v3= document.getElementById('input_v3').value;
	dd3 = document.getElementById('mySelect').value;
	 
	if(v3 == 11 && dd3 == "3sLP")
	{
		document.getElementById("trans_v4").style.visibility="hidden";
		document.getElementById("input_v4").style.visibility="visible";
		document.getElementById("trans_limit_optn1").style.visibility="visible";
	}

	else if(v3 == 14 && dd3 == "4sLP")
	{
		document.getElementById("trans_v4").style.visibility="hidden";
		document.getElementById("input_v4").style.visibility="visible";
		document.getElementById("trans_limit_optn1").style.visibility="visible";
	}

	else if(v3 == 18 && dd3 == "5sLP")
	{
		document.getElementById("trans_v4").style.visibility="hidden";
		document.getElementById("input_v4").style.visibility="visible";
		document.getElementById("trans_limit_optn1").style.visibility="visible";
	}

	else if(v3 == 21 && dd3 == "6sLP")
	{
		document.getElementById("trans_v4").style.visibility="hidden";
		document.getElementById("input_v4").style.visibility="visible";
		document.getElementById("trans_limit_optn1").style.visibility="visible";
	}
	
	else{
		alert('Enter Input Voltage 11.00 for 3S LiPo\nEnter Input Voltage 14.00 for 4S LiPo\nEnter Input Voltage 18.00 for 5S LiPo\nEnter Input Voltage 21.0 for 6S LiPo');
	}
}

function trans_limit_optn1(){
	var v4;
	var dd4;
	v4= document.getElementById('input_v4').value;
	dd4 = document.getElementById('mySelect').value;
	
	if(v4 == 10.30 && dd4 == "3sLP")
		{
			document.getElementById("trans_limit_optn1").style.visibility="hidden"; 
		 
		 	document.getElementById("fullscreen31").style.visibility="hidden";
		 	document.getElementById("fullscreen32").style.visibility="visible";

		 	document.getElementById("mySelect").style.visibility="hidden";
		 	document.getElementById("input_v1").style.visibility="hidden";
		 	document.getElementById("input_v2").style.visibility="hidden";
		 	document.getElementById("input_v3").style.visibility="hidden";
		 	document.getElementById("input_v4").style.visibility="hidden";

       $("#stepcan5_37").slideDown("slow");

      setTimeout(function()
  {
    var x= document.getElementById('aud_stp5_37');
        x.play();
   },500); 

		setTimeout(function()
		  { 
		  	document.getElementById("limitdflt_tb").style.visibility="visible";
       
        document.getElementById("stpcan5_arw37").style.visibility="visible";

		  },2500);
		}
	else if(v4 == 13.30 && dd4 == "4sLP")
		{
			document.getElementById("trans_limit_optn1").style.visibility="hidden"; 

		 	document.getElementById("fullscreen31").style.visibility="hidden";
		 	document.getElementById("fullscreen32").style.visibility="visible";

		 	document.getElementById("mySelect").style.visibility="hidden";
		 	document.getElementById("input_v1").style.visibility="hidden";
		 	document.getElementById("input_v2").style.visibility="hidden";
		 	document.getElementById("input_v3").style.visibility="hidden";
		 	document.getElementById("input_v4").style.visibility="hidden";

		$("#stepcan5_37").slideDown("slow");

      setTimeout(function()
  {
    var x= document.getElementById('aud_stp5_37');
        x.play();
   },500); 

    setTimeout(function()
      { 
        document.getElementById("limitdflt_tb").style.visibility="visible";
       
        document.getElementById("stpcan5_arw37").style.visibility="visible";

      },2500);
		}
	else if(v4 == 17.30 && dd4 == "5sLP")
		{
			document.getElementById("trans_limit_optn1").style.visibility="hidden"; 

		 	document.getElementById("fullscreen31").style.visibility="hidden";
		 	document.getElementById("fullscreen32").style.visibility="visible";

		 	document.getElementById("mySelect").style.visibility="hidden";
		 	document.getElementById("input_v1").style.visibility="hidden";
		 	document.getElementById("input_v2").style.visibility="hidden";
		 	document.getElementById("input_v3").style.visibility="hidden";
		 	document.getElementById("input_v4").style.visibility="hidden";

		$("#stepcan5_37").slideDown("slow");

      setTimeout(function()
  {
    var x= document.getElementById('aud_stp5_37');
        x.play();
   },500); 

    setTimeout(function()
      { 
        document.getElementById("limitdflt_tb").style.visibility="visible";
       
        document.getElementById("stpcan5_arw37").style.visibility="visible";

      },2500);
		}
	else if(v4 == 20 && dd4 == "6sLP")
		{
			document.getElementById("trans_limit_optn1").style.visibility="hidden"; 

		 	document.getElementById("fullscreen31").style.visibility="hidden";
		 	document.getElementById("fullscreen32").style.visibility="visible";

		 	document.getElementById("mySelect").style.visibility="hidden";
		 	document.getElementById("input_v1").style.visibility="hidden";
		 	document.getElementById("input_v2").style.visibility="hidden";
		 	document.getElementById("input_v3").style.visibility="hidden";
		 	document.getElementById("input_v4").style.visibility="hidden";

		$("#stepcan5_37").slideDown("slow");

      setTimeout(function()
  {
    var x= document.getElementById('aud_stp5_37');
        x.play();
   },500); 

    setTimeout(function()
      { 
        document.getElementById("limitdflt_tb").style.visibility="visible";
       
        document.getElementById("stpcan5_arw37").style.visibility="visible";

      },2500);
		}
	else{
		
		alert('Enter Input Voltage 10.30 for 3S LiPo\nEnter Input Voltage 13.30 for 4S LiPo\nEnter Input Voltage 17.30 for 5S LiPo\nEnter Input Voltage 20.0 for 6S LiPo');
	}
}

function limitdeflt_tb1()
{
	document.getElementById("limitdflt_tb").style.visibility="hidden";
  document.getElementById("stepcan5_37").style.visibility="hidden";
  document.getElementById("stpcan5_arw37").style.visibility="hidden";

  $("#stepcan5_38").slideDown("slow");
  setTimeout(function()
  {
    var x= document.getElementById('aud_stp5_38');
        x.play();
   },500);
		
	setTimeout(function()
		{ 
		  	document.getElementById("tools_tb").style.visibility="visible";  
        document.getElementById("stpcan5_arw38").style.visibility="visible";
		},4500);
	
}

function tools_optn()
{
	document.getElementById("tools_tb").style.visibility="hidden";
  document.getElementById("stepcan5_38").style.visibility="hidden";
  document.getElementById("stpcan5_arw38").style.visibility="hidden";

		 	document.getElementById("fullscreen32").style.visibility="hidden";
		 	document.getElementById("fullscreen33").style.visibility="visible";

      $("#stepcan5_39").slideDown("slow");

      setTimeout(function()
  {
    var x= document.getElementById('aud_stp5_39');
        x.play();
   },500);
		
	setTimeout(function()
		{ 
		  	document.getElementById("tooladvance_tb").style.visibility="visible";
        document.getElementById("stpcan5_arw39").style.visibility="visible";

		},1500);
	
}


function advancetool_tb()
{
		document.getElementById("tooladvance_tb").style.visibility="hidden";
    document.getElementById("stepcan5_39").style.visibility="hidden";
    document.getElementById("stpcan5_arw39").style.visibility="hidden";

		 	document.getElementById("fullscreen33").style.visibility="hidden";
		 	document.getElementById("fullscreen34").style.visibility="visible";

       $("#stepcan5_40").slideDown("slow");

      setTimeout(function()
  {
    var x= document.getElementById('aud_stp5_40');
        x.play();
   },500);

		setTimeout(function()
			{ 
			  	document.getElementById("upgrade_tb").style.visibility="visible";
          document.getElementById("stpcan5_arw40").style.visibility="visible";
			},1500);
}



function upgrade_optn()
{
		document.getElementById("upgrade_tb").style.visibility="hidden";
    document.getElementById("stepcan5_40").style.visibility="hidden";
    document.getElementById("stpcan5_arw40").style.visibility="hidden";

		 	document.getElementById("fullscreen34").style.visibility="hidden";
		 	document.getElementById("fullscreen35").style.visibility="visible";

 $("#stepcan5_41").slideDown("slow");

      setTimeout(function()
  {
    var x= document.getElementById('aud_stp5_41');
        x.play();
   },500);

		setTimeout(function()
			{ 
			  document.getElementById("info_tb").style.visibility="visible";
         
        document.getElementById("stpcan5_arw41").style.visibility="visible";
			},1500);
}

function info_optn()
{
	document.getElementById("info_tb").style.visibility="hidden";
  document.getElementById("stepcan5_41").style.visibility="hidden";
  document.getElementById("stpcan5_arw41").style.visibility="hidden";

		 	document.getElementById("fullscreen35").style.visibility="hidden";
		 	document.getElementById("fullscreen36").style.visibility="visible";

$("#stepcan5_42").slideDown("slow");

      setTimeout(function()
  {
    var x= document.getElementById('aud_stp5_42');
        x.play();
   },500);

		setTimeout(function()
			{ 
			  	document.getElementById("mv2close").style.visibility="visible";
          document.getElementById("stpcan5_arw42").style.visibility="visible";
			},1500);

}

function mv2close()
{
	document.getElementById("mv2close").style.visibility="hidden";
  document.getElementById("stepcan5_42").style.visibility="hidden";
  document.getElementById("stpcan5_arw42").style.visibility="hidden";
	document.getElementById("fullscreen36").style.visibility="hidden";

	document.getElementById("red_light").style.visibility="hidden";	
	document.getElementById("blue_light").style.visibility="hidden";

  $("#stepcan5_43").slideDown("slow");

  setTimeout(function()
  {
    var x= document.getElementById('aud_stp5_43');
        x.play();
   },500);


	setTimeout(function()
			{ 
			  	document.getElementById("nextcan6").style.visibility="visible";
          document.getElementById("scrolldowngif_bhu").style.visibility="visible";
			},2500);
}

function skipimg1()
{
	document.getElementById("fullscreen15up").style.visibility="visible";
}
function skipimg2()
{
	document.getElementById("fullscreen15up").style.visibility="hidden";
}



function dronefirstcome()

{

document.getElementById("drnfirt").style.animation="drnfirt_come 7s forwards";

setTimeout(function()
  {
    typeWriter()
    
 
    var x= document.getElementById('intro1');
        x.play();
   

  },7500);

setTimeout(function()
  {
    typeWriter2()
 
    var x= document.getElementById('intro2');
        x.play();
 
  },10000);

setTimeout(function()
  {
    typeWriter3()
 
    var x= document.getElementById('intro3');
        x.play();
  
  },12000);

setTimeout(function()
  {
    typeWriter4()
 
    var x= document.getElementById('intro4');
        x.play();
 
  },14500);

setTimeout(function()
  {
    typeWriter5()
 
    var x= document.getElementById('intro5');
        x.play();
 
  },16500);

setTimeout(function()
  {
    typeWriter6()
 
    var x= document.getElementById('intro6');
        x.play();

  },18500);

setTimeout(function()
  {
    typeWriter7()
 
    var x= document.getElementById('intro7');
        x.play();
 
  },20500);

setTimeout(function()
  {
    $( "#abttext" ).delay(200).fadeIn(2000);
  },22500);

setTimeout(function()
  {
    document.getElementById("arrowintro1").style.visibility="visible";
  },24000);

}


var i = 0;
var txt = 'QUADCOPTER';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("quadname").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

var i2 = 0;
var txt2 = '✔  Frame: 450';
var speed2 = 50;

function typeWriter2() {
  if (i2 < txt2.length) {
    document.getElementById("quadfeat1").innerHTML += txt2.charAt(i2);
    i2++;
    setTimeout(typeWriter2, speed2);
  }
}

var i3 = 0;
var txt3 = '✔  Rotors: 4 unit';
var speed3 = 50;

function typeWriter3() {
  if (i3 < txt3.length) {
    document.getElementById("quadfeat2").innerHTML += txt3.charAt(i3);
    i3++;
    setTimeout(typeWriter3, speed3);
  }
}

var i4 = 0;
var txt4 = '✔  Flight Time: 15 min.';
var speed4 = 50;

function typeWriter4() {
  if (i4 < txt4.length) {
    document.getElementById("quadfeat3").innerHTML += txt4.charAt(i4);
    i4++;
    setTimeout(typeWriter4, speed4);
  }
}


var i5 = 0;
var txt5 = '✔  Altitude: 100 feet';
var speed5 = 50;

function typeWriter5() {
  if (i5 < txt5.length) {
    document.getElementById("quadfeat4").innerHTML += txt5.charAt(i5);
    i5++;
    setTimeout(typeWriter5, speed5);
  }
}


var i6 = 0;
var txt6 = '✔  Pay Load: 2 kilogram';
var speed6 = 50;

function typeWriter6() {
  if (i6 < txt6.length) {
    document.getElementById("quadfeat5").innerHTML += txt6.charAt(i6);
    i6++;
    setTimeout(typeWriter6, speed6);
  }
}

var i7 = 0;
var txt7 = '✔  Emergency Landing: Yes';
var speed7 = 50;

function typeWriter7() {
  if (i7 < txt7.length) {
    document.getElementById("quadfeat6").innerHTML += txt7.charAt(i7);
    i7++;
    setTimeout(typeWriter7, speed7);
  }
}

  
function syson()
{
  document.getElementById("syson_tb").style.visibility="hidden";
  document.getElementById("screenoff").style.visibility="hidden";
  document.getElementById("screenon").style.visibility="visible";


  document.getElementById("step1_1").style.visibility="hidden";
  document.getElementById("stp1_arw").style.visibility="hidden";

   $("#step1_2").slideDown("slow");

    setTimeout(function()
  {
    var x= document.getElementById('aud_stp1_2');
        x.play();
   },500);

  setTimeout(function()
    {
     
      document.getElementById("stp2_arw").style.visibility="visible";
      document.getElementById("syszoom_tb").style.visibility="visible";
    },2500);

 
}


function syszoom()
{
  document.getElementById("syszoom_tb").style.visibility="hidden";
  document.getElementById("fullscreen1").style.visibility="visible";
  document.getElementById("fullscreenon").style.visibility="visible";

   document.getElementById("step1_2").style.visibility="hidden";
   document.getElementById("stp2_arw").style.visibility="hidden";

   $("#step1_3").slideDown("slow");

   setTimeout(function()
  {
    var x= document.getElementById('aud_stp1_3');
        x.play();
   },500);
  
  setTimeout(function()
    {
      
      document.getElementById("stp3_arw").style.visibility="visible";
      document.getElementById("chrome_tb").style.visibility="visible";
    },3500);


  // body...
}


function openchrome()
{
  document.getElementById("step1_3").style.visibility="hidden";
   document.getElementById("stp3_arw").style.visibility="hidden";
   $("#step1_4").slideDown("slow");

   setTimeout(function()
  {
    var x= document.getElementById('aud_stp1_4');
        x.play();
   },500);
  
  setTimeout(function()
    {
      
      document.getElementById("stp4_arw").style.visibility="visible";
      document.getElementById("myInput").style.visibility="visible";
    },5500);

  
  

  document.getElementById("chrome_tb").style.visibility="hidden";
  document.getElementById("fullscreen1").style.visibility="hidden";
  document.getElementById("fullscreen2").style.visibility="visible";
  
  document.getElementById("myBtn").style.visibility="visible";
  document.getElementById("myBtn2").style.visibility="visible";
}

var input =0;

input = document.getElementById("myInput");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    input = document.getElementById("myInput").value;
    if (input == "dji.com")
    {
      event.preventDefault();
      document.getElementById("myBtn").click();
    }
    else
    {
      alert("please type 'dji.com'");
    }


  }
});


function opengoogle()
{
  input = document.getElementById("myInput").value;
  if (input == "dji.com")
    {
        document.getElementById("step1_4").style.visibility="hidden";
        document.getElementById("stp4_arw").style.visibility="hidden";
        $("#step1_5").slideDown("slow");

        setTimeout(function()
          {
            var x= document.getElementById('aud_stp1_5');
             x.play();
          },500);
  
        setTimeout(function()
          {
            
            document.getElementById("stp5_arw").style.visibility="visible";
            document.getElementById("bhu1").style.visibility="visible";
          },3500);

      document.getElementById("myBtn").style.visibility="hidden";
      document.getElementById("myBtn2").style.visibility="hidden";
      document.getElementById("myInput").style.visibility="hidden";
      document.getElementById("fullscreen2").style.visibility="hidden";
      document.getElementById("fullscreen3").style.visibility="visible";
      document.getElementById("scrollscreen3").style.visibility="visible";
    }
    else
    {
      alert("please type 'dji.com'");
    }
  
  
  // body...
}




function djisite()
{
  document.getElementById("fullscreen3").style.visibility="hidden";
  document.getElementById("scrollscreen3").style.visibility="hidden";
  
  document.getElementById("fullscreen4").style.visibility="visible";
  document.getElementById("scrollscreen4").style.visibility="visible";

          document.getElementById("step1_5").style.visibility="hidden";
        document.getElementById("stp5_arw").style.visibility="hidden";

        document.getElementById("scrolldowngif").style.visibility="visible";
  
        setTimeout(function()
          {
            $("#step1_6").slideDown("slow");
          },1000);

        setTimeout(function()
          {
            var x= document.getElementById('aud_stp1_6');
             x.play();
          },1500);

        setTimeout(function()
          {
            $("#step1_7").slideDown("slow");
          },4500); 

        setTimeout(function()
          {
            var x= document.getElementById('aud_stp1_7');
             x.play();
          },5000);

        setTimeout(function()
          {
           document.getElementById("stp7_arw").style.visibility="visible";
           document.getElementById("bhu2").style.visibility="visible";

          },7000);
 
}

function gostephover1()
{
        document.getElementById("step1_6").style.visibility="hidden";
        document.getElementById("hover1").style.visibility="hidden";
         document.getElementById("scrolldowngif").style.visibility="hidden";
}


function opndwncenter()
{
  document.getElementById("scrollscreen4").style.visibility="hidden";
  
  document.getElementById("fullscreen4").style.visibility="visible";
  document.getElementById("scrollscreen5").style.visibility="visible";

  document.getElementById("step1_7").style.visibility="hidden";
  document.getElementById("stp7_arw").style.visibility="hidden";
  $("#step1_8").slideDown("slow");

  setTimeout(function()
          {
            var x= document.getElementById('aud_stp1_8');
             x.play();
          },500);
 
    setTimeout(function()
      { 
      document.getElementById("stp8_arw").style.visibility="visible";  
      document.getElementById("opnlist").style.visibility="visible";        
      },3500);

  // body...
}

function opnlist()
{
 
  document.getElementById("opnlist").style.visibility="hidden";
  document.getElementById("sh7up").style.visibility="visible";
   $("#step1_9").slideDown("slow");
 
        document.getElementById("step1_8").style.visibility="hidden";
        document.getElementById("stp8_arw").style.visibility="hidden";
        document.getElementById("hover2").style.visibility="visible"; 

        setTimeout(function()
          {
            var x= document.getElementById('aud_stp1_9');
             x.play();
          },500);

   
   document.getElementById("scrolldowngif3").style.visibility="visible";
 
  
  // body...
}


function gostephover2()
{
        document.getElementById("step1_9").style.visibility="hidden";
        document.getElementById("scrolldowngif3").style.visibility="hidden";
        document.getElementById("hover2").style.visibility="hidden";
}

function opndwnloadpage()
{
  
  document.getElementById("dwnpge").style.visibility="hidden";

  document.getElementById("sht6").style.visibility="hidden";
  document.getElementById("sht7").style.visibility="visible";
  

  $("#step1_10").slideDown("slow");

  document.getElementById("scrolldowngif2").style.visibility="visible";
  document.getElementById("hover3").style.visibility="visible";

  setTimeout(function()
          {
            var x= document.getElementById('aud_stp1_10');
             x.play();
          },500);

setTimeout(function()
  {
            
  $("#step1_11").slideDown("slow");
  
  },3500);

setTimeout(function()
          {
            var x= document.getElementById('aud_stp1_11');
             x.play();
          },4000);

setTimeout(function()
          {
    document.getElementById("stp11_arw").style.visibility="visible";
    document.getElementById("dwnfile").style.visibility="visible";
   
          },4000);


  // body...
}


function gostephover3()
{
        document.getElementById("step1_10").style.visibility="hidden";
        document.getElementById("hover3").style.visibility="hidden";
         document.getElementById("scrolldowngif2").style.visibility="hidden";
}

function strt_dwld()
{
        document.getElementById("dwnfile").style.visibility="hidden";
        document.getElementById("step1_11").style.visibility="hidden";
        document.getElementById("stp11_arw").style.visibility="hidden";

        document.getElementById("sht8").style.visibility="visible";
        document.getElementById("downloader1").style.visibility="visible";
        document.getElementById("downloader1").style.animation ="spin 4s forwards";

        $("#step1_12").slideDown("slow");
            document.getElementById("stp12_arw").style.visibility="visible";

            setTimeout(function()
          {
            var x= document.getElementById('aud_stp1_12');
             x.play();
          },500);
 
setTimeout(function()
  {
    document.getElementById("stp12_arw").style.visibility="hidden";
   document.getElementById("downloader1").style.visibility="hidden";

   $("#step1_13").slideDown("slow");
     
  },5000);

setTimeout(function()
          {
            var x= document.getElementById('aud_stp1_13');
             x.play();
          },5500);

setTimeout(function()
          {
    document.getElementById("stp13_arw").style.visibility="visible";
    document.getElementById("strt_install").style.visibility="visible";
          },7500);
}


function navNext_result()

{
  document.getElementById("canvas6").style.visibility="hidden";
  document.getElementById("canvas16").style.visibility="visible";
  document.getElementById("totalmarks").innerHTML=marks;
}
// ============================MCQ CANVAS5====================================




function reset()
{
    location.reload();
}
