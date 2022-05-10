import {GetAvailableExtensionPropertiesRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetAvailableExtensionPropertiesRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetAvailableExtensionPropertiesRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetAvailableExtensionPropertiesRequestBodyImpl();
}
