/* 
- ให้เขียน Function ที่ชื่อว่า sumNegativeNumbers ซึ่งมีคุณสมบัติต่อไปนี้
    - รับ Parameter 1 ตัวคือ numbers
        1. numbers เป็น Array ที่บรรจุตัวเลข
    - Function นี้จะนำเฉพาะตัวเลขที่มีค่าน้อยกว่าศูนย์มารวมกัน แล้ว Return ค่าออกมา
    - เมื่อ Algorithm นี้ทำงาน จะต้องเห็นผลลัพธ์ด้านล่าง
*/

// Start coding here

const numbers1 = [3, -5, 10, 12, -7, 0, 8, 2];
const number2 = [0, -4, -1, -5, 6, 5, 0];

const sumNegativeNumbers = (numbers) => {
    return numbers.filter(num => num<0).reduce((acc, num)=> acc + num,0)
}

console.log(sumNegativeNumbers(numbers1)); // -12
console.log(sumNegativeNumbers(number2)); // -10
