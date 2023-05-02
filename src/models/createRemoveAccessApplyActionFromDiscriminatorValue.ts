import {deserializeIntoRemoveAccessApplyAction} from './deserializeIntoRemoveAccessApplyAction';
import {RemoveAccessApplyAction} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRemoveAccessApplyActionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRemoveAccessApplyAction;
}
