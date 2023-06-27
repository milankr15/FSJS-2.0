//22. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method



const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort();
console.log(`Minimum age is ${ages[0]} and Maximum age is ${ages[ages.length-1]}`);

let mid = ages.length/2;
if(ages.length % 2 == 0){
    console.log(`Medians is ${(ages[mid] + ages[mid+1])/2}`)
}
else{
    console.log(`Median is ${ages[mid]}`)
}

let totalSum = ages.reduce((sum, a) => sum + a, 0);

console.log(`Average age is ${totalSum/ages.length}`);

console.log(`Ranges of age is ${ages[ages.length-1] - ages[0] }`)

console.log(Math.abs(ages[0] - (totalSum/ages.length)) == Math.abs(ages[ages.length-1] - (totalSum/ages.length)))