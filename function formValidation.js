function formValidation(0
{
var uname=document.registration.name;
var uemail=document.registration.email;
var phone=document.registration.tel;
if(allLetter(uname)
{
if(ValidateEmail(uemail))
{
if(Validatetel(phone))
{
}
}
return false;
}