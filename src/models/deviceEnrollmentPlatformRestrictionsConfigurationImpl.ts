import {createDeviceEnrollmentPlatformRestrictionFromDiscriminatorValue} from './createDeviceEnrollmentPlatformRestrictionFromDiscriminatorValue';
import {DeviceEnrollmentPlatformRestriction} from './deviceEnrollmentPlatformRestriction';
import {DeviceEnrollmentPlatformRestrictionsConfiguration} from './deviceEnrollmentPlatformRestrictionsConfiguration';
import {DeviceEnrollmentConfigurationImpl, DeviceEnrollmentPlatformRestrictionImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DeviceEnrollmentPlatformRestrictionsConfigurationImpl extends DeviceEnrollmentConfigurationImpl implements DeviceEnrollmentPlatformRestrictionsConfiguration {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Android restrictions based on platform, platform operating system version, and device ownership */
    public androidRestriction?: DeviceEnrollmentPlatformRestriction | undefined;
    /** Ios restrictions based on platform, platform operating system version, and device ownership */
    public iosRestriction?: DeviceEnrollmentPlatformRestriction | undefined;
    /** Mac restrictions based on platform, platform operating system version, and device ownership */
    public macOSRestriction?: DeviceEnrollmentPlatformRestriction | undefined;
    /** Windows mobile restrictions based on platform, platform operating system version, and device ownership */
    public windowsMobileRestriction?: DeviceEnrollmentPlatformRestriction | undefined;
    /** Windows restrictions based on platform, platform operating system version, and device ownership */
    public windowsRestriction?: DeviceEnrollmentPlatformRestriction | undefined;
    /**
     * Instantiates a new DeviceEnrollmentPlatformRestrictionsConfiguration and sets the default values.
     * @param deviceEnrollmentPlatformRestrictionsConfigurationParameterValue 
     */
    public constructor(deviceEnrollmentPlatformRestrictionsConfigurationParameterValue?: DeviceEnrollmentPlatformRestrictionsConfiguration | undefined) {
        super(deviceEnrollmentPlatformRestrictionsConfigurationParameterValue);
        this.additionalData = deviceEnrollmentPlatformRestrictionsConfigurationParameterValue?.additionalData ? deviceEnrollmentPlatformRestrictionsConfigurationParameterValue?.additionalData! : {};
        this.androidRestriction = deviceEnrollmentPlatformRestrictionsConfigurationParameterValue?.androidRestriction instanceof DeviceEnrollmentPlatformRestrictionImpl? deviceEnrollmentPlatformRestrictionsConfigurationParameterValue?.androidRestriction:new DeviceEnrollmentPlatformRestrictionImpl(deviceEnrollmentPlatformRestrictionsConfigurationParameterValue?.androidRestriction);
        this.iosRestriction = deviceEnrollmentPlatformRestrictionsConfigurationParameterValue?.iosRestriction instanceof DeviceEnrollmentPlatformRestrictionImpl? deviceEnrollmentPlatformRestrictionsConfigurationParameterValue?.iosRestriction:new DeviceEnrollmentPlatformRestrictionImpl(deviceEnrollmentPlatformRestrictionsConfigurationParameterValue?.iosRestriction);
        this.macOSRestriction = deviceEnrollmentPlatformRestrictionsConfigurationParameterValue?.macOSRestriction instanceof DeviceEnrollmentPlatformRestrictionImpl? deviceEnrollmentPlatformRestrictionsConfigurationParameterValue?.macOSRestriction:new DeviceEnrollmentPlatformRestrictionImpl(deviceEnrollmentPlatformRestrictionsConfigurationParameterValue?.macOSRestriction);
        this.windowsMobileRestriction = deviceEnrollmentPlatformRestrictionsConfigurationParameterValue?.windowsMobileRestriction instanceof DeviceEnrollmentPlatformRestrictionImpl? deviceEnrollmentPlatformRestrictionsConfigurationParameterValue?.windowsMobileRestriction:new DeviceEnrollmentPlatformRestrictionImpl(deviceEnrollmentPlatformRestrictionsConfigurationParameterValue?.windowsMobileRestriction);
        this.windowsRestriction = deviceEnrollmentPlatformRestrictionsConfigurationParameterValue?.windowsRestriction instanceof DeviceEnrollmentPlatformRestrictionImpl? deviceEnrollmentPlatformRestrictionsConfigurationParameterValue?.windowsRestriction:new DeviceEnrollmentPlatformRestrictionImpl(deviceEnrollmentPlatformRestrictionsConfigurationParameterValue?.windowsRestriction);
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.androidRestriction){
            writer.writeObjectValue<DeviceEnrollmentPlatformRestrictionImpl>("androidRestriction", new DeviceEnrollmentPlatformRestrictionImpl(this.androidRestriction));
        }
        if(this.iosRestriction){
            writer.writeObjectValue<DeviceEnrollmentPlatformRestrictionImpl>("iosRestriction", new DeviceEnrollmentPlatformRestrictionImpl(this.iosRestriction));
        }
        if(this.macOSRestriction){
            writer.writeObjectValue<DeviceEnrollmentPlatformRestrictionImpl>("macOSRestriction", new DeviceEnrollmentPlatformRestrictionImpl(this.macOSRestriction));
        }
        if(this.windowsMobileRestriction){
            writer.writeObjectValue<DeviceEnrollmentPlatformRestrictionImpl>("windowsMobileRestriction", new DeviceEnrollmentPlatformRestrictionImpl(this.windowsMobileRestriction));
        }
        if(this.windowsRestriction){
            writer.writeObjectValue<DeviceEnrollmentPlatformRestrictionImpl>("windowsRestriction", new DeviceEnrollmentPlatformRestrictionImpl(this.windowsRestriction));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
