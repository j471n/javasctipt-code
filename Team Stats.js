//link : https://www.codecademy.com/courses/introduction-to-javascript/projects/team-stats
//Programmer : Jatin Sharma


const team = {
    _players: [{
            firstName: 'Virat',
            lastName: 'kohli',
            age: 26
        },
        {
            firstName: 'MS',
            lastName: 'Dhoni',
            age: 40
        },
        {
            firstName: 'Rohit',
            lastName: 'Sharma',
            age: 30
        }
    ],
    _games: [{
            opponent: 'Australia',
            teamPoints: 32,
            opponentPoints: 20
        },
        {
            opponent: 'Pakistan',
            teamPoints: 42,
            opponentPoints: 9
        },
        {
            opponent: 'South Africa',
            teamPoints: 44,
            opponentPoints: 27
        }
    ],

    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },

    addPlayer(firstName, lastName, age) {
        let player = {
            firstName: firstName,
            lastName: lastName,
            age: age
        };
        this.players.push(player);
    },
    addGame(opponent, teamPoints, opponentPoints) {
        let game = {
            opponent: opponent,
            teamPoints: teamPoints,
            opponentPoints: opponentPoints
        };
        this.games.push(game)
    }
};

team.addPlayer('Ravindra', 'Jadeja', 39);
team.addPlayer('Shikhar', 'Dhawan', 33);
team.addPlayer('Bhuvneshwar', 'Kumar', 34);

team.addGame('England', 56, 48);
team.addGame('New Zealand', 40, 35);
team.addGame('UAE', 66, 43);

// console.log(team.players)
// console.log(team.teams)
