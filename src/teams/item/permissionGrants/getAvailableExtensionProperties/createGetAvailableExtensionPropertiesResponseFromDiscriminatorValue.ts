import {deserializeIntoGetAvailableExtensionPropertiesResponse} from './deserializeIntoGetAvailableExtensionPropertiesResponse';
import {GetAvailableExtensionPropertiesResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetAvailableExtensionPropertiesResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetAvailableExtensionPropertiesResponse;
}
