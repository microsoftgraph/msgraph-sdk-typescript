import { type CustomExtensionEndpointConfiguration } from './customExtensionEndpointConfiguration';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeCustomExtensionEndpointConfiguration(writer: SerializationWriter, customExtensionEndpointConfiguration: CustomExtensionEndpointConfiguration | undefined = {} as CustomExtensionEndpointConfiguration) : void {
        writer.writeStringValue("@odata.type", customExtensionEndpointConfiguration.odataType);
        writer.writeAdditionalData(customExtensionEndpointConfiguration.additionalData);
}
