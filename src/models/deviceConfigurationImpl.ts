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
export class DeviceConfigurationImpl extends EntityImpl implements DeviceConfiguration {
    /** The list of assignments for the device configuration profile. */
    private _assignments?: DeviceConfigurationAssignment[] | undefined;
    /** DateTime the object was created. */
    private _createdDateTime?: Date | undefined;
    /** Admin provided description of the Device Configuration. */
    private _description?: string | undefined;
    /** Device Configuration Setting State Device Summary */
    private _deviceSettingStateSummaries?: SettingStateDeviceSummary[] | undefined;
    /** Device configuration installation status by device. */
    private _deviceStatuses?: DeviceConfigurationDeviceStatus[] | undefined;
    /** Device Configuration devices status overview */
    private _deviceStatusOverview?: DeviceConfigurationDeviceOverview | undefined;
    /** Admin provided name of the device configuration. */
    private _displayName?: string | undefined;
    /** DateTime the object was last modified. */
    private _lastModifiedDateTime?: Date | undefined;
    /** Device configuration installation status by user. */
    private _userStatuses?: DeviceConfigurationUserStatus[] | undefined;
    /** Device Configuration users status overview */
    private _userStatusOverview?: DeviceConfigurationUserOverview | undefined;
    /** Version of the device configuration. */
    private _version?: number | undefined;
    /**
     * Gets the assignments property value. The list of assignments for the device configuration profile.
     * @returns a DeviceConfigurationAssignmentInterface
     */
    public get assignments() {
        return this._assignments;
    };
    /**
     * Sets the assignments property value. The list of assignments for the device configuration profile.
     * @param value Value to set for the assignments property.
     */
    public set assignments(value: DeviceConfigurationAssignment[] | undefined) {
        if(value) {
            const assignmentsArrValue: DeviceConfigurationAssignmentImpl[] = [];
            this.assignments?.forEach(element => {
                assignmentsArrValue.push((element instanceof DeviceConfigurationAssignmentImpl? element:new DeviceConfigurationAssignmentImpl(element)));
            });
            this._assignments = assignmentsArrValue;
        }
    };
    /**
     * Instantiates a new deviceConfiguration and sets the default values.
     * @param deviceConfigurationParameterValue 
     */
    public constructor(deviceConfigurationParameterValue?: DeviceConfiguration | undefined) {
        super(deviceConfigurationParameterValue);
        this._assignments = deviceConfigurationParameterValue?.assignments;
        this._createdDateTime = deviceConfigurationParameterValue?.createdDateTime;
        this._description = deviceConfigurationParameterValue?.description;
        this._deviceSettingStateSummaries = deviceConfigurationParameterValue?.deviceSettingStateSummaries;
        this._deviceStatuses = deviceConfigurationParameterValue?.deviceStatuses;
        this._deviceStatusOverview = deviceConfigurationParameterValue?.deviceStatusOverview;
        this._displayName = deviceConfigurationParameterValue?.displayName;
        this._lastModifiedDateTime = deviceConfigurationParameterValue?.lastModifiedDateTime;
        this._userStatuses = deviceConfigurationParameterValue?.userStatuses;
        this._userStatusOverview = deviceConfigurationParameterValue?.userStatusOverview;
        this._version = deviceConfigurationParameterValue?.version;
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
     * Gets the deviceSettingStateSummaries property value. Device Configuration Setting State Device Summary
     * @returns a SettingStateDeviceSummaryInterface
     */
    public get deviceSettingStateSummaries() {
        return this._deviceSettingStateSummaries;
    };
    /**
     * Sets the deviceSettingStateSummaries property value. Device Configuration Setting State Device Summary
     * @param value Value to set for the deviceSettingStateSummaries property.
     */
    public set deviceSettingStateSummaries(value: SettingStateDeviceSummary[] | undefined) {
        if(value) {
            const deviceSettingStateSummariesArrValue: SettingStateDeviceSummaryImpl[] = [];
            this.deviceSettingStateSummaries?.forEach(element => {
                deviceSettingStateSummariesArrValue.push((element instanceof SettingStateDeviceSummaryImpl? element:new SettingStateDeviceSummaryImpl(element)));
            });
            this._deviceSettingStateSummaries = deviceSettingStateSummariesArrValue;
        }
    };
    /**
     * Gets the deviceStatuses property value. Device configuration installation status by device.
     * @returns a DeviceConfigurationDeviceStatusInterface
     */
    public get deviceStatuses() {
        return this._deviceStatuses;
    };
    /**
     * Sets the deviceStatuses property value. Device configuration installation status by device.
     * @param value Value to set for the deviceStatuses property.
     */
    public set deviceStatuses(value: DeviceConfigurationDeviceStatus[] | undefined) {
        if(value) {
            const deviceStatusesArrValue: DeviceConfigurationDeviceStatusImpl[] = [];
            this.deviceStatuses?.forEach(element => {
                deviceStatusesArrValue.push((element instanceof DeviceConfigurationDeviceStatusImpl? element:new DeviceConfigurationDeviceStatusImpl(element)));
            });
            this._deviceStatuses = deviceStatusesArrValue;
        }
    };
    /**
     * Gets the deviceStatusOverview property value. Device Configuration devices status overview
     * @returns a DeviceConfigurationDeviceOverviewInterface
     */
    public get deviceStatusOverview() {
        return this._deviceStatusOverview;
    };
    /**
     * Sets the deviceStatusOverview property value. Device Configuration devices status overview
     * @param value Value to set for the deviceStatusOverview property.
     */
    public set deviceStatusOverview(value: DeviceConfigurationDeviceOverview | undefined) {
        if(value) {
            this._deviceStatusOverview = value instanceof DeviceConfigurationDeviceOverviewImpl? value : new DeviceConfigurationDeviceOverviewImpl(value);
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.assignments && this.assignments.length != 0){        const assignmentsArrValue: DeviceConfigurationAssignmentImpl[] = [];
        this.assignments?.forEach(element => {
            assignmentsArrValue.push((element instanceof DeviceConfigurationAssignmentImpl? element:new DeviceConfigurationAssignmentImpl(element)));
        });
            writer.writeCollectionOfObjectValues<DeviceConfigurationAssignmentImpl>("assignments", assignmentsArrValue);
        }
        if(this.createdDateTime){
            writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.description){
            writer.writeStringValue("description", this.description);
        }
        if(this.deviceSettingStateSummaries && this.deviceSettingStateSummaries.length != 0){        const deviceSettingStateSummariesArrValue: SettingStateDeviceSummaryImpl[] = [];
        this.deviceSettingStateSummaries?.forEach(element => {
            deviceSettingStateSummariesArrValue.push((element instanceof SettingStateDeviceSummaryImpl? element:new SettingStateDeviceSummaryImpl(element)));
        });
            writer.writeCollectionOfObjectValues<SettingStateDeviceSummaryImpl>("deviceSettingStateSummaries", deviceSettingStateSummariesArrValue);
        }
        if(this.deviceStatuses && this.deviceStatuses.length != 0){        const deviceStatusesArrValue: DeviceConfigurationDeviceStatusImpl[] = [];
        this.deviceStatuses?.forEach(element => {
            deviceStatusesArrValue.push((element instanceof DeviceConfigurationDeviceStatusImpl? element:new DeviceConfigurationDeviceStatusImpl(element)));
        });
            writer.writeCollectionOfObjectValues<DeviceConfigurationDeviceStatusImpl>("deviceStatuses", deviceStatusesArrValue);
        }
        if(this.deviceStatusOverview){
            writer.writeObjectValue<DeviceConfigurationDeviceOverviewImpl>("deviceStatusOverview", (!this.deviceStatusOverview || this.deviceStatusOverview instanceof DeviceConfigurationDeviceOverviewImpl? this.deviceStatusOverview : new DeviceConfigurationDeviceOverviewImpl(this.deviceStatusOverview)));
        }
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.lastModifiedDateTime){
            writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        }
        if(this.userStatuses && this.userStatuses.length != 0){        const userStatusesArrValue: DeviceConfigurationUserStatusImpl[] = [];
        this.userStatuses?.forEach(element => {
            userStatusesArrValue.push((element instanceof DeviceConfigurationUserStatusImpl? element:new DeviceConfigurationUserStatusImpl(element)));
        });
            writer.writeCollectionOfObjectValues<DeviceConfigurationUserStatusImpl>("userStatuses", userStatusesArrValue);
        }
        if(this.userStatusOverview){
            writer.writeObjectValue<DeviceConfigurationUserOverviewImpl>("userStatusOverview", (!this.userStatusOverview || this.userStatusOverview instanceof DeviceConfigurationUserOverviewImpl? this.userStatusOverview : new DeviceConfigurationUserOverviewImpl(this.userStatusOverview)));
        }
        if(this.version){
            writer.writeNumberValue("version", this.version);
        }
    };
    /**
     * Gets the userStatuses property value. Device configuration installation status by user.
     * @returns a DeviceConfigurationUserStatusInterface
     */
    public get userStatuses() {
        return this._userStatuses;
    };
    /**
     * Sets the userStatuses property value. Device configuration installation status by user.
     * @param value Value to set for the userStatuses property.
     */
    public set userStatuses(value: DeviceConfigurationUserStatus[] | undefined) {
        if(value) {
            const userStatusesArrValue: DeviceConfigurationUserStatusImpl[] = [];
            this.userStatuses?.forEach(element => {
                userStatusesArrValue.push((element instanceof DeviceConfigurationUserStatusImpl? element:new DeviceConfigurationUserStatusImpl(element)));
            });
            this._userStatuses = userStatusesArrValue;
        }
    };
    /**
     * Gets the userStatusOverview property value. Device Configuration users status overview
     * @returns a DeviceConfigurationUserOverviewInterface
     */
    public get userStatusOverview() {
        return this._userStatusOverview;
    };
    /**
     * Sets the userStatusOverview property value. Device Configuration users status overview
     * @param value Value to set for the userStatusOverview property.
     */
    public set userStatusOverview(value: DeviceConfigurationUserOverview | undefined) {
        if(value) {
            this._userStatusOverview = value instanceof DeviceConfigurationUserOverviewImpl? value : new DeviceConfigurationUserOverviewImpl(value);
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
