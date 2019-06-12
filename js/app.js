var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
const myHeaders = {
    'X-Client-Id': '3993',
    'X-Auth-Token': 'f3ed53a669d71890e2ee2070c21eff50'
};

fetch(baseUrl + '/board', { headers: myHeaders })
    .then(function(resp) {
    return resp.json();
    })
    .then(function(resp) {
    setupColumns(resp.columns);
    });

function setupColumns(columns) {
    columns.forEach(function(column) {
        var col = new Column(column.id, column.name);
        board.addColumn(col);
        setupCards(col, column.cards);
    });
}

function setupCards(col, cards) {
	cards.forEach(function (card) {
    var cardObj = new Card(card.id, card.name);
  	col.addCard(cardObj);
	});
}
// OGÓLNA FUNKCJA

function generateTemplate(name, data, basicElement) {
  	var template = document.getElementById(name).innerHTML;
  	var element = document.createElement(basicElement || 'div');
  
  	Mustache.parse(template);
  	element.innerHTML = Mustache.render(template, data);
  
  	return element;
}


