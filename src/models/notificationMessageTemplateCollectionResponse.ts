import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {NotificationMessageTemplate} from './notificationMessageTemplate';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface NotificationMessageTemplateCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: NotificationMessageTemplate[] | undefined;
}
