//need to clean up a lil bit. Not changing anything in full view of all cars
var list;
function make_list() {
    var list = $(".Jsonlist");
    list.empty();
    for (var i in items) {
        var value = items[i];
        var li = $('<li>');
        li.html(value);
        list.append(li);
    }
};
function save_to_local_json() {
    var items_json = JSON.stringify(items);
    localStorage.setItem('items', items_json);
};
function read_from_local_json() {
    var items_json = localStorage.getItem('items');
    items = JSON.parse(items_json);
    if (!items) {
        items = [];
    }
};
read_from_local_json();
make_list();
$('#postData').click(function () {
    var text = $('#tArea').val();
    items.push(text);
    make_list();
    save_to_local_json();
});
function getStuffs() {
    var car = document.getElementById('Car').value

    var dataArr = {};
$(function() { 
    $.getJSON( "api/videoData.js").done(function(Car) {
        window.dataArr = data.pages;
    }).fail(function(Car) {
        console.log('no results found');
    });
});
$("#search").on('keypress keyup change input', function() { 
    var arrival = $(this).val().toLowerCase();
    $('#matches').text(!arrival.length ? '' : 
        dataArr.filter(function(makemodel) {
            return (place.title.toLowerCase().indexOf(arrival) !== -1);
        }).map(function(makemodel) {
            return makemodel.title;
        }).join('\n'));
});
}
const container = document.getElementById('Car');
apiResult.forEach((result, idx) => {
  const card = document.createElement('Car');
  card.classList = 'card-body';
  const content = `
    <div class="card">
    <div class="card-header" id="heading-${idx}">
      <h5 class="mb-0">
        <button class="btn btn-link" data-toggle="collapse" data-target="#collapse-${idx}" aria-expanded="true" aria-controls="collapse-${idx}">

                </button>
      </h5>
    </div>

    <div id="collapse-${idx}" class="collapse show" aria-labelledby="heading-${idx}" data-parent="#accordion">
      <div class="card-body">

        <h5>${result.title}</h5>
        <p>${result.description}</p>
        <p>${result.output}</p>
        ...
      </div>
    </div>
  </div>
  `;
  container.innerHTML += content;
})
