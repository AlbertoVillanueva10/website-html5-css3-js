// const jquery = require("./jquery");

//Cuando toda la web este lista voy a mandar un mensaje
jQuery(document).ready(function listo()
{
        jQuery(".hamb").click(function(e)
        {
            //que no funcione por defecto
            e.preventDefault();
            jQuery(".hamb i").toggleClass("fa-sharp fa-solid fa-x");
            jQuery("header .container nav").toggleClass("open");

        });

        jQuery("header .container nav a").click(function()
        {
            
            jQuery("header .container nav").removeClass("open");
            jQuery(".hamb i").removeClass("fa-sharp fa-solid fa-x");
            jQuery(".hamb i").addClass("fa-solid fa-bars");
            let dev = jQuery(this).attr("href");
            
            jQuery("html,body").animate({
                "scrollTop": jQuery(dev).offset().top - 76
            })
        })
})
