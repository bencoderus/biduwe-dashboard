import Vue from "vue";

// Vue Global Date filter
Vue.filter("formatDate", (date) => {
  let myDate = new Date(date);
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return `${
    months[myDate.getMonth()]
  } ${myDate.getDate()}, ${myDate.getFullYear()}`;
});
