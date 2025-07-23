"use client"

import { useState } from "react"
import { X, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { bettingSites } from "@/types/betting-site"

interface TopCasinoModalProps {
  onClose: () => void
}

export default function TopCasinoModal({ onClose }: TopCasinoModalProps) {
  const [claimed, setClaimed] = useState(false)

  const topCasino = bettingSites[0] // Primeiro casino da lista

  const handleClaim = () => {
    setClaimed(true)
    window.open(topCasino.url, "_blank")
    setTimeout(() => {
      onClose()
    }, 2000)
  }

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <Card className="bg-gradient-to-br from-gray-900 to-black border-2 border-yellow-500 max-w-md w-full">
        <CardContent className="p-6 relative">
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
            <X className="w-6 h-6" />
          </button>

          <div className="text-center">
            <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold mb-4 inline-block">
              CASINO #1 PORTUGAL
            </div>

            <img src={topCasino.logo || "/placeholder.svg"} alt={topCasino.name} className="h-16 w-auto mx-auto mb-4" />

            

            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
              ))}
              <span className="text-yellow-500 font-bold ml-2">{topCasino.rating}</span>
            </div>

            <div className="bg-gradient-to-r from-yellow-500/20 to-red-500/20 border-2 border-yellow-500 rounded-xl p-6 mb-6 shadow-lg">
              <div className="text-yellow-400 font-bold text-lg mb-2">OFERTA EXCLUSIVA</div>
              <div className="text-white font-bold text-2xl bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
                {topCasino.bonus}
              </div>
            </div>

            <div className="space-y-2 mb-6">
              <div className="text-gray-300 text-sm">✓ Licenciado SRIJ</div>
              <div className="text-gray-300 text-sm">✓ Jogo Responsável</div>
              <div className="text-gray-300 text-sm">✓ Suporte 24/7</div>
            </div>

            {!claimed ? (
              <Button
                onClick={handleClaim}
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg w-full text-lg shadow-xl"
              >
                RECLAMAR BÓNUS AGORA
              </Button>
            ) : (
              <div className="text-green-400 font-bold">✅ Bónus Reclamado com Sucesso!</div>
            )}

            <p className="text-gray-400 text-xs mt-4">18+ | Aplicam-se T&C | Jogue com responsabilidade</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
