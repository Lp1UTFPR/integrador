function comando(){
	var novocampo = document.getElementById("novocampo");
	var mensagem;
	if( event.keyCode == 13)
	{
		if((document.getElementById("dados").value=="ls") || (document.getElementById("dados").value=="LS" )) 
			mensagem="<a href='desktop.html'>Desktop</a><br><a href='index.html'>index.html</a>";
		else if((document.getElementById("dados").value=="clear") || (document.getElementById("dados").value=="CLEAR" )) 
			window.location.reload(); 
		else if (document.getElementById("dados").value=='NULL')
			mensagem=" ";
		else
			mensagem="comando não encontrado.";
		document.body.onkeypress = comando;
		novocampo.innerHTML = mensagem;
	}

}
function SetFocus(elementToFocus)
{
	document.getElementById(elementToFocus).focus();
}
