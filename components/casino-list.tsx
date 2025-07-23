"use client"

import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { bettingSites } from "@/types/betting-site"

export default function CasinoList() {
  const handleCardClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <section id="rankings" className="py-4 bg-black">
      <div className="container mx-auto px-4">
        <div className="space-y-3 md:space-y-4">
          {bettingSites.map((casino, index) => (
            <Card
              key={casino.id}
              className={`bg-gradient-to-r from-gray-800 to-gray-700 cursor-pointer transition-all duration-200 relative ${index === 0
                  ? "border-2 border-yellow-400 shadow-lg shadow-yellow-500/20 from-yellow-900/20 via-gray-800 to-gray-700 hover:border-yellow-300"
                  : "border border-gray-600 hover:border-gray-500 hover:shadow-lg hover:shadow-gray-500/10"
                }`}
              onClick={() => handleCardClick(casino.url)}
            >
              <CardContent className="p-4">
                {index === 0 && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black font-bold text-xs px-3 py-1 z-10 rounded-sm pointer-events-none">
                    MELHOR CASINO
                  </Badge>
                )}
                {index === 1 && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-red-600 text-white font-bold text-xs px-3 py-1 z-10 rounded-sm pointer-events-none">
                    MAIS POPULAR
                  </Badge>
                )}
                {index === 2 && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-600 text-white font-bold text-xs px-3 py-1 z-10 rounded-sm pointer-events-none">
                    MELHOR BÓNUS
                  </Badge>
                )}

                <div className="absolute inset-0 opacity-5 pointer-events-none">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fbbf24' fillOpacity='0.3'%3E%3Ccircle cx='15' cy='15' r='2'/%3E%3Ccircle cx='45' cy='15' r='2'/%3E%3Ccircle cx='15' cy='45' r='2'/%3E%3Ccircle cx='45' cy='45' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
                      backgroundSize: "60px 60px",
                      backgroundRepeat: "repeat",
                    }}
                  />
                </div>

                {/* Mobile Layout (up to md) */}
                <div className="md:hidden">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex-shrink-0 mt-3">
                      <div className="bg-transparent rounded shadow-sm relative z-10">
                        <img
                          src={casino.logo || "/placeholder.svg"}
                          alt={`${casino.name} logo`}
                          className="h-24 w-28 object-contain"
                        />
                      </div>
                      <div className="flex items-center justify-center gap-2 mt-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${i < Math.floor(casino.rating) ? "text-yellow-500 fill-current" : "text-gray-600"
                                }`}
                            />
                          ))}
                        </div>
                        <span className="text-white font-semibold text-sm">{casino.rating.toFixed(1)}</span>
                      </div>
                    </div>

                    <div className="text-center flex-1 ml-4 mt-2">
                      <div className="flex items-center justify-center gap-1 text-red-500 mb-2">
                        <span className="text-sm font-medium">BÓNUS DE BOAS-VINDAS</span>
                      </div>
                      <div>
                        <div className="text-white font-bold text-xl leading-tight bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent p-2 rounded">
                          {casino.bonus}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 w-44 mx-auto">
                    <Badge
                      variant="outline"
                      className="border-green-600/70 text-green-300 bg-green-950/50 text-xs px-3 py-2 text-center justify-center w-full h-8 opacity-100 relative z-10 font-bold"
                    >
                      Pagamentos Rápidos
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-blue-600/70 text-blue-300 bg-blue-950/50 text-xs px-3 py-2 text-center justify-center w-full h-8 opacity-100 relative z-10 font-bold"
                    >
                      Licenciado SRIJ
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-purple-600/70 text-purple-300 bg-purple-950/50 text-xs px-3 py-2 text-center justify-center w-full h-8 opacity-100 relative z-10 font-bold"
                    >
                      Suporte 24/7
                    </Badge>
                  </div>

                  <div className="text-center">
                    <Button
                      style={{
                        backgroundColor: index === 0 ? "#fbbf24" : "#16a34a",
                        color: index === 0 ? "#000000" : "#ffffff",
                      }}
                      className="font-semibold px-4 py-2 text-sm w-full max-w-xs relative z-10 shadow-lg hover:opacity-90 transition-opacity"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleCardClick(casino.url)
                      }}
                    >
                      RECLAMAR
                    </Button>
                  </div>
                </div>

                {/* Tablet Layout (md to lg) */}
                <div className="hidden md:block lg:hidden">
                  <div className="flex items-center justify-between gap-0">
                    <div className="flex items-center gap-4 w-48">
                      <div className="text-center flex-1">
                        <div className="bg-transparent rounded p-2 shadow-sm mb-2 mx-auto w-fit relative z-10">
                          <img
                            src={casino.logo || "/placeholder.svg"}
                            alt={`${casino.name} logo`}
                            className="h-16 w-auto"
                          />
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${i < Math.floor(casino.rating) ? "text-yellow-500 fill-current" : "text-gray-600"
                                  }`}
                              />
                            ))}
                          </div>
                          <span className="text-white font-semibold text-xl">{casino.rating.toFixed(1)}</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-center px-0 w-44">
                      <div className="mb-3">
                        <div className="flex items-center justify-center gap-1 text-red-500 mb-2">
                          <span className="text-sm font-medium">BÓNUS DE BOAS-VINDAS</span>
                        </div>
                        <div className="text-white font-bold text-lg leading-tight">{casino.bonus}</div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 w-44">
                      <Badge
                        variant="outline"
                        className="border-green-600/70 text-green-300 bg-green-950/50 text-xs px-3 py-2 text-center justify-center w-full h-8 opacity-100 relative z-10 font-bold"
                      >
                        Pagamentos Rápidos
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-blue-600/70 text-blue-300 bg-blue-950/50 text-xs px-3 py-2 text-center justify-center w-full h-8 opacity-100 relative z-10 font-bold"
                      >
                        Licenciado SRIJ
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-purple-600/70 text-purple-300 bg-purple-950/50 text-xs px-3 py-2 text-center justify-center w-full h-8 opacity-100 relative z-10 font-bold"
                      >
                        Suporte 24/7
                      </Badge>
                    </div>

                    <div className="w-28">
                      <Button
                        style={{
                          backgroundColor: index === 0 ? "#fbbf24" : "#16a34a",
                          color: index === 0 ? "#000000" : "#ffffff",
                        }}
                        className="font-semibold px-2 py-3 text-xs w-full h-auto relative z-10 shadow-lg hover:opacity-90 transition-opacity"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleCardClick(casino.url)
                        }}
                      >
                        RECLAMAR
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Desktop Layout (lg and up) */}
                <div className="hidden lg:flex">
                  <div className="flex items-center justify-between gap-0 w-full">
                    <div className="flex items-center gap-6 w-72">
                      <div className="text-center flex-1">
                        <div className="bg-transparent rounded p-3 shadow-sm mb-2 mt-3 mx-auto w-fit relative z-10">
                          <img
                            src={casino.logo || "/placeholder.svg"}
                            alt={`${casino.name} logo`}
                            className="h-24 w-auto"
                          />
                        </div>
                        <div className="flex items-center justify-center gap-3">
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-5 w-5 ${i < Math.floor(casino.rating) ? "text-yellow-500 fill-current" : "text-gray-600"
                                  }`}
                              />
                            ))}
                          </div>
                          <span className="text-white font-semibold text-2xl">{casino.rating.toFixed(1)}</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-center px-0 w-82">
                      <div className="mb-4">
                        <div className="flex items-center justify-center gap-2 text-red-500 mb-3">
                          <span className="text-xl font-medium">BÓNUS DE BOAS-VINDAS</span>
                        </div>
                        <div className="text-white font-bold shadow-xl text-3xl leading-tight">{casino.bonus}</div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 w-40">
                      <Badge
                        variant="outline"
                        className="border-green-600/70 text-green-300 bg-green-950/50 text-sm px-3 py-2 text-center justify-center w-full h-9 opacity-100 relative z-10 font-bold"
                      >
                        Pagamentos Rápidos
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-blue-600/70 text-blue-300 bg-blue-950/50 text-sm px-3 py-2 text-center justify-center w-full h-9 opacity-100 relative z-10 font-bold"
                      >
                        Licenciado SRIJ
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-purple-600/70 text-purple-300 bg-purple-950/50 text-sm px-3 py-2 text-center justify-center w-full h-9 opacity-100 relative z-10 font-bold"
                      >
                        Suporte 24/7
                      </Badge>
                    </div>

                    <div className="w-32">
                      <Button
                        style={{
                          backgroundColor: index === 0 ? "#fbbf24" : "#16a34a",
                          color: index === 0 ? "#000000" : "#ffffff",
                        }}
                        className="font-semibold px-3 py-4 text-sm w-full h-auto relative z-10 shadow-lg hover:opacity-90 transition-opacity"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleCardClick(casino.url)
                        }}
                      >
                        RECLAMAR
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">* Termos e condições aplicam-se. O jogo pode ser viciante. 18+</p>
        </div>
      </div>
    </section>
  )
}
