import {DayOfWeek} from './dayOfWeek';
import {StandardTimeZoneOffset} from './standardTimeZoneOffset';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter, TimeOnly} from '@microsoft/kiota-abstractions';

export class StandardTimeZoneOffsetImpl implements StandardTimeZoneOffset {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Represents the nth occurrence of the day of week that the transition from daylight saving time to standard time occurs. */
    public dayOccurrence?: number | undefined;
    /** Represents the day of the week when the transition from daylight saving time to standard time. */
    public dayOfWeek?: DayOfWeek | undefined;
    /** Represents the month of the year when the transition from daylight saving time to standard time occurs. */
    public month?: number | undefined;
    /** Represents the time of day when the transition from daylight saving time to standard time occurs. */
    public time?: TimeOnly | undefined;
    /** Represents how frequently in terms of years the change from daylight saving time to standard time occurs. For example, a value of 0 means every year. */
    public year?: number | undefined;
    /**
     * Instantiates a new standardTimeZoneOffset and sets the default values.
     * @param standardTimeZoneOffsetParameterValue 
     */
    public constructor(standardTimeZoneOffsetParameterValue?: StandardTimeZoneOffset | undefined) {
        this.additionalData = standardTimeZoneOffsetParameterValue?.additionalData ? standardTimeZoneOffsetParameterValue?.additionalData! : {};
        this.dayOccurrence = standardTimeZoneOffsetParameterValue?.dayOccurrence;
        this.dayOfWeek = standardTimeZoneOffsetParameterValue?.dayOfWeek;
        this.month = standardTimeZoneOffsetParameterValue?.month;
        this.time = standardTimeZoneOffsetParameterValue?.time;
        this.year = standardTimeZoneOffsetParameterValue?.year;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "dayOccurrence": n => { this.dayOccurrence = n.getNumberValue(); },
            "dayOfWeek": n => { this.dayOfWeek = n.getEnumValue<DayOfWeek>(DayOfWeek); },
            "month": n => { this.month = n.getNumberValue(); },
            "time": n => { this.time = n.getTimeOnlyValue(); },
            "year": n => { this.year = n.getNumberValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.dayOccurrence){
            writer.writeNumberValue("dayOccurrence", this.dayOccurrence);
        }
        if(this.dayOfWeek){
            writer.writeEnumValue<DayOfWeek>("dayOfWeek", this.dayOfWeek);
        }
        if(this.month){
            writer.writeNumberValue("month", this.month);
        }
        if(this.time){
            writer.writeTimeOnlyValue("time", this.time);
        }
        if(this.year){
            writer.writeNumberValue("year", this.year);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
