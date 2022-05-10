import {AttendanceIntervalImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAttendanceIntervalFromDiscriminatorValue(parseNode: ParseNode | undefined) : AttendanceIntervalImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AttendanceIntervalImpl();
}
