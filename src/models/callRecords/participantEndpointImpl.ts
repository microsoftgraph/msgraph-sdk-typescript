import {IdentitySetImpl} from '../';
import {createIdentitySetFromDiscriminatorValue} from '../createIdentitySetFromDiscriminatorValue';
import {IdentitySet} from '../identitySet';
import {createUserFeedbackFromDiscriminatorValue} from './createUserFeedbackFromDiscriminatorValue';
import {EndpointImpl, UserFeedbackImpl} from './index';
import {ParticipantEndpoint} from './participantEndpoint';
import {UserFeedback} from './userFeedback';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ParticipantEndpointImpl extends EndpointImpl implements ParticipantEndpoint {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The feedback provided by the user of this endpoint about the quality of the session. */
    public feedback?: UserFeedback | undefined;
    /** Identity associated with the endpoint. */
    public identity?: IdentitySet | undefined;
    /**
     * Instantiates a new ParticipantEndpoint and sets the default values.
     * @param participantEndpointParameterValue 
     */
    public constructor(participantEndpointParameterValue?: ParticipantEndpoint | undefined) {
        super(participantEndpointParameterValue);
        this.additionalData = participantEndpointParameterValue?.additionalData ? participantEndpointParameterValue?.additionalData! : {};
        this.feedback = participantEndpointParameterValue?.feedback instanceof UserFeedbackImpl? participantEndpointParameterValue?.feedback:new UserFeedbackImpl(participantEndpointParameterValue?.feedback);
        this.identity = participantEndpointParameterValue?.identity instanceof IdentitySetImpl? participantEndpointParameterValue?.identity:new IdentitySetImpl(participantEndpointParameterValue?.identity);
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "feedback": n => { this.feedback = n.getObjectValue<UserFeedbackImpl>(createUserFeedbackFromDiscriminatorValue); },
            "identity": n => { this.identity = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.feedback){
            writer.writeObjectValue<UserFeedbackImpl>("feedback", new UserFeedbackImpl(this.feedback));
        }
        if(this.identity){
            writer.writeObjectValue<IdentitySetImpl>("identity", new IdentitySetImpl(this.identity));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
