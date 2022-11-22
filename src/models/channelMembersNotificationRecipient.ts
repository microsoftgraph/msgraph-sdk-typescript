import {TeamworkNotificationRecipient} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ChannelMembersNotificationRecipient extends TeamworkNotificationRecipient implements Parsable {
    /** The unique identifier for the channel whose members should receive the notification. */
    private _channelId?: string | undefined;
    /** The unique identifier for the team under which the channel resides. */
    private _teamId?: string | undefined;
    /**
     * Gets the channelId property value. The unique identifier for the channel whose members should receive the notification.
     * @returns a string
     */
    public get channelId() {
        return this._channelId;
    };
    /**
     * Sets the channelId property value. The unique identifier for the channel whose members should receive the notification.
     * @param value Value to set for the channelId property.
     */
    public set channelId(value: string | undefined) {
        this._channelId = value;
    };
    /**
     * Instantiates a new ChannelMembersNotificationRecipient and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.channelMembersNotificationRecipient";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "channelId": n => { this.channelId = n.getStringValue(); },
            "teamId": n => { this.teamId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("channelId", this.channelId);
        writer.writeStringValue("teamId", this.teamId);
    };
    /**
     * Gets the teamId property value. The unique identifier for the team under which the channel resides.
     * @returns a string
     */
    public get teamId() {
        return this._teamId;
    };
    /**
     * Sets the teamId property value. The unique identifier for the team under which the channel resides.
     * @param value Value to set for the teamId property.
     */
    public set teamId(value: string | undefined) {
        this._teamId = value;
    };
}
