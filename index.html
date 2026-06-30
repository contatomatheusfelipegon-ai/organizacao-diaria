// App.jsx

import React, { useState, useEffect, useRef } from "react";
import { PRODUCTS, PRODUCT_CATS, CATEGORIES, SELLER_ACTIONS, INITIAL_SELLERS, INITIAL_RONALDO, INITIAL_ACTIONS } from "./data";
import { STATUS_COLORS, MONTHS_PT, DAYS_PT, getTheme, navBtn, actionBtn, inputStyle, lblStyle } from "./theme";

// ─── Helpers ─────────────────────────────────────────────────────────────────
function toKey(d){ return d.toISOString().slice(0,10); }
function daysInMonth(y,m){ return new Date(y,m+1,0).getDate(); }
function firstDayOfMonth(y,m){ return new Date(y,m,1).getDay(); }
function formatDate(d){ return d.toLocaleDateString("pt-BR",{weekday:"long",day:"numeric",month:"long",year:"numeric"}); }
function formatCNPJ(v){
  const d=v.replace(/\D/g,"").slice(0,14);
  return d.replace(/^(\d{2})(\d)/,"$1.$2").replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3")
          .replace(/\.(\d{3})(\d)/,".$1/$2").replace(/(\d{4})(\d)/,"$1-$2");
}
function startOfWeek(d){
  const dt=new Date(d); const day=dt.getDay();
  dt.setDate(dt.getDate()-day); dt.setHours(0,0,0,0); return dt;
}

