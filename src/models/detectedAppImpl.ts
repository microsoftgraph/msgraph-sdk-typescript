import {createManagedDeviceFromDiscriminatorValue} from './createManagedDeviceFromDiscriminatorValue';
import {DetectedApp} from './detectedApp';
import {EntityImpl, ManagedDeviceImpl} from './index';
import {ManagedDevice} from './managedDevice';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** A managed or unmanaged app that is installed on a managed device. Unmanaged apps will only appear for devices marked as corporate owned. */
export class DetectedAppImpl extends EntityImpl implements DetectedApp {
    /** The number of devices that have installed this application */
    private _deviceCount?: number | undefined;
    /** Name of the discovered application. Read-only */
    private _displayName?: string | undefined;
    /** The devices that have the discovered application installed */
    private _managedDevices?: ManagedDevice[] | undefined;
    /** Discovered application size in bytes. Read-only */
    private _sizeInByte?: number | undefined;
    /** Version of the discovered application. Read-only */
    private _version?: string | undefined;
    /**
     * Instantiates a new detectedApp and sets the default values.
     * @param detectedAppParameterValue 
     */
    public constructor(detectedAppParameterValue?: DetectedApp | undefined) {
        super(detectedAppParameterValue);
        this._deviceCount = detectedAppParameterValue?.deviceCount;
        this._displayName = detectedAppParameterValue?.displayName;
        this._managedDevices = detectedAppParameterValue?.managedDevices;
        this._sizeInByte = detectedAppParameterValue?.sizeInByte;
        this._version = detectedAppParameterValue?.version;
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
        if(value) {
            this._deviceCount = value;
        }
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
        if(value) {
            this._displayName = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "deviceCount": n => { this.deviceCount = n.getNumberValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "managedDevices": n => { this.managedDevices = n.getCollectionOfObjectValues<ManagedDeviceImpl>(createManagedDeviceFromDiscriminatorValue); },
            "sizeInByte": n => { this.sizeInByte = n.getNumberValue(); },
            "version": n => { this.version = n.getStringValue(); },
        };
    };
    /**
     * Gets the managedDevices property value. The devices that have the discovered application installed
     * @returns a ManagedDeviceInterface
     */
    public get managedDevices() {
        return this._managedDevices;
    };
    /**
     * Sets the managedDevices property value. The devices that have the discovered application installed
     * @param value Value to set for the managedDevices property.
     */
    public set managedDevices(value: ManagedDevice[] | undefined) {
        if(value) {
            const managedDevicesArrValue: ManagedDeviceImpl[] = [];
            this.managedDevices?.forEach(element => {
                managedDevicesArrValue.push((element instanceof ManagedDeviceImpl? element as ManagedDeviceImpl:new ManagedDeviceImpl(element)));
            });
            this._managedDevices = managedDevicesArrValue;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.deviceCount){
            writer.writeNumberValue("deviceCount", this.deviceCount);
        }
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.managedDevices && this.managedDevices.length != 0){        const managedDevicesArrValue: ManagedDeviceImpl[] = [];
        this.managedDevices?.forEach(element => {
            managedDevicesArrValue.push((element instanceof ManagedDeviceImpl? element as ManagedDeviceImpl:new ManagedDeviceImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ManagedDeviceImpl>("managedDevices", managedDevicesArrValue);
        }
        if(this.sizeInByte){
            writer.writeNumberValue("sizeInByte", this.sizeInByte);
        }
        if(this.version){
            writer.writeStringValue("version", this.version);
        }
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
        if(value) {
            this._sizeInByte = value;
        }
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
        if(value) {
            this._version = value;
        }
    };
}
