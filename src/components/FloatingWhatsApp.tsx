import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const options = [
  ["Repair my device", "Hi JRs Device Care, I'd like a repair quote. My device and fault are: "],
  ["Ask about the academy", "Hi JRs Device Care, I'm interested in the certified R7,999 repair course and starter equipment set after completion. Please send November / December intake details."],
  ["Business device support", "Hi JRs Device Care, I'd like to discuss device support for my business."],
  ["Shop pre-owned devices", "Hi JRs Device Care, what pre-owned devices are available?"],
];
export default function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);
  return <aside aria-label="WhatsApp support" style={{position:'fixed',right:20,bottom:'max(20px, env(safe-area-inset-bottom))',zIndex:60,fontFamily:'Arial,sans-serif'}}>
    {open && <section id="whatsapp-support" aria-label="Talk to JRs Device Care" style={{width:'min(340px, calc(100vw - 40px))',background:'#f5f1e7',color:'#0c203c',border:'1px solid #ccd3d8',boxShadow:'0 15px 50px #0c203c35',marginBottom:12,borderRadius:12,overflow:'hidden'}}>
      <div style={{background:'#0c203c',color:'white',padding:20,display:'flex',justifyContent:'space-between',alignItems:'center'}}><strong>JRs Device Care</strong><button onClick={()=>setOpen(false)} aria-label="Close WhatsApp help" style={{background:'none',border:0,color:'white',padding:8}}><X size={18}/></button></div>
      <div style={{padding:20}}><p style={{fontSize:15,lineHeight:1.6,color:'#0c203c',margin:'0 0 15px'}}>Hi there! Welcome to JRs Device Care. What can we help you with today?</p>
      <p style={{fontSize:12,color:'#596471',lineHeight:1.6,marginBottom:15}}>Choose a topic to continue in WhatsApp with our team. This is a welcome menu, not a live chat.</p>
      {options.map(([label,message])=><a key={label} href={`https://wa.me/27716865256?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer" style={{display:'block',padding:'12px 14px',marginTop:8,border:'1px solid #c8ceca',borderRadius:5,fontSize:13,fontWeight:600,textDecoration:'none',color:'#0c203c'}}>{label} ↗</a>)}
      <a href="mailto:enquiries@jrsdevicecare.co.za" style={{display:'block',fontSize:12,marginTop:17,color:'#0c203c',textDecoration:'underline'}}>Prefer email? enquiries@jrsdevicecare.co.za</a></div>
    </section>}
    <button onClick={()=>setOpen(!open)} aria-expanded={open} aria-controls="whatsapp-support" aria-label={open?"Close WhatsApp support":"Open WhatsApp support"} style={{marginLeft:'auto',display:'flex',alignItems:'center',gap:10,border:0,borderRadius:40,background:'#157d49',color:'white',padding:'15px 20px',boxShadow:'0 6px 25px #0c203c30',cursor:'pointer',fontWeight:700,fontSize:14}}>{open?<X size={23}/>:<MessageCircle size={23}/>} WhatsApp us</button>
  </aside>;
}
