// Student Grade Generator (Toy Problem)
// Write that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade: 
// A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.
function generateGrade() {

    let studentMarks = {
        "Anita": 85,
        "Taylor": 65,
        "Myly": -9,
        //insert the name and grade here
    };

    for (let student in studentMarks) {

        let percentage = studentMarks[student];

        if (percentage > 79 && percentage <= 100) {
            percentage = "A"
            console.log(`${student} got grade ${percentage}`);
        } else if (percentage >= 60 && percentage <= 79) {
            percentage = "B";
            console.log(`${student} got grade ${percentage}`);
        } else if (percentage >= 50 && percentage <= 59) {
            percentage = "C";
            console.log(`${student} got grade ${percentage}`);
        } else if (percentage >= 40 && percentage <= 49) {
            percentage = "D";
            console.log(`${student} got grade ${percentage}`);
        } else if (percentage >= 0 && percentage <= 39) {
            percentage = "E";
            console.log(`${student} got grade ${percentage}`);
        } else {
            console.log(`Invalid percentage for ${student}`);
        }
    }
};

generateGrade();