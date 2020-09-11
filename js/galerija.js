var nav=document.getElementById("nav");
var ikone=[{link:"www.facebook.com/",fafa:"fab fa-facebook"},
{link:"https://www.instagram.com/?hl=sr",fafa:"fab fa-instagram"},
{link:"https://twitter.com/?lang=sr",fafa:"fab fa-twitter-square"},
{link:"https://plus.google.com/up/?continue=https://plus.google.com/people",fafa:"fab fa-google-plus-g"},
{link1:"sitemap.xml",fafa:"fas fa-sitemap"},]
var bla=document.getElementById("ikonice")
for(var c=0;c<ikone.length;c++){

bla.innerHTML+="<a href='"+ikone[c].link+">'<i class='"+ikone[c].fafa+"'></i></a>"
}





var drugii=document.getElementsByClassName("gallery")
for(var d=0;d<drugii.length;d++){
    
  var nizsl=[
      {velika:'slike/gal2.jpg',mala:'slike/gal2min.jpeg',alt:"Bmw slika 1"},
      {velika:"slike/gal1.jpg",mala:"slike/gal1min.jpeg",alt:"Bmw slika 2"},
      {velika:"slike/gal3.jpg",mala:"slike/gal3min.jpeg",alt:"Bmw slika 3"},
      {velika:"slike/gal4.jpg",mala:"slike/gal4min.jpeg",alt:"Bmw slika 4"},
      {velika:"slike/gal5.jpg",mala:"slike/gal5min.jpeg",alt:"Bmw slika 5"},
      {velika:"slike/gal6.jpg",mala:"slike/gal6min.jpeg",alt:"Bmw slika 6"},
      {velika:"slike/gal7.jpg",mala:"slike/gal7min.jpeg",alt:"Bmw slika 7"},
      {velika:"slike/gal8.jpg",mala:"slike/gal8min.jpeg",alt:"Bmw slika 8"},
      {velika:"slike/gal9.jpg",mala:"slike/gal9min.jpeg",alt:"Bmw slika 9"}];

      for(var d=0;d<drugii.length;d++){
        for(var z=0;z<nizsl.length;z++){
            drugii[d].innerHTML+= '<a href="'+nizsl[z].velika+'" class="thumbnail"><img src="'+nizsl[z].mala+'" alt="'+nizsl[z].alt+'/>"</a>'

        }}}
  
        var nizlin=[
            {Link1:'index.html',tekst1:'Početna'},
            {Link1:"galerija.html",tekst1:"Galerija"},
            {Link1:"kontakt.html",tekst1:"Kontakt"},
            {Link1:'autor.html',tekst1:'O autoru'}
         
        ];
        var ispisi="<ul>"
   for(var m=0;m<nizlin.length;m++){
    ispisi+='<li><a href='+nizlin[m].Link1+'>'+nizlin[m].tekst1+'</a> </li>'
   
   }
   ispisi+="</ul>"
nav.innerHTML+=ispisi
/*slajdder*/




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




$(document).ready(function(){
  
    
    $("#reg").click(function(){
        $("#meni").fadeToggle("slow")
            
        
    })
    $("#meni ul li").hover(function(){
            
        $(this).animate({backgroundColor:"rgb(117, 99, 99) "},"slow")
    
    },function(){
        $(this).animate({backgroundColor:"#424040"},"slow")})
        $("#nav ul li").hover(function(){
            
            $(this).animate({backgroundColor:"rgb(132, 132, 132)"},"slow")
        
        },function(){
            $(this).animate({backgroundColor:"#424040"},"slow")})

            $(".gallery img").hover(function(){
            
                $(this).animate({opacity:"0.5"},"slow")
            
            },function(){
                $(this).animate({opacity:"1"},"slow")})


                $('.thumbnail').viewbox({

                    // template
                    template: '<div class="viewbox-container"><div class="viewbox-body"><div class="viewbox-header"></div><div class="viewbox-content"></div><div class="viewbox-footer"></div></div></div>',
                  
                    // loading spinner
                    loader: '<div class="loader"><div class="spinner"><div class="double-bounce1"></div><div class="double-bounce2"></div></div></div>',
                    setTitle: true,
                    margin: 20,
                    resizeDuration: 300,
                    openDuration: 200,
                    closeDuration: 200,
                    closeButton: true,
                    navButtons: true,
                    closeOnSideClick: true,
                    nextOnContentClick: true,
                    useGestures: true,
                
    
    
    
                  });
        
            
         








    })