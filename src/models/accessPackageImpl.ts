import {AccessPackage} from './accessPackage';
import {AccessPackageAssignmentPolicy} from './accessPackageAssignmentPolicy';
import {AccessPackageCatalog} from './accessPackageCatalog';
import {createAccessPackageAssignmentPolicyFromDiscriminatorValue} from './createAccessPackageAssignmentPolicyFromDiscriminatorValue';
import {createAccessPackageCatalogFromDiscriminatorValue} from './createAccessPackageCatalogFromDiscriminatorValue';
import {AccessPackageAssignmentPolicyImpl, AccessPackageCatalogImpl, EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the identityGovernance singleton. */
export class AccessPackageImpl extends EntityImpl implements AccessPackage {
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
    /** Whether the access package is hidden from the requestor. */
    private _isHidden?: boolean | undefined;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. */
    private _modifiedDateTime?: Date | undefined;
    /**
     * Gets the assignmentPolicies property value. The assignmentPolicies property
     * @returns a AccessPackageAssignmentPolicyInterface
     */
    public get assignmentPolicies() {
        return this._assignmentPolicies;
    };
    /**
     * Sets the assignmentPolicies property value. The assignmentPolicies property
     * @param value Value to set for the assignmentPolicies property.
     */
    public set assignmentPolicies(value: AccessPackageAssignmentPolicy[] | undefined) {
        if(value) {
            const assignmentPoliciesArrValue: AccessPackageAssignmentPolicyImpl[] = [];
            this.assignmentPolicies?.forEach(element => {
                assignmentPoliciesArrValue.push((element instanceof AccessPackageAssignmentPolicyImpl? element:new AccessPackageAssignmentPolicyImpl(element)));
            });
            this._assignmentPolicies = assignmentPoliciesArrValue;
        }
    };
    /**
     * Gets the catalog property value. The catalog property
     * @returns a AccessPackageCatalogInterface
     */
    public get catalog() {
        return this._catalog;
    };
    /**
     * Sets the catalog property value. The catalog property
     * @param value Value to set for the catalog property.
     */
    public set catalog(value: AccessPackageCatalog | undefined) {
        if(value) {
            this._catalog = value instanceof AccessPackageCatalogImpl? value : new AccessPackageCatalogImpl(value);
        }
    };
    /**
     * Instantiates a new accessPackage and sets the default values.
     * @param accessPackageParameterValue 
     */
    public constructor(accessPackageParameterValue?: AccessPackage | undefined) {
        super(accessPackageParameterValue);
        this._assignmentPolicies = accessPackageParameterValue?.assignmentPolicies;
        this._catalog = accessPackageParameterValue?.catalog;
        this._createdDateTime = accessPackageParameterValue?.createdDateTime;
        this._description = accessPackageParameterValue?.description;
        this._displayName = accessPackageParameterValue?.displayName;
        this._isHidden = accessPackageParameterValue?.isHidden;
        this._modifiedDateTime = accessPackageParameterValue?.modifiedDateTime;
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
        if(value) {
            this._createdDateTime = value;
        }
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
        if(value) {
            this._description = value;
        }
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
            "assignmentPolicies": n => { this.assignmentPolicies = n.getCollectionOfObjectValues<AccessPackageAssignmentPolicyImpl>(createAccessPackageAssignmentPolicyFromDiscriminatorValue); },
            "catalog": n => { this.catalog = n.getObjectValue<AccessPackageCatalogImpl>(createAccessPackageCatalogFromDiscriminatorValue); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "isHidden": n => { this.isHidden = n.getBooleanValue(); },
            "modifiedDateTime": n => { this.modifiedDateTime = n.getDateValue(); },
        };
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
        if(value) {
            this._isHidden = value;
        }
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
        if(value) {
            this._modifiedDateTime = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.assignmentPolicies && this.assignmentPolicies.length != 0){        const assignmentPoliciesArrValue: AccessPackageAssignmentPolicyImpl[] = [];
        this.assignmentPolicies?.forEach(element => {
            assignmentPoliciesArrValue.push((element instanceof AccessPackageAssignmentPolicyImpl? element:new AccessPackageAssignmentPolicyImpl(element)));
        });
            writer.writeCollectionOfObjectValues<AccessPackageAssignmentPolicyImpl>("assignmentPolicies", assignmentPoliciesArrValue);
        }
        if(this.catalog){
            writer.writeObjectValue<AccessPackageCatalogImpl>("catalog", (!this.catalog || this.catalog instanceof AccessPackageCatalogImpl? this.catalog : new AccessPackageCatalogImpl(this.catalog)));
        }
        if(this.createdDateTime){
            writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.description){
            writer.writeStringValue("description", this.description);
        }
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.isHidden){
            writer.writeBooleanValue("isHidden", this.isHidden);
        }
        if(this.modifiedDateTime){
            writer.writeDateValue("modifiedDateTime", this.modifiedDateTime);
        }
    };
}
