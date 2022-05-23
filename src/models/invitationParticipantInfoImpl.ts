import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {IdentitySet} from './identitySet';
import {IdentitySetImpl} from './index';
import {InvitationParticipantInfo} from './invitationParticipantInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class InvitationParticipantInfoImpl implements AdditionalDataHolder, InvitationParticipantInfo, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The hidden property */
    public hidden?: boolean | undefined;
    /** The identity property */
    public identity?: IdentitySet | undefined;
    /** Optional. The ID of the target participant. */
    public participantId?: string | undefined;
    /** The removeFromDefaultAudioRoutingGroup property */
    public removeFromDefaultAudioRoutingGroup?: boolean | undefined;
    /** Optional. The call which the target identity is currently a part of. For peer-to-peer case, the call will be dropped once the participant is added successfully. */
    public replacesCallId?: string | undefined;
    /**
     * Instantiates a new invitationParticipantInfo and sets the default values.
     * @param invitationParticipantInfoParameterValue 
     */
    public constructor(invitationParticipantInfoParameterValue?: InvitationParticipantInfo | undefined) {
        this.additionalData = invitationParticipantInfoParameterValue?.additionalData ? invitationParticipantInfoParameterValue?.additionalData! : {}
        this.hidden = invitationParticipantInfoParameterValue?.hidden ;
        this.identity = invitationParticipantInfoParameterValue?.identity ;
        this.participantId = invitationParticipantInfoParameterValue?.participantId ;
        this.removeFromDefaultAudioRoutingGroup = invitationParticipantInfoParameterValue?.removeFromDefaultAudioRoutingGroup ;
        this.replacesCallId = invitationParticipantInfoParameterValue?.replacesCallId ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "hidden": n => { this.hidden = n.getBooleanValue(); },
            "identity": n => { this.identity = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "participantId": n => { this.participantId = n.getStringValue(); },
            "removeFromDefaultAudioRoutingGroup": n => { this.removeFromDefaultAudioRoutingGroup = n.getBooleanValue(); },
            "replacesCallId": n => { this.replacesCallId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.hidden){
        writer.writeBooleanValue("hidden", this.hidden);
        }
        if(this.identity){
        writer.writeObjectValue<IdentitySetImpl>("identity", new IdentitySetImpl(this.identity));
        }
        if(this.participantId){
        writer.writeStringValue("participantId", this.participantId);
        }
        if(this.removeFromDefaultAudioRoutingGroup){
        writer.writeBooleanValue("removeFromDefaultAudioRoutingGroup", this.removeFromDefaultAudioRoutingGroup);
        }
        if(this.replacesCallId){
        writer.writeStringValue("replacesCallId", this.replacesCallId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
