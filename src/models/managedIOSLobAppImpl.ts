import {createIosDeviceTypeFromDiscriminatorValue} from './createIosDeviceTypeFromDiscriminatorValue';
import {createIosMinimumOperatingSystemFromDiscriminatorValue} from './createIosMinimumOperatingSystemFromDiscriminatorValue';
import {IosDeviceTypeImpl, IosMinimumOperatingSystemImpl, ManagedMobileLobAppImpl} from './index';
import {IosDeviceType} from './iosDeviceType';
import {IosMinimumOperatingSystem} from './iosMinimumOperatingSystem';
import {ManagedIOSLobApp} from './managedIOSLobApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ManagedIOSLobAppImpl extends ManagedMobileLobAppImpl implements ManagedIOSLobApp {
    /** Contains properties of the possible iOS device types the mobile app can run on. */
    public applicableDeviceType?: IosDeviceType | undefined;
    /** The build number of managed iOS Line of Business (LoB) app. */
    public buildNumber?: string | undefined;
    /** The Identity Name. */
    public bundleId?: string | undefined;
    /** The expiration time. */
    public expirationDateTime?: Date | undefined;
    /** The value for the minimum applicable operating system. */
    public minimumSupportedOperatingSystem?: IosMinimumOperatingSystem | undefined;
    /** The version number of managed iOS Line of Business (LoB) app. */
    public versionNumber?: string | undefined;
    /**
     * Instantiates a new ManagedIOSLobApp and sets the default values.
     * @param managedIOSLobAppParameterValue 
     */
    public constructor(managedIOSLobAppParameterValue?: ManagedIOSLobApp | undefined) {
        super(managedIOSLobAppParameterValue);
        this.applicableDeviceType = managedIOSLobAppParameterValue?.applicableDeviceType instanceof IosDeviceTypeImpl? managedIOSLobAppParameterValue?.applicableDeviceType:new IosDeviceTypeImpl(managedIOSLobAppParameterValue?.applicableDeviceType);
        this.buildNumber = managedIOSLobAppParameterValue?.buildNumber;
        this.bundleId = managedIOSLobAppParameterValue?.bundleId;
        this.expirationDateTime = managedIOSLobAppParameterValue?.expirationDateTime;
        this.minimumSupportedOperatingSystem = managedIOSLobAppParameterValue?.minimumSupportedOperatingSystem instanceof IosMinimumOperatingSystemImpl? managedIOSLobAppParameterValue?.minimumSupportedOperatingSystem:new IosMinimumOperatingSystemImpl(managedIOSLobAppParameterValue?.minimumSupportedOperatingSystem);
        this.versionNumber = managedIOSLobAppParameterValue?.versionNumber;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "applicableDeviceType": n => { this.applicableDeviceType = n.getObjectValue<IosDeviceTypeImpl>(createIosDeviceTypeFromDiscriminatorValue); },
            "buildNumber": n => { this.buildNumber = n.getStringValue(); },
            "bundleId": n => { this.bundleId = n.getStringValue(); },
            "expirationDateTime": n => { this.expirationDateTime = n.getDateValue(); },
            "minimumSupportedOperatingSystem": n => { this.minimumSupportedOperatingSystem = n.getObjectValue<IosMinimumOperatingSystemImpl>(createIosMinimumOperatingSystemFromDiscriminatorValue); },
            "versionNumber": n => { this.versionNumber = n.getStringValue(); },
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
        if(this.buildNumber){
            writer.writeStringValue("buildNumber", this.buildNumber);
        }
        if(this.bundleId){
            writer.writeStringValue("bundleId", this.bundleId);
        }
        if(this.expirationDateTime){
            writer.writeDateValue("expirationDateTime", this.expirationDateTime);
        }
        if(this.minimumSupportedOperatingSystem){
            writer.writeObjectValue<IosMinimumOperatingSystemImpl>("minimumSupportedOperatingSystem", new IosMinimumOperatingSystemImpl(this.minimumSupportedOperatingSystem));
        }
        if(this.versionNumber){
            writer.writeStringValue("versionNumber", this.versionNumber);
        }
    };
}
