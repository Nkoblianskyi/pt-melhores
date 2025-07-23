export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-black py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold text-white mb-8">Política de Privacidade</h1>

        <div className="bg-gray-900 p-8 rounded-lg space-y-6">
          <section>
            <h2 className="text-xl font-bold text-red-400 mb-4">1. Informações que Recolhemos</h2>
            <p className="text-gray-300 leading-relaxed">
              O PTMelhoresCasinos.com recolhe informações limitadas dos utilizadores, incluindo dados de navegação
              através de cookies e ferramentas de análise para melhorar a experiência do utilizador.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-red-400 mb-4">2. Como Utilizamos as Informações</h2>
            <ul className="text-gray-300 space-y-2">
              <li>• Melhorar a funcionalidade do site</li>
              <li>• Analisar padrões de utilização</li>
              <li>• Personalizar conteúdo relevante</li>
              <li>• Cumprir obrigações legais</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-red-400 mb-4">3. Partilha de Informações</h2>
            <p className="text-gray-300 leading-relaxed">
              Não vendemos, alugamos ou partilhamos informações pessoais com terceiros, exceto quando exigido por lei ou
              para proteger os nossos direitos legítimos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-red-400 mb-4">4. Cookies</h2>
            <p className="text-gray-300 leading-relaxed">
              Utilizamos cookies essenciais e analíticos. Pode gerir as suas preferências de cookies nas configurações
              do seu navegador.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-red-400 mb-4">5. Os Seus Direitos</h2>
            <p className="text-gray-300 leading-relaxed">
              Tem o direito de aceder, corrigir ou eliminar os seus dados pessoais. Para exercer estes direitos,
              contacte-nos através dos meios disponibilizados no site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-red-400 mb-4">6. Contacto</h2>
            <p className="text-gray-300 leading-relaxed">
              Para questões sobre esta política de privacidade, contacte-nos através do email disponibilizado no site.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
