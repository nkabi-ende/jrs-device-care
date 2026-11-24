import { siteOrigin } from "../lib/pageHead.js";

export const courses = [
  {
    id: "beginner", name: "Beginner", fee: 10000,
    scope: "Three-week course", label: "Black Friday · Save R2,000",
    description: "Understand how electricity moves through a circuit board and carry out basic repairs on phones, tablets and laptops.",
    skills: [
      "Identify the main board, battery connector, ground and power input. Explain voltage, current and resistance using a simple circuit.",
      "Build a low-voltage LED circuit on a breadboard. Check the supply voltage with a multimeter, then disconnect power and test an open connection for continuity.",
      "Practise screen and battery replacements on phones and tablets. On serviceable laptops, replace a battery, socketed RAM or a removable SSD and test the result.",
      "Study online for two weeks, then complete a facilitator-led workshop week at a Durban venue booked for your group. Training equipment, a take-home starter toolkit and a certificate of completion are included.",
    ],
  },
  {
    id: "intermediate", name: "Intermediate", fee: 23500,
    scope: "Includes Beginner", label: "Fault diagnosis",
    description: "Work out why a phone will not charge and which part needs replacing.",
    skills: [
      "Use a multimeter to check the battery, charging port and connections.",
      "Trace the charging path on a phone schematic and locate its test points on a practice board.",
      "Record expected and measured values on a working board and a faulty one. Use the difference to explain which part to test next.",
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
    <button class="btn" type="button" data-prospectus>Download the 16-page prospectus</button>
    <dialog id="prospectus-dialog" aria-labelledby="prospectus-title"><button type="button" data-dismiss aria-label="Close prospectus form">×</button>
    <img src="/jrs-logo.jpeg" width="44" height="44" alt="JRs Device Care Academy">
    <h2 id="prospectus-title">Download the prospectus</h2><p>Get the 16-page guide to phone, tablet and laptop repairs, course fees and Durban workshop sessions.</p>
    <form><label>Full name<input required name="name" autocomplete="name" minlength="2" maxlength="150"></label>
    <label>Email address<input required name="email" type="email" autocomplete="email" maxlength="254"></label>
    <label>Phone number<input required name="phone" type="tel" autocomplete="tel" minlength="7" maxlength="32"></label>
    <p class="small">JRs Academy saves your details so our enquiries team can follow up about the course.</p>
    <button class="btn lime" type="submit">Download my prospectus</button><p role="status" aria-live="polite"></p></form></dialog></div>
    <div class="course-grid">${cards}</div>
    <section class="course-applications" aria-labelledby="applications-title">
      <h3 id="applications-title">Inside the Advanced workshop</h3>
      <dl>${commercialDevices.map(([device, skill]) => `<div><dt>${device}</dt><dd>${skill}</dd></div>`).join("")}</dl>
    </section>
    <p>Optional reading from <a href="https://microlek.com/">Microlek Skills Academy</a>. Beginner learners can explore <a href="https://microlek.com/courses/bt105-breadboard-basics/">breadboards</a> and <a href="https://microlek.com/courses/bt102-how-to-use-and-read-a-digital-multimeter/">digital multimeters</a>. Intermediate learners can explore <a href="https://microlek.com/courses/st106-introduction-to-reading-mobile-phones-schematic/">phone schematics</a>.</p>
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
