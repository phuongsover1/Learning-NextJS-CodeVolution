export async function GET() {
    return new Response(JSON.stringify({ name: "John Doe", age: 30 }));
}