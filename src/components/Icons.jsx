import clearDay from '../assets/icons/clear-day.svg'
import clearNight from '../assets/icons/clear-night.svg'
import cloudy from '../assets/icons/cloudy.svg'
import partlyCloudyNight from '../assets/icons/partly-cloudy-night.svg'
import partlyCloudyDay from '../assets/icons/partly-cloudy-day.svg'
import overcastDay from '../assets/icons/overcast-day.svg'
import overcastNight from '../assets/icons/overcast-night.svg'
import partlyCloudyNightRain from '../assets/icons/partly-cloudy-night-rain.svg'
import partlyCloudyDayRain from '../assets/icons/partly-cloudy-day-rain.svg'
import rain from '../assets/icons/rain.svg'
import smoke from '../assets/icons/smoke.svg'
import snow from '../assets/icons/snowflake.svg'
import thunderstormsDay from '../assets/icons/thunderstorms-day.svg'
import thunderstormsNight from '../assets/icons/thunderstorms-night.svg'

const Icons = (icon) => {
    switch (icon) {
        case '01d':
            icon = clearDay
            break;    
        case '01n':
            icon = clearNight
            break;
        case '02d':
            icon = partlyCloudyDay
            break;
        case '02n':
            icon = partlyCloudyNight
            break;                        
        case '03d':
            icon = cloudy
            break;
        case '03n':
            icon = cloudy
            break;  
        case '04d':
            icon = overcastDay
            break;  
        case '04n':
            icon = overcastNight
            break;    
        case '09d':
            icon = partlyCloudyDayRain
            break;   
        case '09n':
            icon = partlyCloudyNightRain
            break;      
        case '10d':
            icon = rain
                break;   
        case '10n':
            icon = rain
            break;      
        case '11d':
            icon = thunderstormsDay
            break;   
        case '11n':
            icon = thunderstormsNight
            break;      
        case '13d':
            icon=smoke
            break;   
        case '13n':
            icon=smoke
            break;        
        case '50d':
            icon=snow
            break;   
        case '50n':
            icon=snow
            break;      
        default:
            icon = overcastNight
    }
  return icon
}

export default Icons