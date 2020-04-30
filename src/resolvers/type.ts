import { IResolvers } from 'graphql-tools';
import { getWikipediaMobileUrl } from '../lib/util';

const type: IResolvers = {
    Season: {
        year: parent => parent.season,
        urlMobile: parent => getWikipediaMobileUrl(parent.url)

    }
};

export default type;