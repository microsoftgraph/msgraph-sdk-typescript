import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** The minimum operating system required for a macOS app. */
export class MacOSMinimumOperatingSystem implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** When TRUE, indicates OS X 10.10 or later is required to install the app. When FALSE, indicates some other OS version is the minimum OS to install the app. Default value is FALSE. */
    private _v10_10?: boolean | undefined;
    /** When TRUE, indicates OS X 10.11 or later is required to install the app. When FALSE, indicates some other OS version is the minimum OS to install the app. Default value is FALSE. */
    private _v10_11?: boolean | undefined;
    /** When TRUE, indicates macOS 10.12 or later is required to install the app. When FALSE, indicates some other OS version is the minimum OS to install the app. Default value is FALSE. */
    private _v10_12?: boolean | undefined;
    /** When TRUE, indicates macOS 10.13 or later is required to install the app. When FALSE, indicates some other OS version is the minimum OS to install the app. Default value is FALSE. */
    private _v10_13?: boolean | undefined;
    /** When TRUE, indicates macOS 10.14 or later is required to install the app. When FALSE, indicates some other OS version is the minimum OS to install the app. Default value is FALSE. */
    private _v10_14?: boolean | undefined;
    /** When TRUE, indicates macOS 10.15 or later is required to install the app. When FALSE, indicates some other OS version is the minimum OS to install the app. Default value is FALSE. */
    private _v10_15?: boolean | undefined;
    /** When TRUE, indicates Mac OS X 10.7 or later is required to install the app. When FALSE, indicates some other OS version is the minimum OS to install the app. Default value is FALSE. */
    private _v10_7?: boolean | undefined;
    /** When TRUE, indicates OS X 10.8 or later is required to install the app. When FALSE, indicates some other OS version is the minimum OS to install the app. Default value is FALSE. */
    private _v10_8?: boolean | undefined;
    /** When TRUE, indicates OS X 10.9 or later is required to install the app. When FALSE, indicates some other OS version is the minimum OS to install the app. Default value is FALSE. */
    private _v10_9?: boolean | undefined;
    /** When TRUE, indicates macOS 11.0 or later is required to install the app. When FALSE, indicates some other OS version is the minimum OS to install the app. Default value is FALSE. */
    private _v11_0?: boolean | undefined;
    /** When TRUE, indicates macOS 12.0 or later is required to install the app. When FALSE, indicates some other OS version is the minimum OS to install the app. Default value is FALSE. */
    private _v12_0?: boolean | undefined;
    /** When TRUE, indicates macOS 13.0 or later is required to install the app. When FALSE, indicates some other OS version is the minimum OS to install the app. Default value is FALSE. */
    private _v13_0?: boolean | undefined;
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
     * Instantiates a new macOSMinimumOperatingSystem and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
        this.odataType = "#microsoft.graph.macOSMinimumOperatingSystem";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "v10_10": n => { this.v10_10 = n.getBooleanValue(); },
            "v10_11": n => { this.v10_11 = n.getBooleanValue(); },
            "v10_12": n => { this.v10_12 = n.getBooleanValue(); },
            "v10_13": n => { this.v10_13 = n.getBooleanValue(); },
            "v10_14": n => { this.v10_14 = n.getBooleanValue(); },
            "v10_15": n => { this.v10_15 = n.getBooleanValue(); },
            "v10_7": n => { this.v10_7 = n.getBooleanValue(); },
            "v10_8": n => { this.v10_8 = n.getBooleanValue(); },
            "v10_9": n => { this.v10_9 = n.getBooleanValue(); },
            "v11_0": n => { this.v11_0 = n.getBooleanValue(); },
            "v12_0": n => { this.v12_0 = n.getBooleanValue(); },
            "v13_0": n => { this.v13_0 = n.getBooleanValue(); },
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
        writer.writeBooleanValue("v10_10", this.v10_10);
        writer.writeBooleanValue("v10_11", this.v10_11);
        writer.writeBooleanValue("v10_12", this.v10_12);
        writer.writeBooleanValue("v10_13", this.v10_13);
        writer.writeBooleanValue("v10_14", this.v10_14);
        writer.writeBooleanValue("v10_15", this.v10_15);
        writer.writeBooleanValue("v10_7", this.v10_7);
        writer.writeBooleanValue("v10_8", this.v10_8);
        writer.writeBooleanValue("v10_9", this.v10_9);
        writer.writeBooleanValue("v11_0", this.v11_0);
        writer.writeBooleanValue("v12_0", this.v12_0);
        writer.writeBooleanValue("v13_0", this.v13_0);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the v10_10 property value. When TRUE, indicates OS X 10.10 or later is required to install the app. When FALSE, indicates some other OS version is the minimum OS to install the app. Default value is FALSE.
     * @returns a boolean
     */
    public get v10_10() {
        return this._v10_10;
    };
    /**
     * Sets the v10_10 property value. When TRUE, indicates OS X 10.10 or later is required to install the app. When FALSE, indicates some other OS version is the minimum OS to install the app. Default value is FALSE.
     * @param value Value to set for the v10_10 property.
     */
    public set v10_10(value: boolean | undefined) {
        this._v10_10 = value;
    };
    /**
     * Gets the v10_11 property value. When TRUE, indicates OS X 10.11 or later is required to install the app. When FALSE, indicates some other OS version is the minimum OS to install the app. Default value is FALSE.
     * @returns a boolean
     */
    public get v10_11() {
        return this._v10_11;
    };
    /**
     * Sets the v10_11 property value. When TRUE, indicates OS X 10.11 or later is required to install the app. When FALSE, indicates some other OS version is the minimum OS to install the app. Default value is FALSE.
     * @param value Value to set for the v10_11 property.
     */
    public set v10_11(value: boolean | undefined) {
        this._v10_11 = value;
    };
    /**
     * Gets the v10_12 property value. When TRUE, indicates macOS 10.12 or later is required to install the app. When FALSE, indicates some other OS version is the minimum OS to install the app. Default value is FALSE.
     * @returns a boolean
     */
    public get v10_12() {
        return this._v10_12;
    };
    /**
     * Sets the v10_12 property value. When TRUE, indicates macOS 10.12 or later is required to install the app. When FALSE, indicates some other OS version is the minimum OS to install the app. Default value is FALSE.
     * @param value Value to set for the v10_12 property.
     */
    public set v10_12(value: boolean | undefined) {
        this._v10_12 = value;
    };
    /**
     * Gets the v10_13 property value. When TRUE, indicates macOS 10.13 or later is required to install the app. When FALSE, indicates some other OS version is the minimum OS to install the app. Default value is FALSE.
     * @returns a boolean
     */
    public get v10_13() {
        return this._v10_13;
    };
    /**
     * Sets the v10_13 property value. When TRUE, indicates macOS 10.13 or later is required to install the app. When FALSE, indicates some other OS version is the minimum OS to install the app. Default value is FALSE.
     * @param value Value to set for the v10_13 property.
     */
    public set v10_13(value: boolean | undefined) {
        this._v10_13 = value;
    };
    /**
     * Gets the v10_14 property value. When TRUE, indicates macOS 10.14 or later is required to install the app. When FALSE, indicates some other OS version is the minimum OS to install the app. Default value is FALSE.
     * @returns a boolean
     */
    public get v10_14() {
        return this._v10_14;
    };
    /**
     * Sets the v10_14 property value. When TRUE, indicates macOS 10.14 or later is required to install the app. When FALSE, indicates some other OS version is the minimum OS to install the app. Default value is FALSE.
     * @param value Value to set for the v10_14 property.
     */
    public set v10_14(value: boolean | undefined) {
        this._v10_14 = value;
    };
    /**
     * Gets the v10_15 property value. When TRUE, indicates macOS 10.15 or later is required to install the app. When FALSE, indicates some other OS version is the minimum OS to install the app. Default value is FALSE.
     * @returns a boolean
     */
    public get v10_15() {
        return this._v10_15;
    };
    /**
     * Sets the v10_15 property value. When TRUE, indicates macOS 10.15 or later is required to install the app. When FALSE, indicates some other OS version is the minimum OS to install the app. Default value is FALSE.
     * @param value Value to set for the v10_15 property.
     */
    public set v10_15(value: boolean | undefined) {
        this._v10_15 = value;
    };
    /**
     * Gets the v10_7 property value. When TRUE, indicates Mac OS X 10.7 or later is required to install the app. When FALSE, indicates some other OS version is the minimum OS to install the app. Default value is FALSE.
     * @returns a boolean
     */
    public get v10_7() {
        return this._v10_7;
    };
    /**
     * Sets the v10_7 property value. When TRUE, indicates Mac OS X 10.7 or later is required to install the app. When FALSE, indicates some other OS version is the minimum OS to install the app. Default value is FALSE.
     * @param value Value to set for the v10_7 property.
     */
    public set v10_7(value: boolean | undefined) {
        this._v10_7 = value;
    };
    /**
     * Gets the v10_8 property value. When TRUE, indicates OS X 10.8 or later is required to install the app. When FALSE, indicates some other OS version is the minimum OS to install the app. Default value is FALSE.
     * @returns a boolean
     */
    public get v10_8() {
        return this._v10_8;
    };
    /**
     * Sets the v10_8 property value. When TRUE, indicates OS X 10.8 or later is required to install the app. When FALSE, indicates some other OS version is the minimum OS to install the app. Default value is FALSE.
     * @param value Value to set for the v10_8 property.
     */
    public set v10_8(value: boolean | undefined) {
        this._v10_8 = value;
    };
    /**
     * Gets the v10_9 property value. When TRUE, indicates OS X 10.9 or later is required to install the app. When FALSE, indicates some other OS version is the minimum OS to install the app. Default value is FALSE.
     * @returns a boolean
     */
    public get v10_9() {
        return this._v10_9;
    };
    /**
     * Sets the v10_9 property value. When TRUE, indicates OS X 10.9 or later is required to install the app. When FALSE, indicates some other OS version is the minimum OS to install the app. Default value is FALSE.
     * @param value Value to set for the v10_9 property.
     */
    public set v10_9(value: boolean | undefined) {
        this._v10_9 = value;
    };
    /**
     * Gets the v11_0 property value. When TRUE, indicates macOS 11.0 or later is required to install the app. When FALSE, indicates some other OS version is the minimum OS to install the app. Default value is FALSE.
     * @returns a boolean
     */
    public get v11_0() {
        return this._v11_0;
    };
    /**
     * Sets the v11_0 property value. When TRUE, indicates macOS 11.0 or later is required to install the app. When FALSE, indicates some other OS version is the minimum OS to install the app. Default value is FALSE.
     * @param value Value to set for the v11_0 property.
     */
    public set v11_0(value: boolean | undefined) {
        this._v11_0 = value;
    };
    /**
     * Gets the v12_0 property value. When TRUE, indicates macOS 12.0 or later is required to install the app. When FALSE, indicates some other OS version is the minimum OS to install the app. Default value is FALSE.
     * @returns a boolean
     */
    public get v12_0() {
        return this._v12_0;
    };
    /**
     * Sets the v12_0 property value. When TRUE, indicates macOS 12.0 or later is required to install the app. When FALSE, indicates some other OS version is the minimum OS to install the app. Default value is FALSE.
     * @param value Value to set for the v12_0 property.
     */
    public set v12_0(value: boolean | undefined) {
        this._v12_0 = value;
    };
    /**
     * Gets the v13_0 property value. When TRUE, indicates macOS 13.0 or later is required to install the app. When FALSE, indicates some other OS version is the minimum OS to install the app. Default value is FALSE.
     * @returns a boolean
     */
    public get v13_0() {
        return this._v13_0;
    };
    /**
     * Sets the v13_0 property value. When TRUE, indicates macOS 13.0 or later is required to install the app. When FALSE, indicates some other OS version is the minimum OS to install the app. Default value is FALSE.
     * @param value Value to set for the v13_0 property.
     */
    public set v13_0(value: boolean | undefined) {
        this._v13_0 = value;
    };
}
