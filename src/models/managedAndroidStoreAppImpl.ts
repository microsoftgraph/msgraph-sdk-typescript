import {AndroidMinimumOperatingSystem} from './androidMinimumOperatingSystem';
import {createAndroidMinimumOperatingSystemFromDiscriminatorValue} from './createAndroidMinimumOperatingSystemFromDiscriminatorValue';
import {AndroidMinimumOperatingSystemImpl, ManagedAppImpl} from './index';
import {ManagedAndroidStoreApp} from './managedAndroidStoreApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ManagedAndroidStoreAppImpl extends ManagedAppImpl implements ManagedAndroidStoreApp {
    /** The Android AppStoreUrl. */
    private _appStoreUrl?: string | undefined;
    /** Contains properties for the minimum operating system required for an Android mobile app. */
    private _minimumSupportedOperatingSystem?: AndroidMinimumOperatingSystem | undefined;
    /** The app's package ID. */
    private _packageId?: string | undefined;
    /**
     * Gets the appStoreUrl property value. The Android AppStoreUrl.
     * @returns a string
     */
    public get appStoreUrl() {
        return this._appStoreUrl;
    };
    /**
     * Sets the appStoreUrl property value. The Android AppStoreUrl.
     * @param value Value to set for the appStoreUrl property.
     */
    public set appStoreUrl(value: string | undefined) {
        if(value) {
            this._appStoreUrl = value;
        }
    };
    /**
     * Instantiates a new ManagedAndroidStoreApp and sets the default values.
     * @param managedAndroidStoreAppParameterValue 
     */
    public constructor(managedAndroidStoreAppParameterValue?: ManagedAndroidStoreApp | undefined) {
        super(managedAndroidStoreAppParameterValue);
        this._appStoreUrl = managedAndroidStoreAppParameterValue?.appStoreUrl;
        this._minimumSupportedOperatingSystem = managedAndroidStoreAppParameterValue?.minimumSupportedOperatingSystem;
        this._packageId = managedAndroidStoreAppParameterValue?.packageId;
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
     * Gets the minimumSupportedOperatingSystem property value. Contains properties for the minimum operating system required for an Android mobile app.
     * @returns a AndroidMinimumOperatingSystemInterface
     */
    public get minimumSupportedOperatingSystem() {
        return this._minimumSupportedOperatingSystem;
    };
    /**
     * Sets the minimumSupportedOperatingSystem property value. Contains properties for the minimum operating system required for an Android mobile app.
     * @param value Value to set for the minimumSupportedOperatingSystem property.
     */
    public set minimumSupportedOperatingSystem(value: AndroidMinimumOperatingSystem | undefined) {
        if(value) {
            this._minimumSupportedOperatingSystem = value instanceof AndroidMinimumOperatingSystemImpl? value : new AndroidMinimumOperatingSystemImpl(value);
        }
    };
    /**
     * Gets the packageId property value. The app's package ID.
     * @returns a string
     */
    public get packageId() {
        return this._packageId;
    };
    /**
     * Sets the packageId property value. The app's package ID.
     * @param value Value to set for the packageId property.
     */
    public set packageId(value: string | undefined) {
        if(value) {
            this._packageId = value;
        }
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
            writer.writeObjectValue<AndroidMinimumOperatingSystemImpl>("minimumSupportedOperatingSystem", (!this.minimumSupportedOperatingSystem || this.minimumSupportedOperatingSystem instanceof AndroidMinimumOperatingSystemImpl? this.minimumSupportedOperatingSystem : new AndroidMinimumOperatingSystemImpl(this.minimumSupportedOperatingSystem)));
        }
        if(this.packageId){
            writer.writeStringValue("packageId", this.packageId);
        }
    };
}
