import { type BaseCollectionPaginationCountResponse } from '../baseCollectionPaginationCountResponse';
import { type RetentionEvent } from './retentionEvent';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface RetentionEventCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: RetentionEvent[] | undefined;
}
