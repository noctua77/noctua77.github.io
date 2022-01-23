// Tedd őket egy JavaScript objectbe aminek 3 fieldje van (photo, title, desciption)

//jQuery segítségével töltsd be a képet és a szöveget a megfelelő helyre a HTML-ben
// Ha csak egy kép van, akkor ez működik:
//sorrend! 1. object 2.jQuery .attr
// let data = {
//     photo: 'images/pic5.jpg',
//     title: 'Gyetra kunyhó',
//     description: 'Vera már óvodás korában aludt itt velem, amit az óvodában nem akartak elhinni.'
// };
// $('#fullsizePic').attr('src', data.photo);


// Készíts egy arrayt amibe tegyél egy a fentihez hasonló objectet minden képhez ami az images folderben található
// Hozz létre egy változót (pl. currentPhoto) amiben eltárolod az aktuálisan megjelenített kép indexét (ez kezdetben lehet 0)
// Amikor szükséged van adatra az arrayből, használd a currentPhoto változódat indexként

let currentPhoto = 0;
let imagesData = [
    {    picID: 1,
         photo: 'images/pic1.jpg',
         title: 'Radnai havasok',
         description: 'Az "iszonyat mák" fogalmát 2021. szeptemberében újra definiáltuk: 2000 méter fölött rövidujjúban túráztunk!!'
    },

    {   picId: 2,
        photo: 'images/pic2.jpg',
        title: 'Istria',
        description: '2006 - Itt már hárman nyaraltunk! :D'
    },

    {   picId: 3,
        photo: 'images/pic3.jpg',
        title: 'Reykjavik',
        description: "Hallgrímskirkja - a kimondhatatlan nevű templom, ami után 1 órát kávéztunk, azt is Jaegerrel!"
    },
    {   picId: 4,
        photo: 'images/pic4.jpg',
        title: 'Madeira',
        description: 'A lét elviselhetetlen könnyűsége (valahol a Pico Ruivo környékén).'
    },
    {   picId: 5,
        photo: 'images/pic5.jpg',
        title: 'Gyetra kunyhó',
        description: 'Vera már majdnem hat éves volt, amikor túrázott, majd itt aludt velem. Amikor elújságolta az óvodában, a vezető óvónő beszélőre hívott, mert azt hitte vetít a gyerek! :D:D'
    },
];
// $('#fullsizePic').attr('src', imagesData[currentPhoto].photo);
// $('.picDetails').append(imagesData[currentPhoto].title);
// $('.picDetails').append(imagesData[currentPhoto].description);


// Azt a kódot ami a jQueryprevious segítségével betölt egy képet, tedd egy olyan függvénybe ahol a kép indexe az input
// Ezt a függvényt 0-val hívd meg az oldal betöltésekor, majd a nyilakra kattintáskor változtasd a currentPhoto változó értékét és ezt a változót add meg a függvénynek inputként

let loadPhoto = (photoNumber) => {
     $('#fullsizePic').attr('src', imagesData[photoNumber].photo);
     $('#photoTitle').text(imagesData[photoNumber].title);
     $('#photoDescription').text(imagesData[photoNumber].description);
     
   };
  
loadPhoto(currentPhoto);




    $('#next').click(() => {
        if(currentPhoto < 5) 
        {currentPhoto++;} else {
            currentPhoto = 0
        }
        loadPhoto(currentPhoto)
        });


$('#previous').click(() => {
    if(currentPhoto > 0) 
    {currentPhoto--;} else {
        currentPhoto = 4
    }
    loadPhoto(currentPhoto)
   
   });


    //   Készítsd el a keretet amiben a thumbnailek lesznek
    // Tegyél bele egy-két thumbnailt HTML-ben és formázd meg őket CSS segítségével
    // Egyelőre csak a thumbnailekkel foglalkozz, a szöveggel ami akkor jelenik meg mikor a kurzor felette van ráérsz később
    // Hozd létre a thumbnaileket JavaScriptben. Használd a forEach functiont az arrayen amiben a képeket tárolod
    // Implementálj egy függvényt ami lekezeli a thumbnailekre történő kattintásokat
    // Tudnod kell, hogy melyik thumbnailre történt a kattintás
    // A legegyszerűbb ha ezt az információt a HTML tagekbe helyezed amikor létrehozod őket
    // Általánosságban bármilyen egyedi információt el tudsz tárolni a tagekben ha a data- kezdetű attribútumokat használod. Pl: data-number="1"
    // Ezt később el tudod érni a következőképpen: $(event.target).attr('data-number')

imagesData.forEach((item,index) => {
    $('.thumbnails').append(`<div class="tnp" >  <img class="tnpImg" src="${item.photo}" title="${item.title}" imagesData-index="${index}"></div>`);
    $('.tnpImg').click((event) => {
      let indexClicked = $(event.target).attr('imagesData-index');
      // indexClicked is now a string! if you need it as a number you have to change it
      // because for example "1" + 1 is going to be "11" and not 2
      let numberIndex = parseInt(indexClicked);
      // now numberIndex is a number
      //$('#clicked').text(numberIndex); 
      $('#fullsizePic').attr('src', imagesData[numberIndex].photo);
      $('#photoTitle').text(imagesData[numberIndex].title);
      $('#photoDescription').text(imagesData[numberIndex].description);
      $(this).css({"box-shadow":"10px 10px 8px #888888", "opacity":"100%"});    
    });
  });
  loadPhoto(currentPhoto);
  $(".tnpImg").click(function() {
    $(".tnpImg").css({"box-shadow":"", "opacity":"90%"});
    $(this).css({"box-shadow":"10px 10px 8px #888888", "opacity":"100%"});
});  
// $('.tnpImg').click((event) => {
//      $('#clicked').text(numberIndex); 
//      $('#fullsizePic').attr('src', imagesData[numberIndex].photo);
//      $('#photoTitle').text(imagesData[numberIndex].title);
//      $('#photoDescription').text(imagesData[numberIndex].description);
    
//  });




    
  
    
