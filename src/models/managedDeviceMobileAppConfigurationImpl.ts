import {createManagedDeviceMobileAppConfigurationAssignmentFromDiscriminatorValue} from './createManagedDeviceMobileAppConfigurationAssignmentFromDiscriminatorValue';
import {createManagedDeviceMobileAppConfigurationDeviceStatusFromDiscriminatorValue} from './createManagedDeviceMobileAppConfigurationDeviceStatusFromDiscriminatorValue';
import {createManagedDeviceMobileAppConfigurationDeviceSummaryFromDiscriminatorValue} from './createManagedDeviceMobileAppConfigurationDeviceSummaryFromDiscriminatorValue';
import {createManagedDeviceMobileAppConfigurationUserStatusFromDiscriminatorValue} from './createManagedDeviceMobileAppConfigurationUserStatusFromDiscriminatorValue';
import {createManagedDeviceMobileAppConfigurationUserSummaryFromDiscriminatorValue} from './createManagedDeviceMobileAppConfigurationUserSummaryFromDiscriminatorValue';
import {EntityImpl, ManagedDeviceMobileAppConfigurationAssignmentImpl, ManagedDeviceMobileAppConfigurationDeviceStatusImpl, ManagedDeviceMobileAppConfigurationDeviceSummaryImpl, ManagedDeviceMobileAppConfigurationUserStatusImpl, ManagedDeviceMobileAppConfigurationUserSummaryImpl} from './index';
import {ManagedDeviceMobileAppConfiguration} from './managedDeviceMobileAppConfiguration';
import {ManagedDeviceMobileAppConfigurationAssignment} from './managedDeviceMobileAppConfigurationAssignment';
import {ManagedDeviceMobileAppConfigurationDeviceStatus} from './managedDeviceMobileAppConfigurationDeviceStatus';
import {ManagedDeviceMobileAppConfigurationDeviceSummary} from './managedDeviceMobileAppConfigurationDeviceSummary';
import {ManagedDeviceMobileAppConfigurationUserStatus} from './managedDeviceMobileAppConfigurationUserStatus';
import {ManagedDeviceMobileAppConfigurationUserSummary} from './managedDeviceMobileAppConfigurationUserSummary';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** An abstract class for Mobile app configuration for enrolled devices. */
export class ManagedDeviceMobileAppConfigurationImpl extends EntityImpl implements ManagedDeviceMobileAppConfiguration {
    /** The list of group assignemenets for app configration. */
    private _assignments?: ManagedDeviceMobileAppConfigurationAssignment[] | undefined;
    /** DateTime the object was created. */
    private _createdDateTime?: Date | undefined;
    /** Admin provided description of the Device Configuration. */
    private _description?: string | undefined;
    /** List of ManagedDeviceMobileAppConfigurationDeviceStatus. */
    private _deviceStatuses?: ManagedDeviceMobileAppConfigurationDeviceStatus[] | undefined;
    /** App configuration device status summary. */
    private _deviceStatusSummary?: ManagedDeviceMobileAppConfigurationDeviceSummary | undefined;
    /** Admin provided name of the device configuration. */
    private _displayName?: string | undefined;
    /** DateTime the object was last modified. */
    private _lastModifiedDateTime?: Date | undefined;
    /** the associated app. */
    private _targetedMobileApps?: string[] | undefined;
    /** List of ManagedDeviceMobileAppConfigurationUserStatus. */
    private _userStatuses?: ManagedDeviceMobileAppConfigurationUserStatus[] | undefined;
    /** App configuration user status summary. */
    private _userStatusSummary?: ManagedDeviceMobileAppConfigurationUserSummary | undefined;
    /** Version of the device configuration. */
    private _version?: number | undefined;
    /**
     * Gets the assignments property value. The list of group assignemenets for app configration.
     * @returns a ManagedDeviceMobileAppConfigurationAssignmentInterface
     */
    public get assignments() {
        return this._assignments;
    };
    /**
     * Sets the assignments property value. The list of group assignemenets for app configration.
     * @param value Value to set for the assignments property.
     */
    public set assignments(value: ManagedDeviceMobileAppConfigurationAssignment[] | undefined) {
        if(value) {
            const assignmentsArrValue: ManagedDeviceMobileAppConfigurationAssignmentImpl[] = [];
            this.assignments?.forEach(element => {
                assignmentsArrValue.push((element instanceof ManagedDeviceMobileAppConfigurationAssignmentImpl? element as ManagedDeviceMobileAppConfigurationAssignmentImpl:new ManagedDeviceMobileAppConfigurationAssignmentImpl(element)));
            });
            this._assignments = assignmentsArrValue;
        }
    };
    /**
     * Instantiates a new managedDeviceMobileAppConfiguration and sets the default values.
     * @param managedDeviceMobileAppConfigurationParameterValue 
     */
    public constructor(managedDeviceMobileAppConfigurationParameterValue?: ManagedDeviceMobileAppConfiguration | undefined) {
        super(managedDeviceMobileAppConfigurationParameterValue);
        this._assignments = managedDeviceMobileAppConfigurationParameterValue?.assignments;
        this._createdDateTime = managedDeviceMobileAppConfigurationParameterValue?.createdDateTime;
        this._description = managedDeviceMobileAppConfigurationParameterValue?.description;
        this._deviceStatuses = managedDeviceMobileAppConfigurationParameterValue?.deviceStatuses;
        this._deviceStatusSummary = managedDeviceMobileAppConfigurationParameterValue?.deviceStatusSummary;
        this._displayName = managedDeviceMobileAppConfigurationParameterValue?.displayName;
        this._lastModifiedDateTime = managedDeviceMobileAppConfigurationParameterValue?.lastModifiedDateTime;
        this._targetedMobileApps = managedDeviceMobileAppConfigurationParameterValue?.targetedMobileApps;
        this._userStatuses = managedDeviceMobileAppConfigurationParameterValue?.userStatuses;
        this._userStatusSummary = managedDeviceMobileAppConfigurationParameterValue?.userStatusSummary;
        this._version = managedDeviceMobileAppConfigurationParameterValue?.version;
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
     * Gets the deviceStatuses property value. List of ManagedDeviceMobileAppConfigurationDeviceStatus.
     * @returns a ManagedDeviceMobileAppConfigurationDeviceStatusInterface
     */
    public get deviceStatuses() {
        return this._deviceStatuses;
    };
    /**
     * Sets the deviceStatuses property value. List of ManagedDeviceMobileAppConfigurationDeviceStatus.
     * @param value Value to set for the deviceStatuses property.
     */
    public set deviceStatuses(value: ManagedDeviceMobileAppConfigurationDeviceStatus[] | undefined) {
        if(value) {
            const deviceStatusesArrValue: ManagedDeviceMobileAppConfigurationDeviceStatusImpl[] = [];
            this.deviceStatuses?.forEach(element => {
                deviceStatusesArrValue.push((element instanceof ManagedDeviceMobileAppConfigurationDeviceStatusImpl? element as ManagedDeviceMobileAppConfigurationDeviceStatusImpl:new ManagedDeviceMobileAppConfigurationDeviceStatusImpl(element)));
            });
            this._deviceStatuses = deviceStatusesArrValue;
        }
    };
    /**
     * Gets the deviceStatusSummary property value. App configuration device status summary.
     * @returns a ManagedDeviceMobileAppConfigurationDeviceSummaryInterface
     */
    public get deviceStatusSummary() {
        return this._deviceStatusSummary;
    };
    /**
     * Sets the deviceStatusSummary property value. App configuration device status summary.
     * @param value Value to set for the deviceStatusSummary property.
     */
    public set deviceStatusSummary(value: ManagedDeviceMobileAppConfigurationDeviceSummary | undefined) {
        if(value) {
            this._deviceStatusSummary = value instanceof ManagedDeviceMobileAppConfigurationDeviceSummaryImpl? value as ManagedDeviceMobileAppConfigurationDeviceSummaryImpl: new ManagedDeviceMobileAppConfigurationDeviceSummaryImpl(value);
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
            "assignments": n => { this.assignments = n.getCollectionOfObjectValues<ManagedDeviceMobileAppConfigurationAssignmentImpl>(createManagedDeviceMobileAppConfigurationAssignmentFromDiscriminatorValue); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "description": n => { this.description = n.getStringValue(); },
            "deviceStatuses": n => { this.deviceStatuses = n.getCollectionOfObjectValues<ManagedDeviceMobileAppConfigurationDeviceStatusImpl>(createManagedDeviceMobileAppConfigurationDeviceStatusFromDiscriminatorValue); },
            "deviceStatusSummary": n => { this.deviceStatusSummary = n.getObjectValue<ManagedDeviceMobileAppConfigurationDeviceSummaryImpl>(createManagedDeviceMobileAppConfigurationDeviceSummaryFromDiscriminatorValue); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
            "targetedMobileApps": n => { this.targetedMobileApps = n.getCollectionOfPrimitiveValues<string>(); },
            "userStatuses": n => { this.userStatuses = n.getCollectionOfObjectValues<ManagedDeviceMobileAppConfigurationUserStatusImpl>(createManagedDeviceMobileAppConfigurationUserStatusFromDiscriminatorValue); },
            "userStatusSummary": n => { this.userStatusSummary = n.getObjectValue<ManagedDeviceMobileAppConfigurationUserSummaryImpl>(createManagedDeviceMobileAppConfigurationUserSummaryFromDiscriminatorValue); },
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
        if(this.assignments && this.assignments.length != 0){        const assignmentsArrValue: ManagedDeviceMobileAppConfigurationAssignmentImpl[] = [];
        this.assignments?.forEach(element => {
            assignmentsArrValue.push((element instanceof ManagedDeviceMobileAppConfigurationAssignmentImpl? element as ManagedDeviceMobileAppConfigurationAssignmentImpl:new ManagedDeviceMobileAppConfigurationAssignmentImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ManagedDeviceMobileAppConfigurationAssignmentImpl>("assignments", assignmentsArrValue);
        }
        if(this.createdDateTime){
            writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.description){
            writer.writeStringValue("description", this.description);
        }
        if(this.deviceStatuses && this.deviceStatuses.length != 0){        const deviceStatusesArrValue: ManagedDeviceMobileAppConfigurationDeviceStatusImpl[] = [];
        this.deviceStatuses?.forEach(element => {
            deviceStatusesArrValue.push((element instanceof ManagedDeviceMobileAppConfigurationDeviceStatusImpl? element as ManagedDeviceMobileAppConfigurationDeviceStatusImpl:new ManagedDeviceMobileAppConfigurationDeviceStatusImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ManagedDeviceMobileAppConfigurationDeviceStatusImpl>("deviceStatuses", deviceStatusesArrValue);
        }
        if(this.deviceStatusSummary){
            writer.writeObjectValue<ManagedDeviceMobileAppConfigurationDeviceSummaryImpl>("deviceStatusSummary", (this.deviceStatusSummary instanceof ManagedDeviceMobileAppConfigurationDeviceSummaryImpl? this.deviceStatusSummary as ManagedDeviceMobileAppConfigurationDeviceSummaryImpl: new ManagedDeviceMobileAppConfigurationDeviceSummaryImpl(this.deviceStatusSummary)));
        }
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.lastModifiedDateTime){
            writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        }
        if(this.targetedMobileApps){
            writer.writeCollectionOfPrimitiveValues<string>("targetedMobileApps", this.targetedMobileApps);
        }
        if(this.userStatuses && this.userStatuses.length != 0){        const userStatusesArrValue: ManagedDeviceMobileAppConfigurationUserStatusImpl[] = [];
        this.userStatuses?.forEach(element => {
            userStatusesArrValue.push((element instanceof ManagedDeviceMobileAppConfigurationUserStatusImpl? element as ManagedDeviceMobileAppConfigurationUserStatusImpl:new ManagedDeviceMobileAppConfigurationUserStatusImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ManagedDeviceMobileAppConfigurationUserStatusImpl>("userStatuses", userStatusesArrValue);
        }
        if(this.userStatusSummary){
            writer.writeObjectValue<ManagedDeviceMobileAppConfigurationUserSummaryImpl>("userStatusSummary", (this.userStatusSummary instanceof ManagedDeviceMobileAppConfigurationUserSummaryImpl? this.userStatusSummary as ManagedDeviceMobileAppConfigurationUserSummaryImpl: new ManagedDeviceMobileAppConfigurationUserSummaryImpl(this.userStatusSummary)));
        }
        if(this.version){
            writer.writeNumberValue("version", this.version);
        }
    };
    /**
     * Gets the targetedMobileApps property value. the associated app.
     * @returns a string
     */
    public get targetedMobileApps() {
        return this._targetedMobileApps;
    };
    /**
     * Sets the targetedMobileApps property value. the associated app.
     * @param value Value to set for the targetedMobileApps property.
     */
    public set targetedMobileApps(value: string[] | undefined) {
        if(value) {
            this._targetedMobileApps = value;
        }
    };
    /**
     * Gets the userStatuses property value. List of ManagedDeviceMobileAppConfigurationUserStatus.
     * @returns a ManagedDeviceMobileAppConfigurationUserStatusInterface
     */
    public get userStatuses() {
        return this._userStatuses;
    };
    /**
     * Sets the userStatuses property value. List of ManagedDeviceMobileAppConfigurationUserStatus.
     * @param value Value to set for the userStatuses property.
     */
    public set userStatuses(value: ManagedDeviceMobileAppConfigurationUserStatus[] | undefined) {
        if(value) {
            const userStatusesArrValue: ManagedDeviceMobileAppConfigurationUserStatusImpl[] = [];
            this.userStatuses?.forEach(element => {
                userStatusesArrValue.push((element instanceof ManagedDeviceMobileAppConfigurationUserStatusImpl? element as ManagedDeviceMobileAppConfigurationUserStatusImpl:new ManagedDeviceMobileAppConfigurationUserStatusImpl(element)));
            });
            this._userStatuses = userStatusesArrValue;
        }
    };
    /**
     * Gets the userStatusSummary property value. App configuration user status summary.
     * @returns a ManagedDeviceMobileAppConfigurationUserSummaryInterface
     */
    public get userStatusSummary() {
        return this._userStatusSummary;
    };
    /**
     * Sets the userStatusSummary property value. App configuration user status summary.
     * @param value Value to set for the userStatusSummary property.
     */
    public set userStatusSummary(value: ManagedDeviceMobileAppConfigurationUserSummary | undefined) {
        if(value) {
            this._userStatusSummary = value instanceof ManagedDeviceMobileAppConfigurationUserSummaryImpl? value as ManagedDeviceMobileAppConfigurationUserSummaryImpl: new ManagedDeviceMobileAppConfigurationUserSummaryImpl(value);
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
