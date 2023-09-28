/*  your css code here. If applicable */
const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

const numberOfBooksRead = () => {
  // write your code here
	let n = 0;
	for (let i = 0; i < library.length; i++) {
		if(library[i].readingStatus==true){
			 n = n+1;
		}
	}
	
	return n;
};

// Do not change the code below

alert(numberOfBooksRead());
