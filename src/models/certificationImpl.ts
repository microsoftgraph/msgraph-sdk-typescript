import {Certification} from './certification';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CertificationImpl implements Certification {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** URL that shows certification details for the application. */
    private _certificationDetailsUrl?: string | undefined;
    /** The timestamp when the current certification for the application will expire. */
    private _certificationExpirationDateTime?: Date | undefined;
    /** Indicates whether the application is certified by Microsoft. */
    private _isCertifiedByMicrosoft?: boolean | undefined;
    /** Indicates whether the application has been self-attested by the application developer or the publisher. */
    private _isPublisherAttested?: boolean | undefined;
    /** The timestamp when the certification for the application was most recently added or updated. */
    private _lastCertificationDateTime?: Date | undefined;
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
    public set additionalData(value: Record<string, unknown>) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Gets the certificationDetailsUrl property value. URL that shows certification details for the application.
     * @returns a string
     */
    public get certificationDetailsUrl() {
        return this._certificationDetailsUrl;
    };
    /**
     * Sets the certificationDetailsUrl property value. URL that shows certification details for the application.
     * @param value Value to set for the certificationDetailsUrl property.
     */
    public set certificationDetailsUrl(value: string | undefined) {
        if(value) {
            this._certificationDetailsUrl = value;
        }
    };
    /**
     * Gets the certificationExpirationDateTime property value. The timestamp when the current certification for the application will expire.
     * @returns a Date
     */
    public get certificationExpirationDateTime() {
        return this._certificationExpirationDateTime;
    };
    /**
     * Sets the certificationExpirationDateTime property value. The timestamp when the current certification for the application will expire.
     * @param value Value to set for the certificationExpirationDateTime property.
     */
    public set certificationExpirationDateTime(value: Date | undefined) {
        if(value) {
            this._certificationExpirationDateTime = value;
        }
    };
    /**
     * Instantiates a new certification and sets the default values.
     * @param certificationParameterValue 
     */
    public constructor(certificationParameterValue?: Certification | undefined) {
        this._additionalData = certificationParameterValue?.additionalData ? certificationParameterValue?.additionalData! : {};
        this._certificationDetailsUrl = certificationParameterValue?.certificationDetailsUrl;
        this._certificationExpirationDateTime = certificationParameterValue?.certificationExpirationDateTime;
        this._isCertifiedByMicrosoft = certificationParameterValue?.isCertifiedByMicrosoft;
        this._isPublisherAttested = certificationParameterValue?.isPublisherAttested;
        this._lastCertificationDateTime = certificationParameterValue?.lastCertificationDateTime;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "certificationDetailsUrl": n => { this.certificationDetailsUrl = n.getStringValue(); },
            "certificationExpirationDateTime": n => { this.certificationExpirationDateTime = n.getDateValue(); },
            "isCertifiedByMicrosoft": n => { this.isCertifiedByMicrosoft = n.getBooleanValue(); },
            "isPublisherAttested": n => { this.isPublisherAttested = n.getBooleanValue(); },
            "lastCertificationDateTime": n => { this.lastCertificationDateTime = n.getDateValue(); },
        };
    };
    /**
     * Gets the isCertifiedByMicrosoft property value. Indicates whether the application is certified by Microsoft.
     * @returns a boolean
     */
    public get isCertifiedByMicrosoft() {
        return this._isCertifiedByMicrosoft;
    };
    /**
     * Sets the isCertifiedByMicrosoft property value. Indicates whether the application is certified by Microsoft.
     * @param value Value to set for the isCertifiedByMicrosoft property.
     */
    public set isCertifiedByMicrosoft(value: boolean | undefined) {
        if(value) {
            this._isCertifiedByMicrosoft = value;
        }
    };
    /**
     * Gets the isPublisherAttested property value. Indicates whether the application has been self-attested by the application developer or the publisher.
     * @returns a boolean
     */
    public get isPublisherAttested() {
        return this._isPublisherAttested;
    };
    /**
     * Sets the isPublisherAttested property value. Indicates whether the application has been self-attested by the application developer or the publisher.
     * @param value Value to set for the isPublisherAttested property.
     */
    public set isPublisherAttested(value: boolean | undefined) {
        if(value) {
            this._isPublisherAttested = value;
        }
    };
    /**
     * Gets the lastCertificationDateTime property value. The timestamp when the certification for the application was most recently added or updated.
     * @returns a Date
     */
    public get lastCertificationDateTime() {
        return this._lastCertificationDateTime;
    };
    /**
     * Sets the lastCertificationDateTime property value. The timestamp when the certification for the application was most recently added or updated.
     * @param value Value to set for the lastCertificationDateTime property.
     */
    public set lastCertificationDateTime(value: Date | undefined) {
        if(value) {
            this._lastCertificationDateTime = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.certificationDetailsUrl){
            writer.writeStringValue("certificationDetailsUrl", this.certificationDetailsUrl);
        }
        if(this.certificationExpirationDateTime){
            writer.writeDateValue("certificationExpirationDateTime", this.certificationExpirationDateTime);
        }
        if(this.isCertifiedByMicrosoft){
            writer.writeBooleanValue("isCertifiedByMicrosoft", this.isCertifiedByMicrosoft);
        }
        if(this.isPublisherAttested){
            writer.writeBooleanValue("isPublisherAttested", this.isPublisherAttested);
        }
        if(this.lastCertificationDateTime){
            writer.writeDateValue("lastCertificationDateTime", this.lastCertificationDateTime);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
