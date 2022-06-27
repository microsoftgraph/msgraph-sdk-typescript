import {createUnifiedRoleManagementPolicyRuleTargetFromDiscriminatorValue} from './createUnifiedRoleManagementPolicyRuleTargetFromDiscriminatorValue';
import {EntityImpl, UnifiedRoleManagementPolicyRuleTargetImpl} from './index';
import {UnifiedRoleManagementPolicyRule} from './unifiedRoleManagementPolicyRule';
import {UnifiedRoleManagementPolicyRuleTarget} from './unifiedRoleManagementPolicyRuleTarget';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the auditLogRoot singleton. */
export class UnifiedRoleManagementPolicyRuleImpl extends EntityImpl implements UnifiedRoleManagementPolicyRule {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Not implemented. Defines details of scope that's targeted by role management policy rule. The details can include the principal type, the role assignment type, and actions affecting a role. Supports $filter (eq, ne). */
    public target?: UnifiedRoleManagementPolicyRuleTarget | undefined;
    /**
     * Instantiates a new unifiedRoleManagementPolicyRule and sets the default values.
     * @param unifiedRoleManagementPolicyRuleParameterValue 
     */
    public constructor(unifiedRoleManagementPolicyRuleParameterValue?: UnifiedRoleManagementPolicyRule | undefined) {
        super(unifiedRoleManagementPolicyRuleParameterValue);
        this.additionalData = unifiedRoleManagementPolicyRuleParameterValue?.additionalData ? unifiedRoleManagementPolicyRuleParameterValue?.additionalData! : {};
        this.target = unifiedRoleManagementPolicyRuleParameterValue?.target instanceof UnifiedRoleManagementPolicyRuleTargetImpl? unifiedRoleManagementPolicyRuleParameterValue?.target:new UnifiedRoleManagementPolicyRuleTargetImpl(unifiedRoleManagementPolicyRuleParameterValue?.target);
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
        writer.writeAdditionalData(this.additionalData);
    };
}
