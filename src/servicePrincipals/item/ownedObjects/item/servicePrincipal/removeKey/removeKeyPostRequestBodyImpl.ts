import {RemoveKeyPostRequestBody} from './removeKeyPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the removeKey method. */
export class RemoveKeyPostRequestBodyImpl implements AdditionalDataHolder, Parsable, RemoveKeyPostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The keyId property */
    public keyId?: string | undefined;
    /** The proof property */
    public proof?: string | undefined;
    /**
     * Instantiates a new removeKeyPostRequestBody and sets the default values.
     * @param removeKeyPostRequestBodyParameterValue 
     */
    public constructor(removeKeyPostRequestBodyParameterValue?: RemoveKeyPostRequestBody | undefined) {
        this.additionalData = removeKeyPostRequestBodyParameterValue?.additionalData ? removeKeyPostRequestBodyParameterValue?.additionalData! : {}
        this.keyId = removeKeyPostRequestBodyParameterValue?.keyId ;
        this.proof = removeKeyPostRequestBodyParameterValue?.proof ;
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
        writer.writeStringValue("keyId", this.keyId);
        }
        if(this.proof){
        writer.writeStringValue("proof", this.proof);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
