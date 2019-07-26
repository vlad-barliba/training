class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut;
    this._rating = [];

  }
  get title() {
    return this._tile;
  }
  get getCheckedOut() {
    return this._isCheckedOut;
  }
  get rating() {
    return this._rating;
  }

  set setCheckedOut(checkout) {
    if (typeof checkout === 'boolean') {
      this._isCheckedOut = checkout;
    }
  }

  toggleCheckOutStatus() {
    if (this.getCheckedOut == true) {
      this.setCheckedOut = false;
    }
    else {
      this.setCheckedOut = true;
    }
  }


  getAverageRating() {
    const ratingSum = this.rating.reduce((currentSum, rating) => currentSum + rating, 0);
    const ratingLength = this._rating.length;
    return ratingSum / ratingLength;
  }

  addRating(rating) {
    this._rating.push(rating);
  }
}




class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
    this._isCheckedOut = false;


  }
  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = [];
  }
  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
}

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);

historyOfEverything.toggleCheckOutStatus();
historyOfEverything.isCheckedOut ? console.log(`HistoryOfEverything is checkedOut`) : console.log(`HistoryOfEverything is notcheckedOut`);


const randomRatingFunction = () => {
  return Math.floor(Math.random() * 10);
}


for (let i = 0; i < 3; i++) {
  const randomRating = randomRatingFunction();
  historyOfEverything.addRating(randomRating);
}
console.log(`HistoryOfEverything's rates are ${historyOfEverything.rating}.`);


const speed = new Movie('Jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus();
speed.isCheckedOut ? console.log(`Speed is checkedOut`) : console.log(`Speed is notcheckedOut`);

for (let i = 0; i < 4; i++) {
  const randomRating = randomRatingFunction();
  speed.addRating(randomRating);
}
console.log(`Speed's rates are ${speed.rating}.`);

const avgRating = speed.getAverageRating();
console.log(`Avg speed's rating is ${avgRating}`);
