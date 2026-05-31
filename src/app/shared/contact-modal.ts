import { Component, Input, Output, EventEmitter, signal } from '@angular/core';

@Component({
  selector: 'app-contact-modal',
  standalone: true,
  template: `
    @if (show) {
      <div class="modal-overlay" (click)="dismiss.emit()">
        <div class="modal" (click)="$event.stopPropagation()">
          <button class="modal-close" (click)="dismiss.emit()">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
          <div class="modal-inner">
            <div class="modal-panel modal-pressa">
              <h3>Estou com pressa</h3>
              <p>Fale diretamente conosco pelo WhatsApp e receba atendimento imediato em horário comércial.</p>
              <a class="button button-dark" href="https://wa.me/5585997277128" target="_blank" rel="noopener">
                <img src="/icon-whatsapp.svg" alt="" width="20" height="20" />
                Chamar no WhatsApp
              </a>
            </div>
            <div class="modal-panel modal-form">
              <h3>Posso esperar um pouco</h3>
              <p>Deixe seus dados e retornaremos em até 1 dia útil.</p>
              <form #form (input)="checkForm(form)" (submit)="submitForm(form, $event)">
                  <div class="radio-group">
                    <label class="radio-label">
                      <input type="radio" name="tipo" value="Desenvolvimento" checked (change)="checkForm(form)" />
                      <span>Desenvolvimento</span>
                    </label>
                    <label class="radio-label">
                      <input type="radio" name="tipo" value="Consultoria & CTO" (change)="checkForm(form)" />
                      <span>Consultoria & CTO</span>
                    </label>
                  </div>
                  <input type="text" name="nome" placeholder="Nome e sobrenome *" required (input)="checkForm(form)" />
                  <input type="tel" name="whats" placeholder="Seu WhatsApp *" required (input)="maskWhatsapp($event); checkForm(form)" maxlength="17" />
                  <input type="email" name="email" placeholder="Seu e-mail *" required (blur)="validateEmail($event)" (input)="checkForm(form)" />
                  <input type="text" name="assunto" placeholder="Assunto *" required (input)="checkForm(form)" />
                  <textarea name="descricao" rows="4" placeholder="O que você precisa? Deixe o máximo de detalhes possíveis *" required (input)="checkForm(form)"></textarea>
                  <button type="submit" class="button button-dark button-enviar" [disabled]="!formValid() || sending()">
                    @if (sending()) {
                      <span class="sending-dots">Enviando<span>.</span><span>.</span><span>.</span></span>
                    } @else {
                      Enviar
                    }
                  </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    }
  `,
  styles: [`
    .modal-overlay {
      position: fixed;
      inset: 0;
      z-index: 100;
      display: grid;
      place-items: center;
      padding: 20px;
      background: rgba(5,5,5,.55);
      backdrop-filter: blur(6px);
      animation: fadeIn .25s ease;
    }

    .modal {
      position: relative;
      width: min(840px, 100%);
      max-height: 90vh;
      overflow-y: auto;
      border-radius: 32px;
      background: #fff;
      box-shadow: 0 40px 100px rgba(5,5,5,.3);
      animation: modalUp .35s cubic-bezier(.22,.8,.2,1);
    }

    .modal-close {
      position: absolute;
      top: 16px;
      right: 16px;
      z-index: 2;
      display: grid;
      place-items: center;
      width: 40px;
      height: 40px;
      border: none;
      border-radius: 50%;
      background: #f3f4f6;
      color: #4b5563;
      cursor: pointer;
      transition: background .2s, transform .2s;

      &:hover {
        background: #e5e7eb;
        transform: scale(1.08);
      }
    }

    .modal-inner {
      display: grid;
      grid-template-columns: 1fr 1fr;
      min-height: 460px;
    }

    .modal-panel {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 16px;
      padding: 44px 36px;
    }

    .modal-pressa {
      background: #050505;
      color: #fff;
      border-radius: 32px 0 0 32px;

      h3 { margin: 0; font-size: 26px; letter-spacing: -.03em; }
      p { margin: 0; color: rgba(255,255,255,.65); font-size: 15px; line-height: 1.5; }
      .button {
        align-self: start;
        gap: 10px;
        border: 2px solid #25D366;
        background: #25D366;
        color: #050505;
        font-weight: 850;
        transition: transform .2s, box-shadow .2s;

        &:hover {
          box-shadow: 0 8px 28px rgba(37,211,102,.35);
          transform: translateY(-2px);
        }
      }
    }

    .modal-form {
      h3 { margin: 0; font-size: 26px; letter-spacing: -.03em; }
      p { margin: 0; color: #6b7280; font-size: 15px; }

      form {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-top: 6px;
      }

      input, textarea {
        width: 100%;
        padding: 14px 16px;
        border: 1.5px solid #e5e7eb;
        border-radius: 14px;
        font-family: inherit;
        font-size: 14px;
        color: #050505;
        background: #f9fafb;
        outline: none;
        transition: border-color .2s, box-shadow .2s;

        &::placeholder { color: #9ca3af; }
        &:focus {
          border-color: #050505;
          box-shadow: 0 0 0 3px rgba(5,5,5,.06);
        }
      }

      textarea { resize: vertical; min-height: 80px; }

      .radio-group {
        display: flex;
        gap: 8px;
      }

      .radio-label {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 10px 16px;
        border: 1.5px solid #e5e7eb;
        border-radius: 999px;
        background: #f9fafb;
        font-size: 13px;
        font-weight: 720;
        cursor: pointer;
        transition: border-color .2s, background .2s;

        input { display: none; }

        &:has(input:checked) {
          border-color: #050505;
          background: #050505;
          color: #fff;
        }
      }

      .button-enviar {
        width: 100%;
        justify-content: center;
        padding: 14px 22px;
        transition: opacity .25s, transform .2s;

        &:disabled {
          opacity: .4;
          pointer-events: none;
        }

        &:not(:disabled):hover {
          transform: translateY(-2px);
        }
      }
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes modalUp {
      from { opacity: 0; transform: translateY(30px) scale(.97); }
      to { opacity: 1; transform: translateY(0) scale(1); }
    }

    .sending-dots span {
      animation: dotPulse 1.4s infinite;
      &:nth-child(2) { animation-delay: .2s; }
      &:nth-child(3) { animation-delay: .4s; }
      &:nth-child(4) { animation-delay: .6s; }
    }

    @keyframes dotPulse {
      0%, 80%, 100% { opacity: 0; }
      40% { opacity: 1; }
    }

    @media (max-width: 720px) {
      .modal-inner {
        grid-template-columns: 1fr;
      }
      .modal-pressa {
        border-radius: 32px 32px 0 0;
      }
      .modal-panel {
        padding: 32px 24px;
      }
    }
  `]
})
export class ContactModal {
  @Input() show = false;
  @Output() dismiss = new EventEmitter<void>();

