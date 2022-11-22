import {createCallFromDiscriminatorValue} from './createCallFromDiscriminatorValue';
import {Call, Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ParticipantLeftNotification extends Entity implements Parsable {
    /** The call property */
    private _call?: Call | undefined;
    /** ID of the participant under the policy who has left the meeting. */
    private _participantId?: string | undefined;
    /**
     * Gets the call property value. The call property
     * @returns a call
     */
    public get call() {
        return this._call;
    };
    /**
     * Sets the call property value. The call property
     * @param value Value to set for the call property.
     */
    public set call(value: Call | undefined) {
        this._call = value;
    };
    /**
     * Instantiates a new ParticipantLeftNotification and sets the default values.
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
            "call": n => { this.call = n.getObjectValue<Call>(createCallFromDiscriminatorValue); },
            "participantId": n => { this.participantId = n.getStringValue(); },
        };
    };
    /**
     * Gets the participantId property value. ID of the participant under the policy who has left the meeting.
     * @returns a string
     */
    public get participantId() {
        return this._participantId;
    };
    /**
     * Sets the participantId property value. ID of the participant under the policy who has left the meeting.
     * @param value Value to set for the participantId property.
     */
    public set participantId(value: string | undefined) {
        this._participantId = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<Call>("call", this.call);
        writer.writeStringValue("participantId", this.participantId);
    };
}
