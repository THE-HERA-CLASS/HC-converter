const other1 =
  '소프트웨어 개발 영역을 결정하는 요소 중 다음 사항과 관계있는 것은?<br><br><br><br>- 소프트웨어에 의해 간접적으로 제어되는 장치와 소프트웨어를 실행하는 하드웨어<br><br>- 기존의 소프트웨어와 새로운 소프트웨어를 연결하는 소프트웨어<br><br>- 순서적 연산에 의해 소프트웨어를 실행하는 절차<br><br><br><br>① 기능(Function)<br><br>② 성능(Performance)<br><br>③ 제약조건(Constraint)<br><br>④ 인터페이스(Interface)<br><br>--정답 4<br><br>--해설<br><br>인터페이스: 서로 다른 두 시스템이나 소프트웨어 등을 서로 이어주는 부분 또는 접속 장치를 의미';

const other2 =
  '소프트웨어 개발 영역을 결정하는 요소 중 다음 사항과 관계있는 것은?① 기능(Function)<br><br>② 성능(Performance)<br><br>③ 제약조건(Constraint)<br><br>④ 인터페이스(Interface)<br><br>--정답 4<br><br>--해설<br><br>인터페이스: 서로 다른 두 시스템이나 소프트웨어 등을 서로 이어주는 부분 또는 접속 장치를 의미';

const other3 =
  '소프트웨어 개발 영역을 결정하는 요소 중 다음 사항과 관계있는 것은?<br><br><br><br>- 소프트웨어에 의해 간접적으로 제어되는 장치와 소프트웨어를 실행하는 하드웨어<br><br>- 기존의 소프트웨어와 새로운 소프트웨어를 연결하는 소프트웨어<br><br>- 순서적 연산에 의해 소프트웨어를 실행하는 절차<br><br><br><br>- 소프트웨어에 의해 간접적으로 제어되는 장치와 소프트웨어를 실행하는 하드웨어<br><br>- 기존의 소프트웨어와 새로운 소프트웨어를 연결하는 소프트웨어<br><br>- 순서적 연산에 의해 소프트웨어를 실행하는 절차<br><br><br><br>① 기능(Function)<br><br>② 성능(Performance)<br><br>③ 제약조건(Constraint)<br><br>④ 인터페이스(Interface)<br><br>--정답 4<br><br>--해설<br><br>인터페이스: 서로 다른 두 시스템이나 소프트웨어 등을 서로 이어주는 부분 또는 접속 장치를 의미';

const other = other3;
const example_start_index = other.indexOf('<br><br><br><br>');
const choice_1_index = other.indexOf('①');
const choice_2_index = other.indexOf('②');
const choice_3_index = other.indexOf('③');
const choice_4_index = other.indexOf('④');
const answer_start_index = other.indexOf('--정답');
const solve_start_index = other.indexOf('--해설');
const other_end_index = other.length;

let example = {};
let choice = {};
let answer = '';
let solve = '';

if (example_start_index > 0) {
  // 보기문 존재 케이스 : 일단 보기문 영역을 담아
  const example_init = other
    .substring(example_start_index, choice_1_index)
    .split('<br><br><br><br>');
  example_init.pop(); // 배열 맨뒤 공백칸 제거
  example_init.shift(); // 배열 맨앞 공백칸 제거
  const example_array = example_init.map((row) => {
    return { type: 'text', value: row };
  });
  console.log(example_array);
  // 보기문이 몇개인지 쪼개서 배열로 담아
  // const example_array = example.
}
