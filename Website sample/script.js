function captcha(){
    var c=confirm("If You Are Human Click OK !");
    if(c)
        document.getElementById('show').style.display='block';
}

function welcome(){
    var ime=prompt('Unesite Vaše ime...','Ime Prezime');
    if(ime!=null)
       document.getElementById("welcome").innerHTML='Pozdrav '+ime+','+' DOBRODOŠLI!';
}

function vrijeme(){
   var dat=new Date();
   var hh=dat.getHours();
   var min=dat.getMinutes();
   var sec=dat.getSeconds();
   var dd=dat.getDate();
   var mm=dat.getMonth()+1;
   var gg=dat.getFullYear();

   document.getElementById("vrijeme").innerHTML="Trenutno vrijeme: "+hh+":"+min+":"+sec+" Današnji datum: "+dd+"/"+mm+"/"+gg;
}