import {AttendanceInterval} from './attendanceInterval';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AttendanceIntervalImpl implements AdditionalDataHolder, AttendanceInterval, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Duration of the meeting interval in seconds; that is, the difference between joinDateTime and leaveDateTime. */
    public durationInSeconds?: number | undefined;
    /** The time the attendee joined in UTC. */
    public joinDateTime?: Date | undefined;
    /** The time the attendee left in UTC. */
    public leaveDateTime?: Date | undefined;
    /**
     * Instantiates a new attendanceInterval and sets the default values.
     * @param attendanceIntervalParameterValue 
     */
    public constructor(attendanceIntervalParameterValue?: AttendanceInterval | undefined) {
        this.additionalData = attendanceIntervalParameterValue?.additionalData ? attendanceIntervalParameterValue?.additionalData! : {}
        this.durationInSeconds = attendanceIntervalParameterValue?.durationInSeconds ;
        this.joinDateTime = attendanceIntervalParameterValue?.joinDateTime ;
        this.leaveDateTime = attendanceIntervalParameterValue?.leaveDateTime ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "durationInSeconds": n => { this.durationInSeconds = n.getNumberValue(); },
            "joinDateTime": n => { this.joinDateTime = n.getDateValue(); },
            "leaveDateTime": n => { this.leaveDateTime = n.getDateValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.durationInSeconds){
        writer.writeNumberValue("durationInSeconds", this.durationInSeconds);
        }
        if(this.joinDateTime){
        writer.writeDateValue("joinDateTime", this.joinDateTime);
        }
        if(this.leaveDateTime){
        writer.writeDateValue("leaveDateTime", this.leaveDateTime);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
