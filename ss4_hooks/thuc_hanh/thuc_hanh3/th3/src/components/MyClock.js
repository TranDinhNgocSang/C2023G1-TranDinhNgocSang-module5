import useClock from "../hooks/useClock";

function MyClock() {
  //Gọi custom hook để sử dụng
  const [time, ampm,sang] = useClock();
  return (
    <div id="Clock-style">
      {time}
      <span> {ampm}</span>
      <p>{sang}</p>
    </div>
  );
}
export default MyClock;