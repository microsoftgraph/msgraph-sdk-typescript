import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Pkcs12CertificateInformation implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Represents whether the certificate is the active certificate to be used for calling the API connector. The active certificate is the most recently uploaded certificate which is not yet expired but whose notBefore time is in the past. */
    private _isActive?: boolean | undefined;
    /** The certificate's expiry. This value is a NumericDate as defined in RFC 7519 (A JSON numeric value representing the number of seconds from 1970-01-01T00:00:00Z UTC until the specified UTC date/time, ignoring leap seconds.) */
    private _notAfter?: number | undefined;
    /** The certificate's issue time (not before). This value is a NumericDate as defined in RFC 7519 (A JSON numeric value representing the number of seconds from 1970-01-01T00:00:00Z UTC until the specified UTC date/time, ignoring leap seconds.) */
    private _notBefore?: number | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The certificate thumbprint. */
    private _thumbprint?: string | undefined;
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
     * Instantiates a new pkcs12CertificateInformation and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
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
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "thumbprint": n => { this.thumbprint = n.getStringValue(); },
        };
    };
    /**
     * Gets the isActive property value. Represents whether the certificate is the active certificate to be used for calling the API connector. The active certificate is the most recently uploaded certificate which is not yet expired but whose notBefore time is in the past.
     * @returns a boolean
     */
    public get isActive() {
        return this._isActive;
    };
    /**
     * Sets the isActive property value. Represents whether the certificate is the active certificate to be used for calling the API connector. The active certificate is the most recently uploaded certificate which is not yet expired but whose notBefore time is in the past.
     * @param value Value to set for the isActive property.
     */
    public set isActive(value: boolean | undefined) {
        this._isActive = value;
    };
    /**
     * Gets the notAfter property value. The certificate's expiry. This value is a NumericDate as defined in RFC 7519 (A JSON numeric value representing the number of seconds from 1970-01-01T00:00:00Z UTC until the specified UTC date/time, ignoring leap seconds.)
     * @returns a int64
     */
    public get notAfter() {
        return this._notAfter;
    };
    /**
     * Sets the notAfter property value. The certificate's expiry. This value is a NumericDate as defined in RFC 7519 (A JSON numeric value representing the number of seconds from 1970-01-01T00:00:00Z UTC until the specified UTC date/time, ignoring leap seconds.)
     * @param value Value to set for the notAfter property.
     */
    public set notAfter(value: number | undefined) {
        this._notAfter = value;
    };
    /**
     * Gets the notBefore property value. The certificate's issue time (not before). This value is a NumericDate as defined in RFC 7519 (A JSON numeric value representing the number of seconds from 1970-01-01T00:00:00Z UTC until the specified UTC date/time, ignoring leap seconds.)
     * @returns a int64
     */
    public get notBefore() {
        return this._notBefore;
    };
    /**
     * Sets the notBefore property value. The certificate's issue time (not before). This value is a NumericDate as defined in RFC 7519 (A JSON numeric value representing the number of seconds from 1970-01-01T00:00:00Z UTC until the specified UTC date/time, ignoring leap seconds.)
     * @param value Value to set for the notBefore property.
     */
    public set notBefore(value: number | undefined) {
        this._notBefore = value;
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
        writer.writeBooleanValue("isActive", this.isActive);
        writer.writeNumberValue("notAfter", this.notAfter);
        writer.writeNumberValue("notBefore", this.notBefore);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("thumbprint", this.thumbprint);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the thumbprint property value. The certificate thumbprint.
     * @returns a string
     */
    public get thumbprint() {
        return this._thumbprint;
    };
    /**
     * Sets the thumbprint property value. The certificate thumbprint.
     * @param value Value to set for the thumbprint property.
     */
    public set thumbprint(value: string | undefined) {
        this._thumbprint = value;
    };
}
