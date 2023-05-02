import {ConversationMember} from './conversationMember';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConversationMember(writer: SerializationWriter, conversationMember: ConversationMember | undefined = {} as ConversationMember) : void {
        serializeEntity(writer, conversationMember)
        writer.writeStringValue("displayName", conversationMember.displayName);
        writer.writeCollectionOfPrimitiveValues<string>("roles", conversationMember.roles);
        writer.writeDateValue("visibleHistoryStartDateTime", conversationMember.visibleHistoryStartDateTime);
}
