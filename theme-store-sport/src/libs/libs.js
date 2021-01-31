const limitText = (string, number) => {
    var stringnew = string.split(" ");
    var stringLimit = "";
    if(number >= stringnew.length){
        return string;
    }
    for(var i = 0; i < number; i++){
        if(i === number-1){
            stringLimit += stringnew[i]+"...";
        }else{
            stringLimit += stringnew[i]+" ";
        }
    }
    return stringLimit;
}

module.exports = {
    limitText
}