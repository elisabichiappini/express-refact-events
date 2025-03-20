const { error } = require('console');
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../db/events.json');

class Event {
    static lastId = 0;

    constructor(id, title, description, date, maxSeat) {
        this.id = id || Event.getNextId();
        this.title = title;
        this.description = description;
        this.date = date;
        this.maxSeat = maxSeat;
    }

    static getNextId() {
        Event.lastId = (Event.lastId || 0) + 1;
        return Event.lastId;
    }

    static getEvent() {
        return new Promise((resolve, reject) => {
            fs.readFile(filePath, (error, data) => {
                if(error) {
                    return reject(error);
                }
                const events = JSON.parse(data);
                resolve(events);
            });
        });
    }

    static saveEvent(event) {
        return new Promise((resolve, reject) => {
            Event.getEvent()
            .then((events) => {
                events.push(event);
                fs.writeFile(filePath, JSON.parse(events), (error) => {
                    if(error) {
                        return reject(error);
                    }
                    resolve();
                });
            })
            .catch((error) => reject(error));
        })
    }
}

module.exports = Event;