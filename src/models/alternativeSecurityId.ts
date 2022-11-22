import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AlternativeSecurityId implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** For internal use only */
    private _identityProvider?: string | undefined;
    /** For internal use only */
    private _key?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** For internal use only */
    private _type?: number | undefined;
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
     * Instantiates a new alternativeSecurityId and sets the default values.
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
            "identityProvider": n => { this.identityProvider = n.getStringValue(); },
            "key": n => { this.key = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "type": n => { this.type = n.getNumberValue(); },
        };
    };
    /**
     * Gets the identityProvider property value. For internal use only
     * @returns a string
     */
    public get identityProvider() {
        return this._identityProvider;
    };
    /**
     * Sets the identityProvider property value. For internal use only
     * @param value Value to set for the identityProvider property.
     */
    public set identityProvider(value: string | undefined) {
        this._identityProvider = value;
    };
    /**
     * Gets the key property value. For internal use only
     * @returns a binary
     */
    public get key() {
        return this._key;
    };
    /**
     * Sets the key property value. For internal use only
     * @param value Value to set for the key property.
     */
    public set key(value: string | undefined) {
        this._key = value;
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
        writer.writeStringValue("identityProvider", this.identityProvider);
        writer.writeStringValue("key", this.key);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeNumberValue("type", this.type);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the type property value. For internal use only
     * @returns a integer
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. For internal use only
     * @param value Value to set for the type property.
     */
    public set type(value: number | undefined) {
        this._type = value;
    };
}
