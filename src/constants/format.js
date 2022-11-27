const nf = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

export function numFormat(element) {
  return nf.format(element).replace("R$", "");
}
