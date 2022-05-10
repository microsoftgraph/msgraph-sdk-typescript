import {ExportPersonalDataRequestBody} from './exportPersonalDataRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the exportPersonalData method.  */
export class ExportPersonalDataRequestBodyImpl implements AdditionalDataHolder, ExportPersonalDataRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    additionalData: Record<string, unknown>;
    /** The storageLocation property  */
    storageLocation?: string | undefined;
    /**
     * Instantiates a new exportPersonalDataRequestBody and sets the default values.
     * @param exportPersonalDataRequestBodyParameterValue 
     */
    public constructor(exportPersonalDataRequestBodyParameterValue?: ExportPersonalDataRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = exportPersonalDataRequestBodyParameterValue?.additionalData ? {} : exportPersonalDataRequestBodyParameterValue?.additionalData!
        this.storageLocation = exportPersonalDataRequestBodyParameterValue?.storageLocation ;
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
        if(this.storageLocation)
        writer.writeStringValue("storageLocation", this.storageLocation);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
