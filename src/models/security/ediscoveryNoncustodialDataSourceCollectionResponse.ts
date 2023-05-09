import {BaseCollectionPaginationCountResponse} from '../baseCollectionPaginationCountResponse';
import {EdiscoveryNoncustodialDataSource} from './ediscoveryNoncustodialDataSource';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EdiscoveryNoncustodialDataSourceCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: EdiscoveryNoncustodialDataSource[] | undefined;
}
