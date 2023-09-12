import { type CallOptions } from './callOptions';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeCallOptions(writer: SerializationWriter, callOptions: CallOptions | undefined = {} as CallOptions) : void {
        writer.writeBooleanValue("hideBotAfterEscalation", callOptions.hideBotAfterEscalation);
        writer.writeBooleanValue("isContentSharingNotificationEnabled", callOptions.isContentSharingNotificationEnabled);
        writer.writeStringValue("@odata.type", callOptions.odataType);
        writer.writeAdditionalData(callOptions.additionalData);
}
