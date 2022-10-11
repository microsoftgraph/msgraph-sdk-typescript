import {AttendeeAvailabilityCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAttendeeAvailabilityCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AttendeeAvailabilityCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AttendeeAvailabilityCollectionResponse();
}
