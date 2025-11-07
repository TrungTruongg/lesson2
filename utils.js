//Bai 1 tổng các phần tử trong mảng.
const sumArray = (arr) =>
  console.log(
    "Bai 1",
    arr.reduce((a, b) => a + b, 0)
  );

//Bai 2 đếm số lần xuất hiện của value trong mảng arr
const countOccurrences = (arr, value) =>
  console.log("Bai 2", arr.filter((a) => a === value).length);

//Bai 3 trả về mảng không có phần tử trùng lặp
const removeDuplicates = (arr) => console.log("Bai 3", ...new Set(arr));

//Bai 4 chuyển một mảng gồm các phần tử mảng 2D (2 chiều) thành mảng 1D (1 chiều)
const flattenArray = (arr) => console.log("Bai 4", arr.flat());

//Bai 5 kiểm tra xem mảng có đối xứng hay không.
const isSymmetric = (arr) =>
  console.log("Bai 5", arr.join(",") === arr.reverse().join(","));

//Bài 6 trả về giá trị lớn thứ hai trong mảng
const findSecondLargest = (arr) => {
  const unique = [...new Set(arr)];

  const sorted = unique.sort((a, b) => b - a);
  console.log("Bai 6", sorted[1]);
};

//Bai 7 sắp xếp danh sách sản phẩm theo giá tăng dần.
const sortProductsByPrice = (products) => {
  console.log(
    "Bai 7",
    products.sort((a, b) => a.price - b.price)
  );
};

//Bai 8 trả về sản phẩm có giá lớn nhất.

const findMostExpensiveProduct = (products) => {
  console.log(
    "Bai 8",
    products.reduce((max, item) => (item.price > max.price ? item : max))
  );
};

//Bai 9 gom nhóm các phần tử trong mảng dựa theo loại (type).
const arr = [
  { type: "fruit", name: "apple" },
  { type: "vegetable", name: "carrot" },
  { type: "fruit", name: "banana" },
];

const groupByType = () => {
  return arr.reduce((acc, item) => {
    if (!acc[item.type]) acc[item.type] = [];
    acc[item.type].push(item.name);
    return acc;
  }, {});
};

// Bước 1: acc = {}, item = { type: 'fruit', name: 'apple' }
//         acc['fruit'] chưa tồn tại → tạo mảng rỗng
//         acc['fruit'].push('apple')
//         → acc = { fruit: ['apple'] }

// Bước 2: acc = { fruit: ['apple'] }, item = { type: 'vegetable', name: 'carrot' }
//         acc['vegetable'] chưa tồn tại → tạo mảng rỗng
//         acc['vegetable'].push('carrot')
//         → acc = { fruit: ['apple'], vegetable: ['carrot'] }

// Bước 3: acc = { fruit: ['apple'], vegetable: ['carrot'] }, item = { type: 'fruit', name: 'banana' }
//         acc['fruit'] đã tồn tại → không tạo mới
//         acc['fruit'].push('banana')
//         → acc = { fruit: ['apple', 'banana'], vegetable: ['carrot'] }

//Bai 10 kiểm tra xem arr2 có phải là mảng con của arr1 hay không.
const arr1 = [1, 2, 3, 4];
const arr2 = [2, 4];

const isSubset = () => {
  console.log(
    "Bai 10",
    arr2.every((value) => arr1.includes(value))
  );
};

//Bai 11 trả về key có giá trị số lớn nhất trong object.
const obj = { a: 10, b: 20, c: 15 };

const findMaxKey = () => {
  console.log(
    "Bai 11",
    Object.keys(obj).reduce((max, key) => (obj[key] > obj[max] ? key : max))
  );
};

//Bai 12 hợp hai object, nếu key trùng nhau thì cộng giá trị.
const obj1 = { a: 10, b: 20 };
const obj2 = { b: 30, c: 40 };

const mergeObjectsSumValues = () => {
  for (let key in obj2) {
    obj1[key] = (obj1[key] || 0) + obj2[key];
  }
  console.log("Bai 12", obj1);
};

//Bai 13 trả về object đếm số lần xuất hiện của mỗi phần tử trong mảng.
const arr3 = ["a", "b", "a", "c", "b", "a"];

const countElements = () =>
  console.log(
    "Bai 13",
    arr3.reduce((acc, item) => {
      acc[item] = (acc[item] || 0) + 1;
      return acc;
    }, {})
  );

// Ban đầu: acc = {}

// Bước 1: item = 'a'
//         acc['a'] = (undefined || 0) + 1 = 1
//         acc = { a: 1 }

// Bước 2: item = 'b'
//         acc['b'] = (undefined || 0) + 1 = 1
//         acc = { a: 1, b: 1 }

// Bước 3: item = 'a'
//         acc['a'] = (1 || 0) + 1 = 2
//         acc = { a: 2, b: 1 }

// Bước 4: item = 'c'
//         acc['c'] = (undefined || 0) + 1 = 1
//         acc = { a: 2, b: 1, c: 1 }

// Bước 5: item = 'b'
//         acc['b'] = (1 || 0) + 1 = 2
//         acc = { a: 2, b: 2, c: 1 }

// Bước 6: item = 'a'
//         acc['a'] = (2 || 0) + 1 = 3
//         acc = { a: 3, b: 2, c: 1 } ✅

//Bai 14 xóa các key có giá trị là null hoặc undefined.
const obj3 = { a: 1, b: null, c: undefined, d: 4 };

