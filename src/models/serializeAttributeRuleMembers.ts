import {AttributeRuleMembers} from './attributeRuleMembers';
import {serializeSubjectSet} from './serializeSubjectSet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAttributeRuleMembers(attributeRuleMembers: AttributeRuleMembers | undefined = {} as AttributeRuleMembers, writer: SerializationWriter) : void {
        serializeSubjectSet(writer, attributeRuleMembers)
        writer.writeStringValue("description", attributeRuleMembers.description);
        writer.writeStringValue("membershipRule", attributeRuleMembers.membershipRule);
}
