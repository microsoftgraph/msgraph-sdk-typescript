import {createIosDeviceTypeFromDiscriminatorValue} from './createIosDeviceTypeFromDiscriminatorValue';
import {createIosMinimumOperatingSystemFromDiscriminatorValue} from './createIosMinimumOperatingSystemFromDiscriminatorValue';
import {IosDeviceTypeImpl, IosMinimumOperatingSystemImpl, MobileLobAppImpl} from './index';
import {IosDeviceType} from './iosDeviceType';
import {IosLobApp} from './iosLobApp';
import {IosMinimumOperatingSystem} from './iosMinimumOperatingSystem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IosLobAppImpl extends MobileLobAppImpl implements IosLobApp {
    /** Contains properties of the possible iOS device types the mobile app can run on. */
    public applicableDeviceType?: IosDeviceType | undefined;
    /** The build number of iOS Line of Business (LoB) app. */
    public buildNumber?: string | undefined;
    /** The Identity Name. */
    public bundleId?: string | undefined;
    /** The expiration time. */
    public expirationDateTime?: Date | undefined;
    /** The value for the minimum applicable operating system. */
    public minimumSupportedOperatingSystem?: IosMinimumOperatingSystem | undefined;
    /** The version number of iOS Line of Business (LoB) app. */
    public versionNumber?: string | undefined;
    /**
     * Instantiates a new IosLobApp and sets the default values.
     * @param iosLobAppParameterValue 
     */
    public constructor(iosLobAppParameterValue?: IosLobApp | undefined) {
        super(iosLobAppParameterValue);
        this.applicableDeviceType = iosLobAppParameterValue?.applicableDeviceType;
        this.buildNumber = iosLobAppParameterValue?.buildNumber;
        this.bundleId = iosLobAppParameterValue?.bundleId;
        this.expirationDateTime = iosLobAppParameterValue?.expirationDateTime;
        this.minimumSupportedOperatingSystem = iosLobAppParameterValue?.minimumSupportedOperatingSystem;
        this.versionNumber = iosLobAppParameterValue?.versionNumber;
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
