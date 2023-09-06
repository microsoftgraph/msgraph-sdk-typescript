import { type ItemActivityStat } from './itemActivityStat';
import { type ItemAnalytics } from './itemAnalytics';
import { serializeEntity } from './serializeEntity';
import { serializeItemActivityStat } from './serializeItemActivityStat';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeItemAnalytics(writer: SerializationWriter, itemAnalytics: ItemAnalytics | undefined = {} as ItemAnalytics) : void {
        serializeEntity(writer, itemAnalytics)
        writer.writeObjectValue<ItemActivityStat>("allTime", itemAnalytics.allTime, serializeItemActivityStat);
        writer.writeCollectionOfObjectValues<ItemActivityStat>("itemActivityStats", itemAnalytics.itemActivityStats, serializeItemActivityStat);
        writer.writeObjectValue<ItemActivityStat>("lastSevenDays", itemAnalytics.lastSevenDays, serializeItemActivityStat);
}
