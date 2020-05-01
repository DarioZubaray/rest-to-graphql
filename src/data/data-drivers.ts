import { F1 } from './data-source';
import { checkYear, checkRound } from '../lib/util';

export class DriversData extends F1 {
    constructor() {
        super();
    }

    async getDrivers() {
        return await this.get('drivers.json?limit=10000', {
            cacheOptions: { ttl: 60 }
        });
    }

}