import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

const noticeMessage = (message) => {
    toast(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}

export{
    limitText,
    noticeMessage
}