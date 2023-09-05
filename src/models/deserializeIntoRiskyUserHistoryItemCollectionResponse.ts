import { createRiskyUserHistoryItemFromDiscriminatorValue } from './createRiskyUserHistoryItemFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { type RiskyUserHistoryItem } from './riskyUserHistoryItem';
import { type RiskyUserHistoryItemCollectionResponse } from './riskyUserHistoryItemCollectionResponse';
import { serializeRiskyUserHistoryItem } from './serializeRiskyUserHistoryItem';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoRiskyUserHistoryItemCollectionResponse(riskyUserHistoryItemCollectionResponse: RiskyUserHistoryItemCollectionResponse | undefined = {} as RiskyUserHistoryItemCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(riskyUserHistoryItemCollectionResponse),
        "value": n => { riskyUserHistoryItemCollectionResponse.value = n.getCollectionOfObjectValues<RiskyUserHistoryItem>(createRiskyUserHistoryItemFromDiscriminatorValue); },
    }
}
