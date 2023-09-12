import { deserializeIntoGetAvailableExtensionPropertiesResponse } from './deserializeIntoGetAvailableExtensionPropertiesResponse';
import { type GetAvailableExtensionPropertiesResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createGetAvailableExtensionPropertiesResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetAvailableExtensionPropertiesResponse;
}
