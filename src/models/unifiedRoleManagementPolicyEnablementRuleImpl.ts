import {UnifiedRoleManagementPolicyRuleImpl} from './index';
import {UnifiedRoleManagementPolicyEnablementRule} from './unifiedRoleManagementPolicyEnablementRule';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UnifiedRoleManagementPolicyEnablementRuleImpl extends UnifiedRoleManagementPolicyRuleImpl implements UnifiedRoleManagementPolicyEnablementRule {
    /** The collection of rules that are enabled for this policy rule. For example, MultiFactorAuthentication, Ticketing, and Justification. */
    public enabledRules?: string[] | undefined;
    /**
     * Instantiates a new UnifiedRoleManagementPolicyEnablementRule and sets the default values.
     * @param unifiedRoleManagementPolicyEnablementRuleParameterValue 
     */
    public constructor(unifiedRoleManagementPolicyEnablementRuleParameterValue?: UnifiedRoleManagementPolicyEnablementRule | undefined) {
        super(unifiedRoleManagementPolicyEnablementRuleParameterValue);
        this.enabledRules = unifiedRoleManagementPolicyEnablementRuleParameterValue?.enabledRules;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "enabledRules": n => { this.enabledRules = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.enabledRules){
            writer.writeCollectionOfPrimitiveValues<string>("enabledRules", this.enabledRules);
        }
    };
}
