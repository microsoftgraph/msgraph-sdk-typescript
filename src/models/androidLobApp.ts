import {AdminMember1, AndroidMinimumOperatingSystem, MobileLobApp} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AndroidLobApp extends MobileLobApp implements Parsable {
    /** The value for the minimum applicable operating system. */
    private _minimumSupportedOperatingSystem?: AndroidMinimumOperatingSystem | AdminMember1 | undefined;
    /** The package identifier. */
    private _packageId?: string | undefined;
    /** The version code of Android Line of Business (LoB) app. */
    private _versionCode?: string | undefined;
    /** The version name of Android Line of Business (LoB) app. */
    private _versionName?: string | undefined;
    /**
     * Instantiates a new AndroidLobApp and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "minimumSupportedOperatingSystem": n => { this.minimumSupportedOperatingSystem = n.getObjectValue<AndroidMinimumOperatingSystem>(createAndroidMinimumOperatingSystemFromDiscriminatorValue); },
            "packageId": n => { this.packageId = n.getStringValue(); },
            "versionCode": n => { this.versionCode = n.getStringValue(); },
            "versionName": n => { this.versionName = n.getStringValue(); },
        };
    };
    /**
     * Gets the minimumSupportedOperatingSystem property value. The value for the minimum applicable operating system.
     * @returns a admin
     */
    public get minimumSupportedOperatingSystem() {
        return this._minimumSupportedOperatingSystem;
    };
    /**
     * Sets the minimumSupportedOperatingSystem property value. The value for the minimum applicable operating system.
     * @param value Value to set for the minimumSupportedOperatingSystem property.
     */
    public set minimumSupportedOperatingSystem(value: AndroidMinimumOperatingSystem | AdminMember1 | undefined) {
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
        writer.writeObjectValue<AndroidMinimumOperatingSystem>("minimumSupportedOperatingSystem", this.minimumSupportedOperatingSystem);
        writer.writeStringValue("packageId", this.packageId);
        writer.writeStringValue("versionCode", this.versionCode);
        writer.writeStringValue("versionName", this.versionName);
    };
    /**
     * Gets the versionCode property value. The version code of Android Line of Business (LoB) app.
     * @returns a string
     */
    public get versionCode() {
        return this._versionCode;
    };
    /**
     * Sets the versionCode property value. The version code of Android Line of Business (LoB) app.
     * @param value Value to set for the versionCode property.
     */
    public set versionCode(value: string | undefined) {
        this._versionCode = value;
    };
    /**
     * Gets the versionName property value. The version name of Android Line of Business (LoB) app.
     * @returns a string
     */
    public get versionName() {
        return this._versionName;
    };
    /**
     * Sets the versionName property value. The version name of Android Line of Business (LoB) app.
     * @param value Value to set for the versionName property.
     */
    public set versionName(value: string | undefined) {
        this._versionName = value;
    };
}
