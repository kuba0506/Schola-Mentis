var scholaMentis = function () {



/// =include menu-mobile.js
/// =include scrollTotop.js
/// =include cycle.js
/// =include lightbox.js
/// =include dropdown.js
/// =include toggle.js
/// =include validator.js
/// =include tooltips.js
/// =include cookies.js
/**
 *     __    ____  ______
    / /   / __ \/ ____/
   / /   / / / / / __  
  / /___/ /_/ / /_/ /  
 /_____/\____/\____/   
                       
 */

function log() {
    try {
        console.log.apply(console, arguments);
    } catch (e) {
        try {
            opera.postError.apply(opera, arguments);
        } catch (e) {
            alert(Array.prototype.join.call(arguments, ''));
        }
    }
}
};

//Uruchomienie skryptów po załadowaniu strony
$(document).ready(scholaMentis);