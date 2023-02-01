const dateLeave = document.getElementById("dateLeave")
const dateReturn = document.getElementById("dateReturn")

const dateLeaveText = document.getElementById("date-leave-text")
const dateToText = document.getElementById("date-to-text")

const getDateFormatted = (date) => {
  const givenDate = date.toString()

  const dayOfWeek = givenDate.substring(0, 3)
  const day = givenDate.substring(8, 10)
  const month = givenDate.substring(4, 7)

  return `${day} ${month}, ${dayOfWeek}`
}

const setTodayDate = () => {
  const todayDate = {
    day: new Date().getDate(),
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
  }
  const formatedTodayDate = `${todayDate.year}-${
    todayDate.month < 10 ? `0${todayDate.month}` : `${todayDate.month}`
  }-${todayDate.day < 10 ? `0${todayDate.day}` : `${todayDate.day}`}`
  dateLeave.setAttribute("min", formatedTodayDate)
  dateReturn.setAttribute("min", formatedTodayDate)
  dateLeave.value = formatedTodayDate

  const date = new Date().toString()

  dateLeaveText.innerText = getDateFormatted(date)
}
setTodayDate()

const handleDateChange = (dateElement, e) => {
  if (e.target === dateLeave) dateReturn.setAttribute("min", e.target.value)
  if (e.target === dateReturn) dateLeave.setAttribute("max", e.target.value)

  const date = e.target.valueAsDate.toString()

  dateElement.innerText = getDateFormatted(date)
}

dateLeaveText.addEventListener("click", () => dateLeave.showPicker())
dateToText.addEventListener("click", () => dateReturn.showPicker())

dateLeave.addEventListener("input", (e) => handleDateChange(dateLeaveText, e))
dateReturn.addEventListener("input", (e) => handleDateChange(dateToText, e))
