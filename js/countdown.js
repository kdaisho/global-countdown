class Countdown {
  constructor({ id, offset, units }) {
    this.id = id
    this.offset = offset
    this.units = units
  }

  drawTime({ due, handleEvent = () => {} }) {
    this.handleEvent = handleEvent
    this.element = document.getElementById(this.id)
    const gmtAdjusted = `${due} ${this.offset}`
    this.intervalId = setInterval(() => this.updateTime(gmtAdjusted), 1000)
  }

  updateTime(endsAt) {
    const date = new Date()
    const endTime = this.tick(endsAt, date)
    const remaining = endTime.total
    this.element.innerHTML = this.getTimerString(endTime)
    this.handleEvent(endTime)

    if (remaining <= 1000) {
      clearInterval(this.intervalId)
    }
  }

  tick(endsAt, currentDate) {
    const total = Date.parse(endsAt) - currentDate.getTime()
    const time = {
      total,
      day: Math.floor(total / (1000 * 60 * 60 * 24)),
      hour: Math.floor((total / (1000 * 60 * 60)) % 24),
      min: Math.floor((total / 1000 / 60) % 60),
      sec: Math.floor((total / 1000) % 60),
    }

    return time
  }

  getTimerString(endObject) {
    const arrayString = []
    for (const key in endObject) {
      if (key === 'total') {
        continue
      }
      const str = `
        <span class="${this.id}-time-${key}">
          ${endObject[key]}
          <span class="${this.id}-unit-${key}">
            ${this.units[key]}
          </span>
        </span>
      `
      arrayString.push(str)
    }

    return arrayString.join('')
  }
}
