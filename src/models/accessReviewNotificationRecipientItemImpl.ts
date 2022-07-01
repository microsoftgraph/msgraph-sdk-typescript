import {AccessReviewNotificationRecipientItem} from './accessReviewNotificationRecipientItem';
import {AccessReviewNotificationRecipientScope} from './accessReviewNotificationRecipientScope';
import {createAccessReviewNotificationRecipientScopeFromDiscriminatorValue} from './createAccessReviewNotificationRecipientScopeFromDiscriminatorValue';
import {AccessReviewNotificationRecipientScopeImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessReviewNotificationRecipientItemImpl implements AccessReviewNotificationRecipientItem {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** Determines the recipient of the notification email. */
    private _notificationRecipientScope?: AccessReviewNotificationRecipientScope | undefined;
    /** Indicates the type of access review email to be sent. Supported template type is CompletedAdditionalRecipients which sends review completion notifications to the recipients. */
    private _notificationTemplateType?: string | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new accessReviewNotificationRecipientItem and sets the default values.
     * @param accessReviewNotificationRecipientItemParameterValue 
     */
    public constructor(accessReviewNotificationRecipientItemParameterValue?: AccessReviewNotificationRecipientItem | undefined) {
        this._additionalData = accessReviewNotificationRecipientItemParameterValue?.additionalData ? accessReviewNotificationRecipientItemParameterValue?.additionalData! : {};
        this._notificationRecipientScope = accessReviewNotificationRecipientItemParameterValue?.notificationRecipientScope;
        this._notificationTemplateType = accessReviewNotificationRecipientItemParameterValue?.notificationTemplateType;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "notificationRecipientScope": n => { this.notificationRecipientScope = n.getObjectValue<AccessReviewNotificationRecipientScopeImpl>(createAccessReviewNotificationRecipientScopeFromDiscriminatorValue); },
            "notificationTemplateType": n => { this.notificationTemplateType = n.getStringValue(); },
        };
    };
    /**
     * Gets the notificationRecipientScope property value. Determines the recipient of the notification email.
     * @returns a AccessReviewNotificationRecipientScopeInterface
     */
    public get notificationRecipientScope() {
        return this._notificationRecipientScope;
    };
    /**
     * Sets the notificationRecipientScope property value. Determines the recipient of the notification email.
     * @param value Value to set for the notificationRecipientScope property.
     */
    public set notificationRecipientScope(value: AccessReviewNotificationRecipientScope | undefined) {
        if(value) {
            this._notificationRecipientScope = value instanceof AccessReviewNotificationRecipientScopeImpl? value : new AccessReviewNotificationRecipientScopeImpl(value);
        }
    };
    /**
     * Gets the notificationTemplateType property value. Indicates the type of access review email to be sent. Supported template type is CompletedAdditionalRecipients which sends review completion notifications to the recipients.
     * @returns a string
     */
    public get notificationTemplateType() {
        return this._notificationTemplateType;
    };
    /**
     * Sets the notificationTemplateType property value. Indicates the type of access review email to be sent. Supported template type is CompletedAdditionalRecipients which sends review completion notifications to the recipients.
     * @param value Value to set for the notificationTemplateType property.
     */
    public set notificationTemplateType(value: string | undefined) {
        if(value) {
            this._notificationTemplateType = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.notificationRecipientScope){
            writer.writeObjectValue<AccessReviewNotificationRecipientScopeImpl>("notificationRecipientScope", (!this.notificationRecipientScope || this.notificationRecipientScope instanceof AccessReviewNotificationRecipientScopeImpl? this.notificationRecipientScope : new AccessReviewNotificationRecipientScopeImpl(this.notificationRecipientScope)));
        }
        if(this.notificationTemplateType){
            writer.writeStringValue("notificationTemplateType", this.notificationTemplateType);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
