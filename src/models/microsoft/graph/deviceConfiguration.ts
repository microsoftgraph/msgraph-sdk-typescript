import {DeviceConfigurationAssignment} from './deviceConfigurationAssignment';
import {DeviceConfigurationDeviceOverview} from './deviceConfigurationDeviceOverview';
import {DeviceConfigurationDeviceStatus} from './deviceConfigurationDeviceStatus';
import {DeviceConfigurationUserOverview} from './deviceConfigurationUserOverview';
import {DeviceConfigurationUserStatus} from './deviceConfigurationUserStatus';
import {Entity} from './entity';
import {SettingStateDeviceSummary} from './settingStateDeviceSummary';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DeviceConfiguration extends Entity implements Parsable {
    /** The list of assignments for the device configuration profile.  */
    private _assignments?: DeviceConfigurationAssignment[] | undefined;
    /** DateTime the object was created.  */
    private _createdDateTime?: Date | undefined;
    /** Admin provided description of the Device Configuration.  */
    private _description?: string | undefined;
    /** Device Configuration Setting State Device Summary  */
    private _deviceSettingStateSummaries?: SettingStateDeviceSummary[] | undefined;
    /** Device configuration installation status by device.  */
    private _deviceStatuses?: DeviceConfigurationDeviceStatus[] | undefined;
    /** Device Configuration devices status overview  */
    private _deviceStatusOverview?: DeviceConfigurationDeviceOverview | undefined;
    /** Admin provided name of the device configuration.  */
    private _displayName?: string | undefined;
    /** DateTime the object was last modified.  */
    private _lastModifiedDateTime?: Date | undefined;
    /** Device configuration installation status by user.  */
    private _userStatuses?: DeviceConfigurationUserStatus[] | undefined;
    /** Device Configuration users status overview  */
    private _userStatusOverview?: DeviceConfigurationUserOverview | undefined;
    /** Version of the device configuration.  */
    private _version?: number | undefined;
    /**
     * Instantiates a new deviceConfiguration and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the assignments property value. The list of assignments for the device configuration profile.
     * @returns a deviceConfigurationAssignment
     */
    public get assignments() {
        return this._assignments;
    };
    /**
     * Gets the createdDateTime property value. DateTime the object was created.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Gets the description property value. Admin provided description of the Device Configuration.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Gets the deviceSettingStateSummaries property value. Device Configuration Setting State Device Summary
     * @returns a settingStateDeviceSummary
     */
    public get deviceSettingStateSummaries() {
        return this._deviceSettingStateSummaries;
    };
    /**
     * Gets the deviceStatuses property value. Device configuration installation status by device.
     * @returns a deviceConfigurationDeviceStatus
     */
    public get deviceStatuses() {
        return this._deviceStatuses;
    };
    /**
     * Gets the deviceStatusOverview property value. Device Configuration devices status overview
     * @returns a deviceConfigurationDeviceOverview
     */
    public get deviceStatusOverview() {
        return this._deviceStatusOverview;
    };
    /**
     * Gets the displayName property value. Admin provided name of the device configuration.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Gets the lastModifiedDateTime property value. DateTime the object was last modified.
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Gets the userStatuses property value. Device configuration installation status by user.
     * @returns a deviceConfigurationUserStatus
     */
    public get userStatuses() {
        return this._userStatuses;
    };
    /**
     * Gets the userStatusOverview property value. Device Configuration users status overview
     * @returns a deviceConfigurationUserOverview
     */
    public get userStatusOverview() {
        return this._userStatusOverview;
    };
    /**
     * Gets the version property value. Version of the device configuration.
     * @returns a integer
     */
    public get version() {
        return this._version;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["assignments", (o, n) => { (o as unknown as DeviceConfiguration).assignments = n.getCollectionOfObjectValues<DeviceConfigurationAssignment>(DeviceConfigurationAssignment); }],
            ["createdDateTime", (o, n) => { (o as unknown as DeviceConfiguration).createdDateTime = n.getDateValue(); }],
            ["description", (o, n) => { (o as unknown as DeviceConfiguration).description = n.getStringValue(); }],
            ["deviceSettingStateSummaries", (o, n) => { (o as unknown as DeviceConfiguration).deviceSettingStateSummaries = n.getCollectionOfObjectValues<SettingStateDeviceSummary>(SettingStateDeviceSummary); }],
            ["deviceStatuses", (o, n) => { (o as unknown as DeviceConfiguration).deviceStatuses = n.getCollectionOfObjectValues<DeviceConfigurationDeviceStatus>(DeviceConfigurationDeviceStatus); }],
            ["deviceStatusOverview", (o, n) => { (o as unknown as DeviceConfiguration).deviceStatusOverview = n.getObjectValue<DeviceConfigurationDeviceOverview>(DeviceConfigurationDeviceOverview); }],
            ["displayName", (o, n) => { (o as unknown as DeviceConfiguration).displayName = n.getStringValue(); }],
            ["lastModifiedDateTime", (o, n) => { (o as unknown as DeviceConfiguration).lastModifiedDateTime = n.getDateValue(); }],
            ["userStatuses", (o, n) => { (o as unknown as DeviceConfiguration).userStatuses = n.getCollectionOfObjectValues<DeviceConfigurationUserStatus>(DeviceConfigurationUserStatus); }],
            ["userStatusOverview", (o, n) => { (o as unknown as DeviceConfiguration).userStatusOverview = n.getObjectValue<DeviceConfigurationUserOverview>(DeviceConfigurationUserOverview); }],
            ["version", (o, n) => { (o as unknown as DeviceConfiguration).version = n.getNumberValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<DeviceConfigurationAssignment>("assignments", this.assignments);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeStringValue("description", this.description);
        writer.writeCollectionOfObjectValues<SettingStateDeviceSummary>("deviceSettingStateSummaries", this.deviceSettingStateSummaries);
        writer.writeCollectionOfObjectValues<DeviceConfigurationDeviceStatus>("deviceStatuses", this.deviceStatuses);
        writer.writeObjectValue<DeviceConfigurationDeviceOverview>("deviceStatusOverview", this.deviceStatusOverview);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeCollectionOfObjectValues<DeviceConfigurationUserStatus>("userStatuses", this.userStatuses);
        writer.writeObjectValue<DeviceConfigurationUserOverview>("userStatusOverview", this.userStatusOverview);
        writer.writeNumberValue("version", this.version);
    };
    /**
     * Sets the assignments property value. The list of assignments for the device configuration profile.
     * @param value Value to set for the assignments property.
     */
    public set assignments(value: DeviceConfigurationAssignment[] | undefined) {
        this._assignments = value;
    };
    /**
     * Sets the createdDateTime property value. DateTime the object was created.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Sets the description property value. Admin provided description of the Device Configuration.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Sets the deviceSettingStateSummaries property value. Device Configuration Setting State Device Summary
     * @param value Value to set for the deviceSettingStateSummaries property.
     */
    public set deviceSettingStateSummaries(value: SettingStateDeviceSummary[] | undefined) {
        this._deviceSettingStateSummaries = value;
    };
    /**
     * Sets the deviceStatuses property value. Device configuration installation status by device.
     * @param value Value to set for the deviceStatuses property.
     */
    public set deviceStatuses(value: DeviceConfigurationDeviceStatus[] | undefined) {
        this._deviceStatuses = value;
    };
    /**
     * Sets the deviceStatusOverview property value. Device Configuration devices status overview
     * @param value Value to set for the deviceStatusOverview property.
     */
    public set deviceStatusOverview(value: DeviceConfigurationDeviceOverview | undefined) {
        this._deviceStatusOverview = value;
    };
    /**
     * Sets the displayName property value. Admin provided name of the device configuration.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Sets the lastModifiedDateTime property value. DateTime the object was last modified.
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        this._lastModifiedDateTime = value;
    };
    /**
     * Sets the userStatuses property value. Device configuration installation status by user.
     * @param value Value to set for the userStatuses property.
     */
    public set userStatuses(value: DeviceConfigurationUserStatus[] | undefined) {
        this._userStatuses = value;
    };
    /**
     * Sets the userStatusOverview property value. Device Configuration users status overview
     * @param value Value to set for the userStatusOverview property.
     */
    public set userStatusOverview(value: DeviceConfigurationUserOverview | undefined) {
        this._userStatusOverview = value;
    };
    /**
     * Sets the version property value. Version of the device configuration.
     * @param value Value to set for the version property.
     */
    public set version(value: number | undefined) {
        this._version = value;
    };
}