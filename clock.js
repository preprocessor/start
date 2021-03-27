// Get current time and format
function getTime() {
  let date = new Date(),
    min = date.getMinutes(),
    sec = date.getSeconds(),
    hour = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();

  return (
    "" +
    (hour < 10 ? "0" + hour : hour) +
    ":" +
    (min < 10 ? "0" + min : min) +
    ":" +
    (sec < 10 ? "0" + sec : sec)
  );
}