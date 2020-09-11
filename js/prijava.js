var reformareg0 =  /^[\w]+[\.\_\-\w]*[0-9]{0,3}\@[\w]+([\.][\w]+)+$/;
var email=document.getElementById("pprvi")
var sifra=document.getElementById("ddrugi")
var tekst=document.getElementById("prijavap")
var dugmee=document.getElementById("dugprijava")
var tekst2=document.getElementById("prijavad")
var relozinka=/[A-z]+[0-9]+/;
document.getElementById("dugprijava").addEventListener("click",function(){
if(email.value==""){
tekst.innerHTML="Niste uneli E-mail!"
email.style.borderColor="red"
dugmee.style.Top="280px"}
else if(!reformareg0.test(email.value)){
email.style.borderColor="red"
tekst.innerHTML="Nepostojeci E-mail!"
}
else{
    email.style.borderColor=""
    tekst.innerHTML="" 
    document.getElementById("ddrugi").style.display="block";
    dugmee.style.display="none";
    document.getElementById("dugprijava2").style.display="block";
 
    

}})
document.getElementById("dugprijava2").addEventListener("click",function(){
    if(sifra.value==""){
        tekst2.innerHTML="Niste uneli lozinku!"
       sifra.style.borderColor="red"
        dugmee.style.Top="280px"}
    
    
    else if(!relozinka.test(sifra.value)){
    sifra.style.borderColor="red"
    tekst2.innerHTML="Pogresna lozinka!"
    }
    else{
        sifra.style.borderColor=""
        tekst2.innerHTML="" 
       
       

}}


)
var nizlin=[
    {Link1:'index.html',tekst1:'Početna'},
    {Link1:"galerija.html",tekst1:"Galerija"},
    {Link1:"kontakt.html",tekst1:"Kontakt"},
    {Link1:'autor.html',tekst1:'O autoru'},
 
];
var ispisi="<ul>"
for(var m=0;m<nizlin.length;m++){
ispisi+='<li><a href='+nizlin[m].Link1+'>'+nizlin[m].tekst1+'</a> </li>'

}ispisi+="</ul>"
nav.innerHTML+=ispisi

var ikone=[{link:"www.facebook.com/",fafa:"fab fa-facebook"},
{link:"https://www.instagram.com/?hl=sr",fafa:"fab fa-instagram"},
{link:"https://twitter.com/?lang=sr",fafa:"fab fa-twitter-square"},
{link:"https://plus.google.com/up/?continue=https://plus.google.com/people",fafa:"fab fa-google-plus-g"},
{link:"sitemap.xml",fafa:"fas fa-sitemap"},]
var bla=document.getElementById("ikonice")
for(var c=0;c<ikone.length;c++){

bla.innerHTML+="<a href='"+ikone[c].link+">'<i class='"+ikone[c].fafa+"'></i></a>"
}

$(document).ready(function(){
    slideShow();
  });
  
  function slideShow() {
    var trenutni = $('#slajder .aktivna');
    var next = trenutni.next().length ? trenutni.next() :trenutni.parent().children(':first');
    
    trenutni.hide().removeClass('aktivna');
    next.fadeIn().addClass('aktivna');
    
    setTimeout(slideShow, 4000);
  }

$("#sdesno").click(function(){
    var trenutni=$("#slajder .aktivna");
    var sledeci= trenutni.next().length?trenutni.next():trenutni.parent().children(":first");
    trenutni.hide().removeClass("aktivna");
    sledeci.fadeIn().addClass("aktivna");


})
$("#slevo").click(function(){
    var trenutni=$("#slajder .aktivna");
    var sledeci= trenutni.prev().length?trenutni.prev():trenutni.parent().children(":last");
    trenutni.hide().removeClass("aktivna");
    sledeci.fadeIn().addClass("aktivna");


})



/*logovanje*/
$(document).ready(function(){
  
    
    $("#reg").click(function(){
        $("#meni").fadeToggle("slow")
            
        
    })
    $("#meni ul li").hover(function(){
            
        $(this).animate({backgroundColor:"rgb(117, 99, 99) "},"slow")
    
    },function(){
        $(this).animate({backgroundColor:"#424040"},"slow")
    
    
    })
    $("#nav ul li").hover(function(){
        
        $(this).animate({backgroundColor:"rgb(132, 132, 132)"},"slow")
    
    },function(){
        $(this).animate({backgroundColor:"#424040"},"slow")})




})