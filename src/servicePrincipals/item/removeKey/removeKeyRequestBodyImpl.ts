import {RemoveKeyRequestBody} from './removeKeyRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the removeKey method. */
export class RemoveKeyRequestBodyImpl implements AdditionalDataHolder, Parsable, RemoveKeyRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData: Record<string, unknown>;
    /** The keyId property */
    keyId?: string | undefined;
    /** The proof property */
    proof?: string | undefined;
    /**
     * Instantiates a new removeKeyRequestBody and sets the default values.
     * @param removeKeyRequestBodyParameterValue 
     */
    public constructor(removeKeyRequestBodyParameterValue?: RemoveKeyRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = removeKeyRequestBodyParameterValue?.additionalData ? {} : removeKeyRequestBodyParameterValue?.additionalData!
        this.keyId = removeKeyRequestBodyParameterValue?.keyId ;
        this.proof = removeKeyRequestBodyParameterValue?.proof ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "keyId": n => { this.keyId = n.getStringValue(); },
            "proof": n => { this.proof = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.keyId){
        if(this.keyId)
        writer.writeStringValue("keyId", this.keyId);
        }
        if(this.proof){
        if(this.proof)
        writer.writeStringValue("proof", this.proof);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
