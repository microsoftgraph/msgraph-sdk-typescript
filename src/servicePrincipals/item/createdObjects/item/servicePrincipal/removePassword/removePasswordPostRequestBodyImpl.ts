import {RemovePasswordPostRequestBody} from './removePasswordPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the removePassword method. */
export class RemovePasswordPostRequestBodyImpl implements AdditionalDataHolder, Parsable, RemovePasswordPostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The keyId property */
    public keyId?: string | undefined;
    /**
     * Instantiates a new removePasswordPostRequestBody and sets the default values.
     * @param removePasswordPostRequestBodyParameterValue 
     */
    public constructor(removePasswordPostRequestBodyParameterValue?: RemovePasswordPostRequestBody | undefined) {
        this.additionalData = removePasswordPostRequestBodyParameterValue?.additionalData ? removePasswordPostRequestBodyParameterValue?.additionalData! : {}
        this.keyId = removePasswordPostRequestBodyParameterValue?.keyId ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "keyId": n => { this.keyId = n.getStringValue(); },
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
        writer.writeAdditionalData(this.additionalData);
    };
}
