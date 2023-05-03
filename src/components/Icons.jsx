import clearDay from '../../public/icons/clear-day.svg'
import clearNight from '../../public/icons/clear-night.svg'
import cloudy from '../../public/icons/cloudy.svg'
import partlyCloudyNight from '../../public/icons/partly-cloudy-night.svg'
import partlyCloudyDay from '../../public/icons/partly-cloudy-day.svg'
import overcastDay from '../../public/icons/overcast-day.svg'
import overcastNight from '../../public/icons/overcast-night.svg'
import partlyCloudyNightRain from '../../public/icons/partly-cloudy-night-rain.svg'
import partlyCloudyDayRain from '../../public/icons/partly-cloudy-day-rain.svg'
import rain from '../../public/icons/rain.svg'
import smoke from '../../public/icons/smoke.svg'
import snow from '../../public/icons/snowflake.svg'
import thunderstormsDay from '../../public/icons/thunderstorms-day.svg'
import thunderstormsNight from '../../public/icons/thunderstorms-night.svg'

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