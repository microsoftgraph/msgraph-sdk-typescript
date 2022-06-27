import {createTimeSlotFromDiscriminatorValue} from './createTimeSlotFromDiscriminatorValue';
import {EventMessageResponse} from './eventMessageResponse';
import {EventMessageImpl, TimeSlotImpl} from './index';
import {ResponseType} from './responseType';
import {TimeSlot} from './timeSlot';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EventMessageResponseImpl extends EventMessageImpl implements EventMessageResponse {
    /** The proposedNewTime property */
    public proposedNewTime?: TimeSlot | undefined;
    /** The responseType property */
    public responseType?: ResponseType | undefined;
    /**
     * Instantiates a new EventMessageResponse and sets the default values.
     * @param eventMessageResponseParameterValue 
     */
    public constructor(eventMessageResponseParameterValue?: EventMessageResponse | undefined) {
        super(eventMessageResponseParameterValue);
        this.proposedNewTime = eventMessageResponseParameterValue?.proposedNewTime instanceof TimeSlotImpl? eventMessageResponseParameterValue?.proposedNewTime:new TimeSlotImpl(eventMessageResponseParameterValue?.proposedNewTime);
        this.responseType = eventMessageResponseParameterValue?.responseType;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.proposedNewTime){
            writer.writeObjectValue<TimeSlotImpl>("proposedNewTime", new TimeSlotImpl(this.proposedNewTime));
        }
        if(this.responseType){
            writer.writeEnumValue<ResponseType>("responseType", this.responseType);
        }
    };
}
