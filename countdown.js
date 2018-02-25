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
		dayUnit: config.dayUnit,
		hourUnit: config.hourUnit,
		minUnit: config.minUnit,
		secUnit: config.secUnit
	};

	this.drawTime(this.element, this.deadline, this.type);
}

Countdown.prototype.updateTime = function(endtime) {
	this.time.total = Date.parse(endtime) - (new Date()).getTime();
	this.time.seconds = Math.floor((this.time.total / 1000) % 60);
	this.time.minutes = Math.floor((this.time.total / 1000 / 60) % 60);
	this.time.hours = Math.floor((this.time.total / (1000 * 60 * 60)) % 24);
	this.time.days = Math.floor(this.time.total / (1000 * 60 * 60 * 24));

	return {
		t: this.time.total,
		s: this.time.seconds,
		m: this.time.minutes,
		h: this.time.hours,
		d: this.time.days
	};
};

Countdown.prototype.drawTime = function(element, endtime, type) {
	var count,
		end,
		remain,
		days,
		hours,
		minutes,
		seconds;

	var self = this;

	function setTime() {
		end = self.updateTime(endtime);
		remain = end.t;
		days = ('0' + end.d).slice(-2);
		hours = ('0' + end.h).slice(-2);
		minutes = ('0' + end.m).slice(-2);
		seconds = ('0' + end.s).slice(-2);

		element.innerHTML = `
			<span class="days">${days} ${self.getUnit(days, self.unit.dayUnit)}</span> 
			<span class="hours">${hours} ${self.getUnit(hours, self.unit.hourUnit)}</span> 
			<span class="minutes">${minutes} ${self.getUnit(minutes, self.unit.minUnit)}</span>
			<span class="seconds">${seconds} ${self.getUnit(seconds, self.unit.secUnit)}</span>
		`;

		if (remain <= 1000) {
			clearInterval(count);
		}
	}

	setTime();

	count = setInterval(setTime, 1000);
};	

Countdown.prototype.getUnit = function(timeLeft, unit) {
	//When singule unit is only set: 'D', return as it is
	if (unit.length <= 1) return unit;

	//If both plural and singular units are set as an array: ['days', 'day'],
	//return single unit when remaining time is less than 1
	if (unit.length >= 2 && timeLeft <= 1) {
		return unit[1]
	}
	else {
		return unit[0];
	}
};