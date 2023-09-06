import { type BaseCollectionPaginationCountResponse } from '../baseCollectionPaginationCountResponse';
import { type EdiscoverySearch } from './ediscoverySearch';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface EdiscoverySearchCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: EdiscoverySearch[] | undefined;
}
