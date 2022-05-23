import {AccessReviewNotificationRecipientItem} from './accessReviewNotificationRecipientItem';
import {AccessReviewNotificationRecipientScope} from './accessReviewNotificationRecipientScope';
import {createAccessReviewNotificationRecipientScopeFromDiscriminatorValue} from './createAccessReviewNotificationRecipientScopeFromDiscriminatorValue';
import {AccessReviewNotificationRecipientScopeImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessReviewNotificationRecipientItemImpl implements AccessReviewNotificationRecipientItem, AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Determines the recipient of the notification email. */
    public notificationRecipientScope?: AccessReviewNotificationRecipientScope | undefined;
    /** Indicates the type of access review email to be sent. Supported template type is CompletedAdditionalRecipients which sends review completion notifications to the recipients. */
    public notificationTemplateType?: string | undefined;
    /**
     * Instantiates a new accessReviewNotificationRecipientItem and sets the default values.
     * @param accessReviewNotificationRecipientItemParameterValue 
     */
    public constructor(accessReviewNotificationRecipientItemParameterValue?: AccessReviewNotificationRecipientItem | undefined) {
        this.additionalData = accessReviewNotificationRecipientItemParameterValue?.additionalData ? accessReviewNotificationRecipientItemParameterValue?.additionalData! : {}
        this.notificationRecipientScope = accessReviewNotificationRecipientItemParameterValue?.notificationRecipientScope ;
        this.notificationTemplateType = accessReviewNotificationRecipientItemParameterValue?.notificationTemplateType ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.notificationRecipientScope){
        writer.writeObjectValue<AccessReviewNotificationRecipientScopeImpl>("notificationRecipientScope", new AccessReviewNotificationRecipientScopeImpl(this.notificationRecipientScope));
        }
        if(this.notificationTemplateType){
        writer.writeStringValue("notificationTemplateType", this.notificationTemplateType);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
