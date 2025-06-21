const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const trackInteraction = async (
    component: string,
    action: string,
    variant?: string
) => {
    const token = localStorage.getItem('token');

    try {
        await fetch( `${BASE_URL}/api/components/track`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: token ? `Bearer ${token}` : '',
            },
            body: JSON.stringify({
                component,
                action,
                variant,
            }),
        });
    } catch (error) {
        console.error('Error al registrar interacción:', error);
    }
};

export const fetchStats = async () => {
    const res = await fetch(`${BASE_URL}/api/components/stats`);

    if (!res.ok) {
        throw new Error('Error al obtener estadísticas');
    }

    return res.json();
};

export const exportCSV = async () => {
    const token = localStorage.getItem('token');

    const res = await fetch(`${BASE_URL}/api/components/export`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!res.ok) {
        throw new Error('Error al exportar CSV');
    }

    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'tracking-data.csv';
    a.click();
    a.remove();
};

export const exportJSON = async () => {
    const token = localStorage.getItem('token');

    const res = await fetch(`${BASE_URL}/api/components/stats`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!res.ok) {
        throw new Error('Error al exportar JSON');
    }

    const data = await res.json();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'tracking-data.json';
    a.click();
    a.remove();
};
