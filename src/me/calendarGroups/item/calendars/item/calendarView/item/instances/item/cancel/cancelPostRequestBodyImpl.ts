import {CancelPostRequestBody} from './cancelPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the cancel method. */
export class CancelPostRequestBodyImpl implements AdditionalDataHolder, CancelPostRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The Comment property */
    public comment?: string | undefined;
    /**
     * Instantiates a new cancelPostRequestBody and sets the default values.
     * @param cancelPostRequestBodyParameterValue 
     */
    public constructor(cancelPostRequestBodyParameterValue?: CancelPostRequestBody | undefined) {
        this.additionalData = cancelPostRequestBodyParameterValue?.additionalData ? cancelPostRequestBodyParameterValue?.additionalData! : {}
        this.comment = cancelPostRequestBodyParameterValue?.comment ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "comment": n => { this.comment = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.comment){
        writer.writeStringValue("comment", this.comment);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
