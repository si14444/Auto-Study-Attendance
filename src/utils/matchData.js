//"2024년 5월 17일" 형식의 데이터를 Data객체 형식으로 바꿔주는 함수
const matchData = (date) => {
  const dateParts = date.match(/(\d+)년 (\d+)월 (\d+)일/);
  const year = parseInt(dateParts[1]);
  const month = parseInt(dateParts[2]) - 1;
  const day = parseInt(dateParts[3]);
  const targetDate = new Date(year, month, day);
  targetDate.setHours(23, 59, 59, 0);
  return targetDate;
};

export default matchData;
