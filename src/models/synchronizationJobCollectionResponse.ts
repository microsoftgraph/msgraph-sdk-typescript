import type {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import type {SynchronizationJob} from './synchronizationJob';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SynchronizationJobCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: SynchronizationJob[] | undefined;
}
