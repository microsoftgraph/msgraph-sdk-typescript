import { type CustomExtensionAuthenticationConfiguration } from './customExtensionAuthenticationConfiguration';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeCustomExtensionAuthenticationConfiguration(writer: SerializationWriter, customExtensionAuthenticationConfiguration: CustomExtensionAuthenticationConfiguration | undefined = {} as CustomExtensionAuthenticationConfiguration) : void {
        writer.writeStringValue("@odata.type", customExtensionAuthenticationConfiguration.odataType);
        writer.writeAdditionalData(customExtensionAuthenticationConfiguration.additionalData);
}
