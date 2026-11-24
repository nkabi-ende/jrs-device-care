import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { academyCourseSchema, renderAcademyCourses } from '../src/pages/academyCourses.js';
import { renderFranchisePage } from '../src/pages/franchisePage.js';
import { renderLandingHeader } from '../src/components/siteHeader.js';

import { getPageHead, siteOrigin as origin } from '../src/lib/pageHead.js';
import { renderPageHead } from '../src/lib/renderPageHead.js';

const readText = path => readFileSync(path, 'utf8');
const readJson = path => JSON.parse(readText(path));
const pages = readJson('src/pages/landingPages.json');
pages.home.html = pages.home.html.replace('<!-- home-hero -->', readText('src/pages/homeHero.html'));
pages.academy.html = pages.academy.html.replace('<!-- academy-courses -->', renderAcademyCourses()).replace('<!-- academy-workshop -->', readText('src/pages/academyWorkshop.html'));
pages.corporate.html = pages.corporate.html.replace('<!-- business-industries -->', readText('src/pages/businessIndustries.html'));
pages.franchise = {
  ...readJson('src/pages/franchiseMeta.json'),
  html: renderFranchisePage(
    readJson('src/components/siteChrome.json'),
    readText('src/pages/franchise.css'),
    readText('src/pages/franchise.html'),
  ),
};
const shell = readFileSync('dist/index.html','utf8');
const business={'@context':'https://schema.org','@graph':[{'@type':['LocalBusiness','ElectronicsStore'],'@id':origin+'/#business',name:'JRs Device Care',alternateName:"Junior's Device Care",url:origin+'/',logo:origin+'/jrs-logo.jpeg',image:origin+'/jrs-logo.jpeg',telephone:'+27716865256',email:'enquiries@jrsdevicecare.co.za',description:'Phone, tablet, laptop and electronics repair technicians in Newlands West, Durban, offering repairs, training, business servicing and second-hand devices.',address:{'@type':'PostalAddress',addressLocality:'Newlands West',addressRegion:'KwaZulu-Natal',addressCountry:'ZA'},areaServed:[{'@type':'City',name:'Durban'},{'@type':'Place',name:'Newlands West'},{'@type':'AdministrativeArea',name:'KwaZulu-Natal'}],hasOfferCatalog:{'@type':'OfferCatalog',name:'Device Care Services',itemListElement:[{'@type':'OfferCatalog',name:'Phone, tablet, laptop and electronics repairs',url:origin+'/repairs/'},{'@type':'OfferCatalog',name:'Device repair technician training',url:origin+'/academy/'},{'@type':'OfferCatalog',name:'Corporate device servicing',url:origin+'/corporate/'},{'@type':'OfferCatalog',name:'Second-hand devices',url:origin+'/shop/'}]}},{'@type':'WebSite','@id':origin+'/#website',url:origin+'/',name:'JRs Device Care',publisher:{'@id':origin+'/#business'},inLanguage:'en-ZA'}]};
function getPageSchema(key, page, path) {
  if (key === 'home') return business;
  const url = origin + path;
  const webPage = {
    '@type': 'WebPage',
    '@id': url + '#page',
    name: page.title,
    description: page.description,
    url,
    inLanguage: 'en-ZA',
    isPartOf: { '@id': origin + '/#website' },
    about: { '@id': origin + '/#business' },
  };
  if (key === 'academy') return { '@context': 'https://schema.org', '@graph': [webPage, ...academyCourseSchema()['@graph']] };
  if (key !== 'franchise') return { '@context': 'https://schema.org', ...webPage };

  const breadcrumb = {
    '@type': 'BreadcrumbList',
    '@id': url + '#breadcrumbs',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: origin + '/' },
      { '@type': 'ListItem', position: 2, name: 'Phone repair franchise', item: url },
    ],
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [{ ...webPage, breadcrumb: { '@id': breadcrumb['@id'] } }, breadcrumb],
  };
}

const shop = readJson('src/pages/shopMeta.json');
const routes = [...Object.entries(pages), ['shop', shop]];
const imagePaths = routes.map(([, page]) => page.image);
if (new Set(imagePaths).size !== routes.length) throw new Error('Each main page needs a distinct sharing image.');
for (const path of imagePaths) readFileSync('dist' + path);
for (const [key,p] of routes) {
  const path = key === 'home' ? '/' : `/${key}/`;
  let html=shell.replace(/<title>[\s\S]*?<\/title>/g,'').replace(/<meta\b[^>]*(?:name|property)=["'](?:description|og:[^"']*|twitter:[^"']*)["'][^>]*>/g,'').replace(/<link\b[^>]*rel=["']canonical["'][^>]*>/g,'').replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g,'');
  const tags = renderPageHead(getPageHead(p, path), getPageSchema(key, p, path));
  html = html.replace('</head>', () => tags + '</head>');
  if(p.html)html=html.replace('<div id="root"></div>',`<div id="root"><div class="jrs-home">${renderLandingHeader(p.html, path)}</div></div>`);
  const dir=key==='home'?'dist':`dist/${key}`;mkdirSync(dir,{recursive:true});writeFileSync(`${dir}/index.html`,html);
}
const sitemapUrls = [...readText('dist/sitemap.xml').matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
const canonicalUrls = routes.map(([key]) => origin + (key === 'home' ? '/' : `/${key}/`));
if (new Set(sitemapUrls).size !== canonicalUrls.length || sitemapUrls.length !== canonicalUrls.length ||
    !canonicalUrls.every(url => sitemapUrls.includes(url))) {
  throw new Error('Sitemap URLs must match the canonical routes.');
}
console.log(`Built static content, canonical metadata and schema for ${routes.length} routes.`);
