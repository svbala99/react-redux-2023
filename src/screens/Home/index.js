import React, { useEffect, useState } from "react";
import API_URLS from "../../constants/apiConstants";
import { YearPicker, MonthPicker, DayPicker } from "react-dropdown-date";

function Calender() {
  const [currentDate, setCurrentDate] = useState();
  const [todayDate, setTodayDate] = useState(new Date());
  const [dateCalender, setDateCalender] = useState({
    year: "",
    month: "",
    day: "",
  });
  const currDate = Date.now();
  const date = new Date(currDate);
  const [year, setYear] = useState(date.getFullYear());
  const [month, setMonth] = useState(
    String(date.getMonth() + 1).padStart(2, "0")
  );
  const [day, setDay] = useState(date.getDate());

  useEffect(() => {
    const todayDate = `${day}${month}${year}`;
    setCurrentDate(todayDate);
    setTodayDate(new Date());
  }, [day]);

  const todayClick = () => {
    setDay(date.getDate());
    const todayDate = `${day}${month}${year}`;
    setCurrentDate(todayDate);
  };

  const nextClick = () => {
    setDay(day + 1);
    const newDate = `${day}${month}${year}`;
    setCurrentDate(newDate);
  };

  const previousClick = () => {
    setDay(day - 1);
    const newDate = `${day}${month}${year}`;
    setCurrentDate(newDate);
  };

  const submit = () => {
    setYear(dateCalender.year);
    if (dateCalender.month.length === 1) {
      setMonth("0" + dateCalender.month);
    } else {
      setMonth(dateCalender.month);
    }
    setDay(dateCalender.day);
    const newDate = `${day}${month}${year}`;
    setCurrentDate(newDate);
  };

  return (
    <div>
      <img src={`${API_URLS.CALENDER}${year}/${currentDate}.jpg`} />
      <p>
        {todayDate.toDateString()} {todayDate.toLocaleTimeString()}
      </p>
      <div className="calender-action-button">
        <div>
          <button
            onClick={() => {
              previousClick();
            }}
          >
            Previous
          </button>
          <button
            onClick={() => {
              todayClick();
            }}
          >
            Today
          </button>
          <button
            onClick={() => {
              nextClick();
            }}
          >
            Next
          </button>
        </div>
        <div className="test">
          <MonthPicker
            defaultValue={"MM"}
            numeric // to get months as numbers
            endYearGiven // mandatory if end={} is given in YearPicker
            year={dateCalender.year} // mandatory
            value={dateCalender.month} // mandatory
            onChange={(month) => {
              // mandatory
              setDateCalender((prev) => ({ ...prev, month }));
            }}
            id={"month"}
            // classes={`dropdown ${dayError ? "error" : ""}`}
            optionClasses={"option"}
          />
          <DayPicker
            defaultValue={"DD"}
            year={dateCalender.year} // mandatory
            month={dateCalender.month} // mandatory
            endYearGiven // mandatory if end={} is given in YearPicker
            value={dateCalender.day} // mandatory
            onChange={(day) => {
              // mandatory
              setDateCalender((prev) => ({ ...prev, day }));
            }}
            id={"day"}
            // classes={`dropdown ${monthError ? "error" : ""}`}
            optionClasses={"option"}
          />

          <YearPicker
            defaultValue={"YYYY"}
            start={2005} // default is 1900
            end={2024} // default is current year
            reverse // default is ASCENDING
            value={dateCalender.year} // mandatory
            onChange={(year) => {
              // mandatory
              setDateCalender((prev) => ({ ...prev, year }));
            }}
            id={"year"}
            // classes={`dropdown ${yearError ? "error" : ""}`}
            optionClasses={"option"}
          />

          <button type="button" onClick={() => submit()}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calender;
