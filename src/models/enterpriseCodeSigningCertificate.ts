import {CertificateStatus} from './certificateStatus';
import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EnterpriseCodeSigningCertificate extends Entity implements Parsable {
    /** The Windows Enterprise Code-Signing Certificate in the raw data format. Set to null once certificate has been uploaded and other properties have been populated. */
    private _content?: string | undefined;
    /** The cert expiration date and time (using ISO 8601 format, in UTC time). Uploading a valid cert file through the Intune admin console will automatically populate this value in the HTTP response. Supports: $filter, $select, $top, $OrderBy, $skip. $Search is not supported. */
    private _expirationDateTime?: Date | undefined;
    /** The issuer value for the cert. This might contain information such as country (C), state or province (S), locality (L), common name of the cert (CN), organization (O), and organizational unit (OU). Uploading a valid cert file through the Intune admin console will automatically populate this value in the HTTP response. Supports: $filter, $select, $top, $OrderBy, $skip. $Search is not supported. */
    private _issuer?: string | undefined;
    /** The issuer name for the cert. This might contain information such as country (C), state or province (S), locality (L), common name of the cert (CN), organization (O), and organizational unit (OU). Uploading a valid cert file through the Intune admin console will automatically populate this value in the HTTP response. Supports: $filter, $select, $top, $OrderBy, $skip. $Search is not supported. */
    private _issuerName?: string | undefined;
    /** The status property */
    private _status?: CertificateStatus | undefined;
    /** The subject value for the cert. This might contain information such as country (C), state or province (S), locality (L), common name of the cert (CN), organization (O), and organizational unit (OU). Uploading a valid cert file through the Intune admin console will automatically populate this value in the HTTP response. Supports: $filter, $select, $top, $OrderBy, $skip. $Search is not supported. */
    private _subject?: string | undefined;
    /** The subject name for the cert. This might contain information such as country (C), state or province (S), locality (L), common name of the cert (CN), organization (O), and organizational unit (OU). Uploading a valid cert file through the Intune admin console will automatically populate this value in the HTTP response. Supports: $filter, $select, $top, $OrderBy, $skip. $Search is not supported. */
    private _subjectName?: string | undefined;
    /** The date time of CodeSigning Cert when it is uploaded (using ISO 8601 format, in UTC time). Uploading a valid cert file through the Intune admin console will automatically populate this value in the HTTP response. Supports: $filter, $select, $top, $OrderBy, $skip. $Search is not supported. */
    private _uploadDateTime?: Date | undefined;
    /**
     * Instantiates a new EnterpriseCodeSigningCertificate and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the content property value. The Windows Enterprise Code-Signing Certificate in the raw data format. Set to null once certificate has been uploaded and other properties have been populated.
     * @returns a base64url
     */
    public get content() {
        return this._content;
    };
    /**
     * Sets the content property value. The Windows Enterprise Code-Signing Certificate in the raw data format. Set to null once certificate has been uploaded and other properties have been populated.
     * @param value Value to set for the content property.
     */
    public set content(value: string | undefined) {
        this._content = value;
    };
    /**
     * Gets the expirationDateTime property value. The cert expiration date and time (using ISO 8601 format, in UTC time). Uploading a valid cert file through the Intune admin console will automatically populate this value in the HTTP response. Supports: $filter, $select, $top, $OrderBy, $skip. $Search is not supported.
     * @returns a Date
     */
    public get expirationDateTime() {
        return this._expirationDateTime;
    };
    /**
     * Sets the expirationDateTime property value. The cert expiration date and time (using ISO 8601 format, in UTC time). Uploading a valid cert file through the Intune admin console will automatically populate this value in the HTTP response. Supports: $filter, $select, $top, $OrderBy, $skip. $Search is not supported.
     * @param value Value to set for the expirationDateTime property.
     */
    public set expirationDateTime(value: Date | undefined) {
        this._expirationDateTime = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "content": n => { this.content = n.getStringValue(); },
            "expirationDateTime": n => { this.expirationDateTime = n.getDateValue(); },
            "issuer": n => { this.issuer = n.getStringValue(); },
            "issuerName": n => { this.issuerName = n.getStringValue(); },
            "status": n => { this.status = n.getEnumValue<CertificateStatus>(CertificateStatus); },
            "subject": n => { this.subject = n.getStringValue(); },
            "subjectName": n => { this.subjectName = n.getStringValue(); },
            "uploadDateTime": n => { this.uploadDateTime = n.getDateValue(); },
        };
    };
    /**
     * Gets the issuer property value. The issuer value for the cert. This might contain information such as country (C), state or province (S), locality (L), common name of the cert (CN), organization (O), and organizational unit (OU). Uploading a valid cert file through the Intune admin console will automatically populate this value in the HTTP response. Supports: $filter, $select, $top, $OrderBy, $skip. $Search is not supported.
     * @returns a string
     */
    public get issuer() {
        return this._issuer;
    };
    /**
     * Sets the issuer property value. The issuer value for the cert. This might contain information such as country (C), state or province (S), locality (L), common name of the cert (CN), organization (O), and organizational unit (OU). Uploading a valid cert file through the Intune admin console will automatically populate this value in the HTTP response. Supports: $filter, $select, $top, $OrderBy, $skip. $Search is not supported.
     * @param value Value to set for the issuer property.
     */
    public set issuer(value: string | undefined) {
        this._issuer = value;
    };
    /**
     * Gets the issuerName property value. The issuer name for the cert. This might contain information such as country (C), state or province (S), locality (L), common name of the cert (CN), organization (O), and organizational unit (OU). Uploading a valid cert file through the Intune admin console will automatically populate this value in the HTTP response. Supports: $filter, $select, $top, $OrderBy, $skip. $Search is not supported.
     * @returns a string
     */
    public get issuerName() {
        return this._issuerName;
    };
    /**
     * Sets the issuerName property value. The issuer name for the cert. This might contain information such as country (C), state or province (S), locality (L), common name of the cert (CN), organization (O), and organizational unit (OU). Uploading a valid cert file through the Intune admin console will automatically populate this value in the HTTP response. Supports: $filter, $select, $top, $OrderBy, $skip. $Search is not supported.
     * @param value Value to set for the issuerName property.
     */
    public set issuerName(value: string | undefined) {
        this._issuerName = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("content", this.content);
        writer.writeDateValue("expirationDateTime", this.expirationDateTime);
        writer.writeStringValue("issuer", this.issuer);
        writer.writeStringValue("issuerName", this.issuerName);
        writer.writeEnumValue<CertificateStatus>("status", this.status);
        writer.writeStringValue("subject", this.subject);
        writer.writeStringValue("subjectName", this.subjectName);
        writer.writeDateValue("uploadDateTime", this.uploadDateTime);
    };
    /**
     * Gets the status property value. The status property
     * @returns a certificateStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. The status property
     * @param value Value to set for the status property.
     */
    public set status(value: CertificateStatus | undefined) {
        this._status = value;
    };
    /**
     * Gets the subject property value. The subject value for the cert. This might contain information such as country (C), state or province (S), locality (L), common name of the cert (CN), organization (O), and organizational unit (OU). Uploading a valid cert file through the Intune admin console will automatically populate this value in the HTTP response. Supports: $filter, $select, $top, $OrderBy, $skip. $Search is not supported.
     * @returns a string
     */
    public get subject() {
        return this._subject;
    };
    /**
     * Sets the subject property value. The subject value for the cert. This might contain information such as country (C), state or province (S), locality (L), common name of the cert (CN), organization (O), and organizational unit (OU). Uploading a valid cert file through the Intune admin console will automatically populate this value in the HTTP response. Supports: $filter, $select, $top, $OrderBy, $skip. $Search is not supported.
     * @param value Value to set for the subject property.
     */
    public set subject(value: string | undefined) {
        this._subject = value;
    };
    /**
     * Gets the subjectName property value. The subject name for the cert. This might contain information such as country (C), state or province (S), locality (L), common name of the cert (CN), organization (O), and organizational unit (OU). Uploading a valid cert file through the Intune admin console will automatically populate this value in the HTTP response. Supports: $filter, $select, $top, $OrderBy, $skip. $Search is not supported.
     * @returns a string
     */
    public get subjectName() {
        return this._subjectName;
    };
    /**
     * Sets the subjectName property value. The subject name for the cert. This might contain information such as country (C), state or province (S), locality (L), common name of the cert (CN), organization (O), and organizational unit (OU). Uploading a valid cert file through the Intune admin console will automatically populate this value in the HTTP response. Supports: $filter, $select, $top, $OrderBy, $skip. $Search is not supported.
     * @param value Value to set for the subjectName property.
     */
    public set subjectName(value: string | undefined) {
        this._subjectName = value;
    };
    /**
     * Gets the uploadDateTime property value. The date time of CodeSigning Cert when it is uploaded (using ISO 8601 format, in UTC time). Uploading a valid cert file through the Intune admin console will automatically populate this value in the HTTP response. Supports: $filter, $select, $top, $OrderBy, $skip. $Search is not supported.
     * @returns a Date
     */
    public get uploadDateTime() {
        return this._uploadDateTime;
    };
    /**
     * Sets the uploadDateTime property value. The date time of CodeSigning Cert when it is uploaded (using ISO 8601 format, in UTC time). Uploading a valid cert file through the Intune admin console will automatically populate this value in the HTTP response. Supports: $filter, $select, $top, $OrderBy, $skip. $Search is not supported.
     * @param value Value to set for the uploadDateTime property.
     */
    public set uploadDateTime(value: Date | undefined) {
        this._uploadDateTime = value;
    };
}
