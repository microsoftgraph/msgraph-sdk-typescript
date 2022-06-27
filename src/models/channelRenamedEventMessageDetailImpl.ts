import {ChannelRenamedEventMessageDetail} from './channelRenamedEventMessageDetail';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {IdentitySet} from './identitySet';
import {EventMessageDetailImpl, IdentitySetImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ChannelRenamedEventMessageDetailImpl extends EventMessageDetailImpl implements ChannelRenamedEventMessageDetail {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The updated name of the channel. */
    public channelDisplayName?: string | undefined;
    /** Unique identifier of the channel. */
    public channelId?: string | undefined;
    /** Initiator of the event. */
    public initiator?: IdentitySet | undefined;
    /**
     * Instantiates a new ChannelRenamedEventMessageDetail and sets the default values.
     * @param channelRenamedEventMessageDetailParameterValue 
     */
    public constructor(channelRenamedEventMessageDetailParameterValue?: ChannelRenamedEventMessageDetail | undefined) {
        super(channelRenamedEventMessageDetailParameterValue);
        this.additionalData = channelRenamedEventMessageDetailParameterValue?.additionalData ? channelRenamedEventMessageDetailParameterValue?.additionalData! : {};
        this.channelDisplayName = channelRenamedEventMessageDetailParameterValue?.channelDisplayName;
        this.channelId = channelRenamedEventMessageDetailParameterValue?.channelId;
        this.initiator = channelRenamedEventMessageDetailParameterValue?.initiator instanceof IdentitySetImpl? channelRenamedEventMessageDetailParameterValue?.initiator:new IdentitySetImpl(channelRenamedEventMessageDetailParameterValue?.initiator);
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
