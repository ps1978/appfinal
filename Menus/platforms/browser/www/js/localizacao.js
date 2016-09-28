function getPosition() {
    var options ={
        enableHighAccuracy: true,
        maximumAge: 3600000
    };
    var watchID = navigator.geolocation.getCurrentPosition(onSuccess, onError, options);

function onSuccess(position) {
    alert('Latitude'+ position.coords.latitude +'\n'
        +
        'Longitude:'+ position.coords.longitude +'\n'
        +
        'Altitude'+ position.coords.altitude +'\n'
        +
        'Accuracy:'+ position.coords.accuracy +'\n'
        +
        'Altitude Accuracy:'+ position.coords.altitudeAccuracy +'\n'
        +
        'Heading:'+ position.coords.heading +'\n'
        +
        'Speed:'+ position.coords.speed +'\n'
        +
        'Timestamp:'+ position.timestamp +'\n');
};
function onError(error) {
    alert('code'+ error.code +'\n'+'message:'+ error.message +'\n');
};
}
function watchPosition() {
    var options ={
        maximumAge: 3600000,
        timeout: 3000,
        enableHighAccuracy: true
    };
    var watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);

function onSuccess(position) {
    alert('Latitude'+ position.coords.latitude +'\n'
        +
        'Longitude:'+ position.coords.longitude +'\n'
        +
        'Altitude:'+position.coords.altitude+'\n'
        +
        'Accuracy:'+ position.coords.accuracy +'\n'
        +
        'Altitude Accuracy:'+ position.coords.altitudeAccuracy +'\n'
        +
        'Heading:'+position.coords.heading +'\n'
        +
        'Speed:'+ position.coords.speed +'\n'
        +
        'Timestamp:'+ position.timestamp +'\n');
};
function onError(error) {
    alert('code:'+ error.code +'\n'+'message:'+ error.message +'\n');
};
}
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    
    onDeviceReady: function() {
        document.getElementById("getPosition").addEventListener("click", getPosition);
        document.getElementById("watchPosition").addEventListener("click", watchPosition);
        
    }

    // Update DOM on a Received Event
   /* receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }*/
};
