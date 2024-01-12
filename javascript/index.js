window.addEventListener(
  "scroll",
  () => {
      document.body.style.setProperty(
          "--scroll",
          window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
      );
  },
  false
);
function myv4(){
  document.getElementById('v-marvelopedia').className = 'mytv-vdo none';
  document.getElementById('v-Amazon').className = 'mytv-vdo none';
  document.getElementById('v-snake').className = 'mytv-vdo none';
  document.getElementById('v-mario').className = 'mytv-vdo display';
  document.getElementById('v-snake-js').className = 'mytv-vdo none';
  document.getElementById('v-blank').className = 'mytv-vdo none';
  var v4=document.getElementById('v-mario');
  v4.loop = true;
  v4.play(); 
}
function myv3(){
  document.getElementById('v-marvelopedia').className = 'mytv-vdo none';
  document.getElementById('v-Amazon').className = 'mytv-vdo none';
  document.getElementById('v-snake').className = 'mytv-vdo display';
  document.getElementById('v-mario').className = 'mytv-vdo none';
  document.getElementById('v-snake-js').className = 'mytv-vdo none';
  document.getElementById('v-blank').className = 'mytv-vdo none';
  var v3=document.getElementById('v-snake');
  v3.loop = true;
  v3.play(); 
}
function myv2(){
  document.getElementById('v-marvelopedia').className = 'mytv-vdo none';
  document.getElementById('v-Amazon').className = 'mytv-vdo display';
  document.getElementById('v-snake').className = 'mytv-vdo none';
  document.getElementById('v-mario').className = 'mytv-vdo none';
  document.getElementById('v-snake-js').className = 'mytv-vdo none';
  document.getElementById('v-blank').className = 'mytv-vdo none';
  var v2=document.getElementById('v-Amazon');
  v2.loop = true;
  v2.play(); 
}
function myv1(){
  document.getElementById('v-marvelopedia').className = 'mytv-vdo display';
  document.getElementById('v-Amazon').className = 'mytv-vdo none';
  document.getElementById('v-snake').className = 'mytv-vdo none';
  document.getElementById('v-mario').className = 'mytv-vdo none';
  document.getElementById('v-snake-js').className = 'mytv-vdo none';
  document.getElementById('v-blank').className = 'mytv-vdo none';
  var v1=document.getElementById('v-marvelopedia');
  v1.loop = true;
  v1.play(); 
} 
function myv5(){
  document.getElementById('v-marvelopedia').className = 'mytv-vdo none';
  document.getElementById('v-Amazon').className = 'mytv-vdo none';
  document.getElementById('v-snake').className = 'mytv-vdo none';
  document.getElementById('v-mario').className = 'mytv-vdo none';
  document.getElementById('v-snake-js').className = 'mytv-vdo display';
  document.getElementById('v-blank').className = 'mytv-vdo none';
 
  var v5=document.getElementById('v-snake-js');
  v5.loop = true;
  v5.play(); 
} 
function myvblank(){
  document.getElementById('v-marvelopedia').className = 'mytv-vdo none';
  document.getElementById('v-Amazon').className = 'mytv-vdo none';
  document.getElementById('v-snake').className = 'mytv-vdo none';
  document.getElementById('v-mario').className = 'mytv-vdo none';
  document.getElementById('v-snake-js').className = 'mytv-vdo none';
  document.getElementById('v-blank').className = 'mytv-vdo display';
 
  var v=document.getElementById('v-blank');
  v.loop = true;
  v.play(); 
} 



