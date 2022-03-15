import {GetAvailableExtensionPropertiesRequestBody} from './getAvailableExtensionPropertiesRequestBody';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetAvailableExtensionPropertiesRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetAvailableExtensionPropertiesRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetAvailableExtensionPropertiesRequestBody();
}
