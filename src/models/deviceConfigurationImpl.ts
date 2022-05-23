import {createDeviceConfigurationAssignmentFromDiscriminatorValue} from './createDeviceConfigurationAssignmentFromDiscriminatorValue';
import {createDeviceConfigurationDeviceOverviewFromDiscriminatorValue} from './createDeviceConfigurationDeviceOverviewFromDiscriminatorValue';
import {createDeviceConfigurationDeviceStatusFromDiscriminatorValue} from './createDeviceConfigurationDeviceStatusFromDiscriminatorValue';
import {createDeviceConfigurationUserOverviewFromDiscriminatorValue} from './createDeviceConfigurationUserOverviewFromDiscriminatorValue';
import {createDeviceConfigurationUserStatusFromDiscriminatorValue} from './createDeviceConfigurationUserStatusFromDiscriminatorValue';
import {createSettingStateDeviceSummaryFromDiscriminatorValue} from './createSettingStateDeviceSummaryFromDiscriminatorValue';
import {DeviceConfiguration} from './deviceConfiguration';
import {DeviceConfigurationAssignment} from './deviceConfigurationAssignment';
import {DeviceConfigurationDeviceOverview} from './deviceConfigurationDeviceOverview';
import {DeviceConfigurationDeviceStatus} from './deviceConfigurationDeviceStatus';
import {DeviceConfigurationUserOverview} from './deviceConfigurationUserOverview';
import {DeviceConfigurationUserStatus} from './deviceConfigurationUserStatus';
import {DeviceConfigurationAssignmentImpl, DeviceConfigurationDeviceOverviewImpl, DeviceConfigurationDeviceStatusImpl, DeviceConfigurationUserOverviewImpl, DeviceConfigurationUserStatusImpl, EntityImpl, SettingStateDeviceSummaryImpl} from './index';
import {SettingStateDeviceSummary} from './settingStateDeviceSummary';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Device Configuration. */
export class DeviceConfigurationImpl extends EntityImpl implements DeviceConfiguration, Parsable {
    /** The list of assignments for the device configuration profile. */
    public assignments?: DeviceConfigurationAssignment[] | undefined;
    /** DateTime the object was created. */
    public createdDateTime?: Date | undefined;
    /** Admin provided description of the Device Configuration. */
    public description?: string | undefined;
    /** Device Configuration Setting State Device Summary */
    public deviceSettingStateSummaries?: SettingStateDeviceSummary[] | undefined;
    /** Device configuration installation status by device. */
    public deviceStatuses?: DeviceConfigurationDeviceStatus[] | undefined;
    /** Device Configuration devices status overview */
    public deviceStatusOverview?: DeviceConfigurationDeviceOverview | undefined;
    /** Admin provided name of the device configuration. */
    public displayName?: string | undefined;
    /** DateTime the object was last modified. */
    public lastModifiedDateTime?: Date | undefined;
    /** Device configuration installation status by user. */
    public userStatuses?: DeviceConfigurationUserStatus[] | undefined;
    /** Device Configuration users status overview */
    public userStatusOverview?: DeviceConfigurationUserOverview | undefined;
    /** Version of the device configuration. */
    public version?: number | undefined;
    /**
     * Instantiates a new deviceConfiguration and sets the default values.
     * @param deviceConfigurationParameterValue 
     */
    public constructor(deviceConfigurationParameterValue?: DeviceConfiguration | undefined) {
        super();
        this.assignments = deviceConfigurationParameterValue?.assignments ;
        this.createdDateTime = deviceConfigurationParameterValue?.createdDateTime ;
        this.description = deviceConfigurationParameterValue?.description ;
        this.deviceSettingStateSummaries = deviceConfigurationParameterValue?.deviceSettingStateSummaries ;
        this.deviceStatuses = deviceConfigurationParameterValue?.deviceStatuses ;
        this.deviceStatusOverview = deviceConfigurationParameterValue?.deviceStatusOverview ;
        this.displayName = deviceConfigurationParameterValue?.displayName ;
        this.lastModifiedDateTime = deviceConfigurationParameterValue?.lastModifiedDateTime ;
        this.userStatuses = deviceConfigurationParameterValue?.userStatuses ;
        this.userStatusOverview = deviceConfigurationParameterValue?.userStatusOverview ;
        this.version = deviceConfigurationParameterValue?.version ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "assignments": n => { this.assignments = n.getCollectionOfObjectValues<DeviceConfigurationAssignmentImpl>(createDeviceConfigurationAssignmentFromDiscriminatorValue); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "description": n => { this.description = n.getStringValue(); },
            "deviceSettingStateSummaries": n => { this.deviceSettingStateSummaries = n.getCollectionOfObjectValues<SettingStateDeviceSummaryImpl>(createSettingStateDeviceSummaryFromDiscriminatorValue); },
            "deviceStatuses": n => { this.deviceStatuses = n.getCollectionOfObjectValues<DeviceConfigurationDeviceStatusImpl>(createDeviceConfigurationDeviceStatusFromDiscriminatorValue); },
            "deviceStatusOverview": n => { this.deviceStatusOverview = n.getObjectValue<DeviceConfigurationDeviceOverviewImpl>(createDeviceConfigurationDeviceOverviewFromDiscriminatorValue); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
            "userStatuses": n => { this.userStatuses = n.getCollectionOfObjectValues<DeviceConfigurationUserStatusImpl>(createDeviceConfigurationUserStatusFromDiscriminatorValue); },
            "userStatusOverview": n => { this.userStatusOverview = n.getObjectValue<DeviceConfigurationUserOverviewImpl>(createDeviceConfigurationUserOverviewFromDiscriminatorValue); },
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
        if(this.assignments && this.assignments.length != 0){        const assignmentsArrValue: DeviceConfigurationAssignmentImpl[] = []; this.assignments?.forEach(element => {assignmentsArrValue.push(new DeviceConfigurationAssignmentImpl(element));});
        writer.writeCollectionOfObjectValues<DeviceConfigurationAssignmentImpl>("assignments", assignmentsArrValue);
        }
        if(this.createdDateTime){
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.description){
        writer.writeStringValue("description", this.description);
        }
        if(this.deviceSettingStateSummaries && this.deviceSettingStateSummaries.length != 0){        const deviceSettingStateSummariesArrValue: SettingStateDeviceSummaryImpl[] = []; this.deviceSettingStateSummaries?.forEach(element => {deviceSettingStateSummariesArrValue.push(new SettingStateDeviceSummaryImpl(element));});
        writer.writeCollectionOfObjectValues<SettingStateDeviceSummaryImpl>("deviceSettingStateSummaries", deviceSettingStateSummariesArrValue);
        }
        if(this.deviceStatuses && this.deviceStatuses.length != 0){        const deviceStatusesArrValue: DeviceConfigurationDeviceStatusImpl[] = []; this.deviceStatuses?.forEach(element => {deviceStatusesArrValue.push(new DeviceConfigurationDeviceStatusImpl(element));});
        writer.writeCollectionOfObjectValues<DeviceConfigurationDeviceStatusImpl>("deviceStatuses", deviceStatusesArrValue);
        }
        if(this.deviceStatusOverview){
        writer.writeObjectValue<DeviceConfigurationDeviceOverviewImpl>("deviceStatusOverview", new DeviceConfigurationDeviceOverviewImpl(this.deviceStatusOverview));
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.lastModifiedDateTime){
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        }
        if(this.userStatuses && this.userStatuses.length != 0){        const userStatusesArrValue: DeviceConfigurationUserStatusImpl[] = []; this.userStatuses?.forEach(element => {userStatusesArrValue.push(new DeviceConfigurationUserStatusImpl(element));});
        writer.writeCollectionOfObjectValues<DeviceConfigurationUserStatusImpl>("userStatuses", userStatusesArrValue);
        }
        if(this.userStatusOverview){
        writer.writeObjectValue<DeviceConfigurationUserOverviewImpl>("userStatusOverview", new DeviceConfigurationUserOverviewImpl(this.userStatusOverview));
        }
        if(this.version){
        writer.writeNumberValue("version", this.version);
        }
    };
}
