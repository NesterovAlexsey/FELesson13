// Задание 1
// Создайте метод getStudent, который возвращает promise - 
// объекта (студент с именем "Anri" и возрастом 32), c задержкой 4 секунды.
// Вызовите этот метод - сохраните в переменную.
// Раскройте promise при помощи then, выведите имя студента.

class Student {
    constructor(studentName, age) {
        this.studentName = studentName;
        this.age = age;
    }
}

function getStudent() {
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            resolve("Anri");
        }, 1000)
    })
}

let studentAnri = getStudent();
studentAnri.then((value) => {
    console.log(value);
})