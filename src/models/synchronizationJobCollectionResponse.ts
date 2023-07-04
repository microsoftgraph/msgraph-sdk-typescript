import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {SynchronizationJob} from './synchronizationJob';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SynchronizationJobCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: SynchronizationJob[] | undefined;
}
