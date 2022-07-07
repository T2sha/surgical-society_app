import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const MyCalendar = () => {
  const [value, onChange] = useState(new Date());

  const selected = () => {


    console.log(value)
  }

  return (
    <div>
      <Calendar  onChange={selected} value={value} />
    </div>
  );
}

export default MyCalendar;