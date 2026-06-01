import { Component, signal } from '@angular/core';
import { ContactModal } from '../shared/contact-modal';
import { RegistrationModal } from '../shared/registration-modal';

interface ProdutoCard {
  num: string;
  nome: string;
  descricao: string;
  publico: string;
  ticket: string;
  comissao: string;
  dark: boolean;
  href: string;
}

@Component({
  selector: 'app-representante',
  standalone: true,
  imports: [ContactModal, RegistrationModal],
  template: `
    <main class="page representante-page">
      <nav class="topbar representante-topbar" aria-label="Navegacao principal">
        <a class="brand" href="/" aria-label="ZERO1BIT">
          <img src="/ZEROUM.svg" alt="ZERO1BIT" />
          <span>ZERO1BIT</span>
        </a>
      </nav>

      <section class="hero rep-hero" id="inicio">
        <div class="hero-copy">
          <div class="eyebrow">Seja Representante</div>
          <h1>Seja nosso representante em sua cidade com ZERO investimento.</h1>
          <p>
            Fature alto representando soluções tecnológicas validadas e escale seu negócio sem riscos.
            Suporte total, comissões recorrentes e exclusividade territorial.
          </p>
          <div class="hero-actions">
            <a class="button button-dark" href="#" (click)="$event.preventDefault(); openRegister()">Quero ser representante</a>
          </div>
        </div>
        <div class="rep-hero-visual">
          <div class="rep-hero-card rep-hero-card-1">
            <b>R$ 0</b>
            <span>Investimento inicial zero para começar</span>
          </div>
          <div class="rep-hero-card rep-hero-card-2">
            <b>20%</b>
            <span>Comissão recorrente sobre vendas</span>
          </div>
          <div class="rep-hero-card rep-hero-card-3">
            <b>+10</b>
            <span>Representantes ativos em todo Brasil</span>
          </div>
        </div>
      </section>


      <section class="section rep-benefits-section" id="beneficios">
        <div class="section-heading">
          <span class="section-kicker">Por que ser representante?</span>
          <h2>Benefícios exclusivos<br>para você</h2>
        </div>
        <div class="rep-benefits-grid">
          <article class="rep-benefit-card">
            <div class="benefit-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
            </div>
            <h3>Zero Investimento Inicial</h3>
            <p>Sem taxa de franquia, sem estoque, sem custo de implantação.</p>
          </article>
          <article class="rep-benefit-card">
            <div class="benefit-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20"/><path d="m17 5-5-3-5 3"/><path d="M5 19h14"/></svg>
            </div>
            <h3>Alta Rentabilidade</h3>
            <p>Comissões de até 50% recorrentes sobre as vendas realizadas.</p>
          </article>
          <article class="rep-benefit-card">
            <div class="benefit-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
            </div>
            <h3>Portfólio Completo</h3>
            <p>Represente Delivery, Marketplace, PDV, Educação e GovTech.</p>
          </article>
          <article class="rep-benefit-card">
            <div class="benefit-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <h3>Suporte Total</h3>
            <p>Treinamento e suporte técnico dedicado e totalmente escalável.</p>
          </article>
          <article class="rep-benefit-card">
            <div class="benefit-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <h3>Exclusividade Territorial</h3>
            <p>Sua cidade, sua região, seu mercado com atuação exclusiva.</p>
          </article>
          <article class="rep-benefit-card">
            <div class="benefit-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
            </div>
            <h3>Escalabilidade</h3>
            <p>Cresça sem limites com produtos digitais de alta demanda.</p>
          </article>
        </div>
      </section>

      <section class="section rep-products-section" id="produtos">
        <div class="section-heading">
          <span class="section-kicker">O que você vai vender</span>
          <h2>Nossas soluções</h2>
        </div>
        <div class="rep-products-grid">
          @for (prod of produtos; track prod.nome; let i = $index) {
            <a class="rep-product-card" [class.dark]="prod.dark" [href]="prod.href" target="_blank" rel="noopener" [style.animation-delay]="i * 0.08 + 's'">
              <span class="rep-product-num">{{ prod.num }}</span>
              <h3>{{ prod.nome }}</h3>
              <p>{{ prod.descricao }}</p>
              <div class="rep-product-meta">
                <span><b>Público:</b> {{ prod.publico }}</span>
                <span><b>Comissão:</b> {{ prod.comissao }}</span>
              </div>
            </a>
          }
        </div>
      </section>

      <section class="section rep-steps-section" id="como-funciona">
        <div class="section-heading">
          <span class="section-kicker">Como funciona</span>
          <h2>5 passos para começar a faturar</h2>
        </div>
        <div class="rep-steps-grid">
          <article class="rep-step-card">
            <span class="rep-step-num">1</span>
            <h3>Cadastro gratuito</h3>
            <p>Preencha o formulário de pré-cadastro e nossa equipe entra em contato.</p>
          </article>
          <article class="rep-step-card">
            <span class="rep-step-num">2</span>
            <h3>Treinamento online</h3>
            <p>Capacitação rápida de 2 a 4 horas sobre produtos, mercado e técnicas de vendas.</p>
          </article>
          <article class="rep-step-card">
            <span class="rep-step-num">3</span>
            <h3>Material de vendas</h3>
            <p>Receba apresentações, cases de sucesso, propostas e todo material informativo.</p>
          </article>
          <article class="rep-step-card">
            <span class="rep-step-num">4</span>
            <h3>Prospecção</h3>
            <p>Identifique e abordee clientes na sua região com nosso suporte comercial.</p>
          </article>
          <article class="rep-step-card">
            <span class="rep-step-num">5</span>
            <h3>Comissão creditada</h3>
            <p>Venda realizada, comissão garantida. Receba todo mês sem atraso.</p>
          </article>
        </div>
      </section>

      <section class="section rep-support-section" id="suporte">
        <div class="section-copy" style="text-align:center;max-width: 800px;margin:0 auto">
          <span class="section-kicker">Suporte completo</span>
          <h2 style="margin-top:16px">O que oferecemos</h2>
        </div>
        <div class="rep-support-grid">
          <div class="rep-support-col">
            <h3>Nós fornecemos</h3>
            <ul class="rep-check-list">
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                Plataforma pronta e validada no mercado
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                Material informativo (apresentações, cases, propostas)
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                Suporte técnico para seus clientes
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                Contratos e documentação padronizada
              </li>
            </ul>
          </div>
          <div class="rep-support-col">
            <h3>Você cuida de</h3>
            <ul class="rep-check-list rep-check-list-you">
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                Prospecção de clientes
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                Apresentação comercial
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                Fechamento da venda
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                Relacionamento com o cliente
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="section rep-perfil-section">
        <div class="section-heading">
          <span class="section-kicker">Perfil ideal</span>
          <h2>Você é o representante<br>que buscamos se...</h2>
        </div>
        <div class="rep-perfil-grid">
          <div class="rep-perfil-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            <span>Experiência em vendas B2B (desejável, não obrigatório)</span>
          </div>
          <div class="rep-perfil-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            <span>Conhecimento do mercado local</span>
          </div>
          <div class="rep-perfil-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            <span>Proatividade e autonomia</span>
          </div>
          <div class="rep-perfil-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            <span>Boa comunicação e relacionamento</span>
          </div>
          <div class="rep-perfil-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            <span>Acesso a computador e internet</span>
          </div>
          <div class="rep-perfil-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            <span>Disponibilidade de 10 a 20 horas/semana</span>
          </div>
        </div>
      </section>

      <section class="section rep-comissoes-section" id="comissoes">
        <div class="section-heading">
          <span class="section-kicker">Modelo de remuneração</span>
          <h2>Transparência total<br>nas comissões</h2>
        </div>
        <div class="rep-tabela">
          <div class="rep-tabela-header">
            <span>Produto</span>
            <span>Comissão</span>
          </div>
          <div class="rep-tabela-row">
            <span><b>temrango.com</b> <small>Delivery</small></span>
            <span>30% a 50% sobre cada plano</span>
          </div>
          <div class="rep-tabela-row">
            <span><b>pescaprecos.com</b> <small>Marketplace</small></span>
            <span>30% a 50% sobre cada plano</span>
          </div>
          <div class="rep-tabela-row">
            <span><b>Essencial PDV</b> <small>Vendas</small></span>
            <span>30% sobre o valor do plano</span>
          </div>
          <div class="rep-tabela-row">
            <span><b>Fluxoo Edu</b> <small>Educação</small></span>
            <span>30% sobre cada contrato</span>
          </div>
          <div class="rep-tabela-row">
            <span><b>Fluxoo DOC</b> <small>GovTech</small></span>
            <span>Em média R$ 2.000,00/mês</span>
          </div>
          <div class="rep-tabela-row">
            <span><b>Fluxoo LEGISLA</b> <small>GovTech</small></span>
            <span>Em média R$ 2.000,00/mês</span>
          </div>
        </div>
        <div class="rep-bonus">
          <h3>Bônus por performance</h3>
          <div class="rep-bonus-grid">
            <div class="rep-bonus-card">
              <strong>10</strong>
              <span>clientes ativos por 12 meses</span>
              <b>R$ 200</b>
            </div>
            <div class="rep-bonus-card">
              <strong>20</strong>
              <span>clientes ativos por 12 meses</span>
              <b>R$ 400</b>
            </div>
            <div class="rep-bonus-card">
              <strong>30</strong>
              <span>clientes ativos por 12 meses</span>
              <b>R$ 600</b>
            </div>
          </div>
        </div>
      </section>

      <section class="section rep-depoimentos-section" id="depoimentos">
        <div class="section-heading">
          <span class="section-kicker">Depoimentos</span>
          <h2>Quem já representa<br>a ZERO1BIT</h2>
        </div>
        <div class="rep-depoimentos-grid">
          <blockquote class="rep-depoimento-card">
            <p>"Nossa parceria começou em dezembro de 2025 e estamos fazendo ótimos negócios no setor publico. Usamos o Fluxoo Legisla e nossos parceiros estão muito satisfeitos. O suporte é incrível."</p>
            <footer>— E3 Serviços - Melyssa Evilyn - CE <BR></footer>
          </blockquote>
          <blockquote class="rep-depoimento-card">
            <p>"Usamos as equipe da Zero1bit para acelerar a implantação de um novo sistema para um de nossos clientes e o resultado foi além do esperado. Equipe competente, técnica e sem enrolação."</p>
            <footer>— Upper Solutions - Leandro Fernandes - SP</footer>
          </blockquote>
          <blockquote class="rep-depoimento-card">
            <p>"Usoos times e as tecologias da Z1B, sempre me atendem. Meus clientes são empresas de energias renováveis e a Z1B é nosso parceiro oficial. Obrigado!"</p>
            <footer>— Welingson Sales - GDWW - CE/PE/RN/PA</footer>
          </blockquote>
        </div>
      </section>

      <section class="section faq-section" id="faq">
        <div class="section-heading">
          <span class="section-kicker">FAQ</span>
          <h2>Perguntas frequentes</h2>
        </div>
        <div class="faq-list">
          <details class="faq-item">
            <summary>Preciso ter experiência em tecnologia?</summary>
            <div class="faq-answer">
              <p>Não. Você não precisa ser especialista em tecnologia. Nós fornecemos treinamento completo e material de apoio. O importante é ter vontade de vender e aprender.</p>
            </div>
          </details>
          <details class="faq-item">
            <summary>Quanto tempo leva para começar a faturar?</summary>
            <div class="faq-answer">
              <p>Após o cadastro e treinamento (2-4 horas), você já pode começar a prospectar. Muitos representantes fecham os primeiros contratos nas primeiras 2 semanas.</p>
            </div>
          </details>
          <details class="faq-item">
            <summary>Posso ser representante e ter outro emprego?</summary>
            <div class="faq-answer">
              <p>Sim! A maioria dos nossos representantes começa como atividade complementar. Basta ter disponibilidade de umas 10 horas por semana para se dedicar.</p>
            </div>
          </details>
          <details class="faq-item">
            <summary>Qual o suporte para fechar a primeira venda?</summary>
            <div class="faq-answer">
              <p>Oferecemos acompanhamento comercial, material de apresentação e, se necessário, um de nossos consultores pode participar da reunião com você.</p>
            </div>
          </details>
          <details class="faq-item">
            <summary>Como recebo as comissões?</summary>
            <div class="faq-answer">
              <p>As comissões são pagas mensalmente por transferência bancária ou PIX, até o dia 15 do mês subsequente ao faturamento.</p>
            </div>
          </details>
          <details class="faq-item">
            <summary>Tenho exclusividade na minha cidade?</summary>
            <div class="faq-answer">
              <p>Sim. Trabalhamos com exclusividade territorial por cidade ou região, garantindo que você seja o único representante na sua área.</p>
            </div>
          </details>
          <details class="faq-item">
            <summary>Posso cancelar quando quiser?</summary>
            <div class="faq-answer">
              <p>Sim. Sem multa ou burocracia. Você pode cancelar a parceria a qualquer momento, e ainda receberá as comissões pendentes dos clientes que indicou.</p>
            </div>
          </details>
        </div>
      </section>

      <section class="rep-cta-final" id="cadastro">
        <div class="rep-cta-inner">
          <span class="section-kicker" style="color:rgba(5,5,5,.5)">Pronto para começar?</span>
          <h2>Cadastre-se agora<br>e comece a faturar</h2>
          <p>Junte-se aos nosso representantes em todo Brasil.</p>
          <div class="hero-actions" style="justify-content:center;margin-top:34px">
            <a class="button button-dark" href="#" (click)="$event.preventDefault(); openRegister()" style="border-color:#2563eb;background:#2563eb;color:#fff">Quero ser representante</a>
            <a class="button button-light" href="https://wa.me/5585997277128" target="_blank" rel="noopener" style="border-color:#2563eb;color:#2563eb"><span style="color:#2563eb">📞</span> Falar com consultor</a>
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
    <app-registration-modal [show]="showRegister()" (dismiss)="closeRegister()" />
  `,
  styles: [`
    .representante-page .representante-topbar {
      animation: none;
      position: static;
      display: flex;
      justify-content: center;
      background: transparent;
      border: none;
      box-shadow: none;
      padding: 10px 0 20px;
    }

    .rep-hero {
      display: grid;
      grid-template-columns: 1fr 1fr;
      text-align: left;
      gap: 40px;
    }

    .rep-hero .hero-copy {
      justify-items: start;
    }

    .rep-hero h1 {
      text-align: left;
      margin-left: 0;
      font-size: clamp(36px, 5vw, 64px);
      line-height: .92;
      letter-spacing: -0.045em;
    }

    .rep-hero-visual {
      display: grid;
      gap: 14px;
      align-content: center;
      min-height: 500px;
    }

    .rep-hero-card {
      padding: 28px 32px;
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
        font-size: 42px;
        line-height: 1;
        letter-spacing: -0.04em;
        margin-bottom: 8px;
      }

      span {
        color: #4b5563;
        font-size: 16px;
        line-height: 1.4;
      }
    }

    .rep-hero-card-1 { animation: rise .6s .1s both; }
    .rep-hero-card-2 { animation: rise .6s .2s both; }
    .rep-hero-card-3 { animation: rise .6s .3s both; }

    .rep-benefits-section .section-heading {
      text-align: center;
      margin-bottom: 44px;
    }

    .rep-benefits-section .section-heading h2 {
      margin-top: 16px;
      font-size: clamp(36px, 5vw, 64px);
      line-height: .92;
      letter-spacing: -0.04em;
    }

    .rep-benefits-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 14px;
    }

    .rep-benefit-card {
      padding: 28px 24px;
      border: 1px solid var(--line);
      border-radius: 24px;
      background: #fff;
      transition: transform .22s ease, box-shadow .22s ease;

      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 12px 36px rgba(15,23,42,.08);
      }
    }

    .benefit-icon {
      display: grid;
      place-items: center;
      width: 48px;
      height: 48px;
      border-radius: 14px;
      background: #f3f4f6;
      color: #050505;
      margin-bottom: 16px;
    }

    .rep-benefit-card h3 {
      margin: 0 0 8px;
      font-size: 18px;
      line-height: 1.2;
    }

    .rep-benefit-card p {
      margin: 0;
      font-size: 14px;
      line-height: 1.5;
      color: #4b5563;
    }

    .rep-products-section .section-heading {
      text-align: center;
      margin-bottom: 44px;
    }

    .rep-products-section .section-heading h2 {
      margin-top: 16px;
    }

    .rep-products-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 14px;
    }

    .rep-product-card {
      position: relative;
      display: flex;
      flex-direction: column;
      padding: 28px;
      border: 1px solid var(--line);
      border-radius: 30px;
      background: #f7f8f9;
      color: inherit;
      text-decoration: none;
      animation: fadeSlideIn .5s ease both;
      transition: transform .25s ease, box-shadow .25s ease, background .25s ease;

      &.dark {
        background: #050505;
        color: #fff;

        p, .rep-product-meta span { color: rgba(255,255,255,.72); }
        .rep-product-num { color: rgba(255,255,255,.3); }
      }

      &:hover {
        transform: translateY(-6px);
        box-shadow: 0 16px 40px rgba(15, 23, 42, .12);
      }

      &.dark:hover {
        box-shadow: 0 16px 40px rgba(5, 5, 5, .3);
      }
    }

    .rep-product-num {
      color: #6b7280;
      font-weight: 850;
      font-size: 14px;
    }

    .rep-product-card h3 {
      margin: 32px 0 12px;
      font-size: clamp(20px, 3vw, 32px);
      line-height: .98;
      letter-spacing: -0.035em;
    }

    .rep-product-card p {
      color: #4b5563;
      font-size: 14px;
      line-height: 1.5;
      margin: 0 0 16px;
    }

    .rep-product-card.dark p { color: rgba(255,255,255,.72); }

    .rep-product-meta {
      display: grid;
      gap: 6px;
      margin-top: auto;

      span {
        font-size: 13px;
        color: #4b5563;
      }

      b { font-weight: 720; }
    }

    .rep-steps-section .section-heading {
      text-align: center;
      margin-bottom: 44px;
    }

    .rep-steps-section .section-heading h2 {
      margin-top: 16px;
      font-size: clamp(36px, 5vw, 64px);
      line-height: .92;
      letter-spacing: -0.04em;
    }

    .rep-steps-grid {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 14px;
    }

    .rep-step-card {
      text-align: center;
      padding: 32px 20px;
      border: 1px solid var(--line);
      border-radius: 24px;
      background: #fff;
      transition: transform .22s ease, box-shadow .22s ease;

      &:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 36px rgba(15,23,42,.08);
      }
    }

    .rep-step-num {
      display: grid;
      place-items: center;
      width: 48px;
      height: 48px;
      margin: 0 auto 16px;
      border-radius: 50%;
      background: #050505;
      color: #fff;
      font-size: 20px;
      font-weight: 850;
    }

    .rep-step-card h3 {
      margin: 0 0 8px;
      font-size: 17px;
      line-height: 1.2;
    }

    .rep-step-card p {
      margin: 0;
      font-size: 14px;
      line-height: 1.5;
      color: #4b5563;
    }

    .rep-support-section {
      padding-top: 108px;
    }

    .rep-support-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
      max-width: 800px;
      margin: 44px auto 0;
    }

    .rep-support-col {
      padding: 32px;
      border: 1px solid var(--line);
      border-radius: 24px;
      background: #fff;

      h3 {
        margin: 0 0 20px;
        font-size: 22px;
        line-height: 1;
        letter-spacing: -.03em;
      }
    }

    .rep-check-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: grid;
      gap: 14px;

      li {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 15px;
        line-height: 1.4;
        color: #4b5563;
      }
    }

    .rep-perfil-section .section-heading {
      text-align: center;
      margin-bottom: 44px;
    }

    .rep-perfil-section .section-heading h2 {
      margin-top: 16px;
      font-size: clamp(36px, 5vw, 64px);
      line-height: .92;
      letter-spacing: -0.04em;
    }

    .rep-perfil-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 14px;
      max-width: 700px;
      margin: 0 auto;
    }

    .rep-perfil-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 18px 22px;
      border: 1px solid var(--line);
      border-radius: 16px;
      background: #fff;
      font-size: 15px;
      line-height: 1.4;
      transition: transform .22s ease, box-shadow .22s ease;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 24px rgba(15,23,42,.06);
      }
    }

    .rep-comissoes-section .section-heading {
      text-align: center;
      margin-bottom: 44px;
    }

    .rep-comissoes-section .section-heading h2 {
      margin-top: 16px;
      font-size: clamp(36px, 5vw, 64px);
      line-height: .92;
      letter-spacing: -0.04em;
    }

    .rep-tabela {
      max-width: 700px;
      margin: 0 auto;
      border: 1px solid var(--line);
      border-radius: 20px;
      overflow: hidden;
    }

    .rep-tabela-header {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      padding: 16px 24px;
      background: #050505;
      color: #fff;
      font-weight: 720;
      font-size: 14px;
    }

    .rep-tabela-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      padding: 14px 24px;
      border-top: 1px solid var(--line);
      font-size: 14px;
      color: #4b5563;
      background: #fff;

      &:nth-child(even) { background: #f9fafb; }

      small {
        display: block;
        color: #9ca3af;
        font-size: 12px;
      }

      b { color: #050505; }
    }

    .rep-bonus {
      max-width: 700px;
      margin: 32px auto 0;
      text-align: center;
    }

    .rep-bonus h3 {
      font-size: 22px;
      margin-bottom: 20px;
    }

    .rep-bonus-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 14px;
    }

    .rep-bonus-card {
      padding: 20px;
      border: 1px solid var(--line);
      border-radius: 18px;
      background: #fff;

      strong {
        display: block;
        font-size: 36px;
        line-height: 1;
        letter-spacing: -0.04em;
      }

      span {
        display: block;
        font-size: 13px;
        color: #4b5563;
        margin: 8px 0 12px;
        line-height: 1.3;
      }

      b {
        display: inline-block;
        padding: 4px 14px;
        border-radius: 999px;
        background: #059669;
        color: #fff;
        font-size: 16px;
      }
    }

    .rep-depoimentos-section .section-heading {
      text-align: center;
      margin-bottom: 44px;
    }

    .rep-depoimentos-section .section-heading h2 {
      margin-top: 16px;
      font-size: clamp(36px, 5vw, 64px);
      line-height: .92;
      letter-spacing: -0.04em;
    }

    .rep-depoimentos-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 14px;
    }

    .rep-depoimento-card {
      margin: 0;
      padding: 28px 24px;
      border: 1px solid var(--line);
      border-radius: 24px;
      background: #fff;

      p {
        margin: 0;
        font-size: 15px;
        line-height: 1.6;
        color: #4b5563;
        font-style: italic;
      }

      footer {
        margin-top: 16px;
        font-size: 14px;
        font-weight: 720;
        color: #050505;
      }
    }

    .rep-cta-final {
      margin-top: 108px;
      padding: 80px 24px;
      border: 1px solid var(--line);
      background:
        radial-gradient(circle at 85% 15%, rgba(24,199,223,.18), transparent 16rem),
        #f7f8f9;
      color: #050505;
      text-align: center;
      border-radius: 40px;
    }

    .rep-cta-inner {
      max-width: 640px;
      margin: 0 auto;
    }

    .rep-cta-final h2 {
      margin: 16px 0 0;
      font-size: clamp(42px, 6vw, 78px);
      line-height: .92;
      letter-spacing: -0.045em;
    }

    .rep-cta-final p {
      color: rgba(5,5,5,.6);
      font-size: 18px;
      line-height: 1.6;
      margin-top: 20px;
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

    .faq-item[open] { box-shadow: 0 8px 30px rgba(15, 23, 42, .06); }

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

    .faq-item summary::-webkit-details-marker { display: none; }

    .faq-item summary::after {
      content: '+';
      font-size: 22px;
      font-weight: 400;
      color: #9ca3af;
      transition: transform .22s ease;
    }

    .faq-item[open] summary::after { transform: rotate(45deg); }

    .faq-answer {
      padding: 0 24px 22px;
      font-size: 15px;
      line-height: 1.65;
      color: #4b5563;
    }

    .faq-answer p { margin: 0 0 8px; }
    .faq-answer ul { margin: 0 0 8px; padding-left: 20px; }
    .faq-answer li { margin-bottom: 4px; }

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

    .tech-strip-logos img:hover { opacity: 1; transform: scale(1.15); }

    @keyframes rise {
      from { opacity: 0; transform: translateY(24px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes fadeSlideIn {
      from { opacity: 0; transform: translateY(18px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .rep-product-card:nth-child(1) { animation-delay: 0s; }
    .rep-product-card:nth-child(2) { animation-delay: .08s; }
    .rep-product-card:nth-child(3) { animation-delay: .16s; }

    @media (max-width: 1040px) {
      .rep-hero { grid-template-columns: 1fr; }
      .rep-hero-visual { min-height: auto; }
      .rep-benefits-grid { grid-template-columns: repeat(2, 1fr); }
      .rep-products-grid { grid-template-columns: repeat(2, 1fr); }
      .rep-steps-grid { grid-template-columns: repeat(3, 1fr); }
      .rep-perfil-grid { grid-template-columns: 1fr; }
    }

    @media (max-width: 720px) {
      .rep-benefits-grid { grid-template-columns: 1fr; }
      .rep-products-grid { grid-template-columns: 1fr; }
      .rep-steps-grid { grid-template-columns: 1fr; }
      .rep-support-grid { grid-template-columns: 1fr; }
      .rep-depoimentos-grid { grid-template-columns: 1fr; }
      .rep-bonus-grid { grid-template-columns: 1fr; }
      .rep-tabela-header, .rep-tabela-row { grid-template-columns: 1fr; gap: 4px; }
    }
  `]
})
export class RepresentantePage {
  protected readonly showModal = signal(false);
  protected readonly showRegister = signal(false);

