import {WindowsInformationProtectionDataRecoveryCertificate} from './windowsInformationProtectionDataRecoveryCertificate';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Windows Information Protection DataRecoveryCertificate */
export class WindowsInformationProtectionDataRecoveryCertificateImpl implements AdditionalDataHolder, Parsable, WindowsInformationProtectionDataRecoveryCertificate {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Data recovery Certificate */
    public certificate?: string | undefined;
    /** Data recovery Certificate description */
    public description?: string | undefined;
    /** Data recovery Certificate expiration datetime */
    public expirationDateTime?: Date | undefined;
    /** Data recovery Certificate subject name */
    public subjectName?: string | undefined;
    /**
     * Instantiates a new windowsInformationProtectionDataRecoveryCertificate and sets the default values.
     * @param windowsInformationProtectionDataRecoveryCertificateParameterValue 
     */
    public constructor(windowsInformationProtectionDataRecoveryCertificateParameterValue?: WindowsInformationProtectionDataRecoveryCertificate | undefined) {
        this.additionalData = windowsInformationProtectionDataRecoveryCertificateParameterValue?.additionalData ? windowsInformationProtectionDataRecoveryCertificateParameterValue?.additionalData! : {}
        this.certificate = windowsInformationProtectionDataRecoveryCertificateParameterValue?.certificate ;
        this.description = windowsInformationProtectionDataRecoveryCertificateParameterValue?.description ;
        this.expirationDateTime = windowsInformationProtectionDataRecoveryCertificateParameterValue?.expirationDateTime ;
        this.subjectName = windowsInformationProtectionDataRecoveryCertificateParameterValue?.subjectName ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "certificate": n => { this.certificate = n.getStringValue(); },
            "description": n => { this.description = n.getStringValue(); },
            "expirationDateTime": n => { this.expirationDateTime = n.getDateValue(); },
            "subjectName": n => { this.subjectName = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.certificate){
        writer.writeStringValue("certificate", this.certificate);
        }
        if(this.description){
        writer.writeStringValue("description", this.description);
        }
        if(this.expirationDateTime){
        writer.writeDateValue("expirationDateTime", this.expirationDateTime);
        }
        if(this.subjectName){
        writer.writeStringValue("subjectName", this.subjectName);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
