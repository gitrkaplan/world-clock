/* global moment fetch */

const times = areas =>
  areas.map(({ zone }) => ({
    zone: zone.split('/')[1].replace('_', ' '),
    time: moment()
      .tz(zone)
      .format('hh:mm:ssA')
  }))

const timezones = () => {
  return fetch('/clock/times').then(res => res.json())
}
