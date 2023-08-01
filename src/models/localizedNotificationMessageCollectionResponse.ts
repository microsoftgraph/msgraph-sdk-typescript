import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {LocalizedNotificationMessage} from './localizedNotificationMessage';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface LocalizedNotificationMessageCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: LocalizedNotificationMessage[] | undefined;
}
