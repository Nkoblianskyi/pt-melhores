export interface BettingSite {
  id: number
  name: string
  logo: string
  bonus: string
  url: string
  rating: number
  stars: number
  reviews: number
  badges: string[]
  claimed: number
  isTopRating?: boolean
  isTopLine?: boolean
  isPopular?: boolean
  isTrending?: boolean
}

export const bettingSites: BettingSite[] = [
  {
    id: 1,
    name: "Betclic",
    logo: "/betclic.svg",
    bonus: "Deposita 10€ e joga com 50€",
    url: "https://www.betclic.pt/",
    rating: 4.9,
    stars: 5,
    reviews: 3241,
    badges: ["MELHOR AVALIAÇÃO", "LINHA SUPERIOR"],
    claimed: 2847,
    isTopRating: true,
    isTopLine: true,
  },
  {
    id: 2,
    name: "Luckia",
    logo: "/luckia.svg",
    bonus: "5€ Registo + Até 500€ Bónus",
    url: "https://www.luckia.pt/",
    rating: 4.7,
    stars: 5,
    reviews: 1923,
    badges: ["POPULAR", "TENDÊNCIA"],
    claimed: 1856,
    isPopular: true,
    isTrending: true,
  },
  {
    id: 3,
    name: "Casino Portugal",
    logo: "/brand-ccasino.svg",
    bonus: "20 Jogadas Grátis",
    url: "https://www.casinoportugal.pt/",
    rating: 4.6,
    stars: 5,
    reviews: 2156,
    badges: ["TENDÊNCIA"],
    claimed: 1432,
    isTrending: true,
  },
  {
    id: 4,
    name: "Lebull",
    logo: "/lebull.svg",
    bonus: "25 FreeSpins no Registo",
    url: "https://www.lebull.pt/",
    rating: 4.5,
    stars: 4,
    reviews: 1687,
    badges: ["POPULAR"],
    claimed: 987,
    isPopular: true,
  },
  {
    id: 5,
    name: "Solverde",
    logo: "/solverde.svg",
    bonus: "100% Até 20€",
    url: "https://www.solverde.pt/",
    rating: 4.4,
    stars: 4,
    reviews: 1234,
    badges: [],
    claimed: 756,
  },
]
