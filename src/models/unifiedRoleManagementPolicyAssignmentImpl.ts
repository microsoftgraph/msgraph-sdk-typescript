import {createUnifiedRoleManagementPolicyFromDiscriminatorValue} from './createUnifiedRoleManagementPolicyFromDiscriminatorValue';
import {EntityImpl, UnifiedRoleManagementPolicyImpl} from './index';
import {UnifiedRoleManagementPolicy} from './unifiedRoleManagementPolicy';
import {UnifiedRoleManagementPolicyAssignment} from './unifiedRoleManagementPolicyAssignment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the policyRoot singleton. */
export class UnifiedRoleManagementPolicyAssignmentImpl extends EntityImpl implements Parsable, UnifiedRoleManagementPolicyAssignment {
    /** The policy for the assignment. */
    public policy?: UnifiedRoleManagementPolicy | undefined;
    /** The id of the policy. */
    public policyId?: string | undefined;
    /** The id of the role definition where the policy applies. If not specified, the policy applies to all roles. */
    public roleDefinitionId?: string | undefined;
    /** The id of the scope where the policy is assigned. E.g. '/', groupId, etc. */
    public scopeId?: string | undefined;
    /** The type of the scope where the policy is assigned. One of Directory, DirectoryRole, Group. */
    public scopeType?: string | undefined;
    /**
     * Instantiates a new unifiedRoleManagementPolicyAssignment and sets the default values.
     * @param unifiedRoleManagementPolicyAssignmentParameterValue 
     */
    public constructor(unifiedRoleManagementPolicyAssignmentParameterValue?: UnifiedRoleManagementPolicyAssignment | undefined) {
        super();
        this.policy = unifiedRoleManagementPolicyAssignmentParameterValue?.policy ;
        this.policyId = unifiedRoleManagementPolicyAssignmentParameterValue?.policyId ;
        this.roleDefinitionId = unifiedRoleManagementPolicyAssignmentParameterValue?.roleDefinitionId ;
        this.scopeId = unifiedRoleManagementPolicyAssignmentParameterValue?.scopeId ;
        this.scopeType = unifiedRoleManagementPolicyAssignmentParameterValue?.scopeType ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "policy": n => { this.policy = n.getObjectValue<UnifiedRoleManagementPolicyImpl>(createUnifiedRoleManagementPolicyFromDiscriminatorValue); },
            "policyId": n => { this.policyId = n.getStringValue(); },
            "roleDefinitionId": n => { this.roleDefinitionId = n.getStringValue(); },
            "scopeId": n => { this.scopeId = n.getStringValue(); },
            "scopeType": n => { this.scopeType = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.policy){
        writer.writeObjectValue<UnifiedRoleManagementPolicyImpl>("policy", new UnifiedRoleManagementPolicyImpl(this.policy));
        }
        if(this.policyId){
        writer.writeStringValue("policyId", this.policyId);
        }
        if(this.roleDefinitionId){
        writer.writeStringValue("roleDefinitionId", this.roleDefinitionId);
        }
        if(this.scopeId){
        writer.writeStringValue("scopeId", this.scopeId);
        }
        if(this.scopeType){
        writer.writeStringValue("scopeType", this.scopeType);
        }
    };
}
