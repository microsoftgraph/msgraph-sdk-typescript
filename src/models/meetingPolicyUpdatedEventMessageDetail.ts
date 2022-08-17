import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {EventMessageDetail, IdentitySet} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MeetingPolicyUpdatedEventMessageDetail extends EventMessageDetail implements Parsable {
    /** Initiator of the event. */
    private _initiator?: IdentitySet | undefined;
    /** Represents whether the meeting chat is enabled or not. */
    private _meetingChatEnabled?: boolean | undefined;
    /** Unique identifier of the meeting chat. */
    private _meetingChatId?: string | undefined;
    /**
     * Instantiates a new MeetingPolicyUpdatedEventMessageDetail and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.meetingPolicyUpdatedEventMessageDetail";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "initiator": n => { this.initiator = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
            "meetingChatEnabled": n => { this.meetingChatEnabled = n.getBooleanValue(); },
            "meetingChatId": n => { this.meetingChatId = n.getStringValue(); },
        };
    };
    /**
     * Gets the initiator property value. Initiator of the event.
     * @returns a identitySet
     */
    public get initiator() {
        return this._initiator;
    };
    /**
     * Sets the initiator property value. Initiator of the event.
     * @param value Value to set for the initiator property.
     */
    public set initiator(value: IdentitySet | undefined) {
        this._initiator = value;
    };
    /**
     * Gets the meetingChatEnabled property value. Represents whether the meeting chat is enabled or not.
     * @returns a boolean
     */
    public get meetingChatEnabled() {
        return this._meetingChatEnabled;
    };
    /**
     * Sets the meetingChatEnabled property value. Represents whether the meeting chat is enabled or not.
     * @param value Value to set for the meetingChatEnabled property.
     */
    public set meetingChatEnabled(value: boolean | undefined) {
        this._meetingChatEnabled = value;
    };
    /**
     * Gets the meetingChatId property value. Unique identifier of the meeting chat.
     * @returns a string
     */
    public get meetingChatId() {
        return this._meetingChatId;
    };
    /**
     * Sets the meetingChatId property value. Unique identifier of the meeting chat.
     * @param value Value to set for the meetingChatId property.
     */
    public set meetingChatId(value: string | undefined) {
        this._meetingChatId = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<IdentitySet>("initiator", this.initiator);
        writer.writeBooleanValue("meetingChatEnabled", this.meetingChatEnabled);
        writer.writeStringValue("meetingChatId", this.meetingChatId);
    };
}
