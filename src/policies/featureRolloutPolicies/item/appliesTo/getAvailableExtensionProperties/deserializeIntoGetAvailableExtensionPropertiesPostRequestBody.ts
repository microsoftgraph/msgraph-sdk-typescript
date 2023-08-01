import type {GetAvailableExtensionPropertiesPostRequestBody} from './getAvailableExtensionPropertiesPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetAvailableExtensionPropertiesPostRequestBody(getAvailableExtensionPropertiesPostRequestBody: GetAvailableExtensionPropertiesPostRequestBody | undefined = {} as GetAvailableExtensionPropertiesPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "isSyncedFromOnPremises": n => { getAvailableExtensionPropertiesPostRequestBody.isSyncedFromOnPremises = n.getBooleanValue(); },
    }
}
