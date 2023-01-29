// All the saved users
var users_saved = JSON.parse(localStorage.getItem('users'));
if (users_saved == null){
    users_saved = {};
}

// USER CLASS
class UserSystem {
    constructor() {
    }

    ////////////////////////////////////////////////////////////
    // SMALLER FUNCTIONS USED IN THE MAIN FUNCTIONS
    ////////////////////////////////////////////////////////////

    // If the email is invalid
    email_is_invalid(email){
        if (email == ''){
            alert('Please type an email adress.');
            return false;
        }
        var mailformat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (mailformat.test(email) == false){
            alert('You have entered an invalid email address.');
            return false;
        }
        return true;
    }
    // If the email already exists
    email_exists(email){
        if (email.toLowerCase()in users_saved){
            alert('Email already exists, please log in.');
            return false;
        }
        return true;
    }
    // If the email does not exist
    email_not_existing(email){
        if (email.toLowerCase() in users_saved){return true;}
        alert('Email does not exist, please sign up.');
        return false;
    }
    // If no password is written
    no_password(password){
        if (password == ''){
            alert('Please type a password.');
            return false;
        }
        return true;
    }
    // If not both first name AND last name if provided in the registration
    no_name(firstname, lastname){
        if (firstname == '' || lastname == ''){
            alert('Please type both your first name and your last name.');
            return false;
        }
        return true;
    }
    // A register function for checking if the password is approved
    register_password(password){
        var pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        if (pattern.test(password) == false){
            alert('Wrong format of your password. Your password must be at least 8 characters long and contains at least one uppercase letter, one lowercase letter, and one digit');
            return false;
        }
        return true;
    }
    // If not the passwords are alike
    repeat_password_check(password1, password2){
        if (password1 != password2){
            alert('Your passwords does not match. Please repeat the password.');
            return false;
        }
        return true;
    }


    ////////////////////////////////////////////////////////////
    // MAIN FUNCTIONS
    ////////////////////////////////////////////////////////////
    // Log in
    login(email, password){
        if (this.email_is_invalid(email)){
            if (this.email_not_existing(email)){
                if (this.no_password(password)){
                    if (users_saved[email.toLowerCase()][0] == password){
                        // Saving the logged in label to use in other HTML files
                        localStorage.setItem('loggedin', JSON.stringify(true));
                        location.assign("index.html");
                    }
                    else {
                        //alert('Wrong password. The password you wrote was '+ password+', but the real password is ' + users[email.toLowerCase()][0]);
                        alert('Wrong password, please try again.');
                    }
                }
            }
        }
    }

    // Register
    register(firstname, lastname, email, password, repeated_password){
        if (this.no_name(firstname, lastname)){
            if (this.email_is_invalid(email)){
                if (this.email_exists(email)){
                    if (this.no_password(password)){
                        if (this.register_password(password)){
                            if (this.repeat_password_check(password, repeated_password)){
                                var namestring = firstname + ' ' + lastname;

                                //Updating the localStorage by adding the new user
                                users_saved[email.toLowerCase()] = [password, namestring];
                                localStorage.setItem('users', JSON.stringify(users_saved));
                                return true;
                            }
                        }
                    }
                }
            }
        }
    }
    
}

function login_button(){
    var login_email = document.getElementById("login_email").value;
    var login_password = document.getElementById("login_password").value;

    let new_login = new UserSystem();
    new_login.login(login_email, login_password);
}

function register_button() {
    var reg_firstname = document.getElementById("register_firstname").value;
    var reg_lastname = document.getElementById("register_lastname").value;
    var reg_email = document.getElementById("register_email").value;
    var reg_password = document.getElementById("register_password").value;
    var reg_repeat_password = document.getElementById("register_repeat_password").value;

    let new_user = new UserSystem();
    var registrered_true = new_user.register(reg_firstname,reg_lastname,reg_email,reg_password,reg_repeat_password);
    if (registrered_true){
        var namestring = reg_firstname + ' ' + reg_lastname;
        alert('Registered, welcome ' + namestring + '. Please log in.');
    }
}