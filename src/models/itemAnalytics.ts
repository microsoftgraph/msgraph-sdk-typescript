import { type Entity } from './entity';
import { type ItemActivityStat } from './itemActivityStat';
import { type Parsable } from '@microsoft/kiota-abstractions';

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
