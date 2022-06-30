import {AttendanceRecord} from './attendanceRecord';
import {createAttendanceRecordFromDiscriminatorValue} from './createAttendanceRecordFromDiscriminatorValue';
import {AttendanceRecordImpl, EntityImpl} from './index';
import {MeetingAttendanceReport} from './meetingAttendanceReport';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the cloudCommunications singleton. */
export class MeetingAttendanceReportImpl extends EntityImpl implements MeetingAttendanceReport {
    /** List of attendance records of an attendance report. Read-only. */
    private _attendanceRecords?: AttendanceRecord[] | undefined;
    /** UTC time when the meeting ended. Read-only. */
    private _meetingEndDateTime?: Date | undefined;
    /** UTC time when the meeting started. Read-only. */
    private _meetingStartDateTime?: Date | undefined;
    /** Total number of participants. Read-only. */
    private _totalParticipantCount?: number | undefined;
    /**
     * Gets the attendanceRecords property value. List of attendance records of an attendance report. Read-only.
     * @returns a AttendanceRecordInterface
     */
    public get attendanceRecords() {
        return this._attendanceRecords;
    };
    /**
     * Sets the attendanceRecords property value. List of attendance records of an attendance report. Read-only.
     * @param value Value to set for the attendanceRecords property.
     */
    public set attendanceRecords(value: AttendanceRecord[] | undefined) {
        if(value) {
            const attendanceRecordsArrValue: AttendanceRecordImpl[] = [];
            this.attendanceRecords?.forEach(element => {
                attendanceRecordsArrValue.push((element instanceof AttendanceRecordImpl? element:new AttendanceRecordImpl(element)));
            });
            this._attendanceRecords = attendanceRecordsArrValue;
        }
    };
    /**
     * Instantiates a new meetingAttendanceReport and sets the default values.
     * @param meetingAttendanceReportParameterValue 
     */
    public constructor(meetingAttendanceReportParameterValue?: MeetingAttendanceReport | undefined) {
        super(meetingAttendanceReportParameterValue);
        this._attendanceRecords = meetingAttendanceReportParameterValue?.attendanceRecords;
        this._meetingEndDateTime = meetingAttendanceReportParameterValue?.meetingEndDateTime;
        this._meetingStartDateTime = meetingAttendanceReportParameterValue?.meetingStartDateTime;
        this._totalParticipantCount = meetingAttendanceReportParameterValue?.totalParticipantCount;
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
     * Gets the meetingEndDateTime property value. UTC time when the meeting ended. Read-only.
     * @returns a Date
     */
    public get meetingEndDateTime() {
        return this._meetingEndDateTime;
    };
    /**
     * Sets the meetingEndDateTime property value. UTC time when the meeting ended. Read-only.
     * @param value Value to set for the meetingEndDateTime property.
     */
    public set meetingEndDateTime(value: Date | undefined) {
        if(value) {
            this._meetingEndDateTime = value;
        }
    };
    /**
     * Gets the meetingStartDateTime property value. UTC time when the meeting started. Read-only.
     * @returns a Date
     */
    public get meetingStartDateTime() {
        return this._meetingStartDateTime;
    };
    /**
     * Sets the meetingStartDateTime property value. UTC time when the meeting started. Read-only.
     * @param value Value to set for the meetingStartDateTime property.
     */
    public set meetingStartDateTime(value: Date | undefined) {
        if(value) {
            this._meetingStartDateTime = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.attendanceRecords && this.attendanceRecords.length != 0){        const attendanceRecordsArrValue: AttendanceRecordImpl[] = [];
        this.attendanceRecords?.forEach(element => {
            attendanceRecordsArrValue.push((element instanceof AttendanceRecordImpl? element:new AttendanceRecordImpl(element)));
        });
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
    /**
     * Gets the totalParticipantCount property value. Total number of participants. Read-only.
     * @returns a integer
     */
    public get totalParticipantCount() {
        return this._totalParticipantCount;
    };
    /**
     * Sets the totalParticipantCount property value. Total number of participants. Read-only.
     * @param value Value to set for the totalParticipantCount property.
     */
    public set totalParticipantCount(value: number | undefined) {
        if(value) {
            this._totalParticipantCount = value;
        }
    };
}
