import React, {useEffect, useState} from 'react';
import API_URLS from '../../constants/apiConstants';
import moment from 'moment';



function Calender() {
  const [currentDate, setCurrentDate] = useState(formatDate(moment()));

  useEffect(() => {
    const todayDate = moment().format('YYYY/DDMMYYYY');
    setCurrentDate(todayDate);
  }, []);

  function formatDate(date) {
    if (!date.isValid()) {
      return ''; // Handle invalid date
    }

    const day = date.format('D');
    console.log(day,'day--------->')
    const formattedDay = day.length === 1 ? `${day}` : day;
    return date.format(`Y/${formattedDay}MMYYYY`);
  }

  const todayClick = () =>{
    const todayDate = moment().format('YYYY/DDMMYYYY');
    setCurrentDate(todayDate);
  }

  const nextClick = () =>{
    const newDate = moment(currentDate, 'Y/DMMYYYY').add(1, 'day');
    setCurrentDate(formatDate(newDate));
    console.log(currentDate,'currentdatenext')
  }

  const previousClick = () =>{
    const newDate = moment(currentDate, 'YYYY/DMMYYYY').add(-1, 'day').format('YYYY/DMMYYYY');
    setCurrentDate(newDate);
    console.log(currentDate,'currentdatenext')
  }

  return (
    <div>
      <img src={`${API_URLS.CALENDER}${currentDate}.jpg`} />
      <button onClick={()=>{
        todayClick()
      }}>
        Today
      </button>
      <button onClick={()=>{
        previousClick()
      }}>
        Previous
      </button>
      <button onClick={()=>{
        nextClick()
      }}>
        Next
      </button>
    </div>
  )
}

export default Calender
