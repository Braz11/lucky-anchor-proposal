import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { SHOP, IMAGES } from "@/lib/shop";
import { ArrowRight, Check, Sparkles, Star, TrendingUp, Calendar, Search, Award } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Proposta de Website — Lucky Anchor Barbershop" },
      { name: "description", content: "Proposta visual de website premium para Lucky Anchor — 3 direções de design para escolheres." },
    ],
  }),
  component: Index,
});

const STYLES = [
  {
    slug: "luxury",
    name: "Luxury Dark",
    tagline: "Preto mate · Dourado · Premium",
    desc: "Inspirado em marcas luxury masculinas. Tipografia editorial, dourado quente, atmosfera cinematográfica.",
    img: IMAGES.luxuryHero,
    palette: ["#0a0a0a", "#121212", "#c8a96a", "#f5f1e8"],
    font: "Playfair Display + Inter",
  },
  {
    slug: "urban",
    name: "Urban Street",
    tagline: "Neon · Streetwear · Barber Culture",
    desc: "Energia jovem, neon suave, estética streetwear. Para captar a geração que vive nas redes sociais.",
    img: IMAGES.urbanHero,
    palette: ["#0d0612", "#ff2e88", "#00e5ff", "#c6ff3d"],
    font: "Bebas Neue + Space Grotesk",
  },
  {
    slug: "scandinavian",
    name: "Clean Scandinavian",
    tagline: "Branco · Minimalista · Editorial",
    desc: "Elegância silenciosa. Espaço a respirar, tipografia leve, foco total no trabalho do barbeiro.",
    img: IMAGES.scandiHero,
    palette: ["#fafaf7", "#ffffff", "#0a0a0a", "#6b6b66"],
    font: "Manrope Light",
  },
] as const;

const BENEFITS = [
  { icon: TrendingUp, title: "+ Clientes novos", text: "Presença online profissional capta clientes que pesquisam no Google todos os dias." },
  { icon: Calendar, title: "Reservas 24/7", text: "Sistema de booking automático que trabalha enquanto dormes." },
  { icon: Award, title: "Imagem Premium", text: "Um website forte transmite qualidade ainda antes do cliente entrar na barbearia." },
  { icon: Search, title: "Presença no Google", text: "SEO local optimizado para Caldas da Rainha — apareces quando procuram barbeiro." },
  { icon: Sparkles, title: "Diferenciação", text: "A maior parte das barbearias da zona não tem site real. Sai à frente da concorrência." },
  { icon: Star, title: "Confiança imediata", text: "Reviews, fotos reais e contacto claro convertem visitas em marcações." },
];

