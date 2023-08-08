import {serializeConversationMember} from './serializeConversationMember';
import type {SkypeForBusinessUserConversationMember} from './skypeForBusinessUserConversationMember';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSkypeForBusinessUserConversationMember(writer: SerializationWriter, skypeForBusinessUserConversationMember: SkypeForBusinessUserConversationMember | undefined = {} as SkypeForBusinessUserConversationMember) : void {
        serializeConversationMember(writer, skypeForBusinessUserConversationMember)
        writer.writeStringValue("tenantId", skypeForBusinessUserConversationMember.tenantId);
        writer.writeStringValue("userId", skypeForBusinessUserConversationMember.userId);
}
