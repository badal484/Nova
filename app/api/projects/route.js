export async function GET() {
  const projects = [
    { id: 1, title: "Brand Refresh", category: "Branding", image: "https://picsum.photos/seed/nova1/400/250" },
    { id: 2, title: "E-commerce Site", category: "Web Design", image: "https://picsum.photos/seed/nova2/400/250" },
    { id: 3, title: "Marketing Dashboard", category: "Front-End Development", image: "https://picsum.photos/seed/nova3/400/250" },
    { id: 4, title: "Mobile App Landing", category: "Web Design", image: "https://picsum.photos/seed/nova4/400/250" },
    { id: 5, title: "Logo System", category: "Branding", image: "https://picsum.photos/seed/nova5/400/250" },
    { id: 6, title: "SaaS Platform UI", category: "Front-End Development", image: "https://picsum.photos/seed/nova6/400/250" },
  ];

  return Response.json(projects);
}