import luxuryHero from "@/assets/barber-luxury-hero.jpg";
import urbanHero from "@/assets/barber-urban-hero.jpg";
import scandiHero from "@/assets/barber-scandi-hero.jpg";
import cut1 from "@/assets/barber-cut-1.jpg";
import beard from "@/assets/barber-beard.jpg";
import tools from "@/assets/barber-tools.jpg";
import action from "@/assets/barber-action.jpg";

export const SHOP = {
  name: "Lucky Anchor",
  city: "Caldas da Rainha",
  country: "Portugal",
  phone: "+351 262 098 653",
  rating: 4.9,
  reviewsCount: 218,
  bookingUrl: "https://luckyanchor.setmore.com",
  address: "Rua de Camões 12, 2500-148 Caldas da Rainha",
  hours: [
    { d: "Seg – Sex", h: "09:00 — 19:30" },
    { d: "Sábado", h: "09:00 — 18:00" },
    { d: "Domingo", h: "Encerrado" },
  ],
};

export const SERVICES = [
  { name: "Corte Clássico", price: "12€", time: "30 min", desc: "Corte tradicional com tesoura e máquina, lavagem incluída." },
  { name: "Corte + Barba", price: "20€", time: "50 min", desc: "Corte completo com modelação e contorno de barba a navalha." },
  { name: "Barba Premium", price: "12€", time: "30 min", desc: "Barba a quente com toalha, óleos e acabamento a navalha." },
  { name: "Styling & Color", price: "25€", time: "60 min", desc: "Corte, styling e coloração para um look totalmente novo." },
  { name: "Pacote Lucky", price: "30€", time: "75 min", desc: "Corte + barba + lavagem + bebida. A experiência completa." },
  { name: "Kids Cut", price: "9€", time: "25 min", desc: "Cortes para os mais pequenos, sem stress e com paciência." },
];

export const REVIEWS = [
  { name: "Tiago M.", text: "Melhor barbearia de Caldas. Ambiente top, música boa e cortes sempre impecáveis.", stars: 5 },
  { name: "Ricardo S.", text: "Profissionalismo a 100%. Sai sempre com o corte que pedi e mais um bom papo.", stars: 5 },
  { name: "André P.", text: "Já experimentei várias e nenhuma me convenceu como a Lucky Anchor. Recomendo a olhos fechados.", stars: 5 },
  { name: "João V.", text: "Atenção ao detalhe brutal. Marquei online em 30 segundos, super prático.", stars: 5 },
  { name: "Bruno C.", text: "Corte moderno, barba a navalha quente, café enquanto espero. Vale cada cêntimo.", stars: 5 },
];

export const IMAGES = {
  luxuryHero, urbanHero, scandiHero, cut1, beard, tools, action,
};