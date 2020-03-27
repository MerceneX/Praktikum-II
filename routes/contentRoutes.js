const express = require("express"),
	router = express.Router({ mergeParams: true }),
	ContentGuy = require("../lib/content/ContentGuy"),
	RoadEventsOptions = require("../lib/content/road-events/RoadEventsQueryOptions");

router.get("/news", async (req, res) => {
	cGuy = ContentGuy.getInstance();
	const response = await cGuy.getNews();
	res.json(response);
});

router.get("/road-conditions", async (req, res) => {
	cGuy = ContentGuy.getInstance();
	const response = await cGuy.getRoadConditions();
	res.json(response);
});

router.get("/traffic-forecast", async (req, res) => {
	cGuy = ContentGuy.getInstance();
	const response = await cGuy.getTrafficForecast();
	res.json(response);
});

router.get("/road-events", async (req, res) => {
	cGuy = ContentGuy.getInstance();
	const options = new RoadEventsOptions(
		req.query.term,
		req.query.dStart,
		req.query.dEnd,
		req.query.sort,
		req.query.sortAscDesc,
		req.query.limit,
		req.query.skip
	);
	console.log(options);
	const response = await cGuy.getRoadEvents(options);
	res.json(response);
});

router.get("/borders", async (req, res) => {
	cGuy = ContentGuy.getInstance();
	const response = await cGuy.getBordersStatus();
	res.json(response);
});

module.exports = router;
