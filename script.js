let numberOfSeries;
function startApp() {
  numberOfSeries = prompt("Nechta serial ko’rdingiz?", "");
  while (
    numberOfSeries == "" ||
    numberOfSeries == null ||
    isNaN(numberOfSeries)
  ) {
    numberOfSeries = +prompt("Nechta serial ko’rdingiz?", "");
  }
}

startApp();

const seriesDB = {
  count: numberOfSeries,
  series: {},
  actors: {},
  genres: [],
  private: false,
};

function rememberMyServices() {
  for (let i = 0; i < 1; i++) {
    const a = prompt("Oxirgi ko’rgan serialingiz?"),
      b = prompt("Nechi baxo berasiz?");

    if (a != null && b != null && a != "" && b != "") {
      seriesDB.series[a] = b;
      console.log("done");
    } else {
      console.log("error");
      i--;
    }
  }
}
rememberMyServices();

function detectLevelSeries(count) {
  if (count < 5) {
    console.log("Kam serial ko`ribsiz!");
  } else if (count >= 6 && count < 10) {
    console.log("Siz klassik tomoshabin ekansiz!");
  } else if (count >= 10) {
    console.log("Siz serialchi zvezda ekansiz!");
  } else {
    console.log("Error");
  }
}
detectLevelSeries(seriesDB.count);

function showMyDB(hidden) {
  if (!hidden) {
    console.log(seriesDB);
  }
}
showMyDB(seriesDB.private);

function writeGenre() {
  for (let i = 0; i <= 2; i++) {
    const genre = prompt(`Yaxshi ko\`rgan janringzi ${i + 1}`);
    seriesDB.genres[i] = genre;
  }
}

writeGenre();
