import {DeviceComplianceDeviceOverview} from './deviceComplianceDeviceOverview';
import {DeviceComplianceDeviceStatus} from './deviceComplianceDeviceStatus';
import {DeviceCompliancePolicyAssignment} from './deviceCompliancePolicyAssignment';
import {DeviceComplianceScheduledActionForRule} from './deviceComplianceScheduledActionForRule';
import {DeviceComplianceUserOverview} from './deviceComplianceUserOverview';
import {DeviceComplianceUserStatus} from './deviceComplianceUserStatus';
import {Entity} from './entity';
import {SettingStateDeviceSummary} from './settingStateDeviceSummary';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DeviceCompliancePolicy extends Entity implements Parsable {
    /** The collection of assignments for this compliance policy.  */
    private _assignments?: DeviceCompliancePolicyAssignment[] | undefined;
    /** DateTime the object was created.  */
    private _createdDateTime?: Date | undefined;
    /** Admin provided description of the Device Configuration.  */
    private _description?: string | undefined;
    /** Compliance Setting State Device Summary  */
    private _deviceSettingStateSummaries?: SettingStateDeviceSummary[] | undefined;
    /** List of DeviceComplianceDeviceStatus.  */
    private _deviceStatuses?: DeviceComplianceDeviceStatus[] | undefined;
    /** Device compliance devices status overview  */
    private _deviceStatusOverview?: DeviceComplianceDeviceOverview | undefined;
    /** Admin provided name of the device configuration.  */
    private _displayName?: string | undefined;
    /** DateTime the object was last modified.  */
    private _lastModifiedDateTime?: Date | undefined;
    /** The list of scheduled action for this rule  */
    private _scheduledActionsForRule?: DeviceComplianceScheduledActionForRule[] | undefined;
    /** List of DeviceComplianceUserStatus.  */
    private _userStatuses?: DeviceComplianceUserStatus[] | undefined;
    /** Device compliance users status overview  */
    private _userStatusOverview?: DeviceComplianceUserOverview | undefined;
    /** Version of the device configuration.  */
    private _version?: number | undefined;
    /**
     * Instantiates a new deviceCompliancePolicy and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the assignments property value. The collection of assignments for this compliance policy.
     * @returns a deviceCompliancePolicyAssignment
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
     * Gets the deviceSettingStateSummaries property value. Compliance Setting State Device Summary
     * @returns a settingStateDeviceSummary
     */
    public get deviceSettingStateSummaries() {
        return this._deviceSettingStateSummaries;
    };
    /**
     * Gets the deviceStatuses property value. List of DeviceComplianceDeviceStatus.
     * @returns a deviceComplianceDeviceStatus
     */
    public get deviceStatuses() {
        return this._deviceStatuses;
    };
    /**
     * Gets the deviceStatusOverview property value. Device compliance devices status overview
     * @returns a deviceComplianceDeviceOverview
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
     * Gets the scheduledActionsForRule property value. The list of scheduled action for this rule
     * @returns a deviceComplianceScheduledActionForRule
     */
    public get scheduledActionsForRule() {
        return this._scheduledActionsForRule;
    };
    /**
     * Gets the userStatuses property value. List of DeviceComplianceUserStatus.
     * @returns a deviceComplianceUserStatus
     */
    public get userStatuses() {
        return this._userStatuses;
    };
    /**
     * Gets the userStatusOverview property value. Device compliance users status overview
     * @returns a deviceComplianceUserOverview
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
            ["assignments", (o, n) => { (o as unknown as DeviceCompliancePolicy).assignments = n.getCollectionOfObjectValues<DeviceCompliancePolicyAssignment>(DeviceCompliancePolicyAssignment); }],
            ["createdDateTime", (o, n) => { (o as unknown as DeviceCompliancePolicy).createdDateTime = n.getDateValue(); }],
            ["description", (o, n) => { (o as unknown as DeviceCompliancePolicy).description = n.getStringValue(); }],
            ["deviceSettingStateSummaries", (o, n) => { (o as unknown as DeviceCompliancePolicy).deviceSettingStateSummaries = n.getCollectionOfObjectValues<SettingStateDeviceSummary>(SettingStateDeviceSummary); }],
            ["deviceStatuses", (o, n) => { (o as unknown as DeviceCompliancePolicy).deviceStatuses = n.getCollectionOfObjectValues<DeviceComplianceDeviceStatus>(DeviceComplianceDeviceStatus); }],
            ["deviceStatusOverview", (o, n) => { (o as unknown as DeviceCompliancePolicy).deviceStatusOverview = n.getObjectValue<DeviceComplianceDeviceOverview>(DeviceComplianceDeviceOverview); }],
            ["displayName", (o, n) => { (o as unknown as DeviceCompliancePolicy).displayName = n.getStringValue(); }],
            ["lastModifiedDateTime", (o, n) => { (o as unknown as DeviceCompliancePolicy).lastModifiedDateTime = n.getDateValue(); }],
            ["scheduledActionsForRule", (o, n) => { (o as unknown as DeviceCompliancePolicy).scheduledActionsForRule = n.getCollectionOfObjectValues<DeviceComplianceScheduledActionForRule>(DeviceComplianceScheduledActionForRule); }],
            ["userStatuses", (o, n) => { (o as unknown as DeviceCompliancePolicy).userStatuses = n.getCollectionOfObjectValues<DeviceComplianceUserStatus>(DeviceComplianceUserStatus); }],
            ["userStatusOverview", (o, n) => { (o as unknown as DeviceCompliancePolicy).userStatusOverview = n.getObjectValue<DeviceComplianceUserOverview>(DeviceComplianceUserOverview); }],
            ["version", (o, n) => { (o as unknown as DeviceCompliancePolicy).version = n.getNumberValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<DeviceCompliancePolicyAssignment>("assignments", this.assignments);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeStringValue("description", this.description);
        writer.writeCollectionOfObjectValues<SettingStateDeviceSummary>("deviceSettingStateSummaries", this.deviceSettingStateSummaries);
        writer.writeCollectionOfObjectValues<DeviceComplianceDeviceStatus>("deviceStatuses", this.deviceStatuses);
        writer.writeObjectValue<DeviceComplianceDeviceOverview>("deviceStatusOverview", this.deviceStatusOverview);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeCollectionOfObjectValues<DeviceComplianceScheduledActionForRule>("scheduledActionsForRule", this.scheduledActionsForRule);
        writer.writeCollectionOfObjectValues<DeviceComplianceUserStatus>("userStatuses", this.userStatuses);
        writer.writeObjectValue<DeviceComplianceUserOverview>("userStatusOverview", this.userStatusOverview);
        writer.writeNumberValue("version", this.version);
    };
    /**
     * Sets the assignments property value. The collection of assignments for this compliance policy.
     * @param value Value to set for the assignments property.
     */
    public set assignments(value: DeviceCompliancePolicyAssignment[] | undefined) {
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
     * Sets the deviceSettingStateSummaries property value. Compliance Setting State Device Summary
     * @param value Value to set for the deviceSettingStateSummaries property.
     */
    public set deviceSettingStateSummaries(value: SettingStateDeviceSummary[] | undefined) {
        this._deviceSettingStateSummaries = value;
    };
    /**
     * Sets the deviceStatuses property value. List of DeviceComplianceDeviceStatus.
     * @param value Value to set for the deviceStatuses property.
     */
    public set deviceStatuses(value: DeviceComplianceDeviceStatus[] | undefined) {
        this._deviceStatuses = value;
    };
    /**
     * Sets the deviceStatusOverview property value. Device compliance devices status overview
     * @param value Value to set for the deviceStatusOverview property.
     */
    public set deviceStatusOverview(value: DeviceComplianceDeviceOverview | undefined) {
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
     * Sets the scheduledActionsForRule property value. The list of scheduled action for this rule
     * @param value Value to set for the scheduledActionsForRule property.
     */
    public set scheduledActionsForRule(value: DeviceComplianceScheduledActionForRule[] | undefined) {
        this._scheduledActionsForRule = value;
    };
    /**
     * Sets the userStatuses property value. List of DeviceComplianceUserStatus.
     * @param value Value to set for the userStatuses property.
     */
    public set userStatuses(value: DeviceComplianceUserStatus[] | undefined) {
        this._userStatuses = value;
    };
    /**
     * Sets the userStatusOverview property value. Device compliance users status overview
     * @param value Value to set for the userStatusOverview property.
     */
    public set userStatusOverview(value: DeviceComplianceUserOverview | undefined) {
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
