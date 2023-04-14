
function validate(){

    const fname=document.getElementById("validationDefault01").value;
    const lname=document.getElementById("validationDefault02").value;
    const mail=document.getElementById("validationDefaultUsername").value;

    if(fname=="" || fname==null){
        alert("Please enter your First Name")
        
        // return false;
    }
    if(lname=="" || lname ==null){
        alert("Please enter your Last Name")
       
        // return false;
    }
    if(mail=="" || mail.indexOf("@")==-1 || mail.indexOf(".")<=0 || mail==null){
        alert("Please enter a valid Email!")
       
        // return false;
    }
    else{
        alert("Form Submitted Successfully!")
        return true;
    }


    
}