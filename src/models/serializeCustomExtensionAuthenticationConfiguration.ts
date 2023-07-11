import {CustomExtensionAuthenticationConfiguration} from './customExtensionAuthenticationConfiguration';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCustomExtensionAuthenticationConfiguration(writer: SerializationWriter, customExtensionAuthenticationConfiguration: CustomExtensionAuthenticationConfiguration | undefined = {} as CustomExtensionAuthenticationConfiguration) : void {
        writer.writeStringValue("@odata.type", customExtensionAuthenticationConfiguration.odataType);
        writer.writeAdditionalData(customExtensionAuthenticationConfiguration.additionalData);
}
