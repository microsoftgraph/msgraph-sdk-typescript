import { deserializeIntoGetStaffAvailabilityResponse } from './deserializeIntoGetStaffAvailabilityResponse';
import { type GetStaffAvailabilityResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createGetStaffAvailabilityResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetStaffAvailabilityResponse;
}
