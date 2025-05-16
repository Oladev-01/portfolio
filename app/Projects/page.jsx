import Image from "next/image";

const projects = [
  {
    title: "Logistics Platform API",
    desc:
      "Collaborated with partners, built real-time logistics solutions using WebSockets to connect drivers and users, enabling live shipment tracking, route optimization, and efficient delivery management and as well secure payment integration.",
    img: "/images/logistics2.jpg",
    link: "https://github.com/TychiqueKadi2/toota-mobile-sa",
    tags: ["Django", "PostgreSQL", "WebSockets", "JWT", "Redis", "PayStack"],
  },
  {
    title: "Online Marktplace API",
    desc:
      "Collaborated with partners, developed a comprehensive marketplace API with user authentication, product management, instant notification to buyer and seller, secure payment integration and order processing.",
    img: "/images/cart.jpg",
    link: "https://github.com/Oladev-01/BuyShop",
    tags: ["Django", "Redis", "PostgreSQL", "JWT"],
  },
  {
    title: "Digital Library App",
    desc:
      "Created a digital library platform with user authentication, book management, and real-time updates for new arrivals, AI assistant for generating contents.",
    img: "/images/books.jpg",
    link: "https://github.com/Cool-Books/coolbooks",
    tags: ["Python", "Flask", "MySQL", "OpenAI"],
  },
  {
    title: "AI Virtual Assistant",
    desc:
    "Developed a virtual assistant using Groq AI and LiveKit API for real-time interaction and communication with customers providing instant responses to queries based on trained business model.",
    img: "/images/assistant.jpg",
    link: "https://github.com/Oladev-01/ai-agent",
    tags: ["Python", "Groq", "LiveKit"],
  },
  {
    title: "Payment Gateway Integration",
    desc:
      "Integrate secure multiple payment providers with robust error-handling.",
    img: "/images/pay.jpg",
    link: "https://github.com/TychiqueKadi2/toota-mobile-sa/tree/development/server/toota/payments",
    tags: ["Django", "Flutterwave", "PostgreSQL", "Paystack", "Webhooks"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-white">
      <h2 className="text-3xl font-semibold text-center mb-12 text-gray-700">
        PROJECTS
      </h2>
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <div
            key={p.title}
            className="relative bg-gray-800 rounded-xl shadow hover:shadow-lg transition"
          >
            <div className="relative h-48 overflow-hidden rounded-t-xl">
              <Image
                src={p.img}
                alt={p.title}
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-[#1a1a2e] bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition">
                <a
                  href={p.link}
                  className="px-4 py-2 bg-[#1a1a2e] text-white rounded-md font-medium"
                >
                  View API
                </a>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-100">
                {p.title}
              </h3>
              <p className="text-gray-300 mb-4 text-sm">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block bg-purple-100 text-purple-700 text-xs font-medium px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}