  protected readonly formValid = signal(false);
  protected readonly sending = signal(false);

  protected checkForm(form: HTMLFormElement) {
    const inputs = form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('input:not([type=radio]), textarea');
    this.formValid.set(Array.from(inputs).every(el => el.value.trim()));
  }

  protected maskWhatsapp(e: Event) {
    const input = e.target as HTMLInputElement;
    let v = input.value.replace(/\D/g, '').slice(0, 11);
    if (v.length > 6) v = `(${v.slice(0,2)}) ${v.slice(2,3)} ${v.slice(3,7)}-${v.slice(7)}`;
    else if (v.length > 2) v = `(${v.slice(0,2)}) ${v.slice(2)}`;
    else if (v.length) v = `(${v}`;
    input.value = v;
  }

  protected validateEmail(e: Event) {
    const input = e.target as HTMLInputElement;
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value);
    input.style.borderColor = input.value && !ok ? '#ef4444' : '';
  }

  protected async submitForm(form: HTMLFormElement, e: Event) {
    e.preventDefault();
    if (!this.formValid()) return;
    this.sending.set(true);
    await new Promise(r => setTimeout(r, 1200));
    const data = new FormData(form);
    const tipo = data.get('tipo') as string;
    const nome = data.get('nome') as string;
    const whats = data.get('whats') as string;
    const email = data.get('email') as string;
    const assunto = data.get('assunto') as string;
    const descricao = data.get('descricao') as string;
    const body = `Tipo: ${tipo}%0ANome: ${nome}%0AWhatsApp: ${whats}%0AE-mail: ${email}%0A%0A${descricao}`;
    window.location.href = `mailto:zeroumbit@gmail.com?subject=${encodeURIComponent(assunto)}&body=${body}`;
    this.dismiss.emit();
  }
}
