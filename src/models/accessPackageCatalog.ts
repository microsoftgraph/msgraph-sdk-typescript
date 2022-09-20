import {AccessPackageCatalogState} from './accessPackageCatalogState';
import {AccessPackageCatalogType} from './accessPackageCatalogType';
import {createAccessPackageFromDiscriminatorValue} from './createAccessPackageFromDiscriminatorValue';
import {AccessPackage, Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessPackageCatalog extends Entity implements Parsable {
    /** The access packages in this catalog. Read-only. Nullable. */
    private _accessPackages?: AccessPackage[] | undefined;
    /** Whether the catalog is created by a user or entitlement management. The possible values are: userManaged, serviceDefault, serviceManaged, unknownFutureValue. */
    private _catalogType?: AccessPackageCatalogType | undefined;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. */
    private _createdDateTime?: Date | undefined;
    /** The description of the access package catalog. */
    private _description?: string | undefined;
    /** The display name of the access package catalog. */
    private _displayName?: string | undefined;
    /** Whether the access packages in this catalog can be requested by users outside of the tenant. */
    private _isExternallyVisible?: boolean | undefined;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. */
    private _modifiedDateTime?: Date | undefined;
    /** Has the value published if the access packages are available for management. The possible values are: unpublished, published, unknownFutureValue. */
    private _state?: AccessPackageCatalogState | undefined;
    /**
     * Gets the accessPackages property value. The access packages in this catalog. Read-only. Nullable.
     * @returns a accessPackage
     */
    public get accessPackages() {
        return this._accessPackages;
    };
    /**
     * Sets the accessPackages property value. The access packages in this catalog. Read-only. Nullable.
     * @param value Value to set for the accessPackages property.
     */
    public set accessPackages(value: AccessPackage[] | undefined) {
        this._accessPackages = value;
    };
    /**
     * Gets the catalogType property value. Whether the catalog is created by a user or entitlement management. The possible values are: userManaged, serviceDefault, serviceManaged, unknownFutureValue.
     * @returns a accessPackageCatalogType
     */
    public get catalogType() {
        return this._catalogType;
    };
    /**
     * Sets the catalogType property value. Whether the catalog is created by a user or entitlement management. The possible values are: userManaged, serviceDefault, serviceManaged, unknownFutureValue.
     * @param value Value to set for the catalogType property.
     */
    public set catalogType(value: AccessPackageCatalogType | undefined) {
        this._catalogType = value;
    };
    /**
     * Instantiates a new accessPackageCatalog and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.accessPackageCatalog";
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
        this._description = value;
    };
    /**
     * Gets the displayName property value. The display name of the access package catalog.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The display name of the access package catalog.
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
            "accessPackages": n => { this.accessPackages = n.getCollectionOfObjectValues<AccessPackage>(createAccessPackageFromDiscriminatorValue); },
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
        this._isExternallyVisible = value;
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
        writer.writeCollectionOfObjectValues<AccessPackage>("accessPackages", this.accessPackages);
        writer.writeEnumValue<AccessPackageCatalogType>("catalogType", this.catalogType);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeBooleanValue("isExternallyVisible", this.isExternallyVisible);
        writer.writeDateValue("modifiedDateTime", this.modifiedDateTime);
        writer.writeEnumValue<AccessPackageCatalogState>("state", this.state);
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
        this._state = value;
    };
}
