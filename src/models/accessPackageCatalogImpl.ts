import {AccessPackage} from './accessPackage';
import {AccessPackageCatalog} from './accessPackageCatalog';
import {AccessPackageCatalogState} from './accessPackageCatalogState';
import {AccessPackageCatalogType} from './accessPackageCatalogType';
import {createAccessPackageFromDiscriminatorValue} from './createAccessPackageFromDiscriminatorValue';
import {AccessPackageImpl, EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the identityGovernance singleton. */
export class AccessPackageCatalogImpl extends EntityImpl implements AccessPackageCatalog {
    /** The access packages in this catalog. Read-only. Nullable. Supports $expand. */
    private _accessPackages?: AccessPackage[] | undefined;
    /** One of UserManaged or ServiceDefault. */
    private _catalogType?: AccessPackageCatalogType | undefined;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. */
    private _createdDateTime?: Date | undefined;
    /** The description of the access package catalog. */
    private _description?: string | undefined;
    /** The display name of the access package catalog. Supports $filter (eq, contains). */
    private _displayName?: string | undefined;
    /** Whether the access packages in this catalog can be requested by users outside of the tenant. */
    private _isExternallyVisible?: boolean | undefined;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. */
    private _modifiedDateTime?: Date | undefined;
    /** Has the value published if the access packages are available for management. The possible values are: unpublished, published, unknownFutureValue. */
    private _state?: AccessPackageCatalogState | undefined;
    /**
     * Gets the accessPackages property value. The access packages in this catalog. Read-only. Nullable. Supports $expand.
     * @returns a AccessPackageInterface
     */
    public get accessPackages() {
        return this._accessPackages;
    };
    /**
     * Sets the accessPackages property value. The access packages in this catalog. Read-only. Nullable. Supports $expand.
     * @param value Value to set for the accessPackages property.
     */
    public set accessPackages(value: AccessPackage[] | undefined) {
        if(value) {
            const accessPackagesArrValue: AccessPackageImpl[] = [];
            this.accessPackages?.forEach(element => {
                accessPackagesArrValue.push((element instanceof AccessPackageImpl? element:new AccessPackageImpl(element)));
            });
            this._accessPackages = accessPackagesArrValue;
        }
    };
    /**
     * Gets the catalogType property value. One of UserManaged or ServiceDefault.
     * @returns a accessPackageCatalogType
     */
    public get catalogType() {
        return this._catalogType;
    };
    /**
     * Sets the catalogType property value. One of UserManaged or ServiceDefault.
     * @param value Value to set for the catalogType property.
     */
    public set catalogType(value: AccessPackageCatalogType | undefined) {
        if(value) {
            this._catalogType = value;
        }
    };
    /**
     * Instantiates a new accessPackageCatalog and sets the default values.
     * @param accessPackageCatalogParameterValue 
     */
    public constructor(accessPackageCatalogParameterValue?: AccessPackageCatalog | undefined) {
        super(accessPackageCatalogParameterValue);
        this._accessPackages = accessPackageCatalogParameterValue?.accessPackages;
        this._catalogType = accessPackageCatalogParameterValue?.catalogType;
        this._createdDateTime = accessPackageCatalogParameterValue?.createdDateTime;
        this._description = accessPackageCatalogParameterValue?.description;
        this._displayName = accessPackageCatalogParameterValue?.displayName;
        this._isExternallyVisible = accessPackageCatalogParameterValue?.isExternallyVisible;
        this._modifiedDateTime = accessPackageCatalogParameterValue?.modifiedDateTime;
        this._state = accessPackageCatalogParameterValue?.state;
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
     * Gets the description property value. The description of the access package catalog.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. The description of the access package catalog.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        if(value) {
            this._description = value;
        }
    };
    /**
     * Gets the displayName property value. The display name of the access package catalog. Supports $filter (eq, contains).
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The display name of the access package catalog. Supports $filter (eq, contains).
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
            "accessPackages": n => { this.accessPackages = n.getCollectionOfObjectValues<AccessPackageImpl>(createAccessPackageFromDiscriminatorValue); },
            "catalogType": n => { this.catalogType = n.getEnumValue<AccessPackageCatalogType>(AccessPackageCatalogType); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "isExternallyVisible": n => { this.isExternallyVisible = n.getBooleanValue(); },
            "modifiedDateTime": n => { this.modifiedDateTime = n.getDateValue(); },
            "state": n => { this.state = n.getEnumValue<AccessPackageCatalogState>(AccessPackageCatalogState); },
        };
    };
    /**
     * Gets the isExternallyVisible property value. Whether the access packages in this catalog can be requested by users outside of the tenant.
     * @returns a boolean
     */
    public get isExternallyVisible() {
        return this._isExternallyVisible;
    };
    /**
     * Sets the isExternallyVisible property value. Whether the access packages in this catalog can be requested by users outside of the tenant.
     * @param value Value to set for the isExternallyVisible property.
     */
    public set isExternallyVisible(value: boolean | undefined) {
        if(value) {
            this._isExternallyVisible = value;
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
        if(this.accessPackages && this.accessPackages.length != 0){        const accessPackagesArrValue: AccessPackageImpl[] = [];
        this.accessPackages?.forEach(element => {
            accessPackagesArrValue.push((element instanceof AccessPackageImpl? element:new AccessPackageImpl(element)));
        });
            writer.writeCollectionOfObjectValues<AccessPackageImpl>("accessPackages", accessPackagesArrValue);
        }
        if(this.catalogType){
            writer.writeEnumValue<AccessPackageCatalogType>("catalogType", this.catalogType);
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
        if(this.isExternallyVisible){
            writer.writeBooleanValue("isExternallyVisible", this.isExternallyVisible);
        }
        if(this.modifiedDateTime){
            writer.writeDateValue("modifiedDateTime", this.modifiedDateTime);
        }
        if(this.state){
            writer.writeEnumValue<AccessPackageCatalogState>("state", this.state);
        }
    };
    /**
     * Gets the state property value. Has the value published if the access packages are available for management. The possible values are: unpublished, published, unknownFutureValue.
     * @returns a accessPackageCatalogState
     */
    public get state() {
        return this._state;
    };
    /**
     * Sets the state property value. Has the value published if the access packages are available for management. The possible values are: unpublished, published, unknownFutureValue.
     * @param value Value to set for the state property.
     */
    public set state(value: AccessPackageCatalogState | undefined) {
        if(value) {
            this._state = value;
        }
    };
}
