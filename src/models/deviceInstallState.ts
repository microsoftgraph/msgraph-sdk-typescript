import {Entity} from './index';
import {InstallState} from './installState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Contains properties for the installation state for a device.
 */
export class DeviceInstallState extends Entity implements Parsable {
    /** Device Id. */
    private _deviceId?: string | undefined;
    /** Device name. */
    private _deviceName?: string | undefined;
    /** The error code for install failures. */
    private _errorCode?: string | undefined;
    /** Possible values for install state. */
    private _installState?: InstallState | undefined;
    /** Last sync date and time. */
    private _lastSyncDateTime?: Date | undefined;
    /** OS Description. */
    private _osDescription?: string | undefined;
    /** OS Version. */
    private _osVersion?: string | undefined;
    /** Device User Name. */
    private _userName?: string | undefined;
    /**
     * Instantiates a new deviceInstallState and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the deviceId property value. Device Id.
     * @returns a string
     */
    public get deviceId() {
        return this._deviceId;
    };
    /**
     * Sets the deviceId property value. Device Id.
     * @param value Value to set for the deviceId property.
     */
    public set deviceId(value: string | undefined) {
        this._deviceId = value;
    };
    /**
     * Gets the deviceName property value. Device name.
     * @returns a string
     */
    public get deviceName() {
        return this._deviceName;
    };
    /**
     * Sets the deviceName property value. Device name.
     * @param value Value to set for the deviceName property.
     */
    public set deviceName(value: string | undefined) {
        this._deviceName = value;
    };
    /**
     * Gets the errorCode property value. The error code for install failures.
     * @returns a string
     */
    public get errorCode() {
        return this._errorCode;
    };
    /**
     * Sets the errorCode property value. The error code for install failures.
     * @param value Value to set for the errorCode property.
     */
    public set errorCode(value: string | undefined) {
        this._errorCode = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "deviceId": n => { this.deviceId = n.getStringValue(); },
            "deviceName": n => { this.deviceName = n.getStringValue(); },
            "errorCode": n => { this.errorCode = n.getStringValue(); },
            "installState": n => { this.installState = n.getEnumValue<InstallState>(InstallState); },
            "lastSyncDateTime": n => { this.lastSyncDateTime = n.getDateValue(); },
            "osDescription": n => { this.osDescription = n.getStringValue(); },
            "osVersion": n => { this.osVersion = n.getStringValue(); },
            "userName": n => { this.userName = n.getStringValue(); },
        };
    };
    /**
     * Gets the installState property value. Possible values for install state.
     * @returns a installState
     */
    public get installState() {
        return this._installState;
    };
    /**
     * Sets the installState property value. Possible values for install state.
     * @param value Value to set for the installState property.
     */
    public set installState(value: InstallState | undefined) {
        this._installState = value;
    };
    /**
     * Gets the lastSyncDateTime property value. Last sync date and time.
     * @returns a Date
     */
    public get lastSyncDateTime() {
        return this._lastSyncDateTime;
    };
    /**
     * Sets the lastSyncDateTime property value. Last sync date and time.
     * @param value Value to set for the lastSyncDateTime property.
     */
    public set lastSyncDateTime(value: Date | undefined) {
        this._lastSyncDateTime = value;
    };
    /**
     * Gets the osDescription property value. OS Description.
     * @returns a string
     */
    public get osDescription() {
        return this._osDescription;
    };
    /**
     * Sets the osDescription property value. OS Description.
     * @param value Value to set for the osDescription property.
     */
    public set osDescription(value: string | undefined) {
        this._osDescription = value;
    };
    /**
     * Gets the osVersion property value. OS Version.
     * @returns a string
     */
    public get osVersion() {
        return this._osVersion;
    };
    /**
     * Sets the osVersion property value. OS Version.
     * @param value Value to set for the osVersion property.
     */
    public set osVersion(value: string | undefined) {
        this._osVersion = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("deviceId", this.deviceId);
        writer.writeStringValue("deviceName", this.deviceName);
        writer.writeStringValue("errorCode", this.errorCode);
        writer.writeEnumValue<InstallState>("installState", this.installState);
        writer.writeDateValue("lastSyncDateTime", this.lastSyncDateTime);
        writer.writeStringValue("osDescription", this.osDescription);
        writer.writeStringValue("osVersion", this.osVersion);
        writer.writeStringValue("userName", this.userName);
    };
    /**
     * Gets the userName property value. Device User Name.
     * @returns a string
     */
    public get userName() {
        return this._userName;
    };
    /**
     * Sets the userName property value. Device User Name.
     * @param value Value to set for the userName property.
     */
    public set userName(value: string | undefined) {
        this._userName = value;
    };
}
