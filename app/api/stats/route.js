export async function GET() {
  const stats = [
    { id: 1, label: "Projects Completed", value: 150, suffix: "+" },
    { id: 2, label: "Clients Worldwide", value: 50, suffix: "+" },
    { id: 3, label: "Years Experience", value: 5, suffix: "" },
  ];

  return Response.json(stats);
}