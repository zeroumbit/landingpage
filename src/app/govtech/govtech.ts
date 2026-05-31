import { Component, signal } from '@angular/core';
import { ContactModal } from '../shared/contact-modal';

@Component({
  selector: 'app-govtech',
  standalone: true,
  imports: [ContactModal],
  template: `
    <main class="page govtech-page">
      <nav class="topbar govtech-topbar" aria-label="Navegacao principal">
        <a class="brand" href="/" aria-label="ZERO1BIT">
          <img src="/ZEROUM.svg" alt="ZERO1BIT" />
          <span>ZERO1BIT</span>
        </a>
      </nav>

      <section class="hero gov-hero" id="inicio">
        <div class="hero-copy">
          <div class="eyebrow">GovTech</div>
          <h1>Nova gestão digital para o<br><span style="white-space:nowrap">poder público.</span></h1>
          <p>
            Plataformas auditáveis e seguras para reduzir custos, digitalizar processos
            e organizar rotinas de prefeituras, secretarias e operações públicas.
          </p>
          <div class="hero-actions">
            <a class="button button-dark" href="#" (click)="$event.preventDefault(); openModal()">Solicitar proposta grátis</a>
            <a class="button button-light" href="#solucoes">Ver soluções</a>
          </div>
        </div>
        <div class="gov-hero-visual">
          <div class="gov-hero-card gov-hero-card-1">
            <b>Documentos</b>
            <span>Gestão documental com rastreio, backup e auditoria</span>
          </div>
          <div class="gov-hero-card gov-hero-card-2">
            <b>RH</b>
            <span>Controle de férias, atestados e rotinas de RH</span>
          </div>
          <div class="gov-hero-card gov-hero-card-3">
            <b>Legislação</b>
            <span>Gestão de sessões, proposições e atos legislativos</span>
          </div>
        </div>
      </section>

      <section class="tech-strip" aria-label="Tecnologias e parceiros">
        <span class="tech-strip-label">Tecnologias e parceiros que utilizamos:</span>
        <div class="tech-strip-logos">
          <img src="/java.svg" alt="Java" />
          <img src="/php-alt.svg" alt="PHP" />
          <img src="/aws.svg" alt="AWS" />
          <img src="/google-cloud.svg" alt="Google Cloud" />
          <img src="/microsoft-azure.svg" alt="Microsoft Azure" />
          <img src="/github-icon.svg" alt="GitHub" />
          <img src="/cloudflare-icon.svg" alt="Cloudflare" />
          <img src="/nodejs-icon-alt.svg" alt="Node.js" />
          <img src="/react.svg" alt="React" />
          <img src="/angular-icon.svg" alt="Angular" />
          <img src="/flutter.svg" alt="Flutter" />
        </div>
      </section>

      <section class="section gov-solutions-section" id="solucoes">
        <div class="section-heading">
          <span class="section-kicker">Soluções públicas</span>
          <h2>Plataformas inteligentes para a<br>gestão municipal.</h2>
        </div>
        <div class="gov-solutions-grid">
          @for (card of solutions; track card.title) {
            <a class="solution-card" [class.dark]="card.dark" [href]="card.href || '#'" [target]="card.href ? '_blank' : null" [rel]="card.href ? 'noopener' : null">
              <span>{{ card.num }}</span>
              <h3>{{ card.title }}</h3>
              <p>{{ card.text }}</p>
              @if (card.href) {
                <b class="solution-arrow" aria-hidden="true">&nearr;</b>
              }
            </a>
          }
        </div>
      </section>

      <section class="section gov-stats" id="resultados">
        <article>
          <strong>100%</strong>
          <span>adequação à LGPD e LAI</span>
        </article>
        <article>
          <strong>0</strong>
          <span>incidentes de segurança em plataformas públicas</span>
        </article>
        <article>
          <strong>Paperless</strong>
          <span>redução de custos com digitalização de processos</span>
        </article>
      </section>

      <section class="section" style="text-align:center">
        <div style="max-width:680px;margin:0 auto">
          <span class="section-kicker">Próximo passo</span>
          <h2 style="margin:18px 0 0;font-size:clamp(42px,6vw,78px);line-height:.92;letter-spacing:-0.045em">Vamos transformar sua gestão pública?</h2>
          <p style="color:#4b5563;font-size:18px;line-height:1.6;margin-top:22px">
          Agende uma conversa sem compromisso para entender as necessidades do seu município e apresentar nossas soluções.
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
            <summary>Quanto custa implantar uma solução pública?</summary>
            <div class="faq-answer">
              <p>O investimento varia conforme o porte do município e a complexidade dos módulos contratados. Oferecemos modelos por assinatura mensal com implantação acelerada. Solicite uma proposta personalizada.</p>
            </div>
          </details>
          <details class="faq-item">
            <summary>As plataformas são seguras e auditáveis?</summary>
            <div class="faq-answer">
              <p>Sim. Todas as nossas soluções são desenvolvidas com:</p>
              <ul>
                <li>Aderência à LGPD e LAI</li>
                <li>Criptografia de dados em trânsito e em repouso</li>
                <li>Registro de auditoria de todas as operações</li>
                <li>Backup automatizado na nuvem</li>
                <li>Controle de acesso por perfil</li>
              </ul>
            </div>
          </details>
          <details class="faq-item">
            <summary>Quanto tempo leva para implantar?</summary>
            <div class="faq-answer">
              <p>A implantação inicial pode ser feita em 2 a 4 semanas, dependendo da quantidade de módulos e da preparação dos dados. Oferecemos treinamento para a equipe da prefeitura.</p>
            </div>
          </details>
          <details class="faq-item">
            <summary>Precisamos de infraestrutura própria?</summary>
            <div class="faq-answer">
              <p>Não. Todas as soluções são hospedadas em nuvem com alta disponibilidade. Basta um navegador web e acesso à internet para começar a usar.</p>
            </div>
          </details>
          <details class="faq-item">
            <summary>As soluções funcionam em cidades pequenas?</summary>
            <div class="faq-answer">
              <p>Sim! Nossas plataformas são escaláveis e atendem desde pequenos municípios até grandes secretarias. O custo é proporcional ao porte da cidade.</p>
            </div>
          </details>
          <details class="faq-item">
            <summary>Oferecem suporte e treinamento?</summary>
            <div class="faq-answer">
              <p>Sim. Oferecemos suporte técnico durante horário comercial, treinamento inicial para a equipe e documentação completa. Para municípios que contratam pacotes completos, disponibilizamos canal prioritário.</p>
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
          <a href="/consultoria" target="_blank" rel="noopener">Consultoria</a>
          <a href="/govtech" target="_blank" rel="noopener">GovTech</a>
          <a href="/representante" target="_blank" rel="noopener">Seja parceiro</a>
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
    .govtech-page .govtech-topbar {
      animation: none;
      position: static;
      display: flex;
      justify-content: center;
      background: transparent;
      border: none;
      box-shadow: none;
      padding: 10px 0 20px;
    }

    .gov-hero {
      grid-template-columns: 1fr 1fr;
      text-align: left;
    }

    .gov-hero .hero-copy {
      justify-items: start;
    }

    .gov-hero h1 {
      text-align: left;
      margin-left: 0;
    }

    .gov-hero-visual {
      display: grid;
      gap: 14px;
      align-content: center;
      min-height: 500px;
      justify-self: end;
    }

    .gov-hero-card {
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

    .gov-hero-card-1 { animation: rise .6s .1s both; }
    .gov-hero-card-2 { animation: rise .6s .2s both; }
    .gov-hero-card-3 { animation: rise .6s .3s both; }

    .gov-stats {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
      padding-top: 118px;

      article {
        min-height: 150px;
        padding: 24px;
        border: 1px solid var(--line);
        border-radius: 24px;
        background: #fff;
      }

      strong {
        display: block;
        font-size: 52px;
        line-height: 1;
        letter-spacing: -0.04em;
      }

      span {
        display: block;
        max-width: 260px;
        margin-top: 18px;
        color: #4b5563;
        line-height: 1.45;
      }
    }

    .gov-solutions-section .section-heading {
      text-align: center;
      margin-bottom: 44px;
    }

    .gov-solutions-section .section-heading h2 {
      margin-top: 16px;
    }

    .gov-solutions-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 14px;
      align-content: stretch;
    }

    .gov-solutions-grid .solution-card {
      position: relative;
      display: flex;
      flex-direction: column;
      height: 100%;
      min-height: 320px;
      padding: 28px;
      padding-right: 82px;
      border: 1px solid var(--line);
      border-radius: 30px;
      background: #f7f8f9;
      cursor: pointer;
      animation: fadeSlideIn .5s ease both;
      transition: transform .22s ease, background .22s ease, border-color .22s ease;

      span:first-child {
        color: #6b7280;
        font-weight: 850;
      }

      h3 {
        margin: 42px 0 14px;
        font-size: clamp(20px, 4vw, 36px);
        line-height: .98;
        letter-spacing: -0.035em;
      }

      p {
        color: #4b5563;
        font-size: 15px;
        line-height: 1.5;
      }

      &:hover {
        transform: translateY(-6px);
        border-color: rgba(24, 199, 223, .65);
        background: #17c8dc;

        p, span:first-child, h3 {
          color: #050505;
        }

        .solution-arrow {
          opacity: 1;
          transform: translate(0, 0);
        }
      }

      &.dark {
        color: #fff;
        background: #050505;

        p, span:first-child {
          color: rgba(255,255,255,.72);
        }

        &:hover {
          border-color: rgba(24, 199, 223, .65);
          background: #17c8dc;
        }
      }
    }

    .solution-arrow {
      position: absolute;
      right: 22px;
      bottom: 22px;
      display: grid;
      place-items: center;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      color: #050505;
      background: #fff;
      box-shadow: 0 16px 34px rgba(5,5,5,.16);
      opacity: 0;
      transform: translate(10px, 10px);
      transition: opacity .2s ease, transform .2s ease;
    }

    .gov-solutions-grid .solution-card:nth-child(1) { animation-delay: 0s; }
    .gov-solutions-grid .solution-card:nth-child(2) { animation-delay: .08s; }
    .gov-solutions-grid .solution-card:nth-child(3) { animation-delay: .16s; }
    .gov-solutions-grid .solution-card:nth-child(4) { animation-delay: .24s; }

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
      .gov-hero {
        grid-template-columns: 1fr;
      }
      .gov-hero-visual {
        min-height: auto;
      }
      .gov-stats {
        grid-template-columns: repeat(2, 1fr);
      }
      .gov-solutions-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 720px) {
      .gov-stats {
        grid-template-columns: 1fr;
      }
      .gov-solutions-grid {
        grid-template-columns: 1fr;
      }
      .gov-solutions-grid .solution-card {
        min-height: 240px;
      }
    }
  `]
})
export class GovtechPage {
  protected readonly showModal = signal(false);

  protected openModal() { this.showModal.set(true); document.body.style.overflow = 'hidden'; }
  protected closeModal() { this.showModal.set(false); document.body.style.overflow = ''; }

  protected readonly solutions = [
    { num: '01', title: 'Fluxoo DOC', text: 'Gestão documental com rastreio, backup, auditoria e controle dos processos administrativos da prefeitura.', dark: false, href: 'https://doc.fluxoo.com.br/login' },
    { num: '02', title: 'Fluxoo RH', text: 'Controle de férias, atestados, funcionários e rotinas de recursos humanos para o setor público.', dark: true, href: '#' },
    { num: '03', title: 'Fluxoo Legisla', text: 'Gestão de câmaras de vereadores com controle de sessões, proposições e atos legislativos.', dark: false, href: '#' },
    { num: '04', title: 'Sites Institucionais', text: 'Sites para secretarias e prefeituras, preparados para comunicação pública com acessibilidade e transparência.', dark: true },
  ];

}
