import {RiskyUserHistoryItemImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRiskyUserHistoryItemFromDiscriminatorValue(parseNode: ParseNode | undefined) : RiskyUserHistoryItemImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RiskyUserHistoryItemImpl();
}
