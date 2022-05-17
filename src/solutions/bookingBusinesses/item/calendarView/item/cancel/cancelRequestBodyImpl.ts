import {CancelRequestBody} from './cancelRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the cancel method. */
export class CancelRequestBodyImpl implements AdditionalDataHolder, CancelRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData: Record<string, unknown>;
    /** The cancellationMessage property */
    cancellationMessage?: string | undefined;
    /**
     * Instantiates a new cancelRequestBody and sets the default values.
     * @param cancelRequestBodyParameterValue 
     */
    public constructor(cancelRequestBodyParameterValue?: CancelRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = cancelRequestBodyParameterValue?.additionalData ? {} : cancelRequestBodyParameterValue?.additionalData!
        this.cancellationMessage = cancelRequestBodyParameterValue?.cancellationMessage ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "cancellationMessage": n => { this.cancellationMessage = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.cancellationMessage){
        if(this.cancellationMessage)
        writer.writeStringValue("cancellationMessage", this.cancellationMessage);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
