import {GetStaffAvailabilityResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetStaffAvailabilityResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetStaffAvailabilityResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetStaffAvailabilityResponse();
}
