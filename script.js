const myMap = new Map([
    [1, "Warum können Geister so schlecht lügen? Weil man durch sie hindurchsehen kann."],
    [2, "Ich habe kürzlich ein Buch über Anti-Schwerkraft gelesen. Es war unmöglich, es aus der Hand zu legen."],
    [3, "Warum können Bienen so gut rechnen? Weil sie den ganzen Tag mit Summen beschäftigt sind."],
    [4, "Wie nennt man einen Bumerang, der nicht zurückkommt? Einen Stock."],
    [5, "Ich habe gestern versucht, meinen Job als Spiegeleier-Experte zu kündigen. Aber dann habe ich es nochmal überdacht."],
    [6, "Warum können sich Kängurus so gut verteidigen? Weil sie immer einen Schlag parat haben."],
    [7, "Hast du gehört, dass das Butterbrot runtergefallen ist? Es war auf einer Rutschbahn."],
    [8, "Wie nennt man einen Schneemann im Sommer? Eine Pfütze."],
    [9, "Warum sind Fische so schlau? Weil sie in der Schule schwimmen."],
    [10, "Was macht ein Pirat am Computer? Er drückt die Enter-Taste."]
]);

function getRandomJoke() {
    const randomKey = Math.floor(Math.random() * 10) + 1;
    document.getElementById('jokeContainer').textContent = myMap.get(randomKey);
}

document.getElementById('newJokeButton').addEventListener('click', () => {
    getRandomJoke();
});

// Zeige beim ersten Laden der Seite einen Witz
getRandomJoke();
