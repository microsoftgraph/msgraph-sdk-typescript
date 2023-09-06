import { deserializeIntoRiskyServicePrincipalHistoryItemCollectionResponse } from './deserializeIntoRiskyServicePrincipalHistoryItemCollectionResponse';
import { type RiskyServicePrincipalHistoryItemCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRiskyServicePrincipalHistoryItemCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRiskyServicePrincipalHistoryItemCollectionResponse;
}
