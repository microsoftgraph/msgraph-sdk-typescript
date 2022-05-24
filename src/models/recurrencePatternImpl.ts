import {DayOfWeek} from './dayOfWeek';
import {RecurrencePattern} from './recurrencePattern';
import {RecurrencePatternType} from './recurrencePatternType';
import {WeekIndex} from './weekIndex';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RecurrencePatternImpl implements AdditionalDataHolder, Parsable, RecurrencePattern {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The day of the month on which the event occurs. Required if type is absoluteMonthly or absoluteYearly. */
    public dayOfMonth?: number | undefined;
    /** A collection of the days of the week on which the event occurs. The possible values are: sunday, monday, tuesday, wednesday, thursday, friday, saturday. If type is relativeMonthly or relativeYearly, and daysOfWeek specifies more than one day, the event falls on the first day that satisfies the pattern.  Required if type is weekly, relativeMonthly, or relativeYearly. */
    public daysOfWeek?: string[] | undefined;
    /** The first day of the week. The possible values are: sunday, monday, tuesday, wednesday, thursday, friday, saturday. Default is sunday. Required if type is weekly. */
    public firstDayOfWeek?: DayOfWeek | undefined;
    /** Specifies on which instance of the allowed days specified in daysOfWeek the event occurs, counted from the first instance in the month. The possible values are: first, second, third, fourth, last. Default is first. Optional and used if type is relativeMonthly or relativeYearly. */
    public index?: WeekIndex | undefined;
    /** The number of units between occurrences, where units can be in days, weeks, months, or years, depending on the type. Required. */
    public interval?: number | undefined;
    /** The month in which the event occurs.  This is a number from 1 to 12. */
    public month?: number | undefined;
    /** The recurrence pattern type: daily, weekly, absoluteMonthly, relativeMonthly, absoluteYearly, relativeYearly. Required. For more information, see values of type property. */
    public type?: RecurrencePatternType | undefined;
    /**
     * Instantiates a new recurrencePattern and sets the default values.
     * @param recurrencePatternParameterValue 
     */
    public constructor(recurrencePatternParameterValue?: RecurrencePattern | undefined) {
        this.additionalData = recurrencePatternParameterValue?.additionalData ? recurrencePatternParameterValue?.additionalData! : {}
        this.dayOfMonth = recurrencePatternParameterValue?.dayOfMonth ;
        this.daysOfWeek = recurrencePatternParameterValue?.daysOfWeek ;
        this.firstDayOfWeek = recurrencePatternParameterValue?.firstDayOfWeek ;
        this.index = recurrencePatternParameterValue?.index ;
        this.interval = recurrencePatternParameterValue?.interval ;
        this.month = recurrencePatternParameterValue?.month ;
        this.type = recurrencePatternParameterValue?.type ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "dayOfMonth": n => { this.dayOfMonth = n.getNumberValue(); },
            "daysOfWeek": n => { this.daysOfWeek = n.getCollectionOfPrimitiveValues<string>(); },
            "firstDayOfWeek": n => { this.firstDayOfWeek = n.getEnumValue<DayOfWeek>(DayOfWeek); },
            "index": n => { this.index = n.getEnumValue<WeekIndex>(WeekIndex); },
            "interval": n => { this.interval = n.getNumberValue(); },
            "month": n => { this.month = n.getNumberValue(); },
            "type": n => { this.type = n.getEnumValue<RecurrencePatternType>(RecurrencePatternType); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.dayOfMonth){
        writer.writeNumberValue("dayOfMonth", this.dayOfMonth);
        }
        if(this.daysOfWeek){
        writer.writeCollectionOfPrimitiveValues<string>("daysOfWeek", this.daysOfWeek);
        }
        if(this.firstDayOfWeek){
        writer.writeEnumValue<DayOfWeek>("firstDayOfWeek", this.firstDayOfWeek);
        }
        if(this.index){
        writer.writeEnumValue<WeekIndex>("index", this.index);
        }
        if(this.interval){
        writer.writeNumberValue("interval", this.interval);
        }
        if(this.month){
        writer.writeNumberValue("month", this.month);
        }
        if(this.type){
        writer.writeEnumValue<RecurrencePatternType>("type", this.type);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
