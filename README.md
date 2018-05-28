# JavaScript Countdown Timer
JavaScript Countdown timer allows you to implement a countdown widget in your website. It displays the same remaining time everywhere even in different time zones. As this is done by JavaScript only and no server side language are involved, implementation is quite easy. However due to nature of the language, JavaScript Countdown has to rely on client's system time to calculate remaining time. This means it doesn't function properly if client's system time was set incorrect. Having said that, imagine how many devices being connected to internet at all time could keep wrong hours, you'll agree the chances are small enough to be ignored. JavaScript Countdown has been used by one of the largest Canadian apparel company for about 18 months.  (as of May, 2018)

## Installation
You can clone or download the repository. Reference dist/js/countdown.js (or countdown.min.js) in your html.

````html
<script src="countdown.min.js"></script>
````

## Getting Started
In order to use countdown timer, instantiate Countdown constructor with desired configurations.

````html
<script src="countdown.min.js"></script>
<script>
new Countdown({
	elementId: 'timer',
	deadline: 'Tue, 1 Jan 2019 00:00:00',
	timeZone: 'GMT-04:00',
	units: ['d', 'h', 'm', 's'],
	hide: [false, false, false, false]
});
</script>
````

## Configurations
These configurations are necessary to be set to use countdown. Pass them as parameters to Countdown constructor when it instantiates.

| key | type | value |
| -------- | ----- | ----- |
| elementId | string | ID of html element contains countdown timer|
| deadline | string |  End time |
| timeZone: | string | Your region's GMT offset: https://greenwichmeantime.com/time-zone/world/ |
| units | array | Unit for days, hours, minutes and second (order matters)|
| hide | array | Display status for days, hours, mintes and second (order matters)|

## Output
````html
<script>
new Countdown({
	elementId: 'timer',
	deadline: 'Tue, 1 Jan 2019 00:00:00',
	timeZone: 'GMT-04:00',
	units: ['d', 'h', 'm', 's'],
	hide: [false, false, false, false]
});
</script>
````
Instantiation Countdown in your html file generates a set of html (shown below) and inserts them into the html tag which has id attribute 'timer' as defined above.

You can use built-in class names for styling.

````html
<span class="days">268<span class="days-unit">d</span></span>
<span class="hours">05<span class="hours-unit">h</span></span>
<span class="minutes">37<span class="minutes-unit">m</span></span>
<span class="seconds">43<span class="seconds-unit">s</span></span>
````

## Usage Example
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
	timeZone: 'GMT-04:00',
	units: ['d', 'h', 'm', 's'],
	hide: [true, false, false, false]
});
</script>
</body>
</html>
````
