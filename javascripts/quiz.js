var timeout;

window.onload = function(){
	if (localStorage.getItem("quiz.nome") == null){
		print_time();
	}else{
		iniciar_quiz();
	}
}

function print_time(){
	var data_hora = new Date();			
	var barra_status = document.getElementById("barra_status");
	barra_status.innerHTML = data_hora;
	timeout = setTimeout("print_time()", 1000);
}

function print_barra_status(texto_barra_status){			
	var barra_status = document.getElementById("barra_status");
	var tempo_quiz = (localStorage.getItem("quiz.tempo") == null) ? -1 : parseInt(localStorage.getItem("quiz.tempo"));
	tempo_quiz++
	localStorage.setItem("quiz.tempo", tempo_quiz); 

	msg = texto_barra_status; //pra poder passar parametro no setTimeout
	tempo_quiz++;
	barra_status.innerHTML = msg + " >> Tempo: " + tempo_quiz + " seg";
	timeout = setTimeout("print_barra_status(msg)", 1000);
}

function iniciar_quiz(){
	var perguntas = document.getElementById("perguntas");
	var header_quiz = document.getElementById("header_quiz");
	var texto_barra_status;
	var nome;

	if (localStorage.getItem("quiz.nome") == null){
		nome = document.getElementById("nome").value;			

		if (nome == ""){
			alert("Informe seu nome corretamente!");
			exit;
		}

		localStorage.setItem("quiz.nome", nome);
	}else{
		nome = localStorage.getItem("quiz.nome");
	}


	texto_barra_status = "Quiz iniciado >> Nome: " + nome;
	header_quiz.style.visibility = "hidden";
	header_quiz.style.position = "absolute"; //para deixar div perguntas sobrepor esta div
	perguntas.style.visibility = "visible";
	
	clearTimeout(timeout);				
	print_barra_status(texto_barra_status);
}

function mudar_pagina(pagina_fechar, pagina_abrir){
	pagina_fechar.style.visibility = "hidden";
	pagina_fechar.style.height = "0px";
	pagina_abrir.style.visibility = "visible";
	pagina_abrir.style.height = "auto";
}

