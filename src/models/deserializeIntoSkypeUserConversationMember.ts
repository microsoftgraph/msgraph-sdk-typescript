import {deserializeIntoConversationMember} from './deserializeIntoConversationMember';
import {SkypeUserConversationMember} from './skypeUserConversationMember';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSkypeUserConversationMember(skypeUserConversationMember: SkypeUserConversationMember | undefined = {} as SkypeUserConversationMember) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoConversationMember(skypeUserConversationMember),
        "skypeId": n => { skypeUserConversationMember.skypeId = n.getStringValue(); },
    }
}
