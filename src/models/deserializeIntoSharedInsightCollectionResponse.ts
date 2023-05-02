import {createSharedInsightFromDiscriminatorValue} from './createSharedInsightFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeSharedInsight} from './serializeSharedInsight';
import {SharedInsight} from './sharedInsight';
import {SharedInsightCollectionResponse} from './sharedInsightCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSharedInsightCollectionResponse(sharedInsightCollectionResponse: SharedInsightCollectionResponse | undefined = {} as SharedInsightCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(sharedInsightCollectionResponse),
        "value": n => { sharedInsightCollectionResponse.value = n.getCollectionOfObjectValues<SharedInsight>(createSharedInsightFromDiscriminatorValue); },
    }
}
