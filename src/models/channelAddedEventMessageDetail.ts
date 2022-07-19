import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {EventMessageDetail, IdentitySet} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ChannelAddedEventMessageDetail extends EventMessageDetail implements Parsable {
    /** Display name of the channel. */
    private _channelDisplayName?: string | undefined;
    /** Unique identifier of the channel. */
    private _channelId?: string | undefined;
    /** Initiator of the event. */
    private _initiator?: IdentitySet | undefined;
    /**
     * Gets the channelDisplayName property value. Display name of the channel.
     * @returns a string
     */
    public get channelDisplayName() {
        return this._channelDisplayName;
    };
    /**
     * Sets the channelDisplayName property value. Display name of the channel.
     * @param value Value to set for the channelDisplayName property.
     */
    public set channelDisplayName(value: string | undefined) {
        this._channelDisplayName = value;
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
     * Instantiates a new ChannelAddedEventMessageDetail and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.channelAddedEventMessageDetail";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "channelDisplayName": n => { this.channelDisplayName = n.getStringValue(); },
            "channelId": n => { this.channelId = n.getStringValue(); },
            "initiator": n => { this.initiator = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("channelDisplayName", this.channelDisplayName);
        writer.writeStringValue("channelId", this.channelId);
        writer.writeObjectValue<IdentitySet>("initiator", this.initiator);
    };
}
