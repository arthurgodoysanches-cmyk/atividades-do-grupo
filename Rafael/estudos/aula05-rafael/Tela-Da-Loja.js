function TelaDaLoja() {
  return (
    <div>
      <header>
        <img src="logo.png" alt="Nexus Gaming" />
        <input type="text" placeholder="Buscar jogos..." />
        <nav>
          <a href="#">Home</a>
          <a href="#">Hardware</a>
        </nav>
      </header>
      <main>
        <section>
          <p>Categorias Especiais</p>
          <button>Lançamentos 2026</button>
          <button>Mais Vendidos</button>
        </section>
        <section>
          <h2>Explorar por Gênero</h2>
          <div>
            <img src="icone.png" alt="Ícone do Gênero" />
            <h3>RPG de Ação</h3>
            <p>Action RPG, JRPG, Open World</p>
            <span>6 jogos</span>
            <span>Top 98/100</span>
            <p>EM DESTAQUE: Elden Ring: Shadow of the Erdtree</p>
          </div>
          <div>
            <img src="icone2.png" alt="Ícone do Gênero" />
            <h3>FPS / Tiro</h3>
            <p>First Person, Third Person, Battle Royale</p>
            <span>5 jogos</span>
            <span>Top 85/100</span>
            <p>EM DESTAQUE: Call of Duty: Black Ops 7</p>
          </div>
        </section>
      </main>
    </div>
  );
}
