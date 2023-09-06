import { deserializeIntoConversationMember } from './deserializeIntoConversationMember';
import { type SkypeUserConversationMember } from './skypeUserConversationMember';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSkypeUserConversationMember(skypeUserConversationMember: SkypeUserConversationMember | undefined = {} as SkypeUserConversationMember) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoConversationMember(skypeUserConversationMember),
        "skypeId": n => { skypeUserConversationMember.skypeId = n.getStringValue(); },
    }
}
