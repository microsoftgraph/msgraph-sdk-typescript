import {AccessPackage} from './accessPackage';
import {AccessPackageAssignment} from './accessPackageAssignment';
import {AccessPackageAssignmentPolicy} from './accessPackageAssignmentPolicy';
import {AccessPackageAssignmentRequest} from './accessPackageAssignmentRequest';
import {AccessPackageCatalog} from './accessPackageCatalog';
import {Approval} from './approval';
import {ConnectedOrganization} from './connectedOrganization';
import {createAccessPackageAssignmentFromDiscriminatorValue} from './createAccessPackageAssignmentFromDiscriminatorValue';
import {createAccessPackageAssignmentPolicyFromDiscriminatorValue} from './createAccessPackageAssignmentPolicyFromDiscriminatorValue';
import {createAccessPackageAssignmentRequestFromDiscriminatorValue} from './createAccessPackageAssignmentRequestFromDiscriminatorValue';
import {createAccessPackageCatalogFromDiscriminatorValue} from './createAccessPackageCatalogFromDiscriminatorValue';
import {createAccessPackageFromDiscriminatorValue} from './createAccessPackageFromDiscriminatorValue';
import {createApprovalFromDiscriminatorValue} from './createApprovalFromDiscriminatorValue';
import {createConnectedOrganizationFromDiscriminatorValue} from './createConnectedOrganizationFromDiscriminatorValue';
import {createEntitlementManagementSettingsFromDiscriminatorValue} from './createEntitlementManagementSettingsFromDiscriminatorValue';
import {EntitlementManagement} from './entitlementManagement';
import {EntitlementManagementSettings} from './entitlementManagementSettings';
import {AccessPackageAssignmentImpl, AccessPackageAssignmentPolicyImpl, AccessPackageAssignmentRequestImpl, AccessPackageCatalogImpl, AccessPackageImpl, ApprovalImpl, ConnectedOrganizationImpl, EntitlementManagementSettingsImpl, EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the identityGovernance singleton. */
export class EntitlementManagementImpl extends EntityImpl implements EntitlementManagement, Parsable {
    /** Approval stages for assignment requests. */
    public accessPackageAssignmentApprovals?: Approval[] | undefined;
    /** Represents access package objects. */
    public accessPackages?: AccessPackage[] | undefined;
    /** Access package assignment policies. */
    public assignmentPolicies?: AccessPackageAssignmentPolicy[] | undefined;
    /** Represents access package assignment requests created by or on behalf of a user. */
    public assignmentRequests?: AccessPackageAssignmentRequest[] | undefined;
    /** Represents the grant of an access package to a subject (user or group). */
    public assignments?: AccessPackageAssignment[] | undefined;
    /** Represents a collection of access packages. */
    public catalogs?: AccessPackageCatalog[] | undefined;
    /** Represents references to a directory or domain of another organization whose users can request access. */
    public connectedOrganizations?: ConnectedOrganization[] | undefined;
    /** Represents the settings that control the behavior of Azure AD entitlement management. */
    public settings?: EntitlementManagementSettings | undefined;
    /**
     * Instantiates a new entitlementManagement and sets the default values.
     * @param entitlementManagementParameterValue 
     */
    public constructor(entitlementManagementParameterValue?: EntitlementManagement | undefined) {
        super();
        this.accessPackageAssignmentApprovals = entitlementManagementParameterValue?.accessPackageAssignmentApprovals ;
        this.accessPackages = entitlementManagementParameterValue?.accessPackages ;
        this.assignmentPolicies = entitlementManagementParameterValue?.assignmentPolicies ;
        this.assignmentRequests = entitlementManagementParameterValue?.assignmentRequests ;
        this.assignments = entitlementManagementParameterValue?.assignments ;
        this.catalogs = entitlementManagementParameterValue?.catalogs ;
        this.connectedOrganizations = entitlementManagementParameterValue?.connectedOrganizations ;
        this.settings = entitlementManagementParameterValue?.settings ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "accessPackageAssignmentApprovals": n => { this.accessPackageAssignmentApprovals = n.getCollectionOfObjectValues<ApprovalImpl>(createApprovalFromDiscriminatorValue); },
            "accessPackages": n => { this.accessPackages = n.getCollectionOfObjectValues<AccessPackageImpl>(createAccessPackageFromDiscriminatorValue); },
            "assignmentPolicies": n => { this.assignmentPolicies = n.getCollectionOfObjectValues<AccessPackageAssignmentPolicyImpl>(createAccessPackageAssignmentPolicyFromDiscriminatorValue); },
            "assignmentRequests": n => { this.assignmentRequests = n.getCollectionOfObjectValues<AccessPackageAssignmentRequestImpl>(createAccessPackageAssignmentRequestFromDiscriminatorValue); },
            "assignments": n => { this.assignments = n.getCollectionOfObjectValues<AccessPackageAssignmentImpl>(createAccessPackageAssignmentFromDiscriminatorValue); },
            "catalogs": n => { this.catalogs = n.getCollectionOfObjectValues<AccessPackageCatalogImpl>(createAccessPackageCatalogFromDiscriminatorValue); },
            "connectedOrganizations": n => { this.connectedOrganizations = n.getCollectionOfObjectValues<ConnectedOrganizationImpl>(createConnectedOrganizationFromDiscriminatorValue); },
            "settings": n => { this.settings = n.getObjectValue<EntitlementManagementSettingsImpl>(createEntitlementManagementSettingsFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.accessPackageAssignmentApprovals && this.accessPackageAssignmentApprovals.length != 0){        const accessPackageAssignmentApprovalsArrValue: ApprovalImpl[] = []; this.accessPackageAssignmentApprovals?.forEach(element => {accessPackageAssignmentApprovalsArrValue.push(new ApprovalImpl(element));});
        writer.writeCollectionOfObjectValues<ApprovalImpl>("accessPackageAssignmentApprovals", accessPackageAssignmentApprovalsArrValue);
        }
        if(this.accessPackages && this.accessPackages.length != 0){        const accessPackagesArrValue: AccessPackageImpl[] = []; this.accessPackages?.forEach(element => {accessPackagesArrValue.push(new AccessPackageImpl(element));});
        writer.writeCollectionOfObjectValues<AccessPackageImpl>("accessPackages", accessPackagesArrValue);
        }
        if(this.assignmentPolicies && this.assignmentPolicies.length != 0){        const assignmentPoliciesArrValue: AccessPackageAssignmentPolicyImpl[] = []; this.assignmentPolicies?.forEach(element => {assignmentPoliciesArrValue.push(new AccessPackageAssignmentPolicyImpl(element));});
        writer.writeCollectionOfObjectValues<AccessPackageAssignmentPolicyImpl>("assignmentPolicies", assignmentPoliciesArrValue);
        }
        if(this.assignmentRequests && this.assignmentRequests.length != 0){        const assignmentRequestsArrValue: AccessPackageAssignmentRequestImpl[] = []; this.assignmentRequests?.forEach(element => {assignmentRequestsArrValue.push(new AccessPackageAssignmentRequestImpl(element));});
        writer.writeCollectionOfObjectValues<AccessPackageAssignmentRequestImpl>("assignmentRequests", assignmentRequestsArrValue);
        }
        if(this.assignments && this.assignments.length != 0){        const assignmentsArrValue: AccessPackageAssignmentImpl[] = []; this.assignments?.forEach(element => {assignmentsArrValue.push(new AccessPackageAssignmentImpl(element));});
        writer.writeCollectionOfObjectValues<AccessPackageAssignmentImpl>("assignments", assignmentsArrValue);
        }
        if(this.catalogs && this.catalogs.length != 0){        const catalogsArrValue: AccessPackageCatalogImpl[] = []; this.catalogs?.forEach(element => {catalogsArrValue.push(new AccessPackageCatalogImpl(element));});
        writer.writeCollectionOfObjectValues<AccessPackageCatalogImpl>("catalogs", catalogsArrValue);
        }
        if(this.connectedOrganizations && this.connectedOrganizations.length != 0){        const connectedOrganizationsArrValue: ConnectedOrganizationImpl[] = []; this.connectedOrganizations?.forEach(element => {connectedOrganizationsArrValue.push(new ConnectedOrganizationImpl(element));});
        writer.writeCollectionOfObjectValues<ConnectedOrganizationImpl>("connectedOrganizations", connectedOrganizationsArrValue);
        }
        if(this.settings){
        writer.writeObjectValue<EntitlementManagementSettingsImpl>("settings", new EntitlementManagementSettingsImpl(this.settings));
        }
    };
}
