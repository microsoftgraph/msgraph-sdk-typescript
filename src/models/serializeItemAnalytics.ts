import {ItemActivityStat} from './itemActivityStat';
import {ItemAnalytics} from './itemAnalytics';
import {serializeEntity} from './serializeEntity';
import {serializeItemActivityStat} from './serializeItemActivityStat';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeItemAnalytics(writer: SerializationWriter, itemAnalytics: ItemAnalytics | undefined = {} as ItemAnalytics) : void {
        serializeEntity(writer, itemAnalytics)
        writer.writeObjectValue<ItemActivityStat>("allTime", itemAnalytics.allTime, serializeItemActivityStat);
        writer.writeCollectionOfObjectValues<ItemActivityStat>("itemActivityStats", itemAnalytics.itemActivityStats, serializeItemActivityStat);
        writer.writeObjectValue<ItemActivityStat>("lastSevenDays", itemAnalytics.lastSevenDays, serializeItemActivityStat);
}
