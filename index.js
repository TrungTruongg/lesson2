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


groupByType([
  { type: "fruit", name: "apple" },
  { type: "vegetable", name: "carrot" },
  { type: "fruit", name: "banana" },
]);

isSubset([1, 2, 3, 4], [2, 4]);

findMaxKey({ a: 10, b: 20, c: 15 });

mergeObjectsSumValues({ a: 10, b: 20 }, { b: 30, c: 40 });

countElements(["a", "b", "a", "c", "b", "a"]);

cleanObject({ a: 1, b: null, c: undefined, d: 4 });

hasDuplicate([1, 2, 3, 4, 2]);

sumByGroup([
  { type: "fruit", price: 10 },
  { type: "vegetable", price: 20 },
  { type: "fruit", price: 30 },
], 'type')

uniqueValues([2, 2, 3], [3, 4, 5]);

isPermutation([5, 2, 2], [1, 2, 2]);

findLongestString(["abc", "abcd", "a"]);

intersection([1, 2, 3], [2, 3, 4]);
filterByMinValue([5, 10, 15, 20], 12);
findLongestValue({ a: "cat", b: "elephant", c: "dog" });
groupByFirstLetter(["apple", "banana", "avocado", "blueberry"]);
getAdults([
  { name: "Alice", age: 17 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 16 },
  { name: "David", age: 22 },
]);
convertToArray({ a: 1, b: 2, c: 3 });
sortStringsByLength(["a", "ccc", "bb"]);
sumByKey([
  { type: "fruit", price: 10 },
  { type: "vegetable", price: 20 },
  { type: "fruit", price: 30 },
], 'price');
countWords("Hello world! Welcome to JavaScript");
findMinKey({ a: 100, b: 20, c: 50 });


