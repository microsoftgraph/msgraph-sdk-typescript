import { createUsedInsightFromDiscriminatorValue } from './createUsedInsightFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeUsedInsight } from './serializeUsedInsight';
import { type UsedInsight } from './usedInsight';
import { type UsedInsightCollectionResponse } from './usedInsightCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoUsedInsightCollectionResponse(usedInsightCollectionResponse: UsedInsightCollectionResponse | undefined = {} as UsedInsightCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(usedInsightCollectionResponse),
        "value": n => { usedInsightCollectionResponse.value = n.getCollectionOfObjectValues<UsedInsight>(createUsedInsightFromDiscriminatorValue); },
    }
}
