import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-800 border-t border-yellow-500 py-16 px-4 rounded-t-3xl">
      <div className="container mx-auto max-w-6xl">
        {/* Organizações de Apoio */}
        <div className="mt-8 pt-6 border-t border-yellow-500">
          <h4 className="text-white font-bold mb-6 text-center text-base">
            <span className="text-green-400">Organizações</span> <span className="text-red-400">de</span>{" "}
            <span className="text-yellow-500">Apoio</span>
          </h4>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
            <Link
              href="https://www.srij.turismodeportugal.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-600 border border-gray-500 rounded-xl p-4 flex items-center justify-center transition-all duration-300 hover:border-yellow-400 hover:scale-105"
            >
              <img src="/srij.svg" alt="SRIJ" className="h-8 md:h-10 w-auto object-contain" />
            </Link>
            <Link
              href="https://www.sicad.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-600 border border-gray-500 rounded-xl p-4 flex items-center justify-center transition-all duration-300 hover:border-yellow-400 hover:scale-105"
            >
              <img src="/icad.png" alt="SICAD" className="h-8 md:h-10 w-auto object-contain" />
            </Link>
            <Link
              href="https://www.gamcare.org.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-600 border border-gray-500 rounded-xl p-4 flex items-center justify-center transition-all duration-300 hover:border-yellow-400 hover:scale-105"
            >
              <img src="/gamecare.svg" alt="GamCare" className="h-8 md:h-10 w-auto object-contain" />
            </Link>
            <Link
              href="https://www.gambleaware.org"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-600 border border-gray-500 rounded-xl p-4 flex items-center justify-center transition-all duration-300 hover:border-yellow-400 hover:scale-105"
            >
              <img src="/gamble.webp" alt="GambleAware" className="h-8 md:h-10 w-auto object-contain" />
            </Link>
            <Link
              href="https://www.jogoresponsavel.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-600 border border-gray-500 rounded-xl p-4 flex items-center justify-center transition-all duration-300 hover:border-yellow-400 hover:scale-105"
            >
              <img src="/jogo2.png" alt="Jogo Responsável" className="h-8 md:h-10 w-auto object-contain" />
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8 mt-8">
          <div>
            <h3 className="text-white font-bold mb-4">PTMelhoresCasinos.com</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Site independente de comparação de casinos online em Portugal. Informação educativa e imparcial sobre
              jogos online.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Links Importantes</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Jogo Responsável</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              18+ | Jogue com responsabilidade
              <br />O jogo pode causar dependência
              <br />
              Procure ajuda se necessário
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center bg-black bg-opacity-20 -mx-4 px-4 mt-8 rounded-t-2xl">
          <p className="text-gray-400 text-sm">
            © 2025 PTMelhoresCasinos.com. Todos os direitos reservados. Este site não é um casino online e não oferece
            jogos de dinheiro real.
          </p>
        </div>
      </div>
    </footer>
  )
}
