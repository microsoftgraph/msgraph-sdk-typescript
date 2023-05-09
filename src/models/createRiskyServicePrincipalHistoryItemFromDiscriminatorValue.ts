import {deserializeIntoRiskyServicePrincipalHistoryItem} from './deserializeIntoRiskyServicePrincipalHistoryItem';
import {RiskyServicePrincipalHistoryItem} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRiskyServicePrincipalHistoryItemFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRiskyServicePrincipalHistoryItem;
}
