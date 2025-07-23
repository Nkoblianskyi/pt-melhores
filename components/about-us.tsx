export default function AboutUs() {
  return (
    <section className="py-16 px-4 bg-black">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Sobre Nós</h2>

        <div className="space-y-8">
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
            <h3 className="text-xl font-bold text-red-400 mb-4">A Nossa Missão</h3>
            <p className="text-gray-300 leading-relaxed">
              O PTMelhoresCasinos.com é um site independente de comparação e análise de casinos online em Portugal.{" "}
              <strong>Não somos um casino</strong> e <strong>não fazemos publicidade direta</strong>
              de jogos de azar. O nosso objetivo é fornecer informações imparciais e educativas sobre a indústria de
              jogos online em Portugal.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
            <h3 className="text-xl font-bold text-green-400 mb-4">Como Criamos o Nosso Ranking</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-white mb-2">Critérios de Avaliação:</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>Licenciamento e regulamentação</li>
                  <li>Segurança e proteção de dados</li>
                  <li>Variedade de jogos disponíveis</li>
                  <li>Métodos de pagamento seguros</li>
                  <li>Qualidade do atendimento ao cliente</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-white mb-2">Processo de Análise:</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>Verificação de licenças oficiais</li>
                  <li>Teste de jogos e funcionalidades</li>
                  <li>Análise de termos e condições</li>
                  <li>Avaliação de medidas de jogo responsável</li>
                  <li>Feedback de utilizadores reais</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
            <h3 className="text-xl font-bold text-yellow-400 mb-4">Transparência e Responsabilidade</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Mantemos total transparência sobre as nossas fontes de receita. Alguns links neste site podem gerar
              comissões de afiliação quando os utilizadores se registam em casinos através dos nossos links. No entanto,
              isto <strong>nunca influencia as nossas avaliações</strong>
              ou rankings, que são baseados exclusivamente em critérios objetivos de qualidade e segurança.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Promovemos apenas casinos licenciados em Portugal e que cumprem rigorosamente as regulamentações locais de
              jogo responsável.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
