import {AndroidMinimumOperatingSystem} from './androidMinimumOperatingSystem';
import {createAndroidMinimumOperatingSystemFromDiscriminatorValue} from './createAndroidMinimumOperatingSystemFromDiscriminatorValue';
import {AndroidMinimumOperatingSystemImpl, ManagedMobileLobAppImpl} from './index';
import {ManagedAndroidLobApp} from './managedAndroidLobApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ManagedAndroidLobAppImpl extends ManagedMobileLobAppImpl implements ManagedAndroidLobApp {
    /** The value for the minimum applicable operating system. */
    public minimumSupportedOperatingSystem?: AndroidMinimumOperatingSystem | undefined;
    /** The package identifier. */
    public packageId?: string | undefined;
    /** The version code of managed Android Line of Business (LoB) app. */
    public versionCode?: string | undefined;
    /** The version name of managed Android Line of Business (LoB) app. */
    public versionName?: string | undefined;
    /**
     * Instantiates a new ManagedAndroidLobApp and sets the default values.
     * @param managedAndroidLobAppParameterValue 
     */
    public constructor(managedAndroidLobAppParameterValue?: ManagedAndroidLobApp | undefined) {
        super(managedAndroidLobAppParameterValue);
        this.minimumSupportedOperatingSystem = managedAndroidLobAppParameterValue?.minimumSupportedOperatingSystem instanceof AndroidMinimumOperatingSystemImpl? managedAndroidLobAppParameterValue?.minimumSupportedOperatingSystem:new AndroidMinimumOperatingSystemImpl(managedAndroidLobAppParameterValue?.minimumSupportedOperatingSystem);
        this.packageId = managedAndroidLobAppParameterValue?.packageId;
        this.versionCode = managedAndroidLobAppParameterValue?.versionCode;
        this.versionName = managedAndroidLobAppParameterValue?.versionName;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "minimumSupportedOperatingSystem": n => { this.minimumSupportedOperatingSystem = n.getObjectValue<AndroidMinimumOperatingSystemImpl>(createAndroidMinimumOperatingSystemFromDiscriminatorValue); },
            "packageId": n => { this.packageId = n.getStringValue(); },
            "versionCode": n => { this.versionCode = n.getStringValue(); },
            "versionName": n => { this.versionName = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.minimumSupportedOperatingSystem){
            writer.writeObjectValue<AndroidMinimumOperatingSystemImpl>("minimumSupportedOperatingSystem", new AndroidMinimumOperatingSystemImpl(this.minimumSupportedOperatingSystem));
        }
        if(this.packageId){
            writer.writeStringValue("packageId", this.packageId);
        }
        if(this.versionCode){
            writer.writeStringValue("versionCode", this.versionCode);
        }
        if(this.versionName){
            writer.writeStringValue("versionName", this.versionName);
        }
    };
}
