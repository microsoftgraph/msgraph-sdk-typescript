import {createUnifiedRoleManagementPolicyFromDiscriminatorValue} from './createUnifiedRoleManagementPolicyFromDiscriminatorValue';
import {Entity, UnifiedRoleManagementPolicy} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of agreementAcceptance entities. */
export class UnifiedRoleManagementPolicyAssignment extends Entity implements Parsable {
    /** The policy that's associated with a policy assignment. Supports $expand and a nested $expand of the rules and effectiveRules relationships for the policy. */
    private _policy?: UnifiedRoleManagementPolicy | undefined;
    /** The id of the policy. Inherited from entity. */
    private _policyId?: string | undefined;
    /** The identifier of the role definition object where the policy applies. If not specified, the policy applies to all roles. Supports $filter (eq). */
    private _roleDefinitionId?: string | undefined;
    /** The identifier of the scope where the policy is assigned.  Can be / for the tenant or a group ID. Required. */
    private _scopeId?: string | undefined;
    /** The type of the scope where the policy is assigned. One of Directory, DirectoryRole. Required. */
    private _scopeType?: string | undefined;
    /**
     * Instantiates a new unifiedRoleManagementPolicyAssignment and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.unifiedRoleManagementPolicyAssignment";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "policy": n => { this.policy = n.getObjectValue<UnifiedRoleManagementPolicy>(createUnifiedRoleManagementPolicyFromDiscriminatorValue); },
            "policyId": n => { this.policyId = n.getStringValue(); },
            "roleDefinitionId": n => { this.roleDefinitionId = n.getStringValue(); },
            "scopeId": n => { this.scopeId = n.getStringValue(); },
            "scopeType": n => { this.scopeType = n.getStringValue(); },
        };
    };
    /**
     * Gets the policy property value. The policy that's associated with a policy assignment. Supports $expand and a nested $expand of the rules and effectiveRules relationships for the policy.
     * @returns a unifiedRoleManagementPolicy
     */
    public get policy() {
        return this._policy;
    };
    /**
     * Sets the policy property value. The policy that's associated with a policy assignment. Supports $expand and a nested $expand of the rules and effectiveRules relationships for the policy.
     * @param value Value to set for the policy property.
     */
    public set policy(value: UnifiedRoleManagementPolicy | undefined) {
        this._policy = value;
    };
    /**
     * Gets the policyId property value. The id of the policy. Inherited from entity.
     * @returns a string
     */
    public get policyId() {
        return this._policyId;
    };
    /**
     * Sets the policyId property value. The id of the policy. Inherited from entity.
     * @param value Value to set for the policyId property.
     */
    public set policyId(value: string | undefined) {
        this._policyId = value;
    };
    /**
     * Gets the roleDefinitionId property value. The identifier of the role definition object where the policy applies. If not specified, the policy applies to all roles. Supports $filter (eq).
     * @returns a string
     */
    public get roleDefinitionId() {
        return this._roleDefinitionId;
    };
    /**
     * Sets the roleDefinitionId property value. The identifier of the role definition object where the policy applies. If not specified, the policy applies to all roles. Supports $filter (eq).
     * @param value Value to set for the roleDefinitionId property.
     */
    public set roleDefinitionId(value: string | undefined) {
        this._roleDefinitionId = value;
    };
    /**
     * Gets the scopeId property value. The identifier of the scope where the policy is assigned.  Can be / for the tenant or a group ID. Required.
     * @returns a string
     */
    public get scopeId() {
        return this._scopeId;
    };
    /**
     * Sets the scopeId property value. The identifier of the scope where the policy is assigned.  Can be / for the tenant or a group ID. Required.
     * @param value Value to set for the scopeId property.
     */
    public set scopeId(value: string | undefined) {
        this._scopeId = value;
    };
    /**
     * Gets the scopeType property value. The type of the scope where the policy is assigned. One of Directory, DirectoryRole. Required.
     * @returns a string
     */
    public get scopeType() {
        return this._scopeType;
    };
    /**
     * Sets the scopeType property value. The type of the scope where the policy is assigned. One of Directory, DirectoryRole. Required.
     * @param value Value to set for the scopeType property.
     */
    public set scopeType(value: string | undefined) {
        this._scopeType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<UnifiedRoleManagementPolicy>("policy", this.policy);
        writer.writeStringValue("policyId", this.policyId);
        writer.writeStringValue("roleDefinitionId", this.roleDefinitionId);
        writer.writeStringValue("scopeId", this.scopeId);
        writer.writeStringValue("scopeType", this.scopeType);
    };
}
