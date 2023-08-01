import type {NotificationMessageTemplate} from './notificationMessageTemplate';
import type {NotificationMessageTemplateCollectionResponse} from './notificationMessageTemplateCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeNotificationMessageTemplate} from './serializeNotificationMessageTemplate';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeNotificationMessageTemplateCollectionResponse(writer: SerializationWriter, notificationMessageTemplateCollectionResponse: NotificationMessageTemplateCollectionResponse | undefined = {} as NotificationMessageTemplateCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, notificationMessageTemplateCollectionResponse)
        writer.writeCollectionOfObjectValues<NotificationMessageTemplate>("value", notificationMessageTemplateCollectionResponse.value, serializeNotificationMessageTemplate);
}
