import {createMacOSLobChildAppFromDiscriminatorValue} from './createMacOSLobChildAppFromDiscriminatorValue';
import {createMacOSMinimumOperatingSystemFromDiscriminatorValue} from './createMacOSMinimumOperatingSystemFromDiscriminatorValue';
import {MacOSLobChildApp, MacOSMinimumOperatingSystem, MobileLobApp} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MacOSLobApp extends MobileLobApp implements Parsable {
    /** The build number of the package. This should match the package CFBundleShortVersionString of the .pkg file. */
    private _buildNumber?: string | undefined;
    /** The primary bundleId of the package. */
    private _bundleId?: string | undefined;
    /** List of ComplexType macOSLobChildApp objects. Represents the apps expected to be installed by the package. */
    private _childApps?: MacOSLobChildApp[] | undefined;
    /** When TRUE, indicates that the app's version will NOT be used to detect if the app is installed on a device. When FALSE, indicates that the app's version will be used to detect if the app is installed on a device. Set this to true for apps that use a self update feature. */
    private _ignoreVersionDetection?: boolean | undefined;
    /** When TRUE, indicates that the app will be installed as managed (requires macOS 11.0 and other managed package restrictions). When FALSE, indicates that the app will be installed as unmanaged. */
    private _installAsManaged?: boolean | undefined;
    /** The MD5 hash codes. This is empty if the package was uploaded directly. If the Intune App Wrapping Tool is used to create a .intunemac, this value can be found inside the Detection.xml file. */
    private _md5Hash?: string[] | undefined;
    /** The chunk size for MD5 hash. This is '0' or empty if the package was uploaded directly. If the Intune App Wrapping Tool is used to create a .intunemac, this value can be found inside the Detection.xml file. */
    private _md5HashChunkSize?: number | undefined;
    /** ComplexType macOSMinimumOperatingSystem that indicates the minimum operating system applicable for the application. */
    private _minimumSupportedOperatingSystem?: MacOSMinimumOperatingSystem | undefined;
    /** The version number of the package. This should match the package CFBundleVersion in the packageinfo file. */
    private _versionNumber?: string | undefined;
    /**
     * Gets the buildNumber property value. The build number of the package. This should match the package CFBundleShortVersionString of the .pkg file.
     * @returns a string
     */
    public get buildNumber() {
        return this._buildNumber;
    };
    /**
     * Sets the buildNumber property value. The build number of the package. This should match the package CFBundleShortVersionString of the .pkg file.
     * @param value Value to set for the buildNumber property.
     */
    public set buildNumber(value: string | undefined) {
        this._buildNumber = value;
    };
    /**
     * Gets the bundleId property value. The primary bundleId of the package.
     * @returns a string
     */
    public get bundleId() {
        return this._bundleId;
    };
    /**
     * Sets the bundleId property value. The primary bundleId of the package.
     * @param value Value to set for the bundleId property.
     */
    public set bundleId(value: string | undefined) {
        this._bundleId = value;
    };
    /**
     * Gets the childApps property value. List of ComplexType macOSLobChildApp objects. Represents the apps expected to be installed by the package.
     * @returns a macOSLobChildApp
     */
    public get childApps() {
        return this._childApps;
    };
    /**
     * Sets the childApps property value. List of ComplexType macOSLobChildApp objects. Represents the apps expected to be installed by the package.
     * @param value Value to set for the childApps property.
     */
    public set childApps(value: MacOSLobChildApp[] | undefined) {
        this._childApps = value;
    };
    /**
     * Instantiates a new MacOSLobApp and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.macOSLobApp";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "buildNumber": n => { this.buildNumber = n.getStringValue(); },
            "bundleId": n => { this.bundleId = n.getStringValue(); },
            "childApps": n => { this.childApps = n.getCollectionOfObjectValues<MacOSLobChildApp>(createMacOSLobChildAppFromDiscriminatorValue); },
            "ignoreVersionDetection": n => { this.ignoreVersionDetection = n.getBooleanValue(); },
            "installAsManaged": n => { this.installAsManaged = n.getBooleanValue(); },
            "md5Hash": n => { this.md5Hash = n.getCollectionOfPrimitiveValues<string>(); },
            "md5HashChunkSize": n => { this.md5HashChunkSize = n.getNumberValue(); },
            "minimumSupportedOperatingSystem": n => { this.minimumSupportedOperatingSystem = n.getObjectValue<MacOSMinimumOperatingSystem>(createMacOSMinimumOperatingSystemFromDiscriminatorValue); },
            "versionNumber": n => { this.versionNumber = n.getStringValue(); },
        };
    };
    /**
     * Gets the ignoreVersionDetection property value. When TRUE, indicates that the app's version will NOT be used to detect if the app is installed on a device. When FALSE, indicates that the app's version will be used to detect if the app is installed on a device. Set this to true for apps that use a self update feature.
     * @returns a boolean
     */
    public get ignoreVersionDetection() {
        return this._ignoreVersionDetection;
    };
    /**
     * Sets the ignoreVersionDetection property value. When TRUE, indicates that the app's version will NOT be used to detect if the app is installed on a device. When FALSE, indicates that the app's version will be used to detect if the app is installed on a device. Set this to true for apps that use a self update feature.
     * @param value Value to set for the ignoreVersionDetection property.
     */
    public set ignoreVersionDetection(value: boolean | undefined) {
        this._ignoreVersionDetection = value;
    };
    /**
     * Gets the installAsManaged property value. When TRUE, indicates that the app will be installed as managed (requires macOS 11.0 and other managed package restrictions). When FALSE, indicates that the app will be installed as unmanaged.
     * @returns a boolean
     */
    public get installAsManaged() {
        return this._installAsManaged;
    };
    /**
     * Sets the installAsManaged property value. When TRUE, indicates that the app will be installed as managed (requires macOS 11.0 and other managed package restrictions). When FALSE, indicates that the app will be installed as unmanaged.
     * @param value Value to set for the installAsManaged property.
     */
    public set installAsManaged(value: boolean | undefined) {
        this._installAsManaged = value;
    };
    /**
     * Gets the md5Hash property value. The MD5 hash codes. This is empty if the package was uploaded directly. If the Intune App Wrapping Tool is used to create a .intunemac, this value can be found inside the Detection.xml file.
     * @returns a string
     */
    public get md5Hash() {
        return this._md5Hash;
    };
    /**
     * Sets the md5Hash property value. The MD5 hash codes. This is empty if the package was uploaded directly. If the Intune App Wrapping Tool is used to create a .intunemac, this value can be found inside the Detection.xml file.
     * @param value Value to set for the md5Hash property.
     */
    public set md5Hash(value: string[] | undefined) {
        this._md5Hash = value;
    };
    /**
     * Gets the md5HashChunkSize property value. The chunk size for MD5 hash. This is '0' or empty if the package was uploaded directly. If the Intune App Wrapping Tool is used to create a .intunemac, this value can be found inside the Detection.xml file.
     * @returns a integer
     */
    public get md5HashChunkSize() {
        return this._md5HashChunkSize;
    };
    /**
     * Sets the md5HashChunkSize property value. The chunk size for MD5 hash. This is '0' or empty if the package was uploaded directly. If the Intune App Wrapping Tool is used to create a .intunemac, this value can be found inside the Detection.xml file.
     * @param value Value to set for the md5HashChunkSize property.
     */
    public set md5HashChunkSize(value: number | undefined) {
        this._md5HashChunkSize = value;
    };
    /**
     * Gets the minimumSupportedOperatingSystem property value. ComplexType macOSMinimumOperatingSystem that indicates the minimum operating system applicable for the application.
     * @returns a macOSMinimumOperatingSystem
     */
    public get minimumSupportedOperatingSystem() {
        return this._minimumSupportedOperatingSystem;
    };
    /**
     * Sets the minimumSupportedOperatingSystem property value. ComplexType macOSMinimumOperatingSystem that indicates the minimum operating system applicable for the application.
     * @param value Value to set for the minimumSupportedOperatingSystem property.
     */
    public set minimumSupportedOperatingSystem(value: MacOSMinimumOperatingSystem | undefined) {
        this._minimumSupportedOperatingSystem = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("buildNumber", this.buildNumber);
        writer.writeStringValue("bundleId", this.bundleId);
        writer.writeCollectionOfObjectValues<MacOSLobChildApp>("childApps", this.childApps);
        writer.writeBooleanValue("ignoreVersionDetection", this.ignoreVersionDetection);
        writer.writeBooleanValue("installAsManaged", this.installAsManaged);
        writer.writeCollectionOfPrimitiveValues<string>("md5Hash", this.md5Hash);
        writer.writeNumberValue("md5HashChunkSize", this.md5HashChunkSize);
        writer.writeObjectValue<MacOSMinimumOperatingSystem>("minimumSupportedOperatingSystem", this.minimumSupportedOperatingSystem);
        writer.writeStringValue("versionNumber", this.versionNumber);
    };
    /**
     * Gets the versionNumber property value. The version number of the package. This should match the package CFBundleVersion in the packageinfo file.
     * @returns a string
     */
    public get versionNumber() {
        return this._versionNumber;
    };
    /**
     * Sets the versionNumber property value. The version number of the package. This should match the package CFBundleVersion in the packageinfo file.
     * @param value Value to set for the versionNumber property.
     */
    public set versionNumber(value: string | undefined) {
        this._versionNumber = value;
    };
}
