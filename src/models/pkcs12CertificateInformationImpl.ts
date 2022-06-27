import {Pkcs12CertificateInformation} from './pkcs12CertificateInformation';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Pkcs12CertificateInformationImpl implements Pkcs12CertificateInformation {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Represents whether the certificate is the active certificate to be used for calling the API connector. The active certificate is the most recently uploaded certificate which is not yet expired but whose notBefore time is in the past. */
    public isActive?: boolean | undefined;
    /** The certificate's expiry. This value is a NumericDate as defined in RFC 7519 (A JSON numeric value representing the number of seconds from 1970-01-01T00:00:00Z UTC until the specified UTC date/time, ignoring leap seconds.) */
    public notAfter?: number | undefined;
    /** The certificate's issue time (not before). This value is a NumericDate as defined in RFC 7519 (A JSON numeric value representing the number of seconds from 1970-01-01T00:00:00Z UTC until the specified UTC date/time, ignoring leap seconds.) */
    public notBefore?: number | undefined;
    /** The certificate thumbprint. */
    public thumbprint?: string | undefined;
    /**
     * Instantiates a new pkcs12CertificateInformation and sets the default values.
     * @param pkcs12CertificateInformationParameterValue 
     */
    public constructor(pkcs12CertificateInformationParameterValue?: Pkcs12CertificateInformation | undefined) {
        this.additionalData = pkcs12CertificateInformationParameterValue?.additionalData ? pkcs12CertificateInformationParameterValue?.additionalData! : {};
        this.isActive = pkcs12CertificateInformationParameterValue?.isActive;
        this.notAfter = pkcs12CertificateInformationParameterValue?.notAfter;
        this.notBefore = pkcs12CertificateInformationParameterValue?.notBefore;
        this.thumbprint = pkcs12CertificateInformationParameterValue?.thumbprint;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "isActive": n => { this.isActive = n.getBooleanValue(); },
            "notAfter": n => { this.notAfter = n.getNumberValue(); },
            "notBefore": n => { this.notBefore = n.getNumberValue(); },
            "thumbprint": n => { this.thumbprint = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.isActive){
            writer.writeBooleanValue("isActive", this.isActive);
        }
        if(this.notAfter){
            writer.writeNumberValue("notAfter", this.notAfter);
        }
        if(this.notBefore){
            writer.writeNumberValue("notBefore", this.notBefore);
        }
        if(this.thumbprint){
            writer.writeStringValue("thumbprint", this.thumbprint);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
