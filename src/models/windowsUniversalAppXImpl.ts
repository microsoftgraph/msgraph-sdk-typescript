import {createWindowsMinimumOperatingSystemFromDiscriminatorValue} from './createWindowsMinimumOperatingSystemFromDiscriminatorValue';
import {MobileLobAppImpl, WindowsMinimumOperatingSystemImpl} from './index';
import {WindowsArchitecture} from './windowsArchitecture';
import {WindowsDeviceType} from './windowsDeviceType';
import {WindowsMinimumOperatingSystem} from './windowsMinimumOperatingSystem';
import {WindowsUniversalAppX} from './windowsUniversalAppX';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WindowsUniversalAppXImpl extends MobileLobAppImpl implements WindowsUniversalAppX {
    /** The Windows architecture(s) for which this app can run on. Possible values are: none, x86, x64, arm, neutral, arm64. */
    public applicableArchitectures?: WindowsArchitecture | undefined;
    /** The Windows device type(s) for which this app can run on. Possible values are: none, desktop, mobile, holographic, team. */
    public applicableDeviceTypes?: WindowsDeviceType | undefined;
    /** The Identity Name. */
    public identityName?: string | undefined;
    /** The Identity Publisher Hash. */
    public identityPublisherHash?: string | undefined;
    /** The Identity Resource Identifier. */
    public identityResourceIdentifier?: string | undefined;
    /** The identity version. */
    public identityVersion?: string | undefined;
    /** Whether or not the app is a bundle. */
    public isBundle?: boolean | undefined;
    /** The minimum operating system required for a Windows mobile app. */
    public minimumSupportedOperatingSystem?: WindowsMinimumOperatingSystem | undefined;
    /**
     * Instantiates a new WindowsUniversalAppX and sets the default values.
     * @param windowsUniversalAppXParameterValue 
     */
    public constructor(windowsUniversalAppXParameterValue?: WindowsUniversalAppX | undefined) {
        super(windowsUniversalAppXParameterValue);
        this.applicableArchitectures = windowsUniversalAppXParameterValue?.applicableArchitectures;
        this.applicableDeviceTypes = windowsUniversalAppXParameterValue?.applicableDeviceTypes;
        this.identityName = windowsUniversalAppXParameterValue?.identityName;
        this.identityPublisherHash = windowsUniversalAppXParameterValue?.identityPublisherHash;
        this.identityResourceIdentifier = windowsUniversalAppXParameterValue?.identityResourceIdentifier;
        this.identityVersion = windowsUniversalAppXParameterValue?.identityVersion;
        this.isBundle = windowsUniversalAppXParameterValue?.isBundle;
        this.minimumSupportedOperatingSystem = windowsUniversalAppXParameterValue?.minimumSupportedOperatingSystem;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "applicableArchitectures": n => { this.applicableArchitectures = n.getEnumValue<WindowsArchitecture>(WindowsArchitecture); },
            "applicableDeviceTypes": n => { this.applicableDeviceTypes = n.getEnumValue<WindowsDeviceType>(WindowsDeviceType); },
            "identityName": n => { this.identityName = n.getStringValue(); },
            "identityPublisherHash": n => { this.identityPublisherHash = n.getStringValue(); },
            "identityResourceIdentifier": n => { this.identityResourceIdentifier = n.getStringValue(); },
            "identityVersion": n => { this.identityVersion = n.getStringValue(); },
            "isBundle": n => { this.isBundle = n.getBooleanValue(); },
            "minimumSupportedOperatingSystem": n => { this.minimumSupportedOperatingSystem = n.getObjectValue<WindowsMinimumOperatingSystemImpl>(createWindowsMinimumOperatingSystemFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.applicableArchitectures){
            writer.writeEnumValue<WindowsArchitecture>("applicableArchitectures", this.applicableArchitectures);
        }
        if(this.applicableDeviceTypes){
            writer.writeEnumValue<WindowsDeviceType>("applicableDeviceTypes", this.applicableDeviceTypes);
        }
        if(this.identityName){
            writer.writeStringValue("identityName", this.identityName);
        }
        if(this.identityPublisherHash){
            writer.writeStringValue("identityPublisherHash", this.identityPublisherHash);
        }
        if(this.identityResourceIdentifier){
            writer.writeStringValue("identityResourceIdentifier", this.identityResourceIdentifier);
        }
        if(this.identityVersion){
            writer.writeStringValue("identityVersion", this.identityVersion);
        }
        if(this.isBundle){
            writer.writeBooleanValue("isBundle", this.isBundle);
        }
        if(this.minimumSupportedOperatingSystem){
            writer.writeObjectValue<WindowsMinimumOperatingSystemImpl>("minimumSupportedOperatingSystem", new WindowsMinimumOperatingSystemImpl(this.minimumSupportedOperatingSystem));
        }
    };
}
