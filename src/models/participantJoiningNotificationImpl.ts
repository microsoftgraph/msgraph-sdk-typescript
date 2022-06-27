import {Call} from './call';
import {createCallFromDiscriminatorValue} from './createCallFromDiscriminatorValue';
import {CallImpl, EntityImpl} from './index';
import {ParticipantJoiningNotification} from './participantJoiningNotification';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ParticipantJoiningNotificationImpl extends EntityImpl implements ParticipantJoiningNotification {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The call property */
    public call?: Call | undefined;
    /**
     * Instantiates a new ParticipantJoiningNotification and sets the default values.
     * @param participantJoiningNotificationParameterValue 
     */
    public constructor(participantJoiningNotificationParameterValue?: ParticipantJoiningNotification | undefined) {
        super(participantJoiningNotificationParameterValue);
        this.additionalData = participantJoiningNotificationParameterValue?.additionalData ? participantJoiningNotificationParameterValue?.additionalData! : {};
        this.call = participantJoiningNotificationParameterValue?.call instanceof CallImpl? participantJoiningNotificationParameterValue?.call:new CallImpl(participantJoiningNotificationParameterValue?.call);
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "call": n => { this.call = n.getObjectValue<CallImpl>(createCallFromDiscriminatorValue); },
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
        writer.writeAdditionalData(this.additionalData);
    };
}
