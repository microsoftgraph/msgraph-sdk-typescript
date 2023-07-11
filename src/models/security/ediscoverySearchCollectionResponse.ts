import {BaseCollectionPaginationCountResponse} from '../baseCollectionPaginationCountResponse';
import {EdiscoverySearch} from './ediscoverySearch';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EdiscoverySearchCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: EdiscoverySearch[] | undefined;
}
