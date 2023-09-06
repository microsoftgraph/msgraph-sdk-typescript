import { deserializeIntoGetAvailableExtensionPropertiesPostRequestBody } from './deserializeIntoGetAvailableExtensionPropertiesPostRequestBody';
import { type GetAvailableExtensionPropertiesPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createGetAvailableExtensionPropertiesPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetAvailableExtensionPropertiesPostRequestBody;
}
