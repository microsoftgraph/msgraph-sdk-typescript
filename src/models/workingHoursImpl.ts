import {createTimeZoneBaseFromDiscriminatorValue} from './createTimeZoneBaseFromDiscriminatorValue';
import {TimeZoneBaseImpl} from './index';
import {TimeZoneBase} from './timeZoneBase';
import {WorkingHours} from './workingHours';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter, TimeOnly} from '@microsoft/kiota-abstractions';

export class WorkingHoursImpl implements AdditionalDataHolder, Parsable, WorkingHours {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The days of the week on which the user works. */
    public daysOfWeek?: string[] | undefined;
    /** The time of the day that the user stops working. */
    public endTime?: TimeOnly | undefined;
    /** The time of the day that the user starts working. */
    public startTime?: TimeOnly | undefined;
    /** The time zone to which the working hours apply. */
    public timeZone?: TimeZoneBase | undefined;
    /**
     * Instantiates a new workingHours and sets the default values.
     * @param workingHoursParameterValue 
     */
    public constructor(workingHoursParameterValue?: WorkingHours | undefined) {
        this.additionalData = workingHoursParameterValue?.additionalData ? workingHoursParameterValue?.additionalData! : {}
        this.daysOfWeek = workingHoursParameterValue?.daysOfWeek ;
        this.endTime = workingHoursParameterValue?.endTime ;
        this.startTime = workingHoursParameterValue?.startTime ;
        this.timeZone = workingHoursParameterValue?.timeZone ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "daysOfWeek": n => { this.daysOfWeek = n.getCollectionOfPrimitiveValues<string>(); },
            "endTime": n => { this.endTime = n.getTimeOnlyValue(); },
            "startTime": n => { this.startTime = n.getTimeOnlyValue(); },
            "timeZone": n => { this.timeZone = n.getObjectValue<TimeZoneBaseImpl>(createTimeZoneBaseFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.daysOfWeek){
        writer.writeCollectionOfPrimitiveValues<string>("daysOfWeek", this.daysOfWeek);
        }
        if(this.endTime){
        writer.writeTimeOnlyValue("endTime", this.endTime);
        }
        if(this.startTime){
        writer.writeTimeOnlyValue("startTime", this.startTime);
        }
        if(this.timeZone){
        writer.writeObjectValue<TimeZoneBaseImpl>("timeZone", new TimeZoneBaseImpl(this.timeZone));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
