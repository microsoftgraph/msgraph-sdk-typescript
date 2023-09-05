import { deserializeIntoRemoveAccessApplyAction } from './deserializeIntoRemoveAccessApplyAction';
import { type RemoveAccessApplyAction } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRemoveAccessApplyActionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRemoveAccessApplyAction;
}
