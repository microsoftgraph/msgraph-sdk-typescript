import { createItemActivityStatFromDiscriminatorValue } from './createItemActivityStatFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type ItemActivityStat } from './itemActivityStat';
import { type ItemActivityStatCollectionResponse } from './itemActivityStatCollectionResponse';
import { serializeItemActivityStat } from './serializeItemActivityStat';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoItemActivityStatCollectionResponse(itemActivityStatCollectionResponse: ItemActivityStatCollectionResponse | undefined = {} as ItemActivityStatCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(itemActivityStatCollectionResponse),
        "value": n => { itemActivityStatCollectionResponse.value = n.getCollectionOfObjectValues<ItemActivityStat>(createItemActivityStatFromDiscriminatorValue); },
    }
}
