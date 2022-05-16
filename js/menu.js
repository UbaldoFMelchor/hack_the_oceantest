jQuery(document).ready(listo);

function listo ()
{
    jQuery(".menu").click(function (e){
        e.preventDefault(); 
        jQuery("header .container nav").toggleClass("open");
        jQuery(".menu i" ).toggleClass("fa-xmark");

    });

    jQuery("header .container nav a").click(function(){

        jQuery("header .container nav").toggleClass("open");
        jQuery(".menu i" ).removeClass("fa-xmark");

        var miMenu = jQuery(this).attr("href");
        // alert(dev);

        jQuery("html,body").animate({
            "scrollTop": jQuery(miMenu).offset().top -76
        });
    });

}