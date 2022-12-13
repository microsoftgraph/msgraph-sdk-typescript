import {RiskyServicePrincipalHistoryItem} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRiskyServicePrincipalHistoryItemFromDiscriminatorValue(parseNode: ParseNode | undefined) : RiskyServicePrincipalHistoryItem {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RiskyServicePrincipalHistoryItem();
}
