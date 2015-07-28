var scholaMentis = function () {

/**
 * Social tabs
 */
if ($(window).width() > 768) {
    new SocialTabs({
        facebook: 'http://www.facebook.com/FacebookDevelopers', // Link do fanpage
        newsletter:   '<div class="newsletter-box">\
        <p class="hide-tablet">Zapisz się do naszego newslettera aby być informowany o nowościach i promocjach</p>\
        <form action="?" method="post"  data-ajax-loading="#newsletter-loading" data-ajax="newsletter,add">\
          <p class="clearfix">\
            <input type="email" required="required" class="tooltip-left"  name="email" placeholder="Podaj adres e-mail...">\
            <input type="submit" value="" name="newsletter-submit">\
          </p>\
          <div id="newsletter-loading" class="loading loading--full hide"></div>\
        </form>\
    </div>' // Link do strony g+
    }
    );

}




// =include dropdown.js
// =include tree.js
// =include menu-mobile.js
/// =include scrollTotop.js
/// =include cycle.js
/// =include lightbox.js
/// =include toggle.js
/// =include validator.js
/// =include tooltips.js
/// =include cookies.js
// =include log.js
};

//Uruchomienie skryptów po załadowaniu strony
$(document).ready(scholaMentis);