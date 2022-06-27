import {UnifiedRoleManagementPolicyRuleImpl} from './index';
import {UnifiedRoleManagementPolicyNotificationRule} from './unifiedRoleManagementPolicyNotificationRule';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UnifiedRoleManagementPolicyNotificationRuleImpl extends UnifiedRoleManagementPolicyRuleImpl implements UnifiedRoleManagementPolicyNotificationRule {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Indicates whether a default recipient will receive the notification email. */
    public isDefaultRecipientsEnabled?: boolean | undefined;
    /** The level of notification. The possible values are None, Critical, All. */
    public notificationLevel?: string | undefined;
    /** The list of recipients of the email notifications. */
    public notificationRecipients?: string[] | undefined;
    /** The type of notification. Only Email is supported. */
    public notificationType?: string | undefined;
    /** The type of recipient of the notification. The possible values are Requestor, Approver, Admin. */
    public recipientType?: string | undefined;
    /**
     * Instantiates a new UnifiedRoleManagementPolicyNotificationRule and sets the default values.
     * @param unifiedRoleManagementPolicyNotificationRuleParameterValue 
     */
    public constructor(unifiedRoleManagementPolicyNotificationRuleParameterValue?: UnifiedRoleManagementPolicyNotificationRule | undefined) {
        super(unifiedRoleManagementPolicyNotificationRuleParameterValue);
        this.additionalData = unifiedRoleManagementPolicyNotificationRuleParameterValue?.additionalData ? unifiedRoleManagementPolicyNotificationRuleParameterValue?.additionalData! : {};
        this.isDefaultRecipientsEnabled = unifiedRoleManagementPolicyNotificationRuleParameterValue?.isDefaultRecipientsEnabled;
        this.notificationLevel = unifiedRoleManagementPolicyNotificationRuleParameterValue?.notificationLevel;
        this.notificationRecipients = unifiedRoleManagementPolicyNotificationRuleParameterValue?.notificationRecipients;
        this.notificationType = unifiedRoleManagementPolicyNotificationRuleParameterValue?.notificationType;
        this.recipientType = unifiedRoleManagementPolicyNotificationRuleParameterValue?.recipientType;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "isDefaultRecipientsEnabled": n => { this.isDefaultRecipientsEnabled = n.getBooleanValue(); },
            "notificationLevel": n => { this.notificationLevel = n.getStringValue(); },
            "notificationRecipients": n => { this.notificationRecipients = n.getCollectionOfPrimitiveValues<string>(); },
            "notificationType": n => { this.notificationType = n.getStringValue(); },
            "recipientType": n => { this.recipientType = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.isDefaultRecipientsEnabled){
            writer.writeBooleanValue("isDefaultRecipientsEnabled", this.isDefaultRecipientsEnabled);
        }
        if(this.notificationLevel){
            writer.writeStringValue("notificationLevel", this.notificationLevel);
        }
        if(this.notificationRecipients){
            writer.writeCollectionOfPrimitiveValues<string>("notificationRecipients", this.notificationRecipients);
        }
        if(this.notificationType){
            writer.writeStringValue("notificationType", this.notificationType);
        }
        if(this.recipientType){
            writer.writeStringValue("recipientType", this.recipientType);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
