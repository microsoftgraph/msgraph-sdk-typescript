import {ConversationMember} from './conversationMember';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoConversationMember(conversationMember: ConversationMember | undefined = {} as ConversationMember) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(conversationMember),
        "displayName": n => { conversationMember.displayName = n.getStringValue(); },
        "roles": n => { conversationMember.roles = n.getCollectionOfPrimitiveValues<string>(); },
        "visibleHistoryStartDateTime": n => { conversationMember.visibleHistoryStartDateTime = n.getDateValue(); },
    }
}
