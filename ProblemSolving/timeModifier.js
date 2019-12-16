function timeConversion (s) {
    let modifier = s.substr(8);
    let pmTime, amTime = '';
    if (modifier === 'PM') {

      [pmTime] = s.split('PM')
    } else {
     [amTime] = s.split('AM');
    }
    const time = pmTime || amTime ;    
    let [hours, minutes, seconds] = time.split(':');

    if (hours === '12') {
      hours = '00';
    }
  
    if (modifier === 'PM') {
      hours = parseInt(hours, 10) + 12;
    }
  
    return `${hours}:${minutes}:${seconds}`;
}
let result = timeConversion('07:05:45AM')

console.log('result', result);
