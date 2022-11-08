import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Certification implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** URL that shows certification details for the application. */
    private readonly _certificationDetailsUrl?: string | undefined;
    /** The timestamp when the current certification for the application will expire. */
    private _certificationExpirationDateTime?: Date | undefined;
    /** Indicates whether the application is certified by Microsoft. */
    private readonly _isCertifiedByMicrosoft?: boolean | undefined;
    /** Indicates whether the application has been self-attested by the application developer or the publisher. */
    private _isPublisherAttested?: boolean | undefined;
    /** The timestamp when the certification for the application was most recently added or updated. */
    private _lastCertificationDateTime?: Date | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
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
        this._additionalData = value;
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
        this._certificationDetailsUrl = value;
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
        this._certificationExpirationDateTime = value;
    };
    /**
     * Instantiates a new certification and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
        this.odataType = "#microsoft.graph.certification";
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
            "@odata.type": n => { this.odataType = n.getStringValue(); },
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
        this._isCertifiedByMicrosoft = value;
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
        this._isPublisherAttested = value;
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
        this._lastCertificationDateTime = value;
    };
    /**
     * Gets the @odata.type property value. The OdataType property
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. The OdataType property
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeDateValue("certificationExpirationDateTime", this.certificationExpirationDateTime);
        writer.writeBooleanValue("isPublisherAttested", this.isPublisherAttested);
        writer.writeDateValue("lastCertificationDateTime", this.lastCertificationDateTime);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeAdditionalData(this.additionalData);
    };
}
