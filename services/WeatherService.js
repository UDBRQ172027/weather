import { APIKEY, COUNTRYCODE, STATECODE, UNIT } from '@env'

export default class WeatherService {

    static baseURL = `https://api.openweathermap.org/data/2.5/weather`

    static async getCurrentWeather(municipality) {
        let request = new Request(`${WeatherService.baseURL}?q=${municipality},${STATECODE},${COUNTRYCODE}&units=${UNIT}&appid=${APIKEY}`)
        return fetch(request).then(
            response => {
                if(response.status == 200) {
                    return response.json()
                }
            }
        )
    }
}