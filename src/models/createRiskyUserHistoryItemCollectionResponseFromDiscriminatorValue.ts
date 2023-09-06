import { deserializeIntoRiskyUserHistoryItemCollectionResponse } from './deserializeIntoRiskyUserHistoryItemCollectionResponse';
import { type RiskyUserHistoryItemCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRiskyUserHistoryItemCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRiskyUserHistoryItemCollectionResponse;
}
