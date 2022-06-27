import {RemoveAccessApplyActionImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRemoveAccessApplyActionFromDiscriminatorValue(parseNode: ParseNode | undefined) : RemoveAccessApplyActionImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RemoveAccessApplyActionImpl();
}
