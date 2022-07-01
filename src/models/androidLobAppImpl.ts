import {AndroidLobApp} from './androidLobApp';
import {AndroidMinimumOperatingSystem} from './androidMinimumOperatingSystem';
import {createAndroidMinimumOperatingSystemFromDiscriminatorValue} from './createAndroidMinimumOperatingSystemFromDiscriminatorValue';
import {AndroidMinimumOperatingSystemImpl, MobileLobAppImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AndroidLobAppImpl extends MobileLobAppImpl implements AndroidLobApp {
    /** The value for the minimum applicable operating system. */
    private _minimumSupportedOperatingSystem?: AndroidMinimumOperatingSystem | undefined;
    /** The package identifier. */
    private _packageId?: string | undefined;
    /** The version code of Android Line of Business (LoB) app. */
    private _versionCode?: string | undefined;
    /** The version name of Android Line of Business (LoB) app. */
    private _versionName?: string | undefined;
    /**
     * Instantiates a new AndroidLobApp and sets the default values.
     * @param androidLobAppParameterValue 
     */
    public constructor(androidLobAppParameterValue?: AndroidLobApp | undefined) {
        super(androidLobAppParameterValue);
        this._minimumSupportedOperatingSystem = androidLobAppParameterValue?.minimumSupportedOperatingSystem;
        this._packageId = androidLobAppParameterValue?.packageId;
        this._versionCode = androidLobAppParameterValue?.versionCode;
        this._versionName = androidLobAppParameterValue?.versionName;
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
     * Gets the minimumSupportedOperatingSystem property value. The value for the minimum applicable operating system.
     * @returns a AndroidMinimumOperatingSystemInterface
     */
    public get minimumSupportedOperatingSystem() {
        return this._minimumSupportedOperatingSystem;
    };
    /**
     * Sets the minimumSupportedOperatingSystem property value. The value for the minimum applicable operating system.
     * @param value Value to set for the minimumSupportedOperatingSystem property.
     */
    public set minimumSupportedOperatingSystem(value: AndroidMinimumOperatingSystem | undefined) {
        if(value) {
            this._minimumSupportedOperatingSystem = value instanceof AndroidMinimumOperatingSystemImpl? value as AndroidMinimumOperatingSystemImpl: new AndroidMinimumOperatingSystemImpl(value);
        }
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
        if(this.minimumSupportedOperatingSystem){
            writer.writeObjectValue<AndroidMinimumOperatingSystemImpl>("minimumSupportedOperatingSystem", (this.minimumSupportedOperatingSystem instanceof AndroidMinimumOperatingSystemImpl? this.minimumSupportedOperatingSystem as AndroidMinimumOperatingSystemImpl: new AndroidMinimumOperatingSystemImpl(this.minimumSupportedOperatingSystem)));
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
        if(value) {
            this._versionCode = value;
        }
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
        if(value) {
            this._versionName = value;
        }
    };
}
