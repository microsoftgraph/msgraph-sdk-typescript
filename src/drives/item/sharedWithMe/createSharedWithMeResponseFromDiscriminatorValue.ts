import { deserializeIntoSharedWithMeResponse } from './deserializeIntoSharedWithMeResponse';
import { type SharedWithMeResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSharedWithMeResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSharedWithMeResponse;
}
