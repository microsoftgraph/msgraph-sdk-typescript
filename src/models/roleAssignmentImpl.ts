import {createRoleDefinitionFromDiscriminatorValue} from './createRoleDefinitionFromDiscriminatorValue';
import {EntityImpl, RoleDefinitionImpl} from './index';
import {RoleAssignment} from './roleAssignment';
import {RoleDefinition} from './roleDefinition';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** The Role Assignment resource. Role assignments tie together a role definition with members and scopes. There can be one or more role assignments per role. This applies to custom and built-in roles. */
export class RoleAssignmentImpl extends EntityImpl implements Parsable, RoleAssignment {
    /** Description of the Role Assignment. */
    public description?: string | undefined;
    /** The display or friendly name of the role Assignment. */
    public displayName?: string | undefined;
    /** List of ids of role scope member security groups.  These are IDs from Azure Active Directory. */
    public resourceScopes?: string[] | undefined;
    /** Role definition this assignment is part of. */
    public roleDefinition?: RoleDefinition | undefined;
    /**
     * Instantiates a new roleAssignment and sets the default values.
     * @param roleAssignmentParameterValue 
     */
    public constructor(roleAssignmentParameterValue?: RoleAssignment | undefined) {
        super();
        this.description = roleAssignmentParameterValue?.description ;
        this.displayName = roleAssignmentParameterValue?.displayName ;
        this.resourceScopes = roleAssignmentParameterValue?.resourceScopes ;
        this.roleDefinition = roleAssignmentParameterValue?.roleDefinition ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "resourceScopes": n => { this.resourceScopes = n.getCollectionOfPrimitiveValues<string>(); },
            "roleDefinition": n => { this.roleDefinition = n.getObjectValue<RoleDefinitionImpl>(createRoleDefinitionFromDiscriminatorValue); },
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
        if(this.resourceScopes){
        writer.writeCollectionOfPrimitiveValues<string>("resourceScopes", this.resourceScopes);
        }
        if(this.roleDefinition){
        writer.writeObjectValue<RoleDefinitionImpl>("roleDefinition", new RoleDefinitionImpl(this.roleDefinition));
        }
    };
}
