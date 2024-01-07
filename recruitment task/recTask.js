// A class of students have a project towork on in pairs. 
// Everyone in the classfound a partner, apart from one student.
// Using the list provided (which detailsevery student in the class representedby the number of their team), 
// find thestudent with no partner.
// The number of teams can represent either: only twostudents or the single student.

// The provided list can have
// between 3 and 10000 elements.
// The team identifier is between 11
// and 100000

// Try to find the most efficient solution!

// Writing Unit Tests is mandatory.

// INPUT
// int[] student_list
// ^^this contains students representeda
// by their team numbera
// OUTPUT
// int single_student_number
// EXAMPLE
// Input
// [2.4,5.4.2]
// Output
// 5

function run(student_list) {
  const teamCounts = new Map();

  for (const team of student_list) {
    if (teamCounts.has(team)) {
      teamCounts.set(team, teamCounts.get(team) + 1);
    } else {
      teamCounts.set(team, 1);
    }
  }

  for (const [team, count] of teamCounts) {
    if (count === 1) {
      return team;
    }
  }

  return null;
}

console.log(run([2, 4, 5, 4, 2]));
console.log(run([1, 1, 3, 3]));
console.log(run([11, 21, 21, 31, 8, 8, 11]));
