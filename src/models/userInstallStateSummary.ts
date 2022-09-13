import {createDeviceInstallStateFromDiscriminatorValue} from './createDeviceInstallStateFromDiscriminatorValue';
import {DeviceInstallState, Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Contains properties for the installation state summary for a user. */
export class UserInstallStateSummary extends Entity implements Parsable {
    /** The install state of the eBook. */
    private _deviceStates?: DeviceInstallState[] | undefined;
    /** Failed Device Count. */
    private _failedDeviceCount?: number | undefined;
    /** Installed Device Count. */
    private _installedDeviceCount?: number | undefined;
    /** Not installed device count. */
    private _notInstalledDeviceCount?: number | undefined;
    /** User name. */
    private _userName?: string | undefined;
    /**
     * Instantiates a new userInstallStateSummary and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.userInstallStateSummary";
    };
    /**
     * Gets the deviceStates property value. The install state of the eBook.
     * @returns a deviceInstallState
     */
    public get deviceStates() {
        return this._deviceStates;
    };
    /**
     * Sets the deviceStates property value. The install state of the eBook.
     * @param value Value to set for the deviceStates property.
     */
    public set deviceStates(value: DeviceInstallState[] | undefined) {
        this._deviceStates = value;
    };
    /**
     * Gets the failedDeviceCount property value. Failed Device Count.
     * @returns a integer
     */
    public get failedDeviceCount() {
        return this._failedDeviceCount;
    };
    /**
     * Sets the failedDeviceCount property value. Failed Device Count.
     * @param value Value to set for the failedDeviceCount property.
     */
    public set failedDeviceCount(value: number | undefined) {
        this._failedDeviceCount = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "deviceStates": n => { this.deviceStates = n.getCollectionOfObjectValues<DeviceInstallState>(createDeviceInstallStateFromDiscriminatorValue); },
            "failedDeviceCount": n => { this.failedDeviceCount = n.getNumberValue(); },
            "installedDeviceCount": n => { this.installedDeviceCount = n.getNumberValue(); },
            "notInstalledDeviceCount": n => { this.notInstalledDeviceCount = n.getNumberValue(); },
            "userName": n => { this.userName = n.getStringValue(); },
        };
    };
    /**
     * Gets the installedDeviceCount property value. Installed Device Count.
     * @returns a integer
     */
    public get installedDeviceCount() {
        return this._installedDeviceCount;
    };
    /**
     * Sets the installedDeviceCount property value. Installed Device Count.
     * @param value Value to set for the installedDeviceCount property.
     */
    public set installedDeviceCount(value: number | undefined) {
        this._installedDeviceCount = value;
    };
    /**
     * Gets the notInstalledDeviceCount property value. Not installed device count.
     * @returns a integer
     */
    public get notInstalledDeviceCount() {
        return this._notInstalledDeviceCount;
    };
    /**
     * Sets the notInstalledDeviceCount property value. Not installed device count.
     * @param value Value to set for the notInstalledDeviceCount property.
     */
    public set notInstalledDeviceCount(value: number | undefined) {
        this._notInstalledDeviceCount = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<DeviceInstallState>("deviceStates", this.deviceStates);
        writer.writeNumberValue("failedDeviceCount", this.failedDeviceCount);
        writer.writeNumberValue("installedDeviceCount", this.installedDeviceCount);
        writer.writeNumberValue("notInstalledDeviceCount", this.notInstalledDeviceCount);
        writer.writeStringValue("userName", this.userName);
    };
    /**
     * Gets the userName property value. User name.
     * @returns a string
     */
    public get userName() {
        return this._userName;
    };
    /**
     * Sets the userName property value. User name.
     * @param value Value to set for the userName property.
     */
    public set userName(value: string | undefined) {
        this._userName = value;
    };
}
