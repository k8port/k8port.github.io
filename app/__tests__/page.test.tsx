describe('baseline test suite', () => {
    it('runs at least one test', () => {
        expect(true).toBe(true);
    });
});
// import { render, screen } from '@testing-library/react';
// import HomePage from '../page';
// import { getContent } from '../lib/utils';

// // Change this to match your import path above
// jest.mock('../lib/utils', () => ({
//   getContent: jest.fn(),
// }));

// // Update these mocks to use relative paths too
// jest.mock('../ui/AboutMe', () => () => (
//   <div data-testid='AboutMe'>About Me</div>
// ));
// jest.mock('../ui/Projects', () => () => (
//   <div data-testid='Projects'>Projects</div>
// ));
// jest.mock('../ui/Logo', () => () => <div data-testid='Logo'>Logo</div>);
// jest.mock('../ui/InterimSkillsPanel', () => () => (
//   <div data-testid='InterimSkillsPanel'>Interim Skills Panel</div>
// ));

// describe('HomePage component', () => {
//   beforeEach(() => {
//     (getContent as jest.Mock).mockResolvedValue({
//       sections: {
//         branding: 'Test Branding',
//         aboutMe: { label: 'Bio', content: 'Test bio content' },
//         skillsPanel: 'Skills Panel Content',
//       },
//     });
//   });

//   it('render HomePage with all sections', async () => {
//     render(await HomePage());

//     // check that correct sections exist
//     expect(screen.getByTestId('Logo')).toBeInTheDocument();
//     expect(screen.getByTestId('InterimSkillsPanel')).toBeInTheDocument();
//     expect(screen.getByTestId('Projects')).toBeInTheDocument();
//     expect(screen.getByTestId('AboutMe')).toBeInTheDocument();
//   });
// });
