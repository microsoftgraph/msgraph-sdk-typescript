import {AttendanceInterval} from './attendanceInterval';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAttendanceInterval(attendanceInterval: AttendanceInterval | undefined = {} as AttendanceInterval) : Record<string, (node: ParseNode) => void> {
    return {
        "durationInSeconds": n => { attendanceInterval.durationInSeconds = n.getNumberValue(); },
        "joinDateTime": n => { attendanceInterval.joinDateTime = n.getDateValue(); },
        "leaveDateTime": n => { attendanceInterval.leaveDateTime = n.getDateValue(); },
        "@odata.type": n => { attendanceInterval.odataType = n.getStringValue(); },
    }
}
