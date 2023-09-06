import { deserializeIntoConversationMember } from './deserializeIntoConversationMember';
import { type MicrosoftAccountUserConversationMember } from './microsoftAccountUserConversationMember';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoMicrosoftAccountUserConversationMember(microsoftAccountUserConversationMember: MicrosoftAccountUserConversationMember | undefined = {} as MicrosoftAccountUserConversationMember) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoConversationMember(microsoftAccountUserConversationMember),
        "userId": n => { microsoftAccountUserConversationMember.userId = n.getStringValue(); },
    }
}
