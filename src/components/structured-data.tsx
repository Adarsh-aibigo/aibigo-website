const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://aibigo.in/#organization",
      name: "AIBIGO Institute",
      url: "https://aibigo.in",
      logo: "https://aibigo.in/brand/aibigo-logo.png",
      description:
        "AIBIGO Institute is an AI-native education company building the infrastructure that connects what institutions teach, what industry needs, and what students become.",
      founder: [
        { "@type": "Person", name: "Dr. Rhushabh Goradia" },
        { "@type": "Person", name: "Adarsh Jain" },
      ],
      email: "outreach@aibigo.in",
    },
    {
      "@type": "WebSite",
      "@id": "https://aibigo.in/#website",
      url: "https://aibigo.in",
      name: "AIBIGO Institute",
      publisher: { "@id": "https://aibigo.in/#organization" },
    },
    {
      "@type": "SoftwareApplication",
      name: "IGALP",
      alternateName: "Industry-Guided Applied Learning Program",
      applicationCategory: "EducationalApplication",
      operatingSystem: "Web",
      description:
        "A continuous, industry-guided applied learning and certification program that takes students through hundreds of industry-curated scenarios across their graduation, assessed on 15+ industry-defined capability metrics.",
      url: "https://aibigo.in/#igalp",
      provider: { "@id": "https://aibigo.in/#organization" },
    },
    {
      "@type": "SoftwareApplication",
      name: "BOLO",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "A voice-first task delegation workspace for teams and firms. Create, assign and track tasks by speaking naturally, with broadcast notices and read acknowledgement built in.",
      url: "https://aibigo.in/#bolo",
      provider: { "@id": "https://aibigo.in/#organization" },
    },
  ],
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
