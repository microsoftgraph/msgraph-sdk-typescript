import {createDirectoryObjectFromDiscriminatorValue} from './createDirectoryObjectFromDiscriminatorValue';
import {createExtensionFromDiscriminatorValue} from './createExtensionFromDiscriminatorValue';
import {createScopedRoleMembershipFromDiscriminatorValue} from './createScopedRoleMembershipFromDiscriminatorValue';
import {DirectoryObject, Extension, ScopedRoleMembership} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AdministrativeUnit extends DirectoryObject implements Parsable {
    /** An optional description for the administrative unit. Supports $filter (eq, ne, in, startsWith), $search. */
    private _description?: string | undefined;
    /** Display name for the administrative unit. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values), $search, and $orderBy. */
    private _displayName?: string | undefined;
    /** The collection of open extensions defined for this administrative unit. Nullable. */
    private _extensions?: Extension[] | undefined;
    /** Users and groups that are members of this administrative unit. Supports $expand. */
    private _members?: DirectoryObject[] | undefined;
    /** Scoped-role members of this administrative unit. */
    private _scopedRoleMembers?: ScopedRoleMembership[] | undefined;
    /** Controls whether the administrative unit and its members are hidden or public. Can be set to HiddenMembership. If not set (value is null), the default behavior is public. When set to HiddenMembership, only members of the administrative unit can list other members of the administrative unit. */
    private _visibility?: string | undefined;
    /**
     * Instantiates a new AdministrativeUnit and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.administrativeUnit";
    };
    /**
     * Gets the description property value. An optional description for the administrative unit. Supports $filter (eq, ne, in, startsWith), $search.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. An optional description for the administrative unit. Supports $filter (eq, ne, in, startsWith), $search.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the displayName property value. Display name for the administrative unit. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values), $search, and $orderBy.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Display name for the administrative unit. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values), $search, and $orderBy.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Gets the extensions property value. The collection of open extensions defined for this administrative unit. Nullable.
     * @returns a extension
     */
    public get extensions() {
        return this._extensions;
    };
    /**
     * Sets the extensions property value. The collection of open extensions defined for this administrative unit. Nullable.
     * @param value Value to set for the extensions property.
     */
    public set extensions(value: Extension[] | undefined) {
        this._extensions = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "extensions": n => { this.extensions = n.getCollectionOfObjectValues<Extension>(createExtensionFromDiscriminatorValue); },
            "members": n => { this.members = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
            "scopedRoleMembers": n => { this.scopedRoleMembers = n.getCollectionOfObjectValues<ScopedRoleMembership>(createScopedRoleMembershipFromDiscriminatorValue); },
            "visibility": n => { this.visibility = n.getStringValue(); },
        };
    };
    /**
     * Gets the members property value. Users and groups that are members of this administrative unit. Supports $expand.
     * @returns a directoryObject
     */
    public get members() {
        return this._members;
    };
    /**
     * Sets the members property value. Users and groups that are members of this administrative unit. Supports $expand.
     * @param value Value to set for the members property.
     */
    public set members(value: DirectoryObject[] | undefined) {
        this._members = value;
    };
    /**
     * Gets the scopedRoleMembers property value. Scoped-role members of this administrative unit.
     * @returns a scopedRoleMembership
     */
    public get scopedRoleMembers() {
        return this._scopedRoleMembers;
    };
    /**
     * Sets the scopedRoleMembers property value. Scoped-role members of this administrative unit.
     * @param value Value to set for the scopedRoleMembers property.
     */
    public set scopedRoleMembers(value: ScopedRoleMembership[] | undefined) {
        this._scopedRoleMembers = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeCollectionOfObjectValues<Extension>("extensions", this.extensions);
        writer.writeCollectionOfObjectValues<DirectoryObject>("members", this.members);
        writer.writeCollectionOfObjectValues<ScopedRoleMembership>("scopedRoleMembers", this.scopedRoleMembers);
        writer.writeStringValue("visibility", this.visibility);
    };
    /**
     * Gets the visibility property value. Controls whether the administrative unit and its members are hidden or public. Can be set to HiddenMembership. If not set (value is null), the default behavior is public. When set to HiddenMembership, only members of the administrative unit can list other members of the administrative unit.
     * @returns a string
     */
    public get visibility() {
        return this._visibility;
    };
    /**
     * Sets the visibility property value. Controls whether the administrative unit and its members are hidden or public. Can be set to HiddenMembership. If not set (value is null), the default behavior is public. When set to HiddenMembership, only members of the administrative unit can list other members of the administrative unit.
     * @param value Value to set for the visibility property.
     */
    public set visibility(value: string | undefined) {
        this._visibility = value;
    };
}
