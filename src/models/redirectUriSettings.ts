import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RedirectUriSettings implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The index property */
    private _index?: number | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The uri property */
    private _uri?: string | undefined;
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
     * Instantiates a new redirectUriSettings and sets the default values.
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
            "index": n => { this.index = n.getNumberValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "uri": n => { this.uri = n.getStringValue(); },
        };
    };
    /**
     * Gets the index property value. The index property
     * @returns a integer
     */
    public get index() {
        return this._index;
    };
    /**
     * Sets the index property value. The index property
     * @param value Value to set for the index property.
     */
    public set index(value: number | undefined) {
        this._index = value;
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
        writer.writeNumberValue("index", this.index);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("uri", this.uri);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the uri property value. The uri property
     * @returns a string
     */
    public get uri() {
        return this._uri;
    };
    /**
     * Sets the uri property value. The uri property
     * @param value Value to set for the uri property.
     */
    public set uri(value: string | undefined) {
        this._uri = value;
    };
}
