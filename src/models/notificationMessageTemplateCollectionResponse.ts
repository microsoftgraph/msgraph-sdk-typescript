import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {NotificationMessageTemplate} from './notificationMessageTemplate';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface NotificationMessageTemplateCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: NotificationMessageTemplate[] | undefined;
}
