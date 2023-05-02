import {deserializeIntoRiskyServicePrincipalHistoryItemCollectionResponse} from './deserializeIntoRiskyServicePrincipalHistoryItemCollectionResponse';
import {RiskyServicePrincipalHistoryItemCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRiskyServicePrincipalHistoryItemCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRiskyServicePrincipalHistoryItemCollectionResponse;
}
