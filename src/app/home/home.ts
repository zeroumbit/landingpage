import { Component } from '@angular/core';

interface ProductCard {
  type: string;
  name: string;
  description: string;
  accent: string;
  href: string;
  mockup: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <main class="page">
      <nav class="topbar" aria-label="Navegacao principal">
        <a class="brand" href="#inicio" aria-label="ZERO1BIT">
          <img src="/ZEROUM.svg" alt="ZERO1BIT" />
          <span>ZERO1BIT</span>
        </a>

        <div class="nav-links">
          <a href="#solucoes">Soluções</a>
          <a href="#produtos">Produtos</a>
          <a href="#govtech">GovTech</a>
          <a href="#contato">Contato</a>
        </div>

        <a class="nav-phone" href="https://wa.me/5585997277128" target="_blank" rel="noopener">
          <img src="/icon-whatsapp.svg" alt="WhatsApp" width="20" height="20" />
          <span>(85) 9 9727-7128</span>
        </a>
        <a class="button button-dark" href="mailto:zeroumbit@gmail.com">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2"/>
            <path d="m22 7-10 7L2 7"/>
          </svg>
        </a>
      </nav>

      <section class="hero" id="inicio">
        <div class="logo-cloud" aria-label="Produtos ZERO1BIT">
          @for (logo of heroLogos; track logo.name; let i = $index) {
            <a
              class="logo-chip"
              [style.--i]="i"
              [href]="logo.href"
              target="_blank"
              rel="noopener"
              [attr.aria-label]="logo.name"
            >
              <img [src]="logo.src" [alt]="logo.name" />
            </a>
          }
        </div>

        <div class="hero-copy">
          <div class="eyebrow">Venture builder & software studio</div>
          <h1 class="hero-title"><span>Tecnologia que</span><span>impulsiona negócios.</span></h1>
          <p>
            De delivery à gestão pública, criamos produtos digitais, plataformas sob demanda
            e operações de tecnologia para empresas que precisam sair do papel e escalar.
          </p>

          <div class="hero-actions">
            <a class="button button-dark" href="#produtos">Conheça as soluções</a>
            <a class="button button-light" href="#solucoes">Ver engenharia</a>
          </div>
        </div>
      </section>

      <section class="trusted-strip" aria-label="Áreas de atuação">
        <span>Delivery</span>
        <span>Marketplace</span>
        <span>PDV</span>
        <span>Finanças</span>
        <span>GovTech</span>
        <span>CTO as a Service</span>
      </section>

      <section class="stats">
        <article>
          <strong>6+</strong>
          <span>produtos e frentes digitais em operação</span>
        </article>
        <article>
          <strong>0%</strong>
          <span>Lojistas não pagam comissão no temrango.com</span>
        </article>
        <article>
          <strong>LGPD</strong>
          <span>arquitetura pronta para auditoria e segurança</span>
        </article>
      </section>

      <section class="section split-section" id="solucoes">
        <div class="section-copy">
          <span class="section-kicker">Sua visão, nossa engenharia</span>
          <h2>Uma fábrica de software para criar, validar e <span style="white-space:nowrap">escalar sistemas.</span></h2>
          <p>
            Usamos a mesma base técnica das nossas startups para construir apps, portais,
            sistemas de gestão, integrações e automações com velocidade de produto.
          </p>
        </div>

        <div class="solution-stack">
          <article class="solution-card">
            <span>01</span>
            <h3>Desenvolvimento de softwares & Apps</h3>
            <p>De portais governamentais robustos a Super Apps, com tecnologia, segurança e escalabilidade.</p>
            <a href="mailto:zeroumbit@gmail.com">Orçar projeto</a>
          </article>
          <article class="solution-card dark">
            <span>02</span>
            <h3>Consultoria & CTO as a Service</h3>
            <p>Estratégia técnica, arquitetura, decisão de stack e acompanhamento para reduzir desperdício de tempo e capital.</p>
            <a href="/consultoria" target="_blank" rel="noopener">Falar com especialista</a>
          </article>
        </div>
      </section>

      <section class="section product-section" id="produtos">
        <div class="section-heading">
          <span class="section-kicker">Nossas startups & soluções</span>
          <h2 class="platform-title"><span>Um ecossistema de plataformas</span><span>para vender, gerir e operar melhor</span></h2>
        </div>

        <div class="product-grid">
          @for (product of products; track product.name) {
            <a class="product-card" [style.--accent]="product.accent" [href]="product.href" target="_blank" rel="noopener">
              <div class="product-copy">
                <span>{{ product.type }}</span>
                <h3>{{ product.name }}</h3>
                <p>{{ product.description }}</p>
              </div>

              <img class="product-mockup" [src]="product.mockup" [alt]="product.name" width="216" height="480" />
              <span class="product-arrow" aria-hidden="true">&nearr;</span>
            </a>
          }
        </div>
      </section>

      <section class="section gov-section" id="govtech">
        <div class="gov-shell">
          <div class="section-copy">
            <span class="section-kicker">GovTech</span>
            <h2>Transformação digital para <span style="white-space:nowrap">gestão pública.</span></h2>
            <p>
              Plataformas auditáveis e seguras para reduzir custos, digitalizar processos
              e organizar rotinas de prefeituras, secretarias e operações públicas.
            </p>
            <ul>
              <li>Desenvolvimento sob demanda</li>
              <li>Sistemas de gestão inteligentes</li>
              <li>Aderência a LGPD e LAI</li>
              <li>Backup na nuvem</li>
              <li>Redução de custos e paperless</li>
            </ul>
          </div>

