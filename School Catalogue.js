/*
Link : https://www.codecademy.com/courses/introduction-to-javascript/projects/school-catalog
Programmer : Jatin Sharma
*/

//Parent Class
class School {

    constructor(name, level, numOfStudents) {

        this._name = name;
        this._level = level;
        this._numOfStudents = numOfStudents;
    }

    get name() {
        return this._name;
    }

    get level() {
        return this._level;
    }
    get numOfStudents() {
        return this._numOfStudents;
    }

    set numOfStudents(value) {

        if (typeof value === "number") {

            this._numOfStudents = value;
        } else {
            console.log('Invalid input: numberOfStudents must be set to a Number.');
        }
    }

    quickFacts() {
        console.log(`${this.name} educates ${this.numOfStudents} students at the ${this.level} school level.`)
    }

    static pickSubstituteTeacher(substituteTeachers) {
        let index = Math.floor(Math.random() * substituteTeachers.length);

        return substituteTeachers[index];
    }

}

//Primary School Class Child of School class
class PrimarySchool extends School {

    constructor(name, numOfStudents, pickupPolicy) {

        super(name, "primary", numOfStudents);
        this._pickupPolicy = pickupPolicy;
    }

    get pickupPolicy() {
        return this._pickupPolicy;
    }
}


//Adding Value to Primary School
const lorraineHansbury = new PrimarySchool("Lorraine Hansbury", 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.')
lorraineHansbury.quickFacts()
const sub = School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);


//High School Class Child of School class
class HighSchool extends School {

    constructor(name, numOfStudents, sportsTeams) {

        super(name, "high", numOfStudents);
        this._sportsTeam = sportsTeams;
    }

    get sportsTeams() {
        return this._sportsTeam;
    }
}

//Adding Values to HighSchool Class
const alSmith = new HighSchool("Al E. Smith", 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
console.log(alSmith.sportsTeams);



