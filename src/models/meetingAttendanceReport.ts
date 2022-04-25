import {createAttendanceRecordFromDiscriminatorValue} from './createAttendanceRecordFromDiscriminatorValue';
import {AttendanceRecord, Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MeetingAttendanceReport extends Entity implements Parsable {
    /** List of attendance records of an attendance report. Read-only.  */
    private _attendanceRecords?: AttendanceRecord[] | undefined;
    /** UTC time when the meeting ended. Read-only.  */
    private _meetingEndDateTime?: Date | undefined;
    /** UTC time when the meeting started. Read-only.  */
    private _meetingStartDateTime?: Date | undefined;
    /** Total number of participants. Read-only.  */
    private _totalParticipantCount?: number | undefined;
    /**
     * Gets the attendanceRecords property value. List of attendance records of an attendance report. Read-only.
     * @returns a attendanceRecord
     */
    public get attendanceRecords() {
        return this._attendanceRecords;
    };
    /**
     * Sets the attendanceRecords property value. List of attendance records of an attendance report. Read-only.
     * @param value Value to set for the attendanceRecords property.
     */
    public set attendanceRecords(value: AttendanceRecord[] | undefined) {
        this._attendanceRecords = value;
    };
    /**
     * Instantiates a new meetingAttendanceReport and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "attendanceRecords": n => { this.attendanceRecords = n.getCollectionOfObjectValues<AttendanceRecord>(createAttendanceRecordFromDiscriminatorValue); },
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
        this._meetingEndDateTime = value;
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
        this._meetingStartDateTime = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<AttendanceRecord>("attendanceRecords", this.attendanceRecords);
        writer.writeDateValue("meetingEndDateTime", this.meetingEndDateTime);
        writer.writeDateValue("meetingStartDateTime", this.meetingStartDateTime);
        writer.writeNumberValue("totalParticipantCount", this.totalParticipantCount);
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
        this._totalParticipantCount = value;
    };
}
