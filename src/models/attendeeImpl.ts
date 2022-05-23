import {Attendee} from './attendee';
import {createResponseStatusFromDiscriminatorValue} from './createResponseStatusFromDiscriminatorValue';
import {createTimeSlotFromDiscriminatorValue} from './createTimeSlotFromDiscriminatorValue';
import {AttendeeBaseImpl, ResponseStatusImpl, TimeSlotImpl} from './index';
import {ResponseStatus} from './responseStatus';
import {TimeSlot} from './timeSlot';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to user. */
export class AttendeeImpl extends AttendeeBaseImpl implements Attendee, Parsable {
    /** An alternate date/time proposed by the attendee for a meeting request to start and end. If the attendee hasn't proposed another time, then this property is not included in a response of a GET event. */
    public proposedNewTime?: TimeSlot | undefined;
    /** The attendee's response (none, accepted, declined, etc.) for the event and date-time that the response was sent. */
    public status?: ResponseStatus | undefined;
    /**
     * Instantiates a new attendee and sets the default values.
     * @param attendeeParameterValue 
     */
    public constructor(attendeeParameterValue?: Attendee | undefined) {
        super();
        this.proposedNewTime = attendeeParameterValue?.proposedNewTime ;
        this.status = attendeeParameterValue?.status ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.proposedNewTime){
        writer.writeObjectValue<TimeSlotImpl>("proposedNewTime", new TimeSlotImpl(this.proposedNewTime));
        }
        if(this.status){
        writer.writeObjectValue<ResponseStatusImpl>("status", new ResponseStatusImpl(this.status));
        }
    };
}
