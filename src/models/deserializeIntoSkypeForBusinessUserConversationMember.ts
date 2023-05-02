import {deserializeIntoConversationMember} from './deserializeIntoConversationMember';
import {SkypeForBusinessUserConversationMember} from './skypeForBusinessUserConversationMember';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSkypeForBusinessUserConversationMember(skypeForBusinessUserConversationMember: SkypeForBusinessUserConversationMember | undefined = {} as SkypeForBusinessUserConversationMember) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoConversationMember(skypeForBusinessUserConversationMember),
        "tenantId": n => { skypeForBusinessUserConversationMember.tenantId = n.getStringValue(); },
        "userId": n => { skypeForBusinessUserConversationMember.userId = n.getStringValue(); },
    }
}
