import { deserializeIntoMicrosoftAccountUserConversationMember } from './deserializeIntoMicrosoftAccountUserConversationMember';
import { type MicrosoftAccountUserConversationMember } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMicrosoftAccountUserConversationMemberFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMicrosoftAccountUserConversationMember;
}
