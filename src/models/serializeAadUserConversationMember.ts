import {AadUserConversationMember} from './aadUserConversationMember';
import {serializeConversationMember} from './serializeConversationMember';
import {serializeUser} from './serializeUser';
import {User} from './user';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAadUserConversationMember(writer: SerializationWriter, aadUserConversationMember: AadUserConversationMember | undefined = {} as AadUserConversationMember) : void {
        serializeConversationMember(writer, aadUserConversationMember)
        writer.writeStringValue("email", aadUserConversationMember.email);
        writer.writeStringValue("tenantId", aadUserConversationMember.tenantId);
        writer.writeObjectValue<User>("user", aadUserConversationMember.user, serializeUser);
        writer.writeStringValue("userId", aadUserConversationMember.userId);
}
