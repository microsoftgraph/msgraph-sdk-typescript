import {createUnifiedRoleManagementPolicyRuleTargetFromDiscriminatorValue} from './createUnifiedRoleManagementPolicyRuleTargetFromDiscriminatorValue';
import {EntityImpl, UnifiedRoleManagementPolicyRuleTargetImpl} from './index';
import {UnifiedRoleManagementPolicyRule} from './unifiedRoleManagementPolicyRule';
import {UnifiedRoleManagementPolicyRuleTarget} from './unifiedRoleManagementPolicyRuleTarget';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the policyRoot singleton. */
export class UnifiedRoleManagementPolicyRuleImpl extends EntityImpl implements Parsable, UnifiedRoleManagementPolicyRule {
    /** The target for the policy rule. */
    public target?: UnifiedRoleManagementPolicyRuleTarget | undefined;
    /**
     * Instantiates a new unifiedRoleManagementPolicyRule and sets the default values.
     * @param unifiedRoleManagementPolicyRuleParameterValue 
     */
    public constructor(unifiedRoleManagementPolicyRuleParameterValue?: UnifiedRoleManagementPolicyRule | undefined) {
        super();
        this.target = unifiedRoleManagementPolicyRuleParameterValue?.target ;
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
        writer.writeObjectValue<UnifiedRoleManagementPolicyRuleTargetImpl>("target", new UnifiedRoleManagementPolicyRuleTargetImpl(this.target));
        }
    };
}
