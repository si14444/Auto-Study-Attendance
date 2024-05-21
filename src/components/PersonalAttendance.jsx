import problemsCount from "../constants/problemsCount";
import React from "react";
import "../styles/PersonalAttendance.css";

const PersonalAttendance = ({ data, period }) => {
  const attendanceList = new Array(period).fill(true);

  console.log(attendanceList);

  attendanceList[2] = true;
  attendanceList[5] = true;
  attendanceList[4] = false;

  const attendanceCount = attendanceList.filter(
    (attendance) => attendance
  ).length;

  console.log(attendanceCount);

  return (
    <tr>
      <td>{data.name}</td>
      <td>
        <div className="attendance-bar-container">
          {attendanceList.map((attendance, index) => (
            <div
              key={index}
              className="attendance-box"
              style={{
                backgroundColor:
                  attendance === true
                    ? "#1ebd53"
                    : attendance === false
                    ? "red"
                    : "white",
              }}
            ></div>
          ))}
          <div
            className="attendance-box-span"
            style={{
              color:
                attendanceList.filter((attendance) => attendance === true)
                  .length >= 5
                  ? "#1ebd53"
                  : "red",
            }}
          >
            {attendanceCount} days
          </div>
        </div>
      </td>
      <td>
        <div className="attendance-bar-container">
          <div className="attendance-bar">
            <div
              className="attendance-bar-fill"
              style={{
                width: `${(data.total / problemsCount.totalCount) * 100}%`,
              }}
            ></div>
          </div>
          <div className="attendance-text">{data.total} problems</div>
        </div>
      </td>
      <td>
        {attendanceCount >= problemsCount.targetAttendanceCount &&
        data.total >= problemsCount.totalCount ? (
          <span className="span-present">Present</span>
        ) : (
          <span className="span-absent">Absent</span>
        )}
      </td>
    </tr>
  );
};

export default PersonalAttendance;
