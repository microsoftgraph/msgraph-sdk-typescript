import {ScheduleEntityTheme} from './scheduleEntityTheme';
import {ShiftActivity} from './shiftActivity';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ShiftActivityImpl implements AdditionalDataHolder, Parsable, ShiftActivity {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Customer defined code for the shiftActivity. Required. */
    public code?: string | undefined;
    /** The name of the shiftActivity. Required. */
    public displayName?: string | undefined;
    /** The end date and time for the shiftActivity. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Required. */
    public endDateTime?: Date | undefined;
    /** Indicates whether the microsoft.graph.user should be paid for the activity during their shift. Required. */
    public isPaid?: boolean | undefined;
    /** The start date and time for the shiftActivity. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Required. */
    public startDateTime?: Date | undefined;
    /** The theme property */
    public theme?: ScheduleEntityTheme | undefined;
    /**
     * Instantiates a new shiftActivity and sets the default values.
     * @param shiftActivityParameterValue 
     */
    public constructor(shiftActivityParameterValue?: ShiftActivity | undefined) {
        this.additionalData = shiftActivityParameterValue?.additionalData ? shiftActivityParameterValue?.additionalData! : {}
        this.code = shiftActivityParameterValue?.code ;
        this.displayName = shiftActivityParameterValue?.displayName ;
        this.endDateTime = shiftActivityParameterValue?.endDateTime ;
        this.isPaid = shiftActivityParameterValue?.isPaid ;
        this.startDateTime = shiftActivityParameterValue?.startDateTime ;
        this.theme = shiftActivityParameterValue?.theme ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "code": n => { this.code = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "endDateTime": n => { this.endDateTime = n.getDateValue(); },
            "isPaid": n => { this.isPaid = n.getBooleanValue(); },
            "startDateTime": n => { this.startDateTime = n.getDateValue(); },
            "theme": n => { this.theme = n.getEnumValue<ScheduleEntityTheme>(ScheduleEntityTheme); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.code){
        writer.writeStringValue("code", this.code);
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.endDateTime){
        writer.writeDateValue("endDateTime", this.endDateTime);
        }
        if(this.isPaid){
        writer.writeBooleanValue("isPaid", this.isPaid);
        }
        if(this.startDateTime){
        writer.writeDateValue("startDateTime", this.startDateTime);
        }
        if(this.theme){
        writer.writeEnumValue<ScheduleEntityTheme>("theme", this.theme);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
