import {ChannelDescriptionUpdatedEventMessageDetail} from './channelDescriptionUpdatedEventMessageDetail';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {IdentitySet} from './identitySet';
import {EventMessageDetailImpl, IdentitySetImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ChannelDescriptionUpdatedEventMessageDetailImpl extends EventMessageDetailImpl implements ChannelDescriptionUpdatedEventMessageDetail {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The updated description of the channel. */
    public channelDescription?: string | undefined;
    /** Unique identifier of the channel. */
    public channelId?: string | undefined;
    /** Initiator of the event. */
    public initiator?: IdentitySet | undefined;
    /**
     * Instantiates a new ChannelDescriptionUpdatedEventMessageDetail and sets the default values.
     * @param channelDescriptionUpdatedEventMessageDetailParameterValue 
     */
    public constructor(channelDescriptionUpdatedEventMessageDetailParameterValue?: ChannelDescriptionUpdatedEventMessageDetail | undefined) {
        super(channelDescriptionUpdatedEventMessageDetailParameterValue);
        this.additionalData = channelDescriptionUpdatedEventMessageDetailParameterValue?.additionalData ? channelDescriptionUpdatedEventMessageDetailParameterValue?.additionalData! : {};
        this.channelDescription = channelDescriptionUpdatedEventMessageDetailParameterValue?.channelDescription;
        this.channelId = channelDescriptionUpdatedEventMessageDetailParameterValue?.channelId;
        this.initiator = channelDescriptionUpdatedEventMessageDetailParameterValue?.initiator instanceof IdentitySetImpl? channelDescriptionUpdatedEventMessageDetailParameterValue?.initiator:new IdentitySetImpl(channelDescriptionUpdatedEventMessageDetailParameterValue?.initiator);
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "channelDescription": n => { this.channelDescription = n.getStringValue(); },
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
        if(this.channelDescription){
            writer.writeStringValue("channelDescription", this.channelDescription);
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
