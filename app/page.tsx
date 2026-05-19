"use client";

import { useState, type FormEvent, useEffect, type ComponentType } from "react";
import Script from "next/script";
import { Printer, PencilRuler, Boxes, BadgeHelp } from "lucide-react";

type Service = {
  title: string;
  text: string;
  icon: ComponentType<{ className?: string }>;
};

type ProductSection = {
  title: string;
  images: string[];
};

type Review = {
  name: string;
  text: string;
};

export default function Made3DStudioSite() {
  const services: Service[] = [
  {
    title: "Stampa 3D",
    text: "La stampa 3D è una tecnologia che crea oggetti tridimensionali a partire da un modello digitale. Il processo prevede la costruzione dell'oggetto strato per strato. Questa tecnologia è versatile e viene utilizzata in vari settori, dalla prototipazione alla medicina, permettendo di produrre oggetti personalizzati in tempi rapidi e con minori sprechi.",
    icon: Printer,
  },
  {
    title: "Progettazione",
    text: "La progettazione, permette di creare modelli digitali tridimensionali utilizzando software specializzati. Questa tecnologia consente di visualizzare e ottimizzare i progetti, rendendola ideale per prototipazione e produzione. Inoltre, offre precisione e personalizzazione, facilitando la realizzazione di idee prima della produzione fisica.",
    icon: PencilRuler,
  },
  {
    title: "Prototipazione",
    text: "La prototipazione,  è un servizio che consente di realizzare modelli fisici a partire da progetti digitali. Inizialmente, il modello 3D viene creato e successivamente stampato in tempi rapidi. Questo processo permette di testare e perfezionare il design prima della produzione finale. Inoltre, la prototipazione 3D riduce i costi e i tempi di sviluppo, rendendo il processo più efficiente e preciso.",
    icon: Boxes,
  },
  {
    title: "Consulenza",
    text: "ConsulenzaIl servizio di consulenza, offre supporto esperto nella progettazione e realizzazione di modelli tridimensionali. In primo luogo, un consulente analizza le esigenze del cliente, fornendo soluzioni personalizzate per ottimizzare il design e la produzione. Successivamente, vengono consigliati gli strumenti e le tecnologie più adatti, garantendo efficienza e qualità. Inoltre, la consulenza 3D aiuta a risolvere eventuali problematiche tecniche, facilitando il processo di realizzazione del progetto.",
    icon: BadgeHelp,
  },
];

  const productSections: ProductSection[] = [
    {
      title: "Made 3D Design",
      images: [
        "/made3ddesign/7.webp",
      ],
    },
    {
      title: "Loghi e Personalizzabili",
      images: [
        "/loghiepersonalizzabili/ALCHIMIA.webp",
      "/loghiepersonalizzabili/ANGELO.webp",
      "/loghiepersonalizzabili/BB.webp",
      "/loghiepersonalizzabili/CHU.webp",
      "/loghiepersonalizzabili/FLIX.webp",
      "/loghiepersonalizzabili/FRUTTO.webp",
      "/loghiepersonalizzabili/GLAM.webp",
      "/loghiepersonalizzabili/POP.webp",
      "/loghiepersonalizzabili/ROOM.webp",
      "/loghiepersonalizzabili/VOLLEY.webp",
      ],
    },
  ];

  const [currentSlides, setCurrentSlides] = useState<number[]>(
    productSections.map(() => 0)
  );

  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
  const handleScroll = () => {
    setShowTop(window.scrollY > 300);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

  const nextSlide = (sectionIndex: number) => {
    setCurrentSlides((prev) =>
      prev.map((value, index) => {
        if (index !== sectionIndex) return value;
        const total = productSections[sectionIndex].images.length;
        return (value + 1) % total;
      })
    );
  };

  const prevSlide = (sectionIndex: number) => {
    setCurrentSlides((prev) =>
      prev.map((value, index) => {
        if (index !== sectionIndex) return value;
        const total = productSections[sectionIndex].images.length;
        return (value - 1 + total) % total;
      })
    );
  };

  const goToSlide = (sectionIndex: number, slideIndex: number) => {
    setCurrentSlides((prev) =>
      prev.map((value, index) => (index === sectionIndex ? slideIndex : value))
    );
  };
  
const [formData, setFormData] = useState({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setFormStatus("sending");

  try {
    const response = await fetch("https://formspree.io/f/mwvapeyv", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setFormStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      setFormStatus("error");
    }
  } catch {
    setFormStatus("error");
  }
};
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 border-b border-[#ffb400] bg-black/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#home" className="text-lg font-bold tracking-wide text-[#ffb400] sm:text-xl">
            Made 3D Studio
          </a>
          <nav className="hidden gap-6 text-sm text-white/80 md:flex">
            <a href="#servizi" className="transition hover:text-[#ffb400]">Servizi</a>
            <a href="#prodotti" className="transition hover:text-[#ffb400]">Prodotti</a>
            <a href="#chi-siamo" className="transition hover:text-[#ffb400]">Chi siamo</a>
            <a href="#contatti" className="transition hover:text-[#ffb400]">Contatti</a>
          </nav>
          <a
            href="https://wa.me/3908281918152"
            className="rounded-xl border border-[#ffb400] bg-[#ffb400] px-3 py-2 text-xs font-semibold text-black transition hover:opacity-90 sm:rounded-2xl sm:px-4 sm:text-sm"
          >
            Scrivici
          </a>
        </div>
      </header>

      <main>
        <section id="home" className="relative overflow-hidden border-b border-[#ffb400]">
          <div className="absolute inset-0 bg-[radial-gradient(...)]" />
          {/* IMMAGINE DI SFONDO */}
<div
  className="absolute inset-0 bg-cover bg-center"
  style={{ backgroundImage: "url('/hero/bg.png')" }}
/>

{/* OVERLAY SCURO (IMPORTANTISSIMO) */}
<div className="absolute inset-0 bg-black/80" />

{/* EFFETTO GRADIENT SOPRA */}
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(92,76,255,0.2),transparent_30%),radial-gradient(circle_at_top_left,rgba(12,31,89,0.4),transparent_35%)]" />
          <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6">
            <div className="relative z-10 flex flex-col items-center">
              <div className="mb-4 inline-flex rounded-full border border-[#ffb400] px-3 py-1 text-xs uppercase tracking-[0.2em] text-[#ffb400]">
                Stampa 3D • Progettazione • Personalizzazione
              </div>
              <h1 className="max-w-2xl text-3xl font-extrabold leading-tight text-[#ffb400] sm:text-4xl md:text-5xl lg:text-6xl">
                Realizziamo le tue idee con la tecnologia della stampa 3D.
              </h1>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/75 sm:text-base md:text-lg">
                Soluzioni su misura per privati e aziende: dal concept alla progettazione, fino alla stampa e alla prototipazione.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <a
                  href="#contatti"
                  className="rounded-xl bg-[#ffb400] px-4 py-2.5 text-sm font-semibold text-black transition hover:opacity-90 sm:rounded-2xl sm:px-5 sm:py-3 sm:text-base"
                >
                  Richiedi un preventivo
                </a>
                <a
                  href="#prodotti"
                  className="rounded-xl border border-[#ffb400] px-4 py-2.5 text-sm font-semibold text-[#ffb400] transition hover:bg-[#ffb400] hover:text-black sm:rounded-2xl sm:px-5 sm:py-3 sm:text-base"
                >
                  Guarda i lavori
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="servizi" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
          <div className="mb-12 max-w-2xl text-center md:text-left">
            <p className="text-sm uppercase tracking-[0.25em] text-[#ffb400]">I nostri servizi</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#ffb400] md:text-4xl">
              Dall’idea al prodotto finito
            </h2>
          </div>

          <div className="grid gap-4 text-center md:grid-cols-2 md:text-left xl:grid-cols-4 lg:gap-5">
  {services.map((service) => {
    const Icon = service.icon;

    return (
      <article
        key={service.title}
        className="rounded-2xl border border-[#ffb400] bg-black p-5 shadow-xl sm:rounded-3xl sm:p-6"
      >
        <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl border border-[#ffb400] bg-[#ffb400]/10 sm:h-10 sm:w-10 sm:rounded-2xl">
          <Icon className="h-4 w-4 text-[#ffb400] sm:h-5 sm:w-5" />
        </div>
        <h3 className="text-xl font-bold text-[#ffb400]">{service.title}</h3>
        <p className="mt-3 text-sm leading-6 text-white/70">{service.text}</p>
      </article>
    );
  })}
</div>
        </section>

        <section id="prodotti" className="border-y border-[#ffb400] bg-black">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
            <div className="mb-12 flex flex-col gap-4 text-center md:flex-row md:items-end md:justify-between md:text-left">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-[#ffb400]">I nostri prodotti</p>
                <h2 className="mt-3 text-3xl font-extrabold text-[#ffb400] md:text-4xl">
                  Portfolio e personalizzazioni
                </h2>
              </div>
            </div>

            <div className="space-y-10 md:space-y-12">
              {productSections.map((section, sectionIndex) => (
                <div key={section.title}>
                  <div className="mb-5 flex flex-col items-center gap-3 text-center md:flex-row md:justify-between md:text-left">
                    <h3 className="w-full text-center text-xl font-bold text-[#ffb400] sm:text-2xl">
                      {section.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => prevSlide(sectionIndex)}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ffb400] text-[#ffb400] transition hover:bg-[#ffb400] hover:text-black"
                        aria-label={`Slide precedente ${section.title}`}
                      >
                        ←
                      </button>
                      <button
                        type="button"
                        onClick={() => nextSlide(sectionIndex)}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ffb400] text-[#ffb400] transition hover:bg-[#ffb400] hover:text-black"
                        aria-label={`Slide successiva ${section.title}`}
                      >
                        →
                      </button>
                    </div>
                  </div>

                  <div className="mx-auto w-full rounded-[22px] border border-[#ffb400] bg-black p-3 sm:rounded-[28px] sm:p-5 md:max-w-2xl lg:max-w-xl xl:max-w-lg">
                    <div className="overflow-hidden rounded-2xl border border-[#ffb400] bg-black sm:rounded-3xl">
                      <div
                        className="flex transition-transform duration-500 ease-out"
                        style={{ transform: `translateX(-${currentSlides[sectionIndex] * 100}%)` }}
                      >
                        {section.images.map((image, index) => (
                          <div key={`${section.title}-${index}`} className="w-full flex-none">
                            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-[radial-gradient(circle_at_top_right,rgba(92,76,255,0.16),transparent_28%),#050505] sm:rounded-3xl">
                              <img
                                src={image}
                                alt={`${section.title} ${index + 1}`}
                                className="h-full w-full object-cover"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 flex justify-center gap-2">
                      {section.images.map((_, dotIndex) => (
                        <button
                          key={`${section.title}-dot-${dotIndex}`}
                          type="button"
                          onClick={() => goToSlide(sectionIndex, dotIndex)}
                          className={`h-2.5 w-2.5 rounded-full transition ${
                            currentSlides[sectionIndex] === dotIndex ? "bg-[#ffb400]" : "bg-white/25"
                          }`}
                          aria-label={`Vai alla slide ${dotIndex + 1} di ${section.title}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="recensioni" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
  <div className="mb-12 max-w-2xl text-center md:text-left">
    <p className="text-sm uppercase tracking-[0.25em] text-[#ffb400]">
      Recensioni Google
    </p>
    <h2 className="mt-3 text-3xl font-extrabold text-[#ffb400] md:text-4xl">
      Cosa dicono i clienti
    </h2>
    <p className="mt-4 text-white/65">
      Le opinioni dei nostri clienti sono fondamentali: guarda le recensioni reali direttamente da Google.
    </p>
  </div>

  <div className="overflow-hidden rounded-2xl border border-[#ffb400] bg-black p-3 sm:rounded-3xl sm:p-4">
    <div
      className="elfsight-app-06ba0c35-5842-491a-8ccc-99ff110492ca"
      data-elfsight-app-lazy
    />
  </div>
</section>

        <section id="instagram" className="border-y border-[#ffb400] bg-black">
  <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
    <div className="mb-12 flex flex-col gap-4 text-center md:flex-row md:items-end md:justify-between md:text-left">
      <div>
        <p className="text-sm uppercase tracking-[0.25em] text-[#ffb400]">Instagram</p>
        <h2 className="mt-3 text-3xl font-extrabold text-[#ffb400] md:text-4xl">
          Gli ultimi post
        </h2>
      </div>

      <a
        href="https://www.instagram.com/made3dstudio.it/"
        target="_blank"
        rel="noreferrer"
        className="inline-block rounded-xl border border-[#ffb400] px-4 py-2.5 text-sm font-semibold text-[#ffb400] transition hover:bg-[#ffb400] hover:text-black sm:rounded-2xl sm:px-5 sm:py-3 sm:text-base"
      >
        Segui su Instagram
      </a>
    </div>

    <div className="overflow-hidden rounded-2xl border border-[#ffb400] bg-black p-3 sm:rounded-3xl sm:p-4">
      <Script
        src="https://elfsightcdn.com/platform.js"
        strategy="afterInteractive"
      />
      <div
        className="elfsight-app-a30e4daa-b3a9-42e1-bd33-d7aab2c8b349"
        data-elfsight-app-lazy
      />
    </div>
  </div>
</section>

        <section id="chi-siamo" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:gap-10">
            <div className="text-center md:text-left">
              <p className="text-sm uppercase tracking-[0.25em] text-[#ffb400]">Chi siamo</p>
              <h2 className="mt-3 text-3xl font-extrabold text-[#ffb400] md:text-4xl">
                Innovazione, precisione e supporto completo
              </h2>
              <p className="mt-5 leading-7 text-white/70">
                Made 3D Studio nasce con l’obiettivo di trasformare idee in realtà, grazie all’innovazione nella progettazione e nella stampa 3D. Infatti, è stata fondata da appassionati di tecnologia e design che con entusiasmo, si dedicano alla creazione di prototipi, componenti personalizzati e soluzioni su misura per privati e imprese. Inoltre, grazie a competenze tecniche avanzate e all’uso di materiali di alta qualità, l’azienda rappresenta il partner ideale per chi cerca precisione, creatività e supporto completo in ogni fase del progetto.
              </p>
            </div>
          </div>
        </section>

        <section id="contatti" className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 md:pb-24">
          <div className="grid gap-6 rounded-[24px] border border-[#ffb400] bg-[radial-gradient(circle_at_top_right,rgba(92,76,255,0.18),transparent_24%),#050505] p-5 sm:rounded-[32px] sm:p-8 md:grid-cols-[1.1fr_0.9fr] md:p-10">
            <div className="text-center md:text-left">
              <p className="text-sm uppercase tracking-[0.25em] text-[#ffb400]">Contatti</p>
              <h2 className="mt-3 text-3xl font-extrabold text-[#ffb400] md:text-4xl">
                Richiedi un preventivo
              </h2>
              <p className="mt-4 max-w-xl leading-7 text-white/70">
                 Contattaci per avere maggiori informazioni o richiedere un preventivo.
              </p>
              <div className="mt-6 space-y-2 text-white/80">
                <p>+39 339 431 00 88 - Andrea  &#40;Commerciale&#41;</p>
                <p>+39 327 665 32 19 - Diego  &#40;Assistenza Tecnica&#41;</p>
                <p>info@made3dstudio.it</p>
              </div>
            </div>

            <form
  onSubmit={handleFormSubmit}
  className="rounded-2xl border border-[#ffb400] bg-black/80 p-4 sm:rounded-3xl sm:p-5"
>
  <div className="grid gap-4">
    <input
      name="name"
      value={formData.name}
      onChange={(e) =>
        setFormData((prev) => ({ ...prev, name: e.target.value }))
      }
      className="rounded-xl border border-[#ffb400]/50 bg-black px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 sm:rounded-2xl sm:text-base"
      placeholder="Nome"
      required
    />

    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={(e) =>
        setFormData((prev) => ({ ...prev, email: e.target.value }))
      }
      className="rounded-xl border border-[#ffb400]/50 bg-black px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 sm:rounded-2xl sm:text-base"
      placeholder="Email"
      required
    />

    <input
      type="text"
      name="subject"
      value={formData.subject}
      onChange={(e) =>
        setFormData((prev) => ({ ...prev, subject: e.target.value }))
      }
      className="rounded-xl border border-[#ffb400]/50 bg-black px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 sm:rounded-2xl sm:text-base"
      placeholder="Oggetto"
    />

    <textarea
      name="message"
      value={formData.message}
      onChange={(e) =>
        setFormData((prev) => ({ ...prev, message: e.target.value }))
      }
      className="min-h-[140px] rounded-xl border border-[#ffb400]/50 bg-black px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 sm:rounded-2xl sm:text-base"
      placeholder="Descrivi il tuo progetto"
      required
    />

    <button
      type="submit"
      disabled={formStatus === "sending"}
      className="rounded-xl bg-[#ffb400] px-4 py-2.5 text-sm font-bold text-black transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 sm:rounded-2xl sm:px-5 sm:py-3 sm:text-base"
    >
      {formStatus === "sending" ? "Invio..." : "Invia richiesta"}
    </button>

    {formStatus === "success" && (
      <p className="text-sm font-medium text-green-400">
        Messaggio inviato con successo. Ti risponderemo il prima possibile.
      </p>
    )}

    {formStatus === "error" && (
      <p className="text-sm font-medium text-red-400">
        Si è verificato un errore durante l’invio. Riprova tra poco.
      </p>
    )}
  </div>
</form>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#ffb400] bg-black px-6 py-8 text-center text-sm text-white/45">
        © 2026 Made 3D Studio — Sito realizzato da AAT 360 Networklab.
      </footer>
      {showTop && (
  <button
    onClick={scrollToTop}
    className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#ffb400] text-black shadow-lg transition hover:scale-110"
    aria-label="Torna su"
  >
    ↑
  </button>
)}
    </div>
  );
}
