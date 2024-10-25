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

export const refactorQuery = (query) => {
  if (query !== undefined) {
    return query.replace(/\s+/g, "");
  } else {
    return query;
  }
};

const firstNameList = [
  "John",
  "Emma",
  "Michael",
  "Sophia",
  "William",
  "Olivia",
  "James",
  "Ava",
  "Robert",
  "Isabella",
];

const lastNameList = [
  "Smith",
  "Johnson",
  "Williams",
  "Jones",
  "Brown",
  "Davis",
  "Miller",
  "Wilson",
  "Moore",
  "Taylor",
];

var sentences = [
  "so fat not even Dora can explore her",
  "so  fat I swerved to miss her and ran out of gas",
  "so smelly she put on Right Guard and it went left",
  "so fat she hasn’t got cellulite, she’s got celluheavy",
  "so fat she don’t need no internet – she’s already world wide",
  "so hair her armpits look like Don King in a headlock",
  "so classless she could be a Marxist utopia",
  "so fat she can hear bacon cooking in Canada",
  "so fat she won “The Bachelor” because she all those other bitches",
  "so stupid she believes everything that Brian Williams says",
  "so ugly she scared off Flavor Flav",
  "is like Domino’s Pizza, one call does it all",
  "is twice the man you are",
  "is like Bazooka Joe, 5 cents a blow",
  "is like an ATM, open 24/7",
  "is like a championship ring, everybody puts a finger in her",
];

export function generateRandomChat() {
  const randomFirstNameIndex = Math.floor(Math.random() * firstNameList.length);
  const randomLastNameIndex = Math.floor(Math.random() * lastNameList.length);
  const randomMessageIndex = Math.floor(Math.random() * sentences.length);
  console.log("hii");

  return {
    name: `${firstNameList[randomFirstNameIndex]} ${lastNameList[randomLastNameIndex]}`,
    message: sentences[randomMessageIndex],
  };
}
