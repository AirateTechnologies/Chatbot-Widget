function include(file) {
    const script = document.createElement('script');
    script.src = file;
    script.type = 'text/javascript';
    script.defer = true;

    document.getElementsByTagName('head').item(0).appendChild(script);
}

/* include all the components js file */

include(base_static_url + '/static/js/components/chat.js');
include(base_static_url + '/static/js/constants.js');
include(base_static_url + '/static/js/components/cardsCarousel.js');
include(base_static_url + '/static/js/components/botTyping.js');
include(base_static_url + '/static/js/components/charts.js');
include(base_static_url + '/static/js/components/collapsible.js');
include(base_static_url + '/static/js/components/dropDown.js');
include(base_static_url + '/static/js/components/location.js');
include(base_static_url + '/static/js/components/pdfAttachment.js');
include(base_static_url + '/static/js/components/quickReplies.js');
include(base_static_url + '/static/js/components/suggestionButtons.js');
