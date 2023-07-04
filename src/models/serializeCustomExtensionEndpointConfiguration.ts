import {CustomExtensionEndpointConfiguration} from './customExtensionEndpointConfiguration';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCustomExtensionEndpointConfiguration(writer: SerializationWriter, customExtensionEndpointConfiguration: CustomExtensionEndpointConfiguration | undefined = {} as CustomExtensionEndpointConfiguration) : void {
        writer.writeStringValue("@odata.type", customExtensionEndpointConfiguration.odataType);
        writer.writeAdditionalData(customExtensionEndpointConfiguration.additionalData);
}
