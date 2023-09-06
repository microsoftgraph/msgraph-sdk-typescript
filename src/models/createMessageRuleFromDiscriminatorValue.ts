import { deserializeIntoMessageRule } from './deserializeIntoMessageRule';
import { type MessageRule } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMessageRuleFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMessageRule;
}
