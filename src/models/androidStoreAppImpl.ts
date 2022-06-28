import {AndroidMinimumOperatingSystem} from './androidMinimumOperatingSystem';
import {AndroidStoreApp} from './androidStoreApp';
import {createAndroidMinimumOperatingSystemFromDiscriminatorValue} from './createAndroidMinimumOperatingSystemFromDiscriminatorValue';
import {AndroidMinimumOperatingSystemImpl, MobileAppImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AndroidStoreAppImpl extends MobileAppImpl implements AndroidStoreApp {
    /** The Android app store URL. */
    public appStoreUrl?: string | undefined;
    /** The value for the minimum applicable operating system. */
    public minimumSupportedOperatingSystem?: AndroidMinimumOperatingSystem | undefined;
    /** The package identifier. */
    public packageId?: string | undefined;
    /**
     * Instantiates a new AndroidStoreApp and sets the default values.
     * @param androidStoreAppParameterValue 
     */
    public constructor(androidStoreAppParameterValue?: AndroidStoreApp | undefined) {
        super(androidStoreAppParameterValue);
        this.appStoreUrl = androidStoreAppParameterValue?.appStoreUrl;
        this.minimumSupportedOperatingSystem = androidStoreAppParameterValue?.minimumSupportedOperatingSystem;
        this.packageId = androidStoreAppParameterValue?.packageId;
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
