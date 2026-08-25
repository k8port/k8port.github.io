'use client';

const viewResume = () => {
    window.open('https://drive.proton.me/urls/1ASPCV1G40#a7Uyv8z5uptW', '_blank');
};

export const downloadAndViewResume = () => {
    const shouldDownload = window.confirm(
        'Would you like to download a copy? Click OK to download, Cancel to view in browser.'
    );
    if (shouldDownload) {
        const a = document.createElement('a');
        a.href = '/Kportalatin_resume_0826.pdf';
        a.download = 'Kportalatin_resume_0826.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
    viewResume();
};
