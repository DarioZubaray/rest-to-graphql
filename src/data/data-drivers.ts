import { F1 } from './data-source';
import { checkYear, checkRound } from '../lib/util';

export class DriversData extends F1 {
    constructor() {
        super();
    }

    async getDrivers(pageElements: number = -1, page: number = 1) {
        if (pageElements === -1) {
            return await this.get('drivers.json?limit=10000', {
                cacheOptions: { ttl: 60 }
            });
        }
        const offset = (page -1 ) * pageElements;
        const limit = pageElements;

        return await this.get(`drivers.json?limit=${ limit }&offset=${ offset }`, {
            cacheOptions: { ttl: 60 }
        });
    }

    async getDriversByYear(year: string) {
        year = checkYear(year);

        return await this.get(`${year}/drivers.json`, {
            cacheOptions: { ttl: 60 }
        });
    }
    
    async driversYearAndRound(year: string, round: number) {
        year = checkYear(year);
        round = checkRound(round);

        return await this.get(`${year}/${round}/drivers.json`, {
            cacheOptions: { ttl: 60 }
        });
    }

    async getDriver(id: string) {

        return await this.get(`drivers/${id}.json`, {
            cacheOptions: { ttl: 60 }
        });
    }
}