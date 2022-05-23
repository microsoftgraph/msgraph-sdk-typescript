import {createRoleAssignmentFromDiscriminatorValue} from './createRoleAssignmentFromDiscriminatorValue';
import {createRolePermissionFromDiscriminatorValue} from './createRolePermissionFromDiscriminatorValue';
import {EntityImpl, RoleAssignmentImpl, RolePermissionImpl} from './index';
import {RoleAssignment} from './roleAssignment';
import {RoleDefinition} from './roleDefinition';
import {RolePermission} from './rolePermission';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** The Role Definition resource. The role definition is the foundation of role based access in Intune. The role combines an Intune resource such as a Mobile App and associated role permissions such as Create or Read for the resource. There are two types of roles, built-in and custom. Built-in roles cannot be modified. Both built-in roles and custom roles must have assignments to be enforced. Create custom roles if you want to define a role that allows any of the available resources and role permissions to be combined into a single role. */
export class RoleDefinitionImpl extends EntityImpl implements Parsable, RoleDefinition {
    /** Description of the Role definition. */
    public description?: string | undefined;
    /** Display Name of the Role definition. */
    public displayName?: string | undefined;
    /** Type of Role. Set to True if it is built-in, or set to False if it is a custom role definition. */
    public isBuiltIn?: boolean | undefined;
    /** List of Role assignments for this role definition. */
    public roleAssignments?: RoleAssignment[] | undefined;
    /** List of Role Permissions this role is allowed to perform. These must match the actionName that is defined as part of the rolePermission. */
    public rolePermissions?: RolePermission[] | undefined;
    /**
     * Instantiates a new roleDefinition and sets the default values.
     * @param roleDefinitionParameterValue 
     */
    public constructor(roleDefinitionParameterValue?: RoleDefinition | undefined) {
        super();
        this.description = roleDefinitionParameterValue?.description ;
        this.displayName = roleDefinitionParameterValue?.displayName ;
        this.isBuiltIn = roleDefinitionParameterValue?.isBuiltIn ;
        this.roleAssignments = roleDefinitionParameterValue?.roleAssignments ;
        this.rolePermissions = roleDefinitionParameterValue?.rolePermissions ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "isBuiltIn": n => { this.isBuiltIn = n.getBooleanValue(); },
            "roleAssignments": n => { this.roleAssignments = n.getCollectionOfObjectValues<RoleAssignmentImpl>(createRoleAssignmentFromDiscriminatorValue); },
            "rolePermissions": n => { this.rolePermissions = n.getCollectionOfObjectValues<RolePermissionImpl>(createRolePermissionFromDiscriminatorValue); },
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
        if(this.isBuiltIn){
        writer.writeBooleanValue("isBuiltIn", this.isBuiltIn);
        }
        if(this.roleAssignments && this.roleAssignments.length != 0){        const roleAssignmentsArrValue: RoleAssignmentImpl[] = []; this.roleAssignments?.forEach(element => {roleAssignmentsArrValue.push(new RoleAssignmentImpl(element));});
        writer.writeCollectionOfObjectValues<RoleAssignmentImpl>("roleAssignments", roleAssignmentsArrValue);
        }
        if(this.rolePermissions && this.rolePermissions.length != 0){        const rolePermissionsArrValue: RolePermissionImpl[] = []; this.rolePermissions?.forEach(element => {rolePermissionsArrValue.push(new RolePermissionImpl(element));});
        writer.writeCollectionOfObjectValues<RolePermissionImpl>("rolePermissions", rolePermissionsArrValue);
        }
    };
}
