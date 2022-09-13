import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Contains properties for the minimum operating system required for an Android mobile app. */
export class AndroidMinimumOperatingSystem implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Version 10.0 or later. */
    private _v10_0?: boolean | undefined;
    /** Version 11.0 or later. */
    private _v11_0?: boolean | undefined;
    /** Version 4.0 or later. */
    private _v4_0?: boolean | undefined;
    /** Version 4.0.3 or later. */
    private _v4_0_3?: boolean | undefined;
    /** Version 4.1 or later. */
    private _v4_1?: boolean | undefined;
    /** Version 4.2 or later. */
    private _v4_2?: boolean | undefined;
    /** Version 4.3 or later. */
    private _v4_3?: boolean | undefined;
    /** Version 4.4 or later. */
    private _v4_4?: boolean | undefined;
    /** Version 5.0 or later. */
    private _v5_0?: boolean | undefined;
    /** Version 5.1 or later. */
    private _v5_1?: boolean | undefined;
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
     * Instantiates a new androidMinimumOperatingSystem and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
        this.odataType = "#microsoft.graph.androidMinimumOperatingSystem";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "v10_0": n => { this.v10_0 = n.getBooleanValue(); },
            "v11_0": n => { this.v11_0 = n.getBooleanValue(); },
            "v4_0": n => { this.v4_0 = n.getBooleanValue(); },
            "v4_0_3": n => { this.v4_0_3 = n.getBooleanValue(); },
            "v4_1": n => { this.v4_1 = n.getBooleanValue(); },
            "v4_2": n => { this.v4_2 = n.getBooleanValue(); },
            "v4_3": n => { this.v4_3 = n.getBooleanValue(); },
            "v4_4": n => { this.v4_4 = n.getBooleanValue(); },
            "v5_0": n => { this.v5_0 = n.getBooleanValue(); },
            "v5_1": n => { this.v5_1 = n.getBooleanValue(); },
        };
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
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeBooleanValue("v10_0", this.v10_0);
        writer.writeBooleanValue("v11_0", this.v11_0);
        writer.writeBooleanValue("v4_0", this.v4_0);
        writer.writeBooleanValue("v4_0_3", this.v4_0_3);
        writer.writeBooleanValue("v4_1", this.v4_1);
        writer.writeBooleanValue("v4_2", this.v4_2);
        writer.writeBooleanValue("v4_3", this.v4_3);
        writer.writeBooleanValue("v4_4", this.v4_4);
        writer.writeBooleanValue("v5_0", this.v5_0);
        writer.writeBooleanValue("v5_1", this.v5_1);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the v10_0 property value. Version 10.0 or later.
     * @returns a boolean
     */
    public get v10_0() {
        return this._v10_0;
    };
    /**
     * Sets the v10_0 property value. Version 10.0 or later.
     * @param value Value to set for the v10_0 property.
     */
    public set v10_0(value: boolean | undefined) {
        this._v10_0 = value;
    };
    /**
     * Gets the v11_0 property value. Version 11.0 or later.
     * @returns a boolean
     */
    public get v11_0() {
        return this._v11_0;
    };
    /**
     * Sets the v11_0 property value. Version 11.0 or later.
     * @param value Value to set for the v11_0 property.
     */
    public set v11_0(value: boolean | undefined) {
        this._v11_0 = value;
    };
    /**
     * Gets the v4_0 property value. Version 4.0 or later.
     * @returns a boolean
     */
    public get v4_0() {
        return this._v4_0;
    };
    /**
     * Sets the v4_0 property value. Version 4.0 or later.
     * @param value Value to set for the v4_0 property.
     */
    public set v4_0(value: boolean | undefined) {
        this._v4_0 = value;
    };
    /**
     * Gets the v4_0_3 property value. Version 4.0.3 or later.
     * @returns a boolean
     */
    public get v4_0_3() {
        return this._v4_0_3;
    };
    /**
     * Sets the v4_0_3 property value. Version 4.0.3 or later.
     * @param value Value to set for the v4_0_3 property.
     */
    public set v4_0_3(value: boolean | undefined) {
        this._v4_0_3 = value;
    };
    /**
     * Gets the v4_1 property value. Version 4.1 or later.
     * @returns a boolean
     */
    public get v4_1() {
        return this._v4_1;
    };
    /**
     * Sets the v4_1 property value. Version 4.1 or later.
     * @param value Value to set for the v4_1 property.
     */
    public set v4_1(value: boolean | undefined) {
        this._v4_1 = value;
    };
    /**
     * Gets the v4_2 property value. Version 4.2 or later.
     * @returns a boolean
     */
    public get v4_2() {
        return this._v4_2;
    };
    /**
     * Sets the v4_2 property value. Version 4.2 or later.
     * @param value Value to set for the v4_2 property.
     */
    public set v4_2(value: boolean | undefined) {
        this._v4_2 = value;
    };
    /**
     * Gets the v4_3 property value. Version 4.3 or later.
     * @returns a boolean
     */
    public get v4_3() {
        return this._v4_3;
    };
    /**
     * Sets the v4_3 property value. Version 4.3 or later.
     * @param value Value to set for the v4_3 property.
     */
    public set v4_3(value: boolean | undefined) {
        this._v4_3 = value;
    };
    /**
     * Gets the v4_4 property value. Version 4.4 or later.
     * @returns a boolean
     */
    public get v4_4() {
        return this._v4_4;
    };
    /**
     * Sets the v4_4 property value. Version 4.4 or later.
     * @param value Value to set for the v4_4 property.
     */
    public set v4_4(value: boolean | undefined) {
        this._v4_4 = value;
    };
    /**
     * Gets the v5_0 property value. Version 5.0 or later.
     * @returns a boolean
     */
    public get v5_0() {
        return this._v5_0;
    };
    /**
     * Sets the v5_0 property value. Version 5.0 or later.
     * @param value Value to set for the v5_0 property.
     */
    public set v5_0(value: boolean | undefined) {
        this._v5_0 = value;
    };
    /**
     * Gets the v5_1 property value. Version 5.1 or later.
     * @returns a boolean
     */
    public get v5_1() {
        return this._v5_1;
    };
    /**
     * Sets the v5_1 property value. Version 5.1 or later.
     * @param value Value to set for the v5_1 property.
     */
    public set v5_1(value: boolean | undefined) {
        this._v5_1 = value;
    };
}
