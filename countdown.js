'use strict';

//Constructor
function Countdown(config) {
	this.element = document.getElementById(config.elementId);
	this.offset = config.timeZone;
	this.deadline = config.deadline + ' ' + this.offset;

	this.time = {
		total: undefined,
		seconds: undefined,
		minutes: undefined,
		hours: undefined
	};

	this.unit = {
		dayUnit: config.units[0],
		hourUnit: config.units[1],
		minUnit: config.units[2],
		secUnit: config.units[3]
	};

	this.display = [
		config.hide[0],
		config.hide[1],
		config.hide[2],
		config.hide[3]
	];

	this.drawTime(this.element, this.deadline);
}

Countdown.prototype.updateTime = function(endtime) {
	this.time.total = Date.parse(endtime) - (new Date()).getTime();
	this.time.seconds = Math.floor((this.time.total / 1000) % 60);
	this.time.minutes = Math.floor((this.time.total / 1000 / 60) % 60);
	this.time.hours = Math.floor((this.time.total / (1000 * 60 * 60)) % 24);
	this.time.days = Math.floor(this.time.total / (1000 * 60 * 60 * 24));

	if (this.display[0]) {
		this.time.hours = Math.floor((this.time.total / (1000 * 60 * 60)));
	}
	if (this.display[1]) {
		this.time.minutes = Math.floor((this.time.total / 1000 / 60));
	}
	if (this.display[2]) {
		this.time.seconds = Math.floor((this.time.total / 1000) % 60);
	}
	if (this.display[0] && this.display[1] && this.display[2]) {
		this.time.seconds = Math.floor((this.time.total / 1000));
	}

	return {
		t: this.time.total,
		s: this.time.seconds,
		m: this.time.minutes,
		h: this.time.hours,
		d: this.time.days
	};
};

Countdown.prototype.drawTime = function(element, endtime) {
	var count,
		remain,
		end,
		days,
		hours,
		minutes,
		seconds,
		endArray = [],
		elementArray = [];

	var self = this;

	setTime();
	count = setInterval(setTime, 1000);

	function setTime() {
		end = self.updateTime(endtime);
		endArray = [end.d, end.h, end.m, end.s];
		remain = end.t;

		//Prepend zero when remaining time gets lower than 10
		for (var i = 0; i < endArray.length; i++) {
			endArray[i] = endArray[i] < 10 ? '0' + endArray[i] : endArray[i];
		}

		elementArray = [
			'<span class="days">' + endArray[0] + '<span class="days-unit">' + self.unit.dayUnit + '</span></span>',
			'<span class="hours">' + endArray[1] + '<span class="hours-unit">' + self.unit.hourUnit + '</span></span>',
			'<span class="minutes">' + endArray[2] + '<span class="minutes-unit">' + self.unit.minUnit + '</span></span>',
			'<span class="seconds">' + endArray[3] + '<span class="seconds-unit">' + self.unit.secUnit + '</span></span>'
		];

		for (var i = 0, html = ''; i < self.display.length; i++) {
			if (!self.display[i]) {
				html += elementArray[i];
			}
		}
		element.innerHTML = html;

		if (remain <= 1000) {
			console.log('timer ends');
			clearInterval(count);
		}
	}
};