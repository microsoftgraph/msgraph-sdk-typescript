import { deserializeIntoAttributeRuleMembers } from './deserializeIntoAttributeRuleMembers';
import { type AttributeRuleMembers } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAttributeRuleMembersFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAttributeRuleMembers;
}
