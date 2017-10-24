/* global moment fetch */

const times = areas =>
  areas.map(({ zone }) => ({
    zone: zone.split('/')[1].replace('_', ' '),
    time: moment()
      .tz(zone)
      .format('hh:mm:ssA')
  }))

const render = time =>
  (($time, $value) => {
    $time.classList.add('time')
    $value.textContent = `${time.zone} ${time.time}`
    $value.classList.add('value')
    return $time.appendChild($value).parentNode
  })(document.createElement('div'), document.createElement('div'))

const timezones = () => {
  return fetch('/clock/times').then(res => res.json())
}
