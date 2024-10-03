const findBestStudent = require("./BestStudentScores");

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
    ],
    [
        { "name": "Olga", "score": 100, "date": "2022-10-10" },
        { "name": "Vasily", "score": 100, "date": "2022-10-10" },
        { "name": "David", "score": 0, "date": "2022-10-11" },
        { "name": "Kristina", "score": 0, "date": "2022-10-12" },
        { "name": "Varvara", "score": 0, "date": "2022-10-01" },
        { "name": "Tanya", "score": 0, "date": "2022-10-11" }
      ]
  ]

  test('Студент с максимальным баллом в первой группе негатив', () => {
    expect(findBestStudent(studentGroups[0])).toEqual(["Maria"]); 
});

test('Студент с максимальным баллом в первой группе позитив', () => {
    expect(findBestStudent(studentGroups[0])).toEqual(["Ivan"]); 
});

test('Студент с максимальным баллом во второй группе негатив', () => {
    expect(findBestStudent(studentGroups[1])).toEqual(["Denis"]); 
});

test('Студент с максимальным баллом во второй группе позитив', () => {
    expect(findBestStudent(studentGroups[1])).toEqual(["Marina"]); 
});

test('Студент с максимальным баллом в третьей группе негатив', () => {
    expect(findBestStudent(studentGroups[2])).toEqual(["Varvara"]); 
});

test('Студент с максимальным баллом в третьей группе позитив', () => {
    expect(findBestStudent(studentGroups[2])).toEqual([]); 
});

test('Студент с максимальным баллом в четвертой группе негатив', () => {
    expect(findBestStudent(studentGroups[3])).toEqual(["Anna"]); 
});

test('Студент с максимальным баллом в четвертой группе позитив', () => {
    expect(findBestStudent(studentGroups[3])).toEqual(["Olga","Vasily"]); 
});


it.each([
    [studentGroups[0], ["Ivan"]], 
    [studentGroups[1], ["Marina"]],
    [studentGroups[2], []], 
    [studentGroups[3], ["Olga", "Vasily"]],
    [studentGroups[0], ["Denis"]], 
    [studentGroups[1], ["Lena"]],
    [studentGroups[2], ["Anna"]], 
    [studentGroups[3], []],
])("best student scores", (testData, result) => {
    expect(findBestStudent(testData)).toEqual(result);
});
