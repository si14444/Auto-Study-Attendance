import React from "react";
import PersonalAttendance from "./PersonalAttendance";
import "../styles/AttendanceDetail.css";

const AttendanceDetail = (period) => {
  const dummyData = [
    {
      name: "나범수",
      total: 8,
    },
    {
      name: "라범수",
      total: 3,
    },
  ];
  return (
    <div>
      <table className="detailMainTable">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Attendance</th>
            <th>Total Solved Problems</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody className="tableContents">
          {dummyData.map((data, index) => (
            <PersonalAttendance
              data={data}
              key={index}
              period={period.period}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceDetail;
