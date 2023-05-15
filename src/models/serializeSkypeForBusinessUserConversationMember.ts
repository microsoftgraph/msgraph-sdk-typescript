import {serializeConversationMember} from './serializeConversationMember';
import {SkypeForBusinessUserConversationMember} from './skypeForBusinessUserConversationMember';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSkypeForBusinessUserConversationMember(writer: SerializationWriter, skypeForBusinessUserConversationMember: SkypeForBusinessUserConversationMember | undefined = {} as SkypeForBusinessUserConversationMember) : void {
        serializeConversationMember(writer, skypeForBusinessUserConversationMember)
        writer.writeStringValue("tenantId", skypeForBusinessUserConversationMember.tenantId);
        writer.writeStringValue("userId", skypeForBusinessUserConversationMember.userId);
}
