const loancheck=()=>{
    const username=document.getElementById("username").value;
    const cibil=document.getElementById("cibil").value;
    const salary=document.getElementById("salary").value;
    const msg=document.getElementById("msg");
    let loanstatus="";
    if(cibil > 800 && salary > 60000){
        loanstatus="You are Eliglible for 20 lakhs loan";
    }else if(cibil > 780 && salary > 55000){
        loanstatus="You are Eliglible for 15 lakhs loan";

    }else if(cibil > 760 && salary > 50000){
        loanstatus="You are Eliglible for 10 lakhs loan";
    }else if(cibil > 740 && salary > 45000){
        loanstatus="You are Eliglible for 5 lakhs loan";

    }else{
        loanstatus="Better Luck next time";
    }
    msg.textContent=(loanstatus)
}
const btn=document.getElementById("limitbtn");
btn.addEventListener("click",loancheck)