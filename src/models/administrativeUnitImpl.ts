import {AdministrativeUnit} from './administrativeUnit';
import {createDirectoryObjectFromDiscriminatorValue} from './createDirectoryObjectFromDiscriminatorValue';
import {createExtensionFromDiscriminatorValue} from './createExtensionFromDiscriminatorValue';
import {createScopedRoleMembershipFromDiscriminatorValue} from './createScopedRoleMembershipFromDiscriminatorValue';
import {DirectoryObject} from './directoryObject';
import {Extension} from './extension';
import {DirectoryObjectImpl, ExtensionImpl, ScopedRoleMembershipImpl} from './index';
import {ScopedRoleMembership} from './scopedRoleMembership';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the directory singleton. */
export class AdministrativeUnitImpl extends DirectoryObjectImpl implements AdministrativeUnit {
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
     * Instantiates a new administrativeUnit and sets the default values.
     * @param administrativeUnitParameterValue 
     */
    public constructor(administrativeUnitParameterValue?: AdministrativeUnit | undefined) {
        super(administrativeUnitParameterValue);
        this._description = administrativeUnitParameterValue?.description;
        this._displayName = administrativeUnitParameterValue?.displayName;
        this._extensions = administrativeUnitParameterValue?.extensions;
        this._members = administrativeUnitParameterValue?.members;
        this._scopedRoleMembers = administrativeUnitParameterValue?.scopedRoleMembers;
        this._visibility = administrativeUnitParameterValue?.visibility;
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
        if(value) {
            this._description = value;
        }
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
        if(value) {
            this._displayName = value;
        }
    };
    /**
     * Gets the extensions property value. The collection of open extensions defined for this administrative unit. Nullable.
     * @returns a ExtensionInterface
     */
    public get extensions() {
        return this._extensions;
    };
    /**
     * Sets the extensions property value. The collection of open extensions defined for this administrative unit. Nullable.
     * @param value Value to set for the extensions property.
     */
    public set extensions(value: Extension[] | undefined) {
        if(value) {
            const extensionsArrValue: ExtensionImpl[] = [];
            this.extensions?.forEach(element => {
                extensionsArrValue.push((element instanceof ExtensionImpl? element:new ExtensionImpl(element)));
            });
            this._extensions = extensionsArrValue;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "extensions": n => { this.extensions = n.getCollectionOfObjectValues<ExtensionImpl>(createExtensionFromDiscriminatorValue); },
            "members": n => { this.members = n.getCollectionOfObjectValues<DirectoryObjectImpl>(createDirectoryObjectFromDiscriminatorValue); },
            "scopedRoleMembers": n => { this.scopedRoleMembers = n.getCollectionOfObjectValues<ScopedRoleMembershipImpl>(createScopedRoleMembershipFromDiscriminatorValue); },
            "visibility": n => { this.visibility = n.getStringValue(); },
        };
    };
    /**
     * Gets the members property value. Users and groups that are members of this administrative unit. Supports $expand.
     * @returns a DirectoryObjectInterface
     */
    public get members() {
        return this._members;
    };
    /**
     * Sets the members property value. Users and groups that are members of this administrative unit. Supports $expand.
     * @param value Value to set for the members property.
     */
    public set members(value: DirectoryObject[] | undefined) {
        if(value) {
            const membersArrValue: DirectoryObjectImpl[] = [];
            this.members?.forEach(element => {
                membersArrValue.push((element instanceof DirectoryObjectImpl? element:new DirectoryObjectImpl(element)));
            });
            this._members = membersArrValue;
        }
    };
    /**
     * Gets the scopedRoleMembers property value. Scoped-role members of this administrative unit.
     * @returns a ScopedRoleMembershipInterface
     */
    public get scopedRoleMembers() {
        return this._scopedRoleMembers;
    };
    /**
     * Sets the scopedRoleMembers property value. Scoped-role members of this administrative unit.
     * @param value Value to set for the scopedRoleMembers property.
     */
    public set scopedRoleMembers(value: ScopedRoleMembership[] | undefined) {
        if(value) {
            const scopedRoleMembersArrValue: ScopedRoleMembershipImpl[] = [];
            this.scopedRoleMembers?.forEach(element => {
                scopedRoleMembersArrValue.push((element instanceof ScopedRoleMembershipImpl? element:new ScopedRoleMembershipImpl(element)));
            });
            this._scopedRoleMembers = scopedRoleMembersArrValue;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.description){
            writer.writeStringValue("description", this.description);
        }
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.extensions && this.extensions.length != 0){        const extensionsArrValue: ExtensionImpl[] = [];
        this.extensions?.forEach(element => {
            extensionsArrValue.push((element instanceof ExtensionImpl? element:new ExtensionImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ExtensionImpl>("extensions", extensionsArrValue);
        }
        if(this.members && this.members.length != 0){        const membersArrValue: DirectoryObjectImpl[] = [];
        this.members?.forEach(element => {
            membersArrValue.push((element instanceof DirectoryObjectImpl? element:new DirectoryObjectImpl(element)));
        });
            writer.writeCollectionOfObjectValues<DirectoryObjectImpl>("members", membersArrValue);
        }
        if(this.scopedRoleMembers && this.scopedRoleMembers.length != 0){        const scopedRoleMembersArrValue: ScopedRoleMembershipImpl[] = [];
        this.scopedRoleMembers?.forEach(element => {
            scopedRoleMembersArrValue.push((element instanceof ScopedRoleMembershipImpl? element:new ScopedRoleMembershipImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ScopedRoleMembershipImpl>("scopedRoleMembers", scopedRoleMembersArrValue);
        }
        if(this.visibility){
            writer.writeStringValue("visibility", this.visibility);
        }
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
        if(value) {
            this._visibility = value;
        }
    };
}
