export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-black py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold text-white mb-8">Política de Cookies</h1>

        <div className="bg-gray-900 p-8 rounded-lg space-y-6">
          <section>
            <h2 className="text-xl font-bold text-red-400 mb-4">O que são Cookies?</h2>
            <p className="text-gray-300 leading-relaxed">
              Cookies são pequenos ficheiros de texto que são armazenados no seu dispositivo quando visita um site.
              Ajudam o site a lembrar-se das suas preferências e melhorar a sua experiência.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-red-400 mb-4">Tipos de Cookies que Utilizamos</h2>

            <div className="space-y-4">
              <div className="bg-black/50 p-4 rounded border border-gray-700">
                <h3 className="font-bold text-green-400 mb-2">Cookies Essenciais</h3>
                <p className="text-gray-300 text-sm">
                  Necessários para o funcionamento básico do site. Não podem ser desativados.
                </p>
              </div>

              <div className="bg-black/50 p-4 rounded border border-gray-700">
                <h3 className="font-bold text-yellow-400 mb-2">Cookies Analíticos</h3>
                <p className="text-gray-300 text-sm">
                  Ajudam-nos a entender como os visitantes interagem com o site através de informações anónimas.
                </p>
              </div>

              <div className="bg-black/50 p-4 rounded border border-gray-700">
                <h3 className="font-bold text-blue-400 mb-2">Cookies de Preferências</h3>
                <p className="text-gray-300 text-sm">
                  Permitem que o site se lembre das suas escolhas e forneça funcionalidades melhoradas.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-red-400 mb-4">Como Gerir Cookies</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Pode controlar e/ou eliminar cookies conforme desejar. Pode eliminar todos os cookies que já estão no seu
              computador e configurar a maioria dos navegadores para impedir que sejam colocados.
            </p>

            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
              <p className="text-yellow-300 text-sm">
                <strong>Aviso:</strong> Se desativar os cookies, algumas funcionalidades do site podem não funcionar
                corretamente.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-red-400 mb-4">Atualizações desta Política</h2>
            <p className="text-gray-300 leading-relaxed">
              Esta política de cookies pode ser atualizada periodicamente. Recomendamos que verifique esta página
              regularmente para se manter informado sobre como utilizamos cookies.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
