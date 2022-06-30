import {createUnifiedRoleManagementPolicyRuleTargetFromDiscriminatorValue} from './createUnifiedRoleManagementPolicyRuleTargetFromDiscriminatorValue';
import {EntityImpl, UnifiedRoleManagementPolicyRuleTargetImpl} from './index';
import {UnifiedRoleManagementPolicyRule} from './unifiedRoleManagementPolicyRule';
import {UnifiedRoleManagementPolicyRuleTarget} from './unifiedRoleManagementPolicyRuleTarget';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the policyRoot singleton. */
export class UnifiedRoleManagementPolicyRuleImpl extends EntityImpl implements UnifiedRoleManagementPolicyRule {
    /** Not implemented. Defines details of scope that's targeted by role management policy rule. The details can include the principal type, the role assignment type, and actions affecting a role. Supports $filter (eq, ne). */
    private _target?: UnifiedRoleManagementPolicyRuleTarget | undefined;
    /**
     * Instantiates a new unifiedRoleManagementPolicyRule and sets the default values.
     * @param unifiedRoleManagementPolicyRuleParameterValue 
     */
    public constructor(unifiedRoleManagementPolicyRuleParameterValue?: UnifiedRoleManagementPolicyRule | undefined) {
        super(unifiedRoleManagementPolicyRuleParameterValue);
        this._target = unifiedRoleManagementPolicyRuleParameterValue?.target;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "target": n => { this.target = n.getObjectValue<UnifiedRoleManagementPolicyRuleTargetImpl>(createUnifiedRoleManagementPolicyRuleTargetFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.target){
            writer.writeObjectValue<UnifiedRoleManagementPolicyRuleTargetImpl>("target", (!this.target || this.target instanceof UnifiedRoleManagementPolicyRuleTargetImpl? this.target : new UnifiedRoleManagementPolicyRuleTargetImpl(this.target)));
        }
    };
    /**
     * Gets the target property value. Not implemented. Defines details of scope that's targeted by role management policy rule. The details can include the principal type, the role assignment type, and actions affecting a role. Supports $filter (eq, ne).
     * @returns a UnifiedRoleManagementPolicyRuleTargetInterface
     */
    public get target() {
        return this._target;
    };
    /**
     * Sets the target property value. Not implemented. Defines details of scope that's targeted by role management policy rule. The details can include the principal type, the role assignment type, and actions affecting a role. Supports $filter (eq, ne).
     * @param value Value to set for the target property.
     */
    public set target(value: UnifiedRoleManagementPolicyRuleTarget | undefined) {
        if(value) {
            this._target = value instanceof UnifiedRoleManagementPolicyRuleTargetImpl? value : new UnifiedRoleManagementPolicyRuleTargetImpl(value);
        }
    };
}
