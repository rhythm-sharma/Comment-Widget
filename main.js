var log_usr = document.getElementById("log-usr").value;
var log_psw = document.getElementById("log-psw").value;

var sign_usr = document.getElementById("sign-usr").value;
var sign_psw = document.getElementById("sign-psw").value;


class comments{

    constructor(){
        if(login() === true){
            //allow for comment
            comment();
        }else{
            //first log in or check it is a member or not 
            if(exists() === true){
                //log in
                login();
            }else{
                //sign up
                signup();
            }
        }
    }

    login(){
        //if login's username and password matches then login
        if(exists() === true ){
            alert('login')
            // a div will appear on the top-right corner with matching name from database 
        }else{
            alert('not found');
            document.getElementById('modal-wrapper').style.display='none';
            document.getElementById('modal-wrapper-2').style.display='block';
            //member not found, redirect to signup
            // redirect to ----> signup page
        }
    }

    signup(){
        //user firstly sign up means tha data is stored in array
        //close signup page
        //then is must be logged in 
        // and allow for commenting
        // save value to database 
        // save two values 1.username and  2.password
    }

    exists(){
        //check member is exists or not
        for(i=0;i<10;i++){
            if(log_usr === login_username[i] && log_psw === login_password[i]){
                return(true);
            }else{
                return(false);
            }
        }
    }

    comment(){
        //fetch name from database which is currently logged in
        //save current time after add reply btn press 
        //save message
    }


    /*********************** reply  **********************/
    reply(){
        //redirect to ----> login page
        if(member.exists() === true){
            login();
        }else{
            //redirect to ----> signup page
            signup();
        }
        //create a new div same as comment box
        comment();
    }
}

