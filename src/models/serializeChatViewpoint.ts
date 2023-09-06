import { type ChatViewpoint } from './chatViewpoint';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeChatViewpoint(writer: SerializationWriter, chatViewpoint: ChatViewpoint | undefined = {} as ChatViewpoint) : void {
        writer.writeBooleanValue("isHidden", chatViewpoint.isHidden);
        writer.writeDateValue("lastMessageReadDateTime", chatViewpoint.lastMessageReadDateTime);
        writer.writeStringValue("@odata.type", chatViewpoint.odataType);
        writer.writeAdditionalData(chatViewpoint.additionalData);
}
