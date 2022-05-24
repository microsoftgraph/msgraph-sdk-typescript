import {Entity} from './entity';
import {ItemActivityStat} from './itemActivityStat';

export interface ItemAnalytics extends Entity{
    /** The allTime property */
    allTime?:ItemActivityStat | undefined;
    /** The itemActivityStats property */
    itemActivityStats?:ItemActivityStat[] | undefined;
    /** The lastSevenDays property */
    lastSevenDays?:ItemActivityStat | undefined;
}
