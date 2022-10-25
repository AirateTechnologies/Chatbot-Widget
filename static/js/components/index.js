function include(file) {
    const script = document.createElement('script');
    script.src = file;
    script.type = 'text/javascript';
    script.defer = true;

    document.getElementsByTagName('head').item(0).appendChild(script);
}

/* include all the components js file */

include('https://airatetechnologies.github.io/Chatbot-Widget/static/js/components/chat.js');
include('https://airatetechnologies.github.io/Chatbot-Widget/static/js/constants.js');
include('https://airatetechnologies.github.io/Chatbot-Widget/static/js/components/cardsCarousel.js');
include('https://airatetechnologies.github.io/Chatbot-Widget/static/js/components/botTyping.js');
include('https://airatetechnologies.github.io/Chatbot-Widget/static/js/components/charts.js');
include('https://airatetechnologies.github.io/Chatbot-Widget/static/js/components/collapsible.js');
include('https://airatetechnologies.github.io/Chatbot-Widget/static/js/components/dropDown.js');
include('https://airatetechnologies.github.io/Chatbot-Widget/static/js/components/location.js');
include('https://airatetechnologies.github.io/Chatbot-Widget/static/js/components/pdfAttachment.js');
include('https://airatetechnologies.github.io/Chatbot-Widget/static/js/components/quickReplies.js');
include('https://airatetechnologies.github.io/Chatbot-Widget/static/js/components/suggestionButtons.js');
