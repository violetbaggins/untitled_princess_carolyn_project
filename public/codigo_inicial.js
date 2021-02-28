
s = "";
a = 3;

while (a != 1){
    s += a;
    
        if(a % 2 == 0){
                a = a / 2
        }else{
            a = 3 * a + 1
    }
}

goto_url(`https://result${s}.herokuapp.com`)


// https://result310516842.herokuapp.com
// console.log(s)
// returns: 310516842