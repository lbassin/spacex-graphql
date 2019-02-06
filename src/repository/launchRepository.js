const launches = [
    {
        id: 1,
        name: 'Premier vol de test',
        success: false,
        rocket_id: 1
    },
    {
        id: 2,
        name: 'Destination Lune',
        success: true,
        rocket_id: 2
    },
    {
        id: 3,
        name: 'Destination Mars',
        success: true,
        rocket_id: 2
    }
];

module.exports = {
    getAll: () => {
        return launches;
    },

    get: (id) => {
        return launches.find((launch) => launch.id === id);
    }
};