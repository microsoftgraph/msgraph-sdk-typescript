import {ChatRenamedEventMessageDetail} from './chatRenamedEventMessageDetail';
import {IdentitySet} from './identitySet';
import {serializeEventMessageDetail} from './serializeEventMessageDetail';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChatRenamedEventMessageDetail(writer: SerializationWriter, chatRenamedEventMessageDetail: ChatRenamedEventMessageDetail | undefined = {} as ChatRenamedEventMessageDetail) : void {
        serializeEventMessageDetail(writer, chatRenamedEventMessageDetail)
        writer.writeStringValue("chatDisplayName", chatRenamedEventMessageDetail.chatDisplayName);
        writer.writeStringValue("chatId", chatRenamedEventMessageDetail.chatId);
        writer.writeObjectValue<IdentitySet>("initiator", chatRenamedEventMessageDetail.initiator, serializeIdentitySet);
}
