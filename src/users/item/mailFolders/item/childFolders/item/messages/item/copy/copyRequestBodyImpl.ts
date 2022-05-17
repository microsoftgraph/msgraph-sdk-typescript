import {CopyRequestBody} from './copyRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the copy method. */
export class CopyRequestBodyImpl implements AdditionalDataHolder, CopyRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData: Record<string, unknown>;
    /** The DestinationId property */
    destinationId?: string | undefined;
    /**
     * Instantiates a new copyRequestBody and sets the default values.
     * @param copyRequestBodyParameterValue 
     */
    public constructor(copyRequestBodyParameterValue?: CopyRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = copyRequestBodyParameterValue?.additionalData ? {} : copyRequestBodyParameterValue?.additionalData!
        this.destinationId = copyRequestBodyParameterValue?.destinationId ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "destinationId": n => { this.destinationId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.destinationId){
        if(this.destinationId)
        writer.writeStringValue("destinationId", this.destinationId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
