function findStudentIndex(students, searchStudent) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  let ceilIndex = students.length - 1;
  let floorIndex = 0;
  let currentIndex;
  const setCurrentIndex = () => {
    currentIndex = Math.floor((ceilIndex + floorIndex) / 2);
  };
  setCurrentIndex();
  while (ceilIndex >= floorIndex) {
    if (searchStudent === students[currentIndex]) {
      return currentIndex;
    }
    if (searchStudent > students[currentIndex]) {
      floorIndex = currentIndex + 1;
      setCurrentIndex();
    }
    if (searchStudent < students[currentIndex]) {
      ceilIndex = currentIndex - 1;
      setCurrentIndex();
    }
  }
  return -1;
}

let students = [
  "Andrew",
  "Bobby",
  "Diana",
  "George",
  "Hannah",
  "Isaac",
  "Jasmine",
  "John",
];
let searchStudent = "John";

console.log(
  "test case 1 : ",
  findStudentIndex(students, searchStudent) === 7 ? "Approve" : "Regect"
);

students = ["Alice", "Bob", "Charlie", "Diana", "Ethan", "Fiona"];
searchStudent = "Andrew";

console.log(
  "test case 2 : ",
  findStudentIndex(students, searchStudent) === -1 ? "Approve" : "Reject"
);

students = ["Alice", "Bob", "Charlie", "Diana", "Ethan", "Fiona"];
searchStudent = "Charlie";

console.log(
  "test case 3 : ",
  findStudentIndex(students, searchStudent) === 2 ? "Approve" : "Reject"
);

// ตอบคำถามตรงนี้จ้า
// O(log(n))

// proof:
// n คือจำนวนข้อมูล และ x คือ big O ที่ต้องการ

// จำนวน loop คือ
// result = 1+(2)+(2^2)+(2^3)+...+(2^x)

// 2^0 <= 2^x <= result < n

// 1 <= x <= log(result) < log(n)

// ดังนั้น 1 <= x <= log(n)

// worst case คือ log(n)