function Index() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100" style={{ fontFamily: "Inter, sans-serif" }}>
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-neutral-950/70 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-semibold tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            Proposta · Lucky Anchor
          </div>
          <div className="hidden md:flex gap-8 text-sm text-neutral-400">
            <a href="#styles" className="hover:text-white transition">Estilos</a>
            <a href="#benefits" className="hover:text-white transition">Benefícios</a>
            <a href="#offer" className="hover:text-white transition">Proposta</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.luxuryHero} alt="" className="w-full h-full object-cover opacity-40 kenburns" />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/60 via-neutral-950/70 to-neutral-950" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-32 w-full">
          <div className="max-w-3xl fade-up">
            <p className="text-amber-400 uppercase tracking-[0.3em] text-xs mb-6">Proposta de Website Premium · 2026</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] mb-8" style={{ fontFamily: "Playfair Display, serif" }}>
              O website que <em className="text-amber-400">Lucky Anchor</em> merece.
            </h1>
            <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mb-10 leading-relaxed">
              Três direções visuais. Um objectivo: transformar a tua presença online numa máquina silenciosa de marcações,
              credibilidade e novos clientes em Caldas da Rainha.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#styles" className="group inline-flex items-center gap-3 bg-amber-400 text-neutral-950 px-8 py-4 font-semibold tracking-wide hover:bg-amber-300 transition">
                Ver as 3 propostas
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </a>
              <a href="#offer" className="inline-flex items-center gap-3 border border-white/20 px-8 py-4 hover:bg-white/5 transition">
                Proposta de lançamento
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-8 mt-16 text-sm text-neutral-400">
              <div className="flex items-center gap-2">
                <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}</div>
                <span><b className="text-white">{SHOP.rating}</b> · {SHOP.reviewsCount} reviews Google</span>
              </div>
              <div>📍 {SHOP.city}</div>
              <div>📞 {SHOP.phone}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro / context */}
      <section className="py-32 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-amber-400 uppercase tracking-[0.3em] text-xs mb-6">Contexto</p>
            <h2 className="text-4xl md:text-5xl font-light mb-8" style={{ fontFamily: "Playfair Display, serif" }}>
              Hoje a tua marca vive numa página de booking.
            </h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              <span className="text-white">luckyanchor.setmore.com</span> resolve a marcação — mas não conta a tua história,
              não mostra o teu espaço, e não converte quem ainda não te conhece.
            </p>
            <p className="text-neutral-400 leading-relaxed">
              Esta proposta apresenta <span className="text-white">três direcções de design completas</span>,
              cada uma com hero próprio, paleta única e tipografia distinta. Escolhe a que sente <em>mesmo</em> Lucky Anchor.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="aspect-[3/4] overflow-hidden">
              <img src={IMAGES.cut1} alt="" loading="lazy" className="w-full h-full object-cover hover:scale-110 transition duration-700" />
            </div>
            <div className="aspect-[3/4] overflow-hidden mt-8">
              <img src={IMAGES.beard} alt="" loading="lazy" className="w-full h-full object-cover hover:scale-110 transition duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* 3 styles */}
      <section id="styles" className="py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <p className="text-amber-400 uppercase tracking-[0.3em] text-xs mb-6">As três direcções</p>
            <h2 className="text-4xl md:text-6xl font-light mb-6" style={{ fontFamily: "Playfair Display, serif" }}>
              Escolhe o teu estilo.
            </h2>
            <p className="text-neutral-400">
              Cada um é um website real, navegável, pensado ao detalhe. Clica para o explorar como se fosse o site final.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {STYLES.map((s, i) => (
              <Link
                key={s.slug}
                to={`/${s.slug}` as "/luxury"}
                className="group block fade-up"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-neutral-900">
                  <img src={s.img} alt={s.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 bg-white/10 backdrop-blur px-3 py-1 text-xs uppercase tracking-widest">
                    Estilo {i + 1}
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex gap-2 mb-3">
                      {s.palette.map((c) => (
                        <span key={c} className="w-6 h-6 rounded-full border border-white/20" style={{ background: c }} />
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-semibold">{s.name}</h3>
                    <ArrowRight className="w-5 h-5 text-amber-400 group-hover:translate-x-1 transition" />
                  </div>
                  <p className="text-amber-400/80 text-xs uppercase tracking-widest mb-3">{s.tagline}</p>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-3">{s.desc}</p>
                  <p className="text-neutral-600 text-xs">Tipografia: {s.font}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-32 border-t border-white/5 bg-neutral-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-20">
            <p className="text-amber-400 uppercase tracking-[0.3em] text-xs mb-6">Porquê um website profissional?</p>
            <h2 className="text-4xl md:text-6xl font-light leading-tight" style={{ fontFamily: "Playfair Display, serif" }}>
              Não é um custo. É um <em className="text-amber-400">funcionário</em> que trabalha 24/7.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {BENEFITS.map((b) => (
              <div key={b.title} className="bg-neutral-950 p-10 hover:bg-neutral-900 transition group">
                <b.icon className="w-8 h-8 text-amber-400 mb-6 group-hover:scale-110 transition" />
                <h3 className="text-xl font-semibold mb-3">{b.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offer */}
      <section id="offer" className="py-32 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={IMAGES.tools} alt="" loading="lazy" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/80 to-neutral-950/40" />
        </div>
        <div className="relative max-w-5xl mx-auto px-6">
          <p className="text-amber-400 uppercase tracking-[0.3em] text-xs mb-6">Proposta especial de lançamento</p>
          <h2 className="text-4xl md:text-6xl font-light mb-8 max-w-3xl" style={{ fontFamily: "Playfair Display, serif" }}>
            Preço de <em className="text-amber-400">portfólio inicial</em> — só este projecto.
          </h2>
          <p className="text-neutral-300 text-lg max-w-2xl leading-relaxed mb-12">
            Estou a construir o meu portfólio com marcas reais e fortes da região.
            A Lucky Anchor é exactamente o tipo de cliente com que quero trabalhar — por isso este preço é
            uma fracção do valor real do projecto, em troca da possibilidade de o usar como caso de estudo.
          </p>

          <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10 mb-12">
            <div className="bg-neutral-950 p-8">
              <p className="text-xs uppercase tracking-widest text-neutral-500 mb-4">Preço normal</p>
              <p className="text-3xl font-light line-through text-neutral-500" style={{ fontFamily: "Playfair Display, serif" }}>1 200€</p>
            </div>
            <div className="bg-amber-400 text-neutral-950 p-8">
              <p className="text-xs uppercase tracking-widest text-neutral-800 mb-4">Preço lançamento</p>
              <p className="text-5xl font-semibold" style={{ fontFamily: "Playfair Display, serif" }}>490€</p>
              <p className="text-xs mt-2 opacity-70">pagamento único · sem mensalidades</p>
            </div>
            <div className="bg-neutral-950 p-8">
              <p className="text-xs uppercase tracking-widest text-neutral-500 mb-4">Manutenção opcional</p>
              <p className="text-3xl font-light" style={{ fontFamily: "Playfair Display, serif" }}>15€<span className="text-base text-neutral-500">/mês</span></p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              "Design 100% à medida na direcção escolhida",
              "Site responsivo desktop, tablet, mobile",
              "Integração com o Setmore (booking actual)",
              "SEO local optimizado para Caldas da Rainha",
              "Galeria editável + secção de reviews",
              "Domínio luckyanchor.pt configurado",
              "Velocidade A+ e métricas Google óptimas",
              "Entrega em 2 a 3 semanas",
            ].map((f) => (
              <div key={f} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-neutral-300">{f}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <a href={`tel:${SHOP.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-3 bg-amber-400 text-neutral-950 px-8 py-4 font-semibold hover:bg-amber-300 transition">
              Aceitar proposta · {SHOP.phone}
            </a>
            <a href="#styles" className="inline-flex items-center gap-3 border border-white/20 px-8 py-4 hover:bg-white/5 transition">
              Rever os estilos
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4 text-sm text-neutral-500">
          <div>Proposta confidencial preparada para <span className="text-white">Lucky Anchor</span> · Caldas da Rainha</div>
          <div>Esta proposta é uma demonstração visual e não substitui o site actual.</div>
        </div>
      </footer>
    </div>
  );
}
