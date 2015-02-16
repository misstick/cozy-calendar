// Generated by CoffeeScript 1.9.0
var contacts, events, ical, index, tags;

tags = require('./tags');

events = require('./events');

contacts = require('./contacts');

index = require('./index');

ical = require('./ical');

module.exports = {
  '': {
    get: index.index
  },
  'users/current': {
    get: index.userTimezone
  },
  'tags': {
    get: tags.all,
    post: tags.create
  },
  'tagid': {
    param: tags.fetch
  },
  'tags/:tagid': {
    get: tags.read,
    put: tags.update,
    del: tags["delete"]
  },
  'events': {
    get: events.all,
    post: events.create
  },
  'eventid': {
    param: events.fetch
  },
  'events/rename-calendar': {
    post: events.bulkCalendarRename
  },
  'events/delete': {
    del: events.bulkDelete
  },
  'events/:eventid': {
    get: events.read,
    put: events.update,
    del: events["delete"]
  },
  'events/:eventid/:name.ics': {
    get: events.ical
  },
  'public/events/:eventid/:name.ics': {
    get: events.publicIcal
  },
  'public/events/:eventid': {
    get: events["public"]
  },
  'export/:calendarid.ics': {
    get: ical["export"]
  },
  'import/ical': {
    post: ical["import"]
  },
  'contacts': {
    get: contacts.list
  }
};
