// data.js

export const PRODUCTS = [
  { cod:'PN8317', name:'AMINO LIQ.2222 CEREJA-16 OZ. 1474 ML.', cat:'Proteinas' },
  { cod:'PN8332', name:'AMINO LIQ.2222 FRAMBOESA-16 OZ 474ML', cat:'Proteinas' },
  // ... COLE O RESTANTE DOS SEUS PRODUTOS AQUI ...
  { cod:'PN8441', name:'ZINC CHELATED-30 TABLETES', cat:'Vitaminas e Minerais' },
  { cod:'PN8118', name:'ZMAX MIDNIGHT 100 TABS', cat:'Vitaminas e Minerais' },
];

export const PRODUCT_CATS = [...new Set(PRODUCTS.map(p=>p.cat))].sort();

export const CATEGORIES = {
  URGENCIA:      { label:"URGÊNCIA",       color:"#EF4444", bg:"#FEF2F2", dot:"#EF4444" },
  OPERACAO:      { label:"OPERAÇÃO",       color:"#F97316", bg:"#FFF7ED", dot:"#F97316" },
  ADMINISTRATIVO:{ label:"ADMINISTRATIVO", color:"#3B82F6", bg:"#EFF6FF", dot:"#3B82F6" },
  DEGUSTACAO:    { label:"DEGUSTAÇÃO",     color:"#8B5CF6", bg:"#F5F3FF", dot:"#8B5CF6" },
  PRIORIDADE:    { label:"PRIORIDADE",     color:"#10B981", bg:"#ECFDF5", dot:"#10B981" },
  LEMBRETE:      { label:"LEMBRETE",       color:"#F59E0B", bg:"#FFFBEB", dot:"#F59E0B" },
};

export const SELLER_ACTIONS = [
  { key:"status",   label:"Status de Pedido",  icon:"📋", cat:"ADMINISTRATIVO" },
  { key:"cnpj",     label:"Troca de CNPJ",     icon:"🏢", cat:"ADMINISTRATIVO" },
  { key:"endereco", label:"Troca de Endereço", icon:"📍", cat:"ADMINISTRATIVO" },
  { key:"boleto",   label:"Boletos",           icon:"💳", cat:"ADMINISTRATIVO" },
  { key:"dev",      label:"Devoluções",        icon:"↩️",  cat:"URGENCIA" },
];

export const INITIAL_SELLERS = ["Luiz Penha","Alessandro","Matheus Maurer","Diego Duque","Luciano","Nicolau Salomon"];

export const INITIAL_RONALDO = [
  { id:101, cnpj:"12.345.678/0001-99", ref:"Pedido #3089", date:"2026-06-25", status:"Em aberto" },
  { id:102, cnpj:"98.765.432/0001-11", ref:"Pedido #3090", date:"2026-06-20", status:"Concluído" },
  { id:103, cnpj:"55.444.333/0001-22", ref:"NF #1821",     date:"2026-06-15", status:"Atrasado" },
];

export const INITIAL_ACTIONS = {
  "2026-06-29": [
    { id:1, cat:"URGENCIA",       title:"Resolver Erro de Boleto",           seller:"Nicolau Salomon", note:"NF #44210",               reminder:"", done:false },
    { id:2, cat:"OPERACAO",       title:"Validar Documentação de Exportação", seller:"",               note:"",                         reminder:"09:00", done:false },
    { id:3, cat:"ADMINISTRATIVO", title:"Troca de Endereço no Sistema",       seller:"Diego Duque",    note:"CNPJ 12.345.678/0001-99",  reminder:"", done:false },
    { id:4, cat:"DEGUSTACAO",     title:"Evento 15h — Cliente VIP",           seller:"",               note:"",                         reminder:"14:30", done:false },
  ],
  "2026-06-30": [
    { id:6, cat:"PRIORIDADE", title:"Acompanhar pedido exportação #4421", seller:"", note:"", reminder:"08:00", done:false },
    { id:7, cat:"OPERACAO",   title:"Terceirização: revisão de contrato",  seller:"", note:"", reminder:"", done:false },
  ],
};
