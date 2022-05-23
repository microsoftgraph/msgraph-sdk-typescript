import {RecurrenceRange} from './recurrenceRange';
import {RecurrenceRangeType} from './recurrenceRangeType';
import {AdditionalDataHolder, DateOnly, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RecurrenceRangeImpl implements AdditionalDataHolder, Parsable, RecurrenceRange {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The date to stop applying the recurrence pattern. Depending on the recurrence pattern of the event, the last occurrence of the meeting may not be this date. Required if type is endDate. */
    public endDate?: DateOnly | undefined;
    /** The number of times to repeat the event. Required and must be positive if type is numbered. */
    public numberOfOccurrences?: number | undefined;
    /** Time zone for the startDate and endDate properties. Optional. If not specified, the time zone of the event is used. */
    public recurrenceTimeZone?: string | undefined;
    /** The date to start applying the recurrence pattern. The first occurrence of the meeting may be this date or later, depending on the recurrence pattern of the event. Must be the same value as the start property of the recurring event. Required. */
    public startDate?: DateOnly | undefined;
    /** The recurrence range. Possible values are: endDate, noEnd, numbered. Required. */
    public type?: RecurrenceRangeType | undefined;
    /**
     * Instantiates a new recurrenceRange and sets the default values.
     * @param recurrenceRangeParameterValue 
     */
    public constructor(recurrenceRangeParameterValue?: RecurrenceRange | undefined) {
        this.additionalData = recurrenceRangeParameterValue?.additionalData ? recurrenceRangeParameterValue?.additionalData! : {}
        this.endDate = recurrenceRangeParameterValue?.endDate ;
        this.numberOfOccurrences = recurrenceRangeParameterValue?.numberOfOccurrences ;
        this.recurrenceTimeZone = recurrenceRangeParameterValue?.recurrenceTimeZone ;
        this.startDate = recurrenceRangeParameterValue?.startDate ;
        this.type = recurrenceRangeParameterValue?.type ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "endDate": n => { this.endDate = n.getDateOnlyValue(); },
            "numberOfOccurrences": n => { this.numberOfOccurrences = n.getNumberValue(); },
            "recurrenceTimeZone": n => { this.recurrenceTimeZone = n.getStringValue(); },
            "startDate": n => { this.startDate = n.getDateOnlyValue(); },
            "type": n => { this.type = n.getEnumValue<RecurrenceRangeType>(RecurrenceRangeType); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.endDate){
        writer.writeDateOnlyValue("endDate", this.endDate);
        }
        if(this.numberOfOccurrences){
        writer.writeNumberValue("numberOfOccurrences", this.numberOfOccurrences);
        }
        if(this.recurrenceTimeZone){
        writer.writeStringValue("recurrenceTimeZone", this.recurrenceTimeZone);
        }
        if(this.startDate){
        writer.writeDateOnlyValue("startDate", this.startDate);
        }
        if(this.type){
        writer.writeEnumValue<RecurrenceRangeType>("type", this.type);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
