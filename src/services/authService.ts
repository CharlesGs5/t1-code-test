const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const login = async (email: string, password: string) => {
    const res = await fetch(`${BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.message || 'Error al iniciar sesión');
    }

    return data.token;
};


export const register = async (email: string, password: string) => {
    const res = await fetch(`${BASE_URL}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.message || 'Error al registrarse');
    }

    return data.token;
};
