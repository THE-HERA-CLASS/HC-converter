// let html = '<tbody><td></td></tbody>';
// console.log(html);
// html = html.replace('<tbody>', '');
// console.log(html);

const html_array = [
  '2. 문제내용 문제내용 문제내용 문제내용 문제내용 문제내용 문제내용 문제내용 문제내용 문제내용 문제내용 문제내용 문제내용 문제내용 문제내용 문제내용 문제내용 문제내용 문제내용.',
  '보기문내용 보기문내용',
  '① 이순신② 김현수③ 김채민④ 강준석',
];

const dot_index = html_array[0].indexOf('. ');
const substring = html_array[0].substring(0, index);

if (!isNaN(substring)) {  // 숫자이면 문제유형으로 처리
  console.log('number');
} else {
  console.log('non number'); // 숫자가 아니면 공지유형으로 처리
}

// console.log(substring);
