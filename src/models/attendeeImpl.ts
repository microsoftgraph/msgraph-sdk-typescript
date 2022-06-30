import {Attendee} from './attendee';
import {createResponseStatusFromDiscriminatorValue} from './createResponseStatusFromDiscriminatorValue';
import {createTimeSlotFromDiscriminatorValue} from './createTimeSlotFromDiscriminatorValue';
import {AttendeeBaseImpl, ResponseStatusImpl, TimeSlotImpl} from './index';
import {ResponseStatus} from './responseStatus';
import {TimeSlot} from './timeSlot';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of application entities. */
export class AttendeeImpl extends AttendeeBaseImpl implements Attendee {
    /** An alternate date/time proposed by the attendee for a meeting request to start and end. If the attendee hasn't proposed another time, then this property is not included in a response of a GET event. */
    private _proposedNewTime?: TimeSlot | undefined;
    /** The attendee's response (none, accepted, declined, etc.) for the event and date-time that the response was sent. */
    private _status?: ResponseStatus | undefined;
    /**
     * Instantiates a new attendee and sets the default values.
     * @param attendeeParameterValue 
     */
    public constructor(attendeeParameterValue?: Attendee | undefined) {
        super(attendeeParameterValue);
        this._proposedNewTime = attendeeParameterValue?.proposedNewTime;
        this._status = attendeeParameterValue?.status;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "proposedNewTime": n => { this.proposedNewTime = n.getObjectValue<TimeSlotImpl>(createTimeSlotFromDiscriminatorValue); },
            "status": n => { this.status = n.getObjectValue<ResponseStatusImpl>(createResponseStatusFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the proposedNewTime property value. An alternate date/time proposed by the attendee for a meeting request to start and end. If the attendee hasn't proposed another time, then this property is not included in a response of a GET event.
     * @returns a TimeSlotInterface
     */
    public get proposedNewTime() {
        return this._proposedNewTime;
    };
    /**
     * Sets the proposedNewTime property value. An alternate date/time proposed by the attendee for a meeting request to start and end. If the attendee hasn't proposed another time, then this property is not included in a response of a GET event.
     * @param value Value to set for the proposedNewTime property.
     */
    public set proposedNewTime(value: TimeSlot | undefined) {
        if(value) {
            this._proposedNewTime = value instanceof TimeSlotImpl? value : new TimeSlotImpl(value);
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
        if(this.status){
            writer.writeObjectValue<ResponseStatusImpl>("status", (!this.status || this.status instanceof ResponseStatusImpl? this.status : new ResponseStatusImpl(this.status)));
        }
    };
    /**
     * Gets the status property value. The attendee's response (none, accepted, declined, etc.) for the event and date-time that the response was sent.
     * @returns a ResponseStatusInterface
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. The attendee's response (none, accepted, declined, etc.) for the event and date-time that the response was sent.
     * @param value Value to set for the status property.
     */
    public set status(value: ResponseStatus | undefined) {
        if(value) {
            this._status = value instanceof ResponseStatusImpl? value : new ResponseStatusImpl(value);
        }
    };
}
