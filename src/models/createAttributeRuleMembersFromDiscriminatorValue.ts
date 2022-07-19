import {AttributeRuleMembers} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAttributeRuleMembersFromDiscriminatorValue(parseNode: ParseNode | undefined) : AttributeRuleMembers {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AttributeRuleMembers();
}
