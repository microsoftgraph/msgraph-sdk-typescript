import {createDateTimeTimeZoneFromDiscriminatorValue} from './createDateTimeTimeZoneFromDiscriminatorValue';
import {DateTimeTimeZone} from './dateTimeTimeZone';
import {DateTimeTimeZoneImpl} from './index';
import {TimeSlot} from './timeSlot';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TimeSlotImpl implements AdditionalDataHolder, Parsable, TimeSlot {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The end property */
    public end?: DateTimeTimeZone | undefined;
    /** The start property */
    public start?: DateTimeTimeZone | undefined;
    /**
     * Instantiates a new timeSlot and sets the default values.
     * @param timeSlotParameterValue 
     */
    public constructor(timeSlotParameterValue?: TimeSlot | undefined) {
        this.additionalData = timeSlotParameterValue?.additionalData ? timeSlotParameterValue?.additionalData! : {}
        this.end = timeSlotParameterValue?.end ;
        this.start = timeSlotParameterValue?.start ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "end": n => { this.end = n.getObjectValue<DateTimeTimeZoneImpl>(createDateTimeTimeZoneFromDiscriminatorValue); },
            "start": n => { this.start = n.getObjectValue<DateTimeTimeZoneImpl>(createDateTimeTimeZoneFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.end){
        writer.writeObjectValue<DateTimeTimeZoneImpl>("end", new DateTimeTimeZoneImpl(this.end));
        }
        if(this.start){
        writer.writeObjectValue<DateTimeTimeZoneImpl>("start", new DateTimeTimeZoneImpl(this.start));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
