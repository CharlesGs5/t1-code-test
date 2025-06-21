import {
    trackInteraction,
    getComponentStats,
    exportCSV,
    exportJSON,
} from './trackingService';

beforeEach(() => {
    global.fetch = jest.fn(() =>
        Promise.resolve({
            ok: true,
            json: () => Promise.resolve([]),
            blob: () => new Blob(['test'], { type: 'text/csv' }),
        } as unknown as Response)
    );

    global.URL.createObjectURL = jest.fn(() => 'blob:http://localhost/fake');

    document.createElement = jest.fn((tagName: string) => {
        if (tagName === 'a') {
            const anchor = document.createElementNS('http://www.w3.org/1999/xhtml', 'a') as HTMLAnchorElement;
            anchor.click = jest.fn();
            anchor.setAttribute = jest.fn();
            anchor.remove = jest.fn();
            return anchor;
        }
        return document.createElementNS('http://www.w3.org/1999/xhtml', tagName);
    });


    localStorage.setItem('token', 'fake-token');
});

afterEach(() => {
    jest.restoreAllMocks();
    localStorage.clear();
});

describe('trackingService', () => {
    it('calls trackInteraction without errors', async () => {
        await expect(trackInteraction('Button', 'primary', 'click')).resolves.toBeUndefined();
        expect(fetch).toHaveBeenCalledWith(
            expect.stringContaining('/api/components/track'),
            expect.objectContaining({ method: 'POST' })
        );
    });

    it('fetches component stats', async () => {
        const data = await getComponentStats();
        expect(fetch).toHaveBeenCalledWith(expect.stringContaining('/api/components/stats'));
        expect(Array.isArray(data)).toBe(true);
    });

    it('exports CSV', async () => {
        (fetch as jest.Mock).mockClear();
        await exportCSV();
        expect(fetch).toHaveBeenCalledWith(
            expect.stringContaining('/api/components/export'),
            expect.objectContaining({
                headers: expect.objectContaining({ Authorization: expect.any(String) }),
            })
        );
    });

    it('exports JSON', async () => {
        (fetch as jest.Mock).mockClear();
        await exportJSON();
        expect(fetch).toHaveBeenCalledWith(
            expect.stringContaining('/api/components/export?format=json'),
            expect.objectContaining({
                headers: expect.objectContaining({ Authorization: expect.any(String) }),
            })
        );
    });
});
