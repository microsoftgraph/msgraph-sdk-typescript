import { type NotificationMessageTemplate } from './notificationMessageTemplate';
import { type NotificationMessageTemplateCollectionResponse } from './notificationMessageTemplateCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeNotificationMessageTemplate } from './serializeNotificationMessageTemplate';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeNotificationMessageTemplateCollectionResponse(writer: SerializationWriter, notificationMessageTemplateCollectionResponse: NotificationMessageTemplateCollectionResponse | undefined = {} as NotificationMessageTemplateCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, notificationMessageTemplateCollectionResponse)
        writer.writeCollectionOfObjectValues<NotificationMessageTemplate>("value", notificationMessageTemplateCollectionResponse.value, serializeNotificationMessageTemplate);
}
