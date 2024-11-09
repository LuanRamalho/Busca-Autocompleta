const countries = [
      'África do Sul',
      'Angola',
      'Argélia',
      'Benin',
      'Botsuana',
      'Burkina Faso',
      'Burundi',
      'Camarões',
      'Cabo Verde',
      'República Centro Africana',
      'Chade',
      'Comoros',
      'República do Congo',
      'República Democrática do Congo',
      'Costa do Marfim',
      'Djibuti',
      'Egito',
      'Eritreia',
      'Eswatini',
      'Etiópia',
      'Gabão',
      'Gâmbia',
      'Gana',
      'Guiné',
      'Guiné-Bissau',
      'Guiné Equatorial',
      'Lesoto',
      'Libéria',
      'Líbia',
      'Madagascar',
      'Malauí',
      'Mali',
      'Mauritânia',
      'Maurício',
      'Mayotte',
      'Marrocos',
      'Moçambique',
      'Namíbia',
      'Níger',
      'Nigéria',
      'Quênia',
      'Reunião',
      'Ruanda',
      'Saara do Oeste',
      'Santa Helena',
      'São Tomé e Príncipe',
      'Senegal',
      'Seychelles',
      'Serra Leoa',
      'Somália',
      'Sudão',
      'Sudão do Sul',
      'Tanzânia',
      'Togo',
      'Tunísia',
      'Uganda',
      'Zâmbia',
      'Zimbábue',

      'Afeganistão',
      'Arábia Saudita',
      'Armênia',
      'Azerbaijão',
      'Bahrein',
      'Bangladesh',
      'Brunei',
      'Butão',
      'Camboja',
      'Cazaquistão',
      'Coréia do Norte',
      'Coréia do Sul',
      'China',
      'Emirados Árabes Unidos',
      'Filipinas',
      'Hong Kong',
      'Iemen',
      'Índia',
      'Indonésia',
      'Irã',
      'Iraque',
      'Israel',
      'Japão',
      'Jordânia',
      'Kuwait',
      'Laos',
      'Líbano',
      'Macau',
      'Malásia',
      'Maldivas',
      'Mianmar',
      'Mongólia',
      'Nepal',
      'Omã',
      'Palestina',
      'Paquistão',
      'Qatar',
      'Quirguistão',
      'Singapura',
      'Síria',
      'Sri Lanka',
      'Tadjiquistão',
      'Tailândia',
      'Taiwan',
      'Timor Leste',
      'Turcomenistão',
      'Turquia',
      'Uzbequistão',
      'Vietnã',


      'Albânia',
      'Alemanha',
      'Andorra',
      'Áustria',
      'Belarus',
      'Bélgica',
      'Bósnia-Herzegovina',
      'Bulgária',
      'Bulgária',
      'Chipre',
      'Croácia',
      'República Tcheca',
      'Dinamarca',
      'Escócia',
      'Eslováquia',
      'Eslovênia',
      'Espanha',
      'Estônia',
      'Finlândia',
      'França',
      'Geórgia',
      'Gibraltar',
      'Grécia',
      'Groenlândia',
      'Holanda',
      'Hungria',
      'Inglaterra',
      'Irlanda',
      'Irlanda do Norte',
      'Islândia',
      'Itália',
      'Kosovo',
      'Letônia',
      'Liechtenstein',
      'Lituânia',
      'Luxemburgo',
      'Macedônia',
      'Malta',
      'Moldávia',
      'Mônaco',
      'Montenegro',
      'Noruega',
      'País de Gales',
      'Polônia',
      'Portugal',
      'Reino Unido',
      'Romênia',
      'Rússia',
      'San Marino',
      'Sérvia',
      'Suécia',
      'Suiça',
      'Ucrânia',
      'Vaticano',
      'Ilhas Aland',
      'Ilhas Faroe',


      'Canadá',
      'Estados Unidos',
      'México',



      'Anguilla',
      'Antígua e Barbuda',
      'Aruba',
      'Bahamas',
      'Barbados',
      'Belize',
      'Costa Rica',
      'Cuba',
      'Curaçao',
      'Dominica',
      'República Dominicana',
      'El Salvador',
      'Granada',
      'Guadalupe',
      'Guatemala',
      'Haiti',
      'Honduras',
      'Jamaica',
      'Martinica',
      'Montserrat',
      'Nicarágua',
      'Panamá',
      'Porto Rico',
      'São Bartolomeu',
      'São Cristóvão e Nevis',
      'Santa Lucia',
      'São Martinho',
      'São Vicente e Granadinas',
      'Trinidad e Tobago',
      'Ilhas Bermudas',
      'Ilhas Cayman',
      'Ilhas Turks e Caicos',
      'Ilhas Virgens Britânicas',
      'Ilhas Virgens Americanas',
  

      'Argentina',
      'Bolivia',
      'Brasil',
      'Chile',
      'Colômbia',
      'Equador',
      'Guiana',
      'Guiana Francesa',
      'Paraguai',
      'Peru',
      'Suriname',
      'Uruguai',
      'Venezuela',
      'Ilhas Falkland (Ilhas Malvinas)',


      'Austrália',
      'Fiji',
      'Guam',
      'kiribati',
      'Micronésia',
      'Nauru',
      'Niue',
      'Nova Caledônia',
      'Nova Zelândia',
      'Palau',
      'Papua Nova Guiné', 
      'Polinésia Francesa',
      'Samoa',
      'Samoa Americana',
      'Tokelau',
      'Tonga',
      'Tuvalu',
      'Vanuatu',
      'Wallis e Futuna',
      'Ilhas Christmas',
      'Ilhas Cocos',
      'Ilhas Cook',
      'Ilhas Mariana do Norte',
      'Ilhas Marshall',
      'Ilhas Norfolk',
      'Ilhas Salomão',


      'Antártida'
]


