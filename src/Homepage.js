import axios from "axios";
import React, { useRef, useState } from "react";

//

const HomePage = () => {
  const [month, setMonth] = useState(null);
  const [expectedCost, setExpectedCost] = useState(0);

  async function changeDate(event) {
    let date = event.target.value;

    setMonth(date);

    if (date) {
      let year = date.split("-")[0];
      let month = date.split("-")[1];
      let res = await fetch(
        `http://3.108.221.195:5001/year/${year}/month/${month}`
      );
      let data = await res.json();
      setExpectedCost(data.expectedCost);
    }
  }

  return (
    <div className="HomeTitle">
      <h3>Home Automation(ESP-32 Power consumption analysis)</h3>
      <div className="Maincontent">
        <div className="section-1">
          <div className="DatePicker">
            <h4>Pick the month and year</h4>
            <input type="month" onChange={changeDate} />
          </div>
          <div className="Expcost">
            Expected Cost of {month ?? ""} is : &#x20B9; {expectedCost.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
