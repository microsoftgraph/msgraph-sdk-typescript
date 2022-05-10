import {CancelMediaProcessingRequestBody} from './cancelMediaProcessingRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the cancelMediaProcessing method.  */
export class CancelMediaProcessingRequestBodyImpl implements AdditionalDataHolder, CancelMediaProcessingRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    additionalData: Record<string, unknown>;
    /** The clientContext property  */
    clientContext?: string | undefined;
    /**
     * Instantiates a new cancelMediaProcessingRequestBody and sets the default values.
     * @param cancelMediaProcessingRequestBodyParameterValue 
     */
    public constructor(cancelMediaProcessingRequestBodyParameterValue?: CancelMediaProcessingRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = cancelMediaProcessingRequestBodyParameterValue?.additionalData ? {} : cancelMediaProcessingRequestBodyParameterValue?.additionalData!
        this.clientContext = cancelMediaProcessingRequestBodyParameterValue?.clientContext ;
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
        if(this.clientContext)
        writer.writeStringValue("clientContext", this.clientContext);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
