import { deserializeIntoRiskyServicePrincipalHistoryItem } from './deserializeIntoRiskyServicePrincipalHistoryItem';
import { type RiskyServicePrincipalHistoryItem } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRiskyServicePrincipalHistoryItemFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRiskyServicePrincipalHistoryItem;
}
