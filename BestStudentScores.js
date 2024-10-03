function findBestStudent(groupsStudents) {
    let maxScore = -Infinity;
    let earliestDate = null;
    let bestStudents = [];

    groupsStudents.forEach((studentData) => {
        const currentDate = new Date(studentData.date);
        
        if (studentData.score > maxScore) {
            maxScore = studentData.score;
            earliestDate = currentDate;
            bestStudents = [studentData.name];
        } else if (studentData.score === maxScore) {
            if (!earliestDate || currentDate < earliestDate) {
                earliestDate = currentDate;
                bestStudents = [studentData.name];
            } else if (currentDate.getTime() === earliestDate.getTime()) { 
                bestStudents.push(studentData.name);
            }
        }
    });

    if (maxScore === 0) {
        console.log('Все на пересдачу, неучи!!!');
        return [];  
    }

    console.log(`Поздравляем тебя, ${bestStudents.join(', ')}!`);
    return bestStudents;
}



const studentGroups = [
    [
      { "name": "Ivan", "score": 35, "date": "2022-10-11" },
      { "name": "Maria", "score": 5, "date": "2022-10-10" },
      { "name": "Olga", "score": 0, "date": "" },
      { "name": "Stepan", "score": 35, "date": "2022-10-12" },
      { "name": "Oleg", "score": 9, "date": "2022-10-01" },
      { "name": "Zanna", "score": 15, "date": "2022-10-11" }
    ],
    [
      { "name": "Margo", "score": 0, "date": "2022-10-11" },
      { "name": "Natalia", "score": 25, "date": "2022-10-10" },
      { "name": "Marina", "score": 25, "date": "2022-10-01" },
      { "name": "Dmitry", "score": 25, "date": "2022-10-12" },
      { "name": "Denis", "score": 0, "date": "2022-10-02" },
      { "name": "Vadimyr", "score": 1, "date": "2022-10-11" }
    ],
    [
      { "name": "Irina", "score": 0, "date": "2022-10-11" },
      { "name": "Vasily", "score": 0, "date": "2022-10-10" },
      { "name": "David", "score": 0, "date": "2022-10-11" },
      { "name": "Kristina", "score": 0, "date": "2022-10-12" },
      { "name": "Varvara", "score": 0, "date": "2022-10-01" },
      { "name": "Tanya", "score": 0, "date": "2022-10-11" }
    ]
  ]

const bestStudents = findBestStudent(studentGroups)




module.exports = findBestStudent;
