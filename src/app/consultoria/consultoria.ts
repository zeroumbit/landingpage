import { Component, signal, computed, OnInit, OnDestroy } from '@angular/core';
import { ContactModal } from '../shared/contact-modal';

@Component({
  selector: 'app-consultoria',
  standalone: true,
  imports: [ContactModal],
  template: `
    <main class="page consultoria-page">
      <nav class="topbar consultoria-topbar" aria-label="Navegacao principal">
        <a class="brand" href="/" aria-label="ZERO1BIT">
          <img src="/ZEROUM.svg" alt="ZERO1BIT" />
          <span>ZERO1BIT</span>
        </a>
      </nav>

      <section class="hero cto-hero" id="inicio">
        <div class="hero-copy">
          <div class="eyebrow">Consultoria & CTO as a Service</div>
          <h1>Estratégia técnica para<br>acelerar seu negócio.</h1>
          <p>
            Sem desperdício de tempo e capital. Arquitetura, stack, produto e
            liderança técnica sob demanda para empresas que precisam decidir certo.
          </p>
          <div class="hero-actions">
            <a class="button button-dark" href="#" (click)="$event.preventDefault(); openModal()">Agendar diagnóstico grátis</a>
          </div>
        </div>
        <div class="cto-visual">
          <div class="cto-card cto-card-1">
            <b>Stack</b>
            <span>Java · Node · Angular · React · Flutter · PHP</span>
          </div>
          <div class="cto-card cto-card-2">
            <b>Arquitetura</b>
            <span>Microsserviços · Event-driven · Serverless</span>
          </div>
          <div class="cto-card cto-card-3">
            <b>Produto</b>
            <span>MVP · Roadmap · OKRs · Métricas</span>
          </div>
        </div>
      </section>

      <section class="metrics-section">
        <span class="metrics-badge">Métricas rápidas</span>
        <div class="metrics-grid">
          <article>
            <strong>30+</strong>
            <span>Produtos liderados tecnicamente para empresas parceiras</span>
          </article>
          <article>
            <strong>0%</strong>
            <span>Taxa de downtime crítico nas operações</span>
          </article>
          <article>
            <strong>Stacks</strong>
            <span>Usamos o que for melhor para seu negócio</span>
          </article>
          <article>
            <strong>97%</strong>
            <span>Clientes que renovam ou expandem o contrato satisfeitos</span>
          </article>
          <article>
            <strong>R$ 2,5M+</strong>
            <span>Em economia gerada para clientes nos últimos 36 meses</span>
          </article>
          <article>
            <strong>6 semanas</strong>
            <span>Tempo médio do diagnóstico ao primeiro deploy</span>
          </article>
        </div>
      </section>

      <section class="tech-strip" aria-label="Tecnologias e parcerias">
        <span class="tech-strip-label">Tecnologias e parcerias que dominamos:</span>
        <div class="tech-strip-logos">
          <img src="/java.svg" alt="Java" />
          <img src="/php-alt.svg" alt="PHP" />
          <img src="/apple-app-store.svg" alt="Apple" />
          <img src="/google-cloud.svg" alt="Google" />
          <img src="/microsoft-azure.svg" alt="Microsoft" />
          <img src="/aws.svg" alt="AWS" />
          <img src="/github-icon.svg" alt="GitHub" />
          <img src="/vercel.svg" alt="Vercel" />
          <img src="/cloudflare-icon.svg" alt="Cloudflare" />
          <img src="/nodejs-icon-alt.svg" alt="Node.js" />
          <img src="/react.svg" alt="React" />
          <img src="/flutter.svg" alt="Flutter" />
          <img src="/angular-icon.svg" alt="Angular" />
        </div>
      </section>

      <section class="section split-section" id="servicos">
        <div class="section-copy">
          <span class="section-kicker">O que fazemos</span>
          <h2>CTO sob demanda para<br>quem precisa entregar.</h2>
          <p>
            Liderança técnica sem custo fixo. Desenhamos a arquitetura, definimos
            a stack, estruturamos o time e acompanhamos a execução do zero ao deploy.
          </p>
        </div>
          <div class="solution-stack">
          @for (card of visibleSolutions(); track card.title) {
            <article class="solution-card" [class.dark]="card.dark">
              <div class="solution-icon" [innerHTML]="card.icon"></div>
              <span>{{ card.num }}</span>
              <h3>{{ card.title }}</h3>
              <p>{{ card.text }}</p>
            </article>
          }
          </div>
        <div class="carousel-indicators">
          <span [class.active]="pageIndex() === 0"></span>
          <span [class.active]="pageIndex() === 1"></span>
        </div>
      </section>

      <section class="section when-section">
        <div class="section-heading">
          <span class="section-kicker">Quando contratar</span>
          <h2>Um CTO as a Service é<br>pra você se...</h2>
        </div>
        <div class="when-grid">
          <div class="when-card">
            <div class="when-card-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
            </div>
            <div class="when-card-body">
              <strong>Arquitetura não escala</strong>
              <p>Seu produto está em produção, mas a arquitetura atual não suporta o crescimento.</p>
            </div>
          </div>
          <div class="when-card">
            <div class="when-card-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
            </div>
            <div class="when-card-body">
              <strong>Due diligence ou investimento</strong>
              <p>Precisa de liderança técnica para captar investimento ou passar por uma auditoria.</p>
            </div>
          </div>
          <div class="when-card">
            <div class="when-card-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
            </div>
            <div class="when-card-body">
              <strong>Faltam processos e governança</strong>
              <p>Time técnico crescendo, mas sem processos, padrões ou governança definidos.</p>
            </div>
          </div>
          <div class="when-card">
            <div class="when-card-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
            </div>
            <div class="when-card-body">
              <strong>Sistemas legados travando a operação</strong>
              <p>Quer modernizar sistemas legados sem parar a operação e sem riscos.</p>
            </div>
          </div>
          <div class="when-card">
            <div class="when-card-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
            </div>
            <div class="when-card-body">
              <strong>Decisões críticas sem direção</strong>
              <p>Precisa de visão estratégica imparcial para tomar decisões técnicas críticas.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="section engagement-section">
        <div class="section-heading">
          <span class="section-kicker">Modelos de Engajamento</span>
          <h2>Como contratamos</h2>
        </div>
        <div class="engagement-grid">
          <article class="engagement-card">
            <strong>Advisor</strong>
            <span class="hours">4-8h/semana</span>
            <p>Ideal para Startups early-stage e validação de ideia.</p>
          </article>
          <article class="engagement-card">
            <strong>Fractional</strong>
            <span class="hours">16-24h/semana</span>
            <p>Ideal para Scale-up e estruturação de time.</p>
          </article>
          <article class="engagement-card">
            <strong>Interim</strong>
            <span class="hours">3-6 meses</span>
            <p>Ideal para Transição de CTO e projetos críticos.</p>
          </article>
          <article class="engagement-card">
            <strong>Project-based</strong>
            <span class="hours">Por entrega</span>
            <p>Ideal para MVP, Migração ou Auditoria.</p>
          </article>
        </div>
      </section>

      <section class="section" style="text-align:center">
        <div style="max-width:680px;margin:0 auto">
          <span class="section-kicker">Próximo passo</span>
          <h2 style="margin:18px 0 0;font-size:clamp(42px,6vw,78px);line-height:.92;letter-spacing:-0.045em">Vamos diagnosticar seu projeto?</h2>
          <p style="color:#4b5563;font-size:18px;line-height:1.6;margin-top:22px">
            Uma conversa sem compromisso para entender seu momento e mostrar
            como podemos acelerar sua entrega técnica.
          </p>
          <div class="hero-actions" style="justify-content:center;margin-top:34px">
            <a class="button button-dark" href="https://wa.me/5585997277128" target="_blank" rel="noopener">Falar no WhatsApp</a>
            <a class="button button-light" href="#" (click)="$event.preventDefault(); openModal()">Enviar mensagem</a>
          </div>
        </div>
      </section>

      <section class="section faq-section" id="faq">
        <div class="section-heading">
          <span class="section-kicker">FAQ</span>
          <h2>Perguntas frequentes</h2>
        </div>
        <div class="faq-list">
          <details class="faq-item">
            <summary>Quanto custa o serviço?</summary>
            <div class="faq-answer">
              <p>O investimento varia conforme o escopo e complexidade do projeto. Oferecemos modelos flexíveis: Advisor, Fractional, Interim ou Project-based. Agende um diagnóstico gratuito para receber uma proposta personalizada.</p>
            </div>
          </details>
          <details class="faq-item">
            <summary>Vocês realizam due diligence técnica para rodadas de investimento?</summary>
            <div class="faq-answer">
              <p>Sim. Fazemos auditoria completa de arquitetura, código, segurança, dívida técnica e governança. Entregamos um relatório detalhado que investidores usam como parte do processo de due diligence, com riscos mapeados e recomendações priorizadas.</p>
            </div>
          </details>
          <details class="faq-item">
            <summary>Como funciona a modernização de sistemas legados?</summary>
            <div class="faq-answer">
              <p>Começamos com um diagnóstico completo: mapeamento de dependências, análise de risco e definição de estratégia (replatform, refactor ou rebuild). A migração é feita em paralelo à operação existente, sem downtime, com rollback planejado a cada etapa.</p>
            </div>
          </details>
          <details class="faq-item">
            <summary>A equipe é remota ou presencial?</summary>
            <div class="faq-answer">
              <p>Somos 100% emotos, o que nos permite ser mais ágeis e ter custos menores. Realizamos reuniões semanais de alinhamento e estamos disponíveis via Slack/WhatsApp durante o horário comercial. Havendo necessidade de atividades presenciais é possível fazer ajustes.</p>
            </div>
          </details>
          <details class="faq-item">
            <summary>Qual a garantia de qualidade e governança?</summary>
            <div class="faq-answer">
              <p>Trabalhamos com:</p>
              <ul>
                <li>Code review sistemático em todo pull request</li>
                <li>Testes automatizados (unitários, integração, e2e)</li>
                <li>CI/CD com validação de segurança e qualidade</li>
                <li>Métricas de performance e observabilidade</li>
                <li>Documentação técnica e de arquitetura</li>
              </ul>
              <p>Nossa taxa de retrabalho é inferior a 5%.</p>
            </div>
          </details>
        </div>
      </section>

      <footer class="footer" id="contato">
        <div class="footer-main">
          <a class="brand footer-brand" href="/">
            <img src="/ZEROUM.svg" alt="ZERO1BIT" />
            <span>ZERO1BIT</span>
          </a>
          <p>Venture Builder. Criamos, aceleramos e escalamos tecnologias que conectam o setor privado e público ao futuro.</p>
        </div>
        <div>
          <h4>Soluções</h4>
          <a href="/#produtos">temrango</a>
          <a href="/#produtos">pescaprecos</a>
          <a href="/#produtos">Essencial PDV</a>
          <a href="/#produtos">Kobex</a>
        </div>
        <div>
          <h4>Empresa</h4>
          <a href="/#solucoes">Desenvolvimento</a>
          <a href="/consultoria" target="_blank">Consultoria</a>
          <a href="/govtech">GovTech</a>
          <a href="/#contato">Seja parceiro</a>
        </div>
        <div>
          <h4>Contato</h4>
          <a href="tel:+5585997277128">(85) 9 9727-7128</a>
          <a href="mailto:zeroumbit@gmail.com">zeroumbit&#64;gmail.com</a>
          <span>Canindé/CE (sede)</span>
        </div>
        <small>CNPJ 21.582.343/0001-81 | Uma empresa pescaprecos.com</small>
      </footer>
    </main>

    <app-contact-modal [show]="showModal()" (dismiss)="closeModal()" />
  `,
  styles: [`
    .consultoria-page .consultoria-topbar {
      animation: none;
      position: static;
      display: flex;
      justify-content: center;
      background: transparent;
      border: none;
      box-shadow: none;
      padding: 10px 0 20px;
    }

    .cto-hero {
      grid-template-columns: 1fr 1fr;
      text-align: left;
    }

    .cto-hero .hero-copy {
      justify-items: start;
    }

    .cto-hero h1 {
      text-align: left;
      margin-left: 0;
    }

    .split-section .solution-stack {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 14px;
      align-self: start;
      min-height: 460px;
      align-content: stretch;
      min-width: 0;
    }

    .carousel-indicators {
      grid-column: 2;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      margin-top: -44px;
      height: 8px;
    }

    .carousel-indicators span {
      display: block;
      width: 10px;
      height: 8px;
      border-radius: 10px;
      background: #e6e8eb;
      transition: all .3s ease;
    }

    .carousel-indicators span.active {
      width: 32px;
      background: #050505;
    }

    .split-section .solution-card {
      height: 100%;
      min-height: 460px;
      min-width: 0;
      animation: fadeSlideIn .5s ease both;
    }

    .split-section .solution-card:nth-child(1) { animation-delay: 0s; }
    .split-section .solution-card:nth-child(2) { animation-delay: .12s; }

    @keyframes fadeSlideIn {
      from {
        opacity: 0;
        transform: translateY(18px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .tech-strip {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 18px;
      padding: 20px 0;
      margin: 28px 0 0;
    }

    .tech-strip-label {
      font-weight: 750;
      font-size: 14px;
      color: #4b5563;
    }

    .tech-strip-logos {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 30px;
      flex-wrap: wrap;
    }

    .tech-strip-logos img {
      height: 26px;
      width: auto;
      object-fit: contain;
      opacity: .65;
      transition: opacity .2s ease, transform .2s ease;
    }

    .tech-strip-logos img:hover {
      opacity: 1;
      transform: scale(1.15);
    }

    .cto-visual {
      display: grid;
      gap: 14px;
      align-content: center;
      min-height: 500px;
    }

    .when-section {
      text-align: center;
      padding-top: 108px;
    }

    .when-section .section-heading {
      margin-bottom: 44px;
    }

    .when-section h2 {
      margin-top: 16px;
      font-size: clamp(36px, 5vw, 64px);
      line-height: .92;
      letter-spacing: -0.04em;
    }

    .when-grid {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 14px;
      text-align: left;
    }

    .when-card {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
      padding: 28px 24px;
      border: 1px solid var(--line);
      border-radius: 20px;
      background: #fff;
      transition: transform .22s ease, box-shadow .22s ease;

      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 12px 36px rgba(15,23,42,.08);
      }
    }

    .when-card-icon {
      flex-shrink: 0;
      display: grid;
      place-items: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: #059669;
      color: #fff;
    }

    .when-card-body {
      strong {
        display: block;
        font-size: 16px;
        line-height: 1.2;
        margin-bottom: 6px;
      }

      p {
        margin: 0;
        font-size: 14px;
        line-height: 1.5;
        color: #4b5563;
      }
    }

    .solution-icon {
      margin-bottom: 12px;
      opacity: .8;
    }

    .solution-card.dark .solution-icon {
      color: #fff;
    }

    .solution-card:not(.dark) .solution-icon {
      color: #050505;
    }

    .engagement-section {
      text-align: center;
      padding-top: 108px;
    }

    .engagement-section .section-heading {
      margin-bottom: 44px;
    }

    .engagement-section h2 {
      margin-top: 16px;
      font-size: clamp(36px, 5vw, 64px);
      line-height: .92;
      letter-spacing: -0.04em;
    }

    .engagement-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 14px;
    }

    .engagement-card {
      padding: 32px 24px;
      border: 1px solid var(--line);
      border-radius: 24px;
      background: #fff;
      text-align: left;
      transition: transform .22s ease, box-shadow .22s ease;

      &:hover {
        transform: translateY(-4px);
        box-shadow: 0 18px 50px rgba(15,23,42,.1);
      }

      strong {
        display: block;
        font-size: 22px;
        line-height: 1;
        letter-spacing: -.03em;
      }

      .hours {
        display: inline-block;
        margin-top: 10px;
        padding: 4px 12px;
        border-radius: 999px;
        background: #f3f4f6;
        font-size: 13px;
        font-weight: 720;
        color: #4b5563;
      }

      p {
        margin-top: 16px;
        font-size: 15px;
        line-height: 1.5;
        color: #4b5563;
      }
    }

    .metrics-section {
      margin-top: 24px;
    }

    .metrics-badge {
      display: inline-block;
      margin-bottom: 14px;
      padding: 5px 14px;
      border-radius: 999px;
      background: #f3f4f6;
      font-size: 12px;
      font-weight: 750;
      color: #4b5563;
      text-transform: uppercase;
      letter-spacing: .04em;
    }

    .metrics-grid {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 10px;
    }

    .metrics-grid article {
      padding: 18px 20px;
      border: 1px solid var(--line);
      border-radius: 18px;
      background: #fff;
    }

    .metrics-grid strong {
      display: block;
      font-size: 32px;
      line-height: 1;
      letter-spacing: -0.04em;
    }

    .metrics-grid span {
      display: block;
      max-width: 200px;
      margin-top: 10px;
      font-size: 14px;
      line-height: 1.4;
      color: #4b5563;
    }

    .cto-card {
      padding: 24px 28px;
      border-radius: 24px;
      border: 1px solid var(--line);
      background: #fff;
      transition: transform .22s ease, box-shadow .22s ease;

      &:hover {
        transform: translateY(-4px);
        box-shadow: 0 18px 50px rgba(15, 23, 42, .1);
      }

      b {
        display: block;
        font-size: 20px;
        margin-bottom: 8px;
      }

      span {
        color: #4b5563;
        font-size: 15px;
        line-height: 1.5;
      }
    }

    .cto-card-1 {
      animation: rise .6s .1s both;
    }
    .cto-card-2 {
      animation: rise .6s .2s both;
    }
    .cto-card-3 {
      animation: rise .6s .3s both;
    }

    .faq-section {
      max-width: 800px;
      margin: 0 auto;
      padding-top: 108px;
    }

    .faq-section .section-heading {
      text-align: center;
      margin-bottom: 44px;
    }

    .faq-section .section-heading h2 {
      margin-top: 16px;
      font-size: clamp(36px, 5vw, 64px);
      line-height: .92;
      letter-spacing: -0.04em;
    }

    .faq-list {
      display: grid;
      gap: 10px;
    }

    .faq-item {
      border: 1px solid var(--line);
      border-radius: 20px;
      background: #fff;
      overflow: hidden;
      transition: box-shadow .22s ease;
    }

    .faq-item[open] {
      box-shadow: 0 8px 30px rgba(15, 23, 42, .06);
    }

    .faq-item summary {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px 24px;
      font-weight: 720;
      font-size: 17px;
      cursor: pointer;
      list-style: none;
      user-select: none;
    }

    .faq-item summary::-webkit-details-marker {
      display: none;
    }

    .faq-item summary::after {
      content: '+';
      font-size: 22px;
      font-weight: 400;
      color: #9ca3af;
      transition: transform .22s ease;
    }

    .faq-item[open] summary::after {
      transform: rotate(45deg);
    }

    .faq-answer {
      padding: 0 24px 22px;
      font-size: 15px;
      line-height: 1.65;
      color: #4b5563;
    }

    .faq-answer p {
      margin: 0 0 8px;
    }

    .faq-answer ul {
      margin: 0 0 8px;
      padding-left: 20px;
    }

    .faq-answer li {
      margin-bottom: 4px;
    }

    @media (max-width: 1040px) {
      .cto-hero {
        grid-template-columns: 1fr;
      }
      .cto-visual {
        min-height: auto;
      }
      .cto-stats {
        grid-template-columns: repeat(2, 1fr);
      }
      .engagement-grid {
        grid-template-columns: repeat(2, 1fr);
      }
      .when-grid {
        grid-template-columns: repeat(3, 1fr);
      }
      .metrics-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    @media (max-width: 720px) {
      .engagement-grid {
        grid-template-columns: 1fr;
      }
      .when-grid {
        grid-template-columns: repeat(2, 1fr);
      }
      .metrics-grid {
        grid-template-columns: repeat(2, 1fr);

        article {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 18px;

          strong {
            font-size: 28px;
            flex-shrink: 0;
          }

          span {
            margin-top: 0;
          }
        }
      }
      .when-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    @media (max-width: 500px) {
      .when-grid {
        grid-template-columns: 1fr;
      }
      .metrics-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ConsultoriaPage implements OnInit, OnDestroy {
  protected readonly showModal = signal(false);

  protected openModal() { this.showModal.set(true); document.body.style.overflow = 'hidden'; }
  protected closeModal() { this.showModal.set(false); document.body.style.overflow = ''; }

  protected readonly solutions = [
    { num: '01', title: 'Estratégia e Planejamento', text: 'Mapeamento de objetivos, Definição de Roadmap Tecnológico, Arquitetura de Soluções (Escalável/Microservices) e Validação de Produto.', dark: false, icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>' },
    { num: '02', title: 'Execução e Operação', text: 'Liderança e Estruturação de Times (Squads), Engenharia de Software e Qualidade (CI/CD, Testes) e Gestão de Infraestrutura e Cloud.', dark: true, icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>' },
    { num: '03', title: 'Governança e Riscos', text: 'Segurança e Conformidade (LGPD/DevSecOps), Gestão de Custos e ROI Tecnológico e Due Diligence Técnica (Auditoria).', dark: false, icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>' },
    { num: '04', title: 'Inovação e Upgrade', text: 'Modernização de Legado, Integração de Tecnologias Emergentes (IA/ML) e Cultura de Inovação e Dados.', dark: true, icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>' },
  ];

  protected readonly pageIndex = signal(0);
  private intervalId: ReturnType<typeof setInterval> | null = null;

  protected readonly visibleSolutions = computed(() => {
    const start = this.pageIndex() * 2;
    return this.solutions.slice(start, start + 2);
  });

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.pageIndex.update(i => (i + 1) % 2);
    }, 7000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
