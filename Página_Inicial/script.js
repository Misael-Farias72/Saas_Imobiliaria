// Menu mobile
  const menuToggle = document.getElementById('menuToggle');
  const menuNav = document.getElementById('menuNav');
  menuToggle.addEventListener('click', function(){
    menuNav.classList.toggle('aberto');
  });

  document.querySelectorAll('#menuNav a').forEach(function(link){
    link.addEventListener('click', function(){
      menuNav.classList.remove('aberto');
    });
  });

  // Filtro de imóveis (aluguel / venda / todos)
  const abas = document.querySelectorAll('.aba-btn');
  const cards = document.querySelectorAll('.imovel-card');

  abas.forEach(function(aba){
    aba.addEventListener('click', function(){
      abas.forEach(function(a){ a.classList.remove('ativa'); });
      aba.classList.add('ativa');

      const filtro = aba.getAttribute('data-filtro');

      cards.forEach(function(card){
        if(filtro === 'todos' || card.getAttribute('data-tipo') === filtro){
          card.classList.remove('oculto');
        } else {
          card.classList.add('oculto');
        }
      });
    });
  });

  // Busca simples: aplica o filtro de negocio escolhido na busca do topo
  document.getElementById('formBusca').addEventListener('submit', function(e){
    e.preventDefault();
    const negocio = document.getElementById('negocio').value;

    document.getElementById('imoveis').scrollIntoView({ behavior:'smooth' });

    const alvo = negocio === 'aluguel' ? 'aluguel' : (negocio === 'venda' ? 'venda' : 'todos');
    const botaoAlvo = document.querySelector('.aba-btn[data-filtro="' + alvo + '"]');
    if(botaoAlvo){ botaoAlvo.click(); }
  });

  // Formulario de contato (prototipo, sem envio real)
  document.getElementById('formContato').addEventListener('submit', function(e){
    e.preventDefault();
    document.getElementById('formMsg').style.display = 'block';
    e.target.reset();
  });