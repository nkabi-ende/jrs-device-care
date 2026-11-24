import { siteOrigin } from "../lib/pageHead.js";

export const courses = [
  {
    id: "beginner", name: "Beginner", fee: 10000,
    scope: "Three-week course", label: "Black Friday · Save R2,000",
    description: "Learn to replace phone screens and batteries, then test your work before handover.",
    skills: [
      "Identify components, select tools and handle devices safely.",
      "Study online for two weeks, then practise with a facilitator for one week at a workshop in Newlands West.",
      "Use the training equipment, take home a starter toolkit and earn a certificate of completion.",
    ],
  },
  {
    id: "intermediate", name: "Intermediate", fee: 23500,
    scope: "Includes Beginner", label: "Fault diagnosis",
    description: "Work out why a phone will not charge and which part needs replacing.",
    skills: [
      "Use a multimeter to check the battery, charging port and connections.",
      "Follow the readings to isolate a fault before replacing parts.",
      "Explain the diagnosis to the customer, quote the job and test the repair.",
    ],
  },
  {
    id: "advanced", name: "Advanced", fee: 37000,
    scope: "Includes all three levels", label: "Board-level repair",
    description: "Trace motherboard faults and practise microsoldering under a microscope on phones and commercial electronics.",
    skills: [
      "Trace no-power faults and replace failed components at board level.",
      "Apply the same diagnostic skills to POS, tracking, security and networking equipment.",
      "Complete the full programme in six weeks on the fast track, or take up to two months at your pace.",
    ],
  },
];

const commercialDevices = [
  ["Point-of-sale equipment", "Diagnose power faults in till terminals and trace hardware faults in receipt printers."],
  ["Vehicle tracking systems", "Test GPS tracker boards, backup batteries and antenna connections."],
  ["CCTV & access control", "Trace loss of video between cameras and recorders, and diagnose power faults in access-control units."],
  ["Routers & network switches", "Identify damaged ports and trace power-delivery faults on networking equipment."],
];

export const formatFee = fee => "R" + fee.toLocaleString("en-US");

export function renderAcademyCourses() {
  const cards = courses.map(course => `
    <article class="course-card" id="${course.id}" aria-labelledby="${course.id}-title">
      <span class="course-label">${course.label}</span>
      <h3 id="${course.id}-title">${course.name}</h3>
      <p class="course-fee">${formatFee(course.fee)} <small>${course.id === "beginner" ? "<s>R12,000</s>" : "total"}</small></p>
      <p class="course-scope">${course.scope}</p>
      <p>${course.description}</p>
      <ul>${course.skills.map(skill => `<li>${skill}</li>`).join("")}</ul>
      <button class="btn course-enquire" data-enquire="Academy training" data-course="${course.id}">Enquire for ${course.name}</button>
    </article>`).join("");

  return `<section class="academy-levels" id="curriculum" aria-labelledby="levels-title">
    <div class="course-heading"><div><h2 id="levels-title">Choose your repair course.</h2>
    <p>Each fee is the total for the level you choose. Intermediate includes Beginner, and Advanced covers the full programme.</p></div>
    <a class="course-guide-link" href="/academy-media/course-guide.pdf" download="JRs-Academy-Course-Brochure.pdf">Download the course brochure (PDF)</a></div>
    <div class="course-grid">${cards}</div>
    <section class="course-applications" aria-labelledby="applications-title">
      <h3 id="applications-title">Inside the Advanced workshop</h3>
      <dl>${commercialDevices.map(([device, skill]) => `<div><dt>${device}</dt><dd>${skill}</dd></div>`).join("")}</dl>
    </section>
  </section>`;
}

export function academyCourseSchema() {
  const base = siteOrigin + "/academy/";
  return {
    "@context": "https://schema.org",
    "@graph": courses.map(course => ({
      "@type": "Course", "@id": base + "#" + course.id, url: base + "#" + course.id,
      name: "JRs Device Care Academy — " + course.name, description: course.description,
      provider: { "@type": "Organization", name: "JRs Device Care", url: siteOrigin },
      offers: { "@type": "Offer", category: "Paid", price: course.fee, priceCurrency: "ZAR", url: base + "#" + course.id },
    })),
  };
}
