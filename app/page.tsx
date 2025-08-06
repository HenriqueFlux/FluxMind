import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Input } from '@/components/ui/input'
import { Rocket, Palette, PenTool, Waypoints, Bot, ArrowRight, Facebook, Instagram, Linkedin } from 'lucide-react'

export default function LandingPage() {
return (
  <div className="bg-ice-gray text-deep-blue font-sans">
    {/* Header */}
    <header className="sticky top-0 z-50 bg-ice-gray/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2">
          <Image src="/logo-icon.png" alt="Fluxmind Logo" width={40} height={40} />
          <span className="font-display text-2xl font-bold text-deep-blue">Fluxmind</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="#services" className="text-sm font-medium hover:text-cobalt-blue transition-colors">Serviços</Link>
          <Link href="#portfolio" className="text-sm font-medium hover:text-cobalt-blue transition-colors">Cases</Link>
          <Link href="#contact" className="text-sm font-medium hover:text-cobalt-blue transition-colors">Contato</Link>
        </nav>
        <Button className="hidden md:inline-flex bg-cobalt-blue hover:bg-cobalt-blue/90 text-white" asChild>
          <Link href="#contact">Começar Projeto</Link>
        </Button>
      </div>
    </header>

    <main>
      {/* Hero Section */}
      <section className="relative bg-deep-blue text-ice-gray py-24 md:py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-deep-blue via-cobalt-blue to-aqua-green/80 animate-gradient bg-[size:200%_200%]"></div>
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Inteligência Criativa em Fluxo Contínuo
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-ice-gray/90">
            Soluções digitais que combinam performance, branding e estratégia para negócios que querem escalar no novo digital.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-cobalt-blue hover:bg-cobalt-blue/90 text-white" asChild>
              <Link href="#contact">Começar Projeto</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-ice-gray/50 text-ice-gray hover:bg-ice-gray/10 hover:text-white" asChild>
              <Link href="#portfolio">Ver Portfólio <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Mais do que uma agência, uma mentalidade em movimento.
          </h2>
          <p className="mt-6 text-lg text-deep-blue/80">
            Na Fluxmind, não seguimos tendências — criamos o fluxo. Combinamos estratégia de alto nível, dados e criatividade para ajudar marcas a crescer com consistência, propósito e impacto real.
          </p>
          <Button variant="link" className="mt-6 text-cobalt-blue text-lg" asChild>
            <Link href="#">Saiba mais sobre nossa essência <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-ice-gray">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Nossas Especialidades</h2>
            <p className="mt-4 text-lg text-deep-blue/80">Oferta clara com valor agregado para o seu negócio.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Rocket, title: "Gestão de Tráfego", desc: "Estratégia orientada a dados para escalar suas campanhas com inteligência e ROI." },
              { icon: Palette, title: "Branding & Identidade Visual", desc: "Criação de marcas memoráveis, com design, naming e posicionamento." },
              { icon: PenTool, title: "Copywriting Estratégico", desc: "Roteiros, VSLs e páginas que vendem com storytelling e psicologia de conversão." },
              { icon: Waypoints, title: "Funis e Landing Pages", desc: "Estrutura completa para atrair, nutrir e converter leads em clientes." },
              { icon: Bot, title: "Soluções com IA e Automação", desc: "Aplicações práticas de inteligência artificial para escalar resultados." },
            ].map((service, index) => (
              <Card key={index} className="bg-white text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-cobalt-blue/10 text-cobalt-blue">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="font-display mt-4">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-deep-blue/80">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
             <div className="flex items-center justify-center rounded-lg bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 md:col-span-2 lg:col-span-1">
               <Button variant="link" className="text-cobalt-blue text-lg font-bold" asChild>
                  <Link href="#">Ver detalhamento dos serviços <ArrowRight className="ml-2 h-4 w-4" /></Link>
               </Button>
             </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">O que já fluímos com nossos clientes</h2>
            <p className="mt-4 text-lg text-deep-blue/80">Cases de sucesso, resultados e depoimentos.</p>
          </div>
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {[
                { metric: "+420% ROAS / 7 dias", desc: "Branding e campanha de performance para marca de e-commerce que dobrou o faturamento.", img: "/dashboard-analytics.png" },
                { metric: "Lead 60% mais barato", desc: "Otimização de funil de vendas para startup educacional, aumentando a conversão.", img: "/modern-landing-page.png" },
                { metric: "Top 3 no Google", desc: "Estratégia de SEO e conteúdo que posicionou cliente do setor de saúde.", img: "/generic-website-mockup.png" },
              ].map((item, index) => (
                <CarouselItem key={index}>
                  <Card className="overflow-hidden">
                    <CardContent className="flex flex-col md:flex-row p-0">
                      <Image src={item.img || "/placeholder.svg"} alt={`Case ${index + 1}`} width={800} height={600} className="md:w-1/2 object-cover" />
                      <div className="p-8 flex flex-col justify-center md:w-1/2">
                        <span className="font-display text-3xl font-bold text-aqua-green">{item.metric}</span>
                        <p className="mt-4 text-lg text-deep-blue/80">{item.desc}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-[-50px]" />
            <CarouselNext className="right-[-50px]" />
          </Carousel>
           <div className="text-center mt-8">
              <Button variant="link" className="text-cobalt-blue text-lg" asChild>
                  <Link href="#">Ver todos os cases <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
           </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-ice-gray">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Marcas que já entraram no fluxo</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            <Card className="bg-white">
              <CardContent className="p-6">
                <p className="text-lg italic text-deep-blue/90">“A Fluxmind não apenas executa, mas pensa junto. Viraram nosso braço estratégico.”</p>
                <p className="mt-4 font-bold text-deep-blue">— Daniel S., CEO de e-commerce health</p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-6">
                <p className="text-lg italic text-deep-blue/90">“Do branding à automação, tudo foi fluido, rápido e eficaz.”</p>
                <p className="mt-4 font-bold text-deep-blue">— Mariana T., fundadora de startup educacional</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 md:py-24 bg-deep-blue text-ice-gray">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Pronto para entrar no fluxo?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-ice-gray/80">
            Comece com uma análise gratuita do seu funil, branding ou campanhas. Vamos montar um plano de ação sob medida para seu negócio.
          </p>
          <form className="mt-8 max-w-lg mx-auto flex flex-col sm:flex-row gap-4">
            <Input type="text" placeholder="Seu nome" className="bg-ice-gray/10 border-ice-gray/20 text-white placeholder:text-ice-gray/60 focus:ring-cobalt-blue" />
            <Input type="email" placeholder="Seu melhor e-mail" className="bg-ice-gray/10 border-ice-gray/20 text-white placeholder:text-ice-gray/60 focus:ring-cobalt-blue" />
            <Button type="submit" className="bg-cobalt-blue hover:bg-cobalt-blue/90 text-white">Começar Diagnóstico Grátis</Button>
          </form>
        </div>
      </section>
    </main>

    {/* Footer */}
    <footer className="bg-deep-blue text-ice-gray/70 py-8">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Image src="/logo-icon.png" alt="Fluxmind Logo" width={30} height={30} />
          <span className="font-display text-xl font-bold">Fluxmind</span>
        </div>
        <div className="flex gap-6">
          <Link href="#services" className="text-sm hover:text-white transition-colors">Serviços</Link>
          <Link href="#portfolio" className="text-sm hover:text-white transition-colors">Cases</Link>
          <Link href="#contact" className="text-sm hover:text-white transition-colors">Contato</Link>
        </div>
        <div className="flex gap-4">
          <Link href="#" aria-label="Facebook"><Facebook className="h-5 w-5 hover:text-white transition-colors" /></Link>
          <Link href="#" aria-label="Instagram"><Instagram className="h-5 w-5 hover:text-white transition-colors" /></Link>
          <Link href="#" aria-label="LinkedIn"><Linkedin className="h-5 w-5 hover:text-white transition-colors" /></Link>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 mt-6 text-center text-xs border-t border-ice-gray/20 pt-6">
        <p>&copy; {new Date().getFullYear()} Fluxmind. Todos os direitos reservados.</p>
      </div>
    </footer>
  </div>
)
}
