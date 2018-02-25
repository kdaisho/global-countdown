# JavaScript Countdown Timer
JS Countdown timer allows you to implement countdown timer that displays the same remaining time in different time zones. As this is done by only JavaScript and no server side language involved, usage is quite easy. But due to the nature of language, JS Countdown relies on client's system time to calculate remaining time and that means this doesn't function properly if client's system time was set inccorect. Having said that, if you imagine how many of devices connect to internet today have wrong time, you can tell the chances are small enough to ignore.

## Installation
You can clone countdown.min.js (or countdown.js) then reference it in html.

````html
<script src="countdown.min.js"></script>
````

## Getting Started
In order to use countdown timer, instantiate Countdown constructor with your configurations.

````html
<script src="countdown.min.js"></script>
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
These configurations are necessary to use countdown timer. Pass them to Countdown constructor when it instantiates.

| key | value |
| -------- | ----- |
| elementId | ID of html element contains countdown timer|
| deadline | End time |
| timeZone | Your region's GMT offset: https://greenwichmeantime.com/time-zone/world/ |
| dayUnit | Unit for days* |
| hourUnit | Unit for hours* |
| minUnit | Unit for minutes* |
| secUnit | Unit for seconds* |

#### *Accepts an array: [plural, singular] or a string

Set flex units that display plural and singular depending on remaining time.
````javascript
dayUnit: ['days', 'day']
````

Set fixed unit regardless of remaining time.
````javascript
dayUnit: 'D'
````
## HTML Example
````html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>JS Countdown</title>
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<link rel="stylesheet" href="styles.css">
</head>
<body>
<div>
    <div id="timer"></div>
</div>
<script src="countdown.min.js"></script>
<script>
new Countdown({
    elementId: 'timer',
    deadline: 'Tue, 1 Jan 2019 00:00:00',
    timeZone: 'GMT-05:00',
    dayUnit: ['days', 'day'], //or 'D'
    hourUnit: ['hours', 'hour'],
    minUnit: ['minutes', 'minute'],
    secUnit: ['seconds', 'second']
});
</script>
</body>
</html>
````
