export default function HomePage() {
  return (
    <main>
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[var(--steam-dark)] to-[var(--steam-mid)]">
        <div className="max-w-3xl text-center px-6">
          <h1 className="text-4xl font-extrabold steam-accent">SteamReviews</h1>
          <p className="mt-4 steam-text">Uma plataforma estilo Steam focada em reviews de jogos — descubra opiniões, avaliações e destaques.</p>
        </div>
      </section>

      <section id="reviews" className="min-h-screen py-16 bg-[var(--steam-bg)]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold steam-accent">Reviews</h2>
          <p className="mt-3 steam-text">Aqui ficarão os reviews mais recentes e populares.</p>
        </div>
      </section>

      <section id="categories" className="min-h-screen py-16 bg-[var(--steam-mid)]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold steam-accent">Categorias</h2>
          <p className="mt-3 steam-text">Navegue por gêneros e tags para encontrar reviews do seu interesse.</p>
        </div>
      </section>

      <section id="about" className="min-h-screen py-16 bg-[var(--steam-bg)]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold steam-accent">Sobre</h2>
          <p className="mt-3 steam-text">Sobre o projeto SteamReviews e a missão por trás da plataforma.</p>
        </div>
      </section>

      <section id="contact" className="min-h-screen py-16 bg-[var(--steam-mid)]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold steam-accent">Contato</h2>
          <p className="mt-3 steam-text">Formas de contato e links relevantes.</p>
        </div>
      </section>
    </main>
  );
}
