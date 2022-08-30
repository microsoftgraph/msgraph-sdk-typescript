import {createAccessReviewNotificationRecipientScopeFromDiscriminatorValue} from './createAccessReviewNotificationRecipientScopeFromDiscriminatorValue';
import {AccessReviewNotificationRecipientScope} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessReviewNotificationRecipientItem implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Determines the recipient of the notification email. */
    private _notificationRecipientScope?: AccessReviewNotificationRecipientScope | undefined;
    /** Indicates the type of access review email to be sent. Supported template type is CompletedAdditionalRecipients, which sends review completion notifications to the recipients. */
    private _notificationTemplateType?: string | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
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
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Instantiates a new accessReviewNotificationRecipientItem and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
        this.odataType = "#microsoft.graph.accessReviewNotificationRecipientItem";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "notificationRecipientScope": n => { this.notificationRecipientScope = n.getObjectValue<AccessReviewNotificationRecipientScope>(createAccessReviewNotificationRecipientScopeFromDiscriminatorValue); },
            "notificationTemplateType": n => { this.notificationTemplateType = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
        };
    };
    /**
     * Gets the notificationRecipientScope property value. Determines the recipient of the notification email.
     * @returns a accessReviewNotificationRecipientScope
     */
    public get notificationRecipientScope() {
        return this._notificationRecipientScope;
    };
    /**
     * Sets the notificationRecipientScope property value. Determines the recipient of the notification email.
     * @param value Value to set for the notificationRecipientScope property.
     */
    public set notificationRecipientScope(value: AccessReviewNotificationRecipientScope | undefined) {
        this._notificationRecipientScope = value;
    };
    /**
     * Gets the notificationTemplateType property value. Indicates the type of access review email to be sent. Supported template type is CompletedAdditionalRecipients, which sends review completion notifications to the recipients.
     * @returns a string
     */
    public get notificationTemplateType() {
        return this._notificationTemplateType;
    };
    /**
     * Sets the notificationTemplateType property value. Indicates the type of access review email to be sent. Supported template type is CompletedAdditionalRecipients, which sends review completion notifications to the recipients.
     * @param value Value to set for the notificationTemplateType property.
     */
    public set notificationTemplateType(value: string | undefined) {
        this._notificationTemplateType = value;
    };
    /**
     * Gets the @odata.type property value. The OdataType property
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. The OdataType property
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<AccessReviewNotificationRecipientScope>("notificationRecipientScope", this.notificationRecipientScope);
        writer.writeStringValue("notificationTemplateType", this.notificationTemplateType);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeAdditionalData(this.additionalData);
    };
}
