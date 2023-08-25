function createNewUser(){
    const enterFirstName = prompt("Введіть ім'я");
    const enterLastName = prompt("Введіть прізвище");


    const newUser = {
        firstName: `${enterFirstName }`,
        lastName: `${enterLastName }`,
        getLogin: function(){
            const firstLower = this.firstName.charAt(0).toLowerCase();
            const login = firstLower + this.lastName.toLowerCase();
            return login;
        }
    }
    return newUser;
}


const user = createNewUser();
const login = user.getLogin();
console.log("Логін користувача:", login);