          <div class="gov-cards">
            @for (item of govProducts; track item.title) {
              <a [href]="item.href" target="_blank" rel="noopener">
                <span>{{ item.label }}</span>
                <h3>{{ item.title }}</h3>
                <p>{{ item.text }}</p>
                <b aria-hidden="true">&nearr;</b>
              </a>
            }
          </div>
        </div>
      </section>

      <section class="section flows-section">
        <div class="section-heading">
          <span class="section-kicker">Como trabalhamos</span>
          <h2>Da idéia ao deploy, com fluxos claros.</h2>
        </div>

        <div class="flow-grid">
          @for (flow of flows; track flow.title) {
            <article>
              <span>{{ flow.step }}</span>
              <h3>{{ flow.title }}</h3>
              <p>{{ flow.text }}</p>
            </article>
          }
        </div>
      </section>

      <section class="cta-panel">
        <div>
          <span class="section-kicker">Parcerias</span>
          <h2>Seja nosso representante em sua cidade com ZERO investimento.</h2>
        </div>
        <a class="button button-dark" href="https://wa.me/5585997277128" target="_blank" rel="noopener">Começar conversa</a>
      </section>

      <footer class="footer" id="contato">
        <div class="footer-main">
          <a class="brand footer-brand" href="#inicio">
            <img src="/ZEROUM.svg" alt="ZERO1BIT" />
            <span>ZERO1BIT</span>
          </a>
          <p>Venture Builder. Criamos, aceleramos e escalamos tecnologias que conectam o setor privado e público ao futuro.</p>
        </div>

        <div>
          <h4>Soluções</h4>
          <a href="#produtos">temrango.com</a>
          <a href="#produtos">pescaprecos.com</a>
          <a href="#produtos">Essencial PDV</a>
          <a href="#produtos">Fluxoo EDU</a>
        </div>

        <div>
          <h4>Empresa</h4>
          <a href="#solucoes">Desenvolvimento</a>
          <a href="#solucoes">Consultoria</a>
          <a href="/govtech">GovTech</a>
          <a href="#contato">Seja parceiro</a>
        </div>

        <div>
          <h4>Contato</h4>
          <a href="tel:+5585997277128">(85) 9 9727-7128</a>
          <a href="mailto:zeroumbit@gmail.com">zeroumbit&#64;gmail.com</a>
          <span>Caninde/CE (sede)</span>
        </div>

        <small>CNPJ 21.582.343/0001-81 | Uma empresa pescaprecos.com</small>
      </footer>
    </main>
  `,
})
export class HomePage {
  protected readonly heroLogos = [
    { name: 'temrango', src: '/temrango.png', href: 'https://lojista.temrango.com.br/' },
    { name: 'Fluxoo DOC', src: '/fluxoo-doc.png', href: 'https://doc.fluxoo.com.br/login' },
    { name: 'pescaprecos', src: '/pescaprecos.png', href: 'https://lojista.pescaprecos.com.br/' },
    { name: 'Fluxoo EDU', src: '/fluxoo-edu.png', href: '#' },
    { name: 'Essencial PDV', src: '/essencial.png', href: '#' },
  ];

  protected readonly products: ProductCard[] = [
    {
      type: 'Delivery',
      name: 'temrango',
      description: 'Plataforma de delivery para restaurantes, mercados, petshops e lojas de bebidas com custo-benefício para o lojista.',
      accent: '#f4f6f8',
      href: 'https://lojista.temrango.com.br/',
      mockup: '/mockup-temrango.svg',
    },
    {
      type: 'Marketplace',
      name: 'pescaprecos',
      description: 'Venda o que quiser, sem burocracia. Marketplace para lojistas locais e descoberta de ofertas regionais.',
      accent: '#f4f6f8',
      href: 'https://lojista.pescaprecos.com.br/',
      mockup: '/mockup-pescaprecos.svg',
    },
    {
      type: 'Educação',
      name: 'Fluxoo EDU',
      description: 'Ambiente para organizar rotinas educacionais, dados institucionais e fluxos digitais de acompanhamento.',
      accent: '#f4f6f8',
      href: '#',
      mockup: '/mockup-fluxoo-edu.svg',
    },
    {
      type: 'Vendas',
      name: 'Essencial PDV',
      description: 'Gestão simples para ponto de venda, produtos, caixa e rotinas comerciais conectadas ao digital.',
      accent: '#f4f6f8',
      href: '#',
      mockup: '/mockup-essencial.svg',
    },
  ];

  protected readonly govProducts = [
    { label: 'Documentos', title: 'Fluxoo DOC', text: 'Gestão documental com rastreio, backup, auditoria e controle dos processos.', href: 'https://doc.fluxoo.com.br/login' },
    { label: 'RH', title: 'Fluxoo RH', text: 'Controle de férias, atestados, funcionários e rotinas de recursos humanos.', href: '#' },
    { label: 'Portais', title: 'Sites institucionais', text: 'Sites para secretarias e prefeituras, preparados para comunicação pública.', href: '/govtech' },
    { label: 'Legisla', title: 'Fluxoo Legisla', text: 'Gestão de câmaras de vereadores com controle de\u00A0sessões, proposições e atos legislativos.', href: '#' },
  ];

  protected readonly flows = [
    { step: '01', title: 'Diagnóstico', text: 'Mapeamos problema, usuários, operação e riscos antes de desenhar a solução.' },
    { step: '02', title: 'Protótipo', text: 'Transformamos requisitos em fluxos navegáveis, telas e arquitetura inicial.' },
    { step: '03', title: 'Entrega', text: 'Construímos, integramos, publicamos e acompanhamos a evolução do produto.' },
  ];
}
