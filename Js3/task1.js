import users from "./files.js";

// Task 1

const getUserNames = (users) => users.map((user) => user.name);

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// Task 2

const getUsersWithEyeColor = function (users, color) {
  return users.filter(function (user) {
    return user.eyeColor === color;
  });
};

// const getUsersWithEyeColor = (users, color) => users.filter(user => user.eyeColor === color)

console.log(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// Task 3

// const getUsersWithEyeColor = (users, color) => {
//     console.log(users);
//     console.log(color);
//   };

//   console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// const getUsersWithGender = (users, gender) =>{
//     return users.map((user) => gender);
// }

const getUsersWithGender = (users, gender) => {
  return users.filter((user) => {
    if (user.gender === gender) {
      return user.name;
    }
  });
};

console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// Task 4
const getInactiveUsers = (users) => users.filter((user) => !user.isActive);

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

//   Task 5
const getUserWithEmail = (users, email) => {
  return users.find((user) => user.email === email);
};

console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}

//   Task 6

const getUsersWithAge = (users, min, max) => {
  return users.filter((user) => {
    if (user.age > min && user.age < max) {
      return user.name;
    }
  });
};

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

//   Task 7

// const calculateTotalBalance = users => {
//     return users.reduce((acc, value) => acc + value)
//   };

const calculateTotalBalance = (users) => {
  return users.reduce((acc, value) => {
    return acc + value.balance;
  }, 0);
};

console.log(calculateTotalBalance(users)); // 20916

// Task 8

// const getUsersWithFriend = (users, friendName) => {
//   return users.reduce((arr, user) => {
//     if (user.friends.includes(friendName)) {
//         return arr.push(user.name);

//     }
//   }, []);
// };

const getUsersWithFriend = (users, friendName) => {
  return users.filter((user) => {
    if (user.friends.includes(friendName)) {
      return user.name;
    }
  });
};

console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]

// Task 9

const getNamesSortedByFriendsCount = (users) => {
  return users
    .sort((prev, next) => {
      return prev.friends.length - next.friends.length;
    })
    .map((user) => {
      return user.name;
    });
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

//   Task 10

const getSortedUniqueSkills = (users) => {
  const solveThisSkill = users
    .reduce((acc, user) => {

      // if (user.skills) {
      //   acc.push(user.skills);
      acc.push(...user.skills);
      return acc;
    }, [])
    .reduce((acc, skill) => {
    
      acc[skill] = true;
      return acc;
    },
    {});
    const turnToArray = Object.keys(solveThisSkill).sort()
return turnToArray

};


// .filter((skill, index, skills) => skills.indexOf(skill) === index)
// .sort()

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
