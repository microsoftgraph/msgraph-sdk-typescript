import type {ChatRenamedEventMessageDetail} from './chatRenamedEventMessageDetail';
import type {IdentitySet} from './identitySet';
import {serializeEventMessageDetail} from './serializeEventMessageDetail';
import {serializeIdentitySet} from './serializeIdentitySet';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChatRenamedEventMessageDetail(writer: SerializationWriter, chatRenamedEventMessageDetail: ChatRenamedEventMessageDetail | undefined = {} as ChatRenamedEventMessageDetail) : void {
        serializeEventMessageDetail(writer, chatRenamedEventMessageDetail)
        writer.writeStringValue("chatDisplayName", chatRenamedEventMessageDetail.chatDisplayName);
        writer.writeStringValue("chatId", chatRenamedEventMessageDetail.chatId);
        writer.writeObjectValue<IdentitySet>("initiator", chatRenamedEventMessageDetail.initiator, serializeIdentitySet);
}
