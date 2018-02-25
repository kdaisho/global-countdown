# JavaScript Countdown Timer
JS Countdown timer allows you to implement countdown timer that ends at the same time regardless of time zones without using any server side language. Countdown relies on client's system time to calculate remaining time so it doesn't calculate remaining time correctly if client's system time was set inccorect. Having said that, if you imagine how many of devices connect to internet today have wrong time, you can tell the chances are small enough to ignore.

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
| elementId | ID of html element that contains countdown timer|
| deadline | End time |
| timeZone | Your region's GMT offset: https://greenwichmeantime.com/time-zone/world/ |
| *dayUnit | Unit for days |
| *hourUnit | Unit for hours |
| *minUnit | Unit for minutes |
| *secUnit | Unit for seconds |

*Accepts an array: [plural, singular] or a string: 'D'

Set flex units that display plural and singular depending on remaining time.
````javascript
dayUnit: ['days', 'day']
````

Set fixed unit regardless of remaining time.
````javascript
dayUnit: 'D'
````
## Example
````javascript
new Countdown({
	elementId: 'timer',
	deadline: 'Tue, 1 Jan 2019 00:00:00',
	timeZone: 'GMT-05:00',
	dayUnit: ['days', 'day'],
	hourUnit: ['hours', 'hour'],
	minUnit: ['minutes', 'minute'],
	secUnit: ['seconds', 'second']
});
````
