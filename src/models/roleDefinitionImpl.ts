import {createRoleAssignmentFromDiscriminatorValue} from './createRoleAssignmentFromDiscriminatorValue';
import {createRolePermissionFromDiscriminatorValue} from './createRolePermissionFromDiscriminatorValue';
import {EntityImpl, RoleAssignmentImpl, RolePermissionImpl} from './index';
import {RoleAssignment} from './roleAssignment';
import {RoleDefinition} from './roleDefinition';
import {RolePermission} from './rolePermission';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RoleDefinitionImpl extends EntityImpl implements Parsable, RoleDefinition {
    /** Description of the Role definition. */
    description?: string | undefined;
    /** Display Name of the Role definition. */
    displayName?: string | undefined;
    /** Type of Role. Set to True if it is built-in, or set to False if it is a custom role definition. */
    isBuiltIn?: boolean | undefined;
    /** List of Role assignments for this role definition. */
    roleAssignments?: RoleAssignment[] | undefined;
    /** List of Role Permissions this role is allowed to perform. These must match the actionName that is defined as part of the rolePermission. */
    rolePermissions?: RolePermission[] | undefined;
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
        if(this.description)
        writer.writeStringValue("description", this.description);
        }
        if(this.displayName){
        if(this.displayName)
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.isBuiltIn){
        if(this.isBuiltIn)
        writer.writeBooleanValue("isBuiltIn", this.isBuiltIn);
        }
        if(this.roleAssignments){
        const roleAssignmentsArrValue: RoleAssignmentImpl[] = []; this.roleAssignments?.forEach(element => {roleAssignmentsArrValue.push(new RoleAssignmentImpl(element));});
        writer.writeCollectionOfObjectValues<RoleAssignmentImpl>("roleAssignments", roleAssignmentsArrValue);
        }
        if(this.rolePermissions){
        const rolePermissionsArrValue: RolePermissionImpl[] = []; this.rolePermissions?.forEach(element => {rolePermissionsArrValue.push(new RolePermissionImpl(element));});
        writer.writeCollectionOfObjectValues<RolePermissionImpl>("rolePermissions", rolePermissionsArrValue);
        }
    };
}
