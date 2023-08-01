import {deserializeIntoGetAvailableExtensionPropertiesPostRequestBody} from './deserializeIntoGetAvailableExtensionPropertiesPostRequestBody';
import {GetAvailableExtensionPropertiesPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetAvailableExtensionPropertiesPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetAvailableExtensionPropertiesPostRequestBody;
}
