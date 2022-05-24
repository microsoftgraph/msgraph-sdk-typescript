import {AttendanceInterval} from './attendanceInterval';
import {AttendanceRecord} from './attendanceRecord';
import {createAttendanceIntervalFromDiscriminatorValue} from './createAttendanceIntervalFromDiscriminatorValue';
import {createIdentityFromDiscriminatorValue} from './createIdentityFromDiscriminatorValue';
import {Identity} from './identity';
import {AttendanceIntervalImpl, EntityImpl, IdentityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the cloudCommunications singleton. */
export class AttendanceRecordImpl extends EntityImpl implements AttendanceRecord, Parsable {
    /** List of time periods between joining and leaving a meeting. */
    public attendanceIntervals?: AttendanceInterval[] | undefined;
    /** Email address of the user associated with this atttendance record. */
    public emailAddress?: string | undefined;
    /** Identity of the user associated with this atttendance record. */
    public identity?: Identity | undefined;
    /** Role of the attendee. Possible values are: None, Attendee, Presenter, and Organizer. */
    public role?: string | undefined;
    /** Total duration of the attendances in seconds. */
    public totalAttendanceInSeconds?: number | undefined;
    /**
     * Instantiates a new attendanceRecord and sets the default values.
     * @param attendanceRecordParameterValue 
     */
    public constructor(attendanceRecordParameterValue?: AttendanceRecord | undefined) {
        super();
        this.attendanceIntervals = attendanceRecordParameterValue?.attendanceIntervals ;
        this.emailAddress = attendanceRecordParameterValue?.emailAddress ;
        this.identity = attendanceRecordParameterValue?.identity ;
        this.role = attendanceRecordParameterValue?.role ;
        this.totalAttendanceInSeconds = attendanceRecordParameterValue?.totalAttendanceInSeconds ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.attendanceIntervals && this.attendanceIntervals.length != 0){        const attendanceIntervalsArrValue: AttendanceIntervalImpl[] = []; this.attendanceIntervals?.forEach(element => {attendanceIntervalsArrValue.push(new AttendanceIntervalImpl(element));});
        writer.writeCollectionOfObjectValues<AttendanceIntervalImpl>("attendanceIntervals", attendanceIntervalsArrValue);
        }
        if(this.emailAddress){
        writer.writeStringValue("emailAddress", this.emailAddress);
        }
        if(this.identity){
        writer.writeObjectValue<IdentityImpl>("identity", new IdentityImpl(this.identity));
        }
        if(this.role){
        writer.writeStringValue("role", this.role);
        }
        if(this.totalAttendanceInSeconds){
        writer.writeNumberValue("totalAttendanceInSeconds", this.totalAttendanceInSeconds);
        }
    };
}
