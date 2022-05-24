import {createDirectoryObjectFromDiscriminatorValue} from './createDirectoryObjectFromDiscriminatorValue';
import {createScopedRoleMembershipFromDiscriminatorValue} from './createScopedRoleMembershipFromDiscriminatorValue';
import {DirectoryObject} from './directoryObject';
import {DirectoryRole} from './directoryRole';
import {DirectoryObjectImpl, ScopedRoleMembershipImpl} from './index';
import {ScopedRoleMembership} from './scopedRoleMembership';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of directoryRole entities. */
export class DirectoryRoleImpl extends DirectoryObjectImpl implements DirectoryRole, Parsable {
    /** The description for the directory role. Read-only. Supports $filter (eq), $search, $select. */
    public description?: string | undefined;
    /** The display name for the directory role. Read-only. Supports $filter (eq), $search, $select. */
    public displayName?: string | undefined;
    /** Users that are members of this directory role. HTTP Methods: GET, POST, DELETE. Read-only. Nullable. Supports $expand. */
    public members?: DirectoryObject[] | undefined;
    /** The id of the directoryRoleTemplate that this role is based on. The property must be specified when activating a directory role in a tenant with a POST operation. After the directory role has been activated, the property is read only. Supports $filter (eq), $select. */
    public roleTemplateId?: string | undefined;
    /** Members of this directory role that are scoped to administrative units. Read-only. Nullable. */
    public scopedMembers?: ScopedRoleMembership[] | undefined;
    /**
     * Instantiates a new directoryRole and sets the default values.
     * @param directoryRoleParameterValue 
     */
    public constructor(directoryRoleParameterValue?: DirectoryRole | undefined) {
        super();
        this.description = directoryRoleParameterValue?.description ;
        this.displayName = directoryRoleParameterValue?.displayName ;
        this.members = directoryRoleParameterValue?.members ;
        this.roleTemplateId = directoryRoleParameterValue?.roleTemplateId ;
        this.scopedMembers = directoryRoleParameterValue?.scopedMembers ;
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
        if(this.members && this.members.length != 0){        const membersArrValue: DirectoryObjectImpl[] = []; this.members?.forEach(element => {membersArrValue.push(new DirectoryObjectImpl(element));});
        writer.writeCollectionOfObjectValues<DirectoryObjectImpl>("members", membersArrValue);
        }
        if(this.roleTemplateId){
        writer.writeStringValue("roleTemplateId", this.roleTemplateId);
        }
        if(this.scopedMembers && this.scopedMembers.length != 0){        const scopedMembersArrValue: ScopedRoleMembershipImpl[] = []; this.scopedMembers?.forEach(element => {scopedMembersArrValue.push(new ScopedRoleMembershipImpl(element));});
        writer.writeCollectionOfObjectValues<ScopedRoleMembershipImpl>("scopedMembers", scopedMembersArrValue);
        }
    };
}
