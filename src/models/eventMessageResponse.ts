import {AdminMember1, EventMessage, TimeSlot} from './index';
import {ResponseType} from './responseType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EventMessageResponse extends EventMessage implements Parsable {
    /** The proposedNewTime property */
    private _proposedNewTime?: TimeSlot | AdminMember1 | undefined;
    /** The responseType property */
    private _responseType?: ResponseType | AdminMember1 | undefined;
    /**
     * Instantiates a new EventMessageResponse and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "proposedNewTime": n => { this.proposedNewTime = n.getObjectValue<TimeSlot>(createTimeSlotFromDiscriminatorValue); },
            "responseType": n => { this.responseType = n.getObjectValue<ResponseType>(createResponseTypeFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the proposedNewTime property value. The proposedNewTime property
     * @returns a admin
     */
    public get proposedNewTime() {
        return this._proposedNewTime;
    };
    /**
     * Sets the proposedNewTime property value. The proposedNewTime property
     * @param value Value to set for the proposedNewTime property.
     */
    public set proposedNewTime(value: TimeSlot | AdminMember1 | undefined) {
        this._proposedNewTime = value;
    };
    /**
     * Gets the responseType property value. The responseType property
     * @returns a admin
     */
    public get responseType() {
        return this._responseType;
    };
    /**
     * Sets the responseType property value. The responseType property
     * @param value Value to set for the responseType property.
     */
    public set responseType(value: ResponseType | AdminMember1 | undefined) {
        this._responseType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<TimeSlot>("proposedNewTime", this.proposedNewTime);
        writer.writeObjectValue<ResponseType>("responseType", this.responseType);
    };
}
