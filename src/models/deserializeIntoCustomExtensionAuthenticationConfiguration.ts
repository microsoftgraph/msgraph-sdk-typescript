import { type CustomExtensionAuthenticationConfiguration } from './customExtensionAuthenticationConfiguration';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoCustomExtensionAuthenticationConfiguration(customExtensionAuthenticationConfiguration: CustomExtensionAuthenticationConfiguration | undefined = {} as CustomExtensionAuthenticationConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { customExtensionAuthenticationConfiguration.odataType = n.getStringValue(); },
    }
}
