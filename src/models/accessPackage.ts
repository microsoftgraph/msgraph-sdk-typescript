import {createAccessPackageAssignmentPolicyFromDiscriminatorValue} from './createAccessPackageAssignmentPolicyFromDiscriminatorValue';
import {createAccessPackageCatalogFromDiscriminatorValue} from './createAccessPackageCatalogFromDiscriminatorValue';
import {createAccessPackageFromDiscriminatorValue} from './createAccessPackageFromDiscriminatorValue';
import {createGroupFromDiscriminatorValue} from './createGroupFromDiscriminatorValue';
import {AccessPackageAssignmentPolicy, AccessPackageCatalog, Entity, Group} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessPackage extends Entity implements Parsable {
    /** The access packages that are incompatible with this package. Read-only. */
    private _accessPackagesIncompatibleWith?: AccessPackage[] | undefined;
    /** The assignmentPolicies property */
    private _assignmentPolicies?: AccessPackageAssignmentPolicy[] | undefined;
    /** The catalog property */
    private _catalog?: AccessPackageCatalog | undefined;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. */
    private _createdDateTime?: Date | undefined;
    /** The description of the access package. */
    private _description?: string | undefined;
    /** The display name of the access package. Supports $filter (eq, contains). */
    private _displayName?: string | undefined;
    /** The access packages whose assigned users are ineligible to be assigned this access package. */
    private _incompatibleAccessPackages?: AccessPackage[] | undefined;
    /** The groups whose members are ineligible to be assigned this access package. */
    private _incompatibleGroups?: Group[] | undefined;
    /** Whether the access package is hidden from the requestor. */
    private _isHidden?: boolean | undefined;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. */
    private _modifiedDateTime?: Date | undefined;
    /**
     * Gets the accessPackagesIncompatibleWith property value. The access packages that are incompatible with this package. Read-only.
     * @returns a accessPackage
     */
    public get accessPackagesIncompatibleWith() {
        return this._accessPackagesIncompatibleWith;
    };
    /**
     * Sets the accessPackagesIncompatibleWith property value. The access packages that are incompatible with this package. Read-only.
     * @param value Value to set for the accessPackagesIncompatibleWith property.
     */
    public set accessPackagesIncompatibleWith(value: AccessPackage[] | undefined) {
        this._accessPackagesIncompatibleWith = value;
    };
    /**
     * Gets the assignmentPolicies property value. The assignmentPolicies property
     * @returns a accessPackageAssignmentPolicy
     */
    public get assignmentPolicies() {
        return this._assignmentPolicies;
    };
    /**
     * Sets the assignmentPolicies property value. The assignmentPolicies property
     * @param value Value to set for the assignmentPolicies property.
     */
    public set assignmentPolicies(value: AccessPackageAssignmentPolicy[] | undefined) {
        this._assignmentPolicies = value;
    };
    /**
     * Gets the catalog property value. The catalog property
     * @returns a accessPackageCatalog
     */
    public get catalog() {
        return this._catalog;
    };
    /**
     * Sets the catalog property value. The catalog property
     * @param value Value to set for the catalog property.
     */
    public set catalog(value: AccessPackageCatalog | undefined) {
        this._catalog = value;
    };
    /**
     * Instantiates a new accessPackage and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Gets the description property value. The description of the access package.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. The description of the access package.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the displayName property value. The display name of the access package. Supports $filter (eq, contains).
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The display name of the access package. Supports $filter (eq, contains).
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "accessPackagesIncompatibleWith": n => { this.accessPackagesIncompatibleWith = n.getCollectionOfObjectValues<AccessPackage>(createAccessPackageFromDiscriminatorValue); },
            "assignmentPolicies": n => { this.assignmentPolicies = n.getCollectionOfObjectValues<AccessPackageAssignmentPolicy>(createAccessPackageAssignmentPolicyFromDiscriminatorValue); },
            "catalog": n => { this.catalog = n.getObjectValue<AccessPackageCatalog>(createAccessPackageCatalogFromDiscriminatorValue); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "incompatibleAccessPackages": n => { this.incompatibleAccessPackages = n.getCollectionOfObjectValues<AccessPackage>(createAccessPackageFromDiscriminatorValue); },
            "incompatibleGroups": n => { this.incompatibleGroups = n.getCollectionOfObjectValues<Group>(createGroupFromDiscriminatorValue); },
            "isHidden": n => { this.isHidden = n.getBooleanValue(); },
            "modifiedDateTime": n => { this.modifiedDateTime = n.getDateValue(); },
        };
    };
    /**
     * Gets the incompatibleAccessPackages property value. The access packages whose assigned users are ineligible to be assigned this access package.
     * @returns a accessPackage
     */
    public get incompatibleAccessPackages() {
        return this._incompatibleAccessPackages;
    };
    /**
     * Sets the incompatibleAccessPackages property value. The access packages whose assigned users are ineligible to be assigned this access package.
     * @param value Value to set for the incompatibleAccessPackages property.
     */
    public set incompatibleAccessPackages(value: AccessPackage[] | undefined) {
        this._incompatibleAccessPackages = value;
    };
    /**
     * Gets the incompatibleGroups property value. The groups whose members are ineligible to be assigned this access package.
     * @returns a group
     */
    public get incompatibleGroups() {
        return this._incompatibleGroups;
    };
    /**
     * Sets the incompatibleGroups property value. The groups whose members are ineligible to be assigned this access package.
     * @param value Value to set for the incompatibleGroups property.
     */
    public set incompatibleGroups(value: Group[] | undefined) {
        this._incompatibleGroups = value;
    };
    /**
     * Gets the isHidden property value. Whether the access package is hidden from the requestor.
     * @returns a boolean
     */
    public get isHidden() {
        return this._isHidden;
    };
    /**
     * Sets the isHidden property value. Whether the access package is hidden from the requestor.
     * @param value Value to set for the isHidden property.
     */
    public set isHidden(value: boolean | undefined) {
        this._isHidden = value;
    };
    /**
     * Gets the modifiedDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     * @returns a Date
     */
    public get modifiedDateTime() {
        return this._modifiedDateTime;
    };
    /**
     * Sets the modifiedDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     * @param value Value to set for the modifiedDateTime property.
     */
    public set modifiedDateTime(value: Date | undefined) {
        this._modifiedDateTime = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<AccessPackage>("accessPackagesIncompatibleWith", this.accessPackagesIncompatibleWith);
        writer.writeCollectionOfObjectValues<AccessPackageAssignmentPolicy>("assignmentPolicies", this.assignmentPolicies);
        writer.writeObjectValue<AccessPackageCatalog>("catalog", this.catalog);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeCollectionOfObjectValues<AccessPackage>("incompatibleAccessPackages", this.incompatibleAccessPackages);
        writer.writeCollectionOfObjectValues<Group>("incompatibleGroups", this.incompatibleGroups);
        writer.writeBooleanValue("isHidden", this.isHidden);
        writer.writeDateValue("modifiedDateTime", this.modifiedDateTime);
    };
}