  protected openModal() { this.showModal.set(true); document.body.style.overflow = 'hidden'; }
  protected closeModal() { this.showModal.set(false); document.body.style.overflow = ''; }
  protected openRegister() { this.showRegister.set(true); document.body.style.overflow = 'hidden'; }
  protected closeRegister() { this.showRegister.set(false); document.body.style.overflow = ''; }

  protected readonly produtos: ProdutoCard[] = [
    {
      num: '01', nome: 'temrango.com',
      descricao: 'Plataforma de delivery com 0% de comissão para lojistas. Restaurantes, mercados, petshops e bebidas.',
      publico: 'Lojistas locais', ticket: 'R$ 97-297/mês', comissao: '30% a 50%', dark: false,
      href: 'https://lojista.temrango.com.br/'
    },
    {
      num: '02', nome: 'pescaprecos.com',
      descricao: 'Marketplace para lojistas locais venderem online sem burocracia. Descoberta de ofertas regionais.',
      publico: 'Varejistas', ticket: 'R$ 97-197/mês', comissao: '30% a 50%', dark: true,
      href: 'https://lojista.pescaprecos.com.br/'
    },
    {
      num: '03', nome: 'Essencial PDV',
      descricao: 'Sistema de vendas completo para varejo: controle de caixa, produtos, estoque e financeiro.',
      publico: 'Varejistas', ticket: 'R$ 67-147/mês', comissao: '30%', dark: false,
      href: '#'
    },
    {
      num: '04', nome: 'Fluxoo Edu',
      descricao: 'Gestão educacional para escolas: matrículas, notas, frequência e comunicação com pais.',
      publico: 'Escolas e faculdades', ticket: 'R$ 197-497/mês', comissao: '30%', dark: true,
      href: 'https://fluxoo-educacao.vercel.app/'
    },
    {
      num: '05', nome: 'Fluxoo DOC',
      descricao: 'Gestão documental para prefeituras com rastreio, backup, auditoria e controle de processos.',
      publico: 'Prefeituras', ticket: 'Valor fixo + adicionais', comissao: 'Negociável', dark: false,
      href: 'https://doc.fluxoo.com.br/login'
    },
    {
      num: '06', nome: 'Fluxoo LEGISLA',
      descricao: 'Gestão de câmaras de vereadores: sessões, proposições e atos legislativos.',
      publico: 'Câmaras de vereadores', ticket: 'Valor fixo + adicionais', comissao: 'Negociável', dark: true,
      href: '#'
    },
  ];
}
