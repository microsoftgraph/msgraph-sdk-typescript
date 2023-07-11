import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {LocalizedNotificationMessage} from './localizedNotificationMessage';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface LocalizedNotificationMessageCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: LocalizedNotificationMessage[] | undefined;
}
