import {createIosDeviceTypeFromDiscriminatorValue} from './createIosDeviceTypeFromDiscriminatorValue';
import {createIosMinimumOperatingSystemFromDiscriminatorValue} from './createIosMinimumOperatingSystemFromDiscriminatorValue';
import {IosDeviceTypeImpl, IosMinimumOperatingSystemImpl, MobileAppImpl} from './index';
import {IosDeviceType} from './iosDeviceType';
import {IosMinimumOperatingSystem} from './iosMinimumOperatingSystem';
import {IosStoreApp} from './iosStoreApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IosStoreAppImpl extends MobileAppImpl implements IosStoreApp {
    /** Contains properties of the possible iOS device types the mobile app can run on. */
    public applicableDeviceType?: IosDeviceType | undefined;
    /** The Apple App Store URL */
    public appStoreUrl?: string | undefined;
    /** The Identity Name. */
    public bundleId?: string | undefined;
    /** The value for the minimum applicable operating system. */
    public minimumSupportedOperatingSystem?: IosMinimumOperatingSystem | undefined;
    /**
     * Instantiates a new IosStoreApp and sets the default values.
     * @param iosStoreAppParameterValue 
     */
    public constructor(iosStoreAppParameterValue?: IosStoreApp | undefined) {
        super(iosStoreAppParameterValue);
        this.applicableDeviceType = iosStoreAppParameterValue?.applicableDeviceType instanceof IosDeviceTypeImpl? iosStoreAppParameterValue?.applicableDeviceType:new IosDeviceTypeImpl(iosStoreAppParameterValue?.applicableDeviceType);
        this.appStoreUrl = iosStoreAppParameterValue?.appStoreUrl;
        this.bundleId = iosStoreAppParameterValue?.bundleId;
        this.minimumSupportedOperatingSystem = iosStoreAppParameterValue?.minimumSupportedOperatingSystem instanceof IosMinimumOperatingSystemImpl? iosStoreAppParameterValue?.minimumSupportedOperatingSystem:new IosMinimumOperatingSystemImpl(iosStoreAppParameterValue?.minimumSupportedOperatingSystem);
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "applicableDeviceType": n => { this.applicableDeviceType = n.getObjectValue<IosDeviceTypeImpl>(createIosDeviceTypeFromDiscriminatorValue); },
            "appStoreUrl": n => { this.appStoreUrl = n.getStringValue(); },
            "bundleId": n => { this.bundleId = n.getStringValue(); },
            "minimumSupportedOperatingSystem": n => { this.minimumSupportedOperatingSystem = n.getObjectValue<IosMinimumOperatingSystemImpl>(createIosMinimumOperatingSystemFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.applicableDeviceType){
            writer.writeObjectValue<IosDeviceTypeImpl>("applicableDeviceType", new IosDeviceTypeImpl(this.applicableDeviceType));
        }
        if(this.appStoreUrl){
            writer.writeStringValue("appStoreUrl", this.appStoreUrl);
        }
        if(this.bundleId){
            writer.writeStringValue("bundleId", this.bundleId);
        }
        if(this.minimumSupportedOperatingSystem){
            writer.writeObjectValue<IosMinimumOperatingSystemImpl>("minimumSupportedOperatingSystem", new IosMinimumOperatingSystemImpl(this.minimumSupportedOperatingSystem));
        }
    };
}
