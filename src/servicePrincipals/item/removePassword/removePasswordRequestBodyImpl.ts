import {RemovePasswordRequestBody} from './removePasswordRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the removePassword method.  */
export class RemovePasswordRequestBodyImpl implements AdditionalDataHolder, Parsable, RemovePasswordRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    additionalData: Record<string, unknown>;
    /** The keyId property  */
    keyId?: string | undefined;
    /**
     * Instantiates a new removePasswordRequestBody and sets the default values.
     * @param removePasswordRequestBodyParameterValue 
     */
    public constructor(removePasswordRequestBodyParameterValue?: RemovePasswordRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = removePasswordRequestBodyParameterValue?.additionalData ? {} : removePasswordRequestBodyParameterValue?.additionalData!
        this.keyId = removePasswordRequestBodyParameterValue?.keyId ;
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
        if(this.keyId)
        writer.writeStringValue("keyId", this.keyId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
