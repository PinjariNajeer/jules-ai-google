document.addEventListener('DOMContentLoaded', () => {
    const eventList = document.getElementById('event-list');

    const events = [
        {
            title: 'Tech Conference 2025',
            date: '2025-10-15',
            description: 'Join us for the biggest tech conference of the year.'
        },
        {
            title: 'Design Workshop',
            date: '2025-11-05',
            description: 'A hands-on workshop for designers of all levels.'
        },
        {
            title: 'Startup Pitch Night',
            date: '2025-11-20',
            description: 'Watch the latest startups pitch their ideas.'
        },
        {
            title: 'Marketing Summit',
            date: '2025-12-10',
            description: 'Learn the latest trends in digital marketing.'
        }
    ];

    events.forEach(eventData => {
        const eventElement = document.createElement('div');
        eventElement.classList.add('event');

        eventElement.innerHTML = `
            <h2>${eventData.title}</h2>
            <p><strong>Date:</strong> ${eventData.date}</p>
            <p>${eventData.description}</p>
            <button>Join</button>
        `;

        eventList.appendChild(eventElement);
    });
});
