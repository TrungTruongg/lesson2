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

const groupByType = (arr) => {
  console.log(
    arr.reduce((acc, item) => {
      if (!acc[item.type]) acc[item.type] = [];
      acc[item.type].push(item.name);
      return acc;
    }, {})
  );
};

//Bai 10 kiểm tra xem arr2 có phải là mảng con của arr1 hay không.
const isSubset = (arr1, arr2) => {
  console.log(
    "Bai 10",
    arr2.every((value) => arr1.includes(value))
  );
};

//Bai 11 trả về key có giá trị số lớn nhất trong object.
const findMaxKey = (obj) => {
  console.log(
    "Bai 11",
    Object.keys(obj).reduce((max, key) => (obj[key] > obj[max] ? key : max))
  );
};

//Bai 12 hợp hai object, nếu key trùng nhau thì cộng giá trị.
const mergeObjectsSumValues = (obj1, obj2) => {
  for (let key in obj2) {
    obj1[key] = (obj1[key] || 0) + obj2[key];
  }
  console.log("Bai 12", obj1);
};

//Bai 13 trả về object đếm số lần xuất hiện của mỗi phần tử trong mảng.
const countElements = (arr) =>
  console.log(
    "Bai 13",
    arr.reduce((acc, item) => {
      acc[item] = (acc[item] || 0) + 1;
      return acc;
    }, {})
  );

//Bai 14 xóa các key có giá trị là null hoặc undefined.
const cleanObject = (obj) =>
  console.log(
    "Bai 14",
    Object.fromEntries(
      Object.entries(obj).filter(
        ([key, value]) => value !== null && value !== undefined
      )
    )
  );

//Bai 15 kiểm tra xem mảng có phần tử lặp lại hay không.
const hasDuplicate = (arr) =>
  console.log("Bai 15", arr.length !== new Set(arr).size);

//Bai 16 tinh tong value theo key
const sumByGroup = (arr, key) =>
  console.log(
    "Bai 16",
    arr.reduce((acc, item) => {
      acc[item[key]] = (acc[item[key]] || 0) + item.price;
      return acc;
    }, {})
  );

//Bai 17  gôp mang xoa ptu trung
const uniqueValues = (arr1, arr2) =>
  console.log("Bai 17", [...new Set(arr1.concat(arr2))]);

//Bai 18 kiem tra hoán vi
const isPermutation = (arr1, arr2) => {
  const sort1 = arr1.sort((a, b) => a - b);
  const sort2 = arr2.sort((a, b) => a - b);

  const result = sort1.every((val, idx) => val === sort2[idx]);

  console.log("Bai 18", result);
};

//Bai 19 tim chuoi lon nhat trong mang
const findLongestString = (arr) =>
  console.log(
    "Bai 19",
    arr.reduce((max, item) => (max.length > item.length ? max : item))
  );

//Bai 20 tra ve mang chua gia tri chung
const intersection = (arr1, arr2) =>
  console.log(
    "Bai 20",
    arr1.filter((value) => arr2.includes(value))
  );

//Bai 21 xóa tất cả các phần tử có giá trị nhỏ hơn minValue.

const filterByMinValue = (arr, minVal) =>
  console.log(
    "Bai 21",
    arr.filter((value) => value >= minVal)
  );

//Bai 22 tim gia tri co do dai lon nhat trong 1 object
const findLongestValue = (obj) =>
  console.log(
    "Bai 22",
    Object.values(obj).reduce((max, item) =>
      max.length > item.length ? max : item
    )
  );

//Bai 23 gom nhóm các chuỗi theo chữ cái đầu tiên.
const groupByFirstLetter = (arr) =>
  console.log(
    "Bai 23",
    arr.reduce((acc, item) => {
      const first = item[0]; //a
      if (!acc[first]) acc[first] = []; //acc[a] chưa tồn tại → tạo mảng rỗng
      acc[first].push(item); //them item apple vao acc[a]
      return acc; //tra ve object acc = { a: ['apple']  } =>tiep tuc vong lap
    }, {})
  );

//Bai 24 trả về danh sách người lớn (tuổi >= 18) từ một danh sách người.
const getAdults = (people) =>
  console.log(
    "Bai 24",
    people.filter((value) => value.age >= 18)
  );

//Bai 25 chuyển đổi một object thành mảng các cặp [key, value].
const convertToArray = (obj) => console.log("Bai 25", Object.entries(obj));

//Bai 26 sắp xếp mảng chuỗi theo độ dài tăng dần.
const sortStringsByLength = (arr) =>
  console.log(
    "Bai 26",
    arr.sort((a, b) => a.length - b.length)
  );

//Bai 27 tính tổng giá trị là số của một key được chỉ định trong danh sách object.
const sumByKey = (arr, key) =>
  console.log(
    "Bai 27",
    arr.reduce((total, item) => total + item[key], 0)
  );

//Bai 28 đếm số từ trong một chuỗi.
const countWords = (str) => console.log("Bai 28", str.match(/\S+/g).length || 0);

//Bai 29 tìm key có giá trị số nhỏ nhất trong object.
const findMinKey = (obj) =>
  console.log(
    "Bai 29",
    Object.keys(obj).reduce((min, item) =>
      obj[item] > obj[min] ? min : item
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
