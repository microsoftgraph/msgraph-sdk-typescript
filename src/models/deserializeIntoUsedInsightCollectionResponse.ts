import {createUsedInsightFromDiscriminatorValue} from './createUsedInsightFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeUsedInsight} from './serializeUsedInsight';
import {UsedInsight} from './usedInsight';
import {UsedInsightCollectionResponse} from './usedInsightCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUsedInsightCollectionResponse(usedInsightCollectionResponse: UsedInsightCollectionResponse | undefined = {} as UsedInsightCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(usedInsightCollectionResponse),
        "value": n => { usedInsightCollectionResponse.value = n.getCollectionOfObjectValues<UsedInsight>(createUsedInsightFromDiscriminatorValue); },
    }
}
