const studentList = [
  {
    firstName: "Allan",
    lastName: "Able",
    scores: [95, 85, 92, 98]
  },
  {
    firstName: "Amy",
    lastName: "Alexander",
    scores: [80, 88, 100]
  },
  {
    firstName: "Betty",
    lastName: "Barns",
    scores: [70, 80, 90, 100]
  },
  {
    firstName: "Bob",
    lastName: "Bones",
    scores: [75, 85, 95, 85]
  },
  {
    firstName: "Cindy",
    lastName: "Chase",
    scores: [95, 90, 92, 98]
  },
  {
    firstName: "Charles",
    lastName: "Chips",
    scores: [88, 99, 90]
  },
];

let cLastNameResults = studentList.filter(student => {
  if (student.lastName[0] == 'C') {
    return student
  }
}).map(student => {
  return {
    firstName: student.firstName,
    lastName: student.lastName,
    minScore: Math.min(...student.scores),
    maxScore: Math.max(...student.scores),
    avgScore: student.scores.reduce((a, b) => a + b, 0) / student.scores.length
  }
})

console.log(cLastNameResults);