import {createDeviceEnrollmentPlatformRestrictionFromDiscriminatorValue} from './createDeviceEnrollmentPlatformRestrictionFromDiscriminatorValue';
import {DeviceEnrollmentPlatformRestriction} from './deviceEnrollmentPlatformRestriction';
import {DeviceEnrollmentPlatformRestrictionsConfiguration} from './deviceEnrollmentPlatformRestrictionsConfiguration';
import {DeviceEnrollmentConfigurationImpl, DeviceEnrollmentPlatformRestrictionImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DeviceEnrollmentPlatformRestrictionsConfigurationImpl extends DeviceEnrollmentConfigurationImpl implements DeviceEnrollmentPlatformRestrictionsConfiguration {
    /** Android restrictions based on platform, platform operating system version, and device ownership */
    private _androidRestriction?: DeviceEnrollmentPlatformRestriction | undefined;
    /** Ios restrictions based on platform, platform operating system version, and device ownership */
    private _iosRestriction?: DeviceEnrollmentPlatformRestriction | undefined;
    /** Mac restrictions based on platform, platform operating system version, and device ownership */
    private _macOSRestriction?: DeviceEnrollmentPlatformRestriction | undefined;
    /** Windows mobile restrictions based on platform, platform operating system version, and device ownership */
    private _windowsMobileRestriction?: DeviceEnrollmentPlatformRestriction | undefined;
    /** Windows restrictions based on platform, platform operating system version, and device ownership */
    private _windowsRestriction?: DeviceEnrollmentPlatformRestriction | undefined;
    /**
     * Gets the androidRestriction property value. Android restrictions based on platform, platform operating system version, and device ownership
     * @returns a DeviceEnrollmentPlatformRestrictionInterface
     */
    public get androidRestriction() {
        return this._androidRestriction;
    };
    /**
     * Sets the androidRestriction property value. Android restrictions based on platform, platform operating system version, and device ownership
     * @param value Value to set for the androidRestriction property.
     */
    public set androidRestriction(value: DeviceEnrollmentPlatformRestriction | undefined) {
        if(value) {
            this._androidRestriction = value instanceof DeviceEnrollmentPlatformRestrictionImpl? value as DeviceEnrollmentPlatformRestrictionImpl: new DeviceEnrollmentPlatformRestrictionImpl(value);
        }
    };
    /**
     * Instantiates a new DeviceEnrollmentPlatformRestrictionsConfiguration and sets the default values.
     * @param deviceEnrollmentPlatformRestrictionsConfigurationParameterValue 
     */
    public constructor(deviceEnrollmentPlatformRestrictionsConfigurationParameterValue?: DeviceEnrollmentPlatformRestrictionsConfiguration | undefined) {
        super(deviceEnrollmentPlatformRestrictionsConfigurationParameterValue);
        this._androidRestriction = deviceEnrollmentPlatformRestrictionsConfigurationParameterValue?.androidRestriction;
        this._iosRestriction = deviceEnrollmentPlatformRestrictionsConfigurationParameterValue?.iosRestriction;
        this._macOSRestriction = deviceEnrollmentPlatformRestrictionsConfigurationParameterValue?.macOSRestriction;
        this._windowsMobileRestriction = deviceEnrollmentPlatformRestrictionsConfigurationParameterValue?.windowsMobileRestriction;
        this._windowsRestriction = deviceEnrollmentPlatformRestrictionsConfigurationParameterValue?.windowsRestriction;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "androidRestriction": n => { this.androidRestriction = n.getObjectValue<DeviceEnrollmentPlatformRestrictionImpl>(createDeviceEnrollmentPlatformRestrictionFromDiscriminatorValue); },
            "iosRestriction": n => { this.iosRestriction = n.getObjectValue<DeviceEnrollmentPlatformRestrictionImpl>(createDeviceEnrollmentPlatformRestrictionFromDiscriminatorValue); },
            "macOSRestriction": n => { this.macOSRestriction = n.getObjectValue<DeviceEnrollmentPlatformRestrictionImpl>(createDeviceEnrollmentPlatformRestrictionFromDiscriminatorValue); },
            "windowsMobileRestriction": n => { this.windowsMobileRestriction = n.getObjectValue<DeviceEnrollmentPlatformRestrictionImpl>(createDeviceEnrollmentPlatformRestrictionFromDiscriminatorValue); },
            "windowsRestriction": n => { this.windowsRestriction = n.getObjectValue<DeviceEnrollmentPlatformRestrictionImpl>(createDeviceEnrollmentPlatformRestrictionFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the iosRestriction property value. Ios restrictions based on platform, platform operating system version, and device ownership
     * @returns a DeviceEnrollmentPlatformRestrictionInterface
     */
    public get iosRestriction() {
        return this._iosRestriction;
    };
    /**
     * Sets the iosRestriction property value. Ios restrictions based on platform, platform operating system version, and device ownership
     * @param value Value to set for the iosRestriction property.
     */
    public set iosRestriction(value: DeviceEnrollmentPlatformRestriction | undefined) {
        if(value) {
            this._iosRestriction = value instanceof DeviceEnrollmentPlatformRestrictionImpl? value as DeviceEnrollmentPlatformRestrictionImpl: new DeviceEnrollmentPlatformRestrictionImpl(value);
        }
    };
    /**
     * Gets the macOSRestriction property value. Mac restrictions based on platform, platform operating system version, and device ownership
     * @returns a DeviceEnrollmentPlatformRestrictionInterface
     */
    public get macOSRestriction() {
        return this._macOSRestriction;
    };
    /**
     * Sets the macOSRestriction property value. Mac restrictions based on platform, platform operating system version, and device ownership
     * @param value Value to set for the macOSRestriction property.
     */
    public set macOSRestriction(value: DeviceEnrollmentPlatformRestriction | undefined) {
        if(value) {
            this._macOSRestriction = value instanceof DeviceEnrollmentPlatformRestrictionImpl? value as DeviceEnrollmentPlatformRestrictionImpl: new DeviceEnrollmentPlatformRestrictionImpl(value);
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.androidRestriction){
            writer.writeObjectValue<DeviceEnrollmentPlatformRestrictionImpl>("androidRestriction", (this.androidRestriction instanceof DeviceEnrollmentPlatformRestrictionImpl? this.androidRestriction as DeviceEnrollmentPlatformRestrictionImpl: new DeviceEnrollmentPlatformRestrictionImpl(this.androidRestriction)));
        }
        if(this.iosRestriction){
            writer.writeObjectValue<DeviceEnrollmentPlatformRestrictionImpl>("iosRestriction", (this.iosRestriction instanceof DeviceEnrollmentPlatformRestrictionImpl? this.iosRestriction as DeviceEnrollmentPlatformRestrictionImpl: new DeviceEnrollmentPlatformRestrictionImpl(this.iosRestriction)));
        }
        if(this.macOSRestriction){
            writer.writeObjectValue<DeviceEnrollmentPlatformRestrictionImpl>("macOSRestriction", (this.macOSRestriction instanceof DeviceEnrollmentPlatformRestrictionImpl? this.macOSRestriction as DeviceEnrollmentPlatformRestrictionImpl: new DeviceEnrollmentPlatformRestrictionImpl(this.macOSRestriction)));
        }
        if(this.windowsMobileRestriction){
            writer.writeObjectValue<DeviceEnrollmentPlatformRestrictionImpl>("windowsMobileRestriction", (this.windowsMobileRestriction instanceof DeviceEnrollmentPlatformRestrictionImpl? this.windowsMobileRestriction as DeviceEnrollmentPlatformRestrictionImpl: new DeviceEnrollmentPlatformRestrictionImpl(this.windowsMobileRestriction)));
        }
        if(this.windowsRestriction){
            writer.writeObjectValue<DeviceEnrollmentPlatformRestrictionImpl>("windowsRestriction", (this.windowsRestriction instanceof DeviceEnrollmentPlatformRestrictionImpl? this.windowsRestriction as DeviceEnrollmentPlatformRestrictionImpl: new DeviceEnrollmentPlatformRestrictionImpl(this.windowsRestriction)));
        }
    };
    /**
     * Gets the windowsMobileRestriction property value. Windows mobile restrictions based on platform, platform operating system version, and device ownership
     * @returns a DeviceEnrollmentPlatformRestrictionInterface
     */
    public get windowsMobileRestriction() {
        return this._windowsMobileRestriction;
    };
    /**
     * Sets the windowsMobileRestriction property value. Windows mobile restrictions based on platform, platform operating system version, and device ownership
     * @param value Value to set for the windowsMobileRestriction property.
     */
    public set windowsMobileRestriction(value: DeviceEnrollmentPlatformRestriction | undefined) {
        if(value) {
            this._windowsMobileRestriction = value instanceof DeviceEnrollmentPlatformRestrictionImpl? value as DeviceEnrollmentPlatformRestrictionImpl: new DeviceEnrollmentPlatformRestrictionImpl(value);
        }
    };
    /**
     * Gets the windowsRestriction property value. Windows restrictions based on platform, platform operating system version, and device ownership
     * @returns a DeviceEnrollmentPlatformRestrictionInterface
     */
    public get windowsRestriction() {
        return this._windowsRestriction;
    };
    /**
     * Sets the windowsRestriction property value. Windows restrictions based on platform, platform operating system version, and device ownership
     * @param value Value to set for the windowsRestriction property.
     */
    public set windowsRestriction(value: DeviceEnrollmentPlatformRestriction | undefined) {
        if(value) {
            this._windowsRestriction = value instanceof DeviceEnrollmentPlatformRestrictionImpl? value as DeviceEnrollmentPlatformRestrictionImpl: new DeviceEnrollmentPlatformRestrictionImpl(value);
        }
    };
}
