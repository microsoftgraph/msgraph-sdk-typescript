import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * The minimum operating system required for a Windows mobile app.
 */
export class WindowsMinimumOperatingSystem implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    private _odataType?: string | undefined;
    /** Windows version 10.0 or later. */
    private _v10_0?: boolean | undefined;
    /** Windows version 8.0 or later. */
    private _v8_0?: boolean | undefined;
    /** Windows version 8.1 or later. */
    private _v8_1?: boolean | undefined;
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
     * Instantiates a new windowsMinimumOperatingSystem and sets the default values.
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
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "v10_0": n => { this.v10_0 = n.getBooleanValue(); },
            "v8_0": n => { this.v8_0 = n.getBooleanValue(); },
            "v8_1": n => { this.v8_1 = n.getBooleanValue(); },
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeBooleanValue("v10_0", this.v10_0);
        writer.writeBooleanValue("v8_0", this.v8_0);
        writer.writeBooleanValue("v8_1", this.v8_1);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the v10_0 property value. Windows version 10.0 or later.
     * @returns a boolean
     */
    public get v10_0() {
        return this._v10_0;
    };
    /**
     * Sets the v10_0 property value. Windows version 10.0 or later.
     * @param value Value to set for the v10_0 property.
     */
    public set v10_0(value: boolean | undefined) {
        this._v10_0 = value;
    };
    /**
     * Gets the v8_0 property value. Windows version 8.0 or later.
     * @returns a boolean
     */
    public get v8_0() {
        return this._v8_0;
    };
    /**
     * Sets the v8_0 property value. Windows version 8.0 or later.
     * @param value Value to set for the v8_0 property.
     */
    public set v8_0(value: boolean | undefined) {
        this._v8_0 = value;
    };
    /**
     * Gets the v8_1 property value. Windows version 8.1 or later.
     * @returns a boolean
     */
    public get v8_1() {
        return this._v8_1;
    };
    /**
     * Sets the v8_1 property value. Windows version 8.1 or later.
     * @param value Value to set for the v8_1 property.
     */
    public set v8_1(value: boolean | undefined) {
        this._v8_1 = value;
    };
}
