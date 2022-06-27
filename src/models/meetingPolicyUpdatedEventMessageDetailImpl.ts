import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {IdentitySet} from './identitySet';
import {EventMessageDetailImpl, IdentitySetImpl} from './index';
import {MeetingPolicyUpdatedEventMessageDetail} from './meetingPolicyUpdatedEventMessageDetail';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MeetingPolicyUpdatedEventMessageDetailImpl extends EventMessageDetailImpl implements MeetingPolicyUpdatedEventMessageDetail {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Initiator of the event. */
    public initiator?: IdentitySet | undefined;
    /** Represents whether the meeting chat is enabled or not. */
    public meetingChatEnabled?: boolean | undefined;
    /** Unique identifier of the meeting chat. */
    public meetingChatId?: string | undefined;
    /**
     * Instantiates a new MeetingPolicyUpdatedEventMessageDetail and sets the default values.
     * @param meetingPolicyUpdatedEventMessageDetailParameterValue 
     */
    public constructor(meetingPolicyUpdatedEventMessageDetailParameterValue?: MeetingPolicyUpdatedEventMessageDetail | undefined) {
        super(meetingPolicyUpdatedEventMessageDetailParameterValue);
        this.additionalData = meetingPolicyUpdatedEventMessageDetailParameterValue?.additionalData ? meetingPolicyUpdatedEventMessageDetailParameterValue?.additionalData! : {};
        this.initiator = meetingPolicyUpdatedEventMessageDetailParameterValue?.initiator instanceof IdentitySetImpl? meetingPolicyUpdatedEventMessageDetailParameterValue?.initiator:new IdentitySetImpl(meetingPolicyUpdatedEventMessageDetailParameterValue?.initiator);
        this.meetingChatEnabled = meetingPolicyUpdatedEventMessageDetailParameterValue?.meetingChatEnabled;
        this.meetingChatId = meetingPolicyUpdatedEventMessageDetailParameterValue?.meetingChatId;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "initiator": n => { this.initiator = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "meetingChatEnabled": n => { this.meetingChatEnabled = n.getBooleanValue(); },
            "meetingChatId": n => { this.meetingChatId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.initiator){
            writer.writeObjectValue<IdentitySetImpl>("initiator", new IdentitySetImpl(this.initiator));
        }
        if(this.meetingChatEnabled){
            writer.writeBooleanValue("meetingChatEnabled", this.meetingChatEnabled);
        }
        if(this.meetingChatId){
            writer.writeStringValue("meetingChatId", this.meetingChatId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
