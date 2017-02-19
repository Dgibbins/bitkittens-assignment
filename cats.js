$(function(){

  var i = 0;
  $('.summon-cats').on('click', function(){
    $.ajax({
      crossDomain: false,
      url:"http://bitkittens.herokuapp.com/cats.json",
      method: "GET",
      dataType: 'json'
    }).done(function(data){
     // Creates a new <img> tag
       if (i === 3 ){
         $('.cat-box ').empty();
         i=0;
       };
       var kitImg = document.createElement('img');
       var kitImgSrc = data.cats[i].photo
       var kitName = data.cats[i].name
       var kitBook = document.createElement('ul');
      $(kitBook).appendTo('main');
       var kitVisit= document.createElement('li');
       // Sets the src & alt attribute of the <img> to "Photo of (insert cat name here)"
       $(kitImg).attr("src", kitImgSrc);
       $(kitImg).attr('alt', kitName);
       $(kitVisit).append(kitName);
       i = i+1;
       var catCounter = '#cat' + i
       // Inserts that <img> into one of the empty .cat-box divs
      $(kitImg).appendTo(catCounter);
      $(kitVisit).appendTo(kitBook);

    });
  });
});
