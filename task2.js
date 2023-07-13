function sortArr(arr) {
  console.log(arr.sort(sortStudents));
}
function sortStudents(s1, s2) {
  console.log(+s1.dob.split('-')[0]);
  if (s1.biology + s1.chemistry !== s2.biology + s2.chemistry) {
    return s2.biology + s2.chemistry - (s1.biology + s1.chemistry);
  } else if (s1.biology !== s2.biology) {
    return s2.biology - s1.biology;
  } else if (s1.chemistry !== s2.chemistry) {
    return s2.chemistry - s1.chemistry;
  } else {
    return +s2.dob.split('-')[0] - +s1.dob.split('-')[0];
  }
}
