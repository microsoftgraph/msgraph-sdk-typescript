import {deserializeIntoGetStaffAvailabilityResponse} from './deserializeIntoGetStaffAvailabilityResponse';
import {GetStaffAvailabilityResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetStaffAvailabilityResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetStaffAvailabilityResponse;
}
