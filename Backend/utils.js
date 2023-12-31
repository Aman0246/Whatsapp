function isValid (data) {
    if(typeof data !== "string" || data.trim().length == "") return false
    else return true
}

function validString(input){
    return (/^[a-zA-Z]+$/.test(input))
}

const validateEmail = (email) => {
    return email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/);
};


const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;
    return passwordRegex.test(password);
};
const trim=(longURL)=>{
    return  longURL.trim()
}


module.exports= {isValid,validString,validateEmail,isValidPassword,trim}