import {ChannelSetAsFavoriteByDefaultEventMessageDetail} from './channelSetAsFavoriteByDefaultEventMessageDetail';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {IdentitySet} from './identitySet';
import {EventMessageDetailImpl, IdentitySetImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ChannelSetAsFavoriteByDefaultEventMessageDetailImpl extends EventMessageDetailImpl implements ChannelSetAsFavoriteByDefaultEventMessageDetail {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Unique identifier of the channel. */
    public channelId?: string | undefined;
    /** Initiator of the event. */
    public initiator?: IdentitySet | undefined;
    /**
     * Instantiates a new ChannelSetAsFavoriteByDefaultEventMessageDetail and sets the default values.
     * @param channelSetAsFavoriteByDefaultEventMessageDetailParameterValue 
     */
    public constructor(channelSetAsFavoriteByDefaultEventMessageDetailParameterValue?: ChannelSetAsFavoriteByDefaultEventMessageDetail | undefined) {
        super(channelSetAsFavoriteByDefaultEventMessageDetailParameterValue);
        this.additionalData = channelSetAsFavoriteByDefaultEventMessageDetailParameterValue?.additionalData ? channelSetAsFavoriteByDefaultEventMessageDetailParameterValue?.additionalData! : {};
        this.channelId = channelSetAsFavoriteByDefaultEventMessageDetailParameterValue?.channelId;
        this.initiator = channelSetAsFavoriteByDefaultEventMessageDetailParameterValue?.initiator instanceof IdentitySetImpl? channelSetAsFavoriteByDefaultEventMessageDetailParameterValue?.initiator:new IdentitySetImpl(channelSetAsFavoriteByDefaultEventMessageDetailParameterValue?.initiator);
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
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
        if(this.channelId){
            writer.writeStringValue("channelId", this.channelId);
        }
        if(this.initiator){
            writer.writeObjectValue<IdentitySetImpl>("initiator", new IdentitySetImpl(this.initiator));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
