import {
  cleanObject,
  convertToArray,
  countElements,
  countOccurrences,
  countWords,
  filterByMinValue,
  findLongestString,
  findLongestValue,
  findMaxKey,
  findMinKey,
  findMostExpensiveProduct,
  findSecondLargest,
  flattenArray,
  getAdults,
  groupByFirstLetter,
  groupByType,
  hasDuplicate,
  intersection,
  isPermutation,
  isSubset,
  isSymmetric,
  mergeObjectsSumValues,
  removeDuplicates,
  sortProductsByPrice,
  sortStringsByLength,
  sumArray,
  sumByGroup,
  sumByKey,
  uniqueValues,
} from "./utils.js";

sumArray([1, 2, 3, 4]);

countOccurrences([1, 2, 2, 3, 2], 2);

removeDuplicates([1, 2, 2, 3, 4, 4, 6, 2, 3, 6]);

flattenArray([
  [1, 2],
  [3, 4],
]);

isSymmetric([1, 2, 3, 3, 2, 1]);

findSecondLargest([1, 1, 2, 2, 3, 4, 5, 5]);

const products = [
    { name: 'Product A', price: 30 },
    { name: 'Product B', price: 20 },
    { name: 'Product C', price: 50 }
];

sortProductsByPrice(products);

findMostExpensiveProduct(products);


console.log("Bai 9", groupByType());

isSubset();

findMaxKey();

mergeObjectsSumValues();

countElements();

cleanObject();

hasDuplicate();

sumByGroup('type')

uniqueValues();

isPermutation();

findLongestString();

intersection();
filterByMinValue(12);
findLongestValue();
groupByFirstLetter();
getAdults();
convertToArray();
sortStringsByLength();
sumByKey("price");
countWords();
findMinKey();
