
const BASE_URI = import.meta.env.BASE_URI;

const analyticsHelper = (projectName) => {
    if (!projectName) return;
    fetch(`${BASE_URI}/api/analytics/project-click`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ projectName }),
    }).catch(() => {
        // Ignore errors silently
    });
};

export { analyticsHelper };