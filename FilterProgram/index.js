// a Names array for storing Name objects
const Names = [
    {
        Title: "Countries",
        Elements : ["France", "Turkey", "Germany", "Italy", "Spain", "Japan", "Brazil", "Canada", "Australia", "Greece"]
    },
    {
        Title : "Animals",
        Elements : ["Lion", "Elephant", "Giraffe", "Zebra", "Tiger", "Bear", "Kangaroo", "Panda", "Wolf", "Eagle"]
    },
    {
        Title : "Books",
        Elements : ["1984", "To Kill a Mockingbird", "The Great Gatsby", "Moby Dick", "Pride and Prejudice", "The Catcher in the Rye", "The Hobbit", "War and Peace", "Brave New World", "Crime and Punishment"]
    },
    {
        Title : "Games",
        Elements : ["Terraria","Minecraft","Skyrim","Elden Ring","Dark Souls","Age of Empires","Baldurs Gate","Counter Strike","Devil May Cry","League Of Legends"]
    }
]

// List for All elements and Filtered version of it.
let AllNames = [];
let FilteredList = [];

// puts all Elements in all different Names objects into AllNames Array.
for(i=0; i<Names.length; i++){
    for(e=0; e<Names[i].Elements.length; e++){
        AllNames.push(Names[i].Elements[e]);
    }
}

//All names shown on the page at the start of the program.
let TextArea = document.getElementById("TextList");
for(e=0; e<AllNames.length; e++){
    TextArea.innerHTML += `<li>${AllNames[e]}</li>`
}

// Function starts when user clicked the refresh button
function GetInput(){
    //in order to have one element for one name in the array we have to erase all the list when refreshing the page
    FilteredList = []

    let CountryBox = document.getElementById("CountryBox");
    let AnimalBox = document.getElementById("AnimalBox");
    let BookBox = document.getElementById("BookBox");
    let GameBox = document.getElementById("GameBox");

    //Erase text area in order to refill again
    TextArea.innerHTML = " ";

    //Checking boxes and storing elements into seperate arrays
    if(CountryBox.checked){
        let Countries = AllNames.filter(FilterCountry);
        Countries.forEach(PushAll);
    }
    if(AnimalBox.checked){
        let Animals = AllNames.filter(FilterAnimal);
        Animals.forEach(PushAll);
    }
    if(BookBox.checked){
        let Books = AllNames.filter(FilterBook);
        Books.forEach(PushAll);
    }
    if(GameBox.checked){
        let Games = AllNames.filter(FilterGame);
        Games.forEach(PushAll);
    }

    //functions that are used for filtering AllNames array
    function FilterCountry(item) {
        return Names[0].Elements.includes(item);
    }
    function FilterAnimal(item) {
        return Names[1].Elements.includes(item);
    }
    function FilterBook(item) {
        return Names[2].Elements.includes(item);
    }
    function FilterGame(item) {
        return Names[3].Elements.includes(item);
    }

    function PushAll(item){
        FilteredList.push(item);
    }

    //Output
    for(i=0; i<FilteredList.length; i++){
        TextArea.innerHTML += `<li>${FilteredList[i]}</li>`;   
    }
}