import type {BaseCollectionPaginationCountResponse} from '../baseCollectionPaginationCountResponse';
import type {DataSource} from './dataSource';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DataSourceCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: DataSource[] | undefined;
}
