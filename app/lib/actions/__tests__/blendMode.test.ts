import { getBlendMode } from '@/lib/actions/blendMode';

describe('getBlendMode', () => {
    it('returns normalized class for valid blend mode', () => {
        expect(getBlendMode('overlay')).toBe('mix-blend-overlay');
    });

    it('falls back to normal for invalid mode', () => {
        expect(getBlendMode('not-a-mode')).toBe('mix-blend-normal');
    });
});
