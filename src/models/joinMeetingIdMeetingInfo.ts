import {MeetingInfo} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class JoinMeetingIdMeetingInfo extends MeetingInfo implements Parsable {
    /** The ID used to join the meeting. */
    private _joinMeetingId?: string | undefined;
    /** The passcode used to join the meeting. Optional. */
    private _passcode?: string | undefined;
    /**
     * Instantiates a new JoinMeetingIdMeetingInfo and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.joinMeetingIdMeetingInfo";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "joinMeetingId": n => { this.joinMeetingId = n.getStringValue(); },
            "passcode": n => { this.passcode = n.getStringValue(); },
        };
    };
    /**
     * Gets the joinMeetingId property value. The ID used to join the meeting.
     * @returns a string
     */
    public get joinMeetingId() {
        return this._joinMeetingId;
    };
    /**
     * Sets the joinMeetingId property value. The ID used to join the meeting.
     * @param value Value to set for the joinMeetingId property.
     */
    public set joinMeetingId(value: string | undefined) {
        this._joinMeetingId = value;
    };
    /**
     * Gets the passcode property value. The passcode used to join the meeting. Optional.
     * @returns a string
     */
    public get passcode() {
        return this._passcode;
    };
    /**
     * Sets the passcode property value. The passcode used to join the meeting. Optional.
     * @param value Value to set for the passcode property.
     */
    public set passcode(value: string | undefined) {
        this._passcode = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("joinMeetingId", this.joinMeetingId);
        writer.writeStringValue("passcode", this.passcode);
    };
}
