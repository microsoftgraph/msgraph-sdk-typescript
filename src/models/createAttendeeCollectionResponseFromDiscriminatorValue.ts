import {AttendeeCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAttendeeCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AttendeeCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AttendeeCollectionResponse();
}