// ─── CNPJ API ────────────────────────────────────────────────────────────────
async function fetchCNPJ(raw){
  const d=raw.replace(/\D/g,"");
  if(d.length!==14) throw new Error("CNPJ deve ter 14 dígitos");
  const url=`https://www.receitaws.com.br/v1/cnpj/${d}`;
  const res=await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`);
  if(!res.ok) throw new Error("Erro na consulta");
  const w=await res.json();
  const data=JSON.parse(w.contents);
  if(data.status==="ERROR") throw new Error(data.message||"CNPJ não encontrado");
  return data;
}

// ─── Sub-components ───────────────────────────────────────────────────────────
function Badge({ cat }){
  const c=CATEGORIES[cat]; if(!c) return null;
  return <span style={{ background:c.bg,color:c.color,border:`1px solid ${c.color}33`,borderRadius:4,fontSize:10,fontWeight:700,padding:"2px 7px",letterSpacing:.5,whiteSpace:"nowrap" }}>{c.label}</span>;
}

function SummaryDots({ actions }){
  const counts={};
  actions.forEach(a=>{ counts[a.cat]=(counts[a.cat]||0)+1; });
  return (
    <div style={{ display:"flex",gap:5,flexWrap:"wrap",marginTop:4 }}>
      {Object.entries(counts).map(([cat,n])=>{
        const c=CATEGORIES[cat]; if(!c) return null;
        return <span key={cat} style={{ display:"flex",alignItems:"center",gap:3,background:c.bg,borderRadius:20,padding:"2px 7px",fontSize:11,color:c.color,fontWeight:600 }}><span style={{ width:7,height:7,borderRadius:"50%",background:c.dot,display:"inline-block" }}/>{n}</span>;
      })}
    </div>
  );
}

function ActionCard({ action, onRemove, onToggleDone, theme, draggable, onDragStart, onDragOver, onDrop, onDragEnd, dragging, onDuplicate }){
  const c=CATEGORIES[action.cat]||CATEGORIES.ADMINISTRATIVO;
  const [showDup,setShowDup]=useState(false);
  const [dupDate,setDupDate]=useState("");
  return (
    <div
      draggable={draggable}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDrop={onDrop}
      onDragEnd={onDragEnd}
      style={{ background:theme.cardBg,borderRadius:10,padding:"12px 14px",borderLeft:`4px solid ${action.done?"#cbd5e1":c.color}`,boxShadow:theme.shadow,opacity:action.done?0.6:(dragging?0.4:1),transition:"opacity .2s",cursor:draggable?"grab":"default" }}>
      <div style={{ display:"flex",alignItems:"flex-start",gap:10 }}>
        {draggable && <span style={{ color:theme.muted,fontSize:13,marginTop:2,cursor:"grab",userSelect:"none" }}>⠿</span>}
        <button onClick={()=>onToggleDone(action.id)} title={action.done?"Reabrir":"Concluir"} style={{ marginTop:2,width:18,height:18,borderRadius:4,border:`2px solid ${action.done?"#10B981":"#cbd5e1"}`,background:action.done?"#10B981":"transparent",cursor:"pointer",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center" }}>
          {action.done && <span style={{ color:"#fff",fontSize:11,lineHeight:1 }}>✓</span>}
        </button>
        <div style={{ flex:1 }}>
          <div style={{ marginBottom:5,display:"flex",gap:6,alignItems:"center",flexWrap:"wrap" }}>
            <Badge cat={action.cat}/>
            {action.reminder && <span style={{ fontSize:10,color:"#F59E0B",fontWeight:700 }}>🔔 {action.reminder}</span>}
            {action.done && <span style={{ fontSize:10,color:"#10B981",fontWeight:700 }}>✓ CONCLUÍDO</span>}
          </div>
          <div style={{ fontWeight:600,fontSize:13,color:theme.text,textDecoration:action.done?"line-through":"none" }}>{action.title}</div>
          {action.seller && <div style={{ fontSize:11,color:theme.muted,marginTop:3 }}>👤 {action.seller}</div>}
          {action.note && <div style={{ fontSize:11,color:"#7C3AED",marginTop:4,background:"#F5F3FF",borderRadius:6,padding:"4px 8px",fontStyle:"italic" }}>📎 {action.note}</div>}
          {showDup && (
            <div style={{ marginTop:8,display:"flex",gap:6,alignItems:"center" }}>
              <input type="date" value={dupDate} onChange={e=>setDupDate(e.target.value)} style={{ ...inputStyle(theme),padding:"6px 8px",fontSize:12,flex:1 }}/>
              <button onClick={()=>{ if(dupDate){ onDuplicate(action,dupDate); setShowDup(false); setDupDate(""); } }} style={{ ...actionBtn,background:"#7C3AED",color:"#fff",padding:"6px 10px",fontSize:11 }}>Copiar</button>
              <button onClick={()=>setShowDup(false)} style={{ background:"none",border:"none",color:theme.muted,cursor:"pointer",fontSize:12 }}>✕</button>
            </div>
          )}
        </div>
        <div style={{ display:"flex",flexDirection:"column",gap:4,alignItems:"center",flexShrink:0 }}>
          <button onClick={()=>onRemove(action.id)} style={{ background:"none",border:"none",cursor:"pointer",color:"#cbd5e1",fontSize:16,lineHeight:1,padding:2 }}>✕</button>
          {onDuplicate && <button onClick={()=>setShowDup(v=>!v)} title="Duplicar para outro dia" style={{ background:"none",border:"none",cursor:"pointer",color:theme.muted,fontSize:13,lineHeight:1,padding:2 }}>📋</button>}
        </div>
      </div>
    </div>
  );
}

function CNPJCard({ data }){
  const sc=data.situacao==="ATIVA"?"#10B981":"#EF4444";
  return (
    <div style={{ background:"#F0FDF4",border:`1px solid ${sc}44`,borderRadius:10,padding:14,marginTop:10 }}>
      <div style={{ display:"flex",alignItems:"center",gap:8,marginBottom:8 }}>
        <span style={{ fontSize:18 }}>🏢</span>
        <div>
          <div style={{ fontWeight:700,fontSize:14,color:"#1e293b" }}>{data.nome}</div>
          {data.fantasia && data.fantasia!=="" && <div style={{ fontSize:11,color:"#64748b" }}>Nome fantasia: {data.fantasia}</div>}
        </div>
      </div>
      <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:6,fontSize:11 }}>
        <div><span style={{ color:"#94a3b8" }}>Situação: </span><span style={{ color:sc,fontWeight:700 }}>{data.situacao}</span></div>
        <div><span style={{ color:"#94a3b8" }}>Tipo: </span><span style={{ color:"#334155" }}>{data.tipo}</span></div>
        <div><span style={{ color:"#94a3b8" }}>Município: </span><span style={{ color:"#334155" }}>{data.municipio} — {data.uf}</span></div>
        <div><span style={{ color:"#94a3b8" }}>Porte: </span><span style={{ color:"#334155" }}>{data.porte}</span></div>
        {data.telefone && <div style={{ gridColumn:"1/-1" }}><span style={{ color:"#94a3b8" }}>Tel: </span><span style={{ color:"#334155" }}>{data.telefone}</span></div>}
        {data.email && <div style={{ gridColumn:"1/-1" }}><span style={{ color:"#94a3b8" }}>E-mail: </span><span style={{ color:"#334155" }}>{data.email}</span></div>}
        <div style={{ gridColumn:"1/-1" }}><span style={{ color:"#94a3b8" }}>Endereço: </span><span style={{ color:"#334155" }}>{data.logradouro}, {data.numero} {data.complemento} — {data.bairro}, {data.municipio}/{data.uf} — CEP {data.cep}</span></div>
      </div>
    </div>
  );
}

function CnpjField({ cnpj, setCnpj, onLookup, loading, error, data, theme }) {
  const t = theme || getTheme(false);
  return (
    <>
      <label style={lblStyle(t)}>CNPJ — busca dados automaticamente</label>
      <div style={{ display:"flex",gap:6 }}>
        <input value={cnpj} onChange={e=>setCnpj(e.target.value)} onKeyDown={e=>e.key==="Enter"&&onLookup()} placeholder="00.000.000/0001-00" style={{...inputStyle(t),flex:1}}/>
        <button onClick={onLookup} disabled={loading} style={{ ...actionBtn,background:"#7C3AED",color:"#fff",padding:"0 16px",opacity:loading?0.7:1 }}>{loading?"⏳":"🔍"}</button>
      </div>
      {error && <div style={{ marginTop:8,fontSize:12,color:"#EF4444",background:"#FEF2F2",borderRadius:8,padding:"8px 12px",border:"1px solid #FECACA" }}>⚠️ {error}</div>}
      {data && <CNPJCard data={data}/>}
    </>
  );
}

function useCNPJSearch(onFill){
  const [cnpj,        setCnpjRaw]    = useState("");
  const [cnpjData,    setCnpjData]   = useState(null);
  const [cnpjLoading, setCnpjLoading]= useState(false);
  const [cnpjError,   setCnpjError]  = useState("");

  function setCnpj(v){ setCnpjRaw(formatCNPJ(v)); setCnpjData(null); setCnpjError(""); }

  async function lookup(){
    setCnpjError(""); setCnpjData(null); setCnpjLoading(true);
    try {
      const data=await fetchCNPJ(cnpj);
      setCnpjData(data);
      onFill && onFill(data);
    } catch(e){ setCnpjError(e.message||"Erro ao consultar CNPJ"); }
    finally { setCnpjLoading(false); }
  }

  return { cnpj, setCnpj, cnpjData, cnpjLoading, cnpjError, lookup };
}

// ─── TAB: Diário ─────────────────────────────────────────────────────────────
function TabDiario({ selected, setSelected, actions, setActions, theme }){
  const [showForm,setShowForm]=useState(false);
  const [form,setForm]=useState({ cat:"URGENCIA",title:"",seller:"",note:"",reminder:"" });
  const [calYear,setCalYear]=useState(selected.getFullYear());
  const [calMonth,setCalMonth]=useState(selected.getMonth());
  const dragIndexRef=useRef(null);
  const [dragIdx,setDragIdx]=useState(null);

  const key=toKey(selected);
  const dayList=actions[key]||[];

  function addAction(){
    if(!form.title.trim()) return;
    const next={...actions};
    if(!next[key]) next[key]=[];
    next[key]=[...next[key],{ id:Date.now(),...form,done:false }];
    setActions(next); setForm({ cat:"URGENCIA",title:"",seller:"",note:"",reminder:"" }); setShowForm(false);
  }
  function removeAction(id){ const next={...actions}; next[key]=(next[key]||[]).filter(a=>a.id!==id); setActions(next); }
  function toggleDone(id){ const next={...actions}; next[key]=(next[key]||[]).map(a=>a.id===id?{...a,done:!a.done}:a); setActions(next); }
  function duplicateAction(action,targetDate){
    const next={...actions}; if(!next[targetDate]) next[targetDate]=[];
    next[targetDate]=[...next[targetDate],{ ...action,id:Date.now() }];
    setActions(next);
  }
  function reorder(fromIdx,toIdx){
    if(fromIdx===toIdx||fromIdx==null||toIdx==null) return;
    const list=[...dayList];
    const [moved]=list.splice(fromIdx,1);
    list.splice(toIdx,0,moved);
    const next={...actions}; next[key]=list; setActions(next);
  }

  const dim=daysInMonth(calYear,calMonth); const fd=firstDayOfMonth(calYear,calMonth);
  const cells=[]; for(let i=0;i<fd;i++) cells.push(null); for(let d=1;d<=dim;d++) cells.push(d);
  function prevMonth(){ if(calMonth===0){setCalYear(y=>y-1);setCalMonth(11);}else setCalMonth(m=>m-1); }
  function nextMonth(){ if(calMonth===11){setCalYear(y=>y+1);setCalMonth(0);}else setCalMonth(m=>m+1); }

  const todaySel=toKey(selected); const todayReal=toKey(new Date());
  const reminders=dayList.filter(a=>a.reminder&&!a.done);
  const pending=dayList.filter(a=>!a.done).length;
  const done=dayList.filter(a=>a.done).length;

  return (
    <div style={{ display:"flex",flexDirection:"column",gap:16 }}>
      {reminders.length>0 && (
        <div style={{ background:"#FFFBEB",border:"1px solid #FCD34D",borderRadius:10,padding:"10px 14px" }}>
          <div style={{ fontSize:11,fontWeight:700,color:"#92400E",marginBottom:6,textTransform:"uppercase",letterSpacing:.5 }}>🔔 Lembretes do Dia</div>
          {reminders.map(a=>(
            <div key={a.id} style={{ fontSize:12,color:"#78350F",display:"flex",gap:8,alignItems:"center",marginBottom:2 }}>
              <span style={{ fontWeight:700,color:"#D97706" }}>{a.reminder}</span> — {a.title}
              {a.note && <span style={{ color:"#92400E",fontStyle:"italic" }}>({a.note})</span>}
            </div>
          ))}
        </div>
      )}

      <div style={{ background:theme.cardBg,borderRadius:12,padding:16,boxShadow:theme.shadow }}>
        <div style={{ fontSize:12,color:theme.muted,textTransform:"uppercase",letterSpacing:.8,marginBottom:4 }}>Data selecionada</div>
        <div style={{ fontWeight:700,fontSize:15,color:theme.text,textTransform:"capitalize" }}>{formatDate(selected)}</div>
        {dayList.length>0 && (
          <>
            <SummaryDots actions={dayList}/>
            <div style={{ marginTop:6,fontSize:11,color:theme.muted }}>
              {pending>0 && <span style={{ marginRight:10 }}>⏳ {pending} pendente{pending!==1?"s":""}</span>}
              {done>0    && <span style={{ color:"#10B981" }}>✓ {done} concluída{done!==1?"s":""}</span>}
            </div>
          </>
        )}
      </div>

      <div style={{ background:theme.cardBg,borderRadius:12,padding:16,boxShadow:theme.shadow }}>
        <div style={{ display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12 }}>
          <button onClick={prevMonth} style={navBtn}>‹</button>
          <span style={{ fontWeight:700,color:theme.text }}>{MONTHS_PT[calMonth]} {calYear}</span>
          <button onClick={nextMonth} style={navBtn}>›</button>
        </div>
        <div style={{ display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:2,textAlign:"center" }}>
          {DAYS_PT.map(d=><div key={d} style={{ fontSize:10,color:theme.muted,fontWeight:600,paddingBottom:4 }}>{d}</div>)}
          {cells.map((d,i)=>{
            if(!d) return <div key={`e${i}`}/>;
            const ck=toKey(new Date(calYear,calMonth,d));
            const isSel=ck===todaySel; const isToday=ck===todayReal;
            const da=actions[ck]||[]; const hasRem=da.some(a=>a.reminder);
            const cats=[...new Set(da.map(a=>a.cat))].slice(0,3);
            return (
              <div key={d} onClick={()=>setSelected(new Date(calYear,calMonth,d))} style={{ padding:"5px 2px 8px",borderRadius:8,cursor:"pointer",position:"relative",background:isSel?"#7C3AED":theme.chipBg,color:isSel?"#fff":isToday?"#7C3AED":theme.text,fontWeight:isSel||isToday?700:400,border:isToday&&!isSel?"2px solid #7C3AED":"2px solid transparent",fontSize:12 }}>
                {d}
                {hasRem&&!isSel && <span style={{ position:"absolute",top:2,right:4,fontSize:8 }}>🔔</span>}
                {cats.length>0 && (
                  <div style={{ display:"flex",justifyContent:"center",gap:2,marginTop:2 }}>
                    {cats.map(cat=>{ const cc=CATEGORIES[cat]; if(!cc) return null; return <span key={cat} style={{ width:4,height:4,borderRadius:"50%",background:isSel?"#fff":cc.dot,display:"inline-block" }}/>; })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <button onClick={()=>setShowForm(v=>!v)} style={{ ...actionBtn,background:"#7C3AED",color:"#fff",width:"100%",padding:13,fontSize:14,borderRadius:10 }}>
        + Adicionar Ação / Lembrete
      </button>

      {showForm && (
        <div style={{ background:theme.cardBg,borderRadius:12,padding:16,boxShadow:theme.shadow }}>
          <div style={{ fontWeight:700,color:theme.text,marginBottom:12 }}>Nova Ação</div>
          <label style={lblStyle(theme)}>Categoria</label>
          <select value={form.cat} onChange={e=>setForm(f=>({...f,cat:e.target.value}))} style={inputStyle(theme)}>
            {Object.entries(CATEGORIES).map(([k,v])=><option key={k} value={k}>{v.label}</option>)}
          </select>
          <label style={{...lblStyle(theme),marginTop:10}}>Descrição *</label>
          <input placeholder="Ex: Verificar pedido exportação..." value={form.title} onChange={e=>setForm(f=>({...f,title:e.target.value}))} style={inputStyle(theme)}/>
          <label style={{...lblStyle(theme),marginTop:10}}>Nota / Referência</label>
          <input placeholder="Ex: NF #4421, CNPJ 12.345..." value={form.note} onChange={e=>setForm(f=>({...f,note:e.target.value}))} style={inputStyle(theme)}/>
          <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginTop:10 }}>
            <div>
              <label style={lblStyle(theme)}>Vendedor</label>
              <select value={form.seller} onChange={e=>setForm(f=>({...f,seller:e.target.value}))} style={inputStyle(theme)}>
                <option value="">— Nenhum —</option>
                {INITIAL_SELLERS.map(s=><option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <label style={lblStyle(theme)}>🔔 Lembrete (hora)</label>
              <input type="time" value={form.reminder} onChange={e=>setForm(f=>({...f,reminder:e.target.value}))} style={inputStyle(theme)}/>
            </div>
          </div>
          <button onClick={addAction} style={{ ...actionBtn,background:"#7C3AED",color:"#fff",width:"100%",marginTop:12,padding:13 }}>Salvar</button>
        </div>
      )}

      <div style={{ display:"flex",flexDirection:"column",gap:8 }}>
        {dayList.length===0
          ? <div style={{ textAlign:"center",padding:32,color:theme.muted,fontSize:13 }}>Nenhuma ação para este dia. Arraste os cartões para reordenar.</div>
          : dayList.map((a,idx)=>(
            <ActionCard
              key={a.id} action={a} onRemove={removeAction} onToggleDone={toggleDone} theme={theme}
              draggable onDragStart={()=>{ dragIndexRef.current=idx; setDragIdx(idx); }}
              onDragOver={e=>e.preventDefault()}
              onDrop={()=>{ reorder(dragIndexRef.current,idx); setDragIdx(null); }}
              onDragEnd={()=>setDragIdx(null)}
              dragging={dragIdx===idx}
              onDuplicate={duplicateAction}
            />
          ))
        }
      </div>
    </div>
  );
}

// ─── TAB: Comercial ──────────────────────────────────────────────────────────
function TabComercial({ selected, actions, setActions, theme }){
  const [sellers,setSellers]=useState(INITIAL_SELLERS);
  const [selSeller,setSelSeller]=useState(null);
  const [activeAction,setActiveAction]=useState(null);
  const [form,setForm]=useState({ cnpjNota:"",note:"" });
  const [newSeller,setNewSeller]=useState("");
  const [showAddSeller,setShowAddSeller]=useState(false);
  const [toast,setToast]=useState(null);
  const [ronaldoList,setRonaldoList]=useState(INITIAL_RONALDO);
  const [newRon,setNewRon]=useState({ cnpj:"",ref:"",date:"",status:"Em aberto" });
  const [showAddRon,setShowAddRon]=useState(false);
  const [sellerFilter,setSellerFilter]=useState("");

  const { cnpj:ronCnpj, setCnpj:setRonCnpj, cnpjData:ronCnpjData, cnpjLoading:ronCnpjLoading, cnpjError:ronCnpjError, lookup:ronLookup } = useCNPJSearch(data=>{
    setNewRon(n=>({ ...n, cnpj: formatCNPJ(data.cnpj||""), ref: n.ref }));
  });

  const key=toKey(selected);
  function showToast(msg){ setToast(msg); setTimeout(()=>setToast(null),2500); }

  function addSellerAction(){
    if(!activeAction||!selSeller) return;
    if(!form.cnpjNota.trim()&&!form.note.trim()) return;
    const act=SELLER_ACTIONS.find(a=>a.key===activeAction);
    const next={...actions}; if(!next[key]) next[key]=[];
    next[key]=[...next[key],{ id:Date.now(),cat:act.cat,title:`${act.label} — ${selSeller}`,seller:selSeller,note:[form.cnpjNota,form.note].filter(Boolean).join(" · "),reminder:"",done:false }];
    setActions(next); setForm({ cnpjNota:"",note:"" }); setActiveAction(null);
    showToast(`✅ "${act.label}" adicionado para ${selSeller}`);
  }
  function addSeller(){ if(!newSeller.trim()) return; setSellers(s=>[...s,newSeller.trim()]); setNewSeller(""); setShowAddSeller(false); }
  function removeSeller(s){ setSellers(sl=>sl.filter(x=>x!==s)); if(selSeller===s) setSelSeller(null); }
  function addRonaldo(){
    const cnpjVal = ronCnpjData ? formatCNPJ(ronCnpjData.cnpj||ronCnpj) : ronCnpj;
    if(!cnpjVal.trim()) return;
    setRonaldoList(l=>[...l,{ id:Date.now(),cnpj:cnpjVal,ref:newRon.ref,date:newRon.date,status:newRon.status,empresa:ronCnpjData?.nome||"" }]);
    setNewRon({ cnpj:"",ref:"",date:"",status:"Em aberto" }); setRonCnpj(""); setShowAddRon(false);
  }
  function removeRonaldo(id){ setRonaldoList(l=>l.filter(x=>x.id!==id)); }
  function updateRonaldoStatus(id,status){ setRonaldoList(l=>l.map(x=>x.id===id?{...x,status}:x)); }
  function isLate(o){ return o.date && o.status!=="Concluído" && o.date < toKey(new Date()); }

  let dayActions=(actions[key]||[]).filter(a=>a.seller);
  if(sellerFilter) dayActions=dayActions.filter(a=>a.seller===sellerFilter);

  return (
    <div style={{ display:"flex",flexDirection:"column",gap:16 }}>
      {toast && <div style={{ background:"#ECFDF5",color:"#059669",borderRadius:10,padding:12,fontWeight:600,fontSize:13,textAlign:"center",border:"1px solid #6EE7B7" }}>{toast}</div>}

      <div style={{ background:theme.cardBg,borderRadius:12,padding:16,boxShadow:theme.shadow }}>
        <div style={{ display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:10 }}>
          <div style={{ fontSize:11,color:theme.muted,fontWeight:700,textTransform:"uppercase",letterSpacing:.8 }}>Vendedores</div>
          <button onClick={()=>setShowAddSeller(v=>!v)} style={{ fontSize:11,fontWeight:700,color:"#7C3AED",background:"#F5F3FF",border:"1px solid #C4B5FD",borderRadius:6,padding:"4px 10px",cursor:"pointer" }}>+ Adicionar</button>
        </div>
        {showAddSeller && (
          <div style={{ display:"flex",gap:6,marginBottom:10 }}>
            <input value={newSeller} onChange={e=>setNewSeller(e.target.value)} placeholder="Nome do vendedor..." style={{...inputStyle(theme),flex:1}}/>
            <button onClick={addSeller} style={{...actionBtn,background:"#7C3AED",color:"#fff",padding:"0 14px"}}>OK</button>
          </div>
        )}
        <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:8 }}>
          {sellers.map(s=>(
            <div key={s} style={{ position:"relative" }}>
              <button onClick={()=>setSelSeller(s===selSeller?null:s)} style={{ width:"100%",padding:"10px 28px 10px 10px",borderRadius:8,border:"2px solid",borderColor:selSeller===s?"#7C3AED":theme.border,background:selSeller===s?"#F5F3FF":theme.chipBg,color:selSeller===s?"#7C3AED":theme.text,fontWeight:600,fontSize:12,cursor:"pointer",textAlign:"left" }}>👤 {s}</button>
              <button onClick={()=>removeSeller(s)} style={{ position:"absolute",top:4,right:5,background:"none",border:"none",color:"#cbd5e1",fontSize:13,cursor:"pointer",lineHeight:1 }}>✕</button>
            </div>
          ))}
        </div>
      </div>

      {selSeller && (
        <div style={{ background:theme.cardBg,borderRadius:12,padding:16,boxShadow:theme.shadow }}>
          <div style={{ fontSize:11,color:theme.muted,fontWeight:700,textTransform:"uppercase",letterSpacing:.8,marginBottom:10 }}>Ação para {selSeller}</div>
          <div style={{ display:"flex",flexDirection:"column",gap:6 }}>
            {SELLER_ACTIONS.map(act=>(
              <button key={act.key} onClick={()=>setActiveAction(activeAction===act.key?null:act.key)} style={{ padding:"11px 14px",borderRadius:8,border:`2px solid ${activeAction===act.key?"#7C3AED":theme.border}`,background:activeAction===act.key?"#F5F3FF":theme.chipBg,color:act.key==="dev"?"#EF4444":activeAction===act.key?"#7C3AED":theme.text,fontWeight:600,fontSize:13,cursor:"pointer",textAlign:"left",display:"flex",alignItems:"center",gap:8 }}>
                <span>{act.icon}</span> {act.label}
                {act.key==="dev" && <span style={{ marginLeft:"auto",background:"#FEF2F2",color:"#EF4444",borderRadius:20,fontSize:10,padding:"2px 7px",fontWeight:700 }}>●</span>}
              </button>
            ))}
          </div>
          {activeAction && (
            <div style={{ marginTop:12,padding:14,background:theme.chipBg,borderRadius:10,border:`1px solid ${theme.border}` }}>
              <label style={lblStyle(theme)}>CNPJ ou Nº do Pedido / NF</label>
              <input value={form.cnpjNota} onChange={e=>setForm(f=>({...f,cnpjNota:e.target.value}))} placeholder="Ex: 12.345.678/0001-99 ou NF #4421" style={inputStyle(theme)}/>
              <label style={{...lblStyle(theme),marginTop:8}}>Observação</label>
              <input value={form.note} onChange={e=>setForm(f=>({...f,note:e.target.value}))} placeholder="Ex: Cliente solicitou urgência..." style={inputStyle(theme)}/>
              <button onClick={addSellerAction} style={{ ...actionBtn,background:"#7C3AED",color:"#fff",width:"100%",marginTop:10,padding:12 }}>Registrar no Dia</button>
            </div>
          )}
        </div>
      )}

      <div style={{ background:theme.cardBg,borderRadius:12,padding:16,boxShadow:theme.shadow }}>
        <div style={{ display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:10 }}>
          <div style={{ fontSize:11,color:theme.muted,fontWeight:700,textTransform:"uppercase",letterSpacing:.8 }}>Fila — Ronaldo</div>
          <button onClick={()=>setShowAddRon(v=>!v)} style={{ fontSize:11,fontWeight:700,color:"#7C3AED",background:"#F5F3FF",border:"1px solid #C4B5FD",borderRadius:6,padding:"4px 10px",cursor:"pointer" }}>+ Novo</button>
        </div>
        {showAddRon && (
          <div style={{ background:theme.chipBg,borderRadius:10,padding:12,marginBottom:12,border:`1px solid ${theme.border}` }}>
            <CnpjField cnpj={ronCnpj} setCnpj={setRonCnpj} onLookup={ronLookup} loading={ronCnpjLoading} error={ronCnpjError} data={ronCnpjData} theme={theme}/>
            <label style={{...lblStyle(theme),marginTop:10}}>Pedido / NF</label>
            <input value={newRon.ref} onChange={e=>setNewRon(n=>({...n,ref:e.target.value}))} placeholder="Ex: Pedido #3099 ou NF #1850" style={inputStyle(theme)}/>
            <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginTop:8 }}>
              <div>
                <label style={lblStyle(theme)}>Data</label>
                <input type="date" value={newRon.date} onChange={e=>setNewRon(n=>({...n,date:e.target.value}))} style={inputStyle(theme)}/>
              </div>
              <div>
                <label style={lblStyle(theme)}>Status</label>
                <select value={newRon.status} onChange={e=>setNewRon(n=>({...n,status:e.target.value}))} style={inputStyle(theme)}>
                  <option>Em aberto</option><option>Concluído</option><option>Atrasado</option>
                </select>
              </div>
            </div>
            <button onClick={addRonaldo} style={{ ...actionBtn,background:"#7C3AED",color:"#fff",width:"100%",marginTop:10 }}>Salvar</button>
          </div>
        )}
        <div style={{ display:"flex",flexDirection:"column",gap:8 }}>
          {ronaldoList.length===0 && <div style={{ textAlign:"center",color:theme.muted,fontSize:13,padding:16 }}>Nenhum pedido na fila.</div>}
          {ronaldoList.map(o=>{
            const sc=STATUS_COLORS[o.status]||STATUS_COLORS["Em aberto"];
            const late=isLate(o);
            return (
              <div key={o.id} style={{ padding:"10px 12px",borderRadius:10,background:late?"#FEF2F2":theme.chipBg,border:`1px solid ${late?"#FCA5A5":theme.border}`,display:"flex",gap:10,alignItems:"flex-start" }}>
                <div style={{ flex:1 }}>
                  <div style={{ fontSize:12.5,fontWeight:700,color:theme.text }}>{o.cnpj}</div>
                  {o.empresa && <div style={{ fontSize:11,color:"#7C3AED",marginTop:1 }}>🏢 {o.empresa}</div>}
                  {o.ref  && <div style={{ fontSize:11,color:theme.muted,marginTop:1 }}>📄 {o.ref}</div>}
                  {o.date && <div style={{ fontSize:11,color:late?"#EF4444":theme.muted,marginTop:1,fontWeight:late?700:400 }}>📅 {o.date}{late?" — vencido":""}</div>}
                  <div style={{ marginTop:6 }}>
                    <select value={o.status} onChange={e=>updateRonaldoStatus(o.id,e.target.value)} style={{ fontSize:11,fontWeight:700,color:sc.color,background:sc.bg,border:`1px solid ${sc.color}44`,borderRadius:20,padding:"3px 10px",cursor:"pointer",outline:"none",fontFamily:"inherit" }}>
                      <option>Em aberto</option><option>Concluído</option><option>Atrasado</option>
                    </select>
                  </div>
                </div>
                <button onClick={()=>removeRonaldo(o.id)} style={{ background:"none",border:"none",color:"#cbd5e1",fontSize:15,cursor:"pointer" }}>✕</button>
              </div>
            );
          })}
        </div>
      </div>

      {(actions[key]||[]).some(a=>a.seller) && (
        <div style={{ background:theme.cardBg,borderRadius:12,padding:16,boxShadow:theme.shadow }}>
          <div style={{ display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:10,flexWrap:"wrap",gap:8 }}>
            <div style={{ fontSize:11,color:theme.muted,fontWeight:700,textTransform:"uppercase",letterSpacing:.8 }}>Registros do dia vinculados a vendedores</div>
            <select value={sellerFilter} onChange={e=>setSellerFilter(e.target.value)} style={{ fontSize:11,color:theme.text,background:theme.chipBg,border:`1px solid ${theme.border}`,borderRadius:6,padding:"4px 8px" }}>
              <option value="">Todos vendedores</option>
              {sellers.map(s=><option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div style={{ display:"flex",flexDirection:"column",gap:8 }}>
            {dayActions.map(a=>(
              <div key={a.id} style={{ display:"flex",gap:8,alignItems:"flex-start",padding:"8px 0",borderBottom:`1px solid ${theme.border}` }}>
                <Badge cat={a.cat}/>
                <div>
                  <div style={{ fontSize:13,color:theme.text,fontWeight:600 }}>{a.title}</div>
                  {a.note && <div style={{ fontSize:11,color:"#7C3AED",fontStyle:"italic",marginTop:2 }}>📎 {a.note}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── TAB: Degustações ────────────────────────────────────────────────────────
function TabDegustacoes({ selected, actions, setActions, theme }){
  const [rua,setRua]=useState(""); const [bairro,setBairro]=useState(""); const [cidade,setCidade]=useState("");
  const [uf,setUf]=useState(""); const [cep,setCep]=useState(""); const [numero,setNumero]=useState("");
  const [razaoSocial,setRazaoSocial]=useState(""); const [dateTime,setDateTime]=useState("");
  const [selected2,setSelected2]=useState([]); const [qtds,setQtds]=useState({});
  const [saved,setSaved]=useState(false); const [search,setSearch]=useState(""); const [catFilter,setCatFilter]=useState("Todos");
  const [showHistory,setShowHistory]=useState(false);

  const { cnpj, setCnpj, cnpjData, cnpjLoading, cnpjError, lookup } = useCNPJSearch(data=>{
    setRazaoSocial(data.nome||""); setRua(data.logradouro||""); setBairro(data.bairro||"");
    setCidade(data.municipio||""); setUf(data.uf||""); setCep(data.cep||""); setNumero(data.numero||"");
  });

  function toggleProduct(cod){ setSelected2(s=>s.includes(cod)?s.filter(x=>x!==cod):[...s,cod]); }
  function setQtd(cod,v){ setQtds(q=>({...q,[cod]:Math.max(1,parseInt(v)||1)})); }

  const filtered=PRODUCTS.filter(p=>{
    const mc=catFilter==="Todos"||p.cat===catFilter;
    const ms=!search||p.name.toLowerCase().includes(search.toLowerCase())||p.cod.toLowerCase().includes(search.toLowerCase());
    return mc&&ms;
  });

  function save(){
    if(!cnpj||!dateTime) return;
    const dateOnly=dateTime.slice(0,10); const timeOnly=dateTime.slice(11,16);
    const next={...actions}; if(!next[dateOnly]) next[dateOnly]=[];
    const prodLine=selected2.map(cod=>{ const p=PRODUCTS.find(x=>x.cod===cod); return p?`${p.cod} × ${qtds[cod]||1}`:""; }).join(", ");
    next[dateOnly]=[...next[dateOnly],{
      id:Date.now(), cat:"DEGUSTACAO",
      title:`Degustação — ${razaoSocial||cidade||"?"} (${selected2.length} produto${selected2.length!==1?"s":""})`,
      seller:"",
      note:`CNPJ: ${cnpj}${rua?` · ${rua}, ${numero}, ${cidade}/${uf}`:""}${prodLine?` | Produtos: ${prodLine}`:""}`,
      reminder:timeOnly||"", done:false,
      meta:{ cnpj, razaoSocial, cidade, uf, produtos: selected2.map(cod=>({ cod, qtd:qtds[cod]||1 })) }
    }];
    setActions(next); setSaved(true); setTimeout(()=>setSaved(false),2500);
  }

  const historico = Object.entries(actions)
    .flatMap(([date,list])=>list.filter(a=>a.cat==="DEGUSTACAO").map(a=>({...a,date})))
    .sort((a,b)=>b.date.localeCompare(a.date));
  const historicoCliente = cnpj ? historico.filter(a=>a.note && a.note.includes(cnpj)) : [];

  function gerarResumoWhatsApp(){
    const linhas=[`🍷 *Degustação — ${razaoSocial||"Cliente"}*`];
    if(cnpj) linhas.push(`📋 CNPJ: ${cnpj}`);
    if(rua)  linhas.push(`📍 ${rua}, ${numero} — ${bairro}, ${cidade}/${uf}`);
    if(dateTime) linhas.push(`📅 ${new Date(dateTime).toLocaleString("pt-BR")}`);
    if(selected2.length>0){
      linhas.push("","*Produtos:*");
      selected2.forEach(cod=>{ const p=PRODUCTS.find(x=>x.cod===cod); if(p) linhas.push(`• ${p.name} (${p.cod}) × ${qtds[cod]||1}`); });
    }
    navigator.clipboard.writeText(linhas.join("\n")).then(()=>alert("✅ Copiado para a área de transferência!"));
  }

  const selectedProducts=PRODUCTS.filter(p=>selected2.includes(p.cod));

  return (
    <div style={{ display:"flex",flexDirection:"column",gap:16 }}>
      {saved && <div style={{ background:"#F5F3FF",color:"#7C3AED",borderRadius:10,padding:12,fontWeight:600,fontSize:13,textAlign:"center",border:"1px solid #C4B5FD" }}>🍷 Degustação salva no calendário!</div>}

      <div style={{ background:theme.cardBg,borderRadius:12,padding:16,boxShadow:theme.shadow }}>
        <div style={{ fontSize:11,color:theme.muted,fontWeight:700,textTransform:"uppercase",letterSpacing:.8,marginBottom:12 }}>Nova Degustação</div>
        <CnpjField cnpj={cnpj} setCnpj={setCnpj} onLookup={lookup} loading={cnpjLoading} error={cnpjError} data={cnpjData} theme={theme} />
        {historicoCliente.length>0 && (
          <div style={{ marginTop:10,padding:10,background:"#F5F3FF",borderRadius:8,border:"1px solid #C4B5FD" }}>
            <div style={{ fontSize:11,color:"#7C3AED",fontWeight:700,marginBottom:4 }}>🕓 {historicoCliente.length} degustação(ões) anterior(es) deste CNPJ</div>
            {historicoCliente.slice(0,3).map(a=><div key={a.id} style={{ fontSize:11,color:"#6D28D9" }}>{a.date} — {a.title}</div>)}
          </div>
        )}
        <div style={{ marginTop:12 }}>
          <label style={lblStyle(theme)}>Razão Social</label>
          <input value={razaoSocial} onChange={e=>setRazaoSocial(e.target.value)} placeholder="Nome do cliente" style={inputStyle(theme)}/>
        </div>
        <div style={{ marginTop:8 }}>
          <label style={lblStyle(theme)}>Endereço</label>
          <input value={rua} onChange={e=>setRua(e.target.value)} placeholder="Rua / Logradouro" style={inputStyle(theme)}/>
        </div>
        <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginTop:8 }}>
          <input value={bairro} onChange={e=>setBairro(e.target.value)} placeholder="Bairro" style={inputStyle(theme)}/>
          <input value={cidade} onChange={e=>setCidade(e.target.value)} placeholder="Cidade" style={inputStyle(theme)}/>
        </div>
        <div style={{ display:"grid",gridTemplateColumns:"2fr 1fr 1fr",gap:8,marginTop:8 }}>
          <input value={cep} onChange={e=>setCep(e.target.value)} placeholder="CEP" style={inputStyle(theme)}/>
          <input value={uf} onChange={e=>setUf(e.target.value)} placeholder="UF" style={inputStyle(theme)}/>
          <input value={numero} onChange={e=>setNumero(e.target.value)} placeholder="Nº" style={inputStyle(theme)}/>
        </div>
        <div style={{ marginTop:8 }}>
          <label style={lblStyle(theme)}>Data e Hora do Evento</label>
          <input type="datetime-local" value={dateTime} onChange={e=>setDateTime(e.target.value)} style={inputStyle(theme)}/>
        </div>
      </div>

      {selectedProducts.length>0 && (
        <div style={{ background:"#F5F3FF",borderRadius:12,padding:14,border:"1px solid #C4B5FD" }}>
          <div style={{ fontSize:11,color:"#7C3AED",fontWeight:700,textTransform:"uppercase",letterSpacing:.8,marginBottom:8 }}>
            {selectedProducts.length} produto(s) selecionado(s)
          </div>
          <div style={{ display:"flex",flexWrap:"wrap",gap:6 }}>
            {selectedProducts.map(p=>(
              <div key={p.cod} style={{ background:"#fff",border:"1px solid #C4B5FD",borderRadius:10,padding:"6px 10px",display:"flex",alignItems:"center",gap:8 }}>
                <span style={{ fontSize:11,fontWeight:600,color:"#7C3AED" }}>{p.name.length>22?p.name.slice(0,22)+"…":p.name}</span>
                <input type="number" min={1} value={qtds[p.cod]||1} onChange={e=>setQtd(p.cod,e.target.value)}
                  style={{ width:44,border:"1px solid #C4B5FD",borderRadius:6,padding:"2px 6px",fontSize:12,textAlign:"center",fontFamily:"inherit",color:"#334155",outline:"none" }}/>
                <button onClick={()=>toggleProduct(p.cod)} style={{ background:"none",border:"none",color:"#EF4444",fontWeight:900,fontSize:14,cursor:"pointer",lineHeight:1 }}>✕</button>
              </div>
            ))}
          </div>
          <button onClick={gerarResumoWhatsApp} style={{ ...actionBtn,background:"#25D366",color:"#fff",marginTop:10,fontSize:12,padding:"8px 14px" }}>
            📋 Copiar resumo para WhatsApp
          </button>
        </div>
      )}

      <div style={{ background:theme.cardBg,borderRadius:12,padding:16,boxShadow:theme.shadow }}>
        <div style={{ fontSize:11,color:theme.muted,fontWeight:700,textTransform:"uppercase",letterSpacing:.8,marginBottom:10 }}>Catálogo de Produtos ({PRODUCTS.length})</div>
        <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="🔍 Buscar por nome ou código..." style={{...inputStyle(theme),marginBottom:8}}/>
        <div style={{ display:"flex",gap:6,overflowX:"auto",paddingBottom:8,marginBottom:4 }}>
          {["Todos",...PRODUCT_CATS].map(c=>(
            <button key={c} onClick={()=>setCatFilter(c)} style={{ flexShrink:0,padding:"6px 12px",borderRadius:20,border:"1.5px solid",borderColor:catFilter===c?"#7C3AED":theme.border,background:catFilter===c?"#7C3AED":theme.cardBg,color:catFilter===c?"#fff":theme.muted,fontSize:11,fontWeight:700,cursor:"pointer",whiteSpace:"nowrap" }}>{c}</button>
          ))}
        </div>
        <div style={{ fontSize:11,color:theme.muted,marginBottom:8 }}>{filtered.length} resultado(s)</div>
        <div style={{ display:"flex",flexDirection:"column",gap:6,maxHeight:380,overflowY:"auto" }}>
          {filtered.length===0 && <div style={{ textAlign:"center",padding:24,color:theme.muted,fontSize:13 }}>Nenhum produto encontrado.</div>}
          {filtered.map(p=>{
            const active=selected2.includes(p.cod);
            return (
              <div key={p.cod+p.name} style={{ display:"flex",alignItems:"center",justifyContent:"space-between",padding:"9px 12px",borderRadius:8,gap:8,background:active?"#F5F3FF":theme.chipBg,border:`1px solid ${active?"#C4B5FD":theme.border}` }}>
                <div style={{ display:"flex",alignItems:"center",gap:8,minWidth:0,flex:1 }}>
                  <div style={{ width:16,height:16,borderRadius:4,border:"2px solid",borderColor:active?"#7C3AED":"#cbd5e1",background:active?"#7C3AED":"transparent",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0 }}>
                    {active && <span style={{ color:"#fff",fontSize:10,lineHeight:1 }}>✓</span>}
                  </div>
                  <div style={{ minWidth:0 }}>
                    <div style={{ fontSize:12.5,color:theme.text,fontWeight:active?600:400,lineHeight:1.3 }}>{p.name}</div>
                    <div style={{ fontSize:10,color:theme.muted,marginTop:1 }}>{p.cod} · {p.cat}</div>
                  </div>
                </div>
                <button onClick={()=>toggleProduct(p.cod)} style={{ padding:"4px 10px",borderRadius:6,border:"1px solid",flexShrink:0,borderColor:active?"#EF4444":"#10B981",color:active?"#EF4444":"#10B981",background:"transparent",fontSize:11,fontWeight:700,cursor:"pointer" }}>
                  {active?"− Retirar":"+ Adicionar"}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <button onClick={save} style={{ ...actionBtn,background:"#7C3AED",color:"#fff",padding:16,fontSize:14,fontWeight:700,borderRadius:12,boxShadow:"0 4px 12px #7C3AED44" }}>
        💾 Salvar no Calendário
      </button>

      <div style={{ background:theme.cardBg,borderRadius:12,padding:16,boxShadow:theme.shadow }}>
        <button onClick={()=>setShowHistory(v=>!v)} style={{ background:"none",border:"none",cursor:"pointer",width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",padding:0 }}>
          <div style={{ fontSize:11,color:theme.muted,fontWeight:700,textTransform:"uppercase",letterSpacing:.8 }}>Histórico de Degustações ({historico.length})</div>
          <span style={{ fontSize:16,color:theme.muted }}>{showHistory?"▲":"▼"}</span>
        </button>
        {showHistory && (
          <div style={{ marginTop:12,display:"flex",flexDirection:"column",gap:8 }}>
            {historico.length===0 && <div style={{ textAlign:"center",color:theme.muted,fontSize:13,padding:16 }}>Nenhuma degustação registrada.</div>}
            {historico.map(a=>(
              <div key={a.id} style={{ padding:"10px 12px",borderRadius:10,background:"#F5F3FF",border:"1px solid #C4B5FD" }}>
                <div style={{ fontSize:12,color:"#94a3b8",marginBottom:2 }}>📅 {a.date}{a.reminder?` às ${a.reminder}`:""}</div>
                <div style={{ fontWeight:600,fontSize:13,color:"#1e293b" }}>{a.title}</div>
                {a.note && <div style={{ fontSize:11,color:"#7C3AED",marginTop:4,fontStyle:"italic" }}>📎 {a.note}</div>}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── TAB: Resumo (semanal) ────────────────────────────────────────────────────
function TabResumo({ actions, selected, theme }){
  const weekStart=startOfWeek(selected);
  const weekDays=[...Array(7)].map((_,i)=>{ const d=new Date(weekStart); d.setDate(d.getDate()+i); return d; });
  const weekKeys=weekDays.map(toKey);
  const weekActions=weekKeys.flatMap(k=>actions[k]||[]);

  const catCounts={};
  weekActions.forEach(a=>{ catCounts[a.cat]=(catCounts[a.cat]||0)+1; });
  const degustCount=weekActions.filter(a=>a.cat==="DEGUSTACAO").length;
  const sellerCounts={};
  weekActions.forEach(a=>{ if(a.seller) sellerCounts[a.seller]=(sellerCounts[a.seller]||0)+1; });
  const topSellers=Object.entries(sellerCounts).sort((a,b)=>b[1]-a[1]);
  const maxCat=Math.max(1,...Object.values(catCounts));
  const weekEnd=weekDays[6];

  return (
    <div style={{ display:"flex",flexDirection:"column",gap:16 }}>
      <div style={{ background:theme.cardBg,borderRadius:12,padding:16,boxShadow:theme.shadow }}>
        <div style={{ fontSize:11,color:theme.muted,fontWeight:700,textTransform:"uppercase",letterSpacing:.8,marginBottom:4 }}>Semana</div>
        <div style={{ fontWeight:700,fontSize:15,color:theme.text }}>
          {weekStart.toLocaleDateString("pt-BR",{day:"2-digit",month:"short"})} — {weekEnd.toLocaleDateString("pt-BR",{day:"2-digit",month:"short"})}
        </div>
        <div style={{ fontSize:12,color:theme.muted,marginTop:4 }}>{weekActions.length} ação(ões) no total</div>
      </div>

      <div style={{ background:theme.cardBg,borderRadius:12,padding:16,boxShadow:theme.shadow }}>
        <div style={{ fontSize:11,color:theme.muted,fontWeight:700,textTransform:"uppercase",letterSpacing:.8,marginBottom:12 }}>Ações por categoria</div>
        {Object.keys(catCounts).length===0 && <div style={{ fontSize:13,color:theme.muted,textAlign:"center",padding:16 }}>Sem ações nesta semana.</div>}
        <div style={{ display:"flex",flexDirection:"column",gap:8 }}>
          {Object.entries(CATEGORIES).filter(([k])=>catCounts[k]).map(([k,c])=>(
            <div key={k}>
              <div style={{ display:"flex",justifyContent:"space-between",fontSize:12,marginBottom:3 }}>
                <span style={{ color:theme.text,fontWeight:600 }}>{c.label}</span>
                <span style={{ color:theme.muted }}>{catCounts[k]}</span>
              </div>
              <div style={{ height:8,borderRadius:4,background:theme.chipBg,overflow:"hidden" }}>
                <div style={{ height:"100%",width:`${(catCounts[k]/maxCat)*100}%`,background:c.dot,borderRadius:4 }}/>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ background:theme.cardBg,borderRadius:12,padding:16,boxShadow:theme.shadow,display:"flex",gap:16 }}>
        <div style={{ flex:1,textAlign:"center" }}>
          <div style={{ fontSize:28 }}>🍷</div>
          <div style={{ fontSize:22,fontWeight:800,color:"#8B5CF6" }}>{degustCount}</div>
          <div style={{ fontSize:11,color:theme.muted }}>Degustações</div>
        </div>
        <div style={{ flex:1,textAlign:"center" }}>
          <div style={{ fontSize:28 }}>✅</div>
          <div style={{ fontSize:22,fontWeight:800,color:"#10B981" }}>{weekActions.filter(a=>a.done).length}</div>
          <div style={{ fontSize:11,color:theme.muted }}>Concluídas</div>
        </div>
        <div style={{ flex:1,textAlign:"center" }}>
          <div style={{ fontSize:28 }}>⏳</div>
          <div style={{ fontSize:22,fontWeight:800,color:"#F59E0B" }}>{weekActions.filter(a=>!a.done).length}</div>
          <div style={{ fontSize:11,color:theme.muted }}>Pendentes</div>
        </div>
      </div>

      <div style={{ background:theme.cardBg,borderRadius:12,padding:16,boxShadow:theme.shadow }}>
        <div style={{ fontSize:11,color:theme.muted,fontWeight:700,textTransform:"uppercase",letterSpacing:.8,marginBottom:12 }}>Vendedores mais acionados</div>
        {topSellers.length===0 && <div style={{ fontSize:13,color:theme.muted,textAlign:"center",padding:16 }}>Nenhum vendedor acionado nesta semana.</div>}
        <div style={{ display:"flex",flexDirection:"column",gap:6 }}>
          {topSellers.map(([s,n],i)=>(
            <div key={s} style={{ display:"flex",alignItems:"center",justifyContent:"space-between",padding:"8px 10px",borderRadius:8,background:theme.chipBg }}>
              <span style={{ fontSize:13,color:theme.text,fontWeight:600 }}>{i===0?"🏆 ":""}{s}</span>
              <span style={{ fontSize:12,color:"#7C3AED",fontWeight:700 }}>{n}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Configurações (export / import localStorage) ────────────────────────────
function TabConfig({ actions, setActions, sellers, setSellers, ronaldoList, setRonaldoList, theme, dark, setDark }){
  const fileRef=useRef(null);

  function exportar(){
    const payload={ actions, sellers, ronaldoList, exportadoEm: new Date().toISOString() };
    const blob=new Blob([JSON.stringify(payload,null,2)],{ type:"application/json" });
    const url=URL.createObjectURL(blob);
    const a=document.createElement("a"); a.href=url; a.download=`organizacao-backup-${toKey(new Date())}.json`; a.click();
    URL.revokeObjectURL(url);
  }

  function importar(e){
    const file=e.target.files[0]; if(!file) return;
    const reader=new FileReader();
    reader.onload=ev=>{
      try {
        const data=JSON.parse(ev.target.result);
        if(data.actions) setActions(data.actions);
        if(data.sellers) setSellers(data.sellers);
        if(data.ronaldoList) setRonaldoList(data.ronaldoList);
        alert("✅ Dados importados com sucesso!");
      } catch{ alert("❌ Arquivo inválido."); }
    };
    reader.readAsText(file);
    e.target.value="";
  }

  function limpar(){
    if(window.confirm("Tem certeza? Isso apaga TODOS os dados do app.")) {
      setActions({}); alert("🗑️ Dados apagados.");
    }
  }

  return (
    <div style={{ display:"flex",flexDirection:"column",gap:16 }}>
      <div style={{ background:theme.cardBg,borderRadius:12,padding:20,boxShadow:theme.shadow,display:"flex",alignItems:"center",justifyContent:"space-between" }}>
        <div>
          <div style={{ fontWeight:700,fontSize:14,color:theme.text }}>{dark?"🌙":"☀️"} Modo {dark?"escuro":"claro"}</div>
          <div style={{ fontSize:11,color:theme.muted,marginTop:2 }}>Alterna a aparência de todo o app</div>
        </div>
        <button onClick={()=>setDark(v=>!v)} style={{ width:52,height:30,borderRadius:20,border:"none",background:dark?"#7C3AED":"#cbd5e1",position:"relative",cursor:"pointer" }}>
          <span style={{ position:"absolute",top:3,left:dark?25:3,width:24,height:24,borderRadius:"50%",background:"#fff",transition:"left .2s" }}/>
        </button>
      </div>

      <div style={{ background:theme.cardBg,borderRadius:12,padding:20,boxShadow:theme.shadow }}>
        <div style={{ fontSize:11,color:theme.muted,fontWeight:700,textTransform:"uppercase",letterSpacing:.8,marginBottom:16 }}>Dados & Backup</div>

        <div style={{ display:"flex",flexDirection:"column",gap:10 }}>
          <button onClick={exportar} style={{ ...actionBtn,background:"#7C3AED",color:"#fff",padding:14,fontSize:13,display:"flex",alignItems:"center",justifyContent:"center",gap:8 }}>
            📥 Exportar dados (JSON)
          </button>
          <button onClick={()=>fileRef.current.click()} style={{ ...actionBtn,background:"#10B981",color:"#fff",padding:14,fontSize:13,display:"flex",alignItems:"center",justifyContent:"center",gap:8 }}>
            📤 Importar dados (JSON)
          </button>
          <input ref={fileRef} type="file" accept=".json" onChange={importar} style={{ display:"none" }}/>
        </div>

        <div style={{ marginTop:20,padding:14,background:"#FEF2F2",borderRadius:10,border:"1px solid #FECACA" }}>
          <div style={{ fontSize:12,fontWeight:700,color:"#991B1B",marginBottom:8 }}>⚠️ Zona de perigo</div>
          <button onClick={limpar} style={{ ...actionBtn,background:"#EF4444",color:"#fff",padding:"10px 14px",fontSize:13 }}>
            🗑️ Apagar todos os dados
          </button>
        </div>
      </div>

      <div style={{ background:theme.cardBg,borderRadius:12,padding:16,boxShadow:theme.shadow }}>
        <div style={{ fontSize:11,color:theme.muted,fontWeight:700,textTransform:"uppercase",letterSpacing:.8,marginBottom:12 }}>Resumo do armazenamento</div>
        <div style={{ fontSize:13,color:theme.text,display:"flex",flexDirection:"column",gap:6 }}>
          <div>📅 Dias com registros: <strong>{Object.keys(actions).length}</strong></div>
          <div>📋 Total de ações: <strong>{Object.values(actions).flat().length}</strong></div>
          <div>🍷 Degustações: <strong>{Object.values(actions).flat().filter(a=>a.cat==="DEGUSTACAO").length}</strong></div>
        </div>
      </div>
    </div>
  );
}

// ─── Main App ─────────────────────────────────────────────────────────────────
const TABS = [
  { id:"diario",      label:"Diário",    icon:"📅" },
  { id:"comercial",   label:"Comercial", icon:"💼" },
  { id:"degustacoes", label:"Degs.",     icon:"🍷" },
  { id:"resumo",       label:"Resumo",    icon:"📊" },
  { id:"config",      label:"Config",    icon:"⚙️" },
];

const LS_KEY = "org_diaria_v2";

export default function App(){
  const [tab,setTab]=useState("diario");
  const [selected,setSelected]=useState(new Date(2026,5,29));
  const [dark,setDark]=useState(false);
  const [globalSearch,setGlobalSearch]=useState("");

  const [actions,setActionsRaw]=useState(()=>{
    try { const s=localStorage.getItem(LS_KEY); if(s){ const d=JSON.parse(s); return d.actions||INITIAL_ACTIONS; } } catch{}
    return INITIAL_ACTIONS;
  });
  const [sellers,setSellersRaw]=useState(()=>{
    try { const s=localStorage.getItem(LS_KEY); if(s){ const d=JSON.parse(s); return d.sellers||INITIAL_SELLERS; } } catch{}
    return INITIAL_SELLERS;
  });
  const [ronaldoList,setRonaldoListRaw]=useState(()=>{
    try { const s=localStorage.getItem(LS_KEY); if(s){ const d=JSON.parse(s); return d.ronaldoList||INITIAL_RONALDO; } } catch{}
    return INITIAL_RONALDO;
  });

  function setActions(v){ setActionsRaw(v); persist(v,sellers,ronaldoList); }
  function setSellers(v){ setSellersRaw(v); persist(actions,v,ronaldoList); }
  function setRonaldoList(v){ setRonaldoListRaw(v); persist(actions,sellers,v); }
  function persist(a,s,r){ try { localStorage.setItem(LS_KEY,JSON.stringify({ actions:a,sellers:s,ronaldoList:r })); } catch{} }

  const theme=getTheme(dark);

  const key=toKey(selected);
  const dayList=actions[key]||[];
  const pending=dayList.filter(a=>!a.done).length;

  const searchResults = globalSearch.trim().length>1
    ? Object.entries(actions).flatMap(([date,list])=>
        list.filter(a=>{
          const q=globalSearch.toLowerCase();
          return a.title.toLowerCase().includes(q) || (a.note||"").toLowerCase().includes(q) || (a.seller||"").toLowerCase().includes(q);
        }).map(a=>({ ...a, date }))
      ).slice(0,12)
    : [];

  function goToResult(r){
    const [y,m,d]=r.date.split("-").map(Number);
    setSelected(new Date(y,m-1,d));
    setTab("diario");
    setGlobalSearch("");
  }

  return (
    <div style={{ minHeight:"100vh",background:theme.pageBg,fontFamily:"system-ui,-apple-system,sans-serif" }}>
      <div style={{ background:theme.headerBg,borderBottom:`1px solid ${theme.border}`,padding:"0 16px",position:"sticky",top:0,zIndex:100,boxShadow:theme.shadow }}>
        <div style={{ maxWidth:700,margin:"0 auto",display:"flex",alignItems:"center",gap:10,height:56,position:"relative" }}>
          <div style={{ width:32,height:32,borderRadius:8,background:"linear-gradient(135deg,#7C3AED,#EC4899)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,flexShrink:0 }}>◉</div>
          <span style={{ fontWeight:800,fontSize:16,color:theme.text,letterSpacing:-.3,flexShrink:0 }}>Organização Diária</span>
          <div style={{ flex:1,position:"relative",marginLeft:6 }}>
            <input
              value={globalSearch}
              onChange={e=>setGlobalSearch(e.target.value)}
              placeholder="🔍 Buscar em tudo..."
              style={{ width:"100%",border:`1px solid ${theme.border}`,borderRadius:8,padding:"6px 10px",fontSize:12,background:theme.chipBg,color:theme.text,outline:"none",fontFamily:"inherit",boxSizing:"border-box" }}
            />
            {searchResults.length>0 && (
              <div style={{ position:"absolute",top:"110%",left:0,right:0,background:theme.cardBg,border:`1px solid ${theme.border}`,borderRadius:10,boxShadow:"0 6px 20px #0003",maxHeight:300,overflowY:"auto",zIndex:200 }}>
                {searchResults.map(r=>(
                  <div key={r.date+"-"+r.id} onClick={()=>goToResult(r)} style={{ padding:"8px 12px",borderBottom:`1px solid ${theme.border}`,cursor:"pointer" }}>
                    <div style={{ fontSize:10,color:theme.muted }}>{r.date}</div>
                    <div style={{ fontSize:12,color:theme.text,fontWeight:600 }}>{r.title}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <button onClick={()=>setDark(v=>!v)} title="Alternar modo escuro" style={{ background:"none",border:"none",fontSize:18,cursor:"pointer",flexShrink:0 }}>{dark?"🌙":"☀️"}</button>
          {pending>0 && (
            <span style={{ background:"#7C3AED",color:"#fff",borderRadius:20,fontSize:11,fontWeight:700,padding:"2px 8px",flexShrink:0 }}>
              {pending}
            </span>
          )}
        </div>
      </div>

      <div style={{ maxWidth:700,margin:"0 auto",padding:"16px 12px 100px" }}>
        {tab==="diario"      && <TabDiario      selected={selected} setSelected={setSelected} actions={actions} setActions={setActions} theme={theme}/>}
        {tab==="comercial"   && <TabComercial   selected={selected} actions={actions} setActions={setActions} theme={theme}/>}
        {tab==="degustacoes" && <TabDegustacoes selected={selected} actions={actions} setActions={setActions} theme={theme}/>}
        {tab==="resumo"      && <TabResumo      selected={selected} actions={actions} theme={theme}/>}
        {tab==="config"      && <TabConfig      actions={actions} setActions={setActions} sellers={sellers} setSellers={setSellers} ronaldoList={ronaldoList} setRonaldoList={setRonaldoList} theme={theme} dark={dark} setDark={setDark}/>}
      </div>

      <div style={{ position:"fixed",bottom:0,left:0,right:0,background:theme.navBg,borderTop:`1px solid ${theme.border}`,display:"flex",boxShadow:"0 -2px 8px #0001",zIndex:100 }}>
        {TABS.map(t=>(
          <button key={t.id} onClick={()=>setTab(t.id)} style={{ flex:1,border:"none",background:"none",cursor:"pointer",padding:"12px 6px 10px",display:"flex",flexDirection:"column",alignItems:"center",gap:3,borderTop:"3px solid",borderTopColor:tab===t.id?"#7C3AED":"transparent" }}>
            <span style={{ fontSize:18 }}>{t.icon}</span>
            <span style={{ fontSize:9,fontWeight:700,letterSpacing:.3,textTransform:"uppercase",color:tab===t.id?"#7C3AED":theme.muted }}>{t.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
