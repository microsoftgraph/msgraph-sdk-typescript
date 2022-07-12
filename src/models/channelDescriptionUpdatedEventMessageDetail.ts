import {AdminMember1, EventMessageDetail, IdentitySet} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ChannelDescriptionUpdatedEventMessageDetail extends EventMessageDetail implements Parsable {
    /** The updated description of the channel. */
    private _channelDescription?: string | undefined;
    /** Unique identifier of the channel. */
    private _channelId?: string | undefined;
    /** Initiator of the event. */
    private _initiator?: IdentitySet | AdminMember1 | undefined;
    /**
     * Gets the channelDescription property value. The updated description of the channel.
     * @returns a string
     */
    public get channelDescription() {
        return this._channelDescription;
    };
    /**
     * Sets the channelDescription property value. The updated description of the channel.
     * @param value Value to set for the channelDescription property.
     */
    public set channelDescription(value: string | undefined) {
        this._channelDescription = value;
    };
    /**
     * Gets the channelId property value. Unique identifier of the channel.
     * @returns a string
     */
    public get channelId() {
        return this._channelId;
    };
    /**
     * Sets the channelId property value. Unique identifier of the channel.
     * @param value Value to set for the channelId property.
     */
    public set channelId(value: string | undefined) {
        this._channelId = value;
    };
    /**
     * Instantiates a new ChannelDescriptionUpdatedEventMessageDetail and sets the default values.
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
            "channelDescription": n => { this.channelDescription = n.getStringValue(); },
            "channelId": n => { this.channelId = n.getStringValue(); },
            "initiator": n => { this.initiator = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the initiator property value. Initiator of the event.
     * @returns a admin
     */
    public get initiator() {
        return this._initiator;
    };
    /**
     * Sets the initiator property value. Initiator of the event.
     * @param value Value to set for the initiator property.
     */
    public set initiator(value: IdentitySet | AdminMember1 | undefined) {
        this._initiator = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("channelDescription", this.channelDescription);
        writer.writeStringValue("channelId", this.channelId);
        writer.writeObjectValue<IdentitySet>("initiator", this.initiator);
    };
}
