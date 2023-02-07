import {GetStaffAvailabilityPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetStaffAvailabilityPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetStaffAvailabilityPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetStaffAvailabilityPostRequestBody();
}
