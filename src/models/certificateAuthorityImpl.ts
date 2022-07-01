import {CertificateAuthority} from './certificateAuthority';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CertificateAuthorityImpl implements CertificateAuthority {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** Required. The base64 encoded string representing the public certificate. */
    private _certificate?: string | undefined;
    /** The URL of the certificate revocation list. */
    private _certificateRevocationListUrl?: string | undefined;
    /** The URL contains the list of all revoked certificates since the last time a full certificate revocaton list was created. */
    private _deltaCertificateRevocationListUrl?: string | undefined;
    /** Required. true if the trusted certificate is a root authority, false if the trusted certificate is an intermediate authority. */
    private _isRootAuthority?: boolean | undefined;
    /** The issuer of the certificate, calculated from the certificate value. Read-only. */
    private _issuer?: string | undefined;
    /** The subject key identifier of the certificate, calculated from the certificate value. Read-only. */
    private _issuerSki?: string | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Gets the certificate property value. Required. The base64 encoded string representing the public certificate.
     * @returns a binary
     */
    public get certificate() {
        return this._certificate;
    };
    /**
     * Sets the certificate property value. Required. The base64 encoded string representing the public certificate.
     * @param value Value to set for the certificate property.
     */
    public set certificate(value: string | undefined) {
        if(value) {
            this._certificate = value;
        }
    };
    /**
     * Gets the certificateRevocationListUrl property value. The URL of the certificate revocation list.
     * @returns a string
     */
    public get certificateRevocationListUrl() {
        return this._certificateRevocationListUrl;
    };
    /**
     * Sets the certificateRevocationListUrl property value. The URL of the certificate revocation list.
     * @param value Value to set for the certificateRevocationListUrl property.
     */
    public set certificateRevocationListUrl(value: string | undefined) {
        if(value) {
            this._certificateRevocationListUrl = value;
        }
    };
    /**
     * Instantiates a new certificateAuthority and sets the default values.
     * @param certificateAuthorityParameterValue 
     */
    public constructor(certificateAuthorityParameterValue?: CertificateAuthority | undefined) {
        this._additionalData = certificateAuthorityParameterValue?.additionalData ? certificateAuthorityParameterValue?.additionalData! : {};
        this._certificate = certificateAuthorityParameterValue?.certificate;
        this._certificateRevocationListUrl = certificateAuthorityParameterValue?.certificateRevocationListUrl;
        this._deltaCertificateRevocationListUrl = certificateAuthorityParameterValue?.deltaCertificateRevocationListUrl;
        this._isRootAuthority = certificateAuthorityParameterValue?.isRootAuthority;
        this._issuer = certificateAuthorityParameterValue?.issuer;
        this._issuerSki = certificateAuthorityParameterValue?.issuerSki;
    };
    /**
     * Gets the deltaCertificateRevocationListUrl property value. The URL contains the list of all revoked certificates since the last time a full certificate revocaton list was created.
     * @returns a string
     */
    public get deltaCertificateRevocationListUrl() {
        return this._deltaCertificateRevocationListUrl;
    };
    /**
     * Sets the deltaCertificateRevocationListUrl property value. The URL contains the list of all revoked certificates since the last time a full certificate revocaton list was created.
     * @param value Value to set for the deltaCertificateRevocationListUrl property.
     */
    public set deltaCertificateRevocationListUrl(value: string | undefined) {
        if(value) {
            this._deltaCertificateRevocationListUrl = value;
        }
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
     * Gets the isRootAuthority property value. Required. true if the trusted certificate is a root authority, false if the trusted certificate is an intermediate authority.
     * @returns a boolean
     */
    public get isRootAuthority() {
        return this._isRootAuthority;
    };
    /**
     * Sets the isRootAuthority property value. Required. true if the trusted certificate is a root authority, false if the trusted certificate is an intermediate authority.
     * @param value Value to set for the isRootAuthority property.
     */
    public set isRootAuthority(value: boolean | undefined) {
        if(value) {
            this._isRootAuthority = value;
        }
    };
    /**
     * Gets the issuer property value. The issuer of the certificate, calculated from the certificate value. Read-only.
     * @returns a string
     */
    public get issuer() {
        return this._issuer;
    };
    /**
     * Sets the issuer property value. The issuer of the certificate, calculated from the certificate value. Read-only.
     * @param value Value to set for the issuer property.
     */
    public set issuer(value: string | undefined) {
        if(value) {
            this._issuer = value;
        }
    };
    /**
     * Gets the issuerSki property value. The subject key identifier of the certificate, calculated from the certificate value. Read-only.
     * @returns a string
     */
    public get issuerSki() {
        return this._issuerSki;
    };
    /**
     * Sets the issuerSki property value. The subject key identifier of the certificate, calculated from the certificate value. Read-only.
     * @param value Value to set for the issuerSki property.
     */
    public set issuerSki(value: string | undefined) {
        if(value) {
            this._issuerSki = value;
        }
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
