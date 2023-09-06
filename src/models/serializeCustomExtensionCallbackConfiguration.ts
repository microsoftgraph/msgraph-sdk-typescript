import { type CustomExtensionCallbackConfiguration } from './customExtensionCallbackConfiguration';
import { Duration, type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeCustomExtensionCallbackConfiguration(writer: SerializationWriter, customExtensionCallbackConfiguration: CustomExtensionCallbackConfiguration | undefined = {} as CustomExtensionCallbackConfiguration) : void {
        writer.writeStringValue("@odata.type", customExtensionCallbackConfiguration.odataType);
        writer.writeDurationValue("timeoutDuration", customExtensionCallbackConfiguration.timeoutDuration);
        writer.writeAdditionalData(customExtensionCallbackConfiguration.additionalData);
}
