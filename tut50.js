console.log("Form validation using Javascript")


// retrieving the data from html 
function dataretreive(){
    let firstnameUser = document.getElementById("firstn").value
    first_name_output= num_checker(firstnameUser)

    let lastnameUser = document.getElementById("lastn").value
    last_name_output= num_checker(lastnameUser)

    let emailUser = document.getElementById("emailU").value
    let firstname = document.getElementById("Phone_numberU").value
    console.log(email_checker(emailUser.toLowerCase()))

}






function email_checker(string){
    //1 check whether the email contains @
    let email_splitter=string.split("@")
    let username = email_splitter[0]
    let domain = email_splitter[1].split(".")
    
    let domain_name = domain[0]
    console.log(domain_name)


    const regex1 = /@/
    const regex2 = /.com/
    if(regex1.test(string)){
        if(regex2.test(string)){
            if(special_character_checker(domain_name)){
                return true
            }
        }
    }
    return false

}

function special_character_checker(string){
    let regex =/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
    status = regex.test(string)
    console.log('status =',status)
    if (status){
        return false
    }
    else{
        return true
    }

}














    //2 check whether the email contains .com

    //3 check the domain of the email

    //4 check for special characters



function num_checker(string){
    for (i=0;i<string.length;i++){
        if (Number(string[i])){
            return false
        }
    }
    return true
}