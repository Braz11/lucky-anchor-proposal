import { createFileRoute } from "@tanstack/react-router";
import { SHOP, SERVICES, REVIEWS, IMAGES } from "@/lib/shop";
import { StyleSwitcher } from "@/components/StyleSwitcher";
import { Star, MapPin, Phone, Calendar, Instagram, Zap, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/urban")({
  head: () => ({
    meta: [
      { title: "Lucky Anchor — Urban Street" },
      { name: "description", content: "Direção visual Urban Street para Lucky Anchor Barbershop." },
    ],
  }),
  component: UrbanPage,
});

function UrbanPage() {
  return (
    <div className="theme-urban min-h-screen">
      <StyleSwitcher active="urban" accent="#ff2e88" />

      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-md" style={{ background: "rgba(13,6,18,0.7)", borderBottom: "1px solid rgba(255,46,136,0.2)" }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="display text-3xl">LUCKY <span className="neon-pink neon-glow">ANCHOR</span></div>
          <div className="hidden md:flex gap-8 mono text-xs uppercase">
            <a href="#sobre" className="hover:neon-pink transition">/sobre</a>
            <a href="#servicos" className="hover:neon-pink transition">/services</a>
            <a href="#galeria" className="hover:neon-pink transition">/work</a>
            <a href="#contacto" className="hover:neon-pink transition">/contact</a>
          </div>
          <a href="#booking" className="neon-btn px-5 py-2.5 mono text-xs uppercase">Book →</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center grid-bg overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.urbanHero} alt="" className="w-full h-full object-cover opacity-50 mix-blend-luminosity" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(13,6,18,0.7) 0%, rgba(13,6,18,0.4) 50%, rgba(13,6,18,0.9) 100%)" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-32 w-full">
          <div className="mono text-xs uppercase neon-pink mb-6 fade-up flex items-center gap-2">
            <span className="w-8 h-px bg-current" /> Caldas da Rainha · 2026
          </div>
          <h1 className="display text-7xl md:text-[10rem] lg:text-[14rem] leading-[0.85] mb-8 fade-up delay-1">
            FRESH <br />
            <span className="neon-pink neon-glow">CUTS.</span>
            <br />
            <span className="neon-cyan neon-glow-cyan">REAL</span> VIBES.
          </h1>
          <p className="max-w-xl text-white/70 text-lg mb-10 fade-up delay-2">
            Barbearia, sound system, atitude. A casa onde o teu corte sai como tu queres — não como o livro manda.
          </p>
          <div className="flex flex-wrap gap-4 fade-up delay-3">
            <a href="#booking" className="neon-btn px-8 py-4 mono uppercase text-sm font-bold">⚡ Book your slot</a>
            <a href="#galeria" className="border-2 px-8 py-4 mono uppercase text-sm hover:bg-white/5 transition" style={{ borderColor: "var(--neon-cyan)", color: "var(--neon-cyan)" }}>See the work</a>
          </div>

          <div className="mt-20 grid grid-cols-3 max-w-2xl gap-6">
            <div><div className="display text-5xl gradient-neon">4.9★</div><div className="mono text-xs text-white/50 mt-2">GOOGLE</div></div>
            <div><div className="display text-5xl gradient-neon">218</div><div className="mono text-xs text-white/50 mt-2">REVIEWS</div></div>
            <div><div className="display text-5xl gradient-neon">14K+</div><div className="mono text-xs text-white/50 mt-2">CUTS DONE</div></div>
          </div>
        </div>

        <div className="absolute bottom-6 right-6 mono text-xs text-white/40 hidden md:block">
          [SCROLL] ↓
        </div>
      </section>

      {/* Marquee */}
      <div className="border-y py-4 overflow-hidden" style={{ borderColor: "rgba(255,46,136,0.2)", background: "var(--neon-pink)" }}>
        <div className="marquee">
          <div className="marquee-track display text-3xl text-black whitespace-nowrap">
            {Array.from({length:2}).map((_, k) => (
              <span key={k} className="flex gap-8">
                <span>FADES</span><span>★</span><span>BARBA</span><span>★</span><span>STYLING</span><span>★</span>
                <span>COLOR</span><span>★</span><span>KIDS</span><span>★</span><span>WALK-INS</span><span>★</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Sobre */}
      <section id="sobre" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <div className="mono text-xs uppercase neon-cyan mb-6">/01 — about us</div>
            <h2 className="display text-6xl md:text-8xl mb-8 leading-[0.9]">
              NÃO É SÓ UM <span className="neon-pink neon-glow">CORTE</span>.<br />
              É UM <span className="neon-cyan neon-glow-cyan">STATEMENT</span>.
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              Crescemos na rua, na música, no skate e na cultura barber moderna.
              A Lucky Anchor é o resultado disso tudo: profissional ao detalhe, descontraída no ambiente.
            </p>
            <p className="text-white/70 text-lg leading-relaxed">
              Vens, sentas, pões a tua playlist a tocar, e sais a sentir-te outra pessoa. Simples assim.
            </p>
          </div>
          <div className="md:col-span-5 relative">
            <div className="aspect-[3/4] panel overflow-hidden">
              <img src={IMAGES.urbanHero} alt="" loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 panel p-6 max-w-[200px]" style={{ background: "var(--neon-pink)", color: "black", border: "none" }}>
              <div className="display text-4xl">+50</div>
              <div className="mono text-xs uppercase">novos clientes / mês</div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-32" style={{ background: "var(--bg-elev)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <div className="mono text-xs uppercase neon-pink mb-6">/02 — services & pricing</div>
            <h2 className="display text-6xl md:text-8xl">PICK <span className="gradient-neon">YOUR</span> CUT.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {SERVICES.map((s, i) => (
              <div key={s.name} className="panel p-8 hover:border-pink-500 transition group cursor-pointer relative overflow-hidden" style={{ borderColor: i%2 === 0 ? "var(--neon-pink)" : "var(--neon-cyan)" }}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="mono text-xs text-white/40 mb-2">[ 0{i+1} ]</div>
                    <h3 className="display text-4xl">{s.name}</h3>
                  </div>
                  <ArrowUpRight className="w-6 h-6 group-hover:rotate-45 transition" style={{ color: i%2===0 ? "var(--neon-pink)" : "var(--neon-cyan)" }} />
                </div>
                <p className="text-white/60 mb-6">{s.desc}</p>
                <div className="flex justify-between items-baseline mono text-sm">
                  <span className="text-white/50 uppercase">{s.time}</span>
                  <span className="display text-3xl" style={{ color: i%2===0 ? "var(--neon-pink)" : "var(--neon-cyan)" }}>{s.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section id="galeria" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
            <div>
              <div className="mono text-xs uppercase neon-cyan mb-6">/03 — the work</div>
              <h2 className="display text-6xl md:text-8xl">RECENT <span className="gradient-neon">DROPS</span>.</h2>
            </div>
            <a href="#" className="mono text-sm uppercase neon-pink hover:underline flex items-center gap-2">@luckyanchor.barbershop <Instagram className="w-4 h-4" /></a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[IMAGES.cut1, IMAGES.urbanHero, IMAGES.beard, IMAGES.action, IMAGES.tools, IMAGES.luxuryHero].map((src, i) => (
              <div key={i} className="aspect-square overflow-hidden relative group panel">
                <img src={src} alt="" loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition flex items-end p-4" style={{ background: "linear-gradient(to top, rgba(255,46,136,0.4), transparent)" }}>
                  <span className="mono text-xs text-white">#fade #{i+1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-32 relative grid-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center">
            <div className="mono text-xs uppercase neon-pink mb-6">/04 — voices</div>
            <h2 className="display text-6xl md:text-8xl">THE <span className="gradient-neon">CREW</span> SAYS.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.slice(0,3).map((r, i) => (
              <div key={r.name} className="panel p-8 relative" style={{ borderColor: i===1 ? "var(--neon-cyan)" : "var(--neon-pink)" }}>
                <Zap className="w-6 h-6 mb-4" style={{ color: i===1 ? "var(--neon-cyan)" : "var(--neon-pink)" }} />
                <p className="text-white/80 leading-relaxed mb-6">"{r.text}"</p>
                <div className="flex justify-between items-center mono text-xs uppercase">
                  <span>— {r.name}</span>
                  <span className="neon-pink">★★★★★</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="booking" className="py-32" style={{ background: "var(--bg-elev)" }}>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mono text-xs uppercase neon-cyan mb-6">/05 — booking</div>
            <h2 className="display text-6xl md:text-7xl mb-8">SLOT IT.<br /><span className="gradient-neon">FAST.</span></h2>
            <p className="text-white/70 text-lg mb-10">Sem chamadas. Sem espera. 30 segundos no telemóvel e tens lugar marcado.</p>
            <a href={SHOP.bookingUrl} target="_blank" rel="noreferrer" className="neon-btn px-8 py-4 mono uppercase text-sm font-bold inline-flex items-center gap-3">
              <Calendar className="w-4 h-4" /> Book online
            </a>
          </div>
          {/* Mobile mockup */}
          <div className="flex justify-center">
            <div className="w-[280px] h-[560px] rounded-[40px] p-3" style={{ background: "linear-gradient(135deg, var(--neon-pink), var(--neon-cyan))" }}>
              <div className="w-full h-full rounded-[32px] p-5 flex flex-col" style={{ background: "var(--bg)" }}>
                <div className="text-center mono text-xs text-white/40 mb-4">9:41</div>
                <div className="display text-2xl mb-1">LUCKY <span className="neon-pink">ANCHOR</span></div>
                <div className="mono text-xs text-white/50 mb-6">Pick a time</div>
                <div className="grid grid-cols-4 gap-2 mb-4">
                  {[14,15,16,17].map((d, i) => (
                    <div key={d} className={`text-center py-2 rounded text-xs ${i===1?"neon-btn":"border border-white/10"}`}>
                      <div className="display text-lg">{d}</div>
                    </div>
                  ))}
                </div>
                <div className="space-y-2 mb-4">
                  {["10:00","11:30","14:00 ✓","15:30","17:00"].map((t,i) => (
                    <div key={t} className={`text-center py-2 rounded text-xs ${i===2?"text-black font-bold":""}`} style={i===2?{background:"var(--neon-cyan)"}:{border:"1px solid rgba(255,255,255,0.1)"}}>{t}</div>
                  ))}
                </div>
                <button className="neon-btn py-3 mono text-xs uppercase font-bold mt-auto">Confirm →</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contacto" className="py-24 border-t" style={{ borderColor: "rgba(255,46,136,0.2)" }}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <div className="mono text-xs uppercase neon-cyan mb-6">/06 — find us</div>
            <h2 className="display text-6xl mb-8">PASSA <span className="neon-pink">CÁ</span>.</h2>
            <div className="space-y-4 mono">
              <div className="flex gap-3 items-start"><MapPin className="w-5 h-5 neon-pink shrink-0 mt-1" /><span>{SHOP.address}</span></div>
              <div className="flex gap-3 items-start"><Phone className="w-5 h-5 neon-pink shrink-0 mt-1" /><a href={`tel:${SHOP.phone}`} className="hover:neon-pink transition">{SHOP.phone}</a></div>
            </div>
          </div>
          <div className="aspect-video panel overflow-hidden">
            <iframe title="map" className="w-full h-full" style={{ filter: "invert(1) hue-rotate(180deg) saturate(0.7)" }}
              src="https://www.openstreetmap.org/export/embed.html?bbox=-9.146%2C39.395%2C-9.124%2C39.408&layer=mapnik&marker=39.4023%2C-9.1357" />
          </div>
        </div>
      </section>

      <footer className="py-8 text-center mono text-xs uppercase text-white/40 border-t" style={{ borderColor: "rgba(255,46,136,0.2)" }}>
        © {new Date().getFullYear()} Lucky Anchor // Made with <span className="neon-pink">♥</span> in Caldas
      </footer>
    </div>
  );
}