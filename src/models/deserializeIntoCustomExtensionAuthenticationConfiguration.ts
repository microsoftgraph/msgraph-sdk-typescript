import {CustomExtensionAuthenticationConfiguration} from './customExtensionAuthenticationConfiguration';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCustomExtensionAuthenticationConfiguration(customExtensionAuthenticationConfiguration: CustomExtensionAuthenticationConfiguration | undefined = {} as CustomExtensionAuthenticationConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { customExtensionAuthenticationConfiguration.odataType = n.getStringValue(); },
    }
}
