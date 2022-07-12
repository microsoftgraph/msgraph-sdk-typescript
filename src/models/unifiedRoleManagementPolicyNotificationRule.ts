import {UnifiedRoleManagementPolicyRule} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UnifiedRoleManagementPolicyNotificationRule extends UnifiedRoleManagementPolicyRule implements Parsable {
    /** Indicates whether a default recipient will receive the notification email. */
    private _isDefaultRecipientsEnabled?: boolean | undefined;
    /** The level of notification. The possible values are None, Critical, All. */
    private _notificationLevel?: string | undefined;
    /** The list of recipients of the email notifications. */
    private _notificationRecipients?: string[] | undefined;
    /** The type of notification. Only Email is supported. */
    private _notificationType?: string | undefined;
    /** The type of recipient of the notification. The possible values are Requestor, Approver, Admin. */
    private _recipientType?: string | undefined;
    /**
     * Instantiates a new UnifiedRoleManagementPolicyNotificationRule and sets the default values.
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
            "isDefaultRecipientsEnabled": n => { this.isDefaultRecipientsEnabled = n.getBooleanValue(); },
            "notificationLevel": n => { this.notificationLevel = n.getStringValue(); },
            "notificationRecipients": n => { this.notificationRecipients = n.getCollectionOfPrimitiveValues<string>(); },
            "notificationType": n => { this.notificationType = n.getStringValue(); },
            "recipientType": n => { this.recipientType = n.getStringValue(); },
        };
    };
    /**
     * Gets the isDefaultRecipientsEnabled property value. Indicates whether a default recipient will receive the notification email.
     * @returns a boolean
     */
    public get isDefaultRecipientsEnabled() {
        return this._isDefaultRecipientsEnabled;
    };
    /**
     * Sets the isDefaultRecipientsEnabled property value. Indicates whether a default recipient will receive the notification email.
     * @param value Value to set for the isDefaultRecipientsEnabled property.
     */
    public set isDefaultRecipientsEnabled(value: boolean | undefined) {
        this._isDefaultRecipientsEnabled = value;
    };
    /**
     * Gets the notificationLevel property value. The level of notification. The possible values are None, Critical, All.
     * @returns a string
     */
    public get notificationLevel() {
        return this._notificationLevel;
    };
    /**
     * Sets the notificationLevel property value. The level of notification. The possible values are None, Critical, All.
     * @param value Value to set for the notificationLevel property.
     */
    public set notificationLevel(value: string | undefined) {
        this._notificationLevel = value;
    };
    /**
     * Gets the notificationRecipients property value. The list of recipients of the email notifications.
     * @returns a string
     */
    public get notificationRecipients() {
        return this._notificationRecipients;
    };
    /**
     * Sets the notificationRecipients property value. The list of recipients of the email notifications.
     * @param value Value to set for the notificationRecipients property.
     */
    public set notificationRecipients(value: string[] | undefined) {
        this._notificationRecipients = value;
    };
    /**
     * Gets the notificationType property value. The type of notification. Only Email is supported.
     * @returns a string
     */
    public get notificationType() {
        return this._notificationType;
    };
    /**
     * Sets the notificationType property value. The type of notification. Only Email is supported.
     * @param value Value to set for the notificationType property.
     */
    public set notificationType(value: string | undefined) {
        this._notificationType = value;
    };
    /**
     * Gets the recipientType property value. The type of recipient of the notification. The possible values are Requestor, Approver, Admin.
     * @returns a string
     */
    public get recipientType() {
        return this._recipientType;
    };
    /**
     * Sets the recipientType property value. The type of recipient of the notification. The possible values are Requestor, Approver, Admin.
     * @param value Value to set for the recipientType property.
     */
    public set recipientType(value: string | undefined) {
        this._recipientType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeBooleanValue("isDefaultRecipientsEnabled", this.isDefaultRecipientsEnabled);
        writer.writeStringValue("notificationLevel", this.notificationLevel);
        writer.writeCollectionOfPrimitiveValues<string>("notificationRecipients", this.notificationRecipients);
        writer.writeStringValue("notificationType", this.notificationType);
        writer.writeStringValue("recipientType", this.recipientType);
    };
}
