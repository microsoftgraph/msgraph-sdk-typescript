import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Contains properties of the minimum operating system required for an iOS mobile app.
 */
export class IosMinimumOperatingSystem implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    private _odataType?: string | undefined;
    /** When TRUE, only Version 10.0 or later is supported. Default value is FALSE. Exactly one of the minimum operating system boolean values will be TRUE. */
    private _v10_0?: boolean | undefined;
    /** When TRUE, only Version 11.0 or later is supported. Default value is FALSE. Exactly one of the minimum operating system boolean values will be TRUE. */
    private _v11_0?: boolean | undefined;
    /** When TRUE, only Version 12.0 or later is supported. Default value is FALSE. Exactly one of the minimum operating system boolean values will be TRUE. */
    private _v12_0?: boolean | undefined;
    /** When TRUE, only Version 13.0 or later is supported. Default value is FALSE. Exactly one of the minimum operating system boolean values will be TRUE. */
    private _v13_0?: boolean | undefined;
    /** When TRUE, only Version 14.0 or later is supported. Default value is FALSE. Exactly one of the minimum operating system boolean values will be TRUE. */
    private _v14_0?: boolean | undefined;
    /** When TRUE, only Version 15.0 or later is supported. Default value is FALSE. Exactly one of the minimum operating system boolean values will be TRUE. */
    private _v15_0?: boolean | undefined;
    /** When TRUE, only Version 8.0 or later is supported. Default value is FALSE. Exactly one of the minimum operating system boolean values will be TRUE. */
    private _v8_0?: boolean | undefined;
    /** When TRUE, only Version 9.0 or later is supported. Default value is FALSE. Exactly one of the minimum operating system boolean values will be TRUE. */
    private _v9_0?: boolean | undefined;
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
     * Instantiates a new iosMinimumOperatingSystem and sets the default values.
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
            "v11_0": n => { this.v11_0 = n.getBooleanValue(); },
            "v12_0": n => { this.v12_0 = n.getBooleanValue(); },
            "v13_0": n => { this.v13_0 = n.getBooleanValue(); },
            "v14_0": n => { this.v14_0 = n.getBooleanValue(); },
            "v15_0": n => { this.v15_0 = n.getBooleanValue(); },
            "v8_0": n => { this.v8_0 = n.getBooleanValue(); },
            "v9_0": n => { this.v9_0 = n.getBooleanValue(); },
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
        writer.writeBooleanValue("v11_0", this.v11_0);
        writer.writeBooleanValue("v12_0", this.v12_0);
        writer.writeBooleanValue("v13_0", this.v13_0);
        writer.writeBooleanValue("v14_0", this.v14_0);
        writer.writeBooleanValue("v15_0", this.v15_0);
        writer.writeBooleanValue("v8_0", this.v8_0);
        writer.writeBooleanValue("v9_0", this.v9_0);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the v10_0 property value. When TRUE, only Version 10.0 or later is supported. Default value is FALSE. Exactly one of the minimum operating system boolean values will be TRUE.
     * @returns a boolean
     */
    public get v10_0() {
        return this._v10_0;
    };
    /**
     * Sets the v10_0 property value. When TRUE, only Version 10.0 or later is supported. Default value is FALSE. Exactly one of the minimum operating system boolean values will be TRUE.
     * @param value Value to set for the v10_0 property.
     */
    public set v10_0(value: boolean | undefined) {
        this._v10_0 = value;
    };
    /**
     * Gets the v11_0 property value. When TRUE, only Version 11.0 or later is supported. Default value is FALSE. Exactly one of the minimum operating system boolean values will be TRUE.
     * @returns a boolean
     */
    public get v11_0() {
        return this._v11_0;
    };
    /**
     * Sets the v11_0 property value. When TRUE, only Version 11.0 or later is supported. Default value is FALSE. Exactly one of the minimum operating system boolean values will be TRUE.
     * @param value Value to set for the v11_0 property.
     */
    public set v11_0(value: boolean | undefined) {
        this._v11_0 = value;
    };
    /**
     * Gets the v12_0 property value. When TRUE, only Version 12.0 or later is supported. Default value is FALSE. Exactly one of the minimum operating system boolean values will be TRUE.
     * @returns a boolean
     */
    public get v12_0() {
        return this._v12_0;
    };
    /**
     * Sets the v12_0 property value. When TRUE, only Version 12.0 or later is supported. Default value is FALSE. Exactly one of the minimum operating system boolean values will be TRUE.
     * @param value Value to set for the v12_0 property.
     */
    public set v12_0(value: boolean | undefined) {
        this._v12_0 = value;
    };
    /**
     * Gets the v13_0 property value. When TRUE, only Version 13.0 or later is supported. Default value is FALSE. Exactly one of the minimum operating system boolean values will be TRUE.
     * @returns a boolean
     */
    public get v13_0() {
        return this._v13_0;
    };
    /**
     * Sets the v13_0 property value. When TRUE, only Version 13.0 or later is supported. Default value is FALSE. Exactly one of the minimum operating system boolean values will be TRUE.
     * @param value Value to set for the v13_0 property.
     */
    public set v13_0(value: boolean | undefined) {
        this._v13_0 = value;
    };
    /**
     * Gets the v14_0 property value. When TRUE, only Version 14.0 or later is supported. Default value is FALSE. Exactly one of the minimum operating system boolean values will be TRUE.
     * @returns a boolean
     */
    public get v14_0() {
        return this._v14_0;
    };
    /**
     * Sets the v14_0 property value. When TRUE, only Version 14.0 or later is supported. Default value is FALSE. Exactly one of the minimum operating system boolean values will be TRUE.
     * @param value Value to set for the v14_0 property.
     */
    public set v14_0(value: boolean | undefined) {
        this._v14_0 = value;
    };
    /**
     * Gets the v15_0 property value. When TRUE, only Version 15.0 or later is supported. Default value is FALSE. Exactly one of the minimum operating system boolean values will be TRUE.
     * @returns a boolean
     */
    public get v15_0() {
        return this._v15_0;
    };
    /**
     * Sets the v15_0 property value. When TRUE, only Version 15.0 or later is supported. Default value is FALSE. Exactly one of the minimum operating system boolean values will be TRUE.
     * @param value Value to set for the v15_0 property.
     */
    public set v15_0(value: boolean | undefined) {
        this._v15_0 = value;
    };
    /**
     * Gets the v8_0 property value. When TRUE, only Version 8.0 or later is supported. Default value is FALSE. Exactly one of the minimum operating system boolean values will be TRUE.
     * @returns a boolean
     */
    public get v8_0() {
        return this._v8_0;
    };
    /**
     * Sets the v8_0 property value. When TRUE, only Version 8.0 or later is supported. Default value is FALSE. Exactly one of the minimum operating system boolean values will be TRUE.
     * @param value Value to set for the v8_0 property.
     */
    public set v8_0(value: boolean | undefined) {
        this._v8_0 = value;
    };
    /**
     * Gets the v9_0 property value. When TRUE, only Version 9.0 or later is supported. Default value is FALSE. Exactly one of the minimum operating system boolean values will be TRUE.
     * @returns a boolean
     */
    public get v9_0() {
        return this._v9_0;
    };
    /**
     * Sets the v9_0 property value. When TRUE, only Version 9.0 or later is supported. Default value is FALSE. Exactly one of the minimum operating system boolean values will be TRUE.
     * @param value Value to set for the v9_0 property.
     */
    public set v9_0(value: boolean | undefined) {
        this._v9_0 = value;
    };
}
