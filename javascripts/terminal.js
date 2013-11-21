function comando(e){
  var novocampo = document.getElementById("novocampo");
  var mensagem, cmd=document.getElementById("dados");
  var keycode = e.keyCode || e.which;
  
  if(keycode == 13)
  {
    if (cmd.value == "ls" || cmd.value=="LS" )
    {
      mensagem="<a href='download.html'>download.html</a><br><a href='inicio.html'>inicio.html</a><br><a href='gerencias.html'>gerencias.html</a><br><a href='quiz.html'>quiz.html</a>";
    }else if (cmd.value == "download.html" ||cmd.value == "inicio.html" || cmd.value == "quiz.html" || cmd.value == "gerencias.html"){
      window.location=cmd.value;
    }else if(cmd.value == "clear" || cmd.value == "CLEAR"){
      mensagem="";
      window.location.reload(); 
    }else if (cmd.value == ''){
      mensagem=" ";
    }else if (comando == 'exit'){
      window.close('#');
    }else{
      mensagem="comando não encontrado.";     
    }
    
    document.body.onkeypress = comando; 
    novocampo.innerHTML = mensagem;
  }  
}
