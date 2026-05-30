import { Component } from '@angular/core';

@Component({
  selector: 'app-consultoria',
  standalone: true,
  template: `
    <main class="page consultoria-page">
      <nav class="topbar" aria-label="Navegacao principal">
        <a class="brand" href="/" aria-label="ZERO1BIT">
          <img src="/ZEROUM.svg" alt="ZERO1BIT" />
          <span>ZERO1BIT</span>
        </a>
        <div class="nav-links">
          <a href="/#solucoes">Soluções</a>
          <a href="/#produtos">Produtos</a>
          <a href="/#govtech">GovTech</a>
          <a href="/#contato">Contato</a>
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

      <section class="hero cto-hero" id="inicio">
        <div class="hero-copy">
          <div class="eyebrow">Consultoria & CTO as a Service</div>
          <h1>Estratégia técnica para<br>acelerar seu negócio.</h1>
          <p>
            Sem desperdício de tempo e capital. Arquitetura, stack, produto e
            liderança técnica sob demanda para empresas que precisam decidir certo.
          </p>
          <div class="hero-actions">
            <a class="button button-dark" href="mailto:zeroumbit@gmail.com">Agendar diagnóstico</a>
            <a class="button button-light" href="#servicos">Ver serviços</a>
          </div>
        </div>
        <div class="cto-visual">
          <div class="cto-card cto-card-1">
            <b>Stack</b>
            <span>Node · Angular · React · Flutter · Go</span>
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

      <section class="trusted-strip" aria-label="Áreas de atuação">
        <span>Startups</span>
        <span>Corporações</span>
        <span>GovTech</span>
        <span>Fintechs</span>
        <span>Marketplace</span>
        <span>SaaS</span>
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
          <article class="solution-card">
            <span>01</span>
            <h3>Diagnóstico técnico</h3>
            <p>Mapeamos o estado atual, riscos, divida técnica e oportunidades de melhoria no seu produto ou operação.</p>
          </article>
          <article class="solution-card dark">
            <span>02</span>
            <h3>Arquitetura & Stack</h3>
            <p>Definimos a arquitetura ideal, escolha de tecnologias, provedores de nuvem e padrões de desenvolvimento.</p>
          </article>
          <article class="solution-card">
            <span>03</span>
            <h3>Liderança técnica</h3>
            <p>Atuamos como CTO interino ou consultor para estruturar squads, processos e entregas com qualidade.</p>
          </article>
          <article class="solution-card dark">
            <span>04</span>
            <h3>Code Review & Auditoria</h3>
            <p>Revisamos código, segurança, performance e boas práticas para garantir que sua base técnica seja sólida.</p>
          </article>
        </div>
      </section>

      <section class="section cto-stats">
        <article>
          <strong>6+</strong>
          <span>produtos liderados tecnicamente</span>
        </article>
        <article>
          <strong>0%</strong>
          <span>taxa de downtime crítico nas operações</span>
        </article>
        <article>
          <strong>Figma</strong>
          <span>ao deploy em ciclos de 2 semanas</span>
        </article>
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
            <a class="button button-light" href="mailto:zeroumbit@gmail.com">Enviar e-mail</a>
          </div>
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
          <a href="/#govtech">GovTech</a>
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
  `,
  styles: [`
    .consultoria-page .topbar {
      animation: none;
    }

    .cto-hero {
      grid-template-columns: 1fr 1fr;
    }

    .cto-visual {
      display: grid;
      gap: 14px;
      align-content: center;
      min-height: 500px;
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

    .cto-stats {
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
    }

    @media (max-width: 720px) {
      .cto-stats {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ConsultoriaPage {}
