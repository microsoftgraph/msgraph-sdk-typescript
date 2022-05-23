import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {IdentitySet} from './identitySet';
import {IncomingContext} from './incomingContext';
import {IdentitySetImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IncomingContextImpl implements AdditionalDataHolder, IncomingContext, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The id of the participant that is under observation. Read-only. */
    public observedParticipantId?: string | undefined;
    /** The identity that the call is happening on behalf of. */
    public onBehalfOf?: IdentitySet | undefined;
    /** The id of the participant that triggered the incoming call. Read-only. */
    public sourceParticipantId?: string | undefined;
    /** The identity that transferred the call. */
    public transferor?: IdentitySet | undefined;
    /**
     * Instantiates a new incomingContext and sets the default values.
     * @param incomingContextParameterValue 
     */
    public constructor(incomingContextParameterValue?: IncomingContext | undefined) {
        this.additionalData = incomingContextParameterValue?.additionalData ? incomingContextParameterValue?.additionalData! : {}
        this.observedParticipantId = incomingContextParameterValue?.observedParticipantId ;
        this.onBehalfOf = incomingContextParameterValue?.onBehalfOf ;
        this.sourceParticipantId = incomingContextParameterValue?.sourceParticipantId ;
        this.transferor = incomingContextParameterValue?.transferor ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "observedParticipantId": n => { this.observedParticipantId = n.getStringValue(); },
            "onBehalfOf": n => { this.onBehalfOf = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "sourceParticipantId": n => { this.sourceParticipantId = n.getStringValue(); },
            "transferor": n => { this.transferor = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.observedParticipantId){
        writer.writeStringValue("observedParticipantId", this.observedParticipantId);
        }
        if(this.onBehalfOf){
        writer.writeObjectValue<IdentitySetImpl>("onBehalfOf", new IdentitySetImpl(this.onBehalfOf));
        }
        if(this.sourceParticipantId){
        writer.writeStringValue("sourceParticipantId", this.sourceParticipantId);
        }
        if(this.transferor){
        writer.writeObjectValue<IdentitySetImpl>("transferor", new IdentitySetImpl(this.transferor));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
