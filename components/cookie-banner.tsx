"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

interface CookieBannerProps {
  onAccept: () => void
}

export default function CookieBanner({ onAccept }: CookieBannerProps) {
  const handleReject = () => {
    window.location.href = "/cookie-policy"
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <Card className="bg-gray-900 border-yellow-500">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-white font-bold mb-2">🍪 Utilizamos Cookies</h3>
              <p className="text-gray-300 text-sm">
                Este site utiliza cookies para melhorar a sua experiência de navegação e para fins analíticos. Ao
                continuar a navegar, concorda com a nossa{" "}
                <Link href="/cookie-policy" className="text-yellow-400 hover:underline">
                  Política de Cookies
                </Link>{" "}
                e{" "}
                <Link href="/privacy-policy" className="text-yellow-400 hover:underline">
                  Política de Privacidade
                </Link>
                .
              </p>
            </div>
            <div className="flex gap-3">
              <Button
                onClick={handleReject}
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
              >
                Rejeitar
              </Button>
              <Button onClick={onAccept} className="bg-green-600 hover:bg-green-700 text-white">
                Aceitar Cookies
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
