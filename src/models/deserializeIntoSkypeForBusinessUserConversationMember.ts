import { deserializeIntoConversationMember } from './deserializeIntoConversationMember';
import { type SkypeForBusinessUserConversationMember } from './skypeForBusinessUserConversationMember';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSkypeForBusinessUserConversationMember(skypeForBusinessUserConversationMember: SkypeForBusinessUserConversationMember | undefined = {} as SkypeForBusinessUserConversationMember) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoConversationMember(skypeForBusinessUserConversationMember),
        "tenantId": n => { skypeForBusinessUserConversationMember.tenantId = n.getStringValue(); },
        "userId": n => { skypeForBusinessUserConversationMember.userId = n.getStringValue(); },
    }
}
