import {ComplianceManagementPartner} from './complianceManagementPartner';
import {ComplianceManagementPartnerAssignment} from './complianceManagementPartnerAssignment';
import {createComplianceManagementPartnerAssignmentFromDiscriminatorValue} from './createComplianceManagementPartnerAssignmentFromDiscriminatorValue';
import {DeviceManagementPartnerTenantState} from './deviceManagementPartnerTenantState';
import {ComplianceManagementPartnerAssignmentImpl, EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Compliance management partner for all platforms */
export class ComplianceManagementPartnerImpl extends EntityImpl implements ComplianceManagementPartner, Parsable {
    /** User groups which enroll Android devices through partner. */
    public androidEnrollmentAssignments?: ComplianceManagementPartnerAssignment[] | undefined;
    /** Partner onboarded for Android devices. */
    public androidOnboarded?: boolean | undefined;
    /** Partner display name */
    public displayName?: string | undefined;
    /** User groups which enroll ios devices through partner. */
    public iosEnrollmentAssignments?: ComplianceManagementPartnerAssignment[] | undefined;
    /** Partner onboarded for ios devices. */
    public iosOnboarded?: boolean | undefined;
    /** Timestamp of last heartbeat after admin onboarded to the compliance management partner */
    public lastHeartbeatDateTime?: Date | undefined;
    /** User groups which enroll Mac devices through partner. */
    public macOsEnrollmentAssignments?: ComplianceManagementPartnerAssignment[] | undefined;
    /** Partner onboarded for Mac devices. */
    public macOsOnboarded?: boolean | undefined;
    /** Partner state of this tenant. Possible values are: unknown, unavailable, enabled, terminated, rejected, unresponsive. */
    public partnerState?: DeviceManagementPartnerTenantState | undefined;
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
        if(this.androidEnrollmentAssignments && this.androidEnrollmentAssignments.length != 0){        const androidEnrollmentAssignmentsArrValue: ComplianceManagementPartnerAssignmentImpl[] = []; this.androidEnrollmentAssignments?.forEach(element => {androidEnrollmentAssignmentsArrValue.push(new ComplianceManagementPartnerAssignmentImpl(element));});
        writer.writeCollectionOfObjectValues<ComplianceManagementPartnerAssignmentImpl>("androidEnrollmentAssignments", androidEnrollmentAssignmentsArrValue);
        }
        if(this.androidOnboarded){
        writer.writeBooleanValue("androidOnboarded", this.androidOnboarded);
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.iosEnrollmentAssignments && this.iosEnrollmentAssignments.length != 0){        const iosEnrollmentAssignmentsArrValue: ComplianceManagementPartnerAssignmentImpl[] = []; this.iosEnrollmentAssignments?.forEach(element => {iosEnrollmentAssignmentsArrValue.push(new ComplianceManagementPartnerAssignmentImpl(element));});
        writer.writeCollectionOfObjectValues<ComplianceManagementPartnerAssignmentImpl>("iosEnrollmentAssignments", iosEnrollmentAssignmentsArrValue);
        }
        if(this.iosOnboarded){
        writer.writeBooleanValue("iosOnboarded", this.iosOnboarded);
        }
        if(this.lastHeartbeatDateTime){
        writer.writeDateValue("lastHeartbeatDateTime", this.lastHeartbeatDateTime);
        }
        if(this.macOsEnrollmentAssignments && this.macOsEnrollmentAssignments.length != 0){        const macOsEnrollmentAssignmentsArrValue: ComplianceManagementPartnerAssignmentImpl[] = []; this.macOsEnrollmentAssignments?.forEach(element => {macOsEnrollmentAssignmentsArrValue.push(new ComplianceManagementPartnerAssignmentImpl(element));});
        writer.writeCollectionOfObjectValues<ComplianceManagementPartnerAssignmentImpl>("macOsEnrollmentAssignments", macOsEnrollmentAssignmentsArrValue);
        }
        if(this.macOsOnboarded){
        writer.writeBooleanValue("macOsOnboarded", this.macOsOnboarded);
        }
        if(this.partnerState){
        writer.writeEnumValue<DeviceManagementPartnerTenantState>("partnerState", this.partnerState);
        }
    };
}
