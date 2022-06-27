import {CallParticipantInfo} from './callParticipantInfo';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {IdentitySet} from './identitySet';
import {IdentitySetImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CallParticipantInfoImpl implements CallParticipantInfo {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Identity of the call participant. */
    public participant?: IdentitySet | undefined;
    /**
     * Instantiates a new callParticipantInfo and sets the default values.
     * @param callParticipantInfoParameterValue 
     */
    public constructor(callParticipantInfoParameterValue?: CallParticipantInfo | undefined) {
        this.additionalData = callParticipantInfoParameterValue?.additionalData ? callParticipantInfoParameterValue?.additionalData! : {};
        this.participant = callParticipantInfoParameterValue?.participant instanceof IdentitySetImpl? callParticipantInfoParameterValue?.participant:new IdentitySetImpl(callParticipantInfoParameterValue?.participant);
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "participant": n => { this.participant = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.participant){
            writer.writeObjectValue<IdentitySetImpl>("participant", new IdentitySetImpl(this.participant));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
