import {Call} from './call';
import {createCallFromDiscriminatorValue} from './createCallFromDiscriminatorValue';
import {CallImpl, EntityImpl} from './index';
import {ParticipantLeftNotification} from './participantLeftNotification';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ParticipantLeftNotificationImpl extends EntityImpl implements ParticipantLeftNotification {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The call property */
    public call?: Call | undefined;
    /** ID of the participant under the policy who has left the meeting. */
    public participantId?: string | undefined;
    /**
     * Instantiates a new ParticipantLeftNotification and sets the default values.
     * @param participantLeftNotificationParameterValue 
     */
    public constructor(participantLeftNotificationParameterValue?: ParticipantLeftNotification | undefined) {
        super(participantLeftNotificationParameterValue);
        this.additionalData = participantLeftNotificationParameterValue?.additionalData ? participantLeftNotificationParameterValue?.additionalData! : {};
        this.call = participantLeftNotificationParameterValue?.call instanceof CallImpl? participantLeftNotificationParameterValue?.call:new CallImpl(participantLeftNotificationParameterValue?.call);
        this.participantId = participantLeftNotificationParameterValue?.participantId;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "call": n => { this.call = n.getObjectValue<CallImpl>(createCallFromDiscriminatorValue); },
            "participantId": n => { this.participantId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.call){
            writer.writeObjectValue<CallImpl>("call", new CallImpl(this.call));
        }
        if(this.participantId){
            writer.writeStringValue("participantId", this.participantId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
