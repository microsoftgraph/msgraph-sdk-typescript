import {ChannelDeletedEventMessageDetail} from './channelDeletedEventMessageDetail';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {IdentitySet} from './identitySet';
import {EventMessageDetailImpl, IdentitySetImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ChannelDeletedEventMessageDetailImpl extends EventMessageDetailImpl implements ChannelDeletedEventMessageDetail {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Display name of the channel. */
    public channelDisplayName?: string | undefined;
    /** Unique identifier of the channel. */
    public channelId?: string | undefined;
    /** Initiator of the event. */
    public initiator?: IdentitySet | undefined;
    /**
     * Instantiates a new ChannelDeletedEventMessageDetail and sets the default values.
     * @param channelDeletedEventMessageDetailParameterValue 
     */
    public constructor(channelDeletedEventMessageDetailParameterValue?: ChannelDeletedEventMessageDetail | undefined) {
        super(channelDeletedEventMessageDetailParameterValue);
        this.additionalData = channelDeletedEventMessageDetailParameterValue?.additionalData ? channelDeletedEventMessageDetailParameterValue?.additionalData! : {};
        this.channelDisplayName = channelDeletedEventMessageDetailParameterValue?.channelDisplayName;
        this.channelId = channelDeletedEventMessageDetailParameterValue?.channelId;
        this.initiator = channelDeletedEventMessageDetailParameterValue?.initiator instanceof IdentitySetImpl? channelDeletedEventMessageDetailParameterValue?.initiator:new IdentitySetImpl(channelDeletedEventMessageDetailParameterValue?.initiator);
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "channelDisplayName": n => { this.channelDisplayName = n.getStringValue(); },
            "channelId": n => { this.channelId = n.getStringValue(); },
            "initiator": n => { this.initiator = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.channelDisplayName){
            writer.writeStringValue("channelDisplayName", this.channelDisplayName);
        }
        if(this.channelId){
            writer.writeStringValue("channelId", this.channelId);
        }
        if(this.initiator){
            writer.writeObjectValue<IdentitySetImpl>("initiator", new IdentitySetImpl(this.initiator));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
