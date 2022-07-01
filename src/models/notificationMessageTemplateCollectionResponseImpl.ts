import {createNotificationMessageTemplateFromDiscriminatorValue} from './createNotificationMessageTemplateFromDiscriminatorValue';
import {NotificationMessageTemplateImpl} from './index';
import {NotificationMessageTemplate} from './notificationMessageTemplate';
import {NotificationMessageTemplateCollectionResponse} from './notificationMessageTemplateCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class NotificationMessageTemplateCollectionResponseImpl implements NotificationMessageTemplateCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The nextLink property */
    private _nextLink?: string | undefined;
    /** The value property */
    private _value?: NotificationMessageTemplate[] | undefined;
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
     * Instantiates a new NotificationMessageTemplateCollectionResponse and sets the default values.
     * @param notificationMessageTemplateCollectionResponseParameterValue 
     */
    public constructor(notificationMessageTemplateCollectionResponseParameterValue?: NotificationMessageTemplateCollectionResponse | undefined) {
        this._additionalData = notificationMessageTemplateCollectionResponseParameterValue?.additionalData ? notificationMessageTemplateCollectionResponseParameterValue?.additionalData! : {};
        this._nextLink = notificationMessageTemplateCollectionResponseParameterValue?.nextLink;
        this._value = notificationMessageTemplateCollectionResponseParameterValue?.value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<NotificationMessageTemplateImpl>(createNotificationMessageTemplateFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the @odata.nextLink property value. The nextLink property
     * @returns a string
     */
    public get nextLink() {
        return this._nextLink;
    };
    /**
     * Sets the @odata.nextLink property value. The nextLink property
     * @param value Value to set for the nextLink property.
     */
    public set nextLink(value: string | undefined) {
        if(value) {
            this._nextLink = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.nextLink){
            writer.writeStringValue("@odata.nextLink", this.nextLink);
        }
        if(this.value && this.value.length != 0){        const valueArrValue: NotificationMessageTemplateImpl[] = [];
        this.value?.forEach(element => {
            valueArrValue.push((element instanceof NotificationMessageTemplateImpl? element as NotificationMessageTemplateImpl:new NotificationMessageTemplateImpl(element)));
        });
            writer.writeCollectionOfObjectValues<NotificationMessageTemplateImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the value property value. The value property
     * @returns a NotificationMessageTemplateInterface
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: NotificationMessageTemplate[] | undefined) {
        if(value) {
            const valueArrValue: NotificationMessageTemplateImpl[] = [];
            this.value?.forEach(element => {
                valueArrValue.push((element instanceof NotificationMessageTemplateImpl? element as NotificationMessageTemplateImpl:new NotificationMessageTemplateImpl(element)));
            });
            this._value = valueArrValue;
        }
    };
}
