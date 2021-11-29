import {AccessPackage} from './accessPackage';
import {AccessPackageAssignment} from './accessPackageAssignment';
import {AccessPackageAssignmentRequest} from './accessPackageAssignmentRequest';
import {AccessPackageCatalog} from './accessPackageCatalog';
import {Approval} from './approval';
import {ConnectedOrganization} from './connectedOrganization';
import {EntitlementManagementSettings} from './entitlementManagementSettings';
import {Entity} from './entity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EntitlementManagement extends Entity implements Parsable {
    private _accessPackageAssignmentApprovals?: Approval[] | undefined;
    private _accessPackages?: AccessPackage[] | undefined;
    private _assignmentRequests?: AccessPackageAssignmentRequest[] | undefined;
    private _assignments?: AccessPackageAssignment[] | undefined;
    private _catalogs?: AccessPackageCatalog[] | undefined;
    private _connectedOrganizations?: ConnectedOrganization[] | undefined;
    private _settings?: EntitlementManagementSettings | undefined;
    /**
     * Instantiates a new entitlementManagement and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the accessPackageAssignmentApprovals property value. 
     * @returns a approval
     */
    public get accessPackageAssignmentApprovals() {
        return this._accessPackageAssignmentApprovals;
    };
    /**
     * Gets the accessPackages property value. 
     * @returns a accessPackage
     */
    public get accessPackages() {
        return this._accessPackages;
    };
    /**
     * Gets the assignmentRequests property value. 
     * @returns a accessPackageAssignmentRequest
     */
    public get assignmentRequests() {
        return this._assignmentRequests;
    };
    /**
     * Gets the assignments property value. 
     * @returns a accessPackageAssignment
     */
    public get assignments() {
        return this._assignments;
    };
    /**
     * Gets the catalogs property value. 
     * @returns a accessPackageCatalog
     */
    public get catalogs() {
        return this._catalogs;
    };
    /**
     * Gets the connectedOrganizations property value. 
     * @returns a connectedOrganization
     */
    public get connectedOrganizations() {
        return this._connectedOrganizations;
    };
    /**
     * Gets the settings property value. 
     * @returns a entitlementManagementSettings
     */
    public get settings() {
        return this._settings;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["accessPackageAssignmentApprovals", (o, n) => { (o as unknown as EntitlementManagement).accessPackageAssignmentApprovals = n.getCollectionOfObjectValues<Approval>(Approval); }],
            ["accessPackages", (o, n) => { (o as unknown as EntitlementManagement).accessPackages = n.getCollectionOfObjectValues<AccessPackage>(AccessPackage); }],
            ["assignmentRequests", (o, n) => { (o as unknown as EntitlementManagement).assignmentRequests = n.getCollectionOfObjectValues<AccessPackageAssignmentRequest>(AccessPackageAssignmentRequest); }],
            ["assignments", (o, n) => { (o as unknown as EntitlementManagement).assignments = n.getCollectionOfObjectValues<AccessPackageAssignment>(AccessPackageAssignment); }],
            ["catalogs", (o, n) => { (o as unknown as EntitlementManagement).catalogs = n.getCollectionOfObjectValues<AccessPackageCatalog>(AccessPackageCatalog); }],
            ["connectedOrganizations", (o, n) => { (o as unknown as EntitlementManagement).connectedOrganizations = n.getCollectionOfObjectValues<ConnectedOrganization>(ConnectedOrganization); }],
            ["settings", (o, n) => { (o as unknown as EntitlementManagement).settings = n.getObjectValue<EntitlementManagementSettings>(EntitlementManagementSettings); }],
        ]);
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
        writer.writeCollectionOfObjectValues<AccessPackageAssignmentRequest>("assignmentRequests", this.assignmentRequests);
        writer.writeCollectionOfObjectValues<AccessPackageAssignment>("assignments", this.assignments);
        writer.writeCollectionOfObjectValues<AccessPackageCatalog>("catalogs", this.catalogs);
        writer.writeCollectionOfObjectValues<ConnectedOrganization>("connectedOrganizations", this.connectedOrganizations);
        writer.writeObjectValue<EntitlementManagementSettings>("settings", this.settings);
    };
    /**
     * Sets the accessPackageAssignmentApprovals property value. 
     * @param value Value to set for the accessPackageAssignmentApprovals property.
     */
    public set accessPackageAssignmentApprovals(value: Approval[] | undefined) {
        this._accessPackageAssignmentApprovals = value;
    };
    /**
     * Sets the accessPackages property value. 
     * @param value Value to set for the accessPackages property.
     */
    public set accessPackages(value: AccessPackage[] | undefined) {
        this._accessPackages = value;
    };
    /**
     * Sets the assignmentRequests property value. 
     * @param value Value to set for the assignmentRequests property.
     */
    public set assignmentRequests(value: AccessPackageAssignmentRequest[] | undefined) {
        this._assignmentRequests = value;
    };
    /**
     * Sets the assignments property value. 
     * @param value Value to set for the assignments property.
     */
    public set assignments(value: AccessPackageAssignment[] | undefined) {
        this._assignments = value;
    };
    /**
     * Sets the catalogs property value. 
     * @param value Value to set for the catalogs property.
     */
    public set catalogs(value: AccessPackageCatalog[] | undefined) {
        this._catalogs = value;
    };
    /**
     * Sets the connectedOrganizations property value. 
     * @param value Value to set for the connectedOrganizations property.
     */
    public set connectedOrganizations(value: ConnectedOrganization[] | undefined) {
        this._connectedOrganizations = value;
    };
    /**
     * Sets the settings property value. 
     * @param value Value to set for the settings property.
     */
    public set settings(value: EntitlementManagementSettings | undefined) {
        this._settings = value;
    };
}
