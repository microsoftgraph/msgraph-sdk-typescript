import {CustomExtensionCallbackConfiguration} from './customExtensionCallbackConfiguration';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCustomExtensionCallbackConfiguration(customExtensionCallbackConfiguration: CustomExtensionCallbackConfiguration | undefined = {} as CustomExtensionCallbackConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { customExtensionCallbackConfiguration.odataType = n.getStringValue(); },
        "timeoutDuration": n => { customExtensionCallbackConfiguration.timeoutDuration = n.getDurationValue(); },
    }
}
