// 객체 다루기
const object = { a: 1, b: 2, c: 3 };

// 사본을 만들어서 b 값만 덮어 쓰기
const nextObject = { ...object, b: 2 };

// 배열 다루기
const array = [
  { id: 1, value: true },
  { id: 2, value: true },
  { id: 3, value: false },
];

// 새 항목 추가
let nextArray = array.concat({ id: 4 });

// id 가 2 인 항목 제거
nextArray.filter((item) => item.id !== 2);

// id 가 1 인 항목의 value 를 false 로 설정
nextArray.map((item) => (item.id === 1 ? { ...item, value: false } : item));
