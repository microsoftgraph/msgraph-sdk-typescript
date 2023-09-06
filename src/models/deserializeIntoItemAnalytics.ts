import { createItemActivityStatFromDiscriminatorValue } from './createItemActivityStatFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type ItemActivityStat } from './itemActivityStat';
import { type ItemAnalytics } from './itemAnalytics';
import { serializeItemActivityStat } from './serializeItemActivityStat';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoItemAnalytics(itemAnalytics: ItemAnalytics | undefined = {} as ItemAnalytics) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(itemAnalytics),
        "allTime": n => { itemAnalytics.allTime = n.getObjectValue<ItemActivityStat>(createItemActivityStatFromDiscriminatorValue); },
        "itemActivityStats": n => { itemAnalytics.itemActivityStats = n.getCollectionOfObjectValues<ItemActivityStat>(createItemActivityStatFromDiscriminatorValue); },
        "lastSevenDays": n => { itemAnalytics.lastSevenDays = n.getObjectValue<ItemActivityStat>(createItemActivityStatFromDiscriminatorValue); },
    }
}
