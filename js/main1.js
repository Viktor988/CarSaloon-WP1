


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
var ikone=[{link:"www.facebook.com/",fafa:"fab fa-facebook"},
{link:"https://www.instagram.com/?hl=sr",fafa:"fab fa-instagram"},
{link:"https://twitter.com/?lang=sr",fafa:"fab fa-twitter-square"},
{link:"https://plus.google.com/up/?continue=https://plus.google.com/people",fafa:"fab fa-google-plus-g"},
{link:"sitemap.xml",fafa:"fas fa-sitemap"},

]
var bla=document.getElementById("ikonice")
for(var c=0;c<ikone.length;c++){

bla.innerHTML+="<a href='"+ikone[c].link+"'<i class='"+ikone[c].fafa+"'></i></a>"
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
       
       /*modeli*/
       
       $(".jedan").hover(
        
        function(){$("#hecp").fadeIn("slow").css("display","block")
       
     },
     function(){ $("#hecp").fadeOut("slow").css("display","initial")})
    
    $(".dva").hover(
        
        function(){ $("#hecpd").fadeIn("slow").css("display","block")
    
     
     },
     function(){ $("#hecpd").fadeOut("slow").css("display","initial")
 
    })

            $(".tri").hover(
                
                function(){ $("#hecpdz").fadeIn("slow").css("display","block")
     
     
     },
     function(){ $("#hecpdz").fadeOut("slow").css("display","initial")}
             )


    $(".hecprvi").hover(function(){
        
        $(this).css("box-shadow"," 2px 2px 2px #0303ff61;");
    
    },function(){
        $(this).css("background-color","red")}
    )

   /**/ 
    
        $("#nav ul li").hover(function(){
        
            $(this).animate({backgroundColor:"rgb(132, 132, 132)"},"slow")
        
        },function(){
            $(this).animate({backgroundColor:"#424040"},"slow")})
      
    

            /*modeli vise manje*/
            
            $("#vise").hide()
            $(".p").click(function(){
                if($("#vise").is(":visible")){
                    $("#vise").fadeOut("2000");
                    $(this).val("Pročitaj više");}
                    else{$("#vise").fadeIn("slow");
                    $(this).val("Manje")}})
            
                    $("#vise1").hide()
                    $(".d").click(function(){
                        if($("#vise1").is(":visible")){
                            $("#vise1").fadeOut("2000");
                            $(this).val("Pročitaj više");}
                            else{$("#vise1").fadeIn("slow");
                            $(this).val("Manje")}})
                
                
                            $("#vise2").hide()
                            $(".t").click(function(){
                                if($("#vise2").is(":visible")){
                                    $("#vise2").fadeOut("2000");
                                    $(this).val("Pročitaj više");}
                                    else{$("#vise2").fadeIn("slow");
                                    $(this).val("Manje")}})
    
                
                                    $("#vise3").hide()
                                    $(".c").click(function(){
                                        if($("#vise3").is(":visible")){
                                            $("#vise3").fadeOut("2000");
                                            $(this).val("Pročitaj više");}
                                            else{$("#vise3").fadeIn("slow");
                                            $(this).val("Manje")}})
                                
                
            
                   
                       
                                        })
                    
                    
                    
        



                   
                                  

