import {ChannelIdentity} from './channelIdentity';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ChannelIdentityImpl implements AdditionalDataHolder, ChannelIdentity, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The identity of the channel in which the message was posted. */
    public channelId?: string | undefined;
    /** The identity of the team in which the message was posted. */
    public teamId?: string | undefined;
    /**
     * Instantiates a new channelIdentity and sets the default values.
     * @param channelIdentityParameterValue 
     */
    public constructor(channelIdentityParameterValue?: ChannelIdentity | undefined) {
        this.additionalData = channelIdentityParameterValue?.additionalData ? channelIdentityParameterValue?.additionalData! : {}
        this.channelId = channelIdentityParameterValue?.channelId ;
        this.teamId = channelIdentityParameterValue?.teamId ;
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
}
