import {createUnifiedRoleManagementPolicyFromDiscriminatorValue} from './createUnifiedRoleManagementPolicyFromDiscriminatorValue';
import {Entity, UnifiedRoleManagementPolicy} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UnifiedRoleManagementPolicyAssignment extends Entity implements Parsable {
    /** The policy for the assignment.  */
    private _policy?: UnifiedRoleManagementPolicy | undefined;
    /** The id of the policy.  */
    private _policyId?: string | undefined;
    /** The id of the role definition where the policy applies. If not specified, the policy applies to all roles.  */
    private _roleDefinitionId?: string | undefined;
    /** The id of the scope where the policy is assigned. E.g. '/', groupId, etc.  */
    private _scopeId?: string | undefined;
    /** The type of the scope where the policy is assigned. One of Directory, DirectoryRole, Group.  */
    private _scopeType?: string | undefined;
    /**
     * Instantiates a new unifiedRoleManagementPolicyAssignment and sets the default values.
     */
    public constructor() {
        super();
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
     * Gets the policy property value. The policy for the assignment.
     * @returns a unifiedRoleManagementPolicy
     */
    public get policy() {
        return this._policy;
    };
    /**
     * Sets the policy property value. The policy for the assignment.
     * @param value Value to set for the policy property.
     */
    public set policy(value: UnifiedRoleManagementPolicy | undefined) {
        this._policy = value;
    };
    /**
     * Gets the policyId property value. The id of the policy.
     * @returns a string
     */
    public get policyId() {
        return this._policyId;
    };
    /**
     * Sets the policyId property value. The id of the policy.
     * @param value Value to set for the policyId property.
     */
    public set policyId(value: string | undefined) {
        this._policyId = value;
    };
    /**
     * Gets the roleDefinitionId property value. The id of the role definition where the policy applies. If not specified, the policy applies to all roles.
     * @returns a string
     */
    public get roleDefinitionId() {
        return this._roleDefinitionId;
    };
    /**
     * Sets the roleDefinitionId property value. The id of the role definition where the policy applies. If not specified, the policy applies to all roles.
     * @param value Value to set for the roleDefinitionId property.
     */
    public set roleDefinitionId(value: string | undefined) {
        this._roleDefinitionId = value;
    };
    /**
     * Gets the scopeId property value. The id of the scope where the policy is assigned. E.g. '/', groupId, etc.
     * @returns a string
     */
    public get scopeId() {
        return this._scopeId;
    };
    /**
     * Sets the scopeId property value. The id of the scope where the policy is assigned. E.g. '/', groupId, etc.
     * @param value Value to set for the scopeId property.
     */
    public set scopeId(value: string | undefined) {
        this._scopeId = value;
    };
    /**
     * Gets the scopeType property value. The type of the scope where the policy is assigned. One of Directory, DirectoryRole, Group.
     * @returns a string
     */
    public get scopeType() {
        return this._scopeType;
    };
    /**
     * Sets the scopeType property value. The type of the scope where the policy is assigned. One of Directory, DirectoryRole, Group.
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
