import { type BaseCollectionPaginationCountResponse } from '../baseCollectionPaginationCountResponse';
import { type RetentionEventType } from './retentionEventType';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface RetentionEventTypeCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: RetentionEventType[] | undefined;
}
