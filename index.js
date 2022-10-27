const load_local = false

base_static_url = 'https://airatetechnologies.github.io/Chatbot-Widget'

if (load_local) {
    base_static_url = '.'
}



/* module for importing other js files */
function include(file) {
  const script = document.createElement('script');
  script.src = file;
  script.type = 'text/javascript';
  script.defer = true;

  document.getElementsByTagName('head').item(0).appendChild(script);
}


function include_libs() {
/* import components */
  include('https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js');
  include(base_static_url + '/static/js/lib/materialize.min.js');
  include(base_static_url + '/static/js/lib/uuid.min.js');
  include(base_static_url + '/static/js/lib/chart.min.js');
  include(base_static_url + '/static/js/lib/showdown.min.js');
  // Should be loaded last as it depends on previous imports
  include(base_static_url + '/static/js/components/index.js');
}



// Bot pop-up intro
document.addEventListener("DOMContentLoaded", () => {
  const elemsTap = document.querySelector(".tap-target");
  // eslint-disable-next-line no-undef
  const instancesTap = M.TapTarget.init(elemsTap, {});
  instancesTap.open();
  setTimeout(() => {
    instancesTap.close();
  }, 4000);
});


// Import CSS
function injectCSS() {
  // Google Icon Font
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
  var head = document.head;
  head.appendChild(link);

  var link = document.createElement("link");
  link.rel = "preconnect";
  link.href = "https://fonts.gstatic.com";
  var head = document.head;
  head.appendChild(link);

  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "https://fonts.googleapis.com/css2?family=Open+Sans&display=swap";
  var head = document.head;
  head.appendChild(link);

  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "https://fonts.googleapis.com/css?family=Raleway:500&display=swap";
  var head = document.head;
  head.appendChild(link);

  var link = document.createElement("link");
  link.rel = "preconnect";
  link.href = "https://fonts.gstatic.com";
  var head = document.head;
  head.appendChild(link);

  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap";
  var head = document.head;
  head.appendChild(link);

  var link = document.createElement("link");
  link.rel = "preconnect";
  link.href = "https://fonts.gstatic.com";
  var head = document.head;
  head.appendChild(link);

  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "https://fonts.googleapis.com/css2?family=Lato&display=swap";
  var head = document.head;
  head.appendChild(link);

  // Awesome Icon Font

  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
  link.integrity = "sha256-eZrrJcwDc/3uDhsdt61sL2oOBY362qM3lon1gyExkL0="
  link.crossOrigin = "anonymous"
  var head = document.head;
  head.appendChild(link);

  // Materialize
  // var link = document.createElement("link");
  // link.rel = "stylesheet";
  // link.href = base_static_url + "/static/css/materialize.min.css";
  // var head = document.head;
  // head.appendChild(link);


  // Main CSS
  var link = document.createElement("link");
  link.type = "text/css";
  link.rel = "stylesheet";
  link.href = base_static_url + "/static/css/style.css";
  var head = document.head;
  head.appendChild(link);
}


function injectHTML() {
  var div = document.createElement("div");
  div.class = "container"
  var body = document.body;

  body.appendChild(div);

  fetch(base_static_url + '/static/widget.html')
  .then(response => response.text())
  .then(text => div.insertAdjacentHTML('afterend', text));
}

window.addEventListener('load', () => {
  // initialization
  $(document).ready(() => {
    // Bot pop-up intro
    $("div").removeClass("tap-target-origin");

    // drop down menu for close, restart conversation & clear the chats.
    $(".dropdown-trigger").dropdown();

    // initiate the modal for displaying the charts,
    // if you dont have charts, then you comment the below line
    $(".modal").modal();

    // enable this if u have configured the bot to start the conversation.
    // showBotTyping();
    // $("#userInput").prop('disabled', true);

    // if you want the bot to start the conversation
    // customActionTrigger();
  });
  // Toggle the chatbot screen
  $("#profile_div").click(() => {
    $(".profile_div").toggle();
    $(".widget").toggle();
    send("init");
  });

  // clear function to clear the chat contents of the widget.
  $("#clear").click(() => {
    $(".chats").fadeOut("normal", () => {
      $(".chats").html("");
      $(".chats").fadeIn();
    });
  });

  // close function to close the widget.
  $("#close").click(() => {
    $(".profile_div").toggle();
    $(".widget").toggle();
    scrollToBottomOfResults();
  });
});





const initChatWidget = () => {
  include_libs();
  injectCSS();
  injectHTML();
}


if(typeof exports != "undefined"){    
  exports.initChatWidget = initChatWidgetFunc
}else{
  initChatWidget()
}