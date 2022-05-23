import {createNotificationMessageTemplateFromDiscriminatorValue} from './createNotificationMessageTemplateFromDiscriminatorValue';
import {NotificationMessageTemplateImpl} from './index';
import {NotificationMessageTemplate} from './notificationMessageTemplate';
import {NotificationMessageTemplateCollectionResponse} from './notificationMessageTemplateCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class NotificationMessageTemplateCollectionResponseImpl implements AdditionalDataHolder, NotificationMessageTemplateCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: NotificationMessageTemplate[] | undefined;
    /**
     * Instantiates a new NotificationMessageTemplateCollectionResponse and sets the default values.
     * @param notificationMessageTemplateCollectionResponseParameterValue 
     */
    public constructor(notificationMessageTemplateCollectionResponseParameterValue?: NotificationMessageTemplateCollectionResponse | undefined) {
        this.additionalData = notificationMessageTemplateCollectionResponseParameterValue?.additionalData ? notificationMessageTemplateCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = notificationMessageTemplateCollectionResponseParameterValue?.nextLink ;
        this.value = notificationMessageTemplateCollectionResponseParameterValue?.value ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.nextLink){
        writer.writeStringValue("@odata.nextLink", this.nextLink);
        }
        if(this.value && this.value.length != 0){        const valueArrValue: NotificationMessageTemplateImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new NotificationMessageTemplateImpl(element));});
        writer.writeCollectionOfObjectValues<NotificationMessageTemplateImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
