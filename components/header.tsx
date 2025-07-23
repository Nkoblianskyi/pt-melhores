import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="bg-black h-[60px] px-4 border-b border-gray-800 flex items-center">
      <div className="container mx-auto flex items-center justify-center">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="PT Melhores Casinos" width={28} height={28} className="w-6 h-6 sm:w-7 sm:h-7" />
          <span className="font-bold text-sm sm:text-base">
            <span className="text-green-500">PT</span> <span className="text-red-500">Melhores</span>{" "}
            <span className="text-yellow-500">Casinos</span>
          </span>
        </Link>
      </div>
    </header>
  )
}
