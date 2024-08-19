const myMap = new Map([
    [1, "Wie schwer darf ein Furz sein? Nicht mehr als 0,1g sonst ist es Scheiße."],
    [2, "Wie viele Kinder brauchst du um eine Wand rot zu färben? Also es kommt drauf an wie fest du wirfst."],
    [3, "Was kommt aus einer kaputten Kaffeemaschine? Kaputtchino!."],
    [4, "Wie nennt man einen Bumerang, der nicht zurückkommt? Einen Stock."],
    [5, "Was ist gelb und kann nicht schwimmen? Ein Bagger. Fandest du ihn lustig? Der Baggerfahrer auch nicht."],
    [6, "Wovor träumen Katzen Nachts? Vom MuskelKater."],
    [7, "Was steht auf dem Grabstein eines Mathematikers? Damit hat er nicht gerechnet."],
    [8, "Wie nennt man einen Schneemann im Sommer? Eine Pfütze."],
    [9, "Was ist das wichtigste bei Schweißausbrüchen? Das W."],
    [10, "Was macht ein Pirat am Computer? Er drückt die Enter-Taste."],
    [11, "Wie nennt man eine IPhone Hülle noch? Eine Apfeltasche."],
    [12, "Wie nennt man ein Dünnen Frosch? Ein Magerquark."],
    [13, "Warum trinken Veganer kein Leitungswasser mehr? Weil das Wasser aus dem Hahn kommt."],
    [14, "Habe die Milch fallen gelassen, wieso? Sie war nicht mehr Haltbar."],
    [15, "Geht ein Dalmatiner Einkaufen fragt der Kassierer, sammeln sie Punkte?"],
    [16, "Warum sind Deutsche so schlecht beim Schach? Weil ihre Züge zu spät kommen!"],
    [17, "In einem Flugzeug liegen 100 Steine, einer fällt raus wie viele sind noch im Flugzeug? richtig 99."],
    [18, "Wie Kriegt man eine Giraffe in denn Kühlschrank? Tür auf, Giraffe rein, Tür zu!"],
    [19, "Wie Kriegt man einen Elefant in einem Kühlschrank? Tür auf, Giraffe raus, Elefant rein, Tür zu!"],
    [20, "Der Löwe schmeißt eine Party und alle Tiere kommen außer welches? Der Elefant weil er im Kühlschrank ist!"],
    [21, "Ein Kind will über denn von Krokodill bewohnten Fluss welches gefährlich ist. Das Kind schafft es, wieso? Weil die krokodille auf der Party sind."],
    [22, "Das Kind stirbt trotzdem, warum? Weil es vom Stein Getroffen wurde."],
    [23, "Woran erkennt man ein Polnischen Furz? Er raubt dir denn Atem!"],
]);

function getRandomJoke() {
    const randomKey = Math.floor(Math.random() * 23) + 1;
    document.getElementById('jokeContainer').textContent = myMap.get(randomKey);
}

document.getElementById('newJokeButton').addEventListener('click', () => {
    getRandomJoke();
});

getRandomJoke();
