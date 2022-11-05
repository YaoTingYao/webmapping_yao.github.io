function web_map (){
  var mymap = L.map('mapid');

L.tileLayer('https://{s}.tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png?apikey={apikey}', {
  attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  apikey: '164fc37fcea141d29e8660c837638526',
  maxZoom: 22
  }).addTo(mymap);

//openCageSearch
  var options = {
    key: '0b4909b056a7428790354090b122f03e',
    limit: 10,
  };
  var control = L.Control.openCageSearch(options).addTo(mymap);

// Taj_Mahal
  var taj_mahal = L.icon({
    iconUrl: 'images/taj_mahal.png',
    iconSize:     [38, 38], // size of the icon
    iconAnchor:   [27.174961, 78.042385], // point of the icon which will correspond to marker's location
    popupAnchor:  [27, 78] // point from which the popup should open relative to the iconAnchor
});

   var taj_mahal= L.marker([27.174961,78.042385],{icon: taj_mahal}).addTo(mymap);
   var taj_mahalImg = '<img src="images/The_Taj_Mahal_main_building.jpg" height="100px" width="100px"/>';
   taj_mahal.bindPopup("<b>India's Taj Mahal</b><br>The Taj Mahal ('Crown of the Palace'),is an Islamic ivory-white marble mausoleum on the right bank of the river Yamuna in the Indian city of Agra. It was commissioned in 1631 by the Mughal emperor Shah Jahan (r. 1628–1658) to house the tomb of his favourite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself."+'<br>'+taj_mahalImg).openPopup();

// Great Wall of China

   var great_wall = L.icon({
     iconUrl: 'images/great_wall.png',
     iconSize:     [38, 38], // size of the icon
     iconAnchor:   [40.334245, 116.477652], // point of the icon which will correspond to marker's location
     popupAnchor:  [40, 116] // point from which the popup should open relative to the iconAnchor
 });

    var great_wall= L.marker([40.334245, 116.477652],{icon: great_wall}).addTo(mymap);
    var great_wallImg = '<img src="images/The_Great_Wall_of_China.jpg" height="100px" width="100px"/>';
    great_wall.bindPopup("<b>Great Wall of China</b><br>The Great Wall of China (traditional Chinese: 萬里長城) is a series of fortifications that were built across the historical northern borders of ancient Chinese states and Imperial China as protection against various nomadic groups from the Eurasian Steppe. Several walls were built from as early as the 7th century BC."+'<br>'+great_wallImg).openPopup();

//Petra in Jordan
var petra = L.icon({
  iconUrl: 'images/petra.png',
  iconSize:     [38, 38], // size of the icon
  iconAnchor:   [30.328611, 35.441944], // point of the icon which will correspond to marker's location
  popupAnchor:  [30, 35] // point from which the popup should open relative to the iconAnchor
});

 var petra= L.marker([30.328611, 35.441944],{icon: petra}).addTo(mymap);
 var petraImg = '<img src="images/petra.jpeg" height="100px" width="100px"/>';
 petra.bindPopup("<b>Petra in Jordan</b><br>Petra (Arabic: ٱلْبَتْرَاء ‎), is a historic and archaeological city in southern Jordan. It is adjacent to the mountain of Jabal Al-Madbah, in a basin surrounded by mountains forming the eastern flank of the Arabah valley running from the Dead Sea to the Gulf of Aqaba. The area around Petra has been inhabited from as early as 7000 BC, and the Nabataeans might have settled in what would become the capital city of their kingdom as early as the 4th century BC."+'<br>'+petraImg).openPopup();

//Brazil's statue of Christ the Redeemer

var redeemer = L.icon({
  iconUrl: 'images/redeemer.png',
  iconSize:     [38, 38], // size of the icon
  iconAnchor:   [-22.951389, 	-43.2108334], // point of the icon which will correspond to marker's location
  popupAnchor:  [-22, -43] // point from which the popup should open relative to the iconAnchor
});

var redeemer= L.marker([-22.951389, -43.2108334],{icon: redeemer}).addTo(mymap);
var redeemerImg = '<img src="images/redeemer.jpg" height="100px" width="100px"/>';
redeemer.bindPopup("<b>Brazil's statue of Christ the Redeemer</b><br>Christ the Redeemer (Portuguese: Cristo Redentor) is an Art Deco statue of Jesus Christ in Rio de Janeiro, Brazil. Constructed between 1922 and 1931, the statue is 30 metres (98 ft) high, excluding its 8-metre (26 ft) pedestal. The arms stretch 28 metres (92 ft) wide. It is made of reinforced concrete and soapstone."+'<br>'+redeemerImg).openPopup();

//Peru's Machu Picchu
var machu_picchu = L.icon({
  iconUrl: 'images/machu_picchu.png',
  iconSize:     [38, 38], // size of the icon
  iconAnchor:   [-13.163056, -72.545556], // point of the icon which will correspond to marker's location
  popupAnchor:  [-13, -72] // point from which the popup should open relative to the iconAnchor
});

var machu_picchu= L.marker([-13.163056, -72.545556],{icon: machu_picchu}).addTo(mymap);
var machu_picchuImg = '<img src="images/machu_picchu.jpg" height="100px" width="100px"/>';
machu_picchu.bindPopup("<b>Peru's Machu Picchu</b><br>Machu Picchu is a 15th-century Inca citadel located in the Eastern Cordillera of southern Peru on a 2,430-meter (7,970 ft) mountain ridge. It is located in the Machupicchu District within Urubamba Province above the Sacred Valley, which is 80 kilometers (50 mi) northwest of Cusco. The Urubamba River flows past it, cutting through the Cordillera and creating a canyon with a tropical mountain climate."+'<br>'+machu_picchuImg).openPopup();

//Mexico's Chichen Itza pyramid
var pyramid = L.icon({
  iconUrl: 'images/pyramid.png',
  iconSize:     [38, 38], // size of the icon
  iconAnchor:   [20.682778, -88.569167], // point of the icon which will correspond to marker's location
  popupAnchor:  [20, -88] // point from which the popup should open relative to the iconAnchor
});

var pyramid= L.marker([20.682778, -88.569167],{icon: pyramid}).addTo(mymap);
var pyramidImg = '<img src="images/pyramid.jpg" height="100px" width="100px"/>';
pyramid.bindPopup("<b>Mexico's Chichen Itza pyramid</b><br>Chichen Itza was a large pre-Columbian city built by the Maya people of the Terminal Classic period. The archeological site is located in Tinúm Municipality, Yucatán State, Mexico. Chichen Itza was a major focal point in the Northern Maya Lowlands from the Late Classic (c. AD 600–900) through the Terminal Classic (c. AD 800–900) and into the early portion of the Postclassic period (c. AD 900–1200). The site exhibits a multitude of architectural styles, reminiscent of styles seen in central Mexico and of the Puuc and Chenes styles of the Northern Maya lowlands."+'<br>'+pyramidImg).openPopup();

//The Colosseum in Rome
var colosseum = L.icon({
  iconUrl: 'images/colosseum.png',
  iconSize:     [38, 38], // size of the icon
  iconAnchor:   [41.890169, 12.492269], // point of the icon which will correspond to marker's location
  popupAnchor:  [41, 12] // point from which the popup should open relative to the iconAnchor
});

var colosseum= L.marker([41.890169, 12.492269],{icon: colosseum}).addTo(mymap);
var colosseumImg = '<img src="images/colosseum.jpg" height="100px" width="100px"/>';
colosseum.bindPopup("<b>The Colosseum in Rome</b><br>The Colosseum is an oval amphitheatre in the centre of the city of Rome, Italy, just east of the Roman Forum. It is the largest ancient amphitheatre ever built, and is still the largest standing amphitheatre in the world today, despite its age. Construction began under the emperor Vespasian (r. 69–79 AD) in 72 and was completed in 80 AD under his successor and heir, Titus (r. 79–81)."+'<br>'+colosseumImg).openPopup();




         //  var marker = L.marker([51.5, -0.09]).addTo(mymap);
         //  var circle = L.circle([51.508, -0.11],{
         //    color:'red',
         //    fillColor:'#f03',
         //    fillOpacity:0.5,
         //    radius:500
         //  }).addTo(mymap);
         //
         //  var polygon = L.polygon([[51.509, -0.08],[51.503,-0.06],[51.51,-0.047]]).addTo(mymap);
         // var polyline = L.polyline([[51.506, -0.08],[51.502, -0.06],[51.507, -0.047]]).addTo(mymap);
         //  marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
         //  circle.bindPopup("I am a circle.");
         //  polygon.bindPopup("I am a polygon.");
         //
         //  marker.on('click',function(e){mymap.setView(e.latlng, 14);});
         //  circle.on('click',function(e){mymap.setView(e.latlng, 13);});
         //  polygon.on('click',function(e){mymap.setView(e.latlng, 13);});

//ZoomViewer
          var ZoomViewer = L.Control.extend({
            onAdd: function(){
              var gauge = L.DomUtil.create('div');
              gauge.style.width = '200px';
              gauge.style.background = 'rgba(225,225,225,0.5)';
              gauge.style.textAlign = 'left';
              mymap.on('zoomstart zoom zoomend',function(ev){
                gauge.innerHTML = 'Zoom level: '+mymap.getZoom();
              })
              return gauge;
            }
          });

          (new ZoomViewer).addTo(mymap);

          mymap.setView([0,0],1);



}
