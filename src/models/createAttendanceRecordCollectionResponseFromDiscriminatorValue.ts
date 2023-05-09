import {deserializeIntoAttendanceRecordCollectionResponse} from './deserializeIntoAttendanceRecordCollectionResponse';
import {AttendanceRecordCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAttendanceRecordCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAttendanceRecordCollectionResponse;
}
