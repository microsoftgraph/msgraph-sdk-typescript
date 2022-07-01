import {IosMinimumOperatingSystem} from './iosMinimumOperatingSystem';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Contains properties of the minimum operating system required for an iOS mobile app. */
export class IosMinimumOperatingSystemImpl implements IosMinimumOperatingSystem {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** Version 10.0 or later. */
    private _v10_0?: boolean | undefined;
    /** Version 11.0 or later. */
    private _v11_0?: boolean | undefined;
    /** Version 12.0 or later. */
    private _v12_0?: boolean | undefined;
    /** Version 13.0 or later. */
    private _v13_0?: boolean | undefined;
    /** Version 14.0 or later. */
    private _v14_0?: boolean | undefined;
    /** Version 8.0 or later. */
    private _v8_0?: boolean | undefined;
    /** Version 9.0 or later. */
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
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new iosMinimumOperatingSystem and sets the default values.
     * @param iosMinimumOperatingSystemParameterValue 
     */
    public constructor(iosMinimumOperatingSystemParameterValue?: IosMinimumOperatingSystem | undefined) {
        this._additionalData = iosMinimumOperatingSystemParameterValue?.additionalData ? iosMinimumOperatingSystemParameterValue?.additionalData! : {};
        this._v10_0 = iosMinimumOperatingSystemParameterValue?.v10_0;
        this._v11_0 = iosMinimumOperatingSystemParameterValue?.v11_0;
        this._v12_0 = iosMinimumOperatingSystemParameterValue?.v12_0;
        this._v13_0 = iosMinimumOperatingSystemParameterValue?.v13_0;
        this._v14_0 = iosMinimumOperatingSystemParameterValue?.v14_0;
        this._v8_0 = iosMinimumOperatingSystemParameterValue?.v8_0;
        this._v9_0 = iosMinimumOperatingSystemParameterValue?.v9_0;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "v10_0": n => { this.v10_0 = n.getBooleanValue(); },
            "v11_0": n => { this.v11_0 = n.getBooleanValue(); },
            "v12_0": n => { this.v12_0 = n.getBooleanValue(); },
            "v13_0": n => { this.v13_0 = n.getBooleanValue(); },
            "v14_0": n => { this.v14_0 = n.getBooleanValue(); },
            "v8_0": n => { this.v8_0 = n.getBooleanValue(); },
            "v9_0": n => { this.v9_0 = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.v10_0){
            writer.writeBooleanValue("v10_0", this.v10_0);
        }
        if(this.v11_0){
            writer.writeBooleanValue("v11_0", this.v11_0);
        }
        if(this.v12_0){
            writer.writeBooleanValue("v12_0", this.v12_0);
        }
        if(this.v13_0){
            writer.writeBooleanValue("v13_0", this.v13_0);
        }
        if(this.v14_0){
            writer.writeBooleanValue("v14_0", this.v14_0);
        }
        if(this.v8_0){
            writer.writeBooleanValue("v8_0", this.v8_0);
        }
        if(this.v9_0){
            writer.writeBooleanValue("v9_0", this.v9_0);
        }
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
        if(value) {
            this._v10_0 = value;
        }
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
        if(value) {
            this._v11_0 = value;
        }
    };
    /**
     * Gets the v12_0 property value. Version 12.0 or later.
     * @returns a boolean
     */
    public get v12_0() {
        return this._v12_0;
    };
    /**
     * Sets the v12_0 property value. Version 12.0 or later.
     * @param value Value to set for the v12_0 property.
     */
    public set v12_0(value: boolean | undefined) {
        if(value) {
            this._v12_0 = value;
        }
    };
    /**
     * Gets the v13_0 property value. Version 13.0 or later.
     * @returns a boolean
     */
    public get v13_0() {
        return this._v13_0;
    };
    /**
     * Sets the v13_0 property value. Version 13.0 or later.
     * @param value Value to set for the v13_0 property.
     */
    public set v13_0(value: boolean | undefined) {
        if(value) {
            this._v13_0 = value;
        }
    };
    /**
     * Gets the v14_0 property value. Version 14.0 or later.
     * @returns a boolean
     */
    public get v14_0() {
        return this._v14_0;
    };
    /**
     * Sets the v14_0 property value. Version 14.0 or later.
     * @param value Value to set for the v14_0 property.
     */
    public set v14_0(value: boolean | undefined) {
        if(value) {
            this._v14_0 = value;
        }
    };
    /**
     * Gets the v8_0 property value. Version 8.0 or later.
     * @returns a boolean
     */
    public get v8_0() {
        return this._v8_0;
    };
    /**
     * Sets the v8_0 property value. Version 8.0 or later.
     * @param value Value to set for the v8_0 property.
     */
    public set v8_0(value: boolean | undefined) {
        if(value) {
            this._v8_0 = value;
        }
    };
    /**
     * Gets the v9_0 property value. Version 9.0 or later.
     * @returns a boolean
     */
    public get v9_0() {
        return this._v9_0;
    };
    /**
     * Sets the v9_0 property value. Version 9.0 or later.
     * @param value Value to set for the v9_0 property.
     */
    public set v9_0(value: boolean | undefined) {
        if(value) {
            this._v9_0 = value;
        }
    };
}
