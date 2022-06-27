import {AndroidMinimumOperatingSystem} from './androidMinimumOperatingSystem';
import {createAndroidMinimumOperatingSystemFromDiscriminatorValue} from './createAndroidMinimumOperatingSystemFromDiscriminatorValue';
import {AndroidMinimumOperatingSystemImpl, ManagedAppImpl} from './index';
import {ManagedAndroidStoreApp} from './managedAndroidStoreApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ManagedAndroidStoreAppImpl extends ManagedAppImpl implements ManagedAndroidStoreApp {
    /** The Android AppStoreUrl. */
    public appStoreUrl?: string | undefined;
    /** Contains properties for the minimum operating system required for an Android mobile app. */
    public minimumSupportedOperatingSystem?: AndroidMinimumOperatingSystem | undefined;
    /** The app's package ID. */
    public packageId?: string | undefined;
    /**
     * Instantiates a new ManagedAndroidStoreApp and sets the default values.
     * @param managedAndroidStoreAppParameterValue 
     */
    public constructor(managedAndroidStoreAppParameterValue?: ManagedAndroidStoreApp | undefined) {
        super(managedAndroidStoreAppParameterValue);
        this.appStoreUrl = managedAndroidStoreAppParameterValue?.appStoreUrl;
        this.minimumSupportedOperatingSystem = managedAndroidStoreAppParameterValue?.minimumSupportedOperatingSystem instanceof AndroidMinimumOperatingSystemImpl? managedAndroidStoreAppParameterValue?.minimumSupportedOperatingSystem:new AndroidMinimumOperatingSystemImpl(managedAndroidStoreAppParameterValue?.minimumSupportedOperatingSystem);
        this.packageId = managedAndroidStoreAppParameterValue?.packageId;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "appStoreUrl": n => { this.appStoreUrl = n.getStringValue(); },
            "minimumSupportedOperatingSystem": n => { this.minimumSupportedOperatingSystem = n.getObjectValue<AndroidMinimumOperatingSystemImpl>(createAndroidMinimumOperatingSystemFromDiscriminatorValue); },
            "packageId": n => { this.packageId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.appStoreUrl){
            writer.writeStringValue("appStoreUrl", this.appStoreUrl);
        }
        if(this.minimumSupportedOperatingSystem){
            writer.writeObjectValue<AndroidMinimumOperatingSystemImpl>("minimumSupportedOperatingSystem", new AndroidMinimumOperatingSystemImpl(this.minimumSupportedOperatingSystem));
        }
        if(this.packageId){
            writer.writeStringValue("packageId", this.packageId);
        }
    };
}
