import { Component, signal } from '@angular/core';
import { ContactModal } from '../shared/contact-modal';

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
  imports: [ContactModal],
  template: `
    <main class="page">
      <nav class="topbar" aria-label="Navegacao principal">
        <a class="brand" href="#inicio" aria-label="ZERO1BIT">
          <img src="/ZEROUM.svg" alt="ZERO1BIT" />
          <span class="brand-name">ZERO1BIT</span>
        </a>

        <div class="nav-links">
          <a href="#solucoes">Soluções</a>
          <a href="#produtos">Produtos</a>
          <a href="#govtech">GovTech</a>
          <a href="#contato">Contato</a>
        </div>

        <a class="nav-phone" href="https://wa.me/5585997277128" target="_blank" rel="noopener">
          <img src="/icon-whatsapp.svg" alt="WhatsApp" width="20" height="20" />
          <span class="nav-label">(85) 9 9727-7128</span>
        </a>
        <a class="button button-dark" href="#" (click)="$event.preventDefault(); openModal()">
          <svg class="nav-envelope" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2"/>
            <path d="m22 7-10 7L2 7"/>
          </svg>
          <span class="nav-label">Fale conosco</span>
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
            <a class="button button-dark" href="#produtos">Conheça nossas soluções</a>
            <a class="button button-light" href="#solucoes">Ver engenharia</a>
          </div>
        </div>
      </section>

      <section class="trusted-strip" aria-label="Áreas de atuação">
        <article class="trusted-card">Delivery</article>
        <article class="trusted-card">Marketplace</article>
        <article class="trusted-card">PDV</article>
        <article class="trusted-card">Finanças</article>
        <article class="trusted-card">GovTech</article>
        <article class="trusted-card">CTO as a Service</article>
      </section>

      <section class="stats">
        <article>
          <strong>10+</strong>
          <span>Produtos próprios e frentes digitais em operação</span>
        </article>
        <article>
          <strong>0%</strong>
          <span>Lojistas não pagam comissão no temrango.com</span>
        </article>
        <article>
          <strong>LGPD</strong>
          <span>Arquitetura pronta para auditoria e segurança</span>
        </article>
      </section>

      <section class="section split-section" id="solucoes">
        <div class="section-copy">
          <span class="section-kicker">Sua visão, nossa engenharia</span>
          <h2>Uma fábrica de software para criar, validar e escalar sistemas.</h2>
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
            <a href="#" (click)="$event.preventDefault(); openModal()">Orçar projeto</a>
          </article>
          <article class="solution-card dark">
            <span>02</span>
            <h3>Consultoria & CTO as a Service</h3>
            <p>Estratégia técnica, arquitetura, decisão de stack e acompanhamento para reduzir desperdício de tempo e capital.</p>
            <a href="#" (click)="$event.preventDefault(); openModal()">Falar com especialista</a>
          </article>
        </div>
      </section>

      <section class="section ai-section" id="ai">
        <div class="ai-bg">
          <svg class="ai-nodes" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
            <circle cx="180" cy="120" r="3" fill="rgba(23,200,220,.25)"/>
            <circle cx="340" cy="80" r="2" fill="rgba(23,200,220,.2)"/>
            <circle cx="520" cy="160" r="3" fill="rgba(23,200,220,.25)"/>
            <circle cx="700" cy="100" r="2" fill="rgba(23,200,220,.2)"/>
            <circle cx="860" cy="180" r="3" fill="rgba(23,200,220,.25)"/>
            <circle cx="1020" cy="90" r="2" fill="rgba(23,200,220,.2)"/>
            <circle cx="120" cy="280" r="2" fill="rgba(23,200,220,.2)"/>
            <circle cx="300" cy="350" r="3" fill="rgba(23,200,220,.25)"/>
            <circle cx="480" cy="300" r="2" fill="rgba(23,200,220,.2)"/>
            <circle cx="650" cy="380" r="3" fill="rgba(23,200,220,.25)"/>
            <circle cx="820" cy="320" r="2" fill="rgba(23,200,220,.2)"/>
            <circle cx="1000" cy="400" r="3" fill="rgba(23,200,220,.25)"/>
            <circle cx="1100" cy="280" r="2" fill="rgba(23,200,220,.2)"/>
            <circle cx="250" cy="500" r="3" fill="rgba(23,200,220,.25)"/>
            <circle cx="550" cy="520" r="2" fill="rgba(23,200,220,.2)"/>
            <circle cx="800" cy="500" r="3" fill="rgba(23,200,220,.25)"/>
            <circle cx="950" cy="550" r="2" fill="rgba(23,200,220,.2)"/>
            <line x1="180" y1="120" x2="340" y2="80" stroke="rgba(23,200,220,.06)" stroke-width="1"/>
            <line x1="340" y1="80" x2="520" y2="160" stroke="rgba(23,200,220,.06)" stroke-width="1"/>
            <line x1="520" y1="160" x2="700" y2="100" stroke="rgba(23,200,220,.06)" stroke-width="1"/>
            <line x1="700" y1="100" x2="860" y2="180" stroke="rgba(23,200,220,.06)" stroke-width="1"/>
            <line x1="860" y1="180" x2="1020" y2="90" stroke="rgba(23,200,220,.06)" stroke-width="1"/>
            <line x1="120" y1="280" x2="300" y2="350" stroke="rgba(23,200,220,.06)" stroke-width="1"/>
            <line x1="300" y1="350" x2="480" y2="300" stroke="rgba(23,200,220,.06)" stroke-width="1"/>
            <line x1="480" y1="300" x2="650" y2="380" stroke="rgba(23,200,220,.06)" stroke-width="1"/>
            <line x1="650" y1="380" x2="820" y2="320" stroke="rgba(23,200,220,.06)" stroke-width="1"/>
            <line x1="820" y1="320" x2="1000" y2="400" stroke="rgba(23,200,220,.06)" stroke-width="1"/>
            <line x1="1000" y1="400" x2="1100" y2="280" stroke="rgba(23,200,220,.06)" stroke-width="1"/>
            <line x1="250" y1="500" x2="550" y2="520" stroke="rgba(23,200,220,.06)" stroke-width="1"/>
            <line x1="550" y1="520" x2="800" y2="500" stroke="rgba(23,200,220,.06)" stroke-width="1"/>
            <line x1="800" y1="500" x2="950" y2="550" stroke="rgba(23,200,220,.06)" stroke-width="1"/>
          </svg>
          <div class="ai-particle" style="--x:15%;--y:18%;--d:0s"></div>
          <div class="ai-particle" style="--x:82%;--y:25%;--d:0.4s"></div>
          <div class="ai-particle" style="--x:45%;--y:70%;--d:0.8s"></div>
          <div class="ai-particle" style="--x:28%;--y:55%;--d:1.2s"></div>
          <div class="ai-particle" style="--x:72%;--y:12%;--d:0.2s"></div>
          <div class="ai-particle-lg" style="--x:12%;--y:65%;--d:0.6s"></div>
          <div class="ai-particle-lg" style="--x:88%;--y:45%;--d:1s"></div>
        </div>

        <div class="section-heading">
          <span class="section-kicker ai-kicker">
            <span class="ai-dot"></span>
            Inteligência Artificial
          </span>
          <h2 class="ai-title">
            <span>IA aplicada a</span>
            <span class="ai-gradient-text">projetos reais.</span>
          </h2>
        </div>

        <div class="ai-terminal-lg">
          <div class="ai-terminal-bar">
            <span></span><span></span><span></span>
            <span class="ai-terminal-bar-label">zeroumbit@ai:~$</span>
          </div>
          <div class="ai-terminal-body">
            <div class="ai-thinking">
              <span class="ai-thinking-text">Pensando</span>
              <span class="ai-thinking-dots">
                <span>.</span><span>.</span><span>.</span>
              </span>
            </div>
            <div class="ai-terminal-scroll">
              <div class="ai-scroll-content">
                <div class="ai-rotating-wrapper">
                  <span class="ai-terminal-prompt" style="width:auto">$</span>
                  <span class="ai-rotating">
                    <span>automação inteligente</span>
                    <span>sistemas preditivos</span>
                    <span>análise de dados</span>
                  </span>
                </div>

                <p class="ai-desc">
                  Integramos modelos de IA em produtos e operações — de automação inteligente
                  a sistemas preditivos — para empresas que querem entregar mais com tecnologia.
                </p>

                <div class="ai-terminal-section-label">// módulos disponíveis</div>

                <div class="ai-grid">
                  <article class="ai-card">
                    <div class="ai-card-head">
                      <div class="ai-card-icon">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M12 2a4 4 0 0 1 4 4c0 2-2 3-4 5-2-2-4-3-4-5a4 4 0 0 1 4-4z"/>
                          <path d="M2 22v-2a6 6 0 0 1 6-6h8a6 6 0 0 1 6 6v2"/>
                        </svg>
                      </div>
                      <span class="ai-card-badge">Python • TensorFlow • PyTorch</span>
                    </div>
                    <h3>Modelos sob medida</h3>
                    <p>Treinamos e adaptamos modelos de IA para o contexto e os dados do seu negócio.</p>
                  </article>
                  <article class="ai-card">
                    <div class="ai-card-head">
                      <div class="ai-card-icon">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                        </svg>
                      </div>
                      <span class="ai-card-badge">RPA • Workflows • APIs</span>
                    </div>
                    <h3>Automação inteligente</h3>
                    <p>Fluxos que aprendem e se adaptam, reduzindo tarefas manuais e acelerando decisões.</p>
                  </article>
                  <article class="ai-card">
                    <div class="ai-card-head">
                      <div class="ai-card-icon">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                          <circle cx="12" cy="12" r="10"/>
                          <line x1="2" y1="12" x2="22" y2="12"/>
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                        </svg>
                      </div>
                      <span class="ai-card-badge">AWS • GCP • Azure • Docker</span>
                    </div>
                    <h3>IA em produção</h3>
                    <p>Da prova de conceito ao deploy — implantamos IA escalável em produtos e operações reais.</p>
                  </article>
                </div>

                <div class="ai-terminal-section-label">// resultados em produção</div>

                <div class="ai-metrics">
                  <div class="ai-metric">
                    <strong class="ai-metric-num">3+</strong>
                    <span class="ai-metric-label">Projetos de IA entregues</span>
                  </div>
                  <div class="ai-metric">
                    <strong class="ai-metric-num">85%</strong>
                    <span class="ai-metric-label">Redução de processos manuais</span>
                  </div>
                  <div class="ai-metric">
                    <strong class="ai-metric-num">24/7</strong>
                    <span class="ai-metric-label">Modelos em produção monitorados</span>
                  </div>
                </div>

                <div class="ai-terminal-lines">
                  <span class="ai-terminal-cline"><span class="ai-terminal-prompt">$</span> iniciar deploy —all</span>
                  <span class="ai-terminal-cline"><span class="ai-terminal-prompt">✓</span> carregando dataset</span>
                  <span class="ai-terminal-cline"><span class="ai-terminal-prompt">►</span> treinando rede neural <span class="ai-terminal-progress">87%</span></span>
                  <span class="ai-terminal-cline"><span class="ai-terminal-prompt">✓</span> deploy em produção</span>
                  <span class="ai-terminal-cline ai-terminal-cursor"><span class="ai-terminal-prompt">●</span> modelo ativo e monitorado</span>
                </div>
              </div>

              <div class="ai-scroll-content" aria-hidden="true">
                <div class="ai-rotating-wrapper">
                  <span class="ai-terminal-prompt" style="width:auto">$</span>
                  <span class="ai-rotating">
                    <span>automação inteligente</span>
                    <span>sistemas preditivos</span>
                    <span>análise de dados</span>
                  </span>
                </div>

                <p class="ai-desc">
                  Integramos modelos de IA em produtos e operações — de automação inteligente
                  a sistemas preditivos — para empresas que querem entregar mais com tecnologia.
                </p>

                <div class="ai-terminal-section-label">// módulos disponíveis</div>

                <div class="ai-grid">
                  <article class="ai-card">
                    <div class="ai-card-head">
                      <div class="ai-card-icon">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M12 2a4 4 0 0 1 4 4c0 2-2 3-4 5-2-2-4-3-4-5a4 4 0 0 1 4-4z"/>
                          <path d="M2 22v-2a6 6 0 0 1 6-6h8a6 6 0 0 1 6 6v2"/>
                        </svg>
                      </div>
                      <span class="ai-card-badge">Python • TensorFlow • PyTorch</span>
                    </div>
                    <h3>Modelos sob medida</h3>
                    <p>Treinamos e adaptamos modelos de IA para o contexto e os dados do seu negócio.</p>
                  </article>
                  <article class="ai-card">
                    <div class="ai-card-head">
                      <div class="ai-card-icon">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                        </svg>
                      </div>
                      <span class="ai-card-badge">RPA • Workflows • APIs</span>
                    </div>
                    <h3>Automação inteligente</h3>
                    <p>Fluxos que aprendem e se adaptam, reduzindo tarefas manuais e acelerando decisões.</p>
                  </article>
                  <article class="ai-card">
                    <div class="ai-card-head">
                      <div class="ai-card-icon">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                          <circle cx="12" cy="12" r="10"/>
                          <line x1="2" y1="12" x2="22" y2="12"/>
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                        </svg>
                      </div>
                      <span class="ai-card-badge">AWS • GCP • Azure • Docker</span>
                    </div>
                    <h3>IA em produção</h3>
                    <p>Da prova de conceito ao deploy — implantamos IA escalável em produtos e operações reais.</p>
                  </article>
                </div>

                <div class="ai-terminal-section-label">// resultados em produção</div>

                <div class="ai-metrics">
                  <div class="ai-metric">
                    <strong class="ai-metric-num">50+</strong>
                    <span class="ai-metric-label">Projetos de IA entregues</span>
                  </div>
                  <div class="ai-metric">
                    <strong class="ai-metric-num">85%</strong>
                    <span class="ai-metric-label">Redução de processos manuais</span>
                  </div>
                  <div class="ai-metric">
                    <strong class="ai-metric-num">24/7</strong>
                    <span class="ai-metric-label">Modelos em produção monitorados</span>
                  </div>
                </div>

                <div class="ai-terminal-lines">
                  <span class="ai-terminal-cline"><span class="ai-terminal-prompt">$</span> iniciar deploy —all</span>
                  <span class="ai-terminal-cline"><span class="ai-terminal-prompt">✓</span> carregando dataset</span>
                  <span class="ai-terminal-cline"><span class="ai-terminal-prompt">►</span> treinando rede neural <span class="ai-terminal-progress">87%</span></span>
                  <span class="ai-terminal-cline"><span class="ai-terminal-prompt">✓</span> deploy em produção</span>
                  <span class="ai-terminal-cline ai-terminal-cursor"><span class="ai-terminal-prompt">●</span> modelo ativo e monitorado</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="ai-cta">
          <a class="button button-dark" href="#" (click)="$event.preventDefault(); openModal()">Quero aplicar IA no meu projeto</a>
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
          <div class="gov-left">
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
            <a class="button button-dark" href="/govtech" target="_blank" rel="noopener" style="margin-top:10px">Saiba mais &rarr;</a>
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
        <a class="button button-dark" href="/representante" target="_blank" rel="noopener">Quero ser representante</a>
      </section>

      <footer class="footer" id="contato">
        <div class="footer-main">
          <a class="brand footer-brand" href="#inicio">
            <img src="/ZEROUM.svg" alt="ZERO1BIT" />
          <span class="brand-name">ZERO1BIT</span>
          </a>
          <p>Venture Builder. Criamos, aceleramos e escalamos tecnologias que conectam o setor privado e público ao futuro.</p>
        </div>

        <div>
          <h4>Soluções</h4>
          <a href="#produtos">temrango.com</a>
          <a href="#produtos">pescaprecos.com</a>
          <a href="#produtos">Essencial PDV</a>
          <a href="https://fluxoo-educacao.vercel.app/" target="_blank" rel="noopener">Fluxoo EDU</a>
        </div>

        <div>
          <h4>Empresa</h4>
          <a href="#solucoes">Desenvolvimento</a>
          <a href="/consultoria" target="_blank" rel="noopener">Consultoria</a>
          <a href="/govtech" target="_blank" rel="noopener">GovTech</a>
          <a href="/representante" target="_blank" rel="noopener">Seja parceiro</a>
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

    <app-contact-modal [show]="showModal()" (dismiss)="closeModal()" />
  `,
})
export class HomePage {
  protected readonly showModal = signal(false);

  protected openModal() { this.showModal.set(true); document.body.style.overflow = 'hidden'; }
  protected closeModal() { this.showModal.set(false); document.body.style.overflow = ''; }

  protected readonly heroLogos = [
    { name: 'temrango', src: '/temrango.png', href: 'https://lojista.temrango.com.br/' },
    { name: 'Fluxoo DOC', src: '/fluxoo-doc.png', href: 'https://doc.fluxoo.com.br/login' },
    { name: 'pescaprecos', src: '/pescaprecos.png', href: 'https://lojista.pescaprecos.com.br/' },
    { name: 'Fluxoo EDU', src: '/fluxoo-edu.png', href: 'https://fluxoo-educacao.vercel.app/' },
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
      href: 'https://fluxoo-educacao.vercel.app/',
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
