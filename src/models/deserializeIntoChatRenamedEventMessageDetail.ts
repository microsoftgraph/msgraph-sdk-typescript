import {ChatRenamedEventMessageDetail} from './chatRenamedEventMessageDetail';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {deserializeIntoEventMessageDetail} from './deserializeIntoEventMessageDetail';
import {IdentitySet} from './identitySet';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChatRenamedEventMessageDetail(chatRenamedEventMessageDetail: ChatRenamedEventMessageDetail | undefined = {} as ChatRenamedEventMessageDetail) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEventMessageDetail(chatRenamedEventMessageDetail),
        "chatDisplayName": n => { chatRenamedEventMessageDetail.chatDisplayName = n.getStringValue(); },
        "chatId": n => { chatRenamedEventMessageDetail.chatId = n.getStringValue(); },
        "initiator": n => { chatRenamedEventMessageDetail.initiator = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
    }
}
