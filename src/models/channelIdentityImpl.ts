import {ChannelIdentity} from './channelIdentity';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ChannelIdentityImpl implements ChannelIdentity {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The identity of the channel in which the message was posted. */
    private _channelId?: string | undefined;
    /** The identity of the team in which the message was posted. */
    private _teamId?: string | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Gets the channelId property value. The identity of the channel in which the message was posted.
     * @returns a string
     */
    public get channelId() {
        return this._channelId;
    };
    /**
     * Sets the channelId property value. The identity of the channel in which the message was posted.
     * @param value Value to set for the channelId property.
     */
    public set channelId(value: string | undefined) {
        if(value) {
            this._channelId = value;
        }
    };
    /**
     * Instantiates a new channelIdentity and sets the default values.
     * @param channelIdentityParameterValue 
     */
    public constructor(channelIdentityParameterValue?: ChannelIdentity | undefined) {
        this._additionalData = channelIdentityParameterValue?.additionalData ? channelIdentityParameterValue?.additionalData! : {};
        this._channelId = channelIdentityParameterValue?.channelId;
        this._teamId = channelIdentityParameterValue?.teamId;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
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
        if(this.channelId){
            writer.writeStringValue("channelId", this.channelId);
        }
        if(this.teamId){
            writer.writeStringValue("teamId", this.teamId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the teamId property value. The identity of the team in which the message was posted.
     * @returns a string
     */
    public get teamId() {
        return this._teamId;
    };
    /**
     * Sets the teamId property value. The identity of the team in which the message was posted.
     * @param value Value to set for the teamId property.
     */
    public set teamId(value: string | undefined) {
        if(value) {
            this._teamId = value;
        }
    };
}
