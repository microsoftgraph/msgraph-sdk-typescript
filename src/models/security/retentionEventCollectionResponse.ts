import {BaseCollectionPaginationCountResponse} from '../baseCollectionPaginationCountResponse';
import {RetentionEvent} from './retentionEvent';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface RetentionEventCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: RetentionEvent[] | undefined;
}
