function ocultar(id){
	
	var elemento=document.getElementById(id);
	if (elemento.style.display =="block")
		elemento.style.display="none";
	else
		elemento.style.display="block";
	if(id == 'iniciar')
	{
		if (fundo.style.display=="block")	
			fundo.style.display="none";
		else
			fundo.style.display="block";
	}
}

