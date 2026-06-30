// theme.js

export const STATUS_COLORS = {
  "Em aberto":{ color:"#3B82F6", bg:"#EFF6FF" },
  "Concluído": { color:"#10B981", bg:"#ECFDF5" },
  "Atrasado":  { color:"#EF4444", bg:"#FEF2F2" },
};

export const MONTHS_PT = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
export const DAYS_PT   = ["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"];

export function getTheme(dark){
  return dark ? {
    pageBg:"#0B1120", cardBg:"#1A2133", text:"#E2E8F0", muted:"#94A3B8",
    border:"#2D3748", inputBg:"#111827", headerBg:"#141B2D", chipBg:"#1F2937",
    shadow:"0 1px 4px #0006", navBg:"#141B2D",
  } : {
    pageBg:"#F1F5F9", cardBg:"#fff", text:"#1e293b", muted:"#64748b",
    border:"#e2e8f0", inputBg:"#f8fafc", headerBg:"#fff", chipBg:"#f8fafc",
    shadow:"0 1px 4px #0001", navBg:"#fff",
  };
}

export const navBtn    = { background:"none",border:"none",fontSize:20,cursor:"pointer",color:"#7C3AED",padding:"4px 10px",borderRadius:6 };
export const actionBtn = { border:"none",borderRadius:8,padding:"10px 14px",fontWeight:700,fontSize:13,cursor:"pointer" };

export function inputStyle(t){ 
  return { width:"100%",border:`1.5px solid ${t.border}`,borderRadius:8,padding:"10px 12px",fontSize:13,color:t.text,outline:"none",boxSizing:"border-box",background:t.inputBg,fontFamily:"inherit" }; 
}

export function lblStyle(t){ 
  return { display:"block",fontSize:11,color:t.muted,fontWeight:600,textTransform:"uppercase",letterSpacing:.5,marginBottom:4 }; 
}
