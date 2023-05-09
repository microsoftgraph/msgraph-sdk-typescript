import {deserializeIntoGetStaffAvailabilityPostRequestBody} from './deserializeIntoGetStaffAvailabilityPostRequestBody';
import {GetStaffAvailabilityPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetStaffAvailabilityPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetStaffAvailabilityPostRequestBody;
}
