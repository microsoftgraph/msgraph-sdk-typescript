import {ApplePushNotificationCertificate} from './applePushNotificationCertificate';
import {EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Apple push notification certificate. */
export class ApplePushNotificationCertificateImpl extends EntityImpl implements ApplePushNotificationCertificate {
    /** Apple Id of the account used to create the MDM push certificate. */
    private _appleIdentifier?: string | undefined;
    /** Not yet documented */
    private _certificate?: string | undefined;
    /** Certificate serial number. This property is read-only. */
    private _certificateSerialNumber?: string | undefined;
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
        if(value) {
            this._appleIdentifier = value;
        }
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
        if(value) {
            this._certificate = value;
        }
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
        if(value) {
            this._certificateSerialNumber = value;
        }
    };
    /**
     * Instantiates a new applePushNotificationCertificate and sets the default values.
     * @param applePushNotificationCertificateParameterValue 
     */
    public constructor(applePushNotificationCertificateParameterValue?: ApplePushNotificationCertificate | undefined) {
        super(applePushNotificationCertificateParameterValue);
        this._appleIdentifier = applePushNotificationCertificateParameterValue?.appleIdentifier;
        this._certificate = applePushNotificationCertificateParameterValue?.certificate;
        this._certificateSerialNumber = applePushNotificationCertificateParameterValue?.certificateSerialNumber;
        this._expirationDateTime = applePushNotificationCertificateParameterValue?.expirationDateTime;
        this._lastModifiedDateTime = applePushNotificationCertificateParameterValue?.lastModifiedDateTime;
        this._topicIdentifier = applePushNotificationCertificateParameterValue?.topicIdentifier;
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
        if(value) {
            this._expirationDateTime = value;
        }
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
        if(value) {
            this._lastModifiedDateTime = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.appleIdentifier){
            writer.writeStringValue("appleIdentifier", this.appleIdentifier);
        }
        if(this.certificate){
            writer.writeStringValue("certificate", this.certificate);
        }
        if(this.certificateSerialNumber){
            writer.writeStringValue("certificateSerialNumber", this.certificateSerialNumber);
        }
        if(this.expirationDateTime){
            writer.writeDateValue("expirationDateTime", this.expirationDateTime);
        }
        if(this.lastModifiedDateTime){
            writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        }
        if(this.topicIdentifier){
            writer.writeStringValue("topicIdentifier", this.topicIdentifier);
        }
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
        if(value) {
            this._topicIdentifier = value;
        }
    };
}
