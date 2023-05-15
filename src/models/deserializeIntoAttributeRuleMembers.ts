import {AttributeRuleMembers} from './attributeRuleMembers';
import {deserializeIntoSubjectSet} from './deserializeIntoSubjectSet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAttributeRuleMembers(attributeRuleMembers: AttributeRuleMembers | undefined = {} as AttributeRuleMembers) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoSubjectSet(attributeRuleMembers),
        "description": n => { attributeRuleMembers.description = n.getStringValue(); },
        "membershipRule": n => { attributeRuleMembers.membershipRule = n.getStringValue(); },
    }
}
