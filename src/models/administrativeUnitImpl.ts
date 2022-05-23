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
export class AdministrativeUnitImpl extends DirectoryObjectImpl implements AdministrativeUnit, Parsable {
    /** An optional description for the administrative unit. Supports $filter (eq, ne, in, startsWith), $search. */
    public description?: string | undefined;
    /** Display name for the administrative unit. Supports $filter (eq, ne, not, ge, le, in, startsWith, and eq on null values), $search, and $orderBy. */
    public displayName?: string | undefined;
    /** The collection of open extensions defined for this administrative unit. Nullable. */
    public extensions?: Extension[] | undefined;
    /** Users and groups that are members of this administrative unit. Supports $expand. */
    public members?: DirectoryObject[] | undefined;
    /** Scoped-role members of this administrative unit. */
    public scopedRoleMembers?: ScopedRoleMembership[] | undefined;
    /** Controls whether the administrative unit and its members are hidden or public. Can be set to HiddenMembership. If not set (value is null), the default behavior is public. When set to HiddenMembership, only members of the administrative unit can list other members of the administrative unit. */
    public visibility?: string | undefined;
    /**
     * Instantiates a new administrativeUnit and sets the default values.
     * @param administrativeUnitParameterValue 
     */
    public constructor(administrativeUnitParameterValue?: AdministrativeUnit | undefined) {
        super();
        this.description = administrativeUnitParameterValue?.description ;
        this.displayName = administrativeUnitParameterValue?.displayName ;
        this.extensions = administrativeUnitParameterValue?.extensions ;
        this.members = administrativeUnitParameterValue?.members ;
        this.scopedRoleMembers = administrativeUnitParameterValue?.scopedRoleMembers ;
        this.visibility = administrativeUnitParameterValue?.visibility ;
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
        if(this.extensions && this.extensions.length != 0){        const extensionsArrValue: ExtensionImpl[] = []; this.extensions?.forEach(element => {extensionsArrValue.push(new ExtensionImpl(element));});
        writer.writeCollectionOfObjectValues<ExtensionImpl>("extensions", extensionsArrValue);
        }
        if(this.members && this.members.length != 0){        const membersArrValue: DirectoryObjectImpl[] = []; this.members?.forEach(element => {membersArrValue.push(new DirectoryObjectImpl(element));});
        writer.writeCollectionOfObjectValues<DirectoryObjectImpl>("members", membersArrValue);
        }
        if(this.scopedRoleMembers && this.scopedRoleMembers.length != 0){        const scopedRoleMembersArrValue: ScopedRoleMembershipImpl[] = []; this.scopedRoleMembers?.forEach(element => {scopedRoleMembersArrValue.push(new ScopedRoleMembershipImpl(element));});
        writer.writeCollectionOfObjectValues<ScopedRoleMembershipImpl>("scopedRoleMembers", scopedRoleMembersArrValue);
        }
        if(this.visibility){
        writer.writeStringValue("visibility", this.visibility);
        }
    };
}
