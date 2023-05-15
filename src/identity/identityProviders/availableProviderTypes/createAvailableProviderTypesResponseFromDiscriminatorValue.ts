import {deserializeIntoAvailableProviderTypesResponse} from './deserializeIntoAvailableProviderTypesResponse';
import {AvailableProviderTypesResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAvailableProviderTypesResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAvailableProviderTypesResponse;
}
