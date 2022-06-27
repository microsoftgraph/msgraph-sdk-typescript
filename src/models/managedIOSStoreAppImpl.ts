import {createIosDeviceTypeFromDiscriminatorValue} from './createIosDeviceTypeFromDiscriminatorValue';
import {createIosMinimumOperatingSystemFromDiscriminatorValue} from './createIosMinimumOperatingSystemFromDiscriminatorValue';
import {IosDeviceTypeImpl, IosMinimumOperatingSystemImpl, ManagedAppImpl} from './index';
import {IosDeviceType} from './iosDeviceType';
import {IosMinimumOperatingSystem} from './iosMinimumOperatingSystem';
import {ManagedIOSStoreApp} from './managedIOSStoreApp';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ManagedIOSStoreAppImpl extends ManagedAppImpl implements ManagedIOSStoreApp {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Contains properties of the possible iOS device types the mobile app can run on. */
    public applicableDeviceType?: IosDeviceType | undefined;
    /** The Apple AppStoreUrl. */
    public appStoreUrl?: string | undefined;
    /** The app's Bundle ID. */
    public bundleId?: string | undefined;
    /** Contains properties of the minimum operating system required for an iOS mobile app. */
    public minimumSupportedOperatingSystem?: IosMinimumOperatingSystem | undefined;
    /**
     * Instantiates a new ManagedIOSStoreApp and sets the default values.
     * @param managedIOSStoreAppParameterValue 
     */
    public constructor(managedIOSStoreAppParameterValue?: ManagedIOSStoreApp | undefined) {
        super(managedIOSStoreAppParameterValue);
        this.additionalData = managedIOSStoreAppParameterValue?.additionalData ? managedIOSStoreAppParameterValue?.additionalData! : {};
        this.applicableDeviceType = managedIOSStoreAppParameterValue?.applicableDeviceType instanceof IosDeviceTypeImpl? managedIOSStoreAppParameterValue?.applicableDeviceType:new IosDeviceTypeImpl(managedIOSStoreAppParameterValue?.applicableDeviceType);
        this.appStoreUrl = managedIOSStoreAppParameterValue?.appStoreUrl;
        this.bundleId = managedIOSStoreAppParameterValue?.bundleId;
        this.minimumSupportedOperatingSystem = managedIOSStoreAppParameterValue?.minimumSupportedOperatingSystem instanceof IosMinimumOperatingSystemImpl? managedIOSStoreAppParameterValue?.minimumSupportedOperatingSystem:new IosMinimumOperatingSystemImpl(managedIOSStoreAppParameterValue?.minimumSupportedOperatingSystem);
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
        writer.writeAdditionalData(this.additionalData);
    };
}
