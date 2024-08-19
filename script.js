const myMap = new Map([
    [1, "Wie schwer darf ein Furz sein? Nicht mehr als 0,1g sonst ist es Scheiße."],
    [2, "Wie viele Kinder brauchst du um eine Wand rot zu färben? Also es kommt drauf an wie fest du wirfst."],
    [3, "Was kommt aus einer kaputten Kaffeemaschine? Kaputtchino!."],
    [4, "Chuck Norris kann schneller stehen als du rennen kannst."],
    [5, "Wie nennt man einen Bumerang, der nicht zurückkommt? Einen Stock."],
    [6, "Was ist gelb und kann nicht schwimmen? Ein Bagger. Fandest du ihn lustig? Der Baggerfahrer auch nicht."],
    [7, "Wovor träumen Katzen Nachts? Vom MuskelKater."],
    [8, "Was steht auf dem Grabstein eines Mathematikers? Damit hat er nicht gerechnet."],
    [9, "Wie nennt man einen Schneemann im Sommer? Eine Pfütze."],
    [10, "Was ist das wichtigste bei Schweißausbrüchen? Das W."],
    [11, "Was macht ein Pirat am Computer? Er drückt die Enter-Taste."],
    [12, "Wie nennt man eine IPhone Hülle noch? Eine Apfeltasche."],
    [13, "Wie nennt man ein Dünnen Frosch? Ein Magerquark."],
    [14, "Warum trinken Veganer kein Leitungswasser mehr? Weil das Wasser aus dem Hahn kommt."],
    [15, "Habe die Milch fallen gelassen, wieso? Sie war nicht mehr Haltbar."],
    [16, "Geht ein Dalmatiner Einkaufen fragt der Kassierer, sammeln sie Punkte?"],
    [17, "Warum sind Deutsche so schlecht beim Schach? Weil ihre Züge zu spät kommen!"],
    [18, "In einem Flugzeug liegen 100 Steine, einer fällt raus wie viele sind noch im Flugzeug? richtig 99."],
    [19, "Wie Kriegt man eine Giraffe in denn Kühlschrank? Tür auf, Giraffe rein, Tür zu!"],
    [20, "Wie Kriegt man einen Elefant in einem Kühlschrank? Tür auf, Giraffe raus, Elefant rein, Tür zu!"],
    [21, "Der Löwe schmeißt eine Party und alle Tiere kommen außer welches? Der Elefant weil er im Kühlschrank ist!"],
    [22, "Ein Kind will über denn von Krokodill bewohnten Fluss welches gefährlich ist. Das Kind schafft es, wieso? Weil die krokodille auf der Party sind."],
    [23, "Das Kind stirbt trotzdem, warum? Weil es vom Stein Getroffen wurde."],
    [24, "Woran erkennt man ein Polnischen Furz? Er raubt dir denn Atem!"],
    [25, "Ein Läufer zum anderen auf der Chinesischen Mauer: Du wirst mir doch nicht auf den letzten 1347 Kilometern schlappmachen?"],
    [26, "Wohin soll man gehen, wenn einem kalt ist? In die Ecke, da sind 90 Grad."],
    [27, "Was ist rot und schlecht für die Zähne? – Ein Ziegelstein."],
    [28, "Rollt eine Kugel um die Ecke und fällt um."],
    [29, "Schwarzer Humor ist wie Essen: Hat nicht jeder."],
    [30, "Hab mir vor 2 Monaten ein Buch bestellt: „Reich werden durch Betrug“ – Ist immer noch nicht da."],
    [31, "„Arzt: „Sie sind zu dick.“ – Patient: „Ich hole mir lieber eine zweite Meinung.“ – Arzt: „Ok, hässlich sind Sie auch.“"],
]);

//function getRandomJoke() {
//    const randomKey = Math.floor(Math.random() * 23) + 1;
//    document.getElementById('jokeContainer').textContent = myMap.get(randomKey);
//}

//document.getElementById('newJokeButton').addEventListener('click', () => {
//    getRandomJoke();
//});

//getRandomJoke();
let currentIndex = 1; // Startindex für den ersten Witz
        const totalJokes = myMap.size;

        function showJoke(index) {
            const joke = myMap.get(index);
            document.getElementById('jokeContainer').textContent = joke;
        }

        function getNextJoke() {
            showJoke(currentIndex);
            currentIndex = (currentIndex % totalJokes) + 1; // Update index and loop back to 1 if necessary
        }

        document.getElementById('newJokeButton').addEventListener('click', getNextJoke);

        // Show the first joke initially
        getNextJoke();
