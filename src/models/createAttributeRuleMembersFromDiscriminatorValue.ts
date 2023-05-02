import {deserializeIntoAttributeRuleMembers} from './deserializeIntoAttributeRuleMembers';
import {AttributeRuleMembers} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAttributeRuleMembersFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAttributeRuleMembers;
}
