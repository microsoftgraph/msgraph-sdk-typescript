import type {BaseCollectionPaginationCountResponse} from '../baseCollectionPaginationCountResponse';
import type {EdiscoveryNoncustodialDataSource} from './ediscoveryNoncustodialDataSource';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EdiscoveryNoncustodialDataSourceCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: EdiscoveryNoncustodialDataSource[] | undefined;
}
