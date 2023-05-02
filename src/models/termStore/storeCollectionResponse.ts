import {BaseCollectionPaginationCountResponse} from '../baseCollectionPaginationCountResponse';
import {Store} from './store';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface StoreCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: Store[] | undefined;
}
