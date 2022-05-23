import {SigningCertificateUpdateStatus} from './signingCertificateUpdateStatus';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SigningCertificateUpdateStatusImpl implements AdditionalDataHolder, Parsable, SigningCertificateUpdateStatus {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Status of the last certificate update. Read-only. For a list of statuses, see certificateUpdateResult status. */
    public certificateUpdateResult?: string | undefined;
    /** Date and time in ISO 8601 format and in UTC time when the certificate was last updated. Read-only. */
    public lastRunDateTime?: Date | undefined;
    /**
     * Instantiates a new signingCertificateUpdateStatus and sets the default values.
     * @param signingCertificateUpdateStatusParameterValue 
     */
    public constructor(signingCertificateUpdateStatusParameterValue?: SigningCertificateUpdateStatus | undefined) {
        this.additionalData = signingCertificateUpdateStatusParameterValue?.additionalData ? signingCertificateUpdateStatusParameterValue?.additionalData! : {}
        this.certificateUpdateResult = signingCertificateUpdateStatusParameterValue?.certificateUpdateResult ;
        this.lastRunDateTime = signingCertificateUpdateStatusParameterValue?.lastRunDateTime ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "certificateUpdateResult": n => { this.certificateUpdateResult = n.getStringValue(); },
            "lastRunDateTime": n => { this.lastRunDateTime = n.getDateValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.certificateUpdateResult){
        writer.writeStringValue("certificateUpdateResult", this.certificateUpdateResult);
        }
        if(this.lastRunDateTime){
        writer.writeDateValue("lastRunDateTime", this.lastRunDateTime);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
