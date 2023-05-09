import {serializeConversationMember} from './serializeConversationMember';
import {SkypeUserConversationMember} from './skypeUserConversationMember';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSkypeUserConversationMember(writer: SerializationWriter, skypeUserConversationMember: SkypeUserConversationMember | undefined = {} as SkypeUserConversationMember) : void {
        serializeConversationMember(writer, skypeUserConversationMember)
        writer.writeStringValue("skypeId", skypeUserConversationMember.skypeId);
}
