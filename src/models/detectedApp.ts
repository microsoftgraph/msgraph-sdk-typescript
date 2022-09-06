import {createManagedDeviceFromDiscriminatorValue} from './createManagedDeviceFromDiscriminatorValue';
import {DetectedAppPlatformType} from './detectedAppPlatformType';
import {Entity, ManagedDevice} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** A managed or unmanaged app that is installed on a managed device. Unmanaged apps will only appear for devices marked as corporate owned. */
export class DetectedApp extends Entity implements Parsable {
    /** The number of devices that have installed this application */
    private _deviceCount?: number | undefined;
    /** Name of the discovered application. Read-only */
    private _displayName?: string | undefined;
    /** The devices that have the discovered application installed */
    private _managedDevices?: ManagedDevice[] | undefined;
    /** Indicates the operating system / platform of the discovered application.  Some possible values are Windows, iOS, macOS. The default value is unknown (0). */
    private _platform?: DetectedAppPlatformType | undefined;
    /** Indicates the publisher of the discovered application. For example: 'Microsoft'.  The default value is an empty string. */
    private _publisher?: string | undefined;
    /** Discovered application size in bytes. Read-only */
    private _sizeInByte?: number | undefined;
    /** Version of the discovered application. Read-only */
    private _version?: string | undefined;
    /**
     * Instantiates a new detectedApp and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.detectedApp";
    };
    /**
     * Gets the deviceCount property value. The number of devices that have installed this application
     * @returns a integer
     */
    public get deviceCount() {
        return this._deviceCount;
    };
    /**
     * Sets the deviceCount property value. The number of devices that have installed this application
     * @param value Value to set for the deviceCount property.
     */
    public set deviceCount(value: number | undefined) {
        this._deviceCount = value;
    };
    /**
     * Gets the displayName property value. Name of the discovered application. Read-only
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Name of the discovered application. Read-only
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "deviceCount": n => { this.deviceCount = n.getNumberValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "managedDevices": n => { this.managedDevices = n.getCollectionOfObjectValues<ManagedDevice>(createManagedDeviceFromDiscriminatorValue); },
            "platform": n => { this.platform = n.getEnumValue<DetectedAppPlatformType>(DetectedAppPlatformType); },
            "publisher": n => { this.publisher = n.getStringValue(); },
            "sizeInByte": n => { this.sizeInByte = n.getNumberValue(); },
            "version": n => { this.version = n.getStringValue(); },
        };
    };
    /**
     * Gets the managedDevices property value. The devices that have the discovered application installed
     * @returns a managedDevice
     */
    public get managedDevices() {
        return this._managedDevices;
    };
    /**
     * Sets the managedDevices property value. The devices that have the discovered application installed
     * @param value Value to set for the managedDevices property.
     */
    public set managedDevices(value: ManagedDevice[] | undefined) {
        this._managedDevices = value;
    };
    /**
     * Gets the platform property value. Indicates the operating system / platform of the discovered application.  Some possible values are Windows, iOS, macOS. The default value is unknown (0).
     * @returns a detectedAppPlatformType
     */
    public get platform() {
        return this._platform;
    };
    /**
     * Sets the platform property value. Indicates the operating system / platform of the discovered application.  Some possible values are Windows, iOS, macOS. The default value is unknown (0).
     * @param value Value to set for the platform property.
     */
    public set platform(value: DetectedAppPlatformType | undefined) {
        this._platform = value;
    };
    /**
     * Gets the publisher property value. Indicates the publisher of the discovered application. For example: 'Microsoft'.  The default value is an empty string.
     * @returns a string
     */
    public get publisher() {
        return this._publisher;
    };
    /**
     * Sets the publisher property value. Indicates the publisher of the discovered application. For example: 'Microsoft'.  The default value is an empty string.
     * @param value Value to set for the publisher property.
     */
    public set publisher(value: string | undefined) {
        this._publisher = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeNumberValue("deviceCount", this.deviceCount);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeCollectionOfObjectValues<ManagedDevice>("managedDevices", this.managedDevices);
        writer.writeEnumValue<DetectedAppPlatformType>("platform", this.platform);
        writer.writeStringValue("publisher", this.publisher);
        writer.writeNumberValue("sizeInByte", this.sizeInByte);
        writer.writeStringValue("version", this.version);
    };
    /**
     * Gets the sizeInByte property value. Discovered application size in bytes. Read-only
     * @returns a int64
     */
    public get sizeInByte() {
        return this._sizeInByte;
    };
    /**
     * Sets the sizeInByte property value. Discovered application size in bytes. Read-only
     * @param value Value to set for the sizeInByte property.
     */
    public set sizeInByte(value: number | undefined) {
        this._sizeInByte = value;
    };
    /**
     * Gets the version property value. Version of the discovered application. Read-only
     * @returns a string
     */
    public get version() {
        return this._version;
    };
    /**
     * Sets the version property value. Version of the discovered application. Read-only
     * @param value Value to set for the version property.
     */
    public set version(value: string | undefined) {
        this._version = value;
    };
}
