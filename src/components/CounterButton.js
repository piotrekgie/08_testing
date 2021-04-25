import Button from "./Button";

function CounterButton( {increase, decrease, reset, change, counterData} ) {
  const text = increase ? '+' : (decrease ? '-' : (reset ? 'Reset' : (change ? 'Change' : 'Click me')));

  const handleButtonClick = (e) => {
    if (change) {
      counterData.setStartValue(counterData.userValue);
      counterData.changeValue(counterData.userValue);
    } else if (increase) {
      counterData.changeValue(counterData.currentValue + 1);
    } else if (decrease) {
      counterData.changeValue(counterData.currentValue - 1);
    } else if (reset) {
      counterData.changeValue(counterData.startValue);
    } else {
      e.preventDefault();
    }
  }

  return (
    <Button label={text} handleButtonClick={handleButtonClick}/>
  )
}

Button.defaultProps = {
  increase: false,
  decrease: false,
  reset: false
}

export default CounterButton;