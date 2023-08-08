import {createNotificationMessageTemplateFromDiscriminatorValue} from './createNotificationMessageTemplateFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import type {NotificationMessageTemplate} from './notificationMessageTemplate';
import type {NotificationMessageTemplateCollectionResponse} from './notificationMessageTemplateCollectionResponse';
import {serializeNotificationMessageTemplate} from './serializeNotificationMessageTemplate';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoNotificationMessageTemplateCollectionResponse(notificationMessageTemplateCollectionResponse: NotificationMessageTemplateCollectionResponse | undefined = {} as NotificationMessageTemplateCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(notificationMessageTemplateCollectionResponse),
        "value": n => { notificationMessageTemplateCollectionResponse.value = n.getCollectionOfObjectValues<NotificationMessageTemplate>(createNotificationMessageTemplateFromDiscriminatorValue); },
    }
}
