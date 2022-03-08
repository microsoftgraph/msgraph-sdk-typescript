import {AvailableProviderTypesResponse} from './availableProviderTypesResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAvailableProviderTypesResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AvailableProviderTypesResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AvailableProviderTypesResponse();
}
