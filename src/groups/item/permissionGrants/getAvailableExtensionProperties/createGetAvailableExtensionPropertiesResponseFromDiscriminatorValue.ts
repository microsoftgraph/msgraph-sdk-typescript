import {GetAvailableExtensionPropertiesResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetAvailableExtensionPropertiesResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetAvailableExtensionPropertiesResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetAvailableExtensionPropertiesResponseImpl();
}
