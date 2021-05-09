
document.write("<h1 style='color:gray;font-family:tahoma;text-align:center;'>Billy Chau</h1>");

document.write("<h2 style='color:gray;font-family:garamond;font-weight:italic;text-align:center;'>Course: WEB115, Section: 0004</h2>");


document.write("<hr style='width:60%'>");


document.write("<center><h1>Build Your Resume</h1>");



document.write("<br/>");



document.write("<p><input type='text' placeholder='Enter your name in full: ' id='fullname'></p>");



document.write("<p><input type='text' placeholder='Enter your entire address: ' id='fulladdress'></p>");


document.write("<p><input type='number' placeholder='Enter your phone number: ' id='phonenumber'></p>");



document.write("<p><input type='email' placeholder='Enter your e-mail address: ' required id='email'></p>");



document.write("<p><textarea placeholder='Enter your most recent job description: ' id='pd'></textarea></p>");


document.write("<p><textarea placeholder='Enter one task you accompished in your previous job: ' id='aco1'></textarea></p>");
document.write("<p><textarea placeholder='Enter one task you accompished in your previous job: ' id='aco2'></textarea></p>");
document.write("<p><textarea placeholder='Enter one task you accompished in your previous job: ' id='aco3'></textarea></p>");



document.write("<p><textarea placeholder='Enter the last school/university you attended: ' id='eb'></textarea></p>");



document.write("<p>Entry: <input type='date' placeholder='Enter your Entry Date: ' value='' id='myDate1'> ( and ) Exit: <input type='date' placeholder='Enter your Exit Date: ' value='' id='myDate2'></p>");


document.write("<p><textarea placeholder='Enter your most recent employment experience: ' id='ee'></textarea></p>");

//17




document.write("<p> Years of experience: <select name='exp' id='exp'><option value='0-1'>0-1 years</option><option value='2-3'>2-3 years</option><option value='4+'>4+ years </option></select></p>");



//18

document.write("<p><textarea placeholder='Enter your business references: ' id='br'></textarea></p>");

//19

document.write("<input type='button' value='Create Resume' onclick='validateemail()'/></center>");

//output

function validateemail()  

{

var fullname=document.getElementById("fullname").value;

var fulladdress=document.getElementById("fulladdress").value;

var phonenumber=document.getElementById("phonenumber").value;

var email=document.getElementById("email").value;

var pd=document.getElementById("pd").value;

var aco1=document.getElementById("aco1").value;

var aco2=document.getElementById("aco2").value;

var aco3=document.getElementById("aco3").value;

var eb=document.getElementById("eb").value;

var firstDate1=document.getElementById("myDate1").value;

var secondDate1=document.getElementById("myDate2").value;

var ee=document.getElementById("ee").value;

var exp=document.getElementById("exp").value;

var br=document.getElementById("br").value;

var email=document.getElementById("email").value;

var atposition=email.indexOf("@");  

var dotposition=email.lastIndexOf(".");  

if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length){  

alert("Please enter a valid e-mail address");  

return false;  

}

  

else{

document.write("<center style='background-color:teal'><h1 >"+fullname+" <p style='font-size:60%'> Address: "+fulladdress+"  &nbsp;   Phone number: " +phonenumber+"  &nbsp; Email: "+email+"  </p> </h1></center>");

document.write("<hr style='width:60%'>");

document.write("<center><h1 style = 'font-size:200%; color:gray;'> "+pd+":  </h1></center>");



document.write("<center><p style ='column-count: 3'>Entry: "+aco1+""+aco2+""+aco3+"</p></center>");
document.write("<center><p>Entry: "+aco2+"</p></center>");
document.write("<center><p>Entry: "+aco3+"</p></center>");




document.write("<center><h1 style = 'font-size:200%; color:gray;'> Educational Background: </h1></center>");

document.write("<center><p> "+eb+"</p></center>")




document.write("<center><p>Entry: "+firstDate1+"</p></center>");

document.write("<center><p >Exit: "+secondDate1+"</p></center>");

document.write("<center><h1 style = 'font-size:200%; color:gray;'> Employment Experience: </h1></center>");

document.write("<center><p> "+ee+"</p></center>")


document.write("<center><p>Years of experience: "+exp+"</p></center>");

document.write("<center><p>"+firstDate2+"</p></center>");

document.write("<center><p>"+secondDate2+"</p></center>");

document.write("<center><h1 style = 'font-size:200%; color:gray;'> Business References: </h1></center>");

document.write("<center><p>"+br+"</p></center>");





}

}