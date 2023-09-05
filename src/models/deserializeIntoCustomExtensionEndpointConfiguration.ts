import { type CustomExtensionEndpointConfiguration } from './customExtensionEndpointConfiguration';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoCustomExtensionEndpointConfiguration(customExtensionEndpointConfiguration: CustomExtensionEndpointConfiguration | undefined = {} as CustomExtensionEndpointConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { customExtensionEndpointConfiguration.odataType = n.getStringValue(); },
    }
}
