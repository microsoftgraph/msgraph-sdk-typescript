import {ComplianceManagementPartner} from './complianceManagementPartner';
import {ComplianceManagementPartnerAssignment} from './complianceManagementPartnerAssignment';
import {createComplianceManagementPartnerAssignmentFromDiscriminatorValue} from './createComplianceManagementPartnerAssignmentFromDiscriminatorValue';
import {DeviceManagementPartnerTenantState} from './deviceManagementPartnerTenantState';
import {ComplianceManagementPartnerAssignmentImpl, EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ComplianceManagementPartnerImpl extends EntityImpl implements ComplianceManagementPartner, Parsable {
    /** User groups which enroll Android devices through partner.  */
    androidEnrollmentAssignments?: ComplianceManagementPartnerAssignment[] | undefined;
    /** Partner onboarded for Android devices.  */
    androidOnboarded?: boolean | undefined;
    /** Partner display name  */
    displayName?: string | undefined;
    /** User groups which enroll ios devices through partner.  */
    iosEnrollmentAssignments?: ComplianceManagementPartnerAssignment[] | undefined;
    /** Partner onboarded for ios devices.  */
    iosOnboarded?: boolean | undefined;
    /** Timestamp of last heartbeat after admin onboarded to the compliance management partner  */
    lastHeartbeatDateTime?: Date | undefined;
    /** User groups which enroll Mac devices through partner.  */
    macOsEnrollmentAssignments?: ComplianceManagementPartnerAssignment[] | undefined;
    /** Partner onboarded for Mac devices.  */
    macOsOnboarded?: boolean | undefined;
    /** Partner state of this tenant. Possible values are: unknown, unavailable, enabled, terminated, rejected, unresponsive.  */
    partnerState?: DeviceManagementPartnerTenantState | undefined;
    /**
     * Instantiates a new complianceManagementPartner and sets the default values.
     * @param complianceManagementPartnerParameterValue 
     */
    public constructor(complianceManagementPartnerParameterValue?: ComplianceManagementPartner | undefined) {
        super();
        this.androidEnrollmentAssignments = complianceManagementPartnerParameterValue?.androidEnrollmentAssignments ;
        this.androidOnboarded = complianceManagementPartnerParameterValue?.androidOnboarded ;
        this.displayName = complianceManagementPartnerParameterValue?.displayName ;
        this.iosEnrollmentAssignments = complianceManagementPartnerParameterValue?.iosEnrollmentAssignments ;
        this.iosOnboarded = complianceManagementPartnerParameterValue?.iosOnboarded ;
        this.lastHeartbeatDateTime = complianceManagementPartnerParameterValue?.lastHeartbeatDateTime ;
        this.macOsEnrollmentAssignments = complianceManagementPartnerParameterValue?.macOsEnrollmentAssignments ;
        this.macOsOnboarded = complianceManagementPartnerParameterValue?.macOsOnboarded ;
        this.partnerState = complianceManagementPartnerParameterValue?.partnerState ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "androidEnrollmentAssignments": n => { this.androidEnrollmentAssignments = n.getCollectionOfObjectValues<ComplianceManagementPartnerAssignmentImpl>(createComplianceManagementPartnerAssignmentFromDiscriminatorValue); },
            "androidOnboarded": n => { this.androidOnboarded = n.getBooleanValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "iosEnrollmentAssignments": n => { this.iosEnrollmentAssignments = n.getCollectionOfObjectValues<ComplianceManagementPartnerAssignmentImpl>(createComplianceManagementPartnerAssignmentFromDiscriminatorValue); },
            "iosOnboarded": n => { this.iosOnboarded = n.getBooleanValue(); },
            "lastHeartbeatDateTime": n => { this.lastHeartbeatDateTime = n.getDateValue(); },
            "macOsEnrollmentAssignments": n => { this.macOsEnrollmentAssignments = n.getCollectionOfObjectValues<ComplianceManagementPartnerAssignmentImpl>(createComplianceManagementPartnerAssignmentFromDiscriminatorValue); },
            "macOsOnboarded": n => { this.macOsOnboarded = n.getBooleanValue(); },
            "partnerState": n => { this.partnerState = n.getEnumValue<DeviceManagementPartnerTenantState>(DeviceManagementPartnerTenantState); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.androidEnrollmentAssignments){
        const androidEnrollmentAssignmentsArrValue: ComplianceManagementPartnerAssignmentImpl[] = []; this.androidEnrollmentAssignments?.forEach(element => {androidEnrollmentAssignmentsArrValue.push(new ComplianceManagementPartnerAssignmentImpl(element));});
        writer.writeCollectionOfObjectValues<ComplianceManagementPartnerAssignmentImpl>("androidEnrollmentAssignments", androidEnrollmentAssignmentsArrValue);
        }
        if(this.androidOnboarded){
        if(this.androidOnboarded)
        writer.writeBooleanValue("androidOnboarded", this.androidOnboarded);
        }
        if(this.displayName){
        if(this.displayName)
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.iosEnrollmentAssignments){
        const iosEnrollmentAssignmentsArrValue: ComplianceManagementPartnerAssignmentImpl[] = []; this.iosEnrollmentAssignments?.forEach(element => {iosEnrollmentAssignmentsArrValue.push(new ComplianceManagementPartnerAssignmentImpl(element));});
        writer.writeCollectionOfObjectValues<ComplianceManagementPartnerAssignmentImpl>("iosEnrollmentAssignments", iosEnrollmentAssignmentsArrValue);
        }
        if(this.iosOnboarded){
        if(this.iosOnboarded)
        writer.writeBooleanValue("iosOnboarded", this.iosOnboarded);
        }
        if(this.lastHeartbeatDateTime){
        if(this.lastHeartbeatDateTime)
        writer.writeDateValue("lastHeartbeatDateTime", this.lastHeartbeatDateTime);
        }
        if(this.macOsEnrollmentAssignments){
        const macOsEnrollmentAssignmentsArrValue: ComplianceManagementPartnerAssignmentImpl[] = []; this.macOsEnrollmentAssignments?.forEach(element => {macOsEnrollmentAssignmentsArrValue.push(new ComplianceManagementPartnerAssignmentImpl(element));});
        writer.writeCollectionOfObjectValues<ComplianceManagementPartnerAssignmentImpl>("macOsEnrollmentAssignments", macOsEnrollmentAssignmentsArrValue);
        }
        if(this.macOsOnboarded){
        if(this.macOsOnboarded)
        writer.writeBooleanValue("macOsOnboarded", this.macOsOnboarded);
        }
        if(this.partnerState){
        if(this.partnerState)
        writer.writeEnumValue<DeviceManagementPartnerTenantState>("partnerState", this.partnerState);
        }
    };
}
