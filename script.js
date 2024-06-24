document.addEventListener('DOMContentLoaded', async function() {
    const apiUrl = 'https://pahfwpxwtlqxarqvqlvc.supabase.co/rest/v1/highscores';
    const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBhaGZ3cHh3dGxxeGFycXZxbHZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkwOTI3MjgsImV4cCI6MjAzNDY2ODcyOH0.QxVazKcbCD4LR03SLzETfB0wDkHMgavt2IA_kL-9zB0';

    try {
        const response = await fetch(apiUrl, {
            headers: {
                'Apikey': apiKey
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        const tableBody = document.querySelector('#highscoresTable tbody');

        data.forEach(entry => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${entry.id}</td>
                <td>${entry.name}</td>
                <td>${entry.score}</td>
                <td>${new Date(entry.created_at).toLocaleString()}</td>
            `;
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
