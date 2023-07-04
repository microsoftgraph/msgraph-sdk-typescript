import {Entity} from './entity';
import {ItemActivityStat} from './itemActivityStat';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ItemAnalytics extends Entity, Parsable {
    /**
     * The allTime property
     */
    allTime?: ItemActivityStat | undefined;
    /**
     * The itemActivityStats property
     */
    itemActivityStats?: ItemActivityStat[] | undefined;
    /**
     * The lastSevenDays property
     */
    lastSevenDays?: ItemActivityStat | undefined;
}
