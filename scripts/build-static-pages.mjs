import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
const pages = JSON.parse(readFileSync('src/pages/landingPages.json','utf8'));
const shell = readFileSync('dist/index.html','utf8');
const origin = 'https://jrsdevicecare.co.za';
const escape = s => s.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;').replaceAll('>','&gt;');
const business = {'@context':'https://schema.org','@type':'LocalBusiness',name:'JRs Device Care',url:origin,telephone:'+27716865256',email:'sales@jrsdevicecare.co.za',address:{'@type':'PostalAddress',addressLocality:'Newlands West, Durban',addressRegion:'KwaZulu-Natal',addressCountry:'ZA'}};
const shop={title:'Pre-Owned Devices Durban | JRs Device Care',description:'Your next device. Its next chapter. Browse pre-owned phones, tablets, laptops and electronics from JRs Device Care in Durban.'};
for (const [key,p] of [...Object.entries(pages),['shop',shop]]) {
  const path=key==='home'?'/':`/${key}`;
  let html=shell.replace(/<title>[\s\S]*?<\/title>/g,'').replace(/<meta\b[^>]*(?:name|property)=["'](?:description|og:[^"']*|twitter:[^"']*)["'][^>]*>/g,'').replace(/<link\b[^>]*rel=["']canonical["'][^>]*>/g,'').replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g,'');
  const tags=`<title>${escape(p.title)}</title><meta name="description" content="${escape(p.description)}"><link rel="canonical" href="${origin+path}"><meta property="og:type" content="website"><meta property="og:site_name" content="JRs Device Care"><meta property="og:locale" content="en_ZA"><meta property="og:title" content="${escape(p.title)}"><meta property="og:description" content="${escape(p.description)}"><meta property="og:url" content="${origin+path}"><meta property="og:image" content="${origin}/social-preview.png"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="JRs Device Care. Device repairs and R7,999 academy in Durban."><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${escape(p.title)}"><meta name="twitter:description" content="${escape(p.description)}"><meta name="twitter:image" content="${origin}/social-preview.png"><script type="application/ld+json">${JSON.stringify(business)}</script>`;
  html=html.replace('</head>',tags+'</head>');
  if(p.html)html=html.replace('<div id="root"></div>',`<div id="root"><div class="jrs-home">${p.html}</div></div>`);
  const dir=key==='home'?'dist':`dist/${key}`;mkdirSync(dir,{recursive:true});writeFileSync(`${dir}/index.html`,html);
}
const paths=['/','/repairs','/pricing','/academy','/corporate','/contact','/shop'];
writeFileSync('dist/sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map(p=>`<url><loc>${origin+p}</loc></url>`).join('')}</urlset>`);
console.log('Built static content and social metadata for 7 routes.');
