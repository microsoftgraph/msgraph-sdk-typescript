import {serializeConversationMember} from './serializeConversationMember';
import type {SkypeUserConversationMember} from './skypeUserConversationMember';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSkypeUserConversationMember(writer: SerializationWriter, skypeUserConversationMember: SkypeUserConversationMember | undefined = {} as SkypeUserConversationMember) : void {
        serializeConversationMember(writer, skypeUserConversationMember)
        writer.writeStringValue("skypeId", skypeUserConversationMember.skypeId);
}
