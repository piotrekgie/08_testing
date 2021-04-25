import {  useState } from "react";

import CounterButton from "./CounterButton";

function Counter({value}) {
  const [startValue, setStartValue] = useState(value);
  const [userValue, setUserValue] = useState(0);
  const [counterValue, setCounterValue] = useState(value);

  const handleChange = (e) => {
    setUserValue(parseInt(e.target.value));
  }

  return (
    <>
      <div className="counter">{counterValue}</div>
      <CounterButton increase counterData={{changeValue: setCounterValue, currentValue: counterValue, startValue: startValue}}/>
      <CounterButton decrease counterData={{changeValue: setCounterValue, currentValue: counterValue, startValue: startValue}}/>
      <CounterButton reset counterData={{changeValue: setCounterValue, currentValue: counterValue, startValue: startValue}}/>
      <input type="number" id="user-value" onChange={(e) => handleChange(e)} placeholder={userValue}/>
      <CounterButton change counterData={{changeValue: setCounterValue, setStartValue: setStartValue, userValue: userValue}}/>
    </>
  )
}

Counter.defaultProps = {
  value: 0
}

export default Counter;