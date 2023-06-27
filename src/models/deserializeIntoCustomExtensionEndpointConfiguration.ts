import {CustomExtensionEndpointConfiguration} from './customExtensionEndpointConfiguration';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCustomExtensionEndpointConfiguration(customExtensionEndpointConfiguration: CustomExtensionEndpointConfiguration | undefined = {} as CustomExtensionEndpointConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { customExtensionEndpointConfiguration.odataType = n.getStringValue(); },
    }
}
