import {createAccessPackageAssignmentFromDiscriminatorValue} from './createAccessPackageAssignmentFromDiscriminatorValue';
import {createAccessPackageAssignmentPolicyFromDiscriminatorValue} from './createAccessPackageAssignmentPolicyFromDiscriminatorValue';
import {createAccessPackageAssignmentRequestFromDiscriminatorValue} from './createAccessPackageAssignmentRequestFromDiscriminatorValue';
import {createAccessPackageCatalogFromDiscriminatorValue} from './createAccessPackageCatalogFromDiscriminatorValue';
import {createAccessPackageFromDiscriminatorValue} from './createAccessPackageFromDiscriminatorValue';
import {createApprovalFromDiscriminatorValue} from './createApprovalFromDiscriminatorValue';
import {createConnectedOrganizationFromDiscriminatorValue} from './createConnectedOrganizationFromDiscriminatorValue';
import {createEntitlementManagementSettingsFromDiscriminatorValue} from './createEntitlementManagementSettingsFromDiscriminatorValue';
import {AccessPackage, AccessPackageAssignment, AccessPackageAssignmentPolicy, AccessPackageAssignmentRequest, AccessPackageCatalog, Approval, ConnectedOrganization, EntitlementManagementSettings, Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EntitlementManagement extends Entity implements Parsable {
    /** Approval stages for decisions associated with access package assignment requests. */
    private _accessPackageAssignmentApprovals?: Approval[] | undefined;
    /** Access packages define the collection of resource roles and the policies for which subjects can request or be assigned access to those resources. */
    private _accessPackages?: AccessPackage[] | undefined;
    /** Access package assignment policies govern which subjects can request or be assigned an access package via an access package assignment. */
    private _assignmentPolicies?: AccessPackageAssignmentPolicy[] | undefined;
    /** Access package assignment requests created by or on behalf of a subject. */
    private _assignmentRequests?: AccessPackageAssignmentRequest[] | undefined;
    /** The assignment of an access package to a subject for a period of time. */
    private _assignments?: AccessPackageAssignment[] | undefined;
    /** A container for access packages. */
    private _catalogs?: AccessPackageCatalog[] | undefined;
    /** References to a directory or domain of another organization whose users can request access. */
    private _connectedOrganizations?: ConnectedOrganization[] | undefined;
    /** The settings that control the behavior of Azure AD entitlement management. */
    private _settings?: EntitlementManagementSettings | undefined;
    /**
     * Gets the accessPackageAssignmentApprovals property value. Approval stages for decisions associated with access package assignment requests.
     * @returns a approval
     */
    public get accessPackageAssignmentApprovals() {
        return this._accessPackageAssignmentApprovals;
    };
    /**
     * Sets the accessPackageAssignmentApprovals property value. Approval stages for decisions associated with access package assignment requests.
     * @param value Value to set for the accessPackageAssignmentApprovals property.
     */
    public set accessPackageAssignmentApprovals(value: Approval[] | undefined) {
        this._accessPackageAssignmentApprovals = value;
    };
    /**
     * Gets the accessPackages property value. Access packages define the collection of resource roles and the policies for which subjects can request or be assigned access to those resources.
     * @returns a accessPackage
     */
    public get accessPackages() {
        return this._accessPackages;
    };
    /**
     * Sets the accessPackages property value. Access packages define the collection of resource roles and the policies for which subjects can request or be assigned access to those resources.
     * @param value Value to set for the accessPackages property.
     */
    public set accessPackages(value: AccessPackage[] | undefined) {
        this._accessPackages = value;
    };
    /**
     * Gets the assignmentPolicies property value. Access package assignment policies govern which subjects can request or be assigned an access package via an access package assignment.
     * @returns a accessPackageAssignmentPolicy
     */
    public get assignmentPolicies() {
        return this._assignmentPolicies;
    };
    /**
     * Sets the assignmentPolicies property value. Access package assignment policies govern which subjects can request or be assigned an access package via an access package assignment.
     * @param value Value to set for the assignmentPolicies property.
     */
    public set assignmentPolicies(value: AccessPackageAssignmentPolicy[] | undefined) {
        this._assignmentPolicies = value;
    };
    /**
     * Gets the assignmentRequests property value. Access package assignment requests created by or on behalf of a subject.
     * @returns a accessPackageAssignmentRequest
     */
    public get assignmentRequests() {
        return this._assignmentRequests;
    };
    /**
     * Sets the assignmentRequests property value. Access package assignment requests created by or on behalf of a subject.
     * @param value Value to set for the assignmentRequests property.
     */
    public set assignmentRequests(value: AccessPackageAssignmentRequest[] | undefined) {
        this._assignmentRequests = value;
    };
    /**
     * Gets the assignments property value. The assignment of an access package to a subject for a period of time.
     * @returns a accessPackageAssignment
     */
    public get assignments() {
        return this._assignments;
    };
    /**
     * Sets the assignments property value. The assignment of an access package to a subject for a period of time.
     * @param value Value to set for the assignments property.
     */
    public set assignments(value: AccessPackageAssignment[] | undefined) {
        this._assignments = value;
    };
    /**
     * Gets the catalogs property value. A container for access packages.
     * @returns a accessPackageCatalog
     */
    public get catalogs() {
        return this._catalogs;
    };
    /**
     * Sets the catalogs property value. A container for access packages.
     * @param value Value to set for the catalogs property.
     */
    public set catalogs(value: AccessPackageCatalog[] | undefined) {
        this._catalogs = value;
    };
    /**
     * Gets the connectedOrganizations property value. References to a directory or domain of another organization whose users can request access.
     * @returns a connectedOrganization
     */
    public get connectedOrganizations() {
        return this._connectedOrganizations;
    };
    /**
     * Sets the connectedOrganizations property value. References to a directory or domain of another organization whose users can request access.
     * @param value Value to set for the connectedOrganizations property.
     */
    public set connectedOrganizations(value: ConnectedOrganization[] | undefined) {
        this._connectedOrganizations = value;
    };
    /**
     * Instantiates a new EntitlementManagement and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.entitlementManagement";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "accessPackageAssignmentApprovals": n => { this.accessPackageAssignmentApprovals = n.getCollectionOfObjectValues<Approval>(createApprovalFromDiscriminatorValue); },
            "accessPackages": n => { this.accessPackages = n.getCollectionOfObjectValues<AccessPackage>(createAccessPackageFromDiscriminatorValue); },
            "assignmentPolicies": n => { this.assignmentPolicies = n.getCollectionOfObjectValues<AccessPackageAssignmentPolicy>(createAccessPackageAssignmentPolicyFromDiscriminatorValue); },
            "assignmentRequests": n => { this.assignmentRequests = n.getCollectionOfObjectValues<AccessPackageAssignmentRequest>(createAccessPackageAssignmentRequestFromDiscriminatorValue); },
            "assignments": n => { this.assignments = n.getCollectionOfObjectValues<AccessPackageAssignment>(createAccessPackageAssignmentFromDiscriminatorValue); },
            "catalogs": n => { this.catalogs = n.getCollectionOfObjectValues<AccessPackageCatalog>(createAccessPackageCatalogFromDiscriminatorValue); },
            "connectedOrganizations": n => { this.connectedOrganizations = n.getCollectionOfObjectValues<ConnectedOrganization>(createConnectedOrganizationFromDiscriminatorValue); },
            "settings": n => { this.settings = n.getObjectValue<EntitlementManagementSettings>(createEntitlementManagementSettingsFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<Approval>("accessPackageAssignmentApprovals", this.accessPackageAssignmentApprovals);
        writer.writeCollectionOfObjectValues<AccessPackage>("accessPackages", this.accessPackages);
        writer.writeCollectionOfObjectValues<AccessPackageAssignmentPolicy>("assignmentPolicies", this.assignmentPolicies);
        writer.writeCollectionOfObjectValues<AccessPackageAssignmentRequest>("assignmentRequests", this.assignmentRequests);
        writer.writeCollectionOfObjectValues<AccessPackageAssignment>("assignments", this.assignments);
        writer.writeCollectionOfObjectValues<AccessPackageCatalog>("catalogs", this.catalogs);
        writer.writeCollectionOfObjectValues<ConnectedOrganization>("connectedOrganizations", this.connectedOrganizations);
        writer.writeObjectValue<EntitlementManagementSettings>("settings", this.settings);
    };
    /**
     * Gets the settings property value. The settings that control the behavior of Azure AD entitlement management.
     * @returns a entitlementManagementSettings
     */
    public get settings() {
        return this._settings;
    };
    /**
     * Sets the settings property value. The settings that control the behavior of Azure AD entitlement management.
     * @param value Value to set for the settings property.
     */
    public set settings(value: EntitlementManagementSettings | undefined) {
        this._settings = value;
    };
}
