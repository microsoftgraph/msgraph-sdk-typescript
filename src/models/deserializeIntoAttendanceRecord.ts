import { type AttendanceInterval } from './attendanceInterval';
import { type AttendanceRecord } from './attendanceRecord';
import { createAttendanceIntervalFromDiscriminatorValue } from './createAttendanceIntervalFromDiscriminatorValue';
import { createIdentityFromDiscriminatorValue } from './createIdentityFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type Identity } from './identity';
import { serializeAttendanceInterval } from './serializeAttendanceInterval';
import { serializeIdentity } from './serializeIdentity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAttendanceRecord(attendanceRecord: AttendanceRecord | undefined = {} as AttendanceRecord) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(attendanceRecord),
        "attendanceIntervals": n => { attendanceRecord.attendanceIntervals = n.getCollectionOfObjectValues<AttendanceInterval>(createAttendanceIntervalFromDiscriminatorValue); },
        "emailAddress": n => { attendanceRecord.emailAddress = n.getStringValue(); },
        "identity": n => { attendanceRecord.identity = n.getObjectValue<Identity>(createIdentityFromDiscriminatorValue); },
        "role": n => { attendanceRecord.role = n.getStringValue(); },
        "totalAttendanceInSeconds": n => { attendanceRecord.totalAttendanceInSeconds = n.getNumberValue(); },
    }
}
