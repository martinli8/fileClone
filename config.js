/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 24,
	units: "imperial",

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
			position: "top_left"
		},
		{
			module: "calendar",
			header: "My Google Calendar",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check-o ",
						url: "https://calendar.google.com/calendar/ical/martinli841%40gmail.com/private-ff5c08165dcc5cc557bea061ebcae5fa/basic.ics"
					}
				]
			}
		},
		{
			module: "compliments",
			position: "lower_third"
		},
		{
    module: 'MMM-MyWeather',
    position: 'top_right',
    config: {
      apikey: 'f5877056d32a4922810a47e97bd23754', // private; don't share!
      lat: "35.7796", // Culemborg, NL ;)
      lon: "-78.6382" , // use the quotes!
      hourly: '1',
      fctext: '1',
      fcdaycount: "5",
      fcdaystart: "0",
      hourlyinterval: "3",
      hourlycount: "2",
      alerttime: 10000,
      alerttruncatestring: "english:",
      roundTmpDecs: 1,
      UseCardinals: 0,
      layout: "horizontal"
    }
  },
		{
	     module: 'DailyXKCD',
	 	position: 'bottom_right',
	 	config: {
	 		invertColors: true,
	 		showTitle: true,
	 		showAltText: false,
			randomComic: true
	 	}
	  }


	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
