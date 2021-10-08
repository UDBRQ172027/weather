export default class CatalogueService {

    static getCities() {
        return [
            {
                label: 'Aguilares',
                value: 'Aguilares'
            },
            {
                label: 'Apopa',
                value: 'Apopa'
            },
            {
                label: 'Ayutuxtepeque',
                value: 'Ayutuxtepeque'
            },
            {
                label: 'Ciudad Delgado',
                value: 'Ciudad Delgado'
            },
            {
                label: 'Cuscatancingo',
                value: 'Cuscatancingo'
            },
            {
                label: 'El Paisnal',
                value: 'El Paisnal'
            },
            {
                label: 'Guazapa',
                value: 'Guazapa'
            },
            {
                label: 'Ilopango',
                value: 'Ilopango'
            },
            {
                label: 'Mejicanos',
                value: 'Mejicanos'
            },
            {
                label: 'Nejapa',
                value: 'Nejapa'
            },
            {
                label: 'Panchimalco',
                value: 'Panchimalco'
            },
            {
                label: 'Rosario de Mora',
                value: 'Rosario de Mora'
            },
            {
                label: 'San Marcos',
                value: 'San Marcos'
            },
            {
                label: 'San Martín',
                value: 'San Martín'
            },
            {
                label: 'San Salvador',
                value: 'San Salvador'
            },
            {
                label: 'Santiago Texacuangos',
                value: 'Santiago Texacuangos'
            },
            {
                label: 'Santo Tomás',
                value: 'Santo Tomás'
            },
            {
                label: 'Soyapango',
                value: 'Soyapango'
            },
            {
                label: 'Tonacatepeque',
                value: 'Tonacatepeque'
            }
        ]
    }

    static getIcon() {
        return {
            '01d': 'sunny-outline',
            '02d': 'partly-sunny-outline',
            '03d': 'cloudy-outline',
            '04d': 'cloud',
            '09d': 'rainy',
            '10d': 'rainy-outline',
            '11d': 'thunderstorm-outline',
            '13d': 'snow-outline',
            '50d': 'cloud-circle-outline',
            '01n': 'moon-outline',
            '02n': 'cloudy-night-outline',
            '03n': 'cloudy-outline',
            '04n': 'cloud',
            '09n': 'rainy',
            '10n': 'rainy-outline',
            '11n': 'thunderstorm-outline',
            '13n': 'snow-outline',
            '50n': 'cloud-circle-outline',
        }
    }
}