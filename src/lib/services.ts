export interface Service {
  number: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  { number: "01", title: "Interior Design", description: "Concept, spatial planning and material direction tailored to each client's life." },
  { number: "02", title: "Turnkey Fit-Out", description: "End-to-end execution under one accountable team — from MEP to final styling." },
  { number: "03", title: "Villa Renovation", description: "Structural transformation of existing villas with discreet construction management." },
  { number: "04", title: "Commercial Fit-Out", description: "Office, retail and hospitality fit-out engineered for performance and brand." },
  { number: "05", title: "Office Design", description: "Workplace interiors that balance focus, hospitality and visual authority." },
  { number: "06", title: "Smart Home Automation", description: "Whole-home control systems for lighting, climate, shading, security and AV." },
  { number: "07", title: "Lighting Automation", description: "Architectural lighting choreographed by scene, time of day and presence." },
  { number: "08", title: "Security Systems", description: "Integrated access, CCTV and intrusion systems — silent, reliable, refined." },
  { number: "09", title: "Audio Visual Systems", description: "Cinematic distributed audio, hidden displays and dedicated home cinema design." },
  { number: "10", title: "Joinery & Custom Furniture", description: "Workshop-built cabinetry, wardrobes and signature furniture in any finish." },
  { number: "11", title: "Project Management", description: "Single point of accountability across consultants, suppliers and trades." },
  { number: "12", title: "Maintenance Support", description: "Post-handover service contracts to keep every system performing." },
];