//get the input and the autocomplete container elements
const input = document.getElementById("search-input");
const autocompleteList = document.getElementById("autocomplete-list");

let currentFocus = -1; //To track the currently active suggestiom

//Part 1: Handling user input and filtering suggestions
input.addEventListener("input", function () {
  const query = this.value.toLowerCase();
  //Get user input and convert to lowercase for case-insensitive matching
  autocompleteList.innerHTML = ""; //Clear previous autocomplete suggestions
  currentFocus = -1; //Reset the focus index when typing new input

  //If the input is empty dont show any suggestions
  if (!query) return;

  //Filter the countries based on user input
  const filteredSuggestions = countries.filter((country) =>
    country.toLowerCase().includes(query)
  );
  //Part 2:Create suggestions list dynamically
  filteredSuggestions.forEach((country) => {
    const item = document.createElement("div");
    item.innerHTML = country; //Set the suggestion text
    item.addEventListener("click", function () {
      input.value = country; //set the suggestion text
      autocompleteList.innerHTML = ""; //Clear the suggestion list after selection
    });
    autocompleteList.appendChild(item); //Add the suggestion to list
  });
});
//Part 3: handling keyboard navigation(arrow keys and enter)
input.addEventListener("keydown", function (e) {
  let items = autocompleteList.getElementsByTagName("div");
  //get all suggestions div elements
  if (e.key === "ArrowDown") {
    currentFocus++;
    highlightItem(items);
  } else if (e.key === "ArrowUp") {
    currentFocus--;
    highlightItem(items);
  } else if (e.key === "Enter") {
    e.preventDefault();
    if (currentFocus > -1 && items[currentFocus]) {
      items[currentFocus].click();
    }
  }
});
//Part 4: Function to highlight the current item
function highlightItem(items) {
  if (!items) return;
  removeActive(items);
  //Wrap focus withon the bounds of suggestion list
  if (currentFocus >= items.length) currentFocus = 0;
  if (currentFocus < 0) currentFocus = items.length - 1;
  items[currentFocus].classList.add("autocomplete-active");
}
//Part 5: Function to remove the active class from all items
function removeActive(items) {
  for (let i = 0; i < items.length; i++) {
    items[i].classList.remove("autocomplete-active");
  }
}

//Part 6: close the autocomple list is the user click outite tje input field or list
document.addEventListener("click", function (e) {
  if (!autocompleteList.contains(e.target) && e.target !== input) {
    autocompleteList.innerHTML = "";
  }
});
