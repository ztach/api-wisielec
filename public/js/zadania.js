
const buttn1 = document.getElementById('xbtn1');
const buttn2 = document.getElementById('xbtn2');
const buttn3 = document.getElementById('xbtn3');
const buttn4 = document.getElementById('xbtn4');
const lbox1 = document.getElementById('xlbx1');
const lbox2 = document.getElementById('xlbx2');


//<div class="lightbox" v-show="formLightbox==true" style="display:none ">
buttn1.addEventListener('click',function() {
  //console.log('button1');
      lbox1.setAttribute("style","display:flex");
    lbox2.setAttribute("style","display:none");
      //lbox1.setAttribute("v-show","formLightbox==false");
      //lbox1.setAttribute("v-show","showFeedback==true");

},false);

buttn3.addEventListener('click',function () {
  //console.log('button3');
    lbox1.setAttribute("style","display:flex");
    lbox2.setAttribute("style","display:flex");
      //lbox1.setAttribute("v-show","formLightbox==false");
      //lbox2.setAttribute("v-show","showFeedback==false");

},true);


buttn4.addEventListener('click',function () {
  //console.log('button4');
    //lbox2.setAttribute("style","display:none");
    //lbox1.setAttribute("style","display:flex");
},true);



