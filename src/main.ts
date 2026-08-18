import './style.css';
import type { Categoria, Despesa } from './types';

const categorias: Categoria[] = ['Alimento', 'Transporte', 'Lazer', 'Saúde', 'Outros'];

const despesas: Despesa[] = [];

const expenseForm = document.querySelector('#expense-form') as HTMLFormElement;
const tituloInput = document.querySelector('#titulo') as HTMLInputElement;
const valorInput = document.querySelector('#valor') as HTMLInputElement;
const categoriaSelect = document.querySelector('#categoria') as HTMLSelectElement;
const formMessage = document.querySelector('#form-message') as HTMLParagraphElement;
const expenseList = document.querySelector('#expense-list') as HTMLUListElement;
const totalGeral = document.querySelector('#total-geral') as HTMLElement;

const totalCategoriaMap: Record<Categoria, HTMLElement> = {
  Alimento: document.querySelector('#total-alimento') as HTMLElement,
  Transporte: document.querySelector('#total-transporte') as HTMLElement,
  Lazer: document.querySelector('#total-lazer') as HTMLElement,
  Saúde: document.querySelector('#total-saude') as HTMLElement,
  Outros: document.querySelector('#total-outros') as HTMLElement,
};

function formatCurrency(valor: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(valor);
}

function getDespesasPorCategoria(): Record<Categoria, number> {
  return categorias.reduce((acumulador, categoria) => {
    acumulador[categoria] = despesas
      .filter((despesa) => despesa.categoria === categoria)
      .reduce((soma, despesa) => soma + despesa.valor, 0);

    return acumulador;
  }, {} as Record<Categoria, number>);
}

function validarFormulario(titulo: string, valor: number, categoria: string): string | null {
  if (!titulo.trim()) {
    return 'Informe um título para a despesa.';
  }

  if (!Number.isFinite(valor) || valor <= 0) {
    return 'O valor deve ser maior que zero.';
  }

  if (!categorias.includes(categoria as Categoria)) {
    return 'Selecione uma categoria válida.';
  }

  return null;
}

function renderResumo() {
  const total = despesas.reduce((soma, despesa) => soma + despesa.valor, 0);
  const totaisPorCategoria = getDespesasPorCategoria();

  totalGeral.textContent = formatCurrency(total);

  categorias.forEach((categoria) => {
    totalCategoriaMap[categoria].textContent = formatCurrency(totaisPorCategoria[categoria]);
  });
}

function renderLista() {
  if (despesas.length === 0) {
    expenseList.innerHTML = '<li class="empty-state">Nenhuma despesa cadastrada.</li>';
    return;
  }

  expenseList.innerHTML = despesas
    .map(
      (despesa) => `
        <li class="expense-item">
          <div>
            <h3>${despesa.titulo}</h3>
            <span>${despesa.categoria}</span>
          </div>
          <strong>${formatCurrency(despesa.valor)}</strong>
        </li>
      `,
    )
    .join('');
}

function atualizarInterface() {
  renderResumo();
  renderLista();
}

function limparMensagem() {
  formMessage.textContent = '';
  formMessage.classList.remove('error');
}

expenseForm.addEventListener('submit', (event) => {
  event.preventDefault();

  limparMensagem();

  const titulo = tituloInput.value;
  const valor = Number(valorInput.value.replace(',', '.'));
  const categoria = categoriaSelect.value;

  const erro = validarFormulario(titulo, valor, categoria);

  if (erro) {
    formMessage.textContent = erro;
    formMessage.classList.add('error');
    return;
  }

  despesas.push({
    id: crypto.randomUUID(),
    titulo: titulo.trim(),
    valor,
    categoria: categoria as Categoria,
  });

  expenseForm.reset();
  tituloInput.focus();
  atualizarInterface();
});

atualizarInterface();
