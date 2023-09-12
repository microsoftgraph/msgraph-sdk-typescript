import { deserializeIntoAvailableProviderTypesResponse } from './deserializeIntoAvailableProviderTypesResponse';
import { type AvailableProviderTypesResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAvailableProviderTypesResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAvailableProviderTypesResponse;
}
