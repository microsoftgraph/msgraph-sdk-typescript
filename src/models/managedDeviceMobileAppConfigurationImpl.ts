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
export class ManagedDeviceMobileAppConfigurationImpl extends EntityImpl implements ManagedDeviceMobileAppConfiguration, Parsable {
    /** The list of group assignemenets for app configration. */
    public assignments?: ManagedDeviceMobileAppConfigurationAssignment[] | undefined;
    /** DateTime the object was created. */
    public createdDateTime?: Date | undefined;
    /** Admin provided description of the Device Configuration. */
    public description?: string | undefined;
    /** List of ManagedDeviceMobileAppConfigurationDeviceStatus. */
    public deviceStatuses?: ManagedDeviceMobileAppConfigurationDeviceStatus[] | undefined;
    /** App configuration device status summary. */
    public deviceStatusSummary?: ManagedDeviceMobileAppConfigurationDeviceSummary | undefined;
    /** Admin provided name of the device configuration. */
    public displayName?: string | undefined;
    /** DateTime the object was last modified. */
    public lastModifiedDateTime?: Date | undefined;
    /** the associated app. */
    public targetedMobileApps?: string[] | undefined;
    /** List of ManagedDeviceMobileAppConfigurationUserStatus. */
    public userStatuses?: ManagedDeviceMobileAppConfigurationUserStatus[] | undefined;
    /** App configuration user status summary. */
    public userStatusSummary?: ManagedDeviceMobileAppConfigurationUserSummary | undefined;
    /** Version of the device configuration. */
    public version?: number | undefined;
    /**
     * Instantiates a new managedDeviceMobileAppConfiguration and sets the default values.
     * @param managedDeviceMobileAppConfigurationParameterValue 
     */
    public constructor(managedDeviceMobileAppConfigurationParameterValue?: ManagedDeviceMobileAppConfiguration | undefined) {
        super();
        this.assignments = managedDeviceMobileAppConfigurationParameterValue?.assignments ;
        this.createdDateTime = managedDeviceMobileAppConfigurationParameterValue?.createdDateTime ;
        this.description = managedDeviceMobileAppConfigurationParameterValue?.description ;
        this.deviceStatuses = managedDeviceMobileAppConfigurationParameterValue?.deviceStatuses ;
        this.deviceStatusSummary = managedDeviceMobileAppConfigurationParameterValue?.deviceStatusSummary ;
        this.displayName = managedDeviceMobileAppConfigurationParameterValue?.displayName ;
        this.lastModifiedDateTime = managedDeviceMobileAppConfigurationParameterValue?.lastModifiedDateTime ;
        this.targetedMobileApps = managedDeviceMobileAppConfigurationParameterValue?.targetedMobileApps ;
        this.userStatuses = managedDeviceMobileAppConfigurationParameterValue?.userStatuses ;
        this.userStatusSummary = managedDeviceMobileAppConfigurationParameterValue?.userStatusSummary ;
        this.version = managedDeviceMobileAppConfigurationParameterValue?.version ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.assignments && this.assignments.length != 0){        const assignmentsArrValue: ManagedDeviceMobileAppConfigurationAssignmentImpl[] = []; this.assignments?.forEach(element => {assignmentsArrValue.push(new ManagedDeviceMobileAppConfigurationAssignmentImpl(element));});
        writer.writeCollectionOfObjectValues<ManagedDeviceMobileAppConfigurationAssignmentImpl>("assignments", assignmentsArrValue);
        }
        if(this.createdDateTime){
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.description){
        writer.writeStringValue("description", this.description);
        }
        if(this.deviceStatuses && this.deviceStatuses.length != 0){        const deviceStatusesArrValue: ManagedDeviceMobileAppConfigurationDeviceStatusImpl[] = []; this.deviceStatuses?.forEach(element => {deviceStatusesArrValue.push(new ManagedDeviceMobileAppConfigurationDeviceStatusImpl(element));});
        writer.writeCollectionOfObjectValues<ManagedDeviceMobileAppConfigurationDeviceStatusImpl>("deviceStatuses", deviceStatusesArrValue);
        }
        if(this.deviceStatusSummary){
        writer.writeObjectValue<ManagedDeviceMobileAppConfigurationDeviceSummaryImpl>("deviceStatusSummary", new ManagedDeviceMobileAppConfigurationDeviceSummaryImpl(this.deviceStatusSummary));
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
        if(this.userStatuses && this.userStatuses.length != 0){        const userStatusesArrValue: ManagedDeviceMobileAppConfigurationUserStatusImpl[] = []; this.userStatuses?.forEach(element => {userStatusesArrValue.push(new ManagedDeviceMobileAppConfigurationUserStatusImpl(element));});
        writer.writeCollectionOfObjectValues<ManagedDeviceMobileAppConfigurationUserStatusImpl>("userStatuses", userStatusesArrValue);
        }
        if(this.userStatusSummary){
        writer.writeObjectValue<ManagedDeviceMobileAppConfigurationUserSummaryImpl>("userStatusSummary", new ManagedDeviceMobileAppConfigurationUserSummaryImpl(this.userStatusSummary));
        }
        if(this.version){
        writer.writeNumberValue("version", this.version);
        }
    };
}
