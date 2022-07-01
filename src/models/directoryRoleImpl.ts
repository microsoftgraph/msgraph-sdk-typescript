import {createDirectoryObjectFromDiscriminatorValue} from './createDirectoryObjectFromDiscriminatorValue';
import {createScopedRoleMembershipFromDiscriminatorValue} from './createScopedRoleMembershipFromDiscriminatorValue';
import {DirectoryObject} from './directoryObject';
import {DirectoryRole} from './directoryRole';
import {DirectoryObjectImpl, ScopedRoleMembershipImpl} from './index';
import {ScopedRoleMembership} from './scopedRoleMembership';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of directoryRole entities. */
export class DirectoryRoleImpl extends DirectoryObjectImpl implements DirectoryRole {
    /** The description for the directory role. Read-only. Supports $filter (eq), $search, $select. */
    private _description?: string | undefined;
    /** The display name for the directory role. Read-only. Supports $filter (eq), $search, $select. */
    private _displayName?: string | undefined;
    /** Users that are members of this directory role. HTTP Methods: GET, POST, DELETE. Read-only. Nullable. Supports $expand. */
    private _members?: DirectoryObject[] | undefined;
    /** The id of the directoryRoleTemplate that this role is based on. The property must be specified when activating a directory role in a tenant with a POST operation. After the directory role has been activated, the property is read only. Supports $filter (eq), $select. */
    private _roleTemplateId?: string | undefined;
    /** Members of this directory role that are scoped to administrative units. Read-only. Nullable. */
    private _scopedMembers?: ScopedRoleMembership[] | undefined;
    /**
     * Instantiates a new directoryRole and sets the default values.
     * @param directoryRoleParameterValue 
     */
    public constructor(directoryRoleParameterValue?: DirectoryRole | undefined) {
        super(directoryRoleParameterValue);
        this._description = directoryRoleParameterValue?.description;
        this._displayName = directoryRoleParameterValue?.displayName;
        this._members = directoryRoleParameterValue?.members;
        this._roleTemplateId = directoryRoleParameterValue?.roleTemplateId;
        this._scopedMembers = directoryRoleParameterValue?.scopedMembers;
    };
    /**
     * Gets the description property value. The description for the directory role. Read-only. Supports $filter (eq), $search, $select.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. The description for the directory role. Read-only. Supports $filter (eq), $search, $select.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        if(value) {
            this._description = value;
        }
    };
    /**
     * Gets the displayName property value. The display name for the directory role. Read-only. Supports $filter (eq), $search, $select.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The display name for the directory role. Read-only. Supports $filter (eq), $search, $select.
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
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "members": n => { this.members = n.getCollectionOfObjectValues<DirectoryObjectImpl>(createDirectoryObjectFromDiscriminatorValue); },
            "roleTemplateId": n => { this.roleTemplateId = n.getStringValue(); },
            "scopedMembers": n => { this.scopedMembers = n.getCollectionOfObjectValues<ScopedRoleMembershipImpl>(createScopedRoleMembershipFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the members property value. Users that are members of this directory role. HTTP Methods: GET, POST, DELETE. Read-only. Nullable. Supports $expand.
     * @returns a DirectoryObjectInterface
     */
    public get members() {
        return this._members;
    };
    /**
     * Sets the members property value. Users that are members of this directory role. HTTP Methods: GET, POST, DELETE. Read-only. Nullable. Supports $expand.
     * @param value Value to set for the members property.
     */
    public set members(value: DirectoryObject[] | undefined) {
        if(value) {
            const membersArrValue: DirectoryObjectImpl[] = [];
            this.members?.forEach(element => {
                membersArrValue.push((element instanceof DirectoryObjectImpl? element as DirectoryObjectImpl:new DirectoryObjectImpl(element)));
            });
            this._members = membersArrValue;
        }
    };
    /**
     * Gets the roleTemplateId property value. The id of the directoryRoleTemplate that this role is based on. The property must be specified when activating a directory role in a tenant with a POST operation. After the directory role has been activated, the property is read only. Supports $filter (eq), $select.
     * @returns a string
     */
    public get roleTemplateId() {
        return this._roleTemplateId;
    };
    /**
     * Sets the roleTemplateId property value. The id of the directoryRoleTemplate that this role is based on. The property must be specified when activating a directory role in a tenant with a POST operation. After the directory role has been activated, the property is read only. Supports $filter (eq), $select.
     * @param value Value to set for the roleTemplateId property.
     */
    public set roleTemplateId(value: string | undefined) {
        if(value) {
            this._roleTemplateId = value;
        }
    };
    /**
     * Gets the scopedMembers property value. Members of this directory role that are scoped to administrative units. Read-only. Nullable.
     * @returns a ScopedRoleMembershipInterface
     */
    public get scopedMembers() {
        return this._scopedMembers;
    };
    /**
     * Sets the scopedMembers property value. Members of this directory role that are scoped to administrative units. Read-only. Nullable.
     * @param value Value to set for the scopedMembers property.
     */
    public set scopedMembers(value: ScopedRoleMembership[] | undefined) {
        if(value) {
            const scopedMembersArrValue: ScopedRoleMembershipImpl[] = [];
            this.scopedMembers?.forEach(element => {
                scopedMembersArrValue.push((element instanceof ScopedRoleMembershipImpl? element as ScopedRoleMembershipImpl:new ScopedRoleMembershipImpl(element)));
            });
            this._scopedMembers = scopedMembersArrValue;
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
        if(this.members && this.members.length != 0){        const membersArrValue: DirectoryObjectImpl[] = [];
        this.members?.forEach(element => {
            membersArrValue.push((element instanceof DirectoryObjectImpl? element as DirectoryObjectImpl:new DirectoryObjectImpl(element)));
        });
            writer.writeCollectionOfObjectValues<DirectoryObjectImpl>("members", membersArrValue);
        }
        if(this.roleTemplateId){
            writer.writeStringValue("roleTemplateId", this.roleTemplateId);
        }
        if(this.scopedMembers && this.scopedMembers.length != 0){        const scopedMembersArrValue: ScopedRoleMembershipImpl[] = [];
        this.scopedMembers?.forEach(element => {
            scopedMembersArrValue.push((element instanceof ScopedRoleMembershipImpl? element as ScopedRoleMembershipImpl:new ScopedRoleMembershipImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ScopedRoleMembershipImpl>("scopedMembers", scopedMembersArrValue);
        }
    };
}