const cleanObject = () =>
  console.log(
    "Bai 14",
    Object.fromEntries(
      Object.entries(obj3).filter(
        ([key, value]) => value !== null && value !== undefined
      )
    )
  );

//Bai 15 kiểm tra xem mảng có phần tử lặp lại hay không.

const arr4 = [1, 5, 3, 4, 2];

const hasDuplicate = () =>
  console.log("Bai 15", arr4.length !== new Set(arr4).size);

//Bai 16 tinh tong value theo key
const arr5 = [
  { type: "fruit", price: 10 },
  { type: "vegetable", price: 20 },
  { type: "fruit", price: 30 },
];

const sumByGroup = (key) =>
  console.log(
    "Bai 16",
    arr5.reduce((acc, item) => {
      acc[item[key]] = (acc[item[key]] || 0) + item.price;
      return acc;
    }, {})
  );

//Bai 17 , gôp mang xoa ptu trung
const arr6 = [2, 2, 3],
  arr7 = [3, 4, 5];

const uniqueValues = () =>
  console.log("Bai 17", [...new Set(arr6.concat(arr7))]);

//Bai 18, kiem tra hoán vi
const arr8 = [5, 2, 2],
  arr9 = [1, 2, 2];

const isPermutation = () => {
  const sort1 = arr8.sort((a, b) => a - b);
  const sort2 = arr9.sort((a, b) => a - b);

  const result = sort1.every((val, idx) => val === sort2[idx]);

  console.log("Bai 18", result);
};

//Bai 19 tim chuoi lon nhat trong mang
const arr10 = ["abc", "abcd", "a"];

const findLongestString = () =>
  console.log(
    "Bai 19",
    arr10.reduce((max, item) => (max.length > item.length ? max : item))
  );

//Bai 20 tra ve mang chua gia tri chung
const arr11 = [1, 2, 3],
  arr12 = [2, 3, 4];

const intersection = () =>
  console.log(
    "Bai 20",
    arr11.filter((value) => arr12.includes(value))
  );

//Bai 21 xóa tất cả các phần tử có giá trị nhỏ hơn minValue.
const arr13 = [5, 10, 15, 20];
const filterByMinValue = (minVal) =>
  console.log(
    "Bai 21",
    arr13.filter((value) => value >= minVal)
  );

//Bai 22 tim gia tri co do dai lon nhat trong 1 object
const obj4 = { a: "cat", b: "elephant", c: "dog" };

const findLongestValue = () =>
  console.log(
    "Bai 22",
    Object.values(obj4).reduce((max, item) =>
      max.length > item.length ? max : item
    )
  );

//Bai 23 gom nhóm các chuỗi theo chữ cái đầu tiên.
const arr14 = ["apple", "banana", "avocado", "blueberry"];

const groupByFirstLetter = () =>
  console.log(
    "Bai 23",
    arr14.reduce((acc, item) => {
      const first = item[0]; //a
      if (!acc[first]) acc[first] = []; //acc[a] chưa tồn tại → tạo mảng rỗng
      acc[first].push(item); //them item apple vao acc[a]
      return acc; //tra ve object acc = { a: ['apple']  } =>tiep tuc vong lap
    }, {})
  );

//Bai 24 trả về danh sách người lớn (tuổi >= 18) từ một danh sách người.
const people = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 16 },
  { name: "David", age: 22 },
];

const getAdults = () =>
  console.log(
    "Bai 24",
    people.filter((value) => value.age >= 18)
  );

//Bai 25 chuyển đổi một object thành mảng các cặp [key, value].
const obj5 = { a: 1, b: 2, c: 3 };

const convertToArray = () => console.log("Bai 25", Object.entries(obj5));

//Bai 26 sắp xếp mảng chuỗi theo độ dài tăng dần.
const arr15 = ["a", "ccc", "bb"];

const sortStringsByLength = () =>
  console.log(
    "Bai 26",
    arr15.sort((a, b) => a.length - b.length)
  );

//Bai 27 tính tổng giá trị là số của một key được chỉ định trong danh sách object.

const arr16 = [
  { type: "fruit", price: 10 },
  { type: "vegetable", price: 20 },
  { type: "fruit", price: 30 },
];

const sumByKey = (key) =>
  console.log(
    "Bai 27",
    arr16.reduce((total, item) => total + item[key], 0)
  );

//Bai 28 đếm số từ trong một chuỗi.
const str = "Hello world! Welcome to JavaScript";

const countWords = () => console.log("Bai 28", str.match(/\S+/g).length || 0);

//Bai 29 tìm key có giá trị số nhỏ nhất trong object.
const obj6 = { a: 100, b: 20, c: 50 };

const findMinKey = () =>
  console.log(
    "Bai 29",
    Object.keys(obj6).reduce((min, item) =>
      obj6[item] > obj6[min] ? min : item
    )
  );
export {
  sumArray,
  countOccurrences,
  removeDuplicates,
  flattenArray,
  isSymmetric,
  findSecondLargest,
  sortProductsByPrice,
  findMostExpensiveProduct,
  groupByType,
  isSubset,
  findMaxKey,
  mergeObjectsSumValues,
  countElements,
  cleanObject,
  hasDuplicate,
  sumByGroup,
  uniqueValues,
  isPermutation,
  findLongestString,
  intersection,
  filterByMinValue,
  findLongestValue,
  groupByFirstLetter,
  getAdults,
  convertToArray,
  sortStringsByLength,
  sumByKey,
  countWords,
  findMinKey,
};
