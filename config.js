/* MagicMirror² Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 */
let config = {
	address: "0.0.0.0", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: [], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 12,
	units: "imperial",
	debug: true,
	serverOnly:  true,
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left",
			lat: 39.955589,
			lon: -86.01387,
			showSunTimes: true,
			showMoonTimes: true
		},
		{
			module: "calendar",
			header: "Upcoming Events",
			position: "top_left",
			maximumEntries: 20,
			maxTitleLength: 50,
			config: {
				calendars: [
					{	// Swadhyay
						symbol: "calendar-plus",
						url: "https://calendar.google.com/calendar/ical/131smuph7jbvgrt43hdea4bbk8%40group.calendar.google.com/private-97db5df208f8fa0bb938c0feb3dd47d7/basic.ics"
					},
					{	// Hindi Holidays
						symbol: "om",
						url: "https://calendar.google.com/calendar/ical/en.hinduism%23holiday%40group.v.calendar.google.com/public/basic.ics"
					}
				]
			}
		},
		{
			module: "compliments",
			position: "bottom_bar",
			config: {
				remoteFile: 'https://raw.githubusercontent.com/DrinkCoff/MagicMirroConfiguration/main/compliments.json'
			}
		},
		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openweathermap",
				type: "current",
				location: "Fishers",
				locationID: "4257494", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "d27c116b5ada484fc0a6ea6ec255ec09"
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openweathermap",
				type: "forecast",
				maxNumberOfDays: 10,
				location: "Fishers",
				locationID: "4257494", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "d27c116b5ada484fc0a6ea6ec255ec09"
			}
		},
		// {
			// module: "newsfeed",
			// position: "bottom_bar",
			// config: {
				// feeds: [
					// {
						// title: "New York Times",
						// url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					// }
				// ],
				// showSourceTitle: true,
				// showPublishDate: true,
				// broadcastNewsFeeds: true,
				// broadcastNewsUpdates: true
			// }
		// },
		{
		  module: "MMM-GooglePhotos",
		  position: "fullscreen_below",
		  config: {
				albums: ["Aahvaan Newborn", "Ganapati"], // Set your album name. like ["My wedding", "family share", "Travle to Paris"]
				updateInterval: 1000 * 60, // minimum 10 seconds.
				sort: "new", // "old", "random"
				uploadAlbum: null, // Only album created by `create_uploadable_album.js`.
				condition: {
					fromDate: null, // Or "2018-03", RFC ... format available
					toDate: null, // Or "2019-12-25",
					minWidth: null, // Or 400
					maxWidth: null, // Or 8000
					minHeight: null, // Or 400
					maxHeight: null, // Or 8000
					minWHRatio: null,
					maxWHRatio: null,
					// WHRatio = Width/Height ratio ( ==1 : Squared Photo,   < 1 : Portraited Photo, > 1 : Landscaped Photo)
				},
				showWidth: 1080, // These values will be used for quality of downloaded photos to show. real size to show in your MagicMirror region is recommended.
				showHeight: 1920,
				timeFormat: "YYYY/MM/DD HH:mm", // Or `relative` can be used.
		  }
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
