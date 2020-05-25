function generator(){
    var a = document.querySelector("#capital");
    var b = document.querySelector("#small");
    var c = document.querySelector("#number");
    var pd = "";
    // var d = document.querySelector("special");
    var wd = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz01234567890123456789";
    var nwd = "0123456789";
    // var spc = "!@#$%^&";
    if(a.checked == true && b.checked == false)
        wd = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    else if(b.checked == true && a.checked == false)
        wd = "abcdefghijklmnopqrstuvwxyz";
    else if(a.checked == true && b.checked == true )
        wd = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
    

    if(c.checked == true && a.checked == false && b.checked == false){
        wd = ""
        wd = wd.concat(nwd);
    }
    else if(c.checked == true){
        wd = wd.concat(nwd);
        wd = wd.concat(nwd);
    }

    for (i = 1; i <= 8; i++){ 
        var char = Math.floor(Math.random() 
                    * wd.length + 1); 
          
        pd += wd.charAt(char) 
    }


    // else if(d.checked == true && c.checked == false)
    //     wd = wd.concat(spc)
    // else{
        // wd = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
        // wd = wd.concat(nwd);
        // wd = wd.concat(spc);
        // wd = wd.concat(spc);
    // }
    // if(a.checked = false && b.checked == false && c.checked == false){
    //     wd = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
    //     wd.concat(nwd);
    //     wd.concat(nwd);
    // }
    
    document.getElementById("password").textContent = pd;
    
}