let cnt = 0;
let obj = setInterval  (showmsg, 2000)
//setInterval  (showmsg, 2000)

function  showmsg(){
    cnt++
    console.log(cnt);
    
if (cnt >= 3){
    clearInterval(obj);
}

}
