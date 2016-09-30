/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize:function(){
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
  //chamamos o método getCurrentPosition, que se encaixe no nosso GPS dispositivo e descobre onde estamos. 
        navigator.geolocation.getCurrentPosition(app.onSuccess, app.onError);
    },
  //O método onSuccess, e o objecto é passado para a posição-o.
   onSuccess: function(position){ 
    //definimos a nossa longitude
    var longitude = position.coords.longitude;
    //definimos a nossa latitude
    var latitude=position.coords.latitude;
//LAtLong é definido como um objeto pela nossa API de mapas do google e nossa localização
    var lastLong = new google.maps.LatLng(latitude, longitude);

    var mapOptions={
        //construido e passado para o objeto do mapa linha 54
        center:lastLong, //dizemos ao mapa para centrar a nossa posição
        zoom:16, //indicamos ao google maps o nosso nivel de zoom
        mapTypeId: google.maps.MapTypeId.ROADMAP //informamos o tipo de mapa
//ROADMAP, SATELLITE, HYBRID and TERRAIN
    };//vamos chamar o método de API do Google Maps na nossa div
    var map=new google.maps.Map(document.getElementById("geolocation"),mapOptions);
   },
   onError:function(error){
    alert('code:' +error.code +'\n' + 'message:' + error.message + '\n');
   },
    // Update DOM on a Received Event
    /*receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }*/
};
