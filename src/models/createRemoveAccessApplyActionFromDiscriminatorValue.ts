import {RemoveAccessApplyAction} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRemoveAccessApplyActionFromDiscriminatorValue(parseNode: ParseNode | undefined) : RemoveAccessApplyAction {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RemoveAccessApplyAction();
}
