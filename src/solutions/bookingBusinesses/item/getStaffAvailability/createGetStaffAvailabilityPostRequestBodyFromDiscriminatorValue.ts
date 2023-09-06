import { deserializeIntoGetStaffAvailabilityPostRequestBody } from './deserializeIntoGetStaffAvailabilityPostRequestBody';
import { type GetStaffAvailabilityPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createGetStaffAvailabilityPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetStaffAvailabilityPostRequestBody;
}
