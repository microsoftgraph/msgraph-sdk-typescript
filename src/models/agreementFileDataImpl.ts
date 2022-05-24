import {AgreementFileData} from './agreementFileData';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AgreementFileDataImpl implements AdditionalDataHolder, AgreementFileData, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Data that represents the terms of use PDF document. Read-only. Note: You can use the .NET Convert.ToBase64String method to convert your file to binary data for uploading using the Create agreements API. A sample syntax using this method in PowerShell is [convert]::ToBase64String((Get-Content -path 'your_file_path' -Encoding byte)). */
    public data?: string | undefined;
    /**
     * Instantiates a new agreementFileData and sets the default values.
     * @param agreementFileDataParameterValue 
     */
    public constructor(agreementFileDataParameterValue?: AgreementFileData | undefined) {
        this.additionalData = agreementFileDataParameterValue?.additionalData ? agreementFileDataParameterValue?.additionalData! : {}
        this.data = agreementFileDataParameterValue?.data ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "data": n => { this.data = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.data){
        writer.writeStringValue("data", this.data);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
