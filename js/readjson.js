module.exports = function() {

  function readJson(data, parent) {

    function createSingleDiv(signum, pos, left, top, width, height, round, shape, floor, rotate) {

      var div = document.createElement("div");

      if (shape === 'hylla') {
        div.style.width = "6%";
        div.style.height = "1%";
        div.style.backgroundColor = '#979797';
        div.style.transform = 'rotate(' + rotate +'deg)';
      }
      else if (shape === 'cirkel') {
        div.style.width = "8%";
        div.style.height = "4%";
        div.style.backgroundColor = '#979797';
        div.style.borderRadius = '50%';
      }
      else if (shape === 'elektronik') {
        div.style.width = "4%";
        div.style.height = "2%";
      }
      else if (shape === 'position') {
        div.style.width = "3%";
        div.style.height = "2.3%";
        div.style.backgroundColor = 'red';
        div.style.borderRadius = round + '%';
      }
      else if (pos.x === undefined) {
        div.style.width = "8%";
        div.style.height = "2%";
        div.style.backgroundColor = '#979797';
      }
      else if (shape === 'custom') {
        div.style.width = width + "%";
        div.style.height = height + "%";
        div.style.backgroundColor = '#979797';
        div.style.borderRadius = round + '%';
        div.style.transform = 'rotate(' + rotate +'deg)';
        div.style.backgroundColor = '#979797';
      }
      else if (shape === 'rum') {
        div.style.width = width + "%";
        div.style.height = height + "%";
        div.style.backgroundColor = '#979797';
        div.style.borderRadius = round + '%';
        div.style.transform = 'rotate(' + rotate +'deg)';
        div.style.backgroundColor = 'transparent';
      }
      else {
        div.style.width = "4%";
        div.style.height = "2%";
      }
      div.style.left = left + '%';
      div.style.top = top + '%';
      div.style.width = width + '%';
      div.style.height = height + '%';
      div.style.position = 'absolute';
      div.setAttribute('class', signum + '-pos ' + 'floor-' + floor);

      // hide all other floors than floor 1 by default
      if (floor !== '1') {
         div.style.visibility = 'hidden';
         console.log(floor)
         console.log($(div))
      }

      var map = $('.libraryPosition');
      map.append(div);
    }

    function createPluralDiv(signum, pos, width, height, round, shape, floor) {

      var i = 0;
      for (x in pos) {
        var div = document.createElement("div");

        
        if (shape === 'elektronik') {
          div.style.width = "4%";
          div.style.height = "2%";
          div.setAttribute('class', signum + '-pos ' + 'floor-' + floor);
        }
        else {
          div.style.width = "6%";
          //div.style.width = width + "%";
          div.style.height = "1%";
          //div.style.height = height + "%";
          div.setAttribute('class', signum + '-pos ' + 'floor-' + floor);
        }

        div.style.left = pos[i].x + '%';
        div.style.top = pos[i].y + '%';
        i++;

        div.style.backgroundColor = '#979797';  

        div.style.position = 'absolute';
        div.setAttribute('class', signum + '-pos ' + 'floor-' + floor);

        var map = $('.libraryPosition');
        map.append(div); 

        if (floor !== '1') {
          $(div).css('style', 'visibility:hidden')
        }
      }
    }

    // Skapar ett ul-element
    var ul = document.createElement('ul');

    // Loopar igenom all data.
    $.each(data, function(index, obj) {
      // Skapar ett li-element och ett span-element
      var li = document.createElement('li');
      var span = document.createElement('span');

      // Sätter innehållet till namnet
      if (obj.signum !== undefined && obj.shape === 'hylla' || obj.shape === 'custom') {
        span.innerText = obj.signum + " | " + obj.name;
      }
      else {
        span.innerText = obj.name;
      }
      //span.innerText = obj.signum;
      li.appendChild(span);

      // Kollar om det finns någon sub-lista, 
      if ( typeof obj.sub !== 'undefined' ) {
        // Läser listan, och sätter li-elementet som "parent", så resultatet (ett ul-element) appendas på li-elementet.
        readJson(obj.sub, li);
      }
      else {
        if (obj.signum !== 'undefined') {

          span.setAttribute('id', obj.signum)
          span.setAttribute('class', 'floor-' + obj.floor)


          if (obj.pos.x === undefined) {
            createPluralDiv(obj.signum, obj.pos, obj.pos.width, obj.pos.height, obj.round, obj.shape, obj.floor)
          }
          else {
            createSingleDiv(obj.signum, obj.pos, obj.pos.x, obj.pos.y, obj.width, obj.height, obj.round, obj.shape, obj.floor, obj.rotate);
          }

        };
      }

      // Lägger till li-elementet på ul-elementet
      ul.appendChild(li);
    });

    parent.appendChild(ul);
  }

  $(document).ready(function() {

    var list = document.querySelector('#expand');

    $.getJSON('books.json', function(data) {
      readJson(data.data, list)
    });
  });

}