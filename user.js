class UserSystem {
    constructor() {
    this.users = {};
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
        if (password.length < 8){
            alert('Your password needs to be more than 8 characters.');
            return false;
        }

        if (/^[A-Za-z0-9]*$/.test(password) == false){
            alert('Wrong format of your password. Your password needs to contain: upper-case letters, lower-case letters and numbers');
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
        var e0 = this.email_is_invalid(email);
        var e1 = this.no_password(password);

        /*
        if (this.user[email] == password){
            alert('Logges in')
            location.assign("index.html")
        }
        */
        // Just dummy
        if (Boolean(e0) && Boolean(e1) && (password == 'dummy')){
            alert('You are now in dummy user mode.')
            location.assign("index.html")
        }
    }

    // Register
    register(firstname, lastname, email, password, repeated_password){
        var e0 = this.no_name(firstname, lastname);
        var e1 = this.email_is_invalid(email);
        var e2 = this.no_password(password);
        var e3 = this.register_password(password);
        var e4 = this.repeat_password_check(password, repeated_password);

        if (Boolean(e0) && Boolean(e1) && Boolean(e2) && Boolean(e3) && Boolean(e4)){
            alert('Registered')
            //this.user[email] = [firstname, lastname, password];
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
    new_user.register(reg_firstname,reg_lastname,reg_email,reg_password,reg_repeat_password);
}