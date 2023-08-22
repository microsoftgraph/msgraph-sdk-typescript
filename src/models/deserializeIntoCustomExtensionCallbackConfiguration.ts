import type {CustomExtensionCallbackConfiguration} from './customExtensionCallbackConfiguration';
import {Duration} from '@microsoft/kiota-abstractions';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCustomExtensionCallbackConfiguration(customExtensionCallbackConfiguration: CustomExtensionCallbackConfiguration | undefined = {} as CustomExtensionCallbackConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { customExtensionCallbackConfiguration.odataType = n.getStringValue(); },
        "timeoutDuration": n => { customExtensionCallbackConfiguration.timeoutDuration = n.getDurationValue(); },
    }
}
