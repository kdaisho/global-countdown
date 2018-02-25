# JavaScript Countdown Timer
JS Countdown timer allows you to implement countdown timer in your websites without using any server side languages.

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

| property | value |
| -------- | ----- |