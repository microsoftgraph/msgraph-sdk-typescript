import {CancelMediaProcessingPostRequestBody} from './cancelMediaProcessingPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the cancelMediaProcessing method. */
export class CancelMediaProcessingPostRequestBodyImpl implements AdditionalDataHolder, CancelMediaProcessingPostRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The clientContext property */
    public clientContext?: string | undefined;
    /**
     * Instantiates a new cancelMediaProcessingPostRequestBody and sets the default values.
     * @param cancelMediaProcessingPostRequestBodyParameterValue 
     */
    public constructor(cancelMediaProcessingPostRequestBodyParameterValue?: CancelMediaProcessingPostRequestBody | undefined) {
        this.additionalData = cancelMediaProcessingPostRequestBodyParameterValue?.additionalData ? cancelMediaProcessingPostRequestBodyParameterValue?.additionalData! : {}
        this.clientContext = cancelMediaProcessingPostRequestBodyParameterValue?.clientContext ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "clientContext": n => { this.clientContext = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.clientContext){
        writer.writeStringValue("clientContext", this.clientContext);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
