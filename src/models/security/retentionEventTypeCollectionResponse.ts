import {BaseCollectionPaginationCountResponse} from '../baseCollectionPaginationCountResponse';
import {RetentionEventType} from './retentionEventType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface RetentionEventTypeCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: RetentionEventType[] | undefined;
}
