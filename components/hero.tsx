"use client"

export default function Hero() {
  const currentDate = new Date()
  const currentMonth = currentDate.toLocaleDateString("pt-PT", { month: "long" })
  const currentYear = currentDate.getFullYear()

  return (
    <section
      className="relative h-[300px] flex items-center justify-center text-center"
      style={{
        backgroundImage: `url('/bg-pok.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-2xl md:text-4xl font-bold mb-3">
          <span className="text-red-600">Melhores Online</span>{" "}
          <span className="text-green-500">Casinoer Portugal</span> <span className="text-red-600">{currentYear}</span>
        </h1>

        <p className="text-white/90 mb-6 text-base">
          Opdag os melhores bónus, pagamentos mais rápidos e casinos online mais confiáveis!
        </p>

        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          <div className="flex flex-col items-center">
            <div className="text-yellow-500 mb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"></path>
                <path d="M4 6v12c0 1.1.9 2 2 2h14v-4"></path>
                <path d="M18 12a2 2 0 0 0 0 4h2v-4h-2z"></path>
              </svg>
            </div>
            <span className="text-white font-medium text-sm">Bónus Exclusivos</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-yellow-500 mb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                <line x1="2" x2="22" y1="10" y2="10"></line>
              </svg>
            </div>
            <span className="text-white font-medium text-sm">Pagamentos Rápidos</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-yellow-500 mb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
            </div>
            <span className="text-white font-medium text-sm">Suporte 24/7</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-yellow-500 mb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
            </div>
            <span className="text-white font-medium text-sm">Licenciado & Seguro</span>
          </div>
        </div>

        <div className="mt-6 text-white text-xs">
          Ranking atualizado mensalmente • Última atualização: {currentMonth} {currentYear}
        </div>
      </div>
    </section>
  )
}
