import type {CustomExtensionClientConfiguration} from './customExtensionClientConfiguration';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCustomExtensionClientConfiguration(customExtensionClientConfiguration: CustomExtensionClientConfiguration | undefined = {} as CustomExtensionClientConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { customExtensionClientConfiguration.odataType = n.getStringValue(); },
        "timeoutInMilliseconds": n => { customExtensionClientConfiguration.timeoutInMilliseconds = n.getNumberValue(); },
    }
}
