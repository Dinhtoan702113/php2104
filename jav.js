


function emailIsValid(email)
{
	 return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function save() {
	let fullname =document.getElementById('fullname').value;
	let email =document.getElementById('email').value;
	let phone =document.getElementById('phone').value;
	let diachi =document.getElementById('diachi').value;
	let  gioitinh ='';
	if(document.getElementById('nam').checked){
		gioitinh=document.getElementById('nam').value;
	} else if(document.getElementById('nu').checked){
		gioitinh=document.getElementById('nu').value;
    }
     if(fullname ==""){
    	document.getElementById('loiname').innerHTML='Vui long nhap ho ten';
    } else if(fullname.length < 9  )
    {
    	document.getElementById('loiname').innerHTML='Ho ten trong khoang 9-30 ki tu';
    } 

    else {
    	document.getElementById('loiname').innerHTML='';
    }

    if(email ==""){
    	document.getElementById('loiemail').innerHTML='Vui long nhap email';
    }else if(!emailIsValid(email)){
    	document.getElementById('loiemail').innerHTML='Email khong dung dinh dang';
    }   

    else {
    	document.getElementById('loiemail').innerHTML='';
    } 

    if(phone ==""){
    	document.getElementById('loiphone').innerHTML='Vui long nhap so dien thoai';
    } else if(phone.length > 10  )
    {
    	document.getElementById('loiphone').innerHTML='So dien thoai khong dung';
    } 

    else {
    	document.getElementById('loiphone').innerHTML='';
    }

    if(diachi ==""){
    	document.getElementById('loidiachi').innerHTML='Vui long nhap dia chi';
    }  

    else {
    	document.getElementById('loidiachi').innerHTML='';
    }
    
     if(gioitinh ==""){
    	document.getElementById('loigt').innerHTML='Vui long chon gioi tinh';
    }

    else {
    	document.getElementById('loigt').innerHTML='';
    } 

    if(fullname && email && phone && diachi && gioitinh){

    	let studen =[];

    	studen.push({
    		fullname: fullname,
    		email:email,
    		phone:phone,
    		diachi:diachi,
    		gioitinh:gioitinh,
    	});
    	let tableContent =`<tr>
    			<td>#</td>
    			<td>Ho Va Ten</td>
    			<td>Email</td>
    			<td>Dien Thoai</td>
    			<td>Gioi Tinh</td>
    			<td>Dia Chi</td>

    			<td>Khac</td>
    		</tr>`;
    		studen.forEach((studen,index) => {
    			index++;
    			let gioitinhlaber=studen.gioitinh ===2 ?'Nu':'Nam';
    			tableContent +=`<tr>
    			<td>${index}</td>
    			<td>${studen.fullname}</td>
    			<td>${studen.email}</td>
    			<td>${studen.phone}</td>
    			<td>${gioitinhlaber}</td>
    			<td>${studen.diachi}</td>
    			<td>
    			<a href='#'   onclick="xoa()">Delete</a>

    			</td>
    		</tr>`;

    		})

    		document.getElementById('grid-student').innerHTML=tableContent;

    }


   
}
function luuds(){
	let studen=localStorage.getItem('studen') ? JSON.parse(localStorage.getItem('studen')) :[];
	if(studen.length === 0) return false;
	let tableContent =`<tr>
    			<td>#</td>
    			<td>Ho Va Ten</td>
    			<td>Email</td>
    			<td>Dien Thoai</td>
    			<td>Dia Chi</td>
    			<td>Khac</td>
    		</tr>`;

    studen.forEach((studen,index) => {
    			index++;
    			let gioitinhlaber=studen.gioitinh ===2 ?'Nu':'Nam';
    			tableContent +=`<tr>
    			<td>${index}</td>
    			<td>${studen.fullname}</td>
    			<td>${studen.email}</td>
    			<td>${studen.phone}</td>
    			<td>${gioitinhlaber}</td>
    			<td>${studen.diachi}</td>
    			<td>
    			<a href='#'>Delete</a>

    			</td>
    		</tr>`;

    		})
}
function xoa(){
	
}