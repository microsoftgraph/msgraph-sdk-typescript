import {createDeviceComplianceDeviceOverviewFromDiscriminatorValue} from './createDeviceComplianceDeviceOverviewFromDiscriminatorValue';
import {createDeviceComplianceDeviceStatusFromDiscriminatorValue} from './createDeviceComplianceDeviceStatusFromDiscriminatorValue';
import {createDeviceCompliancePolicyAssignmentFromDiscriminatorValue} from './createDeviceCompliancePolicyAssignmentFromDiscriminatorValue';
import {createDeviceComplianceScheduledActionForRuleFromDiscriminatorValue} from './createDeviceComplianceScheduledActionForRuleFromDiscriminatorValue';
import {createDeviceComplianceUserOverviewFromDiscriminatorValue} from './createDeviceComplianceUserOverviewFromDiscriminatorValue';
import {createDeviceComplianceUserStatusFromDiscriminatorValue} from './createDeviceComplianceUserStatusFromDiscriminatorValue';
import {createSettingStateDeviceSummaryFromDiscriminatorValue} from './createSettingStateDeviceSummaryFromDiscriminatorValue';
import {DeviceComplianceDeviceOverview} from './deviceComplianceDeviceOverview';
import {DeviceComplianceDeviceStatus} from './deviceComplianceDeviceStatus';
import {DeviceCompliancePolicy} from './deviceCompliancePolicy';
import {DeviceCompliancePolicyAssignment} from './deviceCompliancePolicyAssignment';
import {DeviceComplianceScheduledActionForRule} from './deviceComplianceScheduledActionForRule';
import {DeviceComplianceUserOverview} from './deviceComplianceUserOverview';
import {DeviceComplianceUserStatus} from './deviceComplianceUserStatus';
import {DeviceComplianceDeviceOverviewImpl, DeviceComplianceDeviceStatusImpl, DeviceCompliancePolicyAssignmentImpl, DeviceComplianceScheduledActionForRuleImpl, DeviceComplianceUserOverviewImpl, DeviceComplianceUserStatusImpl, EntityImpl, SettingStateDeviceSummaryImpl} from './index';
import {SettingStateDeviceSummary} from './settingStateDeviceSummary';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** This is the base class for Compliance policy. Compliance policies are platform specific and individual per-platform compliance policies inherit from here.  */
export class DeviceCompliancePolicyImpl extends EntityImpl implements DeviceCompliancePolicy {
    /** The collection of assignments for this compliance policy. */
    private _assignments?: DeviceCompliancePolicyAssignment[] | undefined;
    /** DateTime the object was created. */
    private _createdDateTime?: Date | undefined;
    /** Admin provided description of the Device Configuration. */
    private _description?: string | undefined;
    /** Compliance Setting State Device Summary */
    private _deviceSettingStateSummaries?: SettingStateDeviceSummary[] | undefined;
    /** List of DeviceComplianceDeviceStatus. */
    private _deviceStatuses?: DeviceComplianceDeviceStatus[] | undefined;
    /** Device compliance devices status overview */
    private _deviceStatusOverview?: DeviceComplianceDeviceOverview | undefined;
    /** Admin provided name of the device configuration. */
    private _displayName?: string | undefined;
    /** DateTime the object was last modified. */
    private _lastModifiedDateTime?: Date | undefined;
    /** The list of scheduled action for this rule */
    private _scheduledActionsForRule?: DeviceComplianceScheduledActionForRule[] | undefined;
    /** List of DeviceComplianceUserStatus. */
    private _userStatuses?: DeviceComplianceUserStatus[] | undefined;
    /** Device compliance users status overview */
    private _userStatusOverview?: DeviceComplianceUserOverview | undefined;
    /** Version of the device configuration. */
    private _version?: number | undefined;
    /**
     * Gets the assignments property value. The collection of assignments for this compliance policy.
     * @returns a DeviceCompliancePolicyAssignmentInterface
     */
    public get assignments() {
        return this._assignments;
    };
    /**
     * Sets the assignments property value. The collection of assignments for this compliance policy.
     * @param value Value to set for the assignments property.
     */
    public set assignments(value: DeviceCompliancePolicyAssignment[] | undefined) {
        if(value) {
            const assignmentsArrValue: DeviceCompliancePolicyAssignmentImpl[] = [];
            this.assignments?.forEach(element => {
                assignmentsArrValue.push((element instanceof DeviceCompliancePolicyAssignmentImpl? element as DeviceCompliancePolicyAssignmentImpl:new DeviceCompliancePolicyAssignmentImpl(element)));
            });
            this._assignments = assignmentsArrValue;
        }
    };
    /**
     * Instantiates a new deviceCompliancePolicy and sets the default values.
     * @param deviceCompliancePolicyParameterValue 
     */
    public constructor(deviceCompliancePolicyParameterValue?: DeviceCompliancePolicy | undefined) {
        super(deviceCompliancePolicyParameterValue);
        this._assignments = deviceCompliancePolicyParameterValue?.assignments;
        this._createdDateTime = deviceCompliancePolicyParameterValue?.createdDateTime;
        this._description = deviceCompliancePolicyParameterValue?.description;
        this._deviceSettingStateSummaries = deviceCompliancePolicyParameterValue?.deviceSettingStateSummaries;
        this._deviceStatuses = deviceCompliancePolicyParameterValue?.deviceStatuses;
        this._deviceStatusOverview = deviceCompliancePolicyParameterValue?.deviceStatusOverview;
        this._displayName = deviceCompliancePolicyParameterValue?.displayName;
        this._lastModifiedDateTime = deviceCompliancePolicyParameterValue?.lastModifiedDateTime;
        this._scheduledActionsForRule = deviceCompliancePolicyParameterValue?.scheduledActionsForRule;
        this._userStatuses = deviceCompliancePolicyParameterValue?.userStatuses;
        this._userStatusOverview = deviceCompliancePolicyParameterValue?.userStatusOverview;
        this._version = deviceCompliancePolicyParameterValue?.version;
    };
    /**
     * Gets the createdDateTime property value. DateTime the object was created.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. DateTime the object was created.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        if(value) {
            this._createdDateTime = value;
        }
    };
    /**
     * Gets the description property value. Admin provided description of the Device Configuration.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. Admin provided description of the Device Configuration.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        if(value) {
            this._description = value;
        }
    };
    /**
     * Gets the deviceSettingStateSummaries property value. Compliance Setting State Device Summary
     * @returns a SettingStateDeviceSummaryInterface
     */
    public get deviceSettingStateSummaries() {
        return this._deviceSettingStateSummaries;
    };
    /**
     * Sets the deviceSettingStateSummaries property value. Compliance Setting State Device Summary
     * @param value Value to set for the deviceSettingStateSummaries property.
     */
    public set deviceSettingStateSummaries(value: SettingStateDeviceSummary[] | undefined) {
        if(value) {
            const deviceSettingStateSummariesArrValue: SettingStateDeviceSummaryImpl[] = [];
            this.deviceSettingStateSummaries?.forEach(element => {
                deviceSettingStateSummariesArrValue.push((element instanceof SettingStateDeviceSummaryImpl? element as SettingStateDeviceSummaryImpl:new SettingStateDeviceSummaryImpl(element)));
            });
            this._deviceSettingStateSummaries = deviceSettingStateSummariesArrValue;
        }
    };
    /**
     * Gets the deviceStatuses property value. List of DeviceComplianceDeviceStatus.
     * @returns a DeviceComplianceDeviceStatusInterface
     */
    public get deviceStatuses() {
        return this._deviceStatuses;
    };
    /**
     * Sets the deviceStatuses property value. List of DeviceComplianceDeviceStatus.
     * @param value Value to set for the deviceStatuses property.
     */
    public set deviceStatuses(value: DeviceComplianceDeviceStatus[] | undefined) {
        if(value) {
            const deviceStatusesArrValue: DeviceComplianceDeviceStatusImpl[] = [];
            this.deviceStatuses?.forEach(element => {
                deviceStatusesArrValue.push((element instanceof DeviceComplianceDeviceStatusImpl? element as DeviceComplianceDeviceStatusImpl:new DeviceComplianceDeviceStatusImpl(element)));
            });
            this._deviceStatuses = deviceStatusesArrValue;
        }
    };
    /**
     * Gets the deviceStatusOverview property value. Device compliance devices status overview
     * @returns a DeviceComplianceDeviceOverviewInterface
     */
    public get deviceStatusOverview() {
        return this._deviceStatusOverview;
    };
    /**
     * Sets the deviceStatusOverview property value. Device compliance devices status overview
     * @param value Value to set for the deviceStatusOverview property.
     */
    public set deviceStatusOverview(value: DeviceComplianceDeviceOverview | undefined) {
        if(value) {
            this._deviceStatusOverview = value instanceof DeviceComplianceDeviceOverviewImpl? value as DeviceComplianceDeviceOverviewImpl: new DeviceComplianceDeviceOverviewImpl(value);
        }
    };
    /**
     * Gets the displayName property value. Admin provided name of the device configuration.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Admin provided name of the device configuration.
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
            "assignments": n => { this.assignments = n.getCollectionOfObjectValues<DeviceCompliancePolicyAssignmentImpl>(createDeviceCompliancePolicyAssignmentFromDiscriminatorValue); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "description": n => { this.description = n.getStringValue(); },
            "deviceSettingStateSummaries": n => { this.deviceSettingStateSummaries = n.getCollectionOfObjectValues<SettingStateDeviceSummaryImpl>(createSettingStateDeviceSummaryFromDiscriminatorValue); },
            "deviceStatuses": n => { this.deviceStatuses = n.getCollectionOfObjectValues<DeviceComplianceDeviceStatusImpl>(createDeviceComplianceDeviceStatusFromDiscriminatorValue); },
            "deviceStatusOverview": n => { this.deviceStatusOverview = n.getObjectValue<DeviceComplianceDeviceOverviewImpl>(createDeviceComplianceDeviceOverviewFromDiscriminatorValue); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
            "scheduledActionsForRule": n => { this.scheduledActionsForRule = n.getCollectionOfObjectValues<DeviceComplianceScheduledActionForRuleImpl>(createDeviceComplianceScheduledActionForRuleFromDiscriminatorValue); },
            "userStatuses": n => { this.userStatuses = n.getCollectionOfObjectValues<DeviceComplianceUserStatusImpl>(createDeviceComplianceUserStatusFromDiscriminatorValue); },
            "userStatusOverview": n => { this.userStatusOverview = n.getObjectValue<DeviceComplianceUserOverviewImpl>(createDeviceComplianceUserOverviewFromDiscriminatorValue); },
            "version": n => { this.version = n.getNumberValue(); },
        };
    };
    /**
     * Gets the lastModifiedDateTime property value. DateTime the object was last modified.
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Sets the lastModifiedDateTime property value. DateTime the object was last modified.
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        if(value) {
            this._lastModifiedDateTime = value;
        }
    };
    /**
     * Gets the scheduledActionsForRule property value. The list of scheduled action for this rule
     * @returns a DeviceComplianceScheduledActionForRuleInterface
     */
    public get scheduledActionsForRule() {
        return this._scheduledActionsForRule;
    };
    /**
     * Sets the scheduledActionsForRule property value. The list of scheduled action for this rule
     * @param value Value to set for the scheduledActionsForRule property.
     */
    public set scheduledActionsForRule(value: DeviceComplianceScheduledActionForRule[] | undefined) {
        if(value) {
            const scheduledActionsForRuleArrValue: DeviceComplianceScheduledActionForRuleImpl[] = [];
            this.scheduledActionsForRule?.forEach(element => {
                scheduledActionsForRuleArrValue.push((element instanceof DeviceComplianceScheduledActionForRuleImpl? element as DeviceComplianceScheduledActionForRuleImpl:new DeviceComplianceScheduledActionForRuleImpl(element)));
            });
            this._scheduledActionsForRule = scheduledActionsForRuleArrValue;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.assignments && this.assignments.length != 0){        const assignmentsArrValue: DeviceCompliancePolicyAssignmentImpl[] = [];
        this.assignments?.forEach(element => {
            assignmentsArrValue.push((element instanceof DeviceCompliancePolicyAssignmentImpl? element as DeviceCompliancePolicyAssignmentImpl:new DeviceCompliancePolicyAssignmentImpl(element)));
        });
            writer.writeCollectionOfObjectValues<DeviceCompliancePolicyAssignmentImpl>("assignments", assignmentsArrValue);
        }
        if(this.createdDateTime){
            writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.description){
            writer.writeStringValue("description", this.description);
        }
        if(this.deviceSettingStateSummaries && this.deviceSettingStateSummaries.length != 0){        const deviceSettingStateSummariesArrValue: SettingStateDeviceSummaryImpl[] = [];
        this.deviceSettingStateSummaries?.forEach(element => {
            deviceSettingStateSummariesArrValue.push((element instanceof SettingStateDeviceSummaryImpl? element as SettingStateDeviceSummaryImpl:new SettingStateDeviceSummaryImpl(element)));
        });
            writer.writeCollectionOfObjectValues<SettingStateDeviceSummaryImpl>("deviceSettingStateSummaries", deviceSettingStateSummariesArrValue);
        }
        if(this.deviceStatuses && this.deviceStatuses.length != 0){        const deviceStatusesArrValue: DeviceComplianceDeviceStatusImpl[] = [];
        this.deviceStatuses?.forEach(element => {
            deviceStatusesArrValue.push((element instanceof DeviceComplianceDeviceStatusImpl? element as DeviceComplianceDeviceStatusImpl:new DeviceComplianceDeviceStatusImpl(element)));
        });
            writer.writeCollectionOfObjectValues<DeviceComplianceDeviceStatusImpl>("deviceStatuses", deviceStatusesArrValue);
        }
        if(this.deviceStatusOverview){
            writer.writeObjectValue<DeviceComplianceDeviceOverviewImpl>("deviceStatusOverview", (this.deviceStatusOverview instanceof DeviceComplianceDeviceOverviewImpl? this.deviceStatusOverview as DeviceComplianceDeviceOverviewImpl: new DeviceComplianceDeviceOverviewImpl(this.deviceStatusOverview)));
        }
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.lastModifiedDateTime){
            writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        }
        if(this.scheduledActionsForRule && this.scheduledActionsForRule.length != 0){        const scheduledActionsForRuleArrValue: DeviceComplianceScheduledActionForRuleImpl[] = [];
        this.scheduledActionsForRule?.forEach(element => {
            scheduledActionsForRuleArrValue.push((element instanceof DeviceComplianceScheduledActionForRuleImpl? element as DeviceComplianceScheduledActionForRuleImpl:new DeviceComplianceScheduledActionForRuleImpl(element)));
        });
            writer.writeCollectionOfObjectValues<DeviceComplianceScheduledActionForRuleImpl>("scheduledActionsForRule", scheduledActionsForRuleArrValue);
        }
        if(this.userStatuses && this.userStatuses.length != 0){        const userStatusesArrValue: DeviceComplianceUserStatusImpl[] = [];
        this.userStatuses?.forEach(element => {
            userStatusesArrValue.push((element instanceof DeviceComplianceUserStatusImpl? element as DeviceComplianceUserStatusImpl:new DeviceComplianceUserStatusImpl(element)));
        });
            writer.writeCollectionOfObjectValues<DeviceComplianceUserStatusImpl>("userStatuses", userStatusesArrValue);
        }
        if(this.userStatusOverview){
            writer.writeObjectValue<DeviceComplianceUserOverviewImpl>("userStatusOverview", (this.userStatusOverview instanceof DeviceComplianceUserOverviewImpl? this.userStatusOverview as DeviceComplianceUserOverviewImpl: new DeviceComplianceUserOverviewImpl(this.userStatusOverview)));
        }
        if(this.version){
            writer.writeNumberValue("version", this.version);
        }
    };
    /**
     * Gets the userStatuses property value. List of DeviceComplianceUserStatus.
     * @returns a DeviceComplianceUserStatusInterface
     */
    public get userStatuses() {
        return this._userStatuses;
    };
    /**
     * Sets the userStatuses property value. List of DeviceComplianceUserStatus.
     * @param value Value to set for the userStatuses property.
     */
    public set userStatuses(value: DeviceComplianceUserStatus[] | undefined) {
        if(value) {
            const userStatusesArrValue: DeviceComplianceUserStatusImpl[] = [];
            this.userStatuses?.forEach(element => {
                userStatusesArrValue.push((element instanceof DeviceComplianceUserStatusImpl? element as DeviceComplianceUserStatusImpl:new DeviceComplianceUserStatusImpl(element)));
            });
            this._userStatuses = userStatusesArrValue;
        }
    };
    /**
     * Gets the userStatusOverview property value. Device compliance users status overview
     * @returns a DeviceComplianceUserOverviewInterface
     */
    public get userStatusOverview() {
        return this._userStatusOverview;
    };
    /**
     * Sets the userStatusOverview property value. Device compliance users status overview
     * @param value Value to set for the userStatusOverview property.
     */
    public set userStatusOverview(value: DeviceComplianceUserOverview | undefined) {
        if(value) {
            this._userStatusOverview = value instanceof DeviceComplianceUserOverviewImpl? value as DeviceComplianceUserOverviewImpl: new DeviceComplianceUserOverviewImpl(value);
        }
    };
    /**
     * Gets the version property value. Version of the device configuration.
     * @returns a integer
     */
    public get version() {
        return this._version;
    };
    /**
     * Sets the version property value. Version of the device configuration.
     * @param value Value to set for the version property.
     */
    public set version(value: number | undefined) {
        if(value) {
            this._version = value;
        }
    };
}
