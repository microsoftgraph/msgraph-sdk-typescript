import {AttendeeBase} from './attendeeBase';
import {ResponseStatus} from './responseStatus';
import {TimeSlot} from './timeSlot';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Attendee extends AttendeeBase implements Parsable {
    /** An alternate date/time proposed by the attendee for a meeting request to start and end. If the attendee hasn't proposed another time, then this property is not included in a response of a GET event.  */
    private _proposedNewTime?: TimeSlot | undefined;
    /** The attendee's response (none, accepted, declined, etc.) for the event and date-time that the response was sent.  */
    private _status?: ResponseStatus | undefined;
    /**
     * Instantiates a new attendee and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the proposedNewTime property value. An alternate date/time proposed by the attendee for a meeting request to start and end. If the attendee hasn't proposed another time, then this property is not included in a response of a GET event.
     * @returns a timeSlot
     */
    public get proposedNewTime() {
        return this._proposedNewTime;
    };
    /**
     * Gets the status property value. The attendee's response (none, accepted, declined, etc.) for the event and date-time that the response was sent.
     * @returns a responseStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["proposedNewTime", (o, n) => { (o as unknown as Attendee).proposedNewTime = n.getObjectValue<TimeSlot>(TimeSlot); }],
            ["status", (o, n) => { (o as unknown as Attendee).status = n.getObjectValue<ResponseStatus>(ResponseStatus); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<TimeSlot>("proposedNewTime", this.proposedNewTime);
        writer.writeObjectValue<ResponseStatus>("status", this.status);
    };
    /**
     * Sets the proposedNewTime property value. An alternate date/time proposed by the attendee for a meeting request to start and end. If the attendee hasn't proposed another time, then this property is not included in a response of a GET event.
     * @param value Value to set for the proposedNewTime property.
     */
    public set proposedNewTime(value: TimeSlot | undefined) {
        this._proposedNewTime = value;
    };
    /**
     * Sets the status property value. The attendee's response (none, accepted, declined, etc.) for the event and date-time that the response was sent.
     * @param value Value to set for the status property.
     */
    public set status(value: ResponseStatus | undefined) {
        this._status = value;
    };
}
