import type {CustomExtensionCallbackConfiguration} from './customExtensionCallbackConfiguration';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';
import {Duration} from '@microsoft/kiota-abstractions';

export function serializeCustomExtensionCallbackConfiguration(writer: SerializationWriter, customExtensionCallbackConfiguration: CustomExtensionCallbackConfiguration | undefined = {} as CustomExtensionCallbackConfiguration) : void {
        writer.writeStringValue("@odata.type", customExtensionCallbackConfiguration.odataType);
        writer.writeDurationValue("timeoutDuration", customExtensionCallbackConfiguration.timeoutDuration);
        writer.writeAdditionalData(customExtensionCallbackConfiguration.additionalData);
}
