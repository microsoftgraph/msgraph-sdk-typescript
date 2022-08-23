import {createAndroidMinimumOperatingSystemFromDiscriminatorValue} from './createAndroidMinimumOperatingSystemFromDiscriminatorValue';
import {AndroidMinimumOperatingSystem, MobileApp} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AndroidStoreApp extends MobileApp implements Parsable {
    /** The Android app store URL. */
    private _appStoreUrl?: string | undefined;
    /** The value for the minimum applicable operating system. */
    private _minimumSupportedOperatingSystem?: AndroidMinimumOperatingSystem | undefined;
    /** The package identifier. */
    private _packageId?: string | undefined;
    /**
     * Gets the appStoreUrl property value. The Android app store URL.
     * @returns a string
     */
    public get appStoreUrl() {
        return this._appStoreUrl;
    };
    /**
     * Sets the appStoreUrl property value. The Android app store URL.
     * @param value Value to set for the appStoreUrl property.
     */
    public set appStoreUrl(value: string | undefined) {
        this._appStoreUrl = value;
    };
    /**
     * Instantiates a new AndroidStoreApp and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.androidStoreApp";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "appStoreUrl": n => { this.appStoreUrl = n.getStringValue(); },
            "minimumSupportedOperatingSystem": n => { this.minimumSupportedOperatingSystem = n.getObjectValue<AndroidMinimumOperatingSystem>(createAndroidMinimumOperatingSystemFromDiscriminatorValue); },
            "packageId": n => { this.packageId = n.getStringValue(); },
        };
    };
    /**
     * Gets the minimumSupportedOperatingSystem property value. The value for the minimum applicable operating system.
     * @returns a androidMinimumOperatingSystem
     */
    public get minimumSupportedOperatingSystem() {
        return this._minimumSupportedOperatingSystem;
    };
    /**
     * Sets the minimumSupportedOperatingSystem property value. The value for the minimum applicable operating system.
     * @param value Value to set for the minimumSupportedOperatingSystem property.
     */
    public set minimumSupportedOperatingSystem(value: AndroidMinimumOperatingSystem | undefined) {
        this._minimumSupportedOperatingSystem = value;
    };
    /**
     * Gets the packageId property value. The package identifier.
     * @returns a string
     */
    public get packageId() {
        return this._packageId;
    };
    /**
     * Sets the packageId property value. The package identifier.
     * @param value Value to set for the packageId property.
     */
    public set packageId(value: string | undefined) {
        this._packageId = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("appStoreUrl", this.appStoreUrl);
        writer.writeObjectValue<AndroidMinimumOperatingSystem>("minimumSupportedOperatingSystem", this.minimumSupportedOperatingSystem);
        writer.writeStringValue("packageId", this.packageId);
    };
}
