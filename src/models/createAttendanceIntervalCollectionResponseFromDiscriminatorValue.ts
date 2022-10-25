import {AttendanceIntervalCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAttendanceIntervalCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AttendanceIntervalCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AttendanceIntervalCollectionResponse();
}
