export async function POST(req) {
    const body = await req.json();
    const { email, password } = body;

    if (email === 'admin@example.com' && password === 'admin123') {
        return new Response(JSON.stringify({ message: 'Login successful' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    return new Response(JSON.stringify({ message: 'Invalid credentials' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
    });
}
