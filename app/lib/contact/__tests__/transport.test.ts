import { buildPortfolioMailtoUrl } from '../mailtoTransportCore';

describe('buildPortfolioMailtoUrl', () => {
    it('builds a mailto URL with encoded subject and body', () => {
        const redirectUrl = buildPortfolioMailtoUrl({
            to: 'k8@k8port.io',
            name: 'Jane Doe',
            email: 'jane@example.com',
            message: 'Hello world',
        });

        expect(redirectUrl).toContain('mailto:k8@k8port.io?');
        expect(redirectUrl).toContain('subject=New%20inquiry%20from%20Jane%20Doe');
        expect(redirectUrl).not.toContain('%24%7Bname%7D');
        expect(redirectUrl).toContain(
            'body=From%3A%20Jane%20Doe%20(jane%40example.com)%0A%0AHello%20world'
        );
    });

    it('uses fallback sender label when name is blank', () => {
        const redirectUrl = buildPortfolioMailtoUrl({
            to: 'k8@k8port.io',
            name: '   ',
            email: 'jane@example.com',
            message: 'Hello world',
        });

        expect(redirectUrl).toContain('subject=New%20inquiry%20from%20anonymous%20sender');
    });
});
