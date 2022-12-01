import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ApplePushNotificationCertificate extends Entity implements Parsable {
    /** Apple Id of the account used to create the MDM push certificate. */
    private _appleIdentifier?: string | undefined;
    /** Not yet documented */
    private _certificate?: string | undefined;
    /** Certificate serial number. This property is read-only. */
    private _certificateSerialNumber?: string | undefined;
    /** The reason the certificate upload failed. */
    private _certificateUploadFailureReason?: string | undefined;
    /** The certificate upload status. */
    private _certificateUploadStatus?: string | undefined;
    /** The expiration date and time for Apple push notification certificate. */
    private _expirationDateTime?: Date | undefined;
    /** Last modified date and time for Apple push notification certificate. */
    private _lastModifiedDateTime?: Date | undefined;
    /** Topic Id. */
    private _topicIdentifier?: string | undefined;
    /**
     * Gets the appleIdentifier property value. Apple Id of the account used to create the MDM push certificate.
     * @returns a string
     */
    public get appleIdentifier() {
        return this._appleIdentifier;
    };
    /**
     * Sets the appleIdentifier property value. Apple Id of the account used to create the MDM push certificate.
     * @param value Value to set for the appleIdentifier property.
     */
    public set appleIdentifier(value: string | undefined) {
        this._appleIdentifier = value;
    };
    /**
     * Gets the certificate property value. Not yet documented
     * @returns a string
     */
    public get certificate() {
        return this._certificate;
    };
    /**
     * Sets the certificate property value. Not yet documented
     * @param value Value to set for the certificate property.
     */
    public set certificate(value: string | undefined) {
        this._certificate = value;
    };
    /**
     * Gets the certificateSerialNumber property value. Certificate serial number. This property is read-only.
     * @returns a string
     */
    public get certificateSerialNumber() {
        return this._certificateSerialNumber;
    };
    /**
     * Sets the certificateSerialNumber property value. Certificate serial number. This property is read-only.
     * @param value Value to set for the certificateSerialNumber property.
     */
    public set certificateSerialNumber(value: string | undefined) {
        this._certificateSerialNumber = value;
    };
    /**
     * Gets the certificateUploadFailureReason property value. The reason the certificate upload failed.
     * @returns a string
     */
    public get certificateUploadFailureReason() {
        return this._certificateUploadFailureReason;
    };
    /**
     * Sets the certificateUploadFailureReason property value. The reason the certificate upload failed.
     * @param value Value to set for the certificateUploadFailureReason property.
     */
    public set certificateUploadFailureReason(value: string | undefined) {
        this._certificateUploadFailureReason = value;
    };
    /**
     * Gets the certificateUploadStatus property value. The certificate upload status.
     * @returns a string
     */
    public get certificateUploadStatus() {
        return this._certificateUploadStatus;
    };
    /**
     * Sets the certificateUploadStatus property value. The certificate upload status.
     * @param value Value to set for the certificateUploadStatus property.
     */
    public set certificateUploadStatus(value: string | undefined) {
        this._certificateUploadStatus = value;
    };
    /**
     * Instantiates a new applePushNotificationCertificate and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the expirationDateTime property value. The expiration date and time for Apple push notification certificate.
     * @returns a Date
     */
    public get expirationDateTime() {
        return this._expirationDateTime;
    };
    /**
     * Sets the expirationDateTime property value. The expiration date and time for Apple push notification certificate.
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
            "appleIdentifier": n => { this.appleIdentifier = n.getStringValue(); },
            "certificate": n => { this.certificate = n.getStringValue(); },
            "certificateSerialNumber": n => { this.certificateSerialNumber = n.getStringValue(); },
            "certificateUploadFailureReason": n => { this.certificateUploadFailureReason = n.getStringValue(); },
            "certificateUploadStatus": n => { this.certificateUploadStatus = n.getStringValue(); },
            "expirationDateTime": n => { this.expirationDateTime = n.getDateValue(); },
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
            "topicIdentifier": n => { this.topicIdentifier = n.getStringValue(); },
        };
    };
    /**
     * Gets the lastModifiedDateTime property value. Last modified date and time for Apple push notification certificate.
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Sets the lastModifiedDateTime property value. Last modified date and time for Apple push notification certificate.
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        this._lastModifiedDateTime = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("appleIdentifier", this.appleIdentifier);
        writer.writeStringValue("certificate", this.certificate);
        writer.writeStringValue("certificateUploadFailureReason", this.certificateUploadFailureReason);
        writer.writeStringValue("certificateUploadStatus", this.certificateUploadStatus);
        writer.writeDateValue("expirationDateTime", this.expirationDateTime);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeStringValue("topicIdentifier", this.topicIdentifier);
    };
    /**
     * Gets the topicIdentifier property value. Topic Id.
     * @returns a string
     */
    public get topicIdentifier() {
        return this._topicIdentifier;
    };
    /**
     * Sets the topicIdentifier property value. Topic Id.
     * @param value Value to set for the topicIdentifier property.
     */
    public set topicIdentifier(value: string | undefined) {
        this._topicIdentifier = value;
    };
}
