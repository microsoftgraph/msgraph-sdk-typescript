import {createWindowsMinimumOperatingSystemFromDiscriminatorValue} from './createWindowsMinimumOperatingSystemFromDiscriminatorValue';
import {MobileLobApp, WindowsMinimumOperatingSystem} from './index';
import {WindowsArchitecture} from './windowsArchitecture';
import {WindowsDeviceType} from './windowsDeviceType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WindowsUniversalAppX extends MobileLobApp implements Parsable {
    /** Contains properties for Windows architecture. */
    private _applicableArchitectures?: WindowsArchitecture | undefined;
    /** Contains properties for Windows device type. */
    private _applicableDeviceTypes?: WindowsDeviceType | undefined;
    /** The Identity Name. */
    private _identityName?: string | undefined;
    /** The Identity Publisher Hash. */
    private _identityPublisherHash?: string | undefined;
    /** The Identity Resource Identifier. */
    private _identityResourceIdentifier?: string | undefined;
    /** The identity version. */
    private _identityVersion?: string | undefined;
    /** Whether or not the app is a bundle. */
    private _isBundle?: boolean | undefined;
    /** The minimum operating system required for a Windows mobile app. */
    private _minimumSupportedOperatingSystem?: WindowsMinimumOperatingSystem | undefined;
    /**
     * Gets the applicableArchitectures property value. Contains properties for Windows architecture.
     * @returns a windowsArchitecture
     */
    public get applicableArchitectures() {
        return this._applicableArchitectures;
    };
    /**
     * Sets the applicableArchitectures property value. Contains properties for Windows architecture.
     * @param value Value to set for the applicableArchitectures property.
     */
    public set applicableArchitectures(value: WindowsArchitecture | undefined) {
        this._applicableArchitectures = value;
    };
    /**
     * Gets the applicableDeviceTypes property value. Contains properties for Windows device type.
     * @returns a windowsDeviceType
     */
    public get applicableDeviceTypes() {
        return this._applicableDeviceTypes;
    };
    /**
     * Sets the applicableDeviceTypes property value. Contains properties for Windows device type.
     * @param value Value to set for the applicableDeviceTypes property.
     */
    public set applicableDeviceTypes(value: WindowsDeviceType | undefined) {
        this._applicableDeviceTypes = value;
    };
    /**
     * Instantiates a new WindowsUniversalAppX and sets the default values.
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
            "applicableArchitectures": n => { this.applicableArchitectures = n.getEnumValue<WindowsArchitecture>(WindowsArchitecture); },
            "applicableDeviceTypes": n => { this.applicableDeviceTypes = n.getEnumValue<WindowsDeviceType>(WindowsDeviceType); },
            "identityName": n => { this.identityName = n.getStringValue(); },
            "identityPublisherHash": n => { this.identityPublisherHash = n.getStringValue(); },
            "identityResourceIdentifier": n => { this.identityResourceIdentifier = n.getStringValue(); },
            "identityVersion": n => { this.identityVersion = n.getStringValue(); },
            "isBundle": n => { this.isBundle = n.getBooleanValue(); },
            "minimumSupportedOperatingSystem": n => { this.minimumSupportedOperatingSystem = n.getObjectValue<WindowsMinimumOperatingSystem>(createWindowsMinimumOperatingSystemFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the identityName property value. The Identity Name.
     * @returns a string
     */
    public get identityName() {
        return this._identityName;
    };
    /**
     * Sets the identityName property value. The Identity Name.
     * @param value Value to set for the identityName property.
     */
    public set identityName(value: string | undefined) {
        this._identityName = value;
    };
    /**
     * Gets the identityPublisherHash property value. The Identity Publisher Hash.
     * @returns a string
     */
    public get identityPublisherHash() {
        return this._identityPublisherHash;
    };
    /**
     * Sets the identityPublisherHash property value. The Identity Publisher Hash.
     * @param value Value to set for the identityPublisherHash property.
     */
    public set identityPublisherHash(value: string | undefined) {
        this._identityPublisherHash = value;
    };
    /**
     * Gets the identityResourceIdentifier property value. The Identity Resource Identifier.
     * @returns a string
     */
    public get identityResourceIdentifier() {
        return this._identityResourceIdentifier;
    };
    /**
     * Sets the identityResourceIdentifier property value. The Identity Resource Identifier.
     * @param value Value to set for the identityResourceIdentifier property.
     */
    public set identityResourceIdentifier(value: string | undefined) {
        this._identityResourceIdentifier = value;
    };
    /**
     * Gets the identityVersion property value. The identity version.
     * @returns a string
     */
    public get identityVersion() {
        return this._identityVersion;
    };
    /**
     * Sets the identityVersion property value. The identity version.
     * @param value Value to set for the identityVersion property.
     */
    public set identityVersion(value: string | undefined) {
        this._identityVersion = value;
    };
    /**
     * Gets the isBundle property value. Whether or not the app is a bundle.
     * @returns a boolean
     */
    public get isBundle() {
        return this._isBundle;
    };
    /**
     * Sets the isBundle property value. Whether or not the app is a bundle.
     * @param value Value to set for the isBundle property.
     */
    public set isBundle(value: boolean | undefined) {
        this._isBundle = value;
    };
    /**
     * Gets the minimumSupportedOperatingSystem property value. The minimum operating system required for a Windows mobile app.
     * @returns a windowsMinimumOperatingSystem
     */
    public get minimumSupportedOperatingSystem() {
        return this._minimumSupportedOperatingSystem;
    };
    /**
     * Sets the minimumSupportedOperatingSystem property value. The minimum operating system required for a Windows mobile app.
     * @param value Value to set for the minimumSupportedOperatingSystem property.
     */
    public set minimumSupportedOperatingSystem(value: WindowsMinimumOperatingSystem | undefined) {
        this._minimumSupportedOperatingSystem = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeEnumValue<WindowsArchitecture>("applicableArchitectures", this.applicableArchitectures);
        writer.writeEnumValue<WindowsDeviceType>("applicableDeviceTypes", this.applicableDeviceTypes);
        writer.writeStringValue("identityName", this.identityName);
        writer.writeStringValue("identityPublisherHash", this.identityPublisherHash);
        writer.writeStringValue("identityResourceIdentifier", this.identityResourceIdentifier);
        writer.writeStringValue("identityVersion", this.identityVersion);
        writer.writeBooleanValue("isBundle", this.isBundle);
        writer.writeObjectValue<WindowsMinimumOperatingSystem>("minimumSupportedOperatingSystem", this.minimumSupportedOperatingSystem);
    };
}
