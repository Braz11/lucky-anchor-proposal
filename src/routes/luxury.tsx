import { createFileRoute } from "@tanstack/react-router";
import { SHOP, SERVICES, REVIEWS, IMAGES } from "@/lib/shop";
import { StyleSwitcher } from "@/components/StyleSwitcher";
import { Star, MapPin, Phone, Clock, Calendar, Instagram, Facebook, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/luxury")({
  head: () => ({
    meta: [
      { title: "Lucky Anchor — Luxury Dark" },
      { name: "description", content: "Direção visual Luxury Dark para Lucky Anchor Barbershop." },
    ],
  }),
  component: LuxuryPage,
});

function LuxuryPage() {
  return (
    <div className="theme-luxury min-h-screen">
      <StyleSwitcher active="luxury" accent="#c8a96a" />

      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-black/60 border-b" style={{ borderColor: "rgba(200,169,106,0.15)" }}>
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
          <div className="display text-2xl gold tracking-wider">Lucky Anchor<span className="text-white/40">.</span></div>
          <div className="hidden md:flex gap-10 text-xs uppercase tracking-[0.25em] text-white/70">
            <a href="#sobre" className="hover:gold transition">Sobre</a>
            <a href="#servicos" className="hover:gold transition">Serviços</a>
            <a href="#galeria" className="hover:gold transition">Galeria</a>
            <a href="#contacto" className="hover:gold transition">Contacto</a>
          </div>
          <a href="#booking" className="gold-bg px-5 py-2.5 text-xs uppercase tracking-widest font-semibold hover:opacity-90 transition">Marcar</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-end overflow-hidden grain">
        <div className="absolute inset-0">
          <img src={IMAGES.luxuryHero} alt="" className="w-full h-full object-cover kenburns" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
        </div>
        <div className="relative max-w-7xl mx-auto px-8 pb-24 pt-40 w-full">
          <p className="gold uppercase tracking-[0.4em] text-xs mb-6 fade-up">Caldas da Rainha · Est. 2019</p>
          <h1 className="display text-6xl md:text-8xl lg:text-[10rem] leading-[0.9] mb-8 fade-up delay-1">
            Cortes que <em className="gold">contam</em><br /> uma história.
          </h1>
          <p className="max-w-xl text-white/70 text-lg leading-relaxed mb-10 fade-up delay-2">
            Há mais numa cadeira de barbeiro do que um corte de cabelo. Há ritual, conversa, e o orgulho de sair como o melhor de ti.
          </p>
          <div className="flex flex-wrap gap-4 fade-up delay-3">
            <a href="#booking" className="gold-bg px-8 py-4 font-semibold uppercase tracking-widest text-xs hover:opacity-90 transition flex items-center gap-3">
              Marcar Corte <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#servicos" className="border gold-border gold px-8 py-4 uppercase tracking-widest text-xs hover:bg-white/5 transition">Ver Serviços</a>
          </div>

          <div className="absolute bottom-10 right-8 hidden md:flex items-center gap-3 panel px-5 py-3">
            <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current gold" />)}</div>
            <div className="text-sm">
              <span className="font-semibold gold">{SHOP.rating}</span>
              <span className="text-white/50"> · {SHOP.reviewsCount} reviews Google</span>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="border-y" style={{ borderColor: "rgba(200,169,106,0.15)" }}>
        <div className="marquee py-6">
          <div className="marquee-track display text-3xl whitespace-nowrap">
            {Array.from({ length: 2 }).map((_, k) => (
              <span key={k} className="flex gap-12">
                <span>Corte</span><span className="gold">✦</span>
                <span>Barba a navalha</span><span className="gold">✦</span>
                <span>Styling</span><span className="gold">✦</span>
                <span>Pacote Lucky</span><span className="gold">✦</span>
                <span>Kids</span><span className="gold">✦</span>
                <span>Coloração</span><span className="gold">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Sobre */}
      <section id="sobre" className="py-32">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-20 items-center">
          <div>
            <p className="gold uppercase tracking-[0.4em] text-xs mb-6">A Casa</p>
            <h2 className="display text-5xl md:text-6xl mb-8">Uma barbearia<br /> com <em className="gold">alma</em>.</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              No coração de Caldas da Rainha, a Lucky Anchor nasceu para devolver
              ao corte de cabelo aquilo que o tempo lhe tinha tirado: ritual, atenção e ambiente.
            </p>
            <p className="text-white/70 leading-relaxed mb-10">
              Cadeiras de couro envelhecido, espelhos com história, vinis a tocar baixinho —
              e profissionais que tratam cada cliente como se fosse o único do dia.
            </p>
            <div className="grid grid-cols-3 gap-8 pt-10 border-t" style={{ borderColor: "rgba(200,169,106,0.15)" }}>
              <div><div className="display text-4xl gold">7</div><div className="text-xs uppercase tracking-widest text-white/50 mt-2">Anos</div></div>
              <div><div className="display text-4xl gold">14k+</div><div className="text-xs uppercase tracking-widest text-white/50 mt-2">Cortes</div></div>
              <div><div className="display text-4xl gold">4.9★</div><div className="text-xs uppercase tracking-widest text-white/50 mt-2">Google</div></div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <img src={IMAGES.tools} alt="" loading="lazy" className="aspect-square object-cover" />
            <img src={IMAGES.beard} alt="" loading="lazy" className="aspect-square object-cover mt-12" />
            <img src={IMAGES.action} alt="" loading="lazy" className="aspect-square object-cover col-span-2" />
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-32 bg-black grain">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
            <div>
              <p className="gold uppercase tracking-[0.4em] text-xs mb-6">Carta de Serviços</p>
              <h2 className="display text-5xl md:text-6xl">O <em className="gold">menu</em> da casa.</h2>
            </div>
            <p className="text-white/50 max-w-md">Preços fixos. Sem surpresas. Acompanhados de um café ou uma cerveja, por conta da casa.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-white/5 panel">
            {SERVICES.map((s) => (
              <div key={s.name} className="bg-black p-10 hover:bg-neutral-950 transition group">
                <div className="flex items-baseline justify-between mb-3">
                  <h3 className="display text-3xl">{s.name}</h3>
                  <span className="display text-3xl gold">{s.price}</span>
                </div>
                <p className="text-xs uppercase tracking-widest text-white/40 mb-4">{s.time}</p>
                <p className="text-white/60 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section id="galeria" className="py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <p className="gold uppercase tracking-[0.4em] text-xs mb-6">Trabalho</p>
            <h2 className="display text-5xl md:text-6xl">Cortes que <em className="gold">falam</em>.</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[IMAGES.cut1, IMAGES.beard, IMAGES.action, IMAGES.tools, IMAGES.luxuryHero, IMAGES.beard, IMAGES.cut1, IMAGES.action].map((src, i) => (
              <div key={i} className={`overflow-hidden ${i % 3 === 0 ? "row-span-2 aspect-[3/5]" : "aspect-square"} group`}>
                <img src={src} alt="" loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-32 bg-black grain">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <p className="gold uppercase tracking-[0.4em] text-xs mb-6">Quem já passou</p>
            <h2 className="display text-5xl md:text-6xl">{SHOP.rating} <span className="gold">★</span> em {SHOP.reviewsCount} reviews.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.slice(0, 3).map((r) => (
              <div key={r.name} className="panel p-10">
                <div className="flex gap-1 mb-6">{[...Array(r.stars)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current gold" />)}</div>
                <p className="text-white/80 leading-relaxed mb-6 italic">"{r.text}"</p>
                <p className="text-xs uppercase tracking-widest gold">— {r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking mockup */}
      <section id="booking" className="py-32">
        <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="gold uppercase tracking-[0.4em] text-xs mb-6">Reservar</p>
            <h2 className="display text-5xl md:text-6xl mb-8">A tua cadeira em <em className="gold">3 toques</em>.</h2>
            <p className="text-white/70 leading-relaxed mb-10">
              Reserva online em segundos. Confirmação imediata por SMS. Cancela ou remarca quando precisares.
            </p>
            <a href={SHOP.bookingUrl} target="_blank" rel="noreferrer" className="gold-bg px-8 py-4 font-semibold uppercase tracking-widest text-xs hover:opacity-90 transition inline-flex items-center gap-3">
              <Calendar className="w-4 h-4" /> Marcar agora
            </a>
          </div>
          <div className="panel p-8">
            <div className="text-xs uppercase tracking-widest gold mb-6">Marcação · passo 1 de 3</div>
            <div className="space-y-4">
              <div className="border border-white/10 p-4">
                <div className="text-xs text-white/40 uppercase tracking-widest mb-2">Serviço</div>
                <div className="display text-xl">Pacote Lucky · 30€ · 75min</div>
              </div>
              <div className="grid grid-cols-7 gap-2">
                {["S","T","Q","Q","S","S","D"].map((d, i) => (
                  <div key={i} className={`text-center py-3 text-sm ${i===2 ? "gold-bg text-black font-semibold" : "border border-white/10 text-white/70"}`}>
                    <div className="text-xs">{d}</div>
                    <div className="display text-lg mt-1">{12+i}</div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-2">
                {["10:00","11:30","14:00","15:30","17:00","18:30"].map((t, i) => (
                  <div key={t} className={`py-3 text-center text-sm ${i===3 ? "gold-bg text-black font-semibold" : "border border-white/10 hover:gold-border cursor-pointer transition"}`}>{t}</div>
                ))}
              </div>
              <button className="w-full gold-bg text-black py-4 font-semibold uppercase tracking-widest text-xs">Continuar →</button>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-32 bg-black border-t" style={{ borderColor: "rgba(200,169,106,0.15)" }}>
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <p className="gold uppercase tracking-[0.4em] text-xs mb-6">Encontra-nos</p>
            <h2 className="display text-5xl md:text-6xl mb-12">Estamos<br /><em className="gold">à tua espera</em>.</h2>
            <div className="aspect-[16/9] bg-neutral-900 panel relative overflow-hidden">
              <iframe
                title="map"
                className="w-full h-full grayscale opacity-80"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-9.146%2C39.395%2C-9.124%2C39.408&layer=mapnik&marker=39.4023%2C-9.1357"
              />
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <MapPin className="w-5 h-5 gold mb-3" />
              <div className="text-xs uppercase tracking-widest text-white/40 mb-2">Morada</div>
              <div className="text-lg">{SHOP.address}</div>
            </div>
            <div>
              <Phone className="w-5 h-5 gold mb-3" />
              <div className="text-xs uppercase tracking-widest text-white/40 mb-2">Telefone</div>
              <a href={`tel:${SHOP.phone}`} className="text-lg hover:gold transition">{SHOP.phone}</a>
            </div>
            <div>
              <Clock className="w-5 h-5 gold mb-3" />
              <div className="text-xs uppercase tracking-widest text-white/40 mb-2">Horário</div>
              {SHOP.hours.map((h) => (
                <div key={h.d} className="flex justify-between text-sm py-1 border-b border-white/5">
                  <span className="text-white/60">{h.d}</span><span>{h.h}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-4 pt-4">
              <a href="#" className="w-10 h-10 border gold-border flex items-center justify-center hover:gold-bg hover:text-black transition"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 border gold-border flex items-center justify-center hover:gold-bg hover:text-black transition"><Facebook className="w-4 h-4" /></a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t py-8 text-center text-xs uppercase tracking-widest text-white/40" style={{ borderColor: "rgba(200,169,106,0.15)" }}>
        © {new Date().getFullYear()} Lucky Anchor · Caldas da Rainha · <span className="gold">Est. 2019</span>
      </footer>
    </div>
  );
}