import {CustomExtensionClientConfiguration} from './customExtensionClientConfiguration';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCustomExtensionClientConfiguration(writer: SerializationWriter, customExtensionClientConfiguration: CustomExtensionClientConfiguration | undefined = {} as CustomExtensionClientConfiguration) : void {
        writer.writeStringValue("@odata.type", customExtensionClientConfiguration.odataType);
        writer.writeNumberValue("timeoutInMilliseconds", customExtensionClientConfiguration.timeoutInMilliseconds);
        writer.writeAdditionalData(customExtensionClientConfiguration.additionalData);
}
