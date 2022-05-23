import {AvailableProviderTypesResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAvailableProviderTypesResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AvailableProviderTypesResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AvailableProviderTypesResponseImpl();
}
