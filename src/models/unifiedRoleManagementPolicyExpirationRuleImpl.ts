import {UnifiedRoleManagementPolicyRuleImpl} from './index';
import {UnifiedRoleManagementPolicyExpirationRule} from './unifiedRoleManagementPolicyExpirationRule';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UnifiedRoleManagementPolicyExpirationRuleImpl extends UnifiedRoleManagementPolicyRuleImpl implements UnifiedRoleManagementPolicyExpirationRule {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Indicates whether expiration is required or if it's a permanently active assignment or eligibility. */
    public isExpirationRequired?: boolean | undefined;
    /** The maximum duration allowed for eligibility or assignment which is not permanent. Required when isExpirationRequired is true. */
    public maximumDuration?: Duration | undefined;
    /**
     * Instantiates a new UnifiedRoleManagementPolicyExpirationRule and sets the default values.
     * @param unifiedRoleManagementPolicyExpirationRuleParameterValue 
     */
    public constructor(unifiedRoleManagementPolicyExpirationRuleParameterValue?: UnifiedRoleManagementPolicyExpirationRule | undefined) {
        super(unifiedRoleManagementPolicyExpirationRuleParameterValue);
        this.additionalData = unifiedRoleManagementPolicyExpirationRuleParameterValue?.additionalData ? unifiedRoleManagementPolicyExpirationRuleParameterValue?.additionalData! : {};
        this.isExpirationRequired = unifiedRoleManagementPolicyExpirationRuleParameterValue?.isExpirationRequired;
        this.maximumDuration = unifiedRoleManagementPolicyExpirationRuleParameterValue?.maximumDuration;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "isExpirationRequired": n => { this.isExpirationRequired = n.getBooleanValue(); },
            "maximumDuration": n => { this.maximumDuration = n.getDurationValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.isExpirationRequired){
            writer.writeBooleanValue("isExpirationRequired", this.isExpirationRequired);
        }
        if(this.maximumDuration){
            writer.writeDurationValue("maximumDuration", this.maximumDuration);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
