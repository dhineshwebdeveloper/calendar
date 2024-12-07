
import './App.css'
import right_arrw from "./assets/arrow-right-circle-fill.svg"
import left_arrw from "./assets/arrow-left-circle-fill.svg"
import { useState } from 'react';

const dayOfDWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const months = ["January", "February", "March", "April",
  "May", "June", "July", "August", "Saptemper", "October",
  "Novermber", "December"
];

function App() {

  const [selectDate, setSelectedDate] = useState(new Date())

  const dayInMonth = () => {
    const dayArray = [];
    const firstDay = new Date(selectDate.getFullYear(), selectDate.getMonth(), 1);
    const lastDay = new Date(selectDate.getFullYear(), selectDate.getMonth() + 1, 0);
  
    // Fill empty slots before the first day of the month
    for (let i = 0; i < firstDay.getDay(); i++) {
      dayArray.push(null);
    }
  
    // Fill the days of the month
    for (let i = 1; i <= lastDay.getDate(); i++) {
      dayArray.push(new Date(selectDate.getFullYear(), selectDate.getMonth(), i));
    }
  
    return dayArray;
  };

  const isSameDay = (date1, date2) => {
    return date1.getDate() === date2.getDate() && date1.getMonth() ===
    date2.getMonth() && date1.getFullYear() === date2.getFullYear();
  }
 
const handlemonthchange = (e) => {
const newMonth = parseInt(e.target.value,10);
setSelectedDate(new Date(selectDate.getFullYear(), newMonth, 1))
}

const handleyearchange = (e) => {
  const newYear = parseInt(e.target.value, 10);
  setSelectedDate(new Date(newYear, selectDate.getMonth(), 1))
}
  return (
    <>
      <div className="calendar">
        <div className="header">
          <button onClick={() => {
            setSelectedDate(new Date(selectDate.getFullYear(), 
            selectDate.getMonth() -1, 1))
          }}>
            <img src={left_arrw} />
          </button>
          <select value={selectDate.getMonth()} onChange={handlemonthchange}>
            {months.map((month, index) => (
              <option key={index} value={index}>{month}</option>

            ))}
          </select>
          <select value={selectDate.getFullYear()}
          onChange={handleyearchange}
          >
            {
              Array.from({ length: 10 }, (_, i) => (
                selectDate.getFullYear() - 5 + i
              )).map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))
            }
          </select>
          <button onClick={() => {
            setSelectedDate(new Date(selectDate.getFullYear(), 
            selectDate.getMonth() +1, 1))
          }}>
            <img src={right_arrw} />
          </button>
        </div>
        <div className="daysofWeek">
          {dayOfDWeek.map((day) => (
            <div key={day}>{day}</div>
          )

          )}
        </div>
        <div className="days">
          {
            dayInMonth().map((day, index) => (
               <div key={index}  className={day ? (isSameDay(day, new Date()) ? "day current" : "day") : "empty"}
  >{
                day? day.getDate() : ""
               }
               </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default App
