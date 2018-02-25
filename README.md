# JavaScript Countdown Timer
JS Countdown timer allows you to implement countdown timer in your websites without using any server side languages. This set of functions relies on client's system time to caluclate remaining time therefore if clent's system time was set incorrect, countdown timer doesn't calculate remaining time correctly. But how many of devices connect to internet today have wrong time? Numbers are small enough to ignore.

## Installation
You can clone countdown.js (or countdown.min.js) then reference it in html.

````html
<script src="countdown.js"></script>
````

## Getting Started
In order to use countdown timer, instantiate Countdown constructor with your configurations, after referencing script tag.

````html
<script src="countdown.js"></script>
<script>
new Countdown({
	elementId: 'timer',
	deadline: 'Tue, 1 Jan 2019 00:00:00',
	timeZone: 'GMT-05:00',
	dayUnit: ['days', 'day'],
	hourUnit: ['hours', 'hour'],
	minUnit: ['minutes', 'minute'],
	secUnit: ['seconds', 'second']
});
</script>
````

## Configurations
These configurations are necessary to use countdown timer, pass them to Countdown constructor when it instantiates.
elementId: 'timer',
	deadline: 'Tue, 1 Jan 2019 00:00:00',
	timeZone: 'GMT-05:00',
	dayUnit: ['days', 'day'],
	hourUnit: ['hours', 'hour'],
	minUnit: ['minutes', 'minute'],
	secUnit: ['seconds', 'second']
| property | value |
| -------- | ----- |
| elementId | ID of html element that contains countdown timer|
| deadline | End time (e.g. 'Tue, 1 Jan 2019 00:00:00') |
| timeZone | Your regions' GMT offset (e.g. 'GMT-05:00') |
| dayUnit | Unit for days |
| hourUnit | Unit for hours |
| minUnit | Unit for minutes |
| secUnit | Unit for seconds |
