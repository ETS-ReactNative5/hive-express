const Event = require("./../database/models/event_model");
const User = require("./../database/models/user_model");
const axios = require("axios");

/*
  // GET to "/"
  // Show all events
*/
async function index(req, res) {
  //Create a list of events sorted by their creation date
  let events = await Event.find().sort({ created_at: "desc" });

  res.render("events/index", { events });
}

/*
  // POST to "/create"
  // Create an event
*/
async function create(req, res) {
  let {
    link,
    name,
    group,
    local_date,
    local_time,
    how_to_find_us,
    attendance_count,
    guest_limit,
    rsvp_limit
  } = req.body;

  let event = await Event.create({
    link,
    name,
    group,
    local_date,
    local_time,
    how_to_find_us,
    attendance_count,
    guest_limit,
    rsvp_limit
  }).catch(err => res.status(500).send(err));

  res.redirect("/events");
}

/*
  // GET to "/:id"
  // Show one event
*/
async function show(req, res) {
  let meetup = await Event.findById(req.params.id).catch(err =>
    res.status(404).send(err)
  );
  res.render("events/show", { meetup });
}

async function showMeetup(req, res) {
  let { group, id } = req.params;
  let accessToken = req.cookies.tokens.access_token;

  let meetup = await axios
    .get(`https://api.meetup.com/${group}/events/${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    .then(resp => resp.data)
    .catch(err => console.error(err));

  res.render("events/show", { meetup });
}

async function newSuggestion(req, res) {
  //Render the suggestion form with the event info from request params

  console.log(req.query.group);
  let accessToken = req.cookies.tokens.access_token;
  let group = req.query.group;
  let id = req.params.id;
  console.log(group);

  let meetup = await axios
    .get(`https://api.meetup.com/${group}/events/${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    .then(resp => resp.data)

    .catch(err => console.error(err));

  res.render("events/suggest", { meetup });
}

async function suggestions(req, res) {
  // Find suggested events
  let events = await Event.find({
    ca_recommended: false,
    "suggested.is_suggested": true
  });

  // Pass the suggested events to the view
  res.render("events/suggestions", { events });
}

// PUT to "/events/recommend/:id"
function recommend(req, res) {
  res.send(req.body);
}

// DELETE to "/events/:id"
async function destroy(req, res) {
  await Event.findByIdAndRemove(req.params.id);
  res.redirect("/events");
}

module.exports = {
  index,
  create,
  show,
  showMeetup,
  newSuggestion,
  suggestions,
  recommend,
  destroy
};
