const inventors = [
  { first: "Albert ", last: "Einstein ", year: 1879, passed: 1955 },
  { first: "Isaac ", last: "Newton ", year: 1643, passed: 1727 },
  { first: "Galileo ", last: "Galelei ", year: 1564, passed: 1642 },
  { first: "Marie ", last: "Curie ", year: 1867, passed: 1934 },
  { first: "Johanees ", last: "Kepler ", year: 1571, passed: 1630 },
  { first: "Nicolaus ", last: "Copernicus ", year: 1473, passed: 1543 },
  { first: "Max ", last: " Plank", year: 1858, passed: 1947 },
];

const people = [
    "John Smith", "Michael Johnson", "Alice Brown", "Emily Taylor", "David Anderson", "Olivia Martinez", "Daniel Wilson", "Sophia Garcia", "William Jones", "Emma Lee",    "Michael Smith", "Alice Johnson", "Emily Brown", "David Taylor", "Olivia Anderson",    "Daniel Martinez", "Sophia Wilson", "William Garcia", "Emma Jones", "John Lee",   "Alice Smith", "Emily Johnson", "David Brown", "Olivia Taylor", "Daniel Anderson",   "Sophia Martinez", "William Wilson", "Emma Garcia", "John Jones", "Michael Lee",  "Emily Smith", "David Johnson", "Olivia Brown", "Daniel Taylor", "Sophia Anderson",   "William Martinez", "Emma Wilson", "John Garcia", "Michael Jones", "Alice Lee",    "David Smith", "Olivia Johnson", "Daniel Brown", "Sophia Taylor", "William Anderson",    "Emma Martinez", "John Wilson", "Michael Garcia", "Alice Jones", "David Lee",
    "Olivia Smith", "Daniel Johnson", "Sophia Brown", "William Taylor", "Emma Anderson",    "John Martinez", "Michael Wilson", "Alice Garcia", "David Jones", "Olivia Lee",    "Daniel Smith", "Sophia Johnson", "William Brown", "Emma Taylor", "John Anderson",    "Michael Martinez", "Alice Wilson", "David Garcia", "Olivia Jones", "Daniel Lee",  "Sophia Smith", "William Johnson", "Emma Brown", "John Taylor", "Michael Anderson",
    "Alice Martinez"
  ];
  

  
  // 1st is Filter method of array   array.Filter();
  //now i am filtering the list of inventors for those who are born in 1500;

  const fifteen = inventors.filter(function(inventors){
    if(inventors.year >= 1500 && inventors.year< 1600){
        return true
    }
  })
  console.table(fifteen);

//Or we can do this like this in One line with arrow fucntion 
  const Fourteen = inventors.filter(inventors => (inventors.year >= 1400 && inventors.year < 1500)) 

  console.table(Fourteen);




  //2nd  is arary type is  map  array.map()
  //Now i am trying to bring the fist name and last name from inventors
// map create a new array  with the result of calling a provided function on every element  in the array

const fullNames = inventors.map(inventors => `${inventors.first} ${inventors.last}` );
console.log(fullNames)

//3rd is sort  array.sort()
//sort the array by birthday

const ordered = inventors.sort((a ,b ) => a.year > b.year ? 1 : -1);
console.log( ordered )



// 4th  is the reduce  array.reduce()
// how many  years did all lives


let  totalYears = 0 ;
 for(let i = 0 ; i < inventors.length; i++){
    totalYears += inventors[i].year;
 }

 console.log(totalYears)

// and 
const totalYears2 =  inventors.reduce((total,inventors)=> {
    return total + (inventors.passed - inventors.year)


},0)
console.log("totalYears2 = >", totalYears2)