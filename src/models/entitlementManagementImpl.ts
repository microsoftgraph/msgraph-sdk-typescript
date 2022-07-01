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
export class EntitlementManagementImpl extends EntityImpl implements EntitlementManagement {
    /** Approval stages for decisions associated with access package assignment requests. */
    private _accessPackageAssignmentApprovals?: Approval[] | undefined;
    /** Represents access package objects. */
    private _accessPackages?: AccessPackage[] | undefined;
    /** Access package assignment policies govern which subjects can request or be assigned an access package via an access package assignment. */
    private _assignmentPolicies?: AccessPackageAssignmentPolicy[] | undefined;
    /** Access package assignment requests created by or on behalf of a subject. */
    private _assignmentRequests?: AccessPackageAssignmentRequest[] | undefined;
    /** The assignment of an access package to a subject for a period of time. */
    private _assignments?: AccessPackageAssignment[] | undefined;
    /** A container for access packages. */
    private _catalogs?: AccessPackageCatalog[] | undefined;
    /** Represents references to a directory or domain of another organization whose users can request access. */
    private _connectedOrganizations?: ConnectedOrganization[] | undefined;
    /** Represents the settings that control the behavior of Azure AD entitlement management. */
    private _settings?: EntitlementManagementSettings | undefined;
    /**
     * Gets the accessPackageAssignmentApprovals property value. Approval stages for decisions associated with access package assignment requests.
     * @returns a ApprovalInterface
     */
    public get accessPackageAssignmentApprovals() {
        return this._accessPackageAssignmentApprovals;
    };
    /**
     * Sets the accessPackageAssignmentApprovals property value. Approval stages for decisions associated with access package assignment requests.
     * @param value Value to set for the accessPackageAssignmentApprovals property.
     */
    public set accessPackageAssignmentApprovals(value: Approval[] | undefined) {
        if(value) {
            const accessPackageAssignmentApprovalsArrValue: ApprovalImpl[] = [];
            this.accessPackageAssignmentApprovals?.forEach(element => {
                accessPackageAssignmentApprovalsArrValue.push((element instanceof ApprovalImpl? element as ApprovalImpl:new ApprovalImpl(element)));
            });
            this._accessPackageAssignmentApprovals = accessPackageAssignmentApprovalsArrValue;
        }
    };
    /**
     * Gets the accessPackages property value. Represents access package objects.
     * @returns a AccessPackageInterface
     */
    public get accessPackages() {
        return this._accessPackages;
    };
    /**
     * Sets the accessPackages property value. Represents access package objects.
     * @param value Value to set for the accessPackages property.
     */
    public set accessPackages(value: AccessPackage[] | undefined) {
        if(value) {
            const accessPackagesArrValue: AccessPackageImpl[] = [];
            this.accessPackages?.forEach(element => {
                accessPackagesArrValue.push((element instanceof AccessPackageImpl? element as AccessPackageImpl:new AccessPackageImpl(element)));
            });
            this._accessPackages = accessPackagesArrValue;
        }
    };
    /**
     * Gets the assignmentPolicies property value. Access package assignment policies govern which subjects can request or be assigned an access package via an access package assignment.
     * @returns a AccessPackageAssignmentPolicyInterface
     */
    public get assignmentPolicies() {
        return this._assignmentPolicies;
    };
    /**
     * Sets the assignmentPolicies property value. Access package assignment policies govern which subjects can request or be assigned an access package via an access package assignment.
     * @param value Value to set for the assignmentPolicies property.
     */
    public set assignmentPolicies(value: AccessPackageAssignmentPolicy[] | undefined) {
        if(value) {
            const assignmentPoliciesArrValue: AccessPackageAssignmentPolicyImpl[] = [];
            this.assignmentPolicies?.forEach(element => {
                assignmentPoliciesArrValue.push((element instanceof AccessPackageAssignmentPolicyImpl? element as AccessPackageAssignmentPolicyImpl:new AccessPackageAssignmentPolicyImpl(element)));
            });
            this._assignmentPolicies = assignmentPoliciesArrValue;
        }
    };
    /**
     * Gets the assignmentRequests property value. Access package assignment requests created by or on behalf of a subject.
     * @returns a AccessPackageAssignmentRequestInterface
     */
    public get assignmentRequests() {
        return this._assignmentRequests;
    };
    /**
     * Sets the assignmentRequests property value. Access package assignment requests created by or on behalf of a subject.
     * @param value Value to set for the assignmentRequests property.
     */
    public set assignmentRequests(value: AccessPackageAssignmentRequest[] | undefined) {
        if(value) {
            const assignmentRequestsArrValue: AccessPackageAssignmentRequestImpl[] = [];
            this.assignmentRequests?.forEach(element => {
                assignmentRequestsArrValue.push((element instanceof AccessPackageAssignmentRequestImpl? element as AccessPackageAssignmentRequestImpl:new AccessPackageAssignmentRequestImpl(element)));
            });
            this._assignmentRequests = assignmentRequestsArrValue;
        }
    };
    /**
     * Gets the assignments property value. The assignment of an access package to a subject for a period of time.
     * @returns a AccessPackageAssignmentInterface
     */
    public get assignments() {
        return this._assignments;
    };
    /**
     * Sets the assignments property value. The assignment of an access package to a subject for a period of time.
     * @param value Value to set for the assignments property.
     */
    public set assignments(value: AccessPackageAssignment[] | undefined) {
        if(value) {
            const assignmentsArrValue: AccessPackageAssignmentImpl[] = [];
            this.assignments?.forEach(element => {
                assignmentsArrValue.push((element instanceof AccessPackageAssignmentImpl? element as AccessPackageAssignmentImpl:new AccessPackageAssignmentImpl(element)));
            });
            this._assignments = assignmentsArrValue;
        }
    };
    /**
     * Gets the catalogs property value. A container for access packages.
     * @returns a AccessPackageCatalogInterface
     */
    public get catalogs() {
        return this._catalogs;
    };
    /**
     * Sets the catalogs property value. A container for access packages.
     * @param value Value to set for the catalogs property.
     */
    public set catalogs(value: AccessPackageCatalog[] | undefined) {
        if(value) {
            const catalogsArrValue: AccessPackageCatalogImpl[] = [];
            this.catalogs?.forEach(element => {
                catalogsArrValue.push((element instanceof AccessPackageCatalogImpl? element as AccessPackageCatalogImpl:new AccessPackageCatalogImpl(element)));
            });
            this._catalogs = catalogsArrValue;
        }
    };
    /**
     * Gets the connectedOrganizations property value. Represents references to a directory or domain of another organization whose users can request access.
     * @returns a ConnectedOrganizationInterface
     */
    public get connectedOrganizations() {
        return this._connectedOrganizations;
    };
    /**
     * Sets the connectedOrganizations property value. Represents references to a directory or domain of another organization whose users can request access.
     * @param value Value to set for the connectedOrganizations property.
     */
    public set connectedOrganizations(value: ConnectedOrganization[] | undefined) {
        if(value) {
            const connectedOrganizationsArrValue: ConnectedOrganizationImpl[] = [];
            this.connectedOrganizations?.forEach(element => {
                connectedOrganizationsArrValue.push((element instanceof ConnectedOrganizationImpl? element as ConnectedOrganizationImpl:new ConnectedOrganizationImpl(element)));
            });
            this._connectedOrganizations = connectedOrganizationsArrValue;
        }
    };
    /**
     * Instantiates a new entitlementManagement and sets the default values.
     * @param entitlementManagementParameterValue 
     */
    public constructor(entitlementManagementParameterValue?: EntitlementManagement | undefined) {
        super(entitlementManagementParameterValue);
        this._accessPackageAssignmentApprovals = entitlementManagementParameterValue?.accessPackageAssignmentApprovals;
        this._accessPackages = entitlementManagementParameterValue?.accessPackages;
        this._assignmentPolicies = entitlementManagementParameterValue?.assignmentPolicies;
        this._assignmentRequests = entitlementManagementParameterValue?.assignmentRequests;
        this._assignments = entitlementManagementParameterValue?.assignments;
        this._catalogs = entitlementManagementParameterValue?.catalogs;
        this._connectedOrganizations = entitlementManagementParameterValue?.connectedOrganizations;
        this._settings = entitlementManagementParameterValue?.settings;
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
        if(this.accessPackageAssignmentApprovals && this.accessPackageAssignmentApprovals.length != 0){        const accessPackageAssignmentApprovalsArrValue: ApprovalImpl[] = [];
        this.accessPackageAssignmentApprovals?.forEach(element => {
            accessPackageAssignmentApprovalsArrValue.push((element instanceof ApprovalImpl? element as ApprovalImpl:new ApprovalImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ApprovalImpl>("accessPackageAssignmentApprovals", accessPackageAssignmentApprovalsArrValue);
        }
        if(this.accessPackages && this.accessPackages.length != 0){        const accessPackagesArrValue: AccessPackageImpl[] = [];
        this.accessPackages?.forEach(element => {
            accessPackagesArrValue.push((element instanceof AccessPackageImpl? element as AccessPackageImpl:new AccessPackageImpl(element)));
        });
            writer.writeCollectionOfObjectValues<AccessPackageImpl>("accessPackages", accessPackagesArrValue);
        }
        if(this.assignmentPolicies && this.assignmentPolicies.length != 0){        const assignmentPoliciesArrValue: AccessPackageAssignmentPolicyImpl[] = [];
        this.assignmentPolicies?.forEach(element => {
            assignmentPoliciesArrValue.push((element instanceof AccessPackageAssignmentPolicyImpl? element as AccessPackageAssignmentPolicyImpl:new AccessPackageAssignmentPolicyImpl(element)));
        });
            writer.writeCollectionOfObjectValues<AccessPackageAssignmentPolicyImpl>("assignmentPolicies", assignmentPoliciesArrValue);
        }
        if(this.assignmentRequests && this.assignmentRequests.length != 0){        const assignmentRequestsArrValue: AccessPackageAssignmentRequestImpl[] = [];
        this.assignmentRequests?.forEach(element => {
            assignmentRequestsArrValue.push((element instanceof AccessPackageAssignmentRequestImpl? element as AccessPackageAssignmentRequestImpl:new AccessPackageAssignmentRequestImpl(element)));
        });
            writer.writeCollectionOfObjectValues<AccessPackageAssignmentRequestImpl>("assignmentRequests", assignmentRequestsArrValue);
        }
        if(this.assignments && this.assignments.length != 0){        const assignmentsArrValue: AccessPackageAssignmentImpl[] = [];
        this.assignments?.forEach(element => {
            assignmentsArrValue.push((element instanceof AccessPackageAssignmentImpl? element as AccessPackageAssignmentImpl:new AccessPackageAssignmentImpl(element)));
        });
            writer.writeCollectionOfObjectValues<AccessPackageAssignmentImpl>("assignments", assignmentsArrValue);
        }
        if(this.catalogs && this.catalogs.length != 0){        const catalogsArrValue: AccessPackageCatalogImpl[] = [];
        this.catalogs?.forEach(element => {
            catalogsArrValue.push((element instanceof AccessPackageCatalogImpl? element as AccessPackageCatalogImpl:new AccessPackageCatalogImpl(element)));
        });
            writer.writeCollectionOfObjectValues<AccessPackageCatalogImpl>("catalogs", catalogsArrValue);
        }
        if(this.connectedOrganizations && this.connectedOrganizations.length != 0){        const connectedOrganizationsArrValue: ConnectedOrganizationImpl[] = [];
        this.connectedOrganizations?.forEach(element => {
            connectedOrganizationsArrValue.push((element instanceof ConnectedOrganizationImpl? element as ConnectedOrganizationImpl:new ConnectedOrganizationImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ConnectedOrganizationImpl>("connectedOrganizations", connectedOrganizationsArrValue);
        }
        if(this.settings){
            writer.writeObjectValue<EntitlementManagementSettingsImpl>("settings", (this.settings instanceof EntitlementManagementSettingsImpl? this.settings as EntitlementManagementSettingsImpl: new EntitlementManagementSettingsImpl(this.settings)));
        }
    };
    /**
     * Gets the settings property value. Represents the settings that control the behavior of Azure AD entitlement management.
     * @returns a EntitlementManagementSettingsInterface
     */
    public get settings() {
        return this._settings;
    };
    /**
     * Sets the settings property value. Represents the settings that control the behavior of Azure AD entitlement management.
     * @param value Value to set for the settings property.
     */
    public set settings(value: EntitlementManagementSettings | undefined) {
        if(value) {
            this._settings = value instanceof EntitlementManagementSettingsImpl? value as EntitlementManagementSettingsImpl: new EntitlementManagementSettingsImpl(value);
        }
    };
}
