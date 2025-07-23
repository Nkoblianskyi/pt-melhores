export default function SafeGaming() {
  return (
    <section className="py-16 px-4 bg-black">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Informação sobre Jogo Seguro</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-900 p-6 rounded-lg border border-red-600/30">
            <h3 className="text-xl font-bold text-red-400 mb-4">Jogo Responsável</h3>
            <ul className="text-gray-300 space-y-2 text-sm">
              <li>Estabeleça limites de tempo e dinheiro</li>
              <li>Nunca jogue para recuperar perdas</li>
              <li>O jogo deve ser sempre uma forma de entretenimento</li>
              <li>Procure ajuda se sentir que está a perder o controlo</li>
            </ul>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg border border-green-600/30">
            <h3 className="text-xl font-bold text-green-400 mb-4">Onde Procurar Ajuda</h3>
            <ul className="text-gray-300 space-y-2 text-sm">
              <li>
                <strong>Linha Vida:</strong> 213 544 545
              </li>
              <li>
                <strong>SOS Voz Amiga:</strong> 213 544 545
              </li>
              <li>
                <strong>SICAD:</strong> Serviço de Intervenção nos Comportamentos Aditivos
              </li>
              <li>
                <strong>Jogo Responsável:</strong> jogoresponsavel.pt
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 p-6 bg-gray-900 border border-yellow-500/30 rounded-lg">
          <h3 className="text-xl font-bold text-yellow-400 mb-4">Aviso Importante</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            O jogo online é proibido para menores de 18 anos. Os jogos de casino podem causar dependência. Jogue sempre
            com responsabilidade e dentro dos seus limites financeiros. Se suspeita que tem problemas com o jogo,
            procure ajuda profissional imediatamente.
          </p>
        </div>
      </div>
    </section>
  )
}
