import React, { useState } from "react";
import "../styles/AttendanceApp.css";
import AttendanceDetail from "./AttendanceDetail";
import matchData from "../utils/matchData";
import getPeriod from "../utils/getPeriod";

const AttendanceApp = () => {
  const practiceData = [
    {
      name: "11주차",
      start: "2024년 5월 10일",
      end: "2024년 5월 17일",
      continue: true,
    },
    {
      name: "10주차",
      start: "2024년 4월 25일",
      end: "2024년 5월 11일",
      continue: false,
    },
    {
      name: "9주차",
      start: "2024년 5월 12일",
      end: "2024년 5월 11일",
      continue: false,
    },
  ];

  // 디테일 창 상태 관리 코드
  const [detailsVisible, setDetailsVisible] = useState([
    true,
    ...new Array(practiceData.length - 1).fill(false),
  ]);

  const toggleDetails = (index) => {
    setDetailsVisible((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const isContinue = (endDate) => {
    const targetDate = matchData(endDate);
    const currentDateTime = new Date();
    return targetDate > currentDateTime;
  };

  return (
    <div className="attendanceApp">
      <h1>Algorithm Study Automatic Attendance</h1>
      <p>
        Track attendance for your study group with ease. This page shows the
        attendance records for each student, <br />
        including a visual indicator for students who have attended more than 5
        days a week.
      </p>
      <table className="mainTable">
        <thead>
          <tr>
            <th>Practice Name</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {practiceData.map((practice, index) => (
            <React.Fragment key={index}>
              <tr className="main-row" onClick={() => toggleDetails(index)}>
                <td>{practice.name}</td>
                <td>{practice.start}</td>
                <td>{practice.end}</td>
                <td>
                  {isContinue(practice.end) ? (
                    <span className="continue">진행 중</span>
                  ) : (
                    <span className="end">종료</span>
                  )}
                </td>
              </tr>
              {detailsVisible[index] && (
                <tr>
                  <td colSpan="4">
                    <AttendanceDetail
                      period={getPeriod(practice.start, practice.end)}
                    />
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceApp;
