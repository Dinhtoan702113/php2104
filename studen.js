 var user ='abc';
 var pass ='123';   
function login(){
	let  fullname = document.getElementById('fullname').value;
    let password = document.getElementById('password').value;
    if(fullname ==""){
    	document.getElementById('baoloi').innerHTML='Vui long nhap ten dang nhap';
    } 
    if(password ==""){
    	document.getElementById('loimk').innerHTML='Vui long nhap mat khau';
    } 
    if(password =="" && password ==""){
    	alert('Ban phai nhap day du thong tin');
    } else{
    	if(fullname == user && password == pass){
    	alert('dang nhap thanh cong');
    } else {
    	alert('dang nhap that bai');
    }

    }

    
     
}

 
    
   