import {AnonymousGuestConversationMember} from './anonymousGuestConversationMember';
import {deserializeIntoConversationMember} from './deserializeIntoConversationMember';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAnonymousGuestConversationMember(anonymousGuestConversationMember: AnonymousGuestConversationMember | undefined = {} as AnonymousGuestConversationMember) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoConversationMember(anonymousGuestConversationMember),
        "anonymousGuestId": n => { anonymousGuestConversationMember.anonymousGuestId = n.getStringValue(); },
    }
}
