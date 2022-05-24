import {ExportPersonalDataPostRequestBody} from './exportPersonalDataPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the exportPersonalData method. */
export class ExportPersonalDataPostRequestBodyImpl implements AdditionalDataHolder, ExportPersonalDataPostRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The storageLocation property */
    public storageLocation?: string | undefined;
    /**
     * Instantiates a new exportPersonalDataPostRequestBody and sets the default values.
     * @param exportPersonalDataPostRequestBodyParameterValue 
     */
    public constructor(exportPersonalDataPostRequestBodyParameterValue?: ExportPersonalDataPostRequestBody | undefined) {
        this.additionalData = exportPersonalDataPostRequestBodyParameterValue?.additionalData ? exportPersonalDataPostRequestBodyParameterValue?.additionalData! : {}
        this.storageLocation = exportPersonalDataPostRequestBodyParameterValue?.storageLocation ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "storageLocation": n => { this.storageLocation = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.storageLocation){
        writer.writeStringValue("storageLocation", this.storageLocation);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
