
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email.trim()) return;

    setSubscribed(true);
    setEmail("");

    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer className="relative bg-details text-white font-body pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-10 px-5 sm:px-8 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-8 lg:gap-8 pb-12 lg:pb-16 border-b border-white/15">

          <div className="sm:col-span-2 lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <a href="#" className="inline-flex items-center gap-3">
                <span className="text-2xl sm:text-3xl tracking-tight text-white font-semibold">
                  Villa Chérie
                </span>
              </a>

            </div>

            <div className="flex flex-wrap items-center gap-3 pt-1">

              <a
                href="https://wa.me"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-details hover:bg-white hover:border-white transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z" />
                </svg>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-details hover:bg-white hover:border-white transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-details hover:bg-white hover:border-white transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-details hover:bg-white hover:border-white transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-3 sm:space-y-4">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-accent tracking-wide">
              Explorar
            </h3>

            <ul className="space-y-2.5 sm:space-y-3 text-white/80 text-sm sm:text-base">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>

              <li>
                <a href="#catalogo" className="hover:text-white transition-colors">
                  Catálogo
                </a>
              </li>

              <li>
                <a href="#qualidade" className="hover:text-white transition-colors">
                  Qualidade
                </a>
              </li>

              <li>
                <a href="#sabores" className="hover:text-white transition-colors">
                  Nossos Sabores
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-3 sm:space-y-4">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-accent tracking-wide">
              Institucional
            </h3>

            <ul className="space-y-2.5 sm:space-y-3 text-white/80 text-sm sm:text-base">
              <li>
                <a href="#politica-privacidade" className="hover:text-white transition-colors">
                  Política de Privacidade
                </a>
              </li>

              <li>
                <a href="#termos-uso" className="hover:text-white transition-colors">
                  Termos de Uso
                </a>
              </li>

              <li>
                <a href="#sobre" className="hover:text-white transition-colors">
                  Sobre Nós
                </a>
              </li>

              <li>
                <a href="#contato" className="hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-3 space-y-3 sm:space-y-4">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-accent tracking-wide">
              Novidades
            </h3>

            <p className="text-white/75 text-sm sm:text-base leading-relaxed">
              Receba lançamentos exclusivos, edições limitadas e convites para
              degustações.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-3 pt-1">
              <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu melhor e-mail"
                  className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm sm:text-base focus:outline-none focus:border-accent transition-colors"
                />

                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-lg bg-accent text-details font-semibold text-sm sm:text-base hover:opacity-90 transition-opacity duration-300 whitespace-nowrap"
                >
                  Inscrever-se
                </button>
              </div>

              {subscribed && (
                <p className="text-sm text-white/90" role="status">
                  Obrigado por se inscrever! Em breve enviaremos novidades.
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-6 text-center sm:text-left text-white/60 text-xs sm:text-sm">
          <p>
            © {new Date().getFullYear()} Villa Chérie Chocolateria Artesanal.
            Todos os direitos reservados.
          </p>

          <p>
            Feito com cacau de origem e dedicação artesanal.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
