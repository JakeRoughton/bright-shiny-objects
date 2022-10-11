//Npm run test to test code

// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘

/*
functionName: createUser
parametes: 2 strings (firstName,lastName)

return: object

{
    firstName: string
    lastName: string
}

putting firstName and lastName into an object

*/

function createUser(firstName, lastName){
    let user = {
        firstName: firstName,
        lastName: lastName,
    }
    return user
}
console.log(createUser('Mesi','Kaleziq'))

/*
functionName setAge
parameters: user(object), age(number)
return user
{
    firstName: string
    lastName: string,
    age: number
}
*/
function setAge(user, age){
    user.age = age;
    return user;
}

// console.log(setAge(createUser('Master', 'Chief', 26)));
// console.log(setAge(
//     {firstName: "Frederick", lastName: "Smiphotin"}, 30))

    let newUser = setAge(
        {firstName: 'Joe', lastName: 'shmo'}, 30)
    console.log(newUser)
/*
function: incrementAge
parameters: user, age incremented
return: user
*/
    function incrementAge(user, age){
        user.age = user.age + 1;
        return user;
    }
    let user1 = incrementAge(
        {firstName: 'Scuba', lastName: 'Steve'})
    console.log(user1)


/*
function: fixCar
parameters: car

car = {
    make: string
    model: string
    year: number
    maintenance: boolean
}

return carObject
*/

        function fixCar(car){
            car.needsMaintenance = false
            return car;
        }

        console.log(fixCar({
            make: 'Ford',
            model: 'Mustang',
            year: 1969,
            needsMaintenance: true
        }));


/*
function - addGrades
parameters - student/object and grades/array
return

student = {
    name: string
    email: string
    grades: array
}

grades param - array of numbers

return student object

*/

function addGrades(student, newGrades){
    student.grades = student.grades.concat(newGrades);
 return student;
}

let student = {
    name: 'Anthony DeRosa',
    email: 'anthony.derosa@codeimmersives.com',
    grades: [90]
}

let newGrades = [88, 70, 90, 88, 70, 90, 88, 70, 90];

console.log(addGrades(student, newGrades))



     function getDataType(car, key){
        return typeof car[key]
    };
     car = 
    {
         make: 'ford',
         model: 'Mustang',
         year: 1969,
         needsMaintenance: false
    };
     
     console.log(getDataType (car, ['make']));
     console.log(getDataType(car, 'model'));
     console.log(getDataType(car, 'year'));
     console.log(getDataType(car, 'needsMaintenance'));




    function addTodo(todos, newTodo) {
    
        todos.push(newTodo);
        return todos;
        
    }
    todos = 
        [{ 
            title: 'Get gas', 
            isComplete: false },
        { 
            title: 'Buy bread', 
            isComplete: true
        }];
    
    let newTodo = {
        title: 'call mom', 
        isComplete: false
    };
    
    console.log(addTodo(todos, newTodo));





    function addSong(playlist, newSong){
        songs =  playlist.songs.push(newSong);
        playlist['duration'] = (playlist['duration']+= newSong['duration']);
      return playlist;
  
  };
  let playlist = {
      title: 'My jams',
      duration: 7,
      songs: [
          {
              title: 'Texas Sun',
              artist: 'Khruangbin',
              duration: 4
          },
          {
              title: 'Malamente',
              artist: 'Rosalia',
              duration: 3
          }
      ]
      }
  let newSong = {
          title: 'Old Friends',
          artist: 'Pinegrove',
          duration: 3
      };
  console.log(addSong(playlist, newSong));




  function updateReportCard(reportCard, nbr){
    reportCard.grades.push(nbr);

    if(nbr < reportCard.lowestGrade) {
        reportCard.lowestGrade = nbr;

    }
    else if(nbr > reportCard.highestGrade) {
        reportCard.highestGrade = nbr;
    }
    
    let sum = 0
    reportCard.grades.forEach(i => {
        sum += i/reportCard['grades'].length;
    });
    reportCard.averageGrade = sum;

    return reportCard;
    
  
}

let reportCard = {
    lowestGrade: 70,
    highestGrade: 96,
    averageGrade: 82,
    grades: [70, 96, 80]
};
// console.log(updateReportCard(reportCard, 62));
console.log(updateReportCard(reportCard, 100));




// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Code used for testing. Do not modify!                                   │                         
// │                                                                         │
const isDef = (arg) => arg === 'function';
const pass = () => undefined;
// │                                                                         │
module.exports.createUser = isDef(typeof createUser) ? createUser : pass;
module.exports.setAge = isDef(typeof setAge) ? setAge : pass;
module.exports.incrementAge = isDef(typeof incrementAge) ? incrementAge : pass;
module.exports.fixCar = isDef(typeof fixCar) ? fixCar : pass;
module.exports.addGrades = isDef(typeof addGrades) ? addGrades : pass;
module.exports.getDataType = isDef(typeof getDataType) ? getDataType : pass;
module.exports.addTodo = isDef(typeof addTodo) ? addTodo : pass;
module.exports.addSong = isDef(typeof addSong) ? addSong : pass;
module.exports.updateReportCard = isDef(typeof updateReportCard) ? updateReportCard : pass;
// │                                                                         │
// └─────────────────────────────────────────────────────────────────────────┘
