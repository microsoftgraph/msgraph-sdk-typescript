import {CertificateAuthority} from './certificateAuthority';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CertificateAuthorityImpl implements AdditionalDataHolder, CertificateAuthority, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Required. The base64 encoded string representing the public certificate. */
    public certificate?: string | undefined;
    /** The URL of the certificate revocation list. */
    public certificateRevocationListUrl?: string | undefined;
    /** The URL contains the list of all revoked certificates since the last time a full certificate revocaton list was created. */
    public deltaCertificateRevocationListUrl?: string | undefined;
    /** Required. true if the trusted certificate is a root authority, false if the trusted certificate is an intermediate authority. */
    public isRootAuthority?: boolean | undefined;
    /** The issuer of the certificate, calculated from the certificate value. Read-only. */
    public issuer?: string | undefined;
    /** The subject key identifier of the certificate, calculated from the certificate value. Read-only. */
    public issuerSki?: string | undefined;
    /**
     * Instantiates a new certificateAuthority and sets the default values.
     * @param certificateAuthorityParameterValue 
     */
    public constructor(certificateAuthorityParameterValue?: CertificateAuthority | undefined) {
        this.additionalData = certificateAuthorityParameterValue?.additionalData ? certificateAuthorityParameterValue?.additionalData! : {}
        this.certificate = certificateAuthorityParameterValue?.certificate ;
        this.certificateRevocationListUrl = certificateAuthorityParameterValue?.certificateRevocationListUrl ;
        this.deltaCertificateRevocationListUrl = certificateAuthorityParameterValue?.deltaCertificateRevocationListUrl ;
        this.isRootAuthority = certificateAuthorityParameterValue?.isRootAuthority ;
        this.issuer = certificateAuthorityParameterValue?.issuer ;
        this.issuerSki = certificateAuthorityParameterValue?.issuerSki ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "certificate": n => { this.certificate = n.getStringValue(); },
            "certificateRevocationListUrl": n => { this.certificateRevocationListUrl = n.getStringValue(); },
            "deltaCertificateRevocationListUrl": n => { this.deltaCertificateRevocationListUrl = n.getStringValue(); },
            "isRootAuthority": n => { this.isRootAuthority = n.getBooleanValue(); },
            "issuer": n => { this.issuer = n.getStringValue(); },
            "issuerSki": n => { this.issuerSki = n.getStringValue(); },
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
        if(this.certificateRevocationListUrl){
        writer.writeStringValue("certificateRevocationListUrl", this.certificateRevocationListUrl);
        }
        if(this.deltaCertificateRevocationListUrl){
        writer.writeStringValue("deltaCertificateRevocationListUrl", this.deltaCertificateRevocationListUrl);
        }
        if(this.isRootAuthority){
        writer.writeBooleanValue("isRootAuthority", this.isRootAuthority);
        }
        if(this.issuer){
        writer.writeStringValue("issuer", this.issuer);
        }
        if(this.issuerSki){
        writer.writeStringValue("issuerSki", this.issuerSki);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
