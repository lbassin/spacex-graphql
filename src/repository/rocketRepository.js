const rockets = [
    {
        id: 1,
        name: 'Falcon 1',
    },
    {
        id: 2,
        name: 'Falcon 9',
    },
    {
        id: 2,
        name: 'Falcon Heavy',
    }
];

module.exports = {
    getAll: () => {
        return rockets;
    },

    get: (id) => {
        return rockets.find((rocket) => rocket.id === id);
    },

    save: (data) => {
        const rocket = { id: rockets.length + 1, name: data.name };
        rockets.push(rocket);

        return rocket;
    }
};