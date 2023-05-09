import {deserializeIntoRiskyUserHistoryItem} from './deserializeIntoRiskyUserHistoryItem';
import {RiskyUserHistoryItem} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRiskyUserHistoryItemFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRiskyUserHistoryItem;
}
