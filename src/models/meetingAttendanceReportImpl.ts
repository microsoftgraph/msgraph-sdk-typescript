import {AttendanceRecord} from './attendanceRecord';
import {createAttendanceRecordFromDiscriminatorValue} from './createAttendanceRecordFromDiscriminatorValue';
import {AttendanceRecordImpl, EntityImpl} from './index';
import {MeetingAttendanceReport} from './meetingAttendanceReport';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the cloudCommunications singleton. */
export class MeetingAttendanceReportImpl extends EntityImpl implements MeetingAttendanceReport, Parsable {
    /** List of attendance records of an attendance report. Read-only. */
    public attendanceRecords?: AttendanceRecord[] | undefined;
    /** UTC time when the meeting ended. Read-only. */
    public meetingEndDateTime?: Date | undefined;
    /** UTC time when the meeting started. Read-only. */
    public meetingStartDateTime?: Date | undefined;
    /** Total number of participants. Read-only. */
    public totalParticipantCount?: number | undefined;
    /**
     * Instantiates a new meetingAttendanceReport and sets the default values.
     * @param meetingAttendanceReportParameterValue 
     */
    public constructor(meetingAttendanceReportParameterValue?: MeetingAttendanceReport | undefined) {
        super();
        this.attendanceRecords = meetingAttendanceReportParameterValue?.attendanceRecords ;
        this.meetingEndDateTime = meetingAttendanceReportParameterValue?.meetingEndDateTime ;
        this.meetingStartDateTime = meetingAttendanceReportParameterValue?.meetingStartDateTime ;
        this.totalParticipantCount = meetingAttendanceReportParameterValue?.totalParticipantCount ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "attendanceRecords": n => { this.attendanceRecords = n.getCollectionOfObjectValues<AttendanceRecordImpl>(createAttendanceRecordFromDiscriminatorValue); },
            "meetingEndDateTime": n => { this.meetingEndDateTime = n.getDateValue(); },
            "meetingStartDateTime": n => { this.meetingStartDateTime = n.getDateValue(); },
            "totalParticipantCount": n => { this.totalParticipantCount = n.getNumberValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.attendanceRecords && this.attendanceRecords.length != 0){        const attendanceRecordsArrValue: AttendanceRecordImpl[] = []; this.attendanceRecords?.forEach(element => {attendanceRecordsArrValue.push(new AttendanceRecordImpl(element));});
        writer.writeCollectionOfObjectValues<AttendanceRecordImpl>("attendanceRecords", attendanceRecordsArrValue);
        }
        if(this.meetingEndDateTime){
        writer.writeDateValue("meetingEndDateTime", this.meetingEndDateTime);
        }
        if(this.meetingStartDateTime){
        writer.writeDateValue("meetingStartDateTime", this.meetingStartDateTime);
        }
        if(this.totalParticipantCount){
        writer.writeNumberValue("totalParticipantCount", this.totalParticipantCount);
        }
    };
}
