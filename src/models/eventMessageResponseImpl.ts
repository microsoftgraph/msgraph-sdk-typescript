import {createTimeSlotFromDiscriminatorValue} from './createTimeSlotFromDiscriminatorValue';
import {EventMessageResponse} from './eventMessageResponse';
import {EventMessageImpl, TimeSlotImpl} from './index';
import {ResponseType} from './responseType';
import {TimeSlot} from './timeSlot';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EventMessageResponseImpl extends EventMessageImpl implements EventMessageResponse {
    /** The proposedNewTime property */
    private _proposedNewTime?: TimeSlot | undefined;
    /** The responseType property */
    private _responseType?: ResponseType | undefined;
    /**
     * Instantiates a new EventMessageResponse and sets the default values.
     * @param eventMessageResponseParameterValue 
     */
    public constructor(eventMessageResponseParameterValue?: EventMessageResponse | undefined) {
        super(eventMessageResponseParameterValue);
        this._proposedNewTime = eventMessageResponseParameterValue?.proposedNewTime;
        this._responseType = eventMessageResponseParameterValue?.responseType;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "proposedNewTime": n => { this.proposedNewTime = n.getObjectValue<TimeSlotImpl>(createTimeSlotFromDiscriminatorValue); },
            "responseType": n => { this.responseType = n.getEnumValue<ResponseType>(ResponseType); },
        };
    };
    /**
     * Gets the proposedNewTime property value. The proposedNewTime property
     * @returns a TimeSlotInterface
     */
    public get proposedNewTime() {
        return this._proposedNewTime;
    };
    /**
     * Sets the proposedNewTime property value. The proposedNewTime property
     * @param value Value to set for the proposedNewTime property.
     */
    public set proposedNewTime(value: TimeSlot | undefined) {
        if(value) {
            this._proposedNewTime = value instanceof TimeSlotImpl? value : new TimeSlotImpl(value);
        }
    };
    /**
     * Gets the responseType property value. The responseType property
     * @returns a responseType
     */
    public get responseType() {
        return this._responseType;
    };
    /**
     * Sets the responseType property value. The responseType property
     * @param value Value to set for the responseType property.
     */
    public set responseType(value: ResponseType | undefined) {
        if(value) {
            this._responseType = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.proposedNewTime){
            writer.writeObjectValue<TimeSlotImpl>("proposedNewTime", (!this.proposedNewTime || this.proposedNewTime instanceof TimeSlotImpl? this.proposedNewTime : new TimeSlotImpl(this.proposedNewTime)));
        }
        if(this.responseType){
            writer.writeEnumValue<ResponseType>("responseType", this.responseType);
        }
    };
}
