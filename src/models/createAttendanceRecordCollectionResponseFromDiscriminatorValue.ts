import {AttendanceRecordCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAttendanceRecordCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AttendanceRecordCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AttendanceRecordCollectionResponseImpl();
}
