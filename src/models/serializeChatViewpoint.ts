import {ChatViewpoint} from './chatViewpoint';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChatViewpoint(writer: SerializationWriter, chatViewpoint: ChatViewpoint | undefined = {} as ChatViewpoint) : void {
        writer.writeBooleanValue("isHidden", chatViewpoint.isHidden);
        writer.writeDateValue("lastMessageReadDateTime", chatViewpoint.lastMessageReadDateTime);
        writer.writeStringValue("@odata.type", chatViewpoint.odataType);
        writer.writeAdditionalData(chatViewpoint.additionalData);
}
