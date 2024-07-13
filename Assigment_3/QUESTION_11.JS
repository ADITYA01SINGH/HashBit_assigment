let students = [
    {
        student1: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    },
    {
        student2: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    },
    {
        student3: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    }
];

let averages = students.map(student => {
    let studentName = Object.keys(student)[0];
    let subjects = Object.values(student)[0];
    let totalScore = Object.values(subjects).reduce((total, score) => total + score, 0);
    let averageScore = totalScore / Object.keys(subjects).length;
    return {
        [studentName]: {
            average: averageScore.toFixed(2) 
        }
    };
});

console.log(averages);