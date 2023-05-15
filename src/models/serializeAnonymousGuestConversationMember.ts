import {AnonymousGuestConversationMember} from './anonymousGuestConversationMember';
import {serializeConversationMember} from './serializeConversationMember';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAnonymousGuestConversationMember(writer: SerializationWriter, anonymousGuestConversationMember: AnonymousGuestConversationMember | undefined = {} as AnonymousGuestConversationMember) : void {
        serializeConversationMember(writer, anonymousGuestConversationMember)
        writer.writeStringValue("anonymousGuestId", anonymousGuestConversationMember.anonymousGuestId);
}
