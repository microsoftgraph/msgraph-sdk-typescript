import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Color in RGB.
 */
export class RgbColor implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Blue value */
    private _b?: number | undefined;
    /** Green value */
    private _g?: number | undefined;
    private _odataType?: string | undefined;
    /** Red value */
    private _r?: number | undefined;
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
     * Gets the b property value. Blue value
     * @returns a byte
     */
    public get b() {
        return this._b;
    };
    /**
     * Sets the b property value. Blue value
     * @param value Value to set for the b property.
     */
    public set b(value: number | undefined) {
        this._b = value;
    };
    /**
     * Instantiates a new rgbColor and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the g property value. Green value
     * @returns a byte
     */
    public get g() {
        return this._g;
    };
    /**
     * Sets the g property value. Green value
     * @param value Value to set for the g property.
     */
    public set g(value: number | undefined) {
        this._g = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "b": n => { this.b = n.getNumberValue(); },
            "g": n => { this.g = n.getNumberValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "r": n => { this.r = n.getNumberValue(); },
        };
    };
    /**
     * Gets the @odata.type property value. 
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. 
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
    };
    /**
     * Gets the r property value. Red value
     * @returns a byte
     */
    public get r() {
        return this._r;
    };
    /**
     * Sets the r property value. Red value
     * @param value Value to set for the r property.
     */
    public set r(value: number | undefined) {
        this._r = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeNumberValue("b", this.b);
        writer.writeNumberValue("g", this.g);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeNumberValue("r", this.r);
        writer.writeAdditionalData(this.additionalData);
    };
}
