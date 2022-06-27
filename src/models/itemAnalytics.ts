import {Entity} from './entity';
import {ItemActivityStat} from './itemActivityStat';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ItemAnalytics extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The allTime property */
    allTime?: ItemActivityStat | undefined;
    /** The itemActivityStats property */
    itemActivityStats?: ItemActivityStat[] | undefined;
    /** The lastSevenDays property */
    lastSevenDays?: ItemActivityStat | undefined;
}