//validacao quiz
function validar_quiz(form){
	var opcoes = form;				
	var obj; //radios buttons
	var resultado_quiz = document.getElementById("resultado_quiz"); //box que mostra pontuação final
	var nome = localStorage.getItem("quiz.nome");
	var pontos=0;
	var tempo_quiz = parseInt(localStorage.getItem("quiz.tempo"));
	var hh, min, ss;

	hh  = Math.floor(tempo_quiz/3600);
	min = Math.floor(tempo_quiz/60)-(hh*3600);
	ss  = tempo_quiz-(hh*3600)-(min*60);
	tempo_quiz = hh + "h " + min + "m e " + ss + "s";


	for (i=0; i<opcoes.elements.length; i++){
		obj = opcoes.elements[i];

		//desabilita todas as respostas
		if (obj.value != "<< Voltar" && obj.value != "Continuar >>"){
			obj.disabled = true;
		}

		if (obj.name == "quiz_1"){
			pontos += obj.value == "assembly" && obj.checked ? 1 : 0;

			if (obj.value == "assembly"){
				document.getElementById("quiz_"+i).setAttribute("class", "resposta_certa");
			}else if (obj.checked && obj.value != "assembly"){
				document.getElementById("quiz_"+i).setAttribute("class", "resposta_errada");
			}
		}

		if (obj.name == "quiz_2"){
			pontos += obj.value == "cp" && obj.checked ? 1 : 0;

			if (obj.value == "cp"){
				document.getElementById("quiz_"+i).setAttribute("class", "resposta_certa");
			}else if (obj.checked && obj.value != "cp"){
				document.getElementById("quiz_"+i).setAttribute("class", "resposta_errada");
			}
		}

		if (obj.name == "quiz_3"){
			pontos += obj.value == "bsd" && obj.checked ? 1 : 0;

			if (obj.value == "bsd"){
				document.getElementById("quiz_"+i).setAttribute("class", "resposta_certa");
			}else if (obj.checked && obj.value != "bsd"){
				document.getElementById("quiz_"+i).setAttribute("class", "resposta_errada");
			}
		}

		if (obj.name == "quiz_4"){
			pontos += obj.value == "shell" && obj.checked ? 1 : 0;

			if (obj.value == "shell"){
				document.getElementById("quiz_"+i).setAttribute("class", "resposta_certa");
			}else if (obj.checked && obj.value != "shell"){
				document.getElementById("quiz_"+i).setAttribute("class", "resposta_errada");
			}
		}

		if (obj.name == "quiz_5"){
			pontos += obj.value == "atet" && obj.checked ? 1 : 0;

			if (obj.value == "atet"){
				document.getElementById("quiz_"+i).setAttribute("class", "resposta_certa");
			}else if (obj.checked && obj.value != "atet"){
				document.getElementById("quiz_"+i).setAttribute("class", "resposta_errada");
			}
		}

		if (obj.name == "quiz_6"){
			pontos += obj.value == "3" && obj.checked ? 1 : 0;

			if (obj.value == "3"){
				document.getElementById("quiz_"+i).setAttribute("class", "resposta_certa");
			}else if (obj.checked && obj.value != "3"){
				document.getElementById("quiz_"+i).setAttribute("class", "resposta_errada");
			}
		}

		if (obj.name == "quiz_7"){
			pontos += obj.value == "5" && obj.checked ? 1 : 0;

			if (obj.value == "5"){
				document.getElementById("quiz_"+i).setAttribute("class", "resposta_certa");
			}else if (obj.checked && obj.value != "5"){
				document.getElementById("quiz_"+i).setAttribute("class", "resposta_errada");
			}
		}

		if (obj.name == "quiz_8"){
			pontos += obj.value == "1" && obj.checked ? 1 : 0;

			if (obj.value == "1"){
				document.getElementById("quiz_"+i).setAttribute("class", "resposta_certa");
			}else if (obj.checked && obj.value != "1"){
				document.getElementById("quiz_"+i).setAttribute("class", "resposta_errada");
			}
		}

		if (obj.name == "quiz_9"){
			pontos += obj.value == "2" && obj.checked ? 1 : 0;

			if (obj.value == "2"){
				document.getElementById("quiz_"+i).setAttribute("class", "resposta_certa");
			}else if (obj.checked && obj.value != "2"){
				document.getElementById("quiz_"+i).setAttribute("class", "resposta_errada");
			}
		}

		if (obj.name == "quiz_10"){
			pontos += obj.value == "2" && obj.checked ? 1 : 0;

			if (obj.value == "2"){
				document.getElementById("quiz_"+i).setAttribute("class", "resposta_certa");
			}else if (obj.checked && obj.value != "2"){
				document.getElementById("quiz_"+i).setAttribute("class", "resposta_errada");
			}
		}

		//retira status do quiz e mostra data_hora na barra de status
		clearTimeout(timeout);
		timeout = print_time(); 
		localStorage.removeItem("quiz.nome");
		localStorage.removeItem("quiz.tempo");
		
		//mostra box da pontuação
		resultado_quiz.style.position = "relative";
		resultado_quiz.style.visibility = "visible";
		//volta na primeira página
		mudar_pagina(document.getElementById("pagina_2"), document.getElementById("pagina_1"));
		//rola a página no topo onde está a pontuação
		scrollTo(0,0);


		if (pontos >2){
			resultado_quiz.setAttribute("class", "resultado_positivo_quiz");
			resultado_quiz.innerHTML = "<div><h3>Pontuação!</h3><p><b>Nome:</b> "+nome+"<br><b>Tempo:</b> "+tempo_quiz+" segundos</div>";
			resultado_quiz.innerHTML += "<div><p>Parabéns!<br>Você acertou <b>"+pontos+"</b> respostas e obteve um rendimento de <b>"+parseFloat(pontos/10)*100+"%</b><p>Agora indique nosso site para seus colegas competirem com você! <br><a href='quiz.html'>Clique aqui</a> para fazer novamente!</div>";
		}else{
			resultado_quiz.setAttribute("class", "resultado_negativo_quiz");
			resultado_quiz.innerHTML = "<div><h3>Pontuação!</h3><p><b>Nome:</b> "+nome+"<br><b>Tempo:</b> "+tempo_quiz+" segundos</div>";
			resultado_quiz.innerHTML += "<div><p>Infelizmente você não foi muito bem!<br>Você acertou <b>"+pontos+"</b> respostas com <b>" + parseFloat(pontos/10)*100 + "%</b> de rendimento<p>Recomendamos ler nosso artigo para obter maior conhecimento e tentar novamente nosso quiz! <br><a href='quiz.html'>Clique aqui</a> e tente outra vez!</div>";
		}
	}
}