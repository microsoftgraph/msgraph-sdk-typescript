import {createDateTimeTimeZoneFromDiscriminatorValue} from './createDateTimeTimeZoneFromDiscriminatorValue';
import {DateTimeTimeZone} from './dateTimeTimeZone';
import {DateTimeTimeZoneImpl} from './index';
import {TimeSlot} from './timeSlot';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TimeSlotImpl implements TimeSlot {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The end property */
    private _end?: DateTimeTimeZone | undefined;
    /** The start property */
    private _start?: DateTimeTimeZone | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new timeSlot and sets the default values.
     * @param timeSlotParameterValue 
     */
    public constructor(timeSlotParameterValue?: TimeSlot | undefined) {
        this._additionalData = timeSlotParameterValue?.additionalData ? timeSlotParameterValue?.additionalData! : {};
        this._end = timeSlotParameterValue?.end;
        this._start = timeSlotParameterValue?.start;
    };
    /**
     * Gets the end property value. The end property
     * @returns a DateTimeTimeZoneInterface
     */
    public get end() {
        return this._end;
    };
    /**
     * Sets the end property value. The end property
     * @param value Value to set for the end property.
     */
    public set end(value: DateTimeTimeZone | undefined) {
        if(value) {
            this._end = value instanceof DateTimeTimeZoneImpl? value : new DateTimeTimeZoneImpl(value);
        }
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
            writer.writeObjectValue<DateTimeTimeZoneImpl>("end", (!this.end || this.end instanceof DateTimeTimeZoneImpl? this.end : new DateTimeTimeZoneImpl(this.end)));
        }
        if(this.start){
            writer.writeObjectValue<DateTimeTimeZoneImpl>("start", (!this.start || this.start instanceof DateTimeTimeZoneImpl? this.start : new DateTimeTimeZoneImpl(this.start)));
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the start property value. The start property
     * @returns a DateTimeTimeZoneInterface
     */
    public get start() {
        return this._start;
    };
    /**
     * Sets the start property value. The start property
     * @param value Value to set for the start property.
     */
    public set start(value: DateTimeTimeZone | undefined) {
        if(value) {
            this._start = value instanceof DateTimeTimeZoneImpl? value : new DateTimeTimeZoneImpl(value);
        }
    };
}
