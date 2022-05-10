import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SelfSignedCertificate implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Custom key identifier. */
    private _customKeyIdentifier?: string | undefined;
    /** The friendly name for the key. */
    private _displayName?: string | undefined;
    /** The date and time at which the credential expires. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    private _endDateTime?: Date | undefined;
    /** The value for the key credential. Should be a base-64 encoded value. */
    private _key?: string | undefined;
    /** The unique identifier (GUID) for the key. */
    private _keyId?: string | undefined;
    /** The date and time at which the credential becomes valid. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    private _startDateTime?: Date | undefined;
    /** The thumbprint value for the key. */
    private _thumbprint?: string | undefined;
    /** The type of key credential. 'AsymmetricX509Cert'. */
    private _type?: string | undefined;
    /** A string that describes the purpose for which the key can be used. For example, 'Verify'. */
    private _usage?: string | undefined;
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
     * Instantiates a new SelfSignedCertificate and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the customKeyIdentifier property value. Custom key identifier.
     * @returns a binary
     */
    public get customKeyIdentifier() {
        return this._customKeyIdentifier;
    };
    /**
     * Sets the customKeyIdentifier property value. Custom key identifier.
     * @param value Value to set for the customKeyIdentifier property.
     */
    public set customKeyIdentifier(value: string | undefined) {
        this._customKeyIdentifier = value;
    };
    /**
     * Gets the displayName property value. The friendly name for the key.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The friendly name for the key.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Gets the endDateTime property value. The date and time at which the credential expires. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @returns a Date
     */
    public get endDateTime() {
        return this._endDateTime;
    };
    /**
     * Sets the endDateTime property value. The date and time at which the credential expires. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @param value Value to set for the endDateTime property.
     */
    public set endDateTime(value: Date | undefined) {
        this._endDateTime = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "customKeyIdentifier": n => { this.customKeyIdentifier = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "endDateTime": n => { this.endDateTime = n.getDateValue(); },
            "key": n => { this.key = n.getStringValue(); },
            "keyId": n => { this.keyId = n.getStringValue(); },
            "startDateTime": n => { this.startDateTime = n.getDateValue(); },
            "thumbprint": n => { this.thumbprint = n.getStringValue(); },
            "type": n => { this.type = n.getStringValue(); },
            "usage": n => { this.usage = n.getStringValue(); },
        };
    };
    /**
     * Gets the key property value. The value for the key credential. Should be a base-64 encoded value.
     * @returns a binary
     */
    public get key() {
        return this._key;
    };
    /**
     * Sets the key property value. The value for the key credential. Should be a base-64 encoded value.
     * @param value Value to set for the key property.
     */
    public set key(value: string | undefined) {
        this._key = value;
    };
    /**
     * Gets the keyId property value. The unique identifier (GUID) for the key.
     * @returns a string
     */
    public get keyId() {
        return this._keyId;
    };
    /**
     * Sets the keyId property value. The unique identifier (GUID) for the key.
     * @param value Value to set for the keyId property.
     */
    public set keyId(value: string | undefined) {
        this._keyId = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("customKeyIdentifier", this.customKeyIdentifier);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeDateValue("endDateTime", this.endDateTime);
        writer.writeStringValue("key", this.key);
        writer.writeStringValue("keyId", this.keyId);
        writer.writeDateValue("startDateTime", this.startDateTime);
        writer.writeStringValue("thumbprint", this.thumbprint);
        writer.writeStringValue("type", this.type);
        writer.writeStringValue("usage", this.usage);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the startDateTime property value. The date and time at which the credential becomes valid. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @returns a Date
     */
    public get startDateTime() {
        return this._startDateTime;
    };
    /**
     * Sets the startDateTime property value. The date and time at which the credential becomes valid. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @param value Value to set for the startDateTime property.
     */
    public set startDateTime(value: Date | undefined) {
        this._startDateTime = value;
    };
    /**
     * Gets the thumbprint property value. The thumbprint value for the key.
     * @returns a string
     */
    public get thumbprint() {
        return this._thumbprint;
    };
    /**
     * Sets the thumbprint property value. The thumbprint value for the key.
     * @param value Value to set for the thumbprint property.
     */
    public set thumbprint(value: string | undefined) {
        this._thumbprint = value;
    };
    /**
     * Gets the type property value. The type of key credential. 'AsymmetricX509Cert'.
     * @returns a string
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. The type of key credential. 'AsymmetricX509Cert'.
     * @param value Value to set for the type property.
     */
    public set type(value: string | undefined) {
        this._type = value;
    };
    /**
     * Gets the usage property value. A string that describes the purpose for which the key can be used. For example, 'Verify'.
     * @returns a string
     */
    public get usage() {
        return this._usage;
    };
    /**
     * Sets the usage property value. A string that describes the purpose for which the key can be used. For example, 'Verify'.
     * @param value Value to set for the usage property.
     */
    public set usage(value: string | undefined) {
        this._usage = value;
    };
}
