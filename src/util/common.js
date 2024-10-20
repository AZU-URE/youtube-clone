export const timestampRevamp = (timestamp) => {
  const date = new Date(timestamp);
  const present = new Date();
  const year = present.getFullYear() - date.getFullYear();
  const month = present.getMonth() - date.getMonth();
  const day = present.getDate() - date.getDate();
  if (year !== 0) {
    return year + " year ago";
  } else {
    if (month !== 0) {
      return month + " month ago";
    } else {
      if (day > 1) {
        return day + " days ago";
      } else {
        return "Today";
      }
    }
  }
};

export const refactorNum = (num) => {
  const length = num.toString().length;
  if (length < 4) {
    return num;
  } else if (length < 7) {
    return Math.round(num / 1000) + "K";
  } else if (length < 10) {
    return Math.round(num / 1000000) + "M";
  } else {
    return Math.round(num / 1000000000) + "B";
  }
};
