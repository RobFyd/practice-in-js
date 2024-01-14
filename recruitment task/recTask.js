// A class of students have a project to work on in pairs.
// Everyone in the classfound a partner, apart from one student.
// Using the list provided (which details every student in the class represented by the number of their team),
// find the student with no partner.
// The number of teams can represent either: only two students or the single student.

// The provided list can have
// between 3 and 10000 elements.
// The team identifier is between 11
// and 100000

// Try to find the most efficient solution!

// Writing Unit Tests is mandatory.

// INPUT
// int[] student_list

// ^^this contains students represented
// by their team number

// OUTPUT
// int single_student_number

// EXAMPLE
// Input
// [2.4,5.4.2]
// Output
// 5

{
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

  console.log(run([2, 4, 5, 4, 2])); // 5
  console.log(run([1, 1, 3, 3])); // null
  console.log(run([11, 21, 21, 31, 8, 8, 11])); // 31
}


// XOR solution
{
  function findSingleStudent(student_list) {
    let singleStudent = 0;

    student_list.forEach((team) => {
      singleStudent ^= team;
    });

    return singleStudent;
  }

  console.log(findSingleStudent([2, 4, 5, 4, 2])); // 5
  console.log(findSingleStudent([1, 1, 3, 3])); // null
  console.log(findSingleStudent([11, 21, 21, 45, 8, 8, 11])); // 45
}


{
  function findSingleStudent(student_list) {
    const teams = new Set();

    student_list.forEach(team => {
        if (teams.has(team)) {
            teams.delete(team);
        } else {
            teams.add(team);
        }
    });

    // Zwracamy jedyny pozostały element w zbiorze, lub null jeśli zbiór jest pusty
    return teams.size > 0 ? teams.values().next().value : null;
}

console.log(findSingleStudent([2, 4, 5, 4, 2])); // 5
console.log(findSingleStudent([1, 1, 3, 3])); // null
console.log(findSingleStudent([11, 21, 21, 85, 8, 8, 11])); // 85
}