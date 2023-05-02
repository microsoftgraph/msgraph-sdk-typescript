import {deserializeIntoConversationMember} from './deserializeIntoConversationMember';
import {MicrosoftAccountUserConversationMember} from './microsoftAccountUserConversationMember';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMicrosoftAccountUserConversationMember(microsoftAccountUserConversationMember: MicrosoftAccountUserConversationMember | undefined = {} as MicrosoftAccountUserConversationMember) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoConversationMember(microsoftAccountUserConversationMember),
        "userId": n => { microsoftAccountUserConversationMember.userId = n.getStringValue(); },
    }
}
