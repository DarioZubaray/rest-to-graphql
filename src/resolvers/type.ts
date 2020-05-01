import { IResolvers } from 'graphql-tools';
import { getWikipediaMobileUrl } from '../lib/util';

const type: IResolvers = {
    Season: {
        year: parent => parent.season,
        urlMobile: parent => getWikipediaMobileUrl(parent.url)

    },
    Race: {
        name: parent => parent.raceName,
        circuit: parent => parent.Circuit,
        urlMobile: parent => getWikipediaMobileUrl(parent.url)
    },
    Circuit: {
        id: parent => parent.circuitId,
        name: parent => parent.circuitName,
        urlMobile: parent => getWikipediaMobileUrl(parent.url),
        location: parent => parent.Location
    },
    Location: {
        lng: parent => parent.long
    },
    Driver: {
        id: parent => parent.driverId,
        urlMobile: parent => getWikipediaMobileUrl(parent.url),
        name: parent => `${parent.givenName} ${parent.familyName}`,
    }
};

export default type;