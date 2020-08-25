import React from "react";
import { connect } from "react-redux";

const CountDown = ({value, update, start, stop, reset, isProcessing}) => {
  React.useEffect(() => {
    if (isProcessing) {
      const intervalId = setInterval(() => {
        update();
      }, 1000);
      return () => {
        clearInterval(intervalId);
      }
    }
  }, [isProcessing])
  const current = new Date(value*1000)
  return (
    <div>
      <div style={{fontSize: "50px"}}>
        <span>{current.getUTCHours()}h </span>
        <span>{current.getMinutes()}m </span>
        <span>{current.getSeconds()}s </span>
      </div>
      <button disabled={isProcessing} onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  )  
};

const mapStateToProps = (state) => ({
  value: state.countDownReducer.value,
  isProcessing: state.countDownReducer.isProcessing
});

const mapDispatchToProps = (dispatch) => ({
  update: () => dispatch({ type: "countdown/update" }),
  start: () => dispatch({ type: "countdown/start" }),
  stop: () => dispatch({ type: "countdown/stop" }),  
  reset: () => dispatch({ type: "countdown/reset" }),  
})

export default connect(mapStateToProps, mapDispatchToProps)(CountDown);