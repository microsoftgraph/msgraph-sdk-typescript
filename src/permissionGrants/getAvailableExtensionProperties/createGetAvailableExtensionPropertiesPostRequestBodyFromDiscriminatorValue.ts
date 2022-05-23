import {GetAvailableExtensionPropertiesPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetAvailableExtensionPropertiesPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetAvailableExtensionPropertiesPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetAvailableExtensionPropertiesPostRequestBodyImpl();
}
