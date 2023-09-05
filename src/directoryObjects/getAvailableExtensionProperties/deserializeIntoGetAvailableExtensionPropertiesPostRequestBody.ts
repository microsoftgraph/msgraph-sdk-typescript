import { type GetAvailableExtensionPropertiesPostRequestBody } from './getAvailableExtensionPropertiesPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoGetAvailableExtensionPropertiesPostRequestBody(getAvailableExtensionPropertiesPostRequestBody: GetAvailableExtensionPropertiesPostRequestBody | undefined = {} as GetAvailableExtensionPropertiesPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "isSyncedFromOnPremises": n => { getAvailableExtensionPropertiesPostRequestBody.isSyncedFromOnPremises = n.getBooleanValue(); },
    }
}
