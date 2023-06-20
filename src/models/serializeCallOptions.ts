import {CallOptions} from './callOptions';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCallOptions(callOptions: CallOptions | undefined = {} as CallOptions, writer: SerializationWriter) : void {
        writer.writeBooleanValue("hideBotAfterEscalation", callOptions.hideBotAfterEscalation);
        writer.writeBooleanValue("isContentSharingNotificationEnabled", callOptions.isContentSharingNotificationEnabled);
        writer.writeStringValue("@odata.type", callOptions.odataType);
        writer.writeAdditionalData(callOptions.additionalData);
}
