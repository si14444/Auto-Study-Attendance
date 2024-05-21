import millisecond from "../constants/millisecond";
import matchData from "./matchData";

//종료 일자에서 시작 일자를 빼 스터디 기간을 얻는 함수
const getPeriod = (start, end) => {
  const startTime = matchData(start);
  const endTime = matchData(end);
  return (endTime - startTime) / millisecond;
};

export default getPeriod;
