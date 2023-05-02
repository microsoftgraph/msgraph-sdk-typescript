import {createNotificationMessageTemplateFromDiscriminatorValue} from './createNotificationMessageTemplateFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {NotificationMessageTemplate} from './notificationMessageTemplate';
import {NotificationMessageTemplateCollectionResponse} from './notificationMessageTemplateCollectionResponse';
import {serializeNotificationMessageTemplate} from './serializeNotificationMessageTemplate';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoNotificationMessageTemplateCollectionResponse(notificationMessageTemplateCollectionResponse: NotificationMessageTemplateCollectionResponse | undefined = {} as NotificationMessageTemplateCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(notificationMessageTemplateCollectionResponse),
        "value": n => { notificationMessageTemplateCollectionResponse.value = n.getCollectionOfObjectValues<NotificationMessageTemplate>(createNotificationMessageTemplateFromDiscriminatorValue); },
    }
}
