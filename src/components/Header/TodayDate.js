function TodayDate() {
  const todayDate = parseDate();

  return <div>{todayDate}</div>;
}

function parseDate() {
  const date = new Date();
  const dayOfWeek = new Intl.DateTimeFormat("ko", {
    dateStyle: "full",
  })
    .format(date)
    .split(" ")[3];
  const yearMonthDay = new Intl.DateTimeFormat("ko-KR").format(date);
  return `${yearMonthDay} ${dayOfWeek}`;
}

export default TodayDate;
