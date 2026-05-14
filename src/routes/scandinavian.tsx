import { createFileRoute } from "@tanstack/react-router";
import { SHOP, SERVICES, REVIEWS, IMAGES } from "@/lib/shop";
import { StyleSwitcher } from "@/components/StyleSwitcher";
import { ArrowUpRight, Calendar } from "lucide-react";

export const Route = createFileRoute("/scandinavian")({
  head: () => ({
    meta: [
      { title: "Lucky Anchor — Scandinavian" },
      { name: "description", content: "Direção visual Scandinavian para Lucky Anchor Barbershop." },
    ],
  }),
  component: ScandiPage,
});

function ScandiPage() {
  return (
    <div className="theme-scandi min-h-screen">
      <StyleSwitcher active="scandinavian" accent="#0a0a0a" />

      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-40 backdrop-blur bg-white/80 border-b" style={{ borderColor: "var(--line)" }}>
        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
          <div className="display text-xl font-medium tracking-tight">Lucky Anchor</div>
          <div className="hidden md:flex gap-10 text-sm" style={{ color: "var(--muted)" }}>
            <a href="#sobre" className="underline-link hover:text-black transition">Sobre</a>
            <a href="#servicos" className="underline-link hover:text-black transition">Serviços</a>
            <a href="#galeria" className="underline-link hover:text-black transition">Galeria</a>
            <a href="#contacto" className="underline-link hover:text-black transition">Contacto</a>
          </div>
          <a href="#booking" className="text-sm bg-black text-white px-5 py-2.5 hover:bg-neutral-800 transition">Marcar →</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-12 gap-12 items-end mb-16">
            <div className="md:col-span-7 fade-up">
              <div className="text-xs uppercase tracking-[0.3em] mb-8" style={{ color: "var(--muted)" }}>
                Barbearia · Caldas da Rainha · Est. 2019
              </div>
              <h1 className="display text-6xl md:text-8xl lg:text-9xl leading-[0.95]">
                Cortes feitos<br />
                <span style={{ fontStyle: "italic", fontFamily: "serif" }}>com calma.</span>
              </h1>
            </div>
            <div className="md:col-span-5 fade-up delay-2">
              <p className="text-lg leading-relaxed mb-8" style={{ color: "var(--muted)" }}>
                Espaço minimalista. Atenção máxima. A Lucky Anchor é uma barbearia onde o tempo
                desacelera para que o teu corte seja exactamente como deve ser.
              </p>
              <div className="flex gap-4">
                <a href="#booking" className="bg-black text-white px-6 py-3 text-sm hover:bg-neutral-800 transition flex items-center gap-2">
                  Marcar Corte <ArrowUpRight className="w-4 h-4" />
                </a>
                <a href="#servicos" className="border border-black px-6 py-3 text-sm hover:bg-black hover:text-white transition">Serviços</a>
              </div>
            </div>
          </div>

          <div className="aspect-[21/9] overflow-hidden fade-up delay-3">
            <img src={IMAGES.scandiHero} alt="" className="w-full h-full object-cover" />
          </div>

          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t" style={{ borderColor: "var(--line)" }}>
            <div>
              <div className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--muted)" }}>Avaliação</div>
              <div className="display text-4xl font-light">{SHOP.rating} <span className="text-base" style={{color:"var(--muted)"}}>/ 5</span></div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--muted)" }}>Reviews Google</div>
              <div className="display text-4xl font-light">{SHOP.reviewsCount}</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--muted)" }}>Cortes feitos</div>
              <div className="display text-4xl font-light">14 000+</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-32 border-t" style={{ borderColor: "var(--line)" }}>
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-[0.3em]" style={{ color: "var(--muted)" }}>01 — Sobre</div>
          </div>
          <div className="md:col-span-8">
            <h2 className="display text-5xl md:text-6xl mb-12 leading-tight">
              Menos é mais.<br />
              Mas o <span style={{ fontStyle: "italic", fontFamily: "serif" }}>detalhe</span> é tudo.
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-lg leading-relaxed" style={{ color: "var(--muted)" }}>
              <p>
                Acreditamos que um bom corte começa muito antes da máquina ligar.
                Começa na conversa, no perceber o que queres, no respeito pelo teu tempo.
              </p>
              <p>
                Trabalhamos com poucas cadeiras, por opção. Para que cada cliente tenha
                o espaço, a luz e a calma que o seu corte merece.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-32 border-t" style={{ borderColor: "var(--line)" }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-12 gap-12 mb-16">
            <div className="md:col-span-4">
              <div className="text-xs uppercase tracking-[0.3em]" style={{ color: "var(--muted)" }}>02 — Serviços</div>
            </div>
            <div className="md:col-span-8">
              <h2 className="display text-5xl md:text-6xl">A nossa carta.</h2>
            </div>
          </div>
          <div className="border-t" style={{ borderColor: "var(--line)" }}>
            {SERVICES.map((s, i) => (
              <div key={s.name} className="border-b py-8 grid md:grid-cols-12 gap-6 items-baseline group hover:bg-black hover:text-white transition px-4 -mx-4 cursor-pointer" style={{ borderColor: "var(--line)" }}>
                <div className="md:col-span-1 text-sm" style={{ color: "var(--muted)" }}>0{i+1}</div>
                <div className="md:col-span-4 display text-3xl">{s.name}</div>
                <div className="md:col-span-5 text-sm" style={{ color: "var(--muted)" }}>{s.desc}</div>
                <div className="md:col-span-1 text-sm" style={{ color: "var(--muted)" }}>{s.time}</div>
                <div className="md:col-span-1 display text-3xl text-right">{s.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section id="galeria" className="py-32 border-t" style={{ borderColor: "var(--line)" }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-12 gap-12 mb-16">
            <div className="md:col-span-4">
              <div className="text-xs uppercase tracking-[0.3em]" style={{ color: "var(--muted)" }}>03 — Trabalho</div>
            </div>
            <div className="md:col-span-8">
              <h2 className="display text-5xl md:text-6xl">Selecção.</h2>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {[IMAGES.cut1, IMAGES.beard, IMAGES.action, IMAGES.scandiHero, IMAGES.tools, IMAGES.luxuryHero].map((src, i) => (
              <div key={i} className={`overflow-hidden ${i===0||i===4 ? "aspect-[3/4]" : "aspect-square"}`}>
                <img src={src} alt="" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-32 border-t" style={{ borderColor: "var(--line)" }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-12 gap-12 mb-16">
            <div className="md:col-span-4">
              <div className="text-xs uppercase tracking-[0.3em]" style={{ color: "var(--muted)" }}>04 — Palavras</div>
            </div>
            <div className="md:col-span-8">
              <h2 className="display text-5xl md:text-6xl">{SHOP.rating} <span style={{ fontFamily: "serif", fontStyle:"italic" }}>★</span> em {SHOP.reviewsCount} reviews.</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {REVIEWS.slice(0,3).map((r) => (
              <div key={r.name}>
                <div className="display text-2xl mb-6 leading-snug">"{r.text}"</div>
                <div className="text-sm uppercase tracking-widest" style={{ color: "var(--muted)" }}>— {r.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="booking" className="py-32 border-t bg-black text-white" style={{ borderColor: "var(--line)" }}>
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6">
            <div className="text-xs uppercase tracking-[0.3em] text-white/50 mb-6">05 — Marcar</div>
            <h2 className="display text-5xl md:text-7xl mb-8">A tua hora,<br /><span style={{fontFamily:"serif", fontStyle:"italic"}}>sem esperas</span>.</h2>
            <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-md">
              Marca em segundos. Recebe confirmação imediata. Tão simples como devia ser.
            </p>
            <a href={SHOP.bookingUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 hover:bg-neutral-200 transition">
              <Calendar className="w-4 h-4" /> Marcar online
            </a>
          </div>
          {/* Booking mockup minimal */}
          <div className="md:col-span-6 bg-white text-black p-10">
            <div className="text-xs uppercase tracking-widest mb-8" style={{ color: "var(--muted)" }}>Marcação · 2 / 3</div>
            <div className="display text-3xl mb-2">Pacote Lucky</div>
            <div className="text-sm mb-8" style={{ color: "var(--muted)" }}>30€ · 75 min</div>

            <div className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--muted)" }}>Quinta, 14 Mai</div>
            <div className="grid grid-cols-4 gap-2 mb-8">
              {["10:00","11:30","14:00","15:30","17:00","18:30","19:00","19:30"].map((t, i) => (
                <div key={t} className={`py-3 text-center text-sm border ${i===2 ? "bg-black text-white border-black" : "border-neutral-200 hover:border-black cursor-pointer transition"}`}>{t}</div>
              ))}
            </div>
            <button className="w-full bg-black text-white py-4">Continuar</button>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-32 border-t" style={{ borderColor: "var(--line)" }}>
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-[0.3em] mb-8" style={{ color: "var(--muted)" }}>06 — Contacto</div>
            <h2 className="display text-5xl mb-12">Encontra-nos<br /><span style={{fontFamily:"serif",fontStyle:"italic"}}>aqui</span>.</h2>
            <div className="space-y-6">
              <div>
                <div className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--muted)" }}>Morada</div>
                <div>{SHOP.address}</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--muted)" }}>Telefone</div>
                <a href={`tel:${SHOP.phone}`} className="underline-link">{SHOP.phone}</a>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--muted)" }}>Horário</div>
                {SHOP.hours.map((h) => (
                  <div key={h.d} className="flex justify-between py-1.5 border-b" style={{ borderColor: "var(--line)" }}>
                    <span style={{ color: "var(--muted)" }}>{h.d}</span><span>{h.h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="md:col-span-8 aspect-[4/3] overflow-hidden border" style={{ borderColor: "var(--line)" }}>
            <iframe title="map" className="w-full h-full grayscale"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-9.146%2C39.395%2C-9.124%2C39.408&layer=mapnik&marker=39.4023%2C-9.1357" />
          </div>
        </div>
      </section>

      <footer className="py-12 border-t" style={{ borderColor: "var(--line)" }}>
        <div className="max-w-7xl mx-auto px-8 flex justify-between text-xs" style={{ color: "var(--muted)" }}>
          <div>© {new Date().getFullYear()} Lucky Anchor</div>
          <div>Caldas da Rainha — Portugal</div>
        </div>
      </footer>
    </div>
  );
}