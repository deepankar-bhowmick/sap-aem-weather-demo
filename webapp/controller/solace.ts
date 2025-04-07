export module SolaceConnection {
    export type WEATHER = {
        key: string,
        latitude: string,
        longitude: string,
        temperature?: string,
        weather?: string
    }
    export const url: string = '<WSS Protocol host and port>', //Enter the wss protocol URL.
        vpn: string = '<Message VPN>', //Enter message VPN.
        userName: string = '<Client username>', //Enter client username.
        passWord: string = '<Password>', //Enter password of client username.
        hereMapAPI: string = 'maps.hereapi.com/v3/base/mc/{LOD}/{X}/{Y}/png8?style=lite.day', //maps.hereapi.com/v3/base/mc/{LOD}/{X}/{Y}/png8?style=lite.day
        hereMapAPIKey: string = '<Here Map API Key>', //here map API key
        mateoAPI: string = 'https://api.open-meteo.com/v1/forecast',
        weatherQueueName: string = '<Name of the weather queue>',
        coordinateQueueName: string = '<Name of the coordinates queue>',
        coordinateDurabeTopicName: string = '<Name of the coordinate topic>' //Enter the topic where the coordinates will be sent.
}