import { deserializeIntoMessageRuleActions } from './deserializeIntoMessageRuleActions';
import { type MessageRuleActions } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMessageRuleActionsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMessageRuleActions;
}
