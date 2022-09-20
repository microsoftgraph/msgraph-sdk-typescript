import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SelfSignedCertificate implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The customKeyIdentifier property */
    private _customKeyIdentifier?: string | undefined;
    /** The displayName property */
    private _displayName?: string | undefined;
    /** The endDateTime property */
    private _endDateTime?: Date | undefined;
    /** The key property */
    private _key?: string | undefined;
    /** The keyId property */
    private _keyId?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The startDateTime property */
    private _startDateTime?: Date | undefined;
    /** The thumbprint property */
    private _thumbprint?: string | undefined;
    /** The type property */
    private _type?: string | undefined;
    /** The usage property */
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
        this.odataType = "#microsoft.graph.selfSignedCertificate";
    };
    /**
     * Gets the customKeyIdentifier property value. The customKeyIdentifier property
     * @returns a binary
     */
    public get customKeyIdentifier() {
        return this._customKeyIdentifier;
    };
    /**
     * Sets the customKeyIdentifier property value. The customKeyIdentifier property
     * @param value Value to set for the customKeyIdentifier property.
     */
    public set customKeyIdentifier(value: string | undefined) {
        this._customKeyIdentifier = value;
    };
    /**
     * Gets the displayName property value. The displayName property
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The displayName property
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Gets the endDateTime property value. The endDateTime property
     * @returns a Date
     */
    public get endDateTime() {
        return this._endDateTime;
    };
    /**
     * Sets the endDateTime property value. The endDateTime property
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
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "startDateTime": n => { this.startDateTime = n.getDateValue(); },
            "thumbprint": n => { this.thumbprint = n.getStringValue(); },
            "type": n => { this.type = n.getStringValue(); },
            "usage": n => { this.usage = n.getStringValue(); },
        };
    };
    /**
     * Gets the key property value. The key property
     * @returns a binary
     */
    public get key() {
        return this._key;
    };
    /**
     * Sets the key property value. The key property
     * @param value Value to set for the key property.
     */
    public set key(value: string | undefined) {
        this._key = value;
    };
    /**
     * Gets the keyId property value. The keyId property
     * @returns a string
     */
    public get keyId() {
        return this._keyId;
    };
    /**
     * Sets the keyId property value. The keyId property
     * @param value Value to set for the keyId property.
     */
    public set keyId(value: string | undefined) {
        this._keyId = value;
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
        writer.writeStringValue("customKeyIdentifier", this.customKeyIdentifier);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeDateValue("endDateTime", this.endDateTime);
        writer.writeStringValue("key", this.key);
        writer.writeStringValue("keyId", this.keyId);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeDateValue("startDateTime", this.startDateTime);
        writer.writeStringValue("thumbprint", this.thumbprint);
        writer.writeStringValue("type", this.type);
        writer.writeStringValue("usage", this.usage);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the startDateTime property value. The startDateTime property
     * @returns a Date
     */
    public get startDateTime() {
        return this._startDateTime;
    };
    /**
     * Sets the startDateTime property value. The startDateTime property
     * @param value Value to set for the startDateTime property.
     */
    public set startDateTime(value: Date | undefined) {
        this._startDateTime = value;
    };
    /**
     * Gets the thumbprint property value. The thumbprint property
     * @returns a string
     */
    public get thumbprint() {
        return this._thumbprint;
    };
    /**
     * Sets the thumbprint property value. The thumbprint property
     * @param value Value to set for the thumbprint property.
     */
    public set thumbprint(value: string | undefined) {
        this._thumbprint = value;
    };
    /**
     * Gets the type property value. The type property
     * @returns a string
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. The type property
     * @param value Value to set for the type property.
     */
    public set type(value: string | undefined) {
        this._type = value;
    };
    /**
     * Gets the usage property value. The usage property
     * @returns a string
     */
    public get usage() {
        return this._usage;
    };
    /**
     * Sets the usage property value. The usage property
     * @param value Value to set for the usage property.
     */
    public set usage(value: string | undefined) {
        this._usage = value;
    };
}
