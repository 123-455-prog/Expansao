/* Expansão Engenharia: páginas internas, serviços, portfólio, carrossel do início e links do WhatsApp. */
(function(){
"use strict";

/* ========== Dados da empresa ==========
   Endereço, horários e telefone ficam escritos no index.html (aparecem mesmo sem JavaScript).
   Se mudar o número, troque aqui e nos href="https://wa.me/..." do index.html. */
var WHATSAPP = "5541984914836";
/* "Desde 2023", CREA e responsável técnico: aparecem no resumo da home e na página Sobre */
var FATOS = [
  {titulo:"Desde 2023", linhas:["Engenharia civil em São José dos Pinhais"]},
  {titulo:"CREA-PR nº 93834", linhas:["Registro ativo no CREA-PR"]},
  {titulo:"Jacir dos Santos", linhas:["Engenheiro civil, responsável técnico", "CREA-PR nº 226343/D"]}
];

/* ========== Serviços ==========
   nomeNaMensagem: como o serviço aparece na mensagem do WhatsApp
   plural: true quando a mensagem deve dizer "serviços" em vez de "um serviço" */
var SERVICOS = [
  {id:"projetos", titulo:"Projetos de engenharia", nomeNaMensagem:"projetos de engenharia", plural:true, foto:"img/servicos/projetos.jpg",
   descricao:"Elaboração e compatibilização de projetos arquitetônicos, estruturais e complementares, conforme o escopo contratado, buscando segurança, funcionalidade e eficiência construtiva."},
  {id:"obras", titulo:"Execução e gerenciamento de obras", nomeNaMensagem:"execução e gerenciamento de obras", plural:false, foto:"img/servicos/obras.jpg",
   descricao:"Planejamento, coordenação de equipes, controle de serviços, acompanhamento de etapas e gestão de recursos para manter a obra organizada e alinhada ao projeto."},
  {id:"bim", titulo:"Engenharia estrutural e BIM", nomeNaMensagem:"engenharia estrutural e BIM", plural:false, foto:"img/servicos/bim.jpg",
   descricao:"Desenvolvimento de soluções estruturais e modelagem digital para melhorar a visualização do empreendimento, a compatibilização entre projetos e o planejamento da construção."},
  {id:"laudos", titulo:"Laudos, vistorias e inspeções", nomeNaMensagem:"laudos, vistorias e inspeções", plural:true, foto:"img/servicos/laudos.jpg",
   descricao:"Avaliações técnicas, inspeções de elementos construtivos, registros fotográficos e elaboração de documentos técnicos dentro das atribuições profissionais aplicáveis."},
  {id:"regularizacao", titulo:"Regularização de imóveis", nomeNaMensagem:"regularização de imóveis", plural:false, foto:"img/servicos/regularizacao.jpg",
   descricao:"Assessoria técnica em processos de regularização de edificações, levantamento de informações, elaboração de documentos e acompanhamento de procedimentos junto aos órgãos competentes."},
  {id:"aprovacoes", titulo:"Aprovações e documentação de obras", nomeNaMensagem:"aprovações e documentação de obras", plural:true, foto:"img/servicos/aprovacoes.jpg",
   descricao:"Apoio técnico na elaboração e tramitação de projetos, obtenção de alvarás, processos de conclusão de obra e demais documentos pertinentes, conforme as exigências aplicáveis."}
];

/* ========== Portfólio ==========
   Para adicionar um trabalho, coloque a foto em img/portfolio/ e inclua um item aqui:
     {titulo:"Título", descricao:"Descrição curta.", foto:"img/portfolio/arquivo.jpg"}
   Opcionais:
     antesDepois:true  ocupa a linha inteira e mostra a etiqueta "Antes e depois"
     planta:true       desenho técnico: mostra a imagem inteira e fica fora do carrossel do início */
var PORTFOLIO = [
  {titulo:"Construção concluída", descricao:"Da estrutura em concreto à obra finalizada.", foto:"img/portfolio/01-construcao-concluida.jpg", antesDepois:true},
  {titulo:"Projeto estrutural de mezanino", descricao:"Estrutura metálica de mezanino e cobertura, com modelagem 3D.", foto:"img/portfolio/02-projeto-estrutural-de-mezanino.jpg"},
  {titulo:"Estrutura metálica na fachada", descricao:"Cobertura metálica em montagem na frente da obra.", foto:"img/portfolio/03-estrutura-metalica-na-fachada.jpg"},
  {titulo:"Vigas do mezanino", descricao:"Vigas metálicas sob o piso do mezanino.", foto:"img/portfolio/04-vigas-do-mezanino.jpg"},
  {titulo:"Treliça metálica", descricao:"Treliça e cobertura em telhas de aço.", foto:"img/portfolio/05-trelica-metalica.jpg"},
  {titulo:"Estrutura em balanço", descricao:"Estrutura metálica avançando sobre a fachada.", foto:"img/portfolio/06-estrutura-em-balanco.jpg"},
  {titulo:"Vigamento visto de cima", descricao:"Vigas metálicas do mezanino montadas, antes da colocação do piso.", foto:"img/portfolio/07-vigamento-visto-de-cima.jpg"},
  {titulo:"Estrutura entre as paredes existentes", descricao:"Vigas e pilares metálicos montados entre as paredes da construção.", foto:"img/portfolio/08-estrutura-entre-as-paredes-existentes.jpg"},
  {titulo:"Mezanino em acabamento", descricao:"Piso e fechamentos em drywall.", foto:"img/portfolio/09-mezanino-em-acabamento.jpg"},
  {titulo:"Pilar metálico do mezanino", descricao:"Pilar e vigamento junto aos equipamentos da fábrica.", foto:"img/portfolio/10-pilar-metalico-do-mezanino.jpg"},
  {titulo:"Vão livre sob o mezanino", descricao:"Grelha de vigas metálicas apoiada em pilares.", foto:"img/portfolio/11-vao-livre-sob-o-mezanino.jpg"},
  {titulo:"Vigamento sobre equipamentos", descricao:"Estrutura metálica acima do tanque de produção.", foto:"img/portfolio/12-vigamento-sobre-equipamentos.jpg"},
  {titulo:"Linha de pilares", descricao:"Pilares metálicos ao lado do tanque de inox.", foto:"img/portfolio/13-linha-de-pilares.jpg"},
  {titulo:"Mezanino metálico montado", descricao:"Estrutura completa com pilares, vigas e piso.", foto:"img/portfolio/14-mezanino-metalico-montado.jpg"},
  {titulo:"Detalhe de solda", descricao:"Ligação soldada entre vigas do mezanino.", foto:"img/portfolio/15-detalhe-de-solda.jpg"},
  {titulo:"Guarda-corpo da escada", descricao:"Guarda-corpo em aço com vista para o piso do mezanino.", foto:"img/portfolio/16-guarda-corpo-da-escada.jpg"},
  {titulo:"Ligação viga-pilar", descricao:"Encontro soldado de vigas e pilar, com pintura preta.", foto:"img/portfolio/17-ligacao-viga-pilar.jpg"},
  {titulo:"Corredor sob o mezanino", descricao:"Circulação entre pilares e equipamentos.", foto:"img/portfolio/18-corredor-sob-o-mezanino.jpg"},
  {titulo:"Vigamento junto à parede", descricao:"Pilares e vigas alinhados à parede existente.", foto:"img/portfolio/19-vigamento-junto-a-parede.jpg"},
  {titulo:"Planta de pilares", descricao:"Locação dos pilares do mezanino, em escala 1:20.", foto:"img/portfolio/20-planta-de-pilares.jpg", planta:true},
  {titulo:"Planta de vigas", descricao:"Detalhamento das vigas e fixações do mezanino.", foto:"img/portfolio/21-planta-de-vigas.jpg", planta:true},
  {titulo:"Planta de vigas do segundo trecho", descricao:"Vigas e pilares do mezanino com elevador e silo.", foto:"img/portfolio/22-planta-de-vigas-do-segundo-trecho.jpg", planta:true},
  {titulo:"Vistoria de fachada", descricao:"Inspeção de fissuras em fachada industrial.", foto:"img/portfolio/23-vistoria-de-fachada.jpg"},
  {titulo:"Análise de fissura", descricao:"Leitura de fissura em pilar e alvenaria.", foto:"img/portfolio/24-analise-de-fissura.jpg"},
  {titulo:"Leitura de referência", descricao:"Verificação de elementos da fachada com o nível.", foto:"img/portfolio/25-leitura-de-referencia.jpg"},
  {titulo:"Nível topográfico", descricao:"Equipamento posicionado para levantamento em campo.", foto:"img/portfolio/26-nivel-topografico.jpg"}
];

/* ========== Utilitários ========== */
function porId(id){ return document.getElementById(id); }

function escaparHtml(texto){
  return String(texto).replace(/[&<>"']/g, function(c){
    return {"&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"}[c];
  });
}

/* Navegador sem suporte a timeZone no Intl lança erro; nesse caso cai no "Olá" em vez de parar o script. */
function saudacao(){
  var hora;
  try { hora = +new Intl.DateTimeFormat("pt-BR", {timeZone:"America/Sao_Paulo", hour:"numeric", hour12:false}).format(new Date()) % 24; }
  catch (erro) { return "Olá"; }
  if (!(hora >= 0)) return "Olá";
  if (hora >= 5 && hora < 12) return "Bom dia";
  if (hora >= 12 && hora < 18) return "Boa tarde";
  return "Boa noite";
}

/* Tempo do CSS em milissegundos: "0.45s" -> 450, "300ms" -> 300 (lista "a, b" usa o primeiro). */
function msDoCss(valor, padrao){
  var primeiro = String(valor).split(",")[0].trim(), n = parseFloat(primeiro);
  if (isNaN(n)) return padrao;
  return /ms$/.test(primeiro) ? n : n * 1000;
}

function buscarServico(id){
  return SERVICOS.filter(function(s){ return s.id === id; })[0];
}

/* Texto que já vai escrito no WhatsApp, conforme o botão (data-svc = serviço, data-visit = visita). */
function mensagemDoLink(link){
  var servico = link.dataset.svc && buscarServico(link.dataset.svc);
  if (servico) return saudacao() + ", tudo bem? Gostaria de pedir um orçamento de " + (servico.plural ? "serviços" : "um serviço") + " para " + servico.nomeNaMensagem;
  if (link.hasAttribute("data-visit")) return saudacao() + ", tudo bem? Gostaria de agendar uma visita à Expansão Engenharia";
  return "";
}

function atualizarLinkWhatsApp(link){
  var texto = mensagemDoLink(link);
  link.href = "https://wa.me/" + WHATSAPP + (texto ? "?text=" + encodeURIComponent(texto) : "");
}

/* ========== Conteúdo montado a partir das listas ========== */
porId("ano-atual").textContent = new Date().getFullYear();

function emLinhas(lista){ return lista.map(escaparHtml).join("<br>"); }

document.querySelectorAll("[data-fatos]").forEach(function(el){
  el.innerHTML = FATOS.map(function(f){ return '<li><b>' + escaparHtml(f.titulo) + '</b><span>' + emLinhas(f.linhas) + '</span></li>'; }).join("");
});

/* "Abrir no mapa" busca o endereço escrito no <address>: mudou o endereço, o mapa acompanha. */
var linhasDoEndereco = Array.prototype.filter.call(document.querySelector("address[data-endereco]").childNodes, function(n){ return n.nodeType === 3; })
  .map(function(n){ return n.textContent.trim(); });
document.querySelector(".maptile").href = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(linhasDoEndereco.join(", "));

porId("submenu-servicos").innerHTML = SERVICOS.map(function(s){
  return '<a href="#' + escaparHtml(s.id) + '">' + escaparHtml(s.titulo) + '</a>';
}).join("");

/* Submenu de Serviços: abre por hover/foco no CSS. Aqui só avisa o leitor de tela se está aberto.
   Em tela de toque o submenu nunca abre (o link já leva à página com todos os serviços). */
(function(){
  var caixa = document.querySelector("nav .dd"), link = caixa.firstElementChild, submenu = porId("submenu-servicos");
  if (window.matchMedia && matchMedia("(hover:none)").matches){ link.removeAttribute("aria-haspopup"); link.removeAttribute("aria-expanded"); return; }
  function sincronizar(){ link.setAttribute("aria-expanded", getComputedStyle(submenu).display !== "none" ? "true" : "false"); }
  ["mouseenter", "mouseleave", "focusin", "focusout"].forEach(function(ev){ caixa.addEventListener(ev, function(){ setTimeout(sincronizar, 0); }); });
})();

document.querySelector("#servicos .svc").innerHTML = SERVICOS.map(function(s, i){
  return '<article class="row" id="' + escaparHtml(s.id) + '"><div>' +
    '<span class="rn">' + String(i + 1).padStart(2, "0") + '</span><h3>' + escaparHtml(s.titulo) + '</h3><p>' + escaparHtml(s.descricao) + '</p>' +
    '<a class="btn main" target="_blank" rel="noopener" data-wa data-svc="' + escaparHtml(s.id) + '">Pedir orçamento</a></div>' +
    '<div class="rimg"><img src="' + escaparHtml(s.foto) + '" alt="' + escaparHtml(s.titulo) + '" loading="lazy"></div></article>';
}).join("");

porId("strip").innerHTML = SERVICOS.map(function(s){
  return '<a class="sc" href="#' + escaparHtml(s.id) + '"><img src="' + escaparHtml(s.foto) + '" alt="' + escaparHtml(s.titulo) + '">' +
    '<h3>' + escaparHtml(s.titulo) + '</h3><span class="more">Ver detalhes</span></a>';
}).join("");

porId("works").innerHTML = PORTFOLIO.map(function(t, i){
  var titulo = escaparHtml(t.titulo);
  return '<article class="wk' + (t.antesDepois ? ' wide' : '') + (t.planta ? ' fit' : '') + '"><div class="wimg">' +
    '<img src="' + escaparHtml(t.foto) + '" alt="' + titulo + '" data-i="' + i + '" loading="lazy" tabindex="0" role="button" aria-label="Ampliar imagem: ' + titulo + '">' +
    (t.antesDepois ? '<span class="batag">Antes e depois</span>' : '') +
    '</div><div class="wtx"><h3>' + titulo + '</h3><p>' + escaparHtml(t.descricao) + '</p></div></article>';
}).join("");

/* Links do WhatsApp: o número vem de WHATSAPP (o href escrito no HTML é só a reserva para quando o JS não roda).
   A mensagem é refeita no clique para a saudação acompanhar o horário. */
document.querySelectorAll("a[data-wa]").forEach(atualizarLinkWhatsApp);
document.addEventListener("click", function(e){
  var link = e.target.closest && e.target.closest("a[data-wa]");
  if (link) atualizarLinkWhatsApp(link);
}, true);

/* ========== Foto ampliada do portfólio ========== */
var ampliacao = (function(){
  var fundo = porId("ampliacao"), imagem = porId("ampliacao-foto"), legenda = porId("ampliacao-legenda"), botaoFechar = porId("ampliacao-fechar");
  var fotoOrigem = null;             // miniatura do portfólio que foi ampliada
  var estado = "fechada";            // fechada | abrindo | aberta | fechando
  var temporizador = 0;
  var voltaPendente = false;         // history.back() já pedido ao fechar, ainda não concluído

  /* Quanto esperar a animação: a transição de #ampliacao-foto no CSS (+10 ms de folga). Com movimento reduzido, quase nada. */
  function duracao(){ return msDoCss(getComputedStyle(imagem).transitionDuration, 0) + 10; }

  function retanguloFinal(){
    var largura = (fotoOrigem && fotoOrigem.naturalWidth) || imagem.naturalWidth || 4;
    var altura = (fotoOrigem && fotoOrigem.naturalHeight) || imagem.naturalHeight || 3;
    var escala = Math.min(innerWidth * .94 / largura, innerHeight * .8 / altura);
    var w = largura * escala, h = altura * escala;
    return {left:(innerWidth - w) / 2, top:(innerHeight - h) / 2 - 24, width:w, height:h};
  }

  function posicionar(r){
    imagem.style.left = r.left + "px"; imagem.style.top = r.top + "px";
    imagem.style.width = r.width + "px"; imagem.style.height = r.height + "px";
  }

  function abrir(foto){
    if (estado === "abrindo" || estado === "aberta") return;
    if (estado === "fechando"){ clearTimeout(temporizador); concluirFechamento(); }   // clicou noutra foto durante o fechamento
    estado = "abrindo"; fotoOrigem = foto;
    marcarNoHistorico();
    var trabalho = PORTFOLIO[foto.dataset.i];
    imagem.src = foto.src;
    legenda.textContent = trabalho.titulo + " — " + trabalho.descricao;
    imagem.style.transition = "none"; imagem.style.objectFit = "cover";
    posicionar(foto.getBoundingClientRect());
    fundo.hidden = false; foto.style.visibility = "hidden"; document.body.style.overflow = "hidden";
    void imagem.offsetWidth;         // força o navegador a aplicar a posição inicial antes da animação
    imagem.style.transition = ""; fundo.classList.add("on");
    posicionar(retanguloFinal());
    botaoFechar.focus({preventScroll:true});
    temporizador = setTimeout(function(){ estado = "aberta"; }, duracao());
  }

  /* semAnimacao: usado quando a página muda por trás (ex.: botão Voltar) e a miniatura nem está mais na tela. */
  function fechar(semAnimacao){
    if (estado === "fechada") return;
    if (estado === "fechando" && semAnimacao !== true) return;
    clearTimeout(temporizador);
    estado = "fechando";
    fundo.classList.remove("on");
    var r = fotoOrigem.getBoundingClientRect();
    if (semAnimacao === true || !r.width || !r.height){ concluirFechamento(); return; }
    posicionar(r);
    temporizador = setTimeout(concluirFechamento, duracao());
  }

  /* A foto aberta ganha um passo no histórico: o Voltar do navegador ou do celular fecha só a foto. */
  function marcarNoHistorico(){
    if (!voltaPendente) history.pushState({fotoAmpliada:true}, "");   // se houver volta pendente, o popstate marca depois
  }

  /* Fechar pelo X, clique no fundo ou Esc: fecha e desfaz o passo que abrir() colocou no histórico. */
  function fecharPeloUsuario(){
    if (estado !== "abrindo" && estado !== "aberta") return;
    fechar();
    if (history.state && history.state.fotoAmpliada){ voltaPendente = true; history.back(); }
  }

  function concluirFechamento(){
    var foto = fotoOrigem;
    foto.style.visibility = ""; fotoOrigem = null;
    fundo.hidden = true; document.body.style.overflow = "";
    estado = "fechada";
    if (foto.getClientRects().length) foto.focus({preventScroll:true});
  }

  var galeria = porId("works");
  galeria.addEventListener("click", function(e){
    var foto = e.target.closest(".wimg img");
    if (foto) abrir(foto);
  });
  galeria.addEventListener("keydown", function(e){
    var foto = e.target.closest(".wimg img");
    if (foto && (e.key === "Enter" || e.key === " ")){ e.preventDefault(); abrir(foto); }
  });
  fundo.addEventListener("click", function(){ if (estado === "aberta") fecharPeloUsuario(); });   // ignora o 2º clique de um clique duplo que abriu a foto
  document.addEventListener("keydown", function(e){
    if (e.key === "Escape") fecharPeloUsuario();
    else if (e.key === "Tab" && fotoOrigem){ e.preventDefault(); botaoFechar.focus(); }
  });
  addEventListener("popstate", function(){
    if (!voltaPendente){ fechar(); return; }   // Voltar do navegador com a foto aberta
    voltaPendente = false;                     // fim da volta pedida por fecharPeloUsuario
    if (estado === "abrindo" || estado === "aberta") marcarNoHistorico();   // outra foto abriu antes da volta terminar
  });
  addEventListener("resize", function(){
    if (estado === "aberta" || estado === "abrindo"){ imagem.style.transition = "none"; posicionar(retanguloFinal()); }
  });

  return {fechar:fechar};
})();

/* ========== Carrossel do início ========== */
var carrossel = (function(){
  /* --intervalo-carrossel no CSS também controla a barra de progresso; 3600 só se o CSS não carregar. */
  var INTERVALO = msDoCss(getComputedStyle(document.documentElement).getPropertyValue("--intervalo-carrossel"), 3600);
  var quadro = porId("carrossel"), barra = porId("carrossel-barra"), titulo = porId("carrossel-titulo");
  var reduzirMovimento = window.matchMedia && matchMedia("(prefers-reduced-motion:reduce)").matches;
  var trabalhos = PORTFOLIO.filter(function(t){ return !t.planta; });
  var fotos = trabalhos.map(function(){
    var foto = new Image(); foto.alt = "";
    quadro.insertBefore(foto, quadro.firstChild);
    return foto;
  });
  var atual = 0, temporizador = 0;

  /* As fotos só são baixadas quando vão aparecer (a atual e a próxima). */
  function carregar(i){ if (!fotos[i].src) fotos[i].src = trabalhos[i].foto; }

  function mostrar(i){
    carregar(i); carregar((i + 1) % fotos.length);
    fotos.forEach(function(foto, x){ foto.classList.toggle("on", x === i); });
    titulo.textContent = trabalhos[i].titulo;
    barra.classList.remove("go"); void barra.offsetWidth; barra.classList.add("go");
  }

  /* Só gira quando a home está na tela e a aba está visível. */
  function atualizar(){
    var visivel = !document.hidden && !document.body.classList.contains("v-sub");
    if (visivel && !temporizador && !reduzirMovimento){
      mostrar(atual);
      temporizador = setInterval(function(){ atual = (atual + 1) % fotos.length; mostrar(atual); }, INTERVALO);
    } else if (!visivel && temporizador){
      clearInterval(temporizador); temporizador = 0;
    }
  }

  mostrar(0);
  document.addEventListener("visibilitychange", atualizar);
  return {atualizar:atualizar};
})();

/* ========== Navegação por # (páginas internas e seções da home) ========== */
var main = porId("main");
var PAGINAS_INTERNAS = ["sobre", "espaco", "portfolio", "servicos"];
var IDS_SERVICOS = SERVICOS.map(function(s){ return s.id; });
var telaAtual = "";

/* "#laudos" -> {alvo:"laudos", ehServico:true, pagina:"servicos"};  "#onde" ou sem # -> pagina "" (home) */
function lerRota(){
  var alvo = location.hash.slice(1);
  var ehServico = IDS_SERVICOS.indexOf(alvo) >= 0;
  var pagina = ehServico ? "servicos" : (PAGINAS_INTERNAS.indexOf(alvo) >= 0 ? alvo : "");
  return {alvo:alvo, ehServico:ehServico, pagina:pagina};
}

function mostrarPagina(pagina){
  document.body.classList.toggle("v-sub", !!pagina);
  PAGINAS_INTERNAS.forEach(function(p){ porId(p).classList.toggle("on", p === pagina); });
}

function animarEntradaDaHome(){
  main.classList.remove("fade"); void main.offsetWidth; main.classList.add("fade");
}

/* Trocou de tela: pula direto. Mesma tela: rola suave até a seção. */
function rolarAteAlvo(rota, mudouDeTela){
  var rolagem = mudouDeTela ? "instant" : "smooth";
  var destino = porId(rota.alvo);
  if (rota.ehServico && destino) destino.scrollIntoView({behavior:rolagem});
  else if (rota.alvo === "inicio") window.scrollTo({top:0, behavior:rolagem});
  else if (!rota.pagina && destino && destino.classList.contains("home")) destino.scrollIntoView({behavior:rolagem});
  else if (mudouDeTela) window.scrollTo({top:0, behavior:"instant"});
}

function abrirRotaAtual(){
  var rota = lerRota();
  var tela = rota.pagina || "home";
  var mudouDeTela = tela !== telaAtual;

  mostrarPagina(rota.pagina);
  if (document.activeElement && document.activeElement.blur) document.activeElement.blur();
  if (mudouDeTela && !rota.pagina) animarEntradaDaHome();
  rolarAteAlvo(rota, mudouDeTela);

  telaAtual = tela;
  carrossel.atualizar();
  atualizarMenu();
}

/* ========== Item atual do menu (aria-current) ==========
   Único lugar que marca o menu. Página interna: o item da página (e o serviço no submenu).
   Home: a seção que está na tela, atualizada na rolagem. */
var SECOES_DA_HOME = ["inicio", "resumo", "faixa", "estrutura", "onde"];
var MENU_DA_SECAO = {resumo:"sobre", faixa:"servicos", estrutura:"espaco"};
var quadroAgendado = 0;

function hrefsAtivosNoMenu(){
  var rota = lerRota();
  if (rota.pagina) return ["#" + rota.pagina, "#" + rota.alvo];
  var secao = "inicio";
  SECOES_DA_HOME.forEach(function(id){ if (porId(id).getBoundingClientRect().top <= 170) secao = id; });
  if (innerHeight + scrollY >= document.documentElement.scrollHeight - 4) secao = "onde";
  return ["#" + (MENU_DA_SECAO[secao] || secao)];
}

function atualizarMenu(){
  quadroAgendado = 0;
  var ativos = hrefsAtivosNoMenu();
  document.querySelectorAll("header a").forEach(function(a){
    if (ativos.indexOf(a.getAttribute("href")) >= 0) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
  });
}

window.addEventListener("scroll", function(){
  if (!quadroAgendado) quadroAgendado = requestAnimationFrame(atualizarMenu);
}, {passive:true});

/* Logo: na home, sobe suavemente em vez de recarregar a rota. */
document.querySelector("header .wrap>a").addEventListener("click", function(e){
  if (!document.body.classList.contains("v-sub") && (location.hash === "#inicio" || !location.hash)){
    e.preventDefault(); window.scrollTo({top:0, behavior:"smooth"});
  }
});

/* Mudou o # (menu, link ou Voltar/Avançar entre páginas): fecha a foto ampliada na hora e abre a rota nova. */
window.addEventListener("hashchange", function(){ ampliacao.fechar(true); abrirRotaAtual(); });

/* Entrar ou atualizar: sem # começa no topo da home; com # (link compartilhado) abre direto a página ou seção. */
if ("scrollRestoration" in history) history.scrollRestoration = "manual";
if (!location.hash) window.scrollTo(0, 0);
window.addEventListener("pageshow", function(e){ if (e.persisted) abrirRotaAtual(); });
abrirRotaAtual();
})();
