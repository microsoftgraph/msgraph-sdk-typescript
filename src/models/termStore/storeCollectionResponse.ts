import type {BaseCollectionPaginationCountResponse} from '../baseCollectionPaginationCountResponse';
import type {Store} from './store';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface StoreCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Store[] | undefined;
}
