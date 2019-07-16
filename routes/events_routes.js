const express = require("express");
const router = express.Router();
const eventsController = require("./../controllers/events_controller");

// GET to "/events"
// Show All Events
router.get("/", eventsController.index);

// POST to "/events"
// Create an Event
router.post("/", eventsController.create);

// GET to "/events/suggest/:id"
// Compose a message to send with the event for suggestion to admin.
router.get("/suggest/:id", eventsController.newSuggestion);

// **TODO** POST to "/events/suggest/:id"
//          Save the suggestion/event to database

// **TODO** DELETE to "/events/suggest/:id"
//          Remove event from database

// GET to "/events/suggestions"
// Display events that have been suggested for admin's approval.
// **TODO** RESTRICTED TO: ADMIN ONLY
router.get("/suggestions", eventsController.suggestions);

// GET to "/events/:id"
// Show One Event
router.get("/:id", eventsController.show);

// PUT to "/events/recommend/:id"
// Update a suggested event to be recommended
router.put("/recommend/:id", eventsController.recommend);

// GET to "/events/:group/:id"
// Show One Meetup (that isn't saved yet)
router.get("/:group/:id", eventsController.showMeetup);

module.exports = router;
