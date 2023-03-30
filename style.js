//operaator perbandingan
//  === mencek nilai dan type data
var umur = 10;
const hasil = document.querySelector(".hasil");
if (umur >= 17) {
  hasil.innerHTML = "boleh menonton film";
} else {
  hasil.innerHTML = "film ini untuk +16";
}



var username = "jesi123";
var password = "ii11";

const hasil1 = document.querySelector(".hasil");
if (username === "jesi123" && password === "hghgt") {
  hasil1.innerHTML = "login berhasil";
} else {
  hasil1.innerHTML = "login gagal";
}


// kondisi
var x = 7.2;
if (x >= 10) {
  hasil.innerHTML = "perfect";
} else if (x <= 10 && x >= 8) {
  hasil.innerHTML = "Great";
}
else if (x < 8 && x >= 6) {
  hasil.innerHTML = "Good";
}
else {
  hasil.innerHTML = "Upss!";
}


// perulangan
for (var i = 0; i < 5; i++) {
  console.log(i);
}

// while

let likeTotal = 10;
let limit = 5;
let counter = 1;


while (counter <= limit) {
  likeTotal += 1;
  counter++;
}

console.log("total like :", likeTotal);
hasil.innerHTML = `Total like : ${likeTotal} likeTotal`;


// do while
do {
  likeTotal += 1;
  // counter++;
} while (counter <= limit);
console.log("total like :", likeTotal);
hasil.innerHTML = `Total like : ${likeTotal} likeTotal`;

//array
let arr = [];
let arr2 = [1, 2, 3];

innerHTML = arr2[2];

//menambhakan array index ke 4
arr2.push[4];

//menghapus array
arr2.pop();

// mengabungkan array
let arr1 = [3, 4, 5];
let arr3 = [6, 7, 8];
let arr4 = arr1.concat(arr3); // cara lama
hasil.innerHTML = arr4;

// cara baru
let arr5 = [...arr1, ...arr3];

// join array
let arr6 = [3, 4, 5];
let arr7 = [6, 7, 8];
hasil.innerHTML = arr7.join("* ");

// search index
let a = [1, 2, 3, 4, 5];
let index = a.indexOf(2);
console.log(index);

//pemotongan  index
let b = [1, 2, 3, 4, 5];
let newarr = b.slice(1, 2);
hasil.innerHTML = newarr;