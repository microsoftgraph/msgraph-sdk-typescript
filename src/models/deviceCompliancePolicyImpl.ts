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

export class DeviceCompliancePolicyImpl extends EntityImpl implements DeviceCompliancePolicy, Parsable {
    /** The collection of assignments for this compliance policy.  */
    assignments?: DeviceCompliancePolicyAssignment[] | undefined;
    /** DateTime the object was created.  */
    createdDateTime?: Date | undefined;
    /** Admin provided description of the Device Configuration.  */
    description?: string | undefined;
    /** Compliance Setting State Device Summary  */
    deviceSettingStateSummaries?: SettingStateDeviceSummary[] | undefined;
    /** List of DeviceComplianceDeviceStatus.  */
    deviceStatuses?: DeviceComplianceDeviceStatus[] | undefined;
    /** Device compliance devices status overview  */
    deviceStatusOverview?: DeviceComplianceDeviceOverview | undefined;
    /** Admin provided name of the device configuration.  */
    displayName?: string | undefined;
    /** DateTime the object was last modified.  */
    lastModifiedDateTime?: Date | undefined;
    /** The list of scheduled action for this rule  */
    scheduledActionsForRule?: DeviceComplianceScheduledActionForRule[] | undefined;
    /** List of DeviceComplianceUserStatus.  */
    userStatuses?: DeviceComplianceUserStatus[] | undefined;
    /** Device compliance users status overview  */
    userStatusOverview?: DeviceComplianceUserOverview | undefined;
    /** Version of the device configuration.  */
    version?: number | undefined;
    /**
     * Instantiates a new deviceCompliancePolicy and sets the default values.
     * @param deviceCompliancePolicyParameterValue 
     */
    public constructor(deviceCompliancePolicyParameterValue?: DeviceCompliancePolicy | undefined) {
        super();
        this.assignments = deviceCompliancePolicyParameterValue?.assignments ;
        this.createdDateTime = deviceCompliancePolicyParameterValue?.createdDateTime ;
        this.description = deviceCompliancePolicyParameterValue?.description ;
        this.deviceSettingStateSummaries = deviceCompliancePolicyParameterValue?.deviceSettingStateSummaries ;
        this.deviceStatuses = deviceCompliancePolicyParameterValue?.deviceStatuses ;
        this.deviceStatusOverview = deviceCompliancePolicyParameterValue?.deviceStatusOverview ;
        this.displayName = deviceCompliancePolicyParameterValue?.displayName ;
        this.lastModifiedDateTime = deviceCompliancePolicyParameterValue?.lastModifiedDateTime ;
        this.scheduledActionsForRule = deviceCompliancePolicyParameterValue?.scheduledActionsForRule ;
        this.userStatuses = deviceCompliancePolicyParameterValue?.userStatuses ;
        this.userStatusOverview = deviceCompliancePolicyParameterValue?.userStatusOverview ;
        this.version = deviceCompliancePolicyParameterValue?.version ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.assignments){
        const assignmentsArrValue: DeviceCompliancePolicyAssignmentImpl[] = []; this.assignments?.forEach(element => {assignmentsArrValue.push(new DeviceCompliancePolicyAssignmentImpl(element));});
        writer.writeCollectionOfObjectValues<DeviceCompliancePolicyAssignmentImpl>("assignments", assignmentsArrValue);
        }
        if(this.createdDateTime){
        if(this.createdDateTime)
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.description){
        if(this.description)
        writer.writeStringValue("description", this.description);
        }
        if(this.deviceSettingStateSummaries){
        const deviceSettingStateSummariesArrValue: SettingStateDeviceSummaryImpl[] = []; this.deviceSettingStateSummaries?.forEach(element => {deviceSettingStateSummariesArrValue.push(new SettingStateDeviceSummaryImpl(element));});
        writer.writeCollectionOfObjectValues<SettingStateDeviceSummaryImpl>("deviceSettingStateSummaries", deviceSettingStateSummariesArrValue);
        }
        if(this.deviceStatuses){
        const deviceStatusesArrValue: DeviceComplianceDeviceStatusImpl[] = []; this.deviceStatuses?.forEach(element => {deviceStatusesArrValue.push(new DeviceComplianceDeviceStatusImpl(element));});
        writer.writeCollectionOfObjectValues<DeviceComplianceDeviceStatusImpl>("deviceStatuses", deviceStatusesArrValue);
        }
        if(this.deviceStatusOverview){
        if(this.deviceStatusOverview)
        writer.writeObjectValue<DeviceComplianceDeviceOverviewImpl>("deviceStatusOverview", new DeviceComplianceDeviceOverviewImpl(this.deviceStatusOverview));
        }
        if(this.displayName){
        if(this.displayName)
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.lastModifiedDateTime){
        if(this.lastModifiedDateTime)
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        }
        if(this.scheduledActionsForRule){
        const scheduledActionsForRuleArrValue: DeviceComplianceScheduledActionForRuleImpl[] = []; this.scheduledActionsForRule?.forEach(element => {scheduledActionsForRuleArrValue.push(new DeviceComplianceScheduledActionForRuleImpl(element));});
        writer.writeCollectionOfObjectValues<DeviceComplianceScheduledActionForRuleImpl>("scheduledActionsForRule", scheduledActionsForRuleArrValue);
        }
        if(this.userStatuses){
        const userStatusesArrValue: DeviceComplianceUserStatusImpl[] = []; this.userStatuses?.forEach(element => {userStatusesArrValue.push(new DeviceComplianceUserStatusImpl(element));});
        writer.writeCollectionOfObjectValues<DeviceComplianceUserStatusImpl>("userStatuses", userStatusesArrValue);
        }
        if(this.userStatusOverview){
        if(this.userStatusOverview)
        writer.writeObjectValue<DeviceComplianceUserOverviewImpl>("userStatusOverview", new DeviceComplianceUserOverviewImpl(this.userStatusOverview));
        }
        if(this.version){
        if(this.version)
        writer.writeNumberValue("version", this.version);
        }
    };
}
