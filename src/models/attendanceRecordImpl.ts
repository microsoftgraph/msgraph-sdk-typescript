import {AttendanceInterval} from './attendanceInterval';
import {AttendanceRecord} from './attendanceRecord';
import {createAttendanceIntervalFromDiscriminatorValue} from './createAttendanceIntervalFromDiscriminatorValue';
import {createIdentityFromDiscriminatorValue} from './createIdentityFromDiscriminatorValue';
import {Identity} from './identity';
import {AttendanceIntervalImpl, EntityImpl, IdentityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the cloudCommunications singleton. */
export class AttendanceRecordImpl extends EntityImpl implements AttendanceRecord {
    /** List of time periods between joining and leaving a meeting. */
    private _attendanceIntervals?: AttendanceInterval[] | undefined;
    /** Email address of the user associated with this atttendance record. */
    private _emailAddress?: string | undefined;
    /** Identity of the user associated with this atttendance record. */
    private _identity?: Identity | undefined;
    /** Role of the attendee. Possible values are: None, Attendee, Presenter, and Organizer. */
    private _role?: string | undefined;
    /** Total duration of the attendances in seconds. */
    private _totalAttendanceInSeconds?: number | undefined;
    /**
     * Gets the attendanceIntervals property value. List of time periods between joining and leaving a meeting.
     * @returns a AttendanceIntervalInterface
     */
    public get attendanceIntervals() {
        return this._attendanceIntervals;
    };
    /**
     * Sets the attendanceIntervals property value. List of time periods between joining and leaving a meeting.
     * @param value Value to set for the attendanceIntervals property.
     */
    public set attendanceIntervals(value: AttendanceInterval[] | undefined) {
        if(value) {
            const attendanceIntervalsArrValue: AttendanceIntervalImpl[] = [];
            this.attendanceIntervals?.forEach(element => {
                attendanceIntervalsArrValue.push((element instanceof AttendanceIntervalImpl? element as AttendanceIntervalImpl:new AttendanceIntervalImpl(element)));
            });
            this._attendanceIntervals = attendanceIntervalsArrValue;
        }
    };
    /**
     * Instantiates a new attendanceRecord and sets the default values.
     * @param attendanceRecordParameterValue 
     */
    public constructor(attendanceRecordParameterValue?: AttendanceRecord | undefined) {
        super(attendanceRecordParameterValue);
        this._attendanceIntervals = attendanceRecordParameterValue?.attendanceIntervals;
        this._emailAddress = attendanceRecordParameterValue?.emailAddress;
        this._identity = attendanceRecordParameterValue?.identity;
        this._role = attendanceRecordParameterValue?.role;
        this._totalAttendanceInSeconds = attendanceRecordParameterValue?.totalAttendanceInSeconds;
    };
    /**
     * Gets the emailAddress property value. Email address of the user associated with this atttendance record.
     * @returns a string
     */
    public get emailAddress() {
        return this._emailAddress;
    };
    /**
     * Sets the emailAddress property value. Email address of the user associated with this atttendance record.
     * @param value Value to set for the emailAddress property.
     */
    public set emailAddress(value: string | undefined) {
        if(value) {
            this._emailAddress = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "attendanceIntervals": n => { this.attendanceIntervals = n.getCollectionOfObjectValues<AttendanceIntervalImpl>(createAttendanceIntervalFromDiscriminatorValue); },
            "emailAddress": n => { this.emailAddress = n.getStringValue(); },
            "identity": n => { this.identity = n.getObjectValue<IdentityImpl>(createIdentityFromDiscriminatorValue); },
            "role": n => { this.role = n.getStringValue(); },
            "totalAttendanceInSeconds": n => { this.totalAttendanceInSeconds = n.getNumberValue(); },
        };
    };
    /**
     * Gets the identity property value. Identity of the user associated with this atttendance record.
     * @returns a IdentityInterface
     */
    public get identity() {
        return this._identity;
    };
    /**
     * Sets the identity property value. Identity of the user associated with this atttendance record.
     * @param value Value to set for the identity property.
     */
    public set identity(value: Identity | undefined) {
        if(value) {
            this._identity = value instanceof IdentityImpl? value as IdentityImpl: new IdentityImpl(value);
        }
    };
    /**
     * Gets the role property value. Role of the attendee. Possible values are: None, Attendee, Presenter, and Organizer.
     * @returns a string
     */
    public get role() {
        return this._role;
    };
    /**
     * Sets the role property value. Role of the attendee. Possible values are: None, Attendee, Presenter, and Organizer.
     * @param value Value to set for the role property.
     */
    public set role(value: string | undefined) {
        if(value) {
            this._role = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.attendanceIntervals && this.attendanceIntervals.length != 0){        const attendanceIntervalsArrValue: AttendanceIntervalImpl[] = [];
        this.attendanceIntervals?.forEach(element => {
            attendanceIntervalsArrValue.push((element instanceof AttendanceIntervalImpl? element as AttendanceIntervalImpl:new AttendanceIntervalImpl(element)));
        });
            writer.writeCollectionOfObjectValues<AttendanceIntervalImpl>("attendanceIntervals", attendanceIntervalsArrValue);
        }
        if(this.emailAddress){
            writer.writeStringValue("emailAddress", this.emailAddress);
        }
        if(this.identity){
            writer.writeObjectValue<IdentityImpl>("identity", (this.identity instanceof IdentityImpl? this.identity as IdentityImpl: new IdentityImpl(this.identity)));
        }
        if(this.role){
            writer.writeStringValue("role", this.role);
        }
        if(this.totalAttendanceInSeconds){
            writer.writeNumberValue("totalAttendanceInSeconds", this.totalAttendanceInSeconds);
        }
    };
    /**
     * Gets the totalAttendanceInSeconds property value. Total duration of the attendances in seconds.
     * @returns a integer
     */
    public get totalAttendanceInSeconds() {
        return this._totalAttendanceInSeconds;
    };
    /**
     * Sets the totalAttendanceInSeconds property value. Total duration of the attendances in seconds.
     * @param value Value to set for the totalAttendanceInSeconds property.
     */
    public set totalAttendanceInSeconds(value: number | undefined) {
        if(value) {
            this._totalAttendanceInSeconds = value;
        }
    };
}